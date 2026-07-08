import * as THREE from 'three'
import { createWorld, makeFoundMarker, TARGET_TYPES } from './world.js'
import { DroneController } from './drone.js'

const GAME_TIME = 60      // 秒
const MARK_RANGE = 45     // 可標記的最大距離（公尺）
const MARK_COOLDOWN = 0.35

// ---------- 場景 ----------
const app = document.getElementById('app')
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xaed4ec)
scene.fog = new THREE.Fog(0xaed4ec, 170, 480)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600)

const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x8a8f78, 1.0)
scene.add(hemi)
const sun = new THREE.DirectionalLight(0xfff2df, 2.4)
sun.position.set(130, 190, 90)
sun.castShadow = true
sun.shadow.mapSize.set(2048, 2048)
sun.shadow.camera.left = -160
sun.shadow.camera.right = 160
sun.shadow.camera.top = 160
sun.shadow.camera.bottom = -160
sun.shadow.camera.far = 500
scene.add(sun)

const { colliders, inspectables, targets, waterMeshes } = createWorld(scene)
const drone = new DroneController(camera)
drone.reset(new THREE.Vector3(0, 18, 30))

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// ---------- UI 元素 ----------
const $ = (id) => document.getElementById(id)
const ui = {
  hud: $('hud'), timer: $('timer'), score: $('score'), found: $('found'),
  crosshair: $('crosshair'), hint: $('hint'), feed: $('feed'), alt: $('alt'),
  startOverlay: $('startOverlay'), pauseOverlay: $('pauseOverlay'), endOverlay: $('endOverlay'),
  startBtn: $('startBtn'), resumeBtn: $('resumeBtn'), restartBtn: $('restartBtn'),
  finalScore: $('finalScore'), rank: $('rank'), breakdown: $('breakdown'),
}

// ---------- 遊戲狀態 ----------
let state = 'start'   // start | playing | paused | ended
let timeLeft = GAME_TIME
let score = 0
let foundCount = 0
let markCooldown = 0

function addFeed(text, bad = false) {
  const el = document.createElement('div')
  el.className = 'feed-item' + (bad ? ' bad' : '')
  el.textContent = text
  ui.feed.appendChild(el)
  setTimeout(() => el.remove(), 4200)
}

function updateHUD() {
  ui.timer.textContent = timeLeft.toFixed(1)
  ui.timer.classList.toggle('urgent', timeLeft <= 10)
  ui.score.textContent = score
  ui.found.textContent = `${foundCount} / ${targets.length}`
  ui.alt.textContent = `高度 ${camera.position.y.toFixed(0)} m`
}

// ---------- 指標鎖定與流程 ----------
function lockPointer() {
  renderer.domElement.requestPointerLock()
}

ui.startBtn.addEventListener('click', () => {
  ui.startOverlay.classList.add('hidden')
  ui.hud.classList.remove('hidden')
  state = 'playing'
  lockPointer()
})

ui.resumeBtn.addEventListener('click', () => {
  ui.pauseOverlay.classList.add('hidden')
  state = 'playing'
  lockPointer()
})

ui.restartBtn.addEventListener('click', () => location.reload())

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement
  drone.enabled = locked
  if (!locked && state === 'playing') {
    state = 'paused'
    ui.pauseOverlay.classList.remove('hidden')
  }
})

// ---------- 標記（點擊計分）----------
const raycaster = new THREE.Raycaster()
const CENTER = new THREE.Vector2(0, 0)

function castAtCrosshair() {
  raycaster.setFromCamera(CENTER, camera)
  const active = inspectables.filter((m) => !m.userData.inspect.done)
  const hits = raycaster.intersectObjects(active, false)
  return hits.length > 0 ? hits[0] : null
}

window.addEventListener('mousedown', (e) => {
  if (state !== 'playing' || e.button !== 0 || markCooldown > 0) return
  if (document.pointerLockElement !== renderer.domElement) return
  markCooldown = MARK_COOLDOWN

  const hit = castAtCrosshair()
  if (!hit) return
  if (hit.distance > MARK_RANGE) {
    addFeed('距離太遠，飛近一點再標記！', true)
    return
  }

  const data = hit.object.userData.inspect
  data.done = true
  const worldPos = new THREE.Vector3()
  data.group.getWorldPosition(worldPos)

  if (data.kind === 'target') {
    data.found = true
    score += data.points
    foundCount++
    addFeed(`✔ 發現${data.label}！ +${data.points} 分`)
    const marker = makeFoundMarker(true)
    marker.position.copy(worldPos)
    scene.add(marker)
    if (foundCount === targets.length) {
      const bonus = Math.floor(timeLeft * 2)
      score += bonus
      addFeed(`🏆 全數找到！剩餘時間獎勵 +${bonus} 分`)
      endGame()
    }
  } else {
    score = Math.max(0, score - 5)
    addFeed(`✘ 誤報！這裡沒有積水 −5 分`, true)
    const marker = makeFoundMarker(false)
    marker.position.copy(worldPos)
    scene.add(marker)
  }
  updateHUD()
})

// ---------- 結束 ----------
function endGame() {
  if (state === 'ended') return
  state = 'ended'
  document.exitPointerLock()
  ui.hud.classList.add('hidden')
  ui.pauseOverlay.classList.add('hidden')

  ui.finalScore.textContent = `${score} 分`
  ui.rank.textContent = rankFor(score)

  const lines = []
  for (const [type, info] of Object.entries(TARGET_TYPES)) {
    const all = targets.filter((t) => t.type === type)
    const got = all.filter((t) => t.found)
    lines.push(`${info.label}（+${info.points}）：找到 ${got.length} / ${all.length} 處`)
  }
  lines.push(`合計發現積水：${foundCount} / ${targets.length} 處`)
  ui.breakdown.innerHTML = lines.join('<br>')
  ui.endOverlay.classList.remove('hidden')
}

function rankFor(s) {
  if (s >= 250) return '🏅 傳說巡檢無人機！台南市長頒獎表揚！'
  if (s >= 180) return '🥇 金牌巡檢員：登革熱病媒蚊聞風喪膽'
  if (s >= 120) return '🥈 銀牌巡檢員：眼力過人'
  if (s >= 60) return '🥉 銅牌巡檢員：再接再厲'
  return '📋 見習巡檢員：多注意屋頂與空地喔'
}

// ---------- 主迴圈 ----------
const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate)
  const dt = Math.min(clock.getDelta(), 0.05)
  const t = clock.elapsedTime

  // 水面閃爍（找目標的視覺線索）
  waterMeshes.forEach((w, i) => {
    w.material.emissiveIntensity = 0.35 + 0.3 * Math.sin(t * 4 + i * 1.7)
  })

  if (state === 'playing') {
    timeLeft -= dt
    markCooldown = Math.max(0, markCooldown - dt)
    if (timeLeft <= 0) {
      timeLeft = 0
      endGame()
    }
    drone.update(dt, colliders)

    // 準星瞄準提示
    const hit = castAtCrosshair()
    const aiming = hit && hit.distance <= MARK_RANGE
    ui.crosshair.classList.toggle('lock', !!aiming)
    ui.hint.classList.toggle('hidden', !aiming)

    updateHUD()
  }

  renderer.render(scene, camera)
}

updateHUD()
animate()

// 自動化測試用掛鉤
window.__game = { camera, targets, getScore: () => score, getState: () => state }
