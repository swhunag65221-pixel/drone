import * as THREE from 'three'
import { createWorld, makeFoundMarker, makeMissedMarker, makePreviewObject, updateCars, updatePedestrians, updateTraffic, TARGET_TYPES } from './world.js'
import { DroneController } from './drone.js'
import { initGraphics, createSky, createClouds, updateClouds, SKY_HORIZON, TIERS } from './graphics.js'

const GAME_TIME = 120     // 秒
const MARK_RANGE = 45     // 可標記的最大距離（公尺）
const MARK_COOLDOWN = 0.35

// ---------- 場景 ----------
const app = document.getElementById('app')
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
// 電影感色調映射：ACES 曲線壓高光、保留暖色飽和，是與商業產品觀感差距最大的單一開關。
// 下方燈光/背景/水面脈動振幅皆已針對 ACES 重新調校（映射會整體壓暗）。
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.15
renderer.outputColorSpace = THREE.SRGBColorSpace // r152+ 已是預設，明示以供查閱
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
// 霧色＝天空穹頂的地平線色：遠景建築融入天空、看不見世界邊界（大氣感的關鍵）
scene.background = new THREE.Color(SKY_HORIZON)
scene.fog = new THREE.Fog(SKY_HORIZON, 170, 480)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 600)

// 黃金時刻調色：天光偏藍、地面反射光偏暖土色、太陽偏暖
const hemi = new THREE.HemisphereLight(0xd8e8ff, 0x9a8a70, 1.25)
scene.add(hemi)
const sun = new THREE.DirectionalLight(0xffdfb0, 3.2)
sun.position.set(130, 190, 90)
sun.castShadow = true
sun.shadow.mapSize.set(2048, 2048)
sun.shadow.camera.left = -160
sun.shadow.camera.right = 160
sun.shadow.camera.top = 160
sun.shadow.camera.bottom = -160
sun.shadow.camera.far = 500
scene.add(sun)

// 畫質分級（URL/記憶/GPU 偵測；須在第一次 render 前初始化，陰影管線才可完整切換）
const gfx = initGraphics({ renderer, camera, scene, sun })

// 天空穹頂與雲：加在 scene（非 worldGroup），回合重建不受影響
const sky = createSky(sun.position)
scene.add(sky)
const clouds = gfx.flags.clouds ? createClouds() : null
if (clouds) scene.add(clouds)

const worldGroup = new THREE.Group()
scene.add(worldGroup)

let colliders, inspectables, targets, waterMeshes, spawnPoint, cars, pedestrians, traffic, zones, animatedTextures

function disposeWorld() {
  worldGroup.traverse((obj) => {
    obj.geometry?.dispose()
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
    materials.forEach((m) => {
      m?.map?.dispose()
      m?.dispose()
    })
  })
  worldGroup.clear()
}

function buildWorld() {
  disposeWorld()
  ;({ colliders, inspectables, targets, waterMeshes, spawnPoint, cars, pedestrians, traffic, zones, animatedTextures } =
    createWorld(worldGroup, { textureDetail: gfx.flags.textureDetail, anisotropy: gfx.flags.anisotropy }))
}

buildWorld()
const drone = new DroneController(camera)
drone.reset(spawnPoint)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  gfx.applyResize() // 依畫質分級重新套用 pixelRatio（旋轉螢幕/搬移視窗時）
})

// ---------- UI 元素 ----------
const $ = (id) => document.getElementById(id)
const ui = {
  hud: $('hud'), timer: $('timer'), score: $('score'), found: $('found'),
  crosshair: $('crosshair'), hint: $('hint'), feed: $('feed'), alt: $('alt'),
  startOverlay: $('startOverlay'), pauseOverlay: $('pauseOverlay'), endOverlay: $('endOverlay'),
  introOverlay: $('introOverlay'), introGrid: $('introGrid'), introStartBtn: $('introStartBtn'),
  startBtn: $('startBtn'), resumeBtn: $('resumeBtn'), restartBtn: $('restartBtn'),
  reviewBtn: $('reviewBtn'), reviewBanner: $('reviewBanner'),
  finalScore: $('finalScore'), rank: $('rank'), breakdown: $('breakdown'),
}

// ---------- 積水樣態圖鑑（開場介紹） ----------
// 用實際的遊戲 3D 模型渲染縮圖，玩家看到的就是場景中的真實外觀
const INTRO_CARDS = [
  { type: 'tower', hint: '不鏽鋼水塔沒有頂蓋、看得到水面反光的才是目標；有錐形蓋的是誘餌。', where: '大樓屋頂（要飛到上方看）' },
  { type: 'tarp', hint: '藍白條紋帆布蓋著建材堆，帆布凹陷處積水。', where: '工地圍籬內的地面' },
  { type: 'debris', hint: '廢棄雜物堆旁邊的一灘積水。', where: '廢棄空地（雜草堆、鐵皮圍籬內）、公園角落' },
  { type: 'roofGarden', hint: '整片綠化的空中花園，積水藏在花盆、水桶、澆花器等容器裡。', where: '大樓屋頂（整片綠色的那種）' },
  { type: 'gutter', hint: '屋頂邊緣的長條排水槽，落葉堵塞後積水。', where: '透天厝屋頂的四邊' },
  { type: 'container', hint: '水桶、水盆、輪胎、垃圾桶、保麗龍箱裡的積水。', where: '巷弄、騎樓下，也可能在騎樓遮簷上或高低建築之間的屋簷' },
]

const PREVIEW_VIEWS = {
  tower: { pos: [5.5, 6.5, 5.5], look: [0, 3, 0] },
  tarp: { pos: [3.5, 3, 3.5], look: [0, 0.7, 0] },
  debris: { pos: [4, 3.5, 4], look: [0, 0.5, 0] },
  roofGarden: { pos: [5.2, 4.6, 5.2], look: [0, 0.2, 0] },
  gutter: { pos: [3.8, 3.4, 4.4], look: [0, 0.4, 0.6] },
  container: { pos: [2.6, 2.3, 2.6], look: [0, 0.35, 0] },
}

let introBuilt = false
function buildIntroCards() {
  if (introBuilt) return
  introBuilt = true

  const tr = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
  // 圖鑑縮圖與場內外觀必須一致：套用與主 renderer 相同的色調映射
  tr.toneMapping = THREE.ACESFilmicToneMapping
  tr.toneMappingExposure = 1.15
  tr.setSize(220, 150)
  const ts = new THREE.Scene()
  ts.background = new THREE.Color(0xbfdcee)
  ts.add(new THREE.HemisphereLight(0xffffff, 0x8a8f78, 1.1))
  const dl = new THREE.DirectionalLight(0xfff2df, 2.0)
  dl.position.set(4, 6, 3)
  ts.add(dl)
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(7, 24),
    new THREE.MeshStandardMaterial({ color: 0xa89a7e, roughness: 0.95 })
  )
  ground.rotation.x = -Math.PI / 2
  ts.add(ground)
  const tc = new THREE.PerspectiveCamera(45, 220 / 150, 0.1, 60)

  for (const card of INTRO_CARDS) {
    const obj = makePreviewObject(card.type)
    ts.add(obj)
    const v = PREVIEW_VIEWS[card.type]
    tc.position.set(...v.pos)
    tc.lookAt(...v.look)
    tr.render(ts, tc)
    const dataUrl = tr.domElement.toDataURL('image/png')
    ts.remove(obj)

    const info = TARGET_TYPES[card.type]
    const el = document.createElement('div')
    el.className = 'intro-card'
    el.innerHTML = `
      <img alt="${info.label}" src="${dataUrl}">
      <div class="card-body">
        <div class="card-title"><span class="pts p${info.points}">+${info.points}</span>${info.label}</div>
        <div class="card-hint">${card.hint}</div>
        <div class="card-where">📍 ${card.where}</div>
      </div>`
    ui.introGrid.appendChild(el)
  }
  tr.dispose()
}

// ---------- 遊戲狀態 ----------
let state = 'start'   // start | playing | paused | ended | review（結束後自由飛行複盤）
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
  buildIntroCards()
  ui.introOverlay.classList.remove('hidden')
})

ui.introStartBtn.addEventListener('click', () => {
  ui.introOverlay.classList.add('hidden')
  ui.hud.classList.remove('hidden')
  state = 'playing'
  lockPointer()
})

ui.resumeBtn.addEventListener('click', () => {
  ui.pauseOverlay.classList.add('hidden')
  state = 'playing'
  lockPointer()
})

ui.restartBtn.addEventListener('click', () => startNewRound())

// 複盤模式：結束後自由飛行查看未找到的積水（紅色光柱標示）
ui.reviewBtn.addEventListener('click', () => {
  state = 'review'
  ui.endOverlay.classList.add('hidden')
  ui.hud.classList.remove('hidden')
  ui.reviewBanner.classList.remove('hidden')
  lockPointer()
})

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement
  drone.enabled = locked
  if (!locked && state === 'playing') {
    state = 'paused'
    ui.pauseOverlay.classList.remove('hidden')
  }
  // 複盤中按 Esc：返回結算畫面
  if (!locked && state === 'review') {
    state = 'ended'
    ui.reviewBanner.classList.add('hidden')
    ui.hud.classList.add('hidden')
    ui.endOverlay.classList.remove('hidden')
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
    worldGroup.add(marker)
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
    worldGroup.add(marker)
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

  // 用紅色光柱＋類型標籤標示所有未找到的積水，供複盤模式查看
  for (const t of targets) {
    if (t.found) continue
    const marker = makeMissedMarker(`${t.label} +${t.points}`)
    const wp = new THREE.Vector3()
    t.group.getWorldPosition(wp)
    marker.position.copy(wp)
    worldGroup.add(marker)
  }
}

function startNewRound() {
  buildWorld()
  drone.reset(spawnPoint)

  state = 'start'
  timeLeft = GAME_TIME
  score = 0
  foundCount = 0
  markCooldown = 0

  ui.feed.innerHTML = ''
  ui.endOverlay.classList.add('hidden')
  ui.pauseOverlay.classList.add('hidden')
  ui.introOverlay.classList.add('hidden')
  ui.reviewBanner.classList.add('hidden')
  ui.hud.classList.add('hidden')
  ui.startOverlay.classList.remove('hidden')
  updateHUD()
}

function rankFor(s) {
  if (s >= 450) return '🏅 傳說巡檢無人機！台南市長頒獎表揚！'
  if (s >= 320) return '🥇 金牌巡檢員：登革熱病媒蚊聞風喪膽'
  if (s >= 200) return '🥈 銀牌巡檢員：眼力過人'
  if (s >= 100) return '🥉 銅牌巡檢員：再接再厲'
  return '📋 見習巡檢員：多注意屋頂與空地喔'
}

// ---------- 主迴圈 ----------
const clock = new THREE.Clock()

// 視覺驗證掛鉤用：水面脈動參數（Phase A 調校時只需改這裡）、
// 定格模式（?freeze=1 停止車流/行人/號誌，供固定鏡位截圖）、幀率統計
const WATER_BASE = 0.55 // ACES 會壓暗高光：提高脈動基準與振幅讓峰值仍夠亮
const WATER_AMP = 0.5
let waterPhaseOverride = null // null=正常動畫；'max'/'min'=定格在最亮/最暗（ΔLuma 量測用）
const FREEZE = new URLSearchParams(location.search).has('freeze')
const frameTimes = []

function animate() {
  requestAnimationFrame(animate)
  const rawDt = clock.getDelta()
  const dt = Math.min(rawDt, 0.05) // physics 用：低幀率時鉗制，避免無人機穿牆
  const t = clock.elapsedTime

  frameTimes.push(rawDt)
  if (frameTimes.length > 120) frameTimes.shift()

  // 水面閃爍（找目標的視覺線索）
  waterMeshes.forEach((w, i) => {
    w.material.emissiveIntensity =
      waterPhaseOverride === 'max' ? WATER_BASE + WATER_AMP
      : waterPhaseOverride === 'min' ? WATER_BASE - WATER_AMP
      : WATER_BASE + WATER_AMP * Math.sin(t * 4 + i * 1.7)
  })

  // 天空穹頂跟隨攝影機（地平線視覺位置穩定）；雲慢速漂移
  sky.position.set(camera.position.x, 0, camera.position.z)
  if (clouds && !FREEZE) updateClouds(clouds, dt)

  // 動態水波：捲動運河法線貼圖 offset
  for (const a of animatedTextures) a.tex.offset.set(t * a.sx, t * a.sy)

  // 交通號誌、汽車與行人（暫停時凍結；?freeze=1 供視覺驗證定格）
  if (state !== 'paused' && !FREEZE) {
    updateTraffic(traffic, dt)
    updateCars(cars, dt, traffic)
    updatePedestrians(pedestrians, dt, traffic)
  }

  if (state === 'playing') {
    // 倒數計時用真實經過時間，避免低幀率時「時間變慢」，確保 60 秒任務時限對應真實時間
    timeLeft -= rawDt
    markCooldown = Math.max(0, markCooldown - rawDt)
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
  } else if (state === 'review') {
    // 複盤模式：自由飛行查看未找到的積水，不計時、不計分
    drone.update(dt, colliders)
    updateHUD()
  }

  renderer.render(scene, camera)
}

// ---------- 畫質選項 UI ----------
const gfxRow = $('gfxRow')
function updateGfxLabel() {
  $('gfxCurrent').textContent = `目前：${TIERS[gfx.tier].label}${gfx.source === 'probe' ? '（自動降級）' : ''}`
  const savedMode = new URLSearchParams(location.search).get('gfx') || localStorage.getItem('gfxTier') || 'auto'
  gfxRow.querySelectorAll('.gfx-btn').forEach((b) => b.classList.toggle('active', b.dataset.gfx === savedMode))
}
gfxRow.addEventListener('click', (e) => {
  const pick2 = e.target.closest('.gfx-btn')?.dataset.gfx
  if (!pick2) return
  const saved = localStorage.getItem('gfxTier') || 'auto'
  if (pick2 === saved) return
  gfx.setTier(pick2) // 記住選擇並重新載入（陰影管線需在初始化時切換）
})
updateGfxLabel()

// 開場 fps 探測：自動偵測結果實際跑不動時降一級（只降不升；URL/手動指定不介入）
setTimeout(() => {
  if (gfx.source === 'url' || gfx.source === 'saved') return
  const fps = frameTimes.length / Math.max(1e-6, frameTimes.reduce((a, b) => a + b, 0))
  if (fps < 45 && gfx.demote()) updateGfxLabel()
}, 3500)

updateHUD()
animate()

// 自動化測試／視覺驗證掛鉤（常駐、輕量；scripts/visual-check.mjs 依賴這組介面）
window.__game = {
  camera,
  targets,
  getScore: () => score,
  getState: () => state,
  getTargets: () => targets,
  // 固定鏡位：瞬移攝影機並歸零速度（截圖用）
  setPose: (x, y, z, lx, ly, lz) => {
    camera.position.set(x, y, z)
    camera.lookAt(lx, ly, lz)
    drone.velocity.set(0, 0, 0)
  },
  // 水面脈動定格：'max' | 'min' | null（ΔLuma 量測用）
  setWaterPhase: (m) => { waterPhaseOverride = m },
  getFrameStats: () => ({
    fps: frameTimes.length / Math.max(1e-6, frameTimes.reduce((a, b) => a + b, 0)),
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
  }),
  restart: () => startNewRound(),
  gfx,
}
