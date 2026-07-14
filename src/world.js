import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

// ---------- 常數 ----------
export const TARGET_TYPES = {
  tower:      { label: '空水塔積水',       points: 30 },
  tarp:       { label: '工地帆布積水',     points: 25 },
  debris:     { label: '廢棄物積水',       points: 20 },
  roofGarden: { label: '屋頂花園積水',     points: 20 },
  gutter:     { label: '屋簷雨水槽積水',   points: 15 },
  container:  { label: '積水容器',         points: 10 },
}

const GRID = 7          // 7x7 個街區
const BLOCK = 26        // 街區邊長
const STREET = 12       // 街道寬
const PITCH = BLOCK + STREET
const HALF = (GRID * PITCH) / 2

export const WORLD_BOUNDS = {
  min: new THREE.Vector3(-HALF - 20, 1.2, -HALF - 20),
  max: new THREE.Vector3(HALF + 20, 90, HALF + 20),
}

const rand = (a, b) => a + Math.random() * (b - a)
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

// ---------- 材質 ----------
function makeWindowTexture() {
  const c = document.createElement('canvas')
  c.width = 128; c.height = 128
  const g = c.getContext('2d')
  // 暖色磚紅／米黃／木色系，取代原本偏冷的灰藍色，更接近台南街屋日曬褪色的外牆質感
  const bases = ['#c9a876', '#b5895f', '#d4b483', '#a67c52', '#c2a878', '#b98f6a']
  g.fillStyle = pick(bases)
  g.fillRect(0, 0, 128, 128)
  for (let y = 10; y < 118; y += 26) {
    for (let x = 10; x < 118; x += 26) {
      g.fillStyle = Math.random() < 0.3 ? '#ffd98a' : '#3a2f28'
      g.fillRect(x, y, 15, 17)
    }
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  return t
}

function makeSignTexture(text) {
  const c = document.createElement('canvas')
  c.width = 256; c.height = 64
  const g = c.getContext('2d')
  g.fillStyle = pick(['#c62828', '#1565c0', '#2e7d32', '#e65100', '#6a1b9a'])
  g.fillRect(0, 0, 256, 64)
  g.fillStyle = '#ffffff'
  g.font = 'bold 34px "Noto Sans TC", "Microsoft JhengHei", sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText(text, 128, 34)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

const SIGN_TEXTS = [
  '台南牛肉湯', '國華街小吃', '安平劍獅', '赤崁擔仔麵', '鹽水意麵',
  '東山咖啡', '關廟鳳梨', '虱目魚粥', '永樂市場', '學甲五金行',
  '安平運河', '度小月', '棺材板', '碗粿專賣', '同記安平豆花',
]

// 直式招牌（突出式，垂直懸掛，字由上往下排）
function makeVerticalSignTexture(text) {
  const c = document.createElement('canvas')
  c.width = 64; c.height = 256
  const g = c.getContext('2d')
  g.fillStyle = pick(['#c62828', '#1565c0', '#2e7d32', '#e65100', '#6a1b9a'])
  g.fillRect(0, 0, 64, 256)
  g.fillStyle = '#ffffff'
  g.font = 'bold 28px "Noto Sans TC", "Microsoft JhengHei", sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  const chars = text.slice(0, 5).split('')
  const lineH = 240 / chars.length
  chars.forEach((ch, i) => {
    g.fillText(ch, 32, 8 + lineH * (i + 0.5))
  })
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 透天厝外牆材質：近白底色（由 material.color 染成瓷磚色調），
// 畫上窗戶＋鐵窗直條＋陽台橫帶＋一樓鐵捲門，是台灣街屋立面的核心元素
function makeTownhouseTexture() {
  const c = document.createElement('canvas')
  c.width = 96; c.height = 160
  const g = c.getContext('2d')
  g.fillStyle = '#f2eee6'
  g.fillRect(0, 0, 96, 160)

  // 瓷磚縫隙
  g.strokeStyle = 'rgba(0,0,0,0.05)'
  for (let y = 0; y <= 160; y += 8) {
    g.beginPath(); g.moveTo(0, y); g.lineTo(96, y); g.stroke()
  }
  for (let x = 0; x <= 96; x += 8) {
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 160); g.stroke()
  }

  // 窗戶（2 欄 × 4 層樓）＋鐵窗直條＋陽台橫帶
  for (let row = 0; row < 4; row++) {
    const wy = 12 + row * 32
    for (let col = 0; col < 2; col++) {
      const wx = 14 + col * 44
      g.fillStyle = Math.random() < 0.25 ? '#ffe2a6' : '#332e28'
      g.fillRect(wx, wy, 24, 18)
      g.strokeStyle = 'rgba(190,195,200,0.8)'
      for (let b = wx + 4; b < wx + 24; b += 5) {
        g.beginPath(); g.moveTo(b, wy); g.lineTo(b, wy + 18); g.stroke()
      }
    }
    g.fillStyle = 'rgba(120,110,100,0.35)'
    g.fillRect(6, wy + 20, 84, 4)
  }

  // 一樓鐵捲門
  g.fillStyle = '#6a625a'
  g.fillRect(8, 138, 80, 20)
  g.strokeStyle = 'rgba(0,0,0,0.25)'
  for (let y = 141; y < 158; y += 3) {
    g.beginPath(); g.moveTo(8, y); g.lineTo(88, y); g.stroke()
  }

  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 行人穿越道（斑馬線）材質
function makeCrosswalkTexture() {
  const c = document.createElement('canvas')
  c.width = 32; c.height = 64
  const g = c.getContext('2d')
  g.fillStyle = 'rgba(238,238,230,0.85)'
  for (let y = 2; y < 64; y += 16) {
    g.fillRect(0, y, 32, 8)
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 積水水面材質（會反光閃爍，是玩家找目標的線索）
function makeWaterMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x2a7fb5,
    roughness: 0.05,
    metalness: 0.55,
    emissive: 0x1a4f78,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.92,
  })
}

// 點擊判定用的隱形球體（opacity 0 仍可被 Raycaster 命中）
const proxyMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })

function addInspectProxy(group, radius, yOffset, data, inspectables) {
  const proxy = new THREE.Mesh(new THREE.SphereGeometry(radius, 8, 8), proxyMat)
  proxy.position.y = yOffset
  proxy.userData.inspect = data
  group.add(proxy)
  inspectables.push(proxy)
}

// ---------- 物件工廠 ----------

// 屋頂水塔：hasWater=true 為開口積水（目標），false 為有蓋（誘餌）
function makeWaterTower(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const steel = new THREE.MeshStandardMaterial({ color: 0xb8bec4, roughness: 0.35, metalness: 0.85 })
  const legMat = new THREE.MeshStandardMaterial({ color: 0x555c63, roughness: 0.6, metalness: 0.5 })

  for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 2.2, 0.22), legMat)
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4
    leg.position.set(Math.cos(a) * 1.1, 1.1, Math.sin(a) * 1.1)
    g.add(leg)
  }

  const tankWall = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2.4, 20, 1, true), steel)
  tankWall.material = steel.clone()
  tankWall.material.side = THREE.DoubleSide
  tankWall.position.y = 3.4
  g.add(tankWall)

  const bottom = new THREE.Mesh(new THREE.CircleGeometry(1.5, 20), steel)
  bottom.rotation.x = -Math.PI / 2
  bottom.position.y = 2.25
  g.add(bottom)

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(1.42, 20), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.position.y = 4.35
    g.add(water)
    waterMeshes.push(water)
  } else {
    const lid = new THREE.Mesh(new THREE.ConeGeometry(1.65, 0.8, 20), steel)
    lid.position.y = 4.95
    g.add(lid)
  }
  return g
}

// 積水容器：水桶 / 水盆 / 輪胎 / 垃圾桶 / 保麗龍箱
// kinds 可限制產生的容器種類（例如屋簷上偏好垃圾桶與保麗龍箱）
function makeContainer(hasWater, waterMeshes, kinds) {
  const g = new THREE.Group()
  const kind = pick(kinds ?? ['bucket', 'basin', 'tire', 'trash', 'foam'])

  if (kind === 'foam') {
    // 保麗龍箱：白色方箱、開口朝上（台灣市場常見，經典孳生源）
    const foamMat = new THREE.MeshStandardMaterial({ color: 0xf2f2ec, roughness: 0.95 })
    const bw = 0.72, bd = 0.52, bh = 0.42, t = 0.06
    const bottom = new THREE.Mesh(new THREE.BoxGeometry(bw, t, bd), foamMat)
    bottom.position.y = t / 2
    g.add(bottom)
    for (const [wx, wz, ww, wd] of [
      [0, (bd - t) / 2, bw, t], [0, -(bd - t) / 2, bw, t],
      [(bw - t) / 2, 0, t, bd - 2 * t], [-(bw - t) / 2, 0, t, bd - 2 * t],
    ]) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(ww, bh, wd), foamMat)
      wall.position.set(wx, bh / 2, wz)
      g.add(wall)
    }
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.BoxGeometry(bw - 2 * t, 0.02, bd - 2 * t), makeWaterMaterial())
      water.position.y = bh * 0.78
      g.add(water)
      waterMeshes.push(water)
    } else {
      const inner = new THREE.Mesh(
        new THREE.BoxGeometry(bw - 2 * t, 0.02, bd - 2 * t),
        new THREE.MeshStandardMaterial({ color: 0xd8d8d0, roughness: 0.95 })
      )
      inner.position.y = t + 0.02
      g.add(inner)
    }
    return g
  }

  if (kind === 'trash') {
    // 垃圾桶：開口圓桶
    const mat = new THREE.MeshStandardMaterial({
      color: pick([0x3a5a44, 0x4a6a8a, 0x5a5a5a]),
      roughness: 0.7,
      side: THREE.DoubleSide,
    })
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.3, 0.8, 14, 1, true), mat)
    wall.position.y = 0.4
    g.add(wall)
    const base = new THREE.Mesh(new THREE.CircleGeometry(0.3, 14), mat)
    base.rotation.x = -Math.PI / 2
    base.position.y = 0.02
    g.add(base)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.025, 6, 16), mat)
    rim.rotation.x = Math.PI / 2
    rim.position.y = 0.8
    g.add(rim)
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.32, 14), makeWaterMaterial())
      water.rotation.x = -Math.PI / 2
      water.position.y = 0.66
      g.add(water)
      waterMeshes.push(water)
    }
    return g
  }

  if (kind === 'tire') {
    const tire = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.24, 12, 24),
      new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.9 })
    )
    tire.rotation.x = Math.PI / 2
    tire.position.y = 0.24
    g.add(tire)
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.42, 16), makeWaterMaterial())
      water.rotation.x = -Math.PI / 2
      water.position.y = 0.3
      g.add(water)
      waterMeshes.push(water)
    }
  } else {
    const r = kind === 'bucket' ? 0.45 : 0.8
    const h = kind === 'bucket' ? 0.85 : 0.45
    const mat = new THREE.MeshStandardMaterial({
      color: pick([0x3f6db3, 0xb33f3f, 0x3fb35f, 0x8a8a8a]),
      roughness: 0.7,
      side: THREE.DoubleSide,
    })
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.82, h, 16, 1, true), mat)
    wall.position.y = h / 2
    g.add(wall)
    const base = new THREE.Mesh(new THREE.CircleGeometry(r * 0.82, 16), mat)
    base.rotation.x = -Math.PI / 2
    base.position.y = 0.02
    g.add(base)
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.CircleGeometry(r * 0.92, 16), makeWaterMaterial())
      water.rotation.x = -Math.PI / 2
      water.position.y = h * 0.8
      g.add(water)
      waterMeshes.push(water)
    }
  }
  return g
}

// 屋簷雨水槽：沿屋頂邊緣的排水溝，長度對應該屋頂邊的長度，落葉堵塞後容易積水
function makeGutter(hasWater, waterMeshes, length = 3.2) {
  const g = new THREE.Group()
  const metal = new THREE.MeshStandardMaterial({ color: 0x8a8f94, roughness: 0.6, metalness: 0.5 })
  const width = 0.45
  const wallH = 0.22

  const bottom = new THREE.Mesh(new THREE.BoxGeometry(length, 0.05, width), metal)
  bottom.position.y = 0.05
  g.add(bottom)

  const wallGeo = new THREE.BoxGeometry(length, wallH, 0.05)
  const wallFront = new THREE.Mesh(wallGeo, metal)
  wallFront.position.set(0, wallH / 2 + 0.05, width / 2)
  g.add(wallFront)
  const wallBack = new THREE.Mesh(wallGeo, metal)
  wallBack.position.set(0, wallH / 2 + 0.05, -width / 2)
  g.add(wallBack)

  const leafMat = new THREE.MeshStandardMaterial({ color: 0x6b7d3f, roughness: 0.95 })
  const leafCount = Math.max(2, Math.round(length / 1.1))
  for (let i = 0; i < leafCount; i++) {
    const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.12, 6), leafMat)
    leaf.rotation.x = -Math.PI / 2
    leaf.position.set(rand(-length / 2 + 0.3, length / 2 - 0.3), 0.09, rand(-0.15, 0.15))
    g.add(leaf)
  }

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.BoxGeometry(length - 0.1, 0.03, width - 0.1), makeWaterMaterial())
    water.position.y = 0.14
    g.add(water)
    waterMeshes.push(water)
  }
  return g
}

// 澆花器：壺身＋壺嘴＋提把，hasWater 時開口有水面
function makeWateringCan(hasWater, waterMeshes, scale = 1) {
  const can = new THREE.Group()
  const canMat = new THREE.MeshStandardMaterial({
    color: pick([0x4a8a5a, 0x3f6db3, 0xc9c9c9]),
    roughness: 0.5, metalness: 0.4, side: THREE.DoubleSide,
  })
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.5, 12, 1, true), canMat)
  body.position.y = 0.25
  can.add(body)
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.3, 12), canMat)
  bottom.rotation.x = -Math.PI / 2
  bottom.position.y = 0.01
  can.add(bottom)
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 0.55, 8), canMat)
  spout.position.set(0.42, 0.42, 0)
  spout.rotation.z = -0.9
  can.add(spout)
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.03, 6, 14, Math.PI), canMat)
  handle.position.set(-0.26, 0.42, 0)
  handle.rotation.y = Math.PI / 2
  handle.rotation.z = Math.PI / 2
  can.add(handle)
  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.22, 12), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.position.y = 0.42
    can.add(water)
    waterMeshes.push(water)
  }
  can.scale.setScalar(scale)
  return can
}

// 空中花園：綠化涵蓋整個屋頂——草皮鋪面、兩側長條花圃、散落的花盆與園藝用具。
// 積水藏在花盆、水桶、澆花器等容器中（目標有水、誘餌乾涸）。
// dims 為可用的屋頂範圍 { w, d }。
function makeRoofGarden(hasWater, waterMeshes, dims) {
  const w = dims?.w ?? 5.6
  const d = dims?.d ?? 4.6
  const g = new THREE.Group()

  const potMat = new THREE.MeshStandardMaterial({ color: 0x9c5a3c, roughness: 0.9 })
  const leafMats = [
    new THREE.MeshStandardMaterial({ color: 0x4c8a3f, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x5a9c4a, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x3f7d3a, roughness: 0.95 }),
  ]
  const flowerMats = [
    new THREE.MeshStandardMaterial({ color: 0xd05a8a, roughness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0xe8c93f, roughness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0xd04a3a, roughness: 0.8 }),
  ]

  // 草皮鋪面涵蓋整個屋頂
  const lawn = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshStandardMaterial({ color: 0x7da85f, roughness: 0.95 })
  )
  lawn.rotation.x = -Math.PI / 2
  lawn.position.y = 0.03
  g.add(lawn)

  // 兩側長條花圃＋灌木
  const planterMat = new THREE.MeshStandardMaterial({ color: 0x8a6b4a, roughness: 0.9 })
  for (const zSign of [-1, 1]) {
    const planter = new THREE.Mesh(new THREE.BoxGeometry(w * 0.82, 0.4, 0.65), planterMat)
    planter.position.set(0, 0.23, zSign * (d / 2 - 0.42))
    g.add(planter)
    const nBush = Math.max(3, Math.round(w / 1.7))
    for (let i = 0; i < nBush; i++) {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(rand(0.26, 0.38), 8, 6), pick(leafMats))
      bush.scale.y = 0.75
      bush.position.set(-w * 0.36 + (i + 0.5) * (w * 0.72 / nBush), 0.55, zSign * (d / 2 - 0.42))
      g.add(bush)
    }
  }

  // 散落的花盆（部分開花）
  const potCount = Math.max(4, Math.round((w * d) / 9))
  for (let i = 0; i < potCount; i++) {
    const pr = rand(0.2, 0.32)
    const px = rand(-(w / 2 - 0.8), w / 2 - 0.8)
    const pz = rand(-(d / 2 - 1.4), d / 2 - 1.4)
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(pr, pr * 0.78, pr * 1.2, 10), potMat)
    pot.position.set(px, pr * 0.6, pz)
    g.add(pot)
    const top = Math.random() < 0.35
      ? new THREE.Mesh(new THREE.SphereGeometry(pr * 0.75, 8, 6), pick(flowerMats))
      : new THREE.Mesh(new THREE.SphereGeometry(pr * 1.05, 8, 6), pick(leafMats))
    top.position.set(px, pr * 1.2 + pr * 0.7, pz)
    top.scale.y = 0.8
    g.add(top)
  }

  // 造景用的乾澆花器
  const decoCan = makeWateringCan(false, waterMeshes, 0.9)
  decoCan.position.set(rand(-(w / 2 - 1), w / 2 - 1), 0.03, rand(-(d / 2 - 1.5), d / 2 - 1.5))
  decoCan.rotation.y = rand(0, Math.PI * 2)
  g.add(decoCan)

  // 指定的積水容器（目標有水、誘餌乾涸），放在屋頂中央附近方便發現與點擊
  const kind = pick(['pot', 'bucket', 'can'])
  const cx2 = rand(-1.2, 1.2)
  const cz2 = rand(-1.0, 1.0)
  if (kind === 'pot') {
    // 大陶盆（沒有種植物，正好積水）
    const bigPot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.44, 0.6, 14, 1, true),
      new THREE.MeshStandardMaterial({ color: 0x9c5a3c, roughness: 0.9, side: THREE.DoubleSide })
    )
    bigPot.position.set(cx2, 0.3, cz2)
    g.add(bigPot)
    const potBase = new THREE.Mesh(new THREE.CircleGeometry(0.44, 14), potMat)
    potBase.rotation.x = -Math.PI / 2
    potBase.position.set(cx2, 0.04, cz2)
    g.add(potBase)
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.48, 14), makeWaterMaterial())
      water.rotation.x = -Math.PI / 2
      water.position.set(cx2, 0.48, cz2)
      g.add(water)
      waterMeshes.push(water)
    }
  } else if (kind === 'bucket') {
    const bucketMat = new THREE.MeshStandardMaterial({
      color: pick([0x3f6db3, 0xb33f3f, 0x3fb35f]),
      roughness: 0.7, side: THREE.DoubleSide,
    })
    const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.33, 0.6, 14, 1, true), bucketMat)
    bucket.position.set(cx2, 0.3, cz2)
    g.add(bucket)
    const bucketBase = new THREE.Mesh(new THREE.CircleGeometry(0.33, 14), bucketMat)
    bucketBase.rotation.x = -Math.PI / 2
    bucketBase.position.set(cx2, 0.04, cz2)
    g.add(bucketBase)
    if (hasWater) {
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.35, 14), makeWaterMaterial())
      water.rotation.x = -Math.PI / 2
      water.position.set(cx2, 0.48, cz2)
      g.add(water)
      waterMeshes.push(water)
    }
  } else {
    // 大澆花器（開口積水）
    const bigCan = makeWateringCan(hasWater, waterMeshes, 1.5)
    bigCan.position.set(cx2, 0.03, cz2)
    bigCan.rotation.y = rand(0, Math.PI * 2)
    g.add(bigCan)
  }

  return g
}

// 藍白條紋帆布材質，工地常見的帆布樣式
function makeTarpTexture() {
  const c = document.createElement('canvas')
  c.width = 128; c.height = 128
  const g = c.getContext('2d')
  const stripeW = 16
  for (let x = 0; x < 128; x += stripeW) {
    g.fillStyle = (Math.floor(x / stripeW) % 2 === 0) ? '#4a90c2' : '#eef2f5'
    g.fillRect(x, 0, stripeW, 128)
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  return t
}

// 帆布蓋建材：空地／工地上，大長方形藍白帆布蓋著棧板建材堆，繩索綁著，皺褶處積水
function makeTarpPile(hasWater, waterMeshes) {
  const g = new THREE.Group()

  // 底下堆疊的棧板/建材
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.85 })
  const stackW = rand(2.0, 2.6)
  const stackD = rand(1.3, 1.7)
  const layers = 2 + Math.floor(Math.random() * 2)
  for (let i = 0; i < layers; i++) {
    const crate = new THREE.Mesh(new THREE.BoxGeometry(stackW, 0.2, stackD), crateMat)
    crate.position.y = 0.12 + i * 0.24
    g.add(crate)
  }
  const topY = 0.12 + layers * 0.24 + 0.08

  // 大長方形帆布：頂面 + 四邊垂落的裙面，覆蓋整堆建材
  const tarpTex = makeTarpTexture()
  const tarpMat = new THREE.MeshStandardMaterial({ map: tarpTex, roughness: 0.75, side: THREE.DoubleSide })
  const tarpW = stackW + 0.8
  const tarpD = stackD + 0.8

  const top = new THREE.Mesh(new THREE.PlaneGeometry(tarpW, tarpD), tarpMat)
  top.rotation.x = -Math.PI / 2
  top.position.y = topY
  g.add(top)

  const skirtH = 0.85
  const skirts = [
    { w: tarpW, x: 0, z: tarpD / 2, ry: 0 },
    { w: tarpW, x: 0, z: -tarpD / 2, ry: Math.PI },
    { w: tarpD, x: tarpW / 2, z: 0, ry: Math.PI / 2 },
    { w: tarpD, x: -tarpW / 2, z: 0, ry: -Math.PI / 2 },
  ]
  for (const s of skirts) {
    const skirt = new THREE.Mesh(new THREE.PlaneGeometry(s.w, skirtH), tarpMat)
    skirt.position.set(s.x, topY - skirtH / 2 + 0.12, s.z)
    skirt.rotation.y = s.ry
    skirt.rotation.x = -0.12 // 稍微外張，模擬垂墜感
    g.add(skirt)
  }

  // 綁繩
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 })
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, tarpW + 0.3, 6), ropeMat)
  rope.rotation.z = Math.PI / 2
  rope.position.y = topY + 0.03
  g.add(rope)

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.5, 16), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.position.set(rand(-0.4, 0.4), topY + 0.015, rand(-0.3, 0.3))
    g.add(water)
    waterMeshes.push(water)
  }
  return g
}

// 空地廢棄物堆：hasWater=true 時旁邊有一灘積水
function makeDebris(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const junkMats = [
    new THREE.MeshStandardMaterial({ color: 0x7a6a55, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ color: 0x5d6b72, roughness: 0.85 }),
    new THREE.MeshStandardMaterial({ color: 0x8c7f42, roughness: 0.9 }),
  ]
  const n = 4 + Math.floor(Math.random() * 3)
  for (let i = 0; i < n; i++) {
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(rand(0.5, 1.4), rand(0.3, 0.9), rand(0.5, 1.4)),
      pick(junkMats)
    )
    box.position.set(rand(-1.4, 1.4), box.geometry.parameters.height / 2, rand(-1.4, 1.4))
    box.rotation.y = rand(0, Math.PI)
    box.castShadow = true
    g.add(box)
  }
  const tire = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.2, 10, 20),
    new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.9 })
  )
  tire.rotation.x = Math.PI / 2
  tire.position.set(rand(-1.5, 1.5), 0.2, rand(-1.5, 1.5))
  g.add(tire)

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(1.1, 20), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.scale.set(1, rand(0.55, 0.8), 1)
    water.rotation.z = rand(0, Math.PI)
    water.position.set(rand(-0.8, 0.8), 0.03, rand(-0.8, 0.8))
    g.add(water)
    waterMeshes.push(water)
  }
  return g
}

function makeTree() {
  const g = new THREE.Group()
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.26, 2.4, 8),
    new THREE.MeshStandardMaterial({ color: 0x6b4e2e, roughness: 0.9 })
  )
  trunk.position.y = 1.2
  g.add(trunk)
  const crown = new THREE.Mesh(
    new THREE.SphereGeometry(rand(1.1, 1.7), 10, 8),
    new THREE.MeshStandardMaterial({ color: pick([0x3f7d3a, 0x4c8a3f, 0x35703d]), roughness: 0.95 })
  )
  crown.position.y = rand(2.6, 3.2)
  crown.castShadow = true
  g.add(crown)
  return g
}

// 老榕樹：寬闊樹冠垂掛氣根，台南街頭常見的老樹意象
function makeBanyanTree() {
  const g = new THREE.Group()
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x5c4530, roughness: 0.95 })
  const leafMat = new THREE.MeshStandardMaterial({ color: pick([0x3f7d3a, 0x4c8a3f, 0x477a42]), roughness: 0.95 })

  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 2.6, 8), barkMat)
  trunk.position.y = 1.3
  g.add(trunk)

  const crownR = rand(2.2, 3.0)
  const crown = new THREE.Mesh(new THREE.SphereGeometry(crownR, 10, 8), leafMat)
  crown.scale.y = 0.6
  crown.position.y = 3.3
  crown.castShadow = true
  g.add(crown)

  // 垂掛氣根
  const rootMat = new THREE.MeshStandardMaterial({ color: 0x8a7256, roughness: 0.9 })
  const rootCount = 4 + Math.floor(Math.random() * 3)
  for (let i = 0; i < rootCount; i++) {
    const a = (i / rootCount) * Math.PI * 2 + rand(-0.3, 0.3)
    const r = rand(0.6, crownR * 0.8)
    const rx = Math.cos(a) * r
    const rz = Math.sin(a) * r
    const topY = rand(2.6, 3.6)
    const len = rand(1.4, topY - 0.1)
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, len, 5), rootMat)
    root.position.set(rx, topY - len / 2, rz)
    g.add(root)
  }
  return g
}

// 停放機車：純造景，增添巷弄生活感
function makeScooter() {
  const g = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({
    color: pick([0xd6483f, 0x3f5fd6, 0xd6c93f, 0x454545, 0xe0e0e0]),
    roughness: 0.5, metalness: 0.3,
  })
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.9 })
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 })

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.45, 1.5), bodyMat)
  body.position.y = 0.5
  g.add(body)

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.12, 0.7), darkMat)
  seat.position.set(0, 0.76, -0.1)
  g.add(seat)

  const handlebar = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.06, 0.06), darkMat)
  handlebar.position.set(0, 0.92, 0.65)
  g.add(handlebar)

  for (const zOff of [0.55, -0.55]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.1, 12), wheelMat)
    wheel.rotation.z = Math.PI / 2
    wheel.position.set(0, 0.28, zOff)
    g.add(wheel)
  }
  return g
}

// 廟宇風格建築：紅牆、燕尾脊屋頂，混入低樓層街景增添台南味
function makeTempleBuilding(w, d) {
  const g = new THREE.Group()
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x8a2e2e, roughness: 0.85 })
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.8 })
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x2f4a3a, roughness: 0.7 })
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.4, metalness: 0.5 })

  const h = rand(5, 8)
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
  wall.position.y = h / 2
  wall.castShadow = true
  wall.receiveShadow = true
  g.add(wall)

  // 紅柱（正面立柱裝飾）
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, h, 8), trimMat)
      pillar.position.set(sx * (w / 2 - 0.3), h / 2, sz * (d / 2 - 0.3))
      g.add(pillar)
    }
  }

  // 屋簷（比牆體略寬的扁平屋頂基底）
  const eaveW = w * 1.25
  const eaveD = d * 1.25
  const eave = new THREE.Mesh(new THREE.BoxGeometry(eaveW, 0.4, eaveD), roofMat)
  eave.position.y = h + 0.2
  eave.castShadow = true
  g.add(eave)

  // 正脊金色滾邊
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(eaveW * 0.9, 0.15, 0.15), goldMat)
  ridge.position.y = h + 0.42
  g.add(ridge)

  // 燕尾脊：四個屋角向上翹起的裝飾
  const wingGeo = new THREE.BoxGeometry(0.22, 1.1, 0.22)
  const corners = [
    [eaveW / 2 - 0.3, eaveD / 2 - 0.3], [eaveW / 2 - 0.3, -eaveD / 2 + 0.3],
    [-eaveW / 2 + 0.3, eaveD / 2 - 0.3], [-eaveW / 2 + 0.3, -eaveD / 2 + 0.3],
  ]
  for (const [cx, cz] of corners) {
    const wing = new THREE.Mesh(wingGeo, roofMat)
    wing.position.set(cx, h + 0.85, cz)
    wing.rotation.z = Math.sign(cx) * 0.5
    wing.rotation.x = Math.sign(cz) * 0.5
    g.add(wing)
  }

  // 門前紅燈籠
  for (const sx of [-1, 1]) {
    const lantern = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xc73a3a, emissive: 0x7a1c1c, emissiveIntensity: 0.4, roughness: 0.7 })
    )
    lantern.position.set(sx * (w / 2 - 0.6), h - 0.6, d / 2 + 0.15)
    g.add(lantern)
  }

  return g
}

// 騎樓：低樓建築前方外推的遮簷走廊，柱列造型是台灣街屋代表意象。
// dir 決定騎樓朝向哪一側街道（+1 或 -1）。
// 回傳騎樓下方的座標，可作為容器積水的新藏匿點（有遮蔽、從空中看不到）。
function addArcade(scene, px, pz, w, d, dir = 1) {
  const roofH = 3.6
  const depth = 2.0
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x6b5842, roughness: 0.85 })
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0xc9a876, roughness: 0.8 })

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, depth), roofMat)
  roof.position.set(px, roofH, pz + dir * (d / 2 + depth / 2))
  roof.castShadow = true
  scene.add(roof)

  const pillarCount = Math.max(2, Math.round(w / 3))
  for (let i = 0; i < pillarCount; i++) {
    const ppx = px - w / 2 + (i + 0.5) * (w / pillarCount)
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, roofH, 8), pillarMat)
    pillar.position.set(ppx, roofH / 2, pz + dir * (d / 2 + depth - 0.2))
    scene.add(pillar)
  }

  // 部分騎樓下掛紅燈籠串
  if (Math.random() < 0.4) {
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xc73a3a, emissive: 0x7a1c1c, emissiveIntensity: 0.4, roughness: 0.7,
    })
    const n = 3
    for (let i = 0; i < n; i++) {
      const lx = px - w / 3 + (i / (n - 1)) * (w * 2 / 3)
      const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), lanternMat)
      lantern.position.set(lx, roofH - 0.35, pz + dir * (d / 2 + depth - 0.3))
      scene.add(lantern)
    }
  }

  return {
    ground: { x: px, z: pz + dir * (d / 2 + depth * 0.6) },
    // 遮簷頂面：積水容器（垃圾桶、保麗龍箱等）可能被放在騎樓屋簷上
    eave: { x: px + rand(-w / 4, w / 4), y: roofH + 0.12, z: pz + dir * (d / 2 + depth / 2) },
  }
}

// 連棟透天厝：台灣城市街景的主體。一排 3 戶相連的窄面寬街屋，
// 各戶樓層數與外牆色略異；屋頂約半數有鐵皮加蓋（無人機空拍最經典的台灣屋頂樣貌），
// 其餘為女兒牆平屋頂（可作為屋頂積水目標的藏匿點），部分有樓梯間小屋。
function addRowhouseStrip(scene, colliders, roofSpots, groundSpots, eaveSpots, px, pz, sub, facing, caches) {
  const n = 3
  const W = sub * 0.88
  const d = sub * 0.72
  const w = W / n
  const houses = [] // 記錄各戶高度與屋頂形式，用於找出「建築物之間的簷面」

  for (let i = 0; i < n; i++) {
    const hx = px - W / 2 + w * (i + 0.5)
    const floors = 2 + Math.floor(Math.random() * 4) // 2~5 樓
    const h = floors * 3 * rand(0.95, 1.05)

    const house = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), pick(caches.facadeMats))
    house.position.set(hx, h / 2 + 0.2, pz)
    house.castShadow = true
    house.receiveShadow = true
    scene.add(house)

    const box = new THREE.Box3().setFromObject(house)
    box.expandByScalar(0.9)
    colliders.push(box)

    const roofY = h + 0.2
    const hasMetal = Math.random() < 0.5
    houses.push({ hx, h, hasMetal })
    if (hasMetal) {
      // 鐵皮加蓋：小房間＋微斜鐵皮浪板
      const mat = pick(caches.metalMats)
      const room = new THREE.Mesh(new THREE.BoxGeometry(w * 0.9, 2.0, d * 0.9), mat)
      room.position.set(hx, roofY + 1.0, pz)
      scene.add(room)
      const plate = new THREE.Mesh(new THREE.BoxGeometry(w * 1.04, 0.08, d * 1.1), mat)
      plate.position.set(hx, roofY + 2.15, pz)
      plate.rotation.x = 0.09 * (Math.random() < 0.5 ? 1 : -1)
      plate.castShadow = true
      scene.add(plate)
    } else {
      // 女兒牆（四邊合併成單一網格，控制繪製呼叫數）
      const t = 0.15, ph = 0.55
      const rimGeos = [
        new THREE.BoxGeometry(w, ph, t).translate(0, 0, (d - t) / 2),
        new THREE.BoxGeometry(w, ph, t).translate(0, 0, -(d - t) / 2),
        new THREE.BoxGeometry(t, ph, d - 2 * t).translate((w - t) / 2, 0, 0),
        new THREE.BoxGeometry(t, ph, d - 2 * t).translate(-(w - t) / 2, 0, 0),
      ]
      const rim = new THREE.Mesh(mergeGeometries(rimGeos), caches.parapetMat)
      rim.position.set(hx, roofY + ph / 2, pz)
      scene.add(rim)

      // 樓梯間小屋
      if (Math.random() < 0.4) {
        const stair = new THREE.Mesh(caches.stairGeo, caches.stairMat)
        stair.position.set(
          hx + (w / 2 - 1.1) * (Math.random() < 0.5 ? 1 : -1),
          roofY + 0.95,
          pz - facing * (d / 2 - 1.3)
        )
        scene.add(stair)
      }

      // 記錄完整屋頂尺寸與女兒牆資訊，讓雨水槽能精準貼齊女兒牆內側（屋頂邊緣）
      roofSpots.push({ x: hx, y: roofY, z: pz, w, d, parapet: true })
    }

    // 店家招牌（共用少量材質，重複使用）
    if (Math.random() < 0.6) {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, 0.9), pick(caches.signMats))
      sign.position.set(hx, 4.4, pz + facing * (d / 2 + 0.06))
      if (facing < 0) sign.rotation.y = Math.PI
      scene.add(sign)
    }
  }

  // 建築物之間的簷面：相鄰兩戶高低差夠大時，較低的屋頂靠共用牆處
  // 形成「夾在建築物之間」的簷面，是容器積水的藏匿點
  for (let i = 0; i < n - 1; i++) {
    const a = houses[i]
    const b = houses[i + 1]
    if (Math.abs(a.h - b.h) < 2.5) continue
    const lower = a.h < b.h ? a : b
    if (lower.hasMetal) continue // 鐵皮加蓋佔據屋頂
    const wallX = (a.hx + b.hx) / 2
    const dirToLower = lower.hx < wallX ? -1 : 1
    eaveSpots.push({
      x: wallX + dirToLower * 0.7,
      y: lower.h + 0.2,
      z: pz + rand(-d / 4, d / 4),
    })
  }

  // 整排騎樓
  if (Math.random() < 0.45) {
    const spot = addArcade(scene, px, pz, W, d, facing)
    if (Math.random() < 0.5) groundSpots.push(spot.ground)
    eaveSpots.push(spot.eave)
  }
}

// 施工告示牌材質
function makeConstructionSignTexture() {
  const c = document.createElement('canvas')
  c.width = 256; c.height = 96
  const g = c.getContext('2d')
  g.fillStyle = '#f5f0e0'
  g.fillRect(0, 0, 256, 96)
  // 黃黑斜紋邊框
  g.save()
  g.beginPath()
  g.rect(0, 0, 256, 14)
  g.rect(0, 82, 256, 14)
  g.clip()
  for (let x = -20; x < 276; x += 20) {
    g.fillStyle = '#e8b800'
    g.beginPath()
    g.moveTo(x, 0); g.lineTo(x + 10, 0); g.lineTo(x - 4, 96); g.lineTo(x - 14, 96)
    g.closePath(); g.fill()
    g.fillStyle = '#222222'
    g.beginPath()
    g.moveTo(x + 10, 0); g.lineTo(x + 20, 0); g.lineTo(x + 6, 96); g.lineTo(x - 4, 96)
    g.closePath(); g.fill()
  }
  g.restore()
  g.fillStyle = '#c62828'
  g.font = 'bold 34px "Noto Sans TC", "Microsoft JhengHei", sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText('施工中 請勿進入', 128, 48)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 工地：藍色圍籬、施工中的混凝土骨架、砂石堆、水泥涵管、三角錐與告示牌。
// 回傳工地內可放帆布蓋建材的位置清單（帆布積水只出現在工地）。
function addConstructionSite(scene, colliders, cx, cz) {
  // 裸土地面
  const dirt = new THREE.Mesh(
    new THREE.PlaneGeometry(BLOCK, BLOCK),
    new THREE.MeshStandardMaterial({ color: 0x9a7d5a, roughness: 0.98 })
  )
  dirt.rotation.x = -Math.PI / 2
  dirt.position.set(cx, 0.21, cz)
  scene.add(dirt)

  // 藍色鐵皮圍籬
  const hoardMat = new THREE.MeshStandardMaterial({ color: 0x3a6ea8, roughness: 0.55, metalness: 0.35 })
  for (const [dx, dz, w, d] of [
    [0, -BLOCK / 2, BLOCK, 0.25], [0, BLOCK / 2, BLOCK, 0.25],
    [-BLOCK / 2, 0, 0.25, BLOCK], [BLOCK / 2, 0, 0.25, BLOCK],
  ]) {
    const fence = new THREE.Mesh(new THREE.BoxGeometry(w, 2.4, d), hoardMat)
    fence.position.set(cx + dx, 1.4, cz + dz)
    scene.add(fence)
  }

  // 施工中的混凝土骨架（柱＋樓板，兩層）
  const concMat = new THREE.MeshStandardMaterial({ color: 0xb6b0a4, roughness: 0.9 })
  const frame = new THREE.Group()
  const fw = 9, fd = 7
  for (const sx of [-1, 0, 1]) {
    for (const sz of [-1, 1]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.4, 6.4, 0.4), concMat)
      col.position.set(sx * (fw / 2 - 0.3), 3.2, sz * (fd / 2 - 0.3))
      col.castShadow = true
      frame.add(col)
    }
  }
  for (const fy of [3.1, 6.3]) {
    const slab = new THREE.Mesh(new THREE.BoxGeometry(fw, 0.3, fd), concMat)
    slab.position.y = fy
    slab.castShadow = true
    frame.add(slab)
  }

  // 鷹架＋綠色防塵網（台灣工地最具辨識度的元素），架在骨架的兩個外側面
  const scafMat = new THREE.MeshStandardMaterial({ color: 0x8a8f94, roughness: 0.5, metalness: 0.6 })
  const meshNetMat = new THREE.MeshStandardMaterial({
    color: 0x2f8f4f, transparent: true, opacity: 0.5, side: THREE.DoubleSide, roughness: 0.9,
  })
  const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 7.2, 6)
  // 南側（-z）鷹架
  for (let i = 0; i < 5; i++) {
    const pole = new THREE.Mesh(poleGeo, scafMat)
    pole.position.set(-fw / 2 + i * (fw / 4), 3.6, -fd / 2 - 0.55)
    frame.add(pole)
  }
  for (const hy of [2.2, 4.4, 6.6]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(fw + 0.4, 0.07, 0.07), scafMat)
    bar.position.set(0, hy, -fd / 2 - 0.55)
    frame.add(bar)
  }
  const netS = new THREE.Mesh(new THREE.PlaneGeometry(fw + 0.6, 7.0), meshNetMat)
  netS.position.set(0, 3.7, -fd / 2 - 0.75)
  frame.add(netS)
  // 西側（-x）鷹架
  for (let i = 0; i < 4; i++) {
    const pole = new THREE.Mesh(poleGeo, scafMat)
    pole.position.set(-fw / 2 - 0.55, 3.6, -fd / 2 + 0.4 + i * ((fd - 0.8) / 3))
    frame.add(pole)
  }
  for (const hy of [2.2, 4.4, 6.6]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, fd + 0.4), scafMat)
    bar.position.set(-fw / 2 - 0.55, hy, 0)
    frame.add(bar)
  }
  const netW = new THREE.Mesh(new THREE.PlaneGeometry(fd + 0.6, 7.0), meshNetMat)
  netW.rotation.y = Math.PI / 2
  netW.position.set(-fw / 2 - 0.75, 3.7, 0)
  frame.add(netW)

  // 一樓其中一跨釘上木模板
  const plyMat = new THREE.MeshStandardMaterial({ color: 0x9c7a4a, roughness: 0.9, side: THREE.DoubleSide })
  const ply = new THREE.Mesh(new THREE.PlaneGeometry(fw / 2 - 0.6, 2.6), plyMat)
  ply.position.set(fw / 4, 1.5, fd / 2 - 0.28)
  frame.add(ply)

  frame.position.set(cx - 6.5, 0.2, cz - 6.5)
  scene.add(frame)
  const frameBox = new THREE.Box3().setFromObject(frame)
  frameBox.expandByScalar(0.9)
  colliders.push(frameBox)

  // 塔式吊車（吊臂伸到骨架上方）
  const craneMat = new THREE.MeshStandardMaterial({ color: 0xe8b800, roughness: 0.5, metalness: 0.3 })
  const crane = new THREE.Group()
  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.8, 14, 0.8), craneMat)
  mast.position.y = 7
  mast.castShadow = true
  crane.add(mast)
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), craneMat)
  cab.position.y = 14.5
  crane.add(cab)
  const jib = new THREE.Mesh(new THREE.BoxGeometry(12, 0.45, 0.45), craneMat)
  jib.position.set(-6, 15.1, 0)
  jib.castShadow = true
  crane.add(jib)
  const counterJib = new THREE.Mesh(new THREE.BoxGeometry(4, 0.45, 0.45), craneMat)
  counterJib.position.set(2.5, 15.1, 0)
  crane.add(counterJib)
  const counterWeight = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 1.0, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x8a8a86, roughness: 0.9 })
  )
  counterWeight.position.set(4.2, 14.8, 0)
  crane.add(counterWeight)
  const apex = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.6, 0.5), craneMat)
  apex.position.y = 16.1
  crane.add(apex)
  const tieMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.6 })
  for (const [tx, tlen, trot] of [[-3.5, 7.4, 0.28], [2.2, 4.6, -0.42]]) {
    const tie = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, tlen, 5), tieMat)
    tie.position.set(tx, 15.9, 0)
    tie.rotation.z = Math.PI / 2 + trot
    crane.add(tie)
  }
  const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 6, 5), tieMat)
  cable.position.set(-9.5, 12, 0)
  crane.add(cable)
  const hook = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), craneMat)
  hook.position.set(-9.5, 8.9, 0)
  crane.add(hook)
  crane.position.set(cx + 2, 0.2, cz - 10.2)
  scene.add(crane)
  const mastBox = new THREE.Box3().setFromObject(mast.clone())
  mastBox.translate(new THREE.Vector3(cx + 2, 0.2, cz - 10.2))
  mastBox.expandByScalar(0.9)
  colliders.push(mastBox)

  // 挖土機
  const digger = new THREE.Group()
  const trackMat = new THREE.MeshStandardMaterial({ color: 0x2e2e2e, roughness: 0.9 })
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd9a012, roughness: 0.55, metalness: 0.2 })
  for (const tz of [-0.62, 0.62]) {
    const track = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.55, 0.6), trackMat)
    track.position.set(0, 0.28, tz)
    digger.add(track)
  }
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.55, 1.7), bodyMat)
  deck.position.y = 0.85
  digger.add(deck)
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.9), bodyMat)
  cabin.position.set(-0.45, 1.6, 0.35)
  digger.add(cabin)
  const cabinWin = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 0.6),
    new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.2, metalness: 0.4 })
  )
  cabinWin.position.set(0.04, 1.65, 0.35)
  cabinWin.rotation.y = Math.PI / 2
  digger.add(cabinWin)
  const boom = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.32, 0.3), bodyMat)
  boom.position.set(1.55, 1.85, -0.1)
  boom.rotation.z = 0.62
  boom.castShadow = true
  digger.add(boom)
  const arm = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.24, 0.24), bodyMat)
  arm.position.set(3.0, 1.75, -0.1)
  arm.rotation.z = -0.95
  digger.add(arm)
  const bucket = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.55), trackMat)
  bucket.position.set(3.55, 0.75, -0.1)
  digger.add(bucket)
  digger.rotation.y = rand(-0.4, 0.4)
  digger.position.set(cx + 8.2, 0.2, cz + 0.2)
  scene.add(digger)
  const diggerBox = new THREE.Box3().setFromObject(digger)
  diggerBox.expandByScalar(0.9)
  colliders.push(diggerBox)

  // 貨櫃工務所
  const office = new THREE.Group()
  const officeBody = new THREE.Mesh(
    new THREE.BoxGeometry(4.8, 2.5, 2.2),
    new THREE.MeshStandardMaterial({ color: 0xdde4e8, roughness: 0.6, metalness: 0.25 })
  )
  officeBody.position.y = 1.35
  officeBody.castShadow = true
  office.add(officeBody)
  const officeStripe = new THREE.Mesh(
    new THREE.PlaneGeometry(4.8, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x2a5fa8, roughness: 0.6 })
  )
  officeStripe.position.set(0, 2.3, 1.11)
  office.add(officeStripe)
  const officeDoor = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 1.8),
    new THREE.MeshStandardMaterial({ color: 0x4a5a60, roughness: 0.7 })
  )
  officeDoor.position.set(-1.6, 1.0, 1.11)
  office.add(officeDoor)
  const officeWin = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x334455, roughness: 0.2 })
  )
  officeWin.position.set(0.8, 1.5, 1.11)
  office.add(officeWin)
  office.rotation.y = 0.08
  office.position.set(cx - 8.5, 0.2, cz + 10.3)
  scene.add(office)
  const officeBox = new THREE.Box3().setFromObject(office)
  officeBox.expandByScalar(0.9)
  colliders.push(officeBox)

  // 流動廁所
  const toilet = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 2.3, 1.05),
    new THREE.MeshStandardMaterial({ color: 0x74b8d8, roughness: 0.6 })
  )
  toilet.position.set(cx - 4.6, 1.35, cz + 11.2)
  toilet.castShadow = true
  scene.add(toilet)
  const toiletDoor = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 1.9),
    new THREE.MeshStandardMaterial({ color: 0x4a90b8, roughness: 0.6 })
  )
  toiletDoor.position.set(cx - 4.6, 1.2, cz + 11.2 - 0.54)
  toiletDoor.rotation.y = Math.PI
  scene.add(toiletDoor)

  // 鋼筋堆（放在枕木上）
  const rebarMat = new THREE.MeshStandardMaterial({ color: 0x6b4a3a, roughness: 0.7, metalness: 0.4 })
  const sleeperMat = new THREE.MeshStandardMaterial({ color: 0x7a5c3a, roughness: 0.9 })
  for (const sz2 of [-2, 2]) {
    const sleeper = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.22, 0.22), sleeperMat)
    sleeper.position.set(cx + 10.8, 0.31, cz + 4 + sz2)
    scene.add(sleeper)
  }
  const rebarGeo = new THREE.CylinderGeometry(0.045, 0.045, 6, 5)
  for (let i = 0; i < 7; i++) {
    const rebar = new THREE.Mesh(rebarGeo, rebarMat)
    rebar.rotation.x = Math.PI / 2
    rebar.position.set(cx + 10.5 + (i % 4) * 0.12, 0.47 + Math.floor(i / 4) * 0.1, cz + 4)
    scene.add(rebar)
  }

  // 模板木材堆
  const plankMat = new THREE.MeshStandardMaterial({ color: 0xb08a56, roughness: 0.9 })
  for (let i = 0; i < 4; i++) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(3, 0.12, 0.9), plankMat)
    plank.position.set(cx - 10.6 + rand(-0.08, 0.08), 0.28 + i * 0.13, cz + 0.5 + rand(-0.08, 0.08))
    plank.rotation.y = rand(-0.05, 0.05)
    scene.add(plank)
  }

  // 磚塊棧板
  const pallet = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 1.1), sleeperMat)
  pallet.position.set(cx - 10.6, 0.28, cz + 3.6)
  scene.add(pallet)
  const bricks = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.8, 1.0),
    new THREE.MeshStandardMaterial({ color: 0x9c4a3a, roughness: 0.95 })
  )
  bricks.position.set(cx - 10.6, 0.75, cz + 3.6)
  scene.add(bricks)

  // 油桶
  const drumGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.92, 12)
  const drumColors = [0x2a5fa8, 0x8a4a30, 0x3a6a4a]
  drumColors.forEach((color, i) => {
    const drum = new THREE.Mesh(drumGeo, new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.35 }))
    drum.position.set(cx + 11 + (i % 2) * 0.75, 0.68, cz - 6.5 + Math.floor(i / 2) * 0.75)
    scene.add(drum)
  })

  // 地面細節：輪胎痕與碎石斑
  const trackDecalMat = new THREE.MeshStandardMaterial({ color: 0x7a6248, roughness: 0.98 })
  for (const tx of [-2.3, -0.7]) {
    const trackDecal = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 15), trackDecalMat)
    trackDecal.rotation.x = -Math.PI / 2
    trackDecal.position.set(cx + tx, 0.215, cz + 5)
    scene.add(trackDecal)
  }
  const patchMat = new THREE.MeshStandardMaterial({ color: 0x7a7268, roughness: 0.98 })
  for (const [gx, gz, gr] of [[4, -2, 1.8], [-3, 2.5, 1.4]]) {
    const patch = new THREE.Mesh(new THREE.CircleGeometry(gr, 14), patchMat)
    patch.rotation.x = -Math.PI / 2
    patch.position.set(cx + gx, 0.213, cz + gz)
    scene.add(patch)
  }

  // 砂堆與碎石堆
  const sand = new THREE.Mesh(
    new THREE.ConeGeometry(2.1, 1.3, 12),
    new THREE.MeshStandardMaterial({ color: 0xd2b57e, roughness: 0.98 })
  )
  sand.position.set(cx + 6, 0.85, cz - 7)
  scene.add(sand)
  const gravel = new THREE.Mesh(
    new THREE.ConeGeometry(1.6, 1.0, 12),
    new THREE.MeshStandardMaterial({ color: 0x8a8a86, roughness: 0.98 })
  )
  gravel.position.set(cx + 9.5, 0.7, cz - 3.5)
  scene.add(gravel)

  // 水泥涵管（兩根在下、一根疊上）
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0xc4beb2, roughness: 0.85, side: THREE.DoubleSide })
  const pipeGeo = new THREE.CylinderGeometry(0.6, 0.6, 2.6, 14, 1, true)
  const pipePos = [
    [cx - 7.5, 0.8, cz + 6, 0], [cx - 7.5, 0.8, cz + 7.4, 0], [cx - 7.5, 1.85, cz + 6.7, 0],
  ]
  for (const [px2, py2, pz2] of pipePos) {
    const pipe = new THREE.Mesh(pipeGeo, pipeMat)
    pipe.rotation.z = Math.PI / 2
    pipe.position.set(px2, py2, pz2)
    scene.add(pipe)
  }

  // 三角錐
  const coneMat = new THREE.MeshStandardMaterial({ color: 0xe86a10, roughness: 0.6 })
  for (let i = 0; i < 5; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.55, 8), coneMat)
    cone.position.set(cx + rand(-4, 4), 0.48, cz + BLOCK / 2 - rand(1.5, 4))
    scene.add(cone)
  }

  // 施工告示牌（面向街道）
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(3.2, 1.2),
    new THREE.MeshBasicMaterial({ map: makeConstructionSignTexture(), side: THREE.DoubleSide })
  )
  sign.position.set(cx, 1.9, cz + BLOCK / 2 + 0.2)
  scene.add(sign)
  const postMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.7 })
  for (const sx of [-1.3, 1.3]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6), postMat)
    post.position.set(cx + sx, 1.2, cz + BLOCK / 2 + 0.2)
    scene.add(post)
  }

  // 帆布蓋建材的候選位置（避開骨架、砂石與涵管的角落）
  return [
    { x: cx + rand(2, 5), z: cz + rand(2, 5) },
    { x: cx + rand(-3, 0), z: cz + rand(5, 8) },
    { x: cx + rand(4, 8), z: cz + rand(5, 8) },
    { x: cx + rand(1, 5), z: cz + rand(-4, -1) },
  ]
}

// 運河小船：純造景
function makeBoat() {
  const g = new THREE.Group()
  const hullMat = new THREE.MeshStandardMaterial({ color: pick([0x8a5a3a, 0x5a6a7a, 0x3a5a4a]), roughness: 0.7 })
  const hull = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.5, 3.2), hullMat)
  hull.position.y = 0.25
  g.add(hull)
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.6, 1.2),
    new THREE.MeshStandardMaterial({ color: 0xe0dccb, roughness: 0.8 })
  )
  cabin.position.set(0, 0.75, -0.6)
  g.add(cabin)
  return g
}

// 街道上的汽車：純造景，沿直線自動前進（總高壓在 1.2m 以下，不與最低飛行高度衝突）
function makeCar() {
  const g = new THREE.Group()
  const bodyMat = new THREE.MeshStandardMaterial({
    color: pick([0xd8d8d8, 0x2a2a2e, 0x8a1a1a, 0x2a4a7a, 0xc8c0a8, 0x4a6a4a, 0xe0a020]),
    roughness: 0.4,
    metalness: 0.3,
  })
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.5, 4.0), bodyMat)
  body.position.y = 0.5
  g.add(body)
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.4, 2.0),
    new THREE.MeshStandardMaterial({ color: 0x223244, roughness: 0.2, metalness: 0.4 })
  )
  cabin.position.set(0, 0.95, -0.25)
  g.add(cabin)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 })
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.24, 10)
  for (const wx of [-0.82, 0.82]) {
    for (const wz of [-1.25, 1.25]) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(wx, 0.3, wz)
      g.add(wheel)
    }
  }
  // 頭燈（前）與尾燈（後）
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff2c0 })
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xc02020 })
  for (const lx of [-0.55, 0.55]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.06), headMat)
    head.position.set(lx, 0.55, 2.01)
    g.add(head)
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.06), tailMat)
    tail.position.set(lx, 0.55, -2.01)
    g.add(tail)
  }
  return g
}

// 路上的行人：低多邊形小人，手腳會擺動、沿路邊行走
function makePedestrian() {
  const g = new THREE.Group()
  const skinMat = new THREE.MeshStandardMaterial({ color: pick([0xe8bb95, 0xd9a06f, 0xc98a5a]), roughness: 0.8 })
  const shirtMat = new THREE.MeshStandardMaterial({
    color: pick([0xd85a4a, 0x4a7ab5, 0xe8d05a, 0x5aa06a, 0xf0f0ea, 0x8a5aa0, 0x3a3a40]),
    roughness: 0.8,
  })
  const pantsMat = new THREE.MeshStandardMaterial({ color: pick([0x2a3a55, 0x3a3a3a, 0x6a5a45]), roughness: 0.85 })

  // 腿（樞軸在髖部，走路時前後擺動）
  const legGeo = new THREE.BoxGeometry(0.13, 0.62, 0.13)
  legGeo.translate(0, -0.31, 0)
  const legL = new THREE.Mesh(legGeo, pantsMat)
  legL.position.set(-0.09, 0.62, 0)
  g.add(legL)
  const legR = new THREE.Mesh(legGeo, pantsMat)
  legR.position.set(0.09, 0.62, 0)
  g.add(legR)

  // 軀幹與頭
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.5, 0.2), shirtMat)
  torso.position.y = 0.62 + 0.25
  g.add(torso)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), skinMat)
  head.position.y = 1.27
  g.add(head)
  // 部分行人戴帽子
  if (Math.random() < 0.35) {
    const hat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 0.06, 10),
      new THREE.MeshStandardMaterial({ color: pick([0xe8e0c8, 0x4a6a8a, 0xc05a3a]), roughness: 0.8 })
    )
    hat.position.y = 1.38
    g.add(hat)
  }

  // 手臂（樞軸在肩部，與腿反向擺動）
  const armGeo = new THREE.BoxGeometry(0.09, 0.48, 0.09)
  armGeo.translate(0, -0.24, 0)
  const armL = new THREE.Mesh(armGeo, shirtMat)
  armL.position.set(-0.23, 1.1, 0)
  g.add(armL)
  const armR = new THREE.Mesh(armGeo, shirtMat)
  armR.position.set(0.23, 1.1, 0)
  g.add(armR)

  g.userData.limbs = { legL, legR, armL, armR }
  return g
}

// 行人自動走動：沿所屬街區的人行道四周繞行（不進入車道），
// 轉角自動轉向、手腳擺動。
const WALK_CORNERS = [[1, 1], [-1, 1], [-1, -1], [1, -1]] // 人行道四個轉角（順序＝逆時針）
const WALK_R = BLOCK / 2 + 0.6 // 人行道行走線：距離街區中心的偏移

// ---------- 交通號誌週期 ----------
// 0~8s 南北向綠燈、8~10s 南北向黃燈、10~18s 東西向綠燈、18~20s 東西向黃燈
const SIG_CYCLE = 20
const nsGreen = (t) => t < 8
const ewGreen = (t) => t >= 10 && t < 18
// 行人穿越窗口：只在平行車流綠燈初期起步，確保綠燈（含黃燈）內走完，
// 不會與取得綠燈的橫向車流衝突
const canPedCross = (walkAxis, t) => (walkAxis === 'z' ? t < 2 : t >= 10 && t < 12)

const LAMP_ON = [0xe83030, 0xffc72e, 0x2ee06a]   // 紅、黃、綠（亮）
const LAMP_OFF = [0x401010, 0x403208, 0x104020]  // 紅、黃、綠（暗）
function setLamps(mats, onIdx) {
  for (let i = 0; i < 3; i++) mats[i].color.setHex(i === onIdx ? LAMP_ON[i] : LAMP_OFF[i])
}

// 每幀更新號誌相位與燈色（燈面材質全城共用，切換成本 O(1)）
export function updateTraffic(traffic, dt) {
  traffic.t = (traffic.t + dt) % SIG_CYCLE
  const t = traffic.t
  setLamps(traffic.lampMats.ns, nsGreen(t) ? 2 : t < 10 ? 1 : 0)
  setLamps(traffic.lampMats.ew, ewGreen(t) ? 2 : t >= 18 ? 1 : 0)
}

// 號誌燈：直立桿＋懸臂＋橫式三燈燈箱（燈面朝道路兩側）
function makeTrafficLight(lampMats, poleMat, headMat) {
  const g = new THREE.Group()
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 5.2, 8), poleMat)
  pole.position.y = 2.6
  g.add(pole)
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4.4, 6), poleMat)
  arm.rotation.z = Math.PI / 2
  arm.position.set(-2.2, 5.1, 0)
  g.add(arm)
  const head = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.44, 0.2), headMat)
  head.position.set(-4.2, 4.72, 0)
  g.add(head)
  for (let i = 0; i < 3; i++) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.28), lampMats[i])
    lamp.position.set(-4.2 - 0.38 + i * 0.38, 4.72, 0)
    g.add(lamp)
  }
  return g
}

// 沿人行道環線定位一個點的周長參數（供斑馬線入口觸發點使用）
function locateLoopS(dx, dz, R) {
  const L = 2 * R
  if (Math.abs(dz - R) < 0.05) return 0 * L + ((R - dx) / (2 * R)) * L
  if (Math.abs(dx + R) < 0.05) return 1 * L + ((R - dz) / (2 * R)) * L
  if (Math.abs(dz + R) < 0.05) return 2 * L + ((dx + R) / (2 * R)) * L
  return 3 * L + ((dz + R) / (2 * R)) * L
}

// 本幀是否經過周長參數 sT（考慮方向與繞圈）
function passedS(sOld, sNew, sT, dir, total) {
  const travelled = dir > 0 ? (sNew - sOld + total) % total : (sOld - sNew + total) % total
  const d = dir > 0 ? (sT - sOld + total) % total : (sOld - sT + total) % total
  return d > 0 && d <= travelled
}

// 行人：平時沿人行道繞行街區；經過斑馬線入口時可能過馬路——
// 依交通號誌等待綠燈，只走斑馬線（畫線位置），到對面後改繞新街區。
export function updatePedestrians(peds, dt, traffic) {
  for (const w of peds) {
    const { legL, legR, armL, armR } = w.group.userData.limbs

    if (w.mode === 'wait') {
      // 站在路緣等待號誌，手腳漸停
      legL.rotation.x *= 0.85; legR.rotation.x *= 0.85
      armL.rotation.x *= 0.85; armR.rotation.x *= 0.85
      if (canPedCross(w.cross.walkAxis, traffic.t)) {
        w.mode = 'cross'
        w.u = 0
      }
      continue
    }

    // 走路擺動：步頻與行走速度成正比
    w.phase += dt * w.speed * 4.2
    const sw = Math.sin(w.phase) * 0.5
    legL.rotation.x = sw
    legR.rotation.x = -sw
    armL.rotation.x = -sw * 0.7
    armR.rotation.x = sw * 0.7

    if (w.mode === 'cross') {
      // 沿斑馬線直線穿越（過馬路時步伐稍快）
      const c = w.cross
      const dx = c.to.x - c.from.x
      const dz = c.to.z - c.from.z
      const dist = Math.hypot(dx, dz)
      w.u = Math.min(1, w.u + (w.speed * 1.4 * dt) / dist)
      // 上下路緣的高度過渡（人行道基座高 0.2）
      const edge = Math.min(w.u, 1 - w.u)
      const y = 0.02 + 0.18 * (1 - Math.min(edge / 0.1, 1))
      w.group.position.set(c.from.x + dx * w.u, y, c.from.z + dz * w.u)
      w.group.rotation.y = Math.atan2(dx, dz)
      if (w.u >= 1) {
        // 抵達對面：改繞新街區的人行道
        w.bx = c.toBx
        w.bz = c.toBz
        w.cx = -HALF + w.bx * PITCH + BLOCK / 2
        w.cz = -HALF + w.bz * PITCH + BLOCK / 2
        w.s = locateLoopS(c.to.x - w.cx, c.to.z - w.cz, w.R)
        w.mode = 'loop'
        w.group.position.y = 0.2
      }
      continue
    }

    // 沿人行道周長前進（dir=-1 為順時針）
    const L = 2 * w.R
    const total = 4 * L
    const sOld = w.s
    w.s = ((w.s + w.dir * w.speed * dt) % total + total) % total

    // 經過斑馬線入口：有機率決定過馬路（綠燈直接走，否則在路緣等待）
    const list = traffic.crossings.get(w.bx + ',' + w.bz)
    if (list) {
      let chosen = null
      for (const c of list) {
        if (passedS(sOld, w.s, c.s, w.dir, total) && Math.random() < 0.45) { chosen = c; break }
      }
      if (chosen) {
        w.cross = chosen
        w.u = 0
        w.group.position.set(chosen.from.x, 0.2, chosen.from.z)
        w.group.rotation.y = Math.atan2(chosen.to.x - chosen.from.x, chosen.to.z - chosen.from.z)
        w.mode = canPedCross(chosen.walkAxis, traffic.t) ? 'cross' : 'wait'
        continue
      }
    }

    const k = Math.floor(w.s / L)
    const u = (w.s % L) / L
    const a = WALK_CORNERS[k]
    const b = WALK_CORNERS[(k + 1) % 4]
    w.group.position.x = w.cx + (a[0] + (b[0] - a[0]) * u) * w.R
    w.group.position.z = w.cz + (a[1] + (b[1] - a[1]) * u) * w.R
    w.group.rotation.y = Math.atan2((b[0] - a[0]) * w.dir, (b[1] - a[1]) * w.dir)
  }
}

// 汽車：沿所屬街道直行；紅黃燈時在停止線（斑馬線之前）停車，
// 與前車保持距離排隊，綠燈起步，開出城市邊界後從另一端回來。
const CAR_STOP_D = STREET / 2 + 6.4 // 停止線與路口中心的距離（車頭停在斑馬線前）
export function updateCars(cars, dt, traffic) {
  const t = traffic.t
  const stopForZ = !nsGreen(t)
  const stopForX = !ewGreen(t)
  const limit = HALF + 30
  for (const c of cars) {
    const p = c.group.position
    const coord = c.axis === 'z' ? p.z : p.x
    let step = c.speed * dt

    // 紅黃燈：尚未越過停止線的車，在線前停下；已越線者繼續通過（不停在斑馬線上）
    if (c.sig && (c.axis === 'z' ? stopForZ : stopForX)) {
      const lines = c.axis === 'z' ? traffic.stopZs : traffic.stopXs
      let dMin = Infinity
      for (const line of lines) {
        const d = (line - coord) * c.dir
        if (d > 0 && d < dMin) dMin = d
      }
      if (dMin !== Infinity && dMin > CAR_STOP_D) step = Math.min(step, dMin - CAR_STOP_D)
      else if (dMin !== Infinity && dMin > CAR_STOP_D - 0.2) step = 0
    }

    // 與同車道前車保持安全距離（紅燈排隊不重疊）
    let gapMin = Infinity
    for (const o of cars) {
      if (o === c || o.axis !== c.axis || o.dir !== c.dir) continue
      const op = o.group.position
      const laneDiff = c.axis === 'z' ? Math.abs(op.x - p.x) : Math.abs(op.z - p.z)
      if (laneDiff > 1) continue
      const gap = ((c.axis === 'z' ? op.z : op.x) - coord) * c.dir
      if (gap > 0 && gap < gapMin) gapMin = gap
    }
    if (gapMin !== Infinity) step = Math.min(step, Math.max(0, gapMin - 5.2))

    if (c.axis === 'z') {
      p.z += c.dir * step
      if (c.dir > 0 && p.z > limit) p.z = -limit
      else if (c.dir < 0 && p.z < -limit) p.z = limit
    } else {
      p.x += c.dir * step
      if (c.dir > 0 && p.x > limit) p.x = -limit
      else if (c.dir < 0 && p.x < -limit) p.x = limit
    }
  }
}

// 公園涼亭：方形四柱＋攢尖紅瓦頂
function makePavilion() {
  const g = new THREE.Group()
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xbfb6a6, roughness: 0.9 })
  const base = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.24, 3.6), baseMat)
  base.position.y = 0.12
  g.add(base)
  const postMat = new THREE.MeshStandardMaterial({ color: 0x8a4a3a, roughness: 0.7 })
  for (const px of [-1.3, 1.3]) {
    for (const pz of [-1.3, 1.3]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.3, 8), postMat)
      post.position.set(px, 0.24 + 1.15, pz)
      g.add(post)
    }
  }
  // 亭內環形座椅
  const seatMat = new THREE.MeshStandardMaterial({ color: 0xa87a52, roughness: 0.8 })
  for (const [sx, sz, w, d] of [[0, -1.05, 2.2, 0.35], [-1.05, 0, 0.35, 2.2], [1.05, 0, 0.35, 2.2]]) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d), seatMat)
    seat.position.set(sx, 0.68, sz)
    g.add(seat)
  }
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8a3a2a, roughness: 0.75 })
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.9, 1.5, 4), roofMat)
  roof.rotation.y = Math.PI / 4
  roof.position.y = 2.54 + 0.75
  g.add(roof)
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), roofMat)
  finial.position.y = 2.54 + 1.5
  g.add(finial)
  return g
}

// 兒童溜滑梯：階梯＋平台＋斜滑道，配色鮮豔
function makeSlide() {
  const g = new THREE.Group()
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4a7ab5, roughness: 0.5 })
  const slideMat = new THREE.MeshStandardMaterial({ color: 0xe0563a, roughness: 0.4 })
  // 平台與四腳
  for (const px of [-0.55, 0.55]) {
    for (const pz of [-0.55, 0.55]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.5, 6), frameMat)
      leg.position.set(px, 0.75, pz)
      g.add(leg)
    }
  }
  const platform = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.1, 1.3), frameMat)
  platform.position.y = 1.5
  g.add(platform)
  // 平台小屋頂
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.6, 4), slideMat)
  cap.rotation.y = Math.PI / 4
  cap.position.y = 2.5
  g.add(cap)
  for (const px of [-0.5, 0.5]) {
    for (const pz of [-0.5, 0.5]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 6), frameMat)
      post.position.set(px, 1.9, pz)
      g.add(post)
    }
  }
  // 滑道（斜面）
  const chute = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 2.6), slideMat)
  chute.rotation.x = 0.62
  chute.position.set(0, 0.85, 1.65)
  g.add(chute)
  // 階梯（另一側）
  const stepMat = new THREE.MeshStandardMaterial({ color: 0xf0c040, roughness: 0.5 })
  for (let i = 0; i < 4; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.07, 0.25), stepMat)
    step.position.set(0, 0.35 + i * 0.38, -0.75 - (3 - i) * 0.22)
    g.add(step)
  }
  return g
}

// 盪鞦韆：A 字架＋兩個吊座
function makeSwingSet() {
  const g = new THREE.Group()
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x3a8a5a, roughness: 0.5 })
  for (const side of [-1, 1]) {
    for (const lean of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.5, 6), frameMat)
      leg.position.set(side * 1.5, 1.1, lean * 0.55)
      // A 字形：柱頂在橫桿下方會合、柱腳向外張開（傾斜方向與腳位偏移相反）
      leg.rotation.x = -lean * 0.42
      g.add(leg)
    }
  }
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 3.1, 6), frameMat)
  bar.rotation.z = Math.PI / 2
  bar.position.y = 2.25
  g.add(bar)
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.8 })
  const seatMat = new THREE.MeshStandardMaterial({ color: 0xf0c040, roughness: 0.5 })
  for (const sx of [-0.7, 0.7]) {
    for (const rx of [-0.2, 0.2]) {
      const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.55, 4), ropeMat)
      rope.position.set(sx + rx, 1.45, 0)
      g.add(rope)
    }
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.24), seatMat)
    seat.position.set(sx, 0.65, 0)
    g.add(seat)
  }
  return g
}

// 公園長椅
function makeBench() {
  const g = new THREE.Group()
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x9a6a4a, roughness: 0.8 })
  const legMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.7 })
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.45), woodMat)
  seat.position.y = 0.45
  g.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.4, 0.07), woodMat)
  back.position.set(0, 0.78, -0.2)
  back.rotation.x = -0.12
  g.add(back)
  for (const lx of [-0.6, 0.6]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.4), legMat)
    leg.position.set(lx, 0.22, 0)
    g.add(leg)
  }
  return g
}

// 社區公園：草皮、十字步道、涼亭、兒童遊樂區、綠籬與環繞樹木。
// 回傳公園角落的廢棄物堆候選位置（公園疏於整理的角落是常見孳生源）。
function addPark(scene, colliders, cx, cz) {
  // 草皮鋪面
  const lawn = new THREE.Mesh(
    new THREE.PlaneGeometry(BLOCK - 0.8, BLOCK - 0.8),
    new THREE.MeshStandardMaterial({ color: 0x6f9c55, roughness: 0.95 })
  )
  lawn.rotation.x = -Math.PI / 2
  lawn.position.set(cx, 0.21, cz)
  lawn.receiveShadow = true
  scene.add(lawn)

  // 十字步道與中央小廣場
  const pathMat = new THREE.MeshStandardMaterial({ color: 0xcac0a8, roughness: 0.95 })
  for (const [w, d] of [[BLOCK - 1, 2.2], [2.2, BLOCK - 1]]) {
    const path = new THREE.Mesh(new THREE.PlaneGeometry(w, d), pathMat)
    path.rotation.x = -Math.PI / 2
    path.position.set(cx, 0.225, cz)
    scene.add(path)
  }
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(3.0, 24), pathMat)
  plaza.rotation.x = -Math.PI / 2
  plaza.position.set(cx, 0.226, cz)
  scene.add(plaza)

  // 四邊綠籬（每邊中央留出入口，銜接十字步道）
  const hedgeMat = new THREE.MeshStandardMaterial({ color: 0x4a7a3a, roughness: 0.95 })
  const hh = BLOCK / 2 - 0.8
  const seg = (BLOCK - 1.6 - 3.2) / 2
  const off = 1.6 + seg / 2
  for (const side of [-1, 1]) {
    for (const half of [-1, 1]) {
      const hedgeH = new THREE.Mesh(new THREE.BoxGeometry(seg, 0.6, 0.6), hedgeMat)
      hedgeH.position.set(cx + half * off, 0.5, cz + side * hh)
      scene.add(hedgeH)
      const hedgeV = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, seg), hedgeMat)
      hedgeV.position.set(cx + side * hh, 0.5, cz + half * off)
      scene.add(hedgeV)
    }
  }

  // 涼亭（西南象限）
  const pavilion = makePavilion()
  pavilion.position.set(cx - 6.5, 0.2, cz - 6.5)
  pavilion.rotation.y = rand(0, Math.PI * 2)
  scene.add(pavilion)
  const pavBox = new THREE.Box3().setFromObject(pavilion)
  pavBox.expandByScalar(0.6)
  colliders.push(pavBox)

  // 兒童遊樂區（東北象限）：沙坑＋溜滑梯＋盪鞦韆
  const sand = new THREE.Mesh(
    new THREE.CircleGeometry(4.8, 24),
    new THREE.MeshStandardMaterial({ color: 0xdac9a0, roughness: 0.98 })
  )
  sand.rotation.x = -Math.PI / 2
  sand.position.set(cx + 6.2, 0.224, cz + 5.8)
  scene.add(sand)

  const slide = makeSlide()
  slide.position.set(cx + 4.6, 0.22, cz + 7.2)
  slide.rotation.y = rand(0, Math.PI * 2)
  scene.add(slide)
  const slideBox = new THREE.Box3().setFromObject(slide)
  slideBox.expandByScalar(0.5)
  colliders.push(slideBox)

  const swing = makeSwingSet()
  swing.position.set(cx + 8.2, 0.22, cz + 3.6)
  swing.rotation.y = rand(-0.4, 0.4)
  scene.add(swing)
  const swingBox = new THREE.Box3().setFromObject(swing)
  swingBox.expandByScalar(0.5)
  colliders.push(swingBox)

  // 長椅（面向中央廣場）
  for (const [bx2, bz2, ry] of [[cx - 4.2, cz + 1.6, Math.PI], [cx + 1.6, cz - 4.2, Math.PI / 2]]) {
    const bench = makeBench()
    bench.position.set(bx2, 0.22, bz2)
    bench.rotation.y = ry
    scene.add(bench)
  }

  // 環繞樹木（增加綠蔭；混入榕樹）
  for (let i = 0; i < 8; i++) {
    const ang = (i / 8) * Math.PI * 2 + rand(-0.15, 0.15)
    const r = rand(9.2, 11)
    const tx = cx + Math.cos(ang) * r
    const tz = cz + Math.sin(ang) * r
    // 避開出入口步道
    if (Math.abs(tx - cx) < 2.2 || Math.abs(tz - cz) < 2.2) continue
    const tree = Math.random() < 0.35 ? makeBanyanTree() : makeTree()
    tree.position.set(tx, 0.2, tz)
    scene.add(tree)
  }

  // 廢棄物堆候選位置：公園四個角落（綠籬內側、樹蔭下的疏忽角落）
  return [
    { x: cx - 9.6 + rand(-0.6, 0.6), z: cz + 9.6 + rand(-0.6, 0.6) },
    { x: cx + 9.6 + rand(-0.6, 0.6), z: cz - 9.6 + rand(-0.6, 0.6) },
    { x: cx - 9.6 + rand(-0.6, 0.6), z: cz - 9.9 + rand(-0.4, 0.4) },
    { x: cx + 10 + rand(-0.4, 0.4), z: cz + 9.9 + rand(-0.4, 0.4) },
  ]
}

// ---------- 廢棄空地的棄置物件 ----------

// 雜草叢：單一低多邊形圓錐，大量散佈營造荒草感
function makeWeedTuft() {
  const weed = new THREE.Mesh(
    new THREE.ConeGeometry(rand(0.18, 0.34), rand(0.4, 0.85), 5),
    new THREE.MeshStandardMaterial({ color: pick([0x6f7a3a, 0x7d8a45, 0x5f6a35, 0x8a8a50]), roughness: 0.95 })
  )
  weed.position.y = 0.2
  return weed
}

// 棄置沙發：褪色布面、缺腳直接坐地
function makeSofa() {
  const g = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: pick([0x7a6a5a, 0x5a6a7a, 0x6a5a48, 0x74506a]), roughness: 0.95 })
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.45, 0.85), mat)
  seat.position.y = 0.28
  g.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.6, 0.25), mat)
  back.position.set(0, 0.72, -0.32)
  back.rotation.x = -0.12
  g.add(back)
  for (const ax of [-1.02, 1.02]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.62, 0.85), mat)
    arm.position.set(ax, 0.42, 0)
    g.add(arm)
  }
  return g
}

// 棄置衣櫃：傾斜倚地、門板半開
function makeWardrobe() {
  const g = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: pick([0x7a5a3a, 0x6a4f35, 0x8a6a48]), roughness: 0.9 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.9, 0.55), mat)
  body.position.y = 0.95
  g.add(body)
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.7, 0.05), mat)
  door.position.set(0.35, 0.95, 0.34)
  door.rotation.y = 0.5
  g.add(door)
  g.rotation.z = rand(0.05, 0.12) // 微傾，顯出棄置感
  return g
}

// 廢輪胎堆：數個輪胎疊放＋一個斜靠
function makeTirePile() {
  const g = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.95 })
  const geo = new THREE.TorusGeometry(0.42, 0.17, 8, 18)
  const n = 2 + Math.floor(Math.random() * 3)
  for (let i = 0; i < n; i++) {
    const tire = new THREE.Mesh(geo, mat)
    tire.rotation.x = Math.PI / 2
    tire.position.set(rand(-0.08, 0.08), 0.18 + i * 0.34, rand(-0.08, 0.08))
    g.add(tire)
  }
  const lean = new THREE.Mesh(geo, mat)
  lean.position.set(0.85, 0.42, 0.2)
  lean.rotation.set(0.25, 0, 0.35)
  g.add(lean)
  return g
}

// 瓶罐堆：散落的玻璃瓶與鐵鋁罐
function makeBottleCluster() {
  const g = new THREE.Group()
  for (let i = 0; i < 7; i++) {
    const isCan = Math.random() < 0.45
    const r = isCan ? rand(0.05, 0.07) : rand(0.05, 0.08)
    const h = isCan ? rand(0.12, 0.16) : rand(0.22, 0.32)
    const bottle = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, h, 7),
      new THREE.MeshStandardMaterial({
        color: isCan ? pick([0xb8bcc0, 0xc0a030, 0xa04030]) : pick([0x4a7a3a, 0x8a6a2a, 0xa8c0b8]),
        roughness: isCan ? 0.4 : 0.2,
        metalness: isCan ? 0.5 : 0.1,
      })
    )
    const lying = Math.random() < 0.5
    bottle.position.set(rand(-0.8, 0.8), lying ? r : h / 2, rand(-0.8, 0.8))
    if (lying) bottle.rotation.set(Math.PI / 2, 0, rand(0, Math.PI))
    g.add(bottle)
  }
  return g
}

// 廢棄車輛：鏽蝕車身、輪胎消氣下沉、缺一輪
function makeJunkCar() {
  const g = new THREE.Group()
  const rustMat = new THREE.MeshStandardMaterial({ color: pick([0x9a6a4a, 0x7a5a48, 0x6a6a62]), roughness: 1 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.5, 4.0), rustMat)
  body.position.y = 0.38
  g.add(body)
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.4, 2.0),
    new THREE.MeshStandardMaterial({ color: 0x2a2a28, roughness: 0.9 })
  )
  cabin.position.set(0, 0.82, -0.25)
  g.add(cabin)
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.95 })
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.24, 10)
  const missing = Math.floor(Math.random() * 4) // 缺一顆輪子
  let idx = 0
  for (const wx of [-0.82, 0.82]) {
    for (const wz of [-1.25, 1.25]) {
      if (idx++ === missing) continue
      const wheel = new THREE.Mesh(wheelGeo, wheelMat)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(wx, 0.22, wz) // 消氣下沉
      g.add(wheel)
    }
  }
  g.rotation.z = 0.03
  return g
}

// 棄置洗衣機與床墊
function makeWashingMachine() {
  const g = new THREE.Group()
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 0.85, 0.62),
    new THREE.MeshStandardMaterial({ color: 0xd8d8d0, roughness: 0.8 })
  )
  box.position.y = 0.43
  g.add(box)
  const door = new THREE.Mesh(
    new THREE.CircleGeometry(0.2, 12),
    new THREE.MeshStandardMaterial({ color: 0x2a3a44, roughness: 0.3 })
  )
  door.position.set(0, 0.48, 0.315)
  g.add(door)
  g.rotation.z = rand(-0.08, 0.08)
  return g
}
function makeMattress() {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.22, 2.0),
    new THREE.MeshStandardMaterial({ color: 0xc8c0ac, roughness: 0.95 })
  )
  m.position.y = 0.32
  m.rotation.y = rand(0, Math.PI)
  return m
}

// 廢棄空地：三種情境隨機出現——
// fenced：鐵皮圍籬封閉（低飛進不去，正是無人機從上方巡查的優勢）
// overgrown：矮牆殘破、雜草叢生
// dump：開放空地大量棄置廢棄物（家具、輪胎、瓶罐、廢棄車輛）
// 回傳廢棄物堆（積水目標）候選位置；並將部分位置登錄為容器藏匿點。
function addAbandonedLot(scene, colliders, groundSpots, cx, cz) {
  const kind = pick(['fenced', 'overgrown', 'dump'])

  // 乾枯雜草地面＋土斑
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(BLOCK - 0.5, BLOCK - 0.5),
    new THREE.MeshStandardMaterial({ color: 0x8a865a, roughness: 1 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.set(cx, 0.21, cz)
  scene.add(ground)
  for (let i = 0; i < 6; i++) {
    const patch = new THREE.Mesh(
      new THREE.CircleGeometry(rand(1.5, 3.2), 10),
      new THREE.MeshStandardMaterial({ color: pick([0x9a8a70, 0x6f7a3a, 0x7d7a4f]), roughness: 1 })
    )
    patch.rotation.x = -Math.PI / 2
    patch.position.set(cx + rand(-9, 9), 0.215, cz + rand(-9, 9))
    scene.add(patch)
  }

  // 周界：鐵皮圍籬（fenced）／殘破磚牆（overgrown）／傾斜鐵絲網柱（dump）
  if (kind === 'fenced') {
    // 鐵皮圍籬高 2.2m：無人機低飛撞牆，得飛越圍籬從上方查看
    const panelColors = [0x9aa0a6, 0x8a9098, 0xa8adb2, 0x8a6a4a, 0x7a8a92]
    const postMat = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.7 })
    const H = BLOCK / 2
    for (const [dx, dz, horiz] of [[0, -H, true], [0, H, true], [-H, 0, false], [H, 0, false]]) {
      const nPanel = 5
      const len = BLOCK / nPanel
      for (let p = 0; p < nPanel; p++) {
        const off = -BLOCK / 2 + len * (p + 0.5)
        const panel = new THREE.Mesh(
          new THREE.BoxGeometry(horiz ? len : 0.1, 2.2, horiz ? 0.1 : len),
          new THREE.MeshStandardMaterial({ color: pick(panelColors), roughness: 0.55, metalness: 0.35 })
        )
        panel.position.set(cx + dx + (horiz ? off : 0), 1.3, cz + dz + (horiz ? 0 : off))
        scene.add(panel)
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.5, 0.14), postMat)
        post.position.set(
          cx + dx + (horiz ? off - len / 2 : 0),
          1.45,
          cz + dz + (horiz ? 0 : off - len / 2)
        )
        scene.add(post)
      }
      const wall = new THREE.Box3(
        new THREE.Vector3(cx + dx - (horiz ? BLOCK / 2 : 0.4), 0, cz + dz - (horiz ? 0.4 : BLOCK / 2)),
        new THREE.Vector3(cx + dx + (horiz ? BLOCK / 2 : 0.4), 2.5, cz + dz + (horiz ? 0.4 : BLOCK / 2))
      )
      colliders.push(wall)
    }
  } else if (kind === 'overgrown') {
    // 殘破磚牆：低矮、多處坍塌缺口
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x9a8a76, roughness: 0.95 })
    const H = BLOCK / 2
    for (const [dx, dz, horiz] of [[0, -H, true], [0, H, true], [-H, 0, false], [H, 0, false]]) {
      const nSeg = 7
      const len = BLOCK / nSeg
      for (let p = 0; p < nSeg; p++) {
        if (Math.random() < 0.3) continue // 坍塌缺口
        const off = -BLOCK / 2 + len * (p + 0.5)
        const seg = new THREE.Mesh(
          new THREE.BoxGeometry(horiz ? len - 0.2 : 0.28, rand(0.55, 0.95), horiz ? 0.28 : len - 0.2),
          wallMat
        )
        seg.position.set(cx + dx + (horiz ? off : 0), 0.55, cz + dz + (horiz ? 0 : off))
        scene.add(seg)
      }
    }
  } else {
    // dump：只剩幾支歪斜的圍籬柱
    const postMat = new THREE.MeshStandardMaterial({ color: 0x6a6a62, roughness: 0.8 })
    for (let p = 0; p < 10; p++) {
      const side = Math.floor(Math.random() * 4)
      const off = rand(-BLOCK / 2, BLOCK / 2)
      const H = BLOCK / 2
      const px = side < 2 ? cx + off : cx + (side === 2 ? -H : H)
      const pz = side < 2 ? cz + (side === 0 ? -H : H) : cz + off
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.6, 6), postMat)
      post.position.set(px, 0.95, pz)
      post.rotation.set(rand(-0.2, 0.2), 0, rand(-0.2, 0.2))
      scene.add(post)
    }
  }

  // 雜草：overgrown 最茂密，其他情境也有
  const weedCount = kind === 'overgrown' ? 42 : 22
  for (let i = 0; i < weedCount; i++) {
    const weed = makeWeedTuft()
    weed.position.x = cx + rand(-11, 11)
    weed.position.z = cz + rand(-11, 11)
    scene.add(weed)
  }
  if (kind === 'overgrown') {
    for (let i = 0; i < 3; i++) {
      const tree = Math.random() < 0.4 ? makeBanyanTree() : makeTree()
      tree.position.set(cx + rand(-8, 8), 0.2, cz + rand(-8, 8))
      scene.add(tree)
    }
  }

  // 棄置物：依情境決定密度（dump 最多）
  const junkSlots = shuffleLotSlots(cx, cz)
  const junkCount = kind === 'dump' ? 6 : 3
  const junkMakers = [makeSofa, makeWardrobe, makeTirePile, makeBottleCluster, makeWashingMachine, makeMattress]
  for (let i = 0; i < junkCount; i++) {
    const slot = junkSlots.pop()
    const junk = pick(junkMakers)()
    junk.position.x = slot.x
    junk.position.z = slot.z
    junk.position.y += 0.2
    junk.rotation.y += rand(0, Math.PI * 2)
    scene.add(junk)
  }
  // 廢棄車輛：dump 必有一台，其他情境一半機率
  if (kind === 'dump' || Math.random() < 0.5) {
    const slot = junkSlots.pop()
    const car = makeJunkCar()
    car.position.set(slot.x, 0.2, slot.z)
    car.rotation.y = rand(0, Math.PI * 2)
    scene.add(car)
    const box = new THREE.Box3().setFromObject(car)
    box.expandByScalar(0.4)
    colliders.push(box)
  }

  // 容器藏匿點（輪胎、水桶等會出現在這裡；鐵皮圍籬內只有從上方才看得到）
  const cSlot = junkSlots.pop()
  groundSpots.push({ x: cSlot.x, z: cSlot.z })
  groundSpots.push({ x: cx + rand(-4, 4), z: cz + rand(-4, 4) })

  // 廢棄物堆（積水目標）候選位置：取剩餘空位
  return junkSlots.splice(0, 5).map((s) => ({ x: s.x + rand(-0.5, 0.5), z: s.z + rand(-0.5, 0.5) }))
}

// 空地內的固定擺放格位（間距足夠、避免重疊），洗牌後依序取用
function shuffleLotSlots(cx, cz) {
  const slots = [
    [-8, -8], [0, -8.5], [8, -8], [-8.5, 0], [8.5, 0],
    [-8, 8], [0, 8.5], [8, 8], [-4, -4], [4, -4], [-4, 4], [4, 4],
  ].map(([dx, dz]) => ({ x: cx + dx + rand(-1, 1), z: cz + dz + rand(-1, 1) }))
  return slots.sort(() => Math.random() - 0.5)
}

// 燕尾脊裝飾：在屋簷四個角落加上向上翹起的裝飾，共用於廟宇與地標建築
function addSwallowWings(group, eaveW, eaveD, y, roofMat) {
  const wingGeo = new THREE.BoxGeometry(0.2, 0.9, 0.2)
  const corners = [
    [eaveW / 2 - 0.25, eaveD / 2 - 0.25], [eaveW / 2 - 0.25, -eaveD / 2 + 0.25],
    [-eaveW / 2 + 0.25, eaveD / 2 - 0.25], [-eaveW / 2 + 0.25, -eaveD / 2 + 0.25],
  ]
  for (const [cx, cz] of corners) {
    const wing = new THREE.Mesh(wingGeo, roofMat)
    wing.position.set(cx, y + 0.65, cz)
    wing.rotation.z = Math.sign(cx) * 0.5
    wing.rotation.x = Math.sign(cz) * 0.5
    group.add(wing)
  }
}

// 臺南市美術館二館的招牌文字
function makeMuseumSignTexture() {
  const c = document.createElement('canvas')
  c.width = 512; c.height = 128
  const g = c.getContext('2d')
  g.fillStyle = '#f4f4f0'
  g.fillRect(0, 0, 512, 128)
  g.fillStyle = '#243440'
  g.font = 'bold 52px "Noto Sans TC", "Microsoft JhengHei", sans-serif'
  g.textAlign = 'center'
  g.fillText('臺南市美術館', 256, 62)
  g.font = '26px sans-serif'
  g.fillText('TAINAN ART MUSEUM', 256, 102)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 臺南市美術館二館：白色堆疊量體＋標誌性的白色五角形遮陽頂棚
// （純造景地標，供飛行時辨認方向）
function addArtMuseum(scene, colliders, cx, cz) {
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.6 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2a3a44, roughness: 0.15, metalness: 0.4 })

  // 淺色美術館廣場
  const plaza = new THREE.Mesh(
    new THREE.PlaneGeometry(BLOCK - 0.5, BLOCK - 0.5),
    new THREE.MeshStandardMaterial({ color: 0xd9d5cb, roughness: 0.9 })
  )
  plaza.rotation.x = -Math.PI / 2
  plaza.position.set(cx, 0.21, cz)
  scene.add(plaza)

  // 白色方盒量體錯落堆疊（坂茂設計的碎形堆疊語彙）
  const boxes = [
    [10, 4.5, 9, -3.5, -3],
    [8, 7.5, 8, 2, 2.5],
    [7, 10.5, 7, -2, 3.5],
    [6.5, 6, 6.5, 4.5, -4],
    [9, 3, 6, 4, -0.5],
    [5, 13, 5, 0.5, 0.5],
  ]
  for (const [w, h, d, dx, dz] of boxes) {
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), whiteMat)
    box.position.set(cx + dx, 0.2 + h / 2, cz + dz)
    box.castShadow = true
    scene.add(box)
    const b = new THREE.Box3().setFromObject(box)
    b.expandByScalar(0.4)
    colliders.push(b)
    // 部分量體加上橫向玻璃帶窗
    if (h >= 4.5) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.7, d + 0.06), glassMat)
      strip.position.set(cx + dx, 0.2 + h * 0.55, cz + dz)
      scene.add(strip)
    }
  }

  // 標誌性五角形遮陽頂棚：大五角形平板＋上層小五角形，白色細柱撐起
  const makePentagon = (radius, thickness) => {
    const shape = new THREE.Shape()
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i / 5) * Math.PI * 2
      const px = Math.cos(a) * radius
      const pz = Math.sin(a) * radius
      if (i === 0) shape.moveTo(px, pz)
      else shape.lineTo(px, pz)
    }
    shape.closePath()
    const geo = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false })
    const mesh = new THREE.Mesh(geo, whiteMat)
    mesh.rotation.x = Math.PI / 2
    return mesh
  }
  const canopy = makePentagon(12.2, 0.5)
  canopy.position.set(cx, 12.8, cz)
  scene.add(canopy)
  const canopyBox = new THREE.Box3().setFromObject(canopy)
  colliders.push(canopyBox)
  const canopy2 = makePentagon(6.8, 0.4)
  canopy2.rotation.z = Math.PI / 5 // 與大頂棚錯開角度，做出層疊感
  canopy2.position.set(cx + 0.5, 14.2, cz - 0.5)
  scene.add(canopy2)

  // 頂棚支柱（細白柱，無人機可從柱間穿越頂棚下方）
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.31
    const r = i % 2 === 0 ? 9.5 : 6.5
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 12.8, 8), whiteMat)
    col.position.set(cx + Math.cos(a) * r, 0.2 + 6.4, cz + Math.sin(a) * r)
    scene.add(col)
  }

  // 入口招牌矮牆
  const sign = new THREE.Mesh(
    new THREE.BoxGeometry(6.4, 1.6, 0.4),
    [whiteMat, whiteMat, whiteMat, whiteMat,
      new THREE.MeshBasicMaterial({ map: makeMuseumSignTexture() }), whiteMat]
  )
  sign.position.set(cx - 3, 1.0, cz + BLOCK / 2 - 1.2)
  scene.add(sign)
  const signBox = new THREE.Box3().setFromObject(sign)
  colliders.push(signBox)

  // 廣場樹木點綴
  for (const [tx, tz] of [[-9, 9], [9, 8], [-10, -9], [10, -9]]) {
    const tree = makeTree()
    tree.position.set(cx + tx, 0.2, cz + tz)
    scene.add(tree)
  }
}

// 赤崁樓：城市中央廣場的地標建築（純造景、不可互動，僅供飛行時辨認方向）
function makeChihkanTower() {
  const g = new THREE.Group()

  const brickMat = new THREE.MeshStandardMaterial({ color: 0x9c5a3c, roughness: 0.85 })
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xd8c7a0, roughness: 0.8 })
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x9c2020, roughness: 0.7 })
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x1f3a2e, roughness: 0.65 })
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.4, metalness: 0.5 })
  const archMat = new THREE.MeshStandardMaterial({ color: 0x4a2c1e, roughness: 0.9 })

  // 紅磚城座（普羅民遮城基座意象）
  const baseW = 13, baseD = 9, baseH = 3.6
  const base = new THREE.Mesh(new THREE.BoxGeometry(baseW, baseH, baseD), brickMat)
  base.position.y = baseH / 2
  base.castShadow = true
  base.receiveShadow = true
  g.add(base)

  // 城座立面仿拱門的裝飾陰影
  for (const face of [1, -1]) {
    for (let i = -1; i <= 1; i++) {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.4, 0.25), archMat)
      arch.position.set(i * 3.6, 1.3, face * (baseD / 2 + 0.05))
      g.add(arch)
    }
  }

  // 重簷閣樓（海神廟／文昌閣意象），各自兩層屋頂
  function makePavilion() {
    const pg = new THREE.Group()
    const wallW = 4.6, wallD = 4.6, wallH = 3.0

    const wall = new THREE.Mesh(new THREE.BoxGeometry(wallW, wallH, wallD), wallMat)
    wall.position.y = wallH / 2
    wall.castShadow = true
    pg.add(wall)

    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, wallH, 8), pillarMat)
        pillar.position.set(sx * (wallW / 2 - 0.25), wallH / 2, sz * (wallD / 2 - 0.25))
        pg.add(pillar)
      }
    }

    // 下層屋簷
    const lowerEaveW = wallW * 1.35, lowerEaveD = wallD * 1.35
    const lowerEave = new THREE.Mesh(new THREE.BoxGeometry(lowerEaveW, 0.35, lowerEaveD), roofMat)
    lowerEave.position.y = wallH + 0.18
    lowerEave.castShadow = true
    pg.add(lowerEave)
    addSwallowWings(pg, lowerEaveW, lowerEaveD, wallH + 0.18, roofMat)

    // 上層小閣
    const upperWallH = 1.5
    const upperWall = new THREE.Mesh(new THREE.BoxGeometry(wallW * 0.65, upperWallH, wallD * 0.65), wallMat)
    upperWall.position.y = wallH + 0.36 + upperWallH / 2
    pg.add(upperWall)

    const upperEaveW = wallW * 0.65 * 1.35, upperEaveD = wallD * 0.65 * 1.35
    const upperEave = new THREE.Mesh(new THREE.BoxGeometry(upperEaveW, 0.3, upperEaveD), roofMat)
    upperEave.position.y = wallH + 0.36 + upperWallH + 0.15
    pg.add(upperEave)
    addSwallowWings(pg, upperEaveW, upperEaveD, wallH + 0.36 + upperWallH + 0.15, roofMat)

    // 正脊金色滾邊與寶頂
    const ridgeY = wallH + 0.36 + upperWallH + 0.32
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(upperEaveW * 0.85, 0.12, 0.12), goldMat)
    ridge.position.y = ridgeY
    pg.add(ridge)
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 6), goldMat)
    finial.position.y = ridgeY + 0.3
    pg.add(finial)

    return pg
  }

  const pavA = makePavilion()
  pavA.position.set(-3.6, baseH + 0.15, 0)
  g.add(pavA)
  const pavB = makePavilion()
  pavB.position.set(3.6, baseH + 0.15, 0)
  g.add(pavB)

  return g
}

// ---------- 建立整個城市 ----------
export function createWorld(scene) {
  const colliders = []      // 建築碰撞盒（已依無人機半徑外擴）
  const inspectables = []   // 可點擊檢查的隱形判定球
  const targets = []        // 真正的積水目標（計分用）
  const waterMeshes = []    // 需要閃爍動畫的水面

  const windowTex = makeWindowTexture()

  // 透天厝共用材質快取：貼圖與材質全城共用，控制記憶體與繪製成本
  const facadeTextures = [makeTownhouseTexture(), makeTownhouseTexture()]
  const facadeTints = [0xdfe8dc, 0xf0e6d8, 0xe8d5cc, 0xd9dde0, 0xe6dfc9, 0xcfd8d2]
  const caches = {
    facadeMats: facadeTints.flatMap((tint) =>
      facadeTextures.map((tex) => new THREE.MeshStandardMaterial({ map: tex, color: tint, roughness: 0.9 }))
    ),
    metalMats: [
      new THREE.MeshStandardMaterial({ color: 0xb8bcc0, roughness: 0.45, metalness: 0.65 }), // 銀灰鐵皮
      new THREE.MeshStandardMaterial({ color: 0x8a4a30, roughness: 0.6, metalness: 0.35 }),  // 鏽紅
      new THREE.MeshStandardMaterial({ color: 0x3a5f46, roughness: 0.55, metalness: 0.4 }),  // 墨綠
      new THREE.MeshStandardMaterial({ color: 0x3a5a7a, roughness: 0.55, metalness: 0.4 }),  // 藍
    ],
    parapetMat: new THREE.MeshStandardMaterial({ color: 0xcfc8bb, roughness: 0.9 }),
    stairMat: new THREE.MeshStandardMaterial({ color: 0xbfb6a6, roughness: 0.9 }),
    stairGeo: new THREE.BoxGeometry(1.6, 1.9, 1.9),
    signMats: SIGN_TEXTS.map((t) => new THREE.MeshBasicMaterial({ map: makeSignTexture(t) })),
  }

  // 地面（柏油）
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(GRID * PITCH + 80, GRID * PITCH + 80),
    new THREE.MeshStandardMaterial({ color: 0x45403a, roughness: 0.95 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // 安平運河：取代其中一條東西向街道，明顯與任務中的隱藏積水區隔開來
  const CANAL_ROW = Math.floor(GRID / 2) + 2
  const canalZ = -HALF + CANAL_ROW * PITCH - STREET / 2
  const canalWidth = STREET * 0.85
  const canalLen = GRID * PITCH + 80

  // 街道中線（運河那一排跳過，改由運河本身呈現）
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xd8d8c8 })
  for (let i = 0; i <= GRID; i++) {
    const p = -HALF + i * PITCH - STREET / 2
    if (i === 0) continue
    if (i !== CANAL_ROW) {
      const lineH = new THREE.Mesh(new THREE.PlaneGeometry(GRID * PITCH, 0.35), lineMat)
      lineH.rotation.x = -Math.PI / 2
      lineH.position.set(0, 0.02, p)
      scene.add(lineH)
    }
    const lineV = new THREE.Mesh(new THREE.PlaneGeometry(0.35, GRID * PITCH), lineMat)
    lineV.rotation.x = -Math.PI / 2
    lineV.position.set(p, 0.02, 0)
    scene.add(lineV)
  }

  // 運河水面
  const canalWater = new THREE.Mesh(
    new THREE.PlaneGeometry(canalLen, canalWidth),
    new THREE.MeshStandardMaterial({ color: 0x2a5f7a, roughness: 0.15, metalness: 0.3 })
  )
  canalWater.rotation.x = -Math.PI / 2
  canalWater.position.set(0, 0.05, canalZ)
  scene.add(canalWater)

  // 堤岸：分段建置，橋樑經過處中斷（路面直接銜接橋面，不被堤岸牆擋住）
  const embankMat = new THREE.MeshStandardMaterial({ color: 0xb7ab94, roughness: 0.9 })
  {
    const bridgeXs = Array.from({ length: GRID }, (_, k) => -HALF + (k + 1) * PITCH - STREET / 2)
    let prev = -canalLen / 2
    const spans = []
    for (const bx of bridgeXs) {
      spans.push([prev, bx - STREET / 2])
      prev = bx + STREET / 2
    }
    spans.push([prev, canalLen / 2])
    for (const [x0, x1] of spans) {
      const len = x1 - x0
      if (len <= 0.5) continue
      for (const side of [-1, 1]) {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(len, 0.9, 0.6), embankMat)
        wall.position.set((x0 + x1) / 2, 0.45, canalZ + side * (canalWidth / 2 + 0.3))
        scene.add(wall)
      }
    }
  }

  // 跨運河橋樑（對應每條南北向街道）：柏油橋面，與兩端路面齊平
  const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x45403a, roughness: 0.95 })
  const railMat = new THREE.MeshStandardMaterial({ color: 0xcfcfc8, roughness: 0.7 })
  const bridgeLineMat = new THREE.MeshBasicMaterial({ color: 0xd8d8c8 })
  for (let j = 1; j <= GRID; j++) {
    const bx = -HALF + j * PITCH - STREET / 2
    // 橋面頂高 0.07：略高於運河水面（0.05）、與路面（0）視覺上齊平無落差
    const deckTop = 0.07
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(STREET, 0.45, canalWidth + 1.2), bridgeMat)
    bridge.position.set(bx, deckTop - 0.225, canalZ)
    scene.add(bridge)
    // 橋面上的道路中線（銜接兩端街道的白線）
    const deckLine = new THREE.Mesh(new THREE.PlaneGeometry(0.35, canalWidth + 1.2), bridgeLineMat)
    deckLine.rotation.x = -Math.PI / 2
    deckLine.position.set(bx, deckTop + 0.01, canalZ)
    scene.add(deckLine)
    // 兩側低欄杆
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, canalWidth + 1.2), railMat)
      rail.position.set(bx + side * (STREET / 2 - 0.2), deckTop + 0.4, canalZ)
      scene.add(rail)
    }
  }

  // 運河上的小船
  for (let i = 0; i < 3; i++) {
    const boat = makeBoat()
    boat.rotation.y = rand(-0.2, 0.2)
    boat.position.set(rand(-HALF + 20, HALF - 20), 0.08, canalZ + rand(-canalWidth / 4, canalWidth / 4))
    scene.add(boat)
  }

  // 街道上自動行駛的汽車：每條街道雙向各 1~2 台，靠右行駛（台灣的行車方向）
  const cars = []
  const laneOff = STREET / 4.8
  // 南北向街道（會經過運河上的橋）
  for (let i = 1; i <= GRID; i++) {
    const sx = -HALF + i * PITCH - STREET / 2
    for (const dir of [1, -1]) {
      const n = 1 + Math.floor(Math.random() * 2)
      for (let k = 0; k < n; k++) {
        const car = makeCar()
        car.position.set(sx - dir * laneOff, 0.04, rand(-HALF, HALF))
        car.rotation.y = dir > 0 ? 0 : Math.PI
        scene.add(car)
        cars.push({ group: car, axis: 'z', dir, speed: rand(8, 13), sig: i < GRID })
      }
    }
  }
  // 東西向街道（運河那一排沒有街道，跳過）
  for (let j = 1; j <= GRID; j++) {
    if (j === CANAL_ROW) continue
    const sz = -HALF + j * PITCH - STREET / 2
    for (const dir of [1, -1]) {
      const n = 1 + Math.floor(Math.random() * 2)
      for (let k = 0; k < n; k++) {
        const car = makeCar()
        car.position.set(rand(-HALF, HALF), 0.04, sz + dir * laneOff)
        car.rotation.y = dir > 0 ? Math.PI / 2 : -Math.PI / 2
        scene.add(car)
        cars.push({ group: car, axis: 'x', dir, speed: rand(8, 13), sig: j < GRID })
      }
    }
  }

  // 行人走在人行道上（符合交通法規：不進入車道）：
  // 沿著各街區基座（人行道）的四周繞行，轉角自動轉向，路徑也會經過騎樓下。
  const pedestrians = []
  const PED_COUNT = 30
  for (let k = 0; k < PED_COUNT; k++) {
    const bx = Math.floor(Math.random() * GRID)
    const bz = Math.floor(Math.random() * GRID)
    const pcx = -HALF + bx * PITCH + BLOCK / 2
    const pcz = -HALF + bz * PITCH + BLOCK / 2
    const ped = makePedestrian()
    ped.position.y = 0.2 // 人行道基座頂面
    scene.add(ped)
    pedestrians.push({
      group: ped,
      bx, bz, cx: pcx, cz: pcz, R: WALK_R,
      s: rand(0, 8 * WALK_R),                // 沿人行道周長的行進距離
      dir: Math.random() < 0.5 ? 1 : -1,     // 順時針或逆時針繞行
      speed: rand(1.1, 1.9),
      phase: rand(0, Math.PI * 2),
      mode: 'loop',                          // loop | wait（等紅燈）| cross（過斑馬線）
      cross: null,
      u: 0,
    })
  }

  const roofSpots = []      // 可放水塔的屋頂 {x, y, z}
  const groundSpots = []    // 巷弄/街邊可放容器的位置
  const lotSpots = []       // 廢棄物藏匿點（公園角落、廢棄空地）
  const parkBlocks = new Set() // 已放公園的街區（避免相鄰街區都是公園）
  const zones = { parks: [], abandoned: [] }
  const siteSpots = []      // 工地內的帆布建材候選位置
  const eaveSpots = []      // 屋簷上的容器藏匿點（騎樓遮簷、建築物之間的簷面）

  let signIdx = 0
  let spawnPoint = null // 保留空地街區（無建築）的實際中心座標，供無人機安全重生用

  // 預先固定選出 3 個街區作為工地（帆布積水只出現在工地，保證數量充足）
  const centerIdx = Math.floor(GRID / 2)
  // 臺南市美術館二館固定座落於市中心西側街區
  const MUSEUM_BX = centerIdx - 2
  const MUSEUM_BZ = centerIdx
  const siteBlocks = new Set()
  while (siteBlocks.size < 3) {
    const sbx = Math.floor(Math.random() * GRID)
    const sbz = Math.floor(Math.random() * GRID)
    if (sbx === centerIdx && sbz === centerIdx) continue
    if (sbx === MUSEUM_BX && sbz === MUSEUM_BZ) continue
    siteBlocks.add(`${sbx},${sbz}`)
  }

  for (let bx = 0; bx < GRID; bx++) {
    for (let bz = 0; bz < GRID; bz++) {
      const cx = -HALF + bx * PITCH + BLOCK / 2
      const cz = -HALF + bz * PITCH + BLOCK / 2
      const isCenter = bx === Math.floor(GRID / 2) && bz === Math.floor(GRID / 2)
      if (isCenter) spawnPoint = new THREE.Vector3(cx, 18, cz)

      // 街區底座（人行道/基地）
      const pad = new THREE.Mesh(
        new THREE.BoxGeometry(BLOCK + 2, 0.2, BLOCK + 2),
        new THREE.MeshStandardMaterial({ color: 0xa89a7e, roughness: 0.95 })
      )
      pad.position.set(cx, 0.1, cz)
      pad.receiveShadow = true
      scene.add(pad)

      // 中央街區留空當出發廣場，並放置赤崁樓地標；3 個街區是工地；其餘 ~14% 是社區公園
      if (isCenter) {
        const landmark = makeChihkanTower()
        landmark.position.set(cx, 0.2, cz - 7)
        scene.add(landmark)

        const landmarkBox = new THREE.Box3().setFromObject(landmark)
        landmarkBox.expandByScalar(0.9)
        colliders.push(landmarkBox)
        continue
      }
      if (bx === MUSEUM_BX && bz === MUSEUM_BZ) {
        addArtMuseum(scene, colliders, cx, cz)
        continue
      }
      if (siteBlocks.has(`${bx},${bz}`)) {
        siteSpots.push(...addConstructionSite(scene, colliders, cx, cz))
        continue
      }
      if (Math.random() < 0.17) {
        // 綠地或廢棄空地。真實都市不會出現相鄰街區都是公園的情況：
        // 若已與公園相鄰，這個街區改為廢棄空地（鐵皮圍籬／雜草叢生／棄置廢棄物）。
        const adjacentPark = parkBlocks.has(`${bx - 1},${bz}`) || parkBlocks.has(`${bx},${bz - 1}`)
        if (adjacentPark || Math.random() < 0.5) {
          zones.abandoned.push({ x: cx, z: cz })
          lotSpots.push(...addAbandonedLot(scene, colliders, groundSpots, cx, cz))
        } else {
          parkBlocks.add(`${bx},${bz}`)
          zones.parks.push({ bx, bz, x: cx, z: cz })
          lotSpots.push(...addPark(scene, colliders, cx, cz))
        }
        continue
      }

      // 一個街區切成 2x2 塊，每塊蓋一棟樓（少數留空成中庭）
      const sub = BLOCK / 2
      for (let sx = 0; sx < 2; sx++) {
        for (let sz = 0; sz < 2; sz++) {
          const px = cx - BLOCK / 2 + sub * sx + sub / 2
          const pz = cz - BLOCK / 2 + sub * sz + sub / 2

          if (Math.random() < 0.15) {
            // 中庭：容器藏匿點
            groundSpots.push({ x: px, z: pz })
            continue
          }

          const w = rand(sub * 0.62, sub * 0.85)
          const d = rand(sub * 0.62, sub * 0.85)
          const facing = sz === 0 ? -1 : 1 // 面向所在側的街道

          // 一部分低樓改成廟宇風格建築，增添台南街景的辨識度
          if (Math.random() < 0.12) {
            const temple = makeTempleBuilding(w * 0.85, d * 0.85)
            temple.position.set(px, 0.2, pz)
            scene.add(temple)

            const box = new THREE.Box3().setFromObject(temple)
            box.expandByScalar(0.9)
            colliders.push(box)
            continue // 廟宇屋頂造型特殊，不納入水塔/雜物屋頂點位
          }

          // 大多數街區是連棟透天厝：壓低天際線，貼近台南真實的城市樣貌
          if (Math.random() < 0.62) {
            addRowhouseStrip(scene, colliders, roofSpots, groundSpots, eaveSpots, px, pz, sub, facing, caches)
            continue
          }

          // 少數商業大樓（高度也壓低，台南市區高樓不多）
          const h = rand(10, 26)

          const sideMat = new THREE.MeshStandardMaterial({ map: windowTex.clone(), roughness: 0.85 })
          sideMat.map.repeat.set(Math.max(1, Math.round(w / 6)), Math.max(1, Math.round(h / 6)))
          sideMat.map.needsUpdate = true
          const roofMat = new THREE.MeshStandardMaterial({
            color: pick([0x9c8060, 0xa88f6a, 0x8f7a5a]),
            roughness: 0.95,
          })
          const building = new THREE.Mesh(
            new THREE.BoxGeometry(w, h, d),
            [sideMat, sideMat, roofMat, roofMat, sideMat, sideMat]
          )
          building.position.set(px, h / 2 + 0.2, pz)
          building.castShadow = true
          building.receiveShadow = true
          scene.add(building)

          const box = new THREE.Box3().setFromObject(building)
          box.expandByScalar(0.9) // 無人機半徑
          colliders.push(box)

          roofSpots.push({ x: px, y: h + 0.2, z: pz, w, d })

          // 屋頂雜物：冷氣機
          if (Math.random() < 0.5) {
            const ac = new THREE.Mesh(
              new THREE.BoxGeometry(1.2, 0.8, 0.9),
              new THREE.MeshStandardMaterial({ color: 0xd9d9d2, roughness: 0.7 })
            )
            ac.position.set(px + rand(-w / 4, w / 4), h + 0.6 + 0.2, pz + rand(-d / 4, d / 4))
            scene.add(ac)
          }

          // 部分低樓掛招牌（台南街景味）
          if (h < 16 && Math.random() < 0.45 && signIdx < SIGN_TEXTS.length) {
            const sign = new THREE.Mesh(
              new THREE.PlaneGeometry(5, 1.25),
              new THREE.MeshBasicMaterial({ map: makeSignTexture(SIGN_TEXTS[signIdx++]) })
            )
            sign.position.set(px, 4.2, pz + facing * (d / 2 + 0.06))
            if (facing < 0) sign.rotation.y = Math.PI
            scene.add(sign)
          }

          // 突出式直式招牌
          if (h < 16 && Math.random() < 0.3) {
            const vsign = new THREE.Mesh(
              new THREE.PlaneGeometry(1.1, 2.6),
              new THREE.MeshBasicMaterial({ map: makeVerticalSignTexture(pick(SIGN_TEXTS)), side: THREE.DoubleSide })
            )
            vsign.rotation.y = Math.PI / 2
            vsign.position.set(px + w / 2 + 0.55, 4.0, pz + facing * (d / 2 - 1.2))
            scene.add(vsign)
          }

          // 騎樓：外推遮簷走廊，底下也可能藏著積水容器
          if (h < 16 && Math.random() < 0.4) {
            const spot = addArcade(scene, px, pz, w, d, facing)
            if (Math.random() < 0.5) groundSpots.push(spot.ground)
            eaveSpots.push(spot.eave)
          }
        }
      }

      // 街邊容器藏匿點
      if (Math.random() < 0.4) {
        groundSpots.push({
          x: cx + rand(-BLOCK / 2, BLOCK / 2),
          z: cz + (Math.random() < 0.5 ? -1 : 1) * (BLOCK / 2 + 2.5),
        })
      }

      // 行道樹
      if (Math.random() < 0.5) {
        const tree = Math.random() < 0.3 ? makeBanyanTree() : makeTree()
        tree.position.set(cx + BLOCK / 2 + 3, 0, cz + rand(-BLOCK / 2, BLOCK / 2))
        scene.add(tree)
      }

      // 路邊停放機車：純造景，增添巷弄生活感
      if (Math.random() < 0.3) {
        const scooterX = cx + (Math.random() < 0.5 ? -1 : 1) * (BLOCK / 2 + 1.6)
        const scooterZ = cz + rand(-BLOCK / 2 + 3, BLOCK / 2 - 3)
        const count = 1 + Math.floor(Math.random() * 2)
        for (let i = 0; i < count; i++) {
          const scooter = makeScooter()
          scooter.rotation.y = Math.PI / 2 + rand(-0.08, 0.08)
          scooter.position.set(scooterX, 0, scooterZ + i * 1.1)
          scene.add(scooter)
        }
      }
    }
  }

  // ---------- 電線桿與電線（台灣街景的招牌元素）----------
  {
    const poleGeo = new THREE.CylinderGeometry(0.09, 0.13, 7.6, 6)
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x5a5450, roughness: 0.9 })
    const crossGeo = new THREE.BoxGeometry(1.4, 0.08, 0.08)
    const wirePts = []
    for (let j = 1; j < GRID; j++) {
      if (j === CANAL_ROW) continue // 運河那排沒有街道
      const zStreet = -HALF + j * PITCH - STREET / 2
      const poleZ = zStreet + STREET / 2 - 0.7
      let prevX = null
      for (let i2 = 0; i2 < GRID; i2++) {
        const x2 = -HALF + i2 * PITCH + BLOCK / 2
        const pole = new THREE.Mesh(poleGeo, poleMat)
        pole.position.set(x2, 3.8, poleZ)
        scene.add(pole)
        const cross = new THREE.Mesh(crossGeo, poleMat)
        cross.position.set(x2, 7.0, poleZ)
        scene.add(cross)
        if (prevX !== null) {
          for (const wy of [7.05, 6.65]) {
            wirePts.push(prevX, wy, poleZ, x2, wy, poleZ)
          }
        }
        prevX = x2
      }
    }
    const wireGeo = new THREE.BufferGeometry()
    wireGeo.setAttribute('position', new THREE.Float32BufferAttribute(wirePts, 3))
    scene.add(new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({ color: 0x2a2a2a })))
  }

  // ---------- 行人穿越道（斑馬線）----------
  {
    const cwMat = new THREE.MeshBasicMaterial({ map: makeCrosswalkTexture(), transparent: true })
    const cwGeo = new THREE.PlaneGeometry(3.2, 8.4)
    for (let i = 1; i < GRID; i++) {
      for (let j = 1; j < GRID; j++) {
        if (j === CANAL_ROW) continue
        const ix = -HALF + i * PITCH - STREET / 2
        const iz = -HALF + j * PITCH - STREET / 2
        // 橫越東西向街道
        const cw1 = new THREE.Mesh(cwGeo, cwMat)
        cw1.rotation.x = -Math.PI / 2
        cw1.position.set(ix - STREET / 2 - 2.2, 0.03, iz)
        scene.add(cw1)
        // 橫越南北向街道
        const cw2 = new THREE.Mesh(cwGeo, cwMat)
        cw2.rotation.set(-Math.PI / 2, 0, Math.PI / 2)
        cw2.position.set(ix, 0.03, iz - STREET / 2 - 2.2)
        scene.add(cw2)
      }
    }
  }

  // ---------- 交通號誌 ----------
  // 全城號誌同步兩相位（南北向／東西向輪流綠燈）；
  // 每個畫有斑馬線的路口設兩支號誌桿（南北向與東西向車流各一）。
  // 燈面材質全城共用，換相位時只需改 6 個材質的顏色。
  const traffic = {
    t: rand(0, SIG_CYCLE),
    lampMats: {
      ns: LAMP_OFF.map((c) => new THREE.MeshBasicMaterial({ color: c })),
      ew: LAMP_OFF.map((c) => new THREE.MeshBasicMaterial({ color: c })),
    },
    stopZs: [],       // 南北向車流的停止線（有號誌的東西向街道中心）
    stopXs: [],       // 東西向車流的停止線（有號誌的南北向街道中心）
    crossings: new Map(), // 每個街區可用的斑馬線入口
  }
  {
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.6 })
    const headMat = new THREE.MeshStandardMaterial({ color: 0x24343c, roughness: 0.6 })
    const addCrossing = (bx2, bz2, entry) => {
      const key = bx2 + ',' + bz2
      if (!traffic.crossings.has(key)) traffic.crossings.set(key, [])
      traffic.crossings.get(key).push(entry)
    }
    for (let j = 1; j < GRID; j++) {
      if (j !== CANAL_ROW) traffic.stopZs.push(-HALF + j * PITCH - STREET / 2)
    }
    for (let i = 1; i < GRID; i++) traffic.stopXs.push(-HALF + i * PITCH - STREET / 2)

    for (let i = 1; i < GRID; i++) {
      for (let j = 1; j < GRID; j++) {
        if (j === CANAL_ROW) continue
        const ix = -HALF + i * PITCH - STREET / 2
        const iz = -HALF + j * PITCH - STREET / 2

        // 號誌桿：南北向車流（燈面朝 ±z）與東西向車流（旋轉 90°）各一支
        const lightNS = makeTrafficLight(traffic.lampMats.ns, poleMat, headMat)
        lightNS.position.set(ix + 6.7, 0, iz + 6.7)
        scene.add(lightNS)
        const lightEW = makeTrafficLight(traffic.lampMats.ew, poleMat, headMat)
        lightEW.rotation.y = Math.PI / 2
        lightEW.position.set(ix - 6.7, 0, iz - 6.7)
        scene.add(lightEW)

        // 斑馬線入口（與地面畫線位置一致），登錄到相鄰街區供行人使用
        const cxW = ix - STREET / 2 - BLOCK / 2
        const cxE = ix + STREET / 2 + BLOCK / 2
        const czN = iz - STREET / 2 - BLOCK / 2
        const czS = iz + STREET / 2 + BLOCK / 2
        // 縱向斑馬線（南北向行走，橫越東西向街道，位於路口西側）
        const x0 = ix - STREET / 2 - 2.2
        const pN = { x: x0, z: czN + WALK_R }
        const pS = { x: x0, z: czS - WALK_R }
        addCrossing(i - 1, j - 1, { from: pN, to: pS, toBx: i - 1, toBz: j, walkAxis: 'z', s: locateLoopS(x0 - cxW, WALK_R, WALK_R) })
        addCrossing(i - 1, j, { from: pS, to: pN, toBx: i - 1, toBz: j - 1, walkAxis: 'z', s: locateLoopS(x0 - cxW, -WALK_R, WALK_R) })
        // 橫向斑馬線（東西向行走，橫越南北向街道，位於路口北側）
        const z0 = iz - STREET / 2 - 2.2
        const pW = { x: cxW + WALK_R, z: z0 }
        const pE = { x: cxE - WALK_R, z: z0 }
        addCrossing(i - 1, j - 1, { from: pW, to: pE, toBx: i, toBz: j - 1, walkAxis: 'x', s: locateLoopS(WALK_R, z0 - czN, WALK_R) })
        addCrossing(i, j - 1, { from: pE, to: pW, toBx: i - 1, toBz: j - 1, walkAxis: 'x', s: locateLoopS(-WALK_R, z0 - czN, WALK_R) })
      }
    }
  }

  // ---------- 佈置目標與誘餌 ----------
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  function place(spotList, count, hasWater, type, makeFn, posFn) {
    for (let i = 0; i < count && spotList.length > 0; i++) {
      const spot = spotList.pop()
      const p = posFn ? posFn(spot) : { x: spot.x, y: 0.2, z: spot.z }
      const obj = makeFn(hasWater, waterMeshes, p.makeArg !== undefined ? p.makeArg : p.edgeLength)
      obj.position.set(p.x, p.y, p.z)
      obj.rotation.y = p.rotY !== undefined ? p.rotY : rand(0, Math.PI * 2)
      scene.add(obj)

      const info = TARGET_TYPES[type]
      const data = {
        kind: hasWater ? 'target' : 'decoy',
        type,
        label: info.label,
        points: info.points,
        found: false,
        group: obj,
      }
      // 雨水槽等長條形目標的判定半徑隨長度放大，確保沿著整段都能點擊
      const radius = p.proxyRadius !== undefined ? p.proxyRadius
        : type === 'tower' ? 2.4
        : type === 'debris' ? 2.6
        : type === 'gutter' ? 2.0
        : type === 'roofGarden' ? 2.2
        : type === 'tarp' ? 2.2
        : 1.4
      const yOff = type === 'tower' ? 3.4
        : type === 'gutter' ? 0.2
        : type === 'roofGarden' ? 0.6
        : type === 'tarp' ? 0.5
        : 0.6
      addInspectProxy(obj, radius, yOff, data, inspectables)
      if (hasWater) targets.push(data)
    }
  }

  // 屋頂分成兩池（不重疊，避免同一棟屋頂放兩個目標）：
  // 大屋頂（商業樓）放水塔與屋頂花園；小屋頂（透天厝）放雨水槽——貼近真實分佈。
  // 水塔優先放較高的屋頂（增加「要飛上去看」的難度），tall 放陣列尾端讓 pop() 先取。
  const bigRoofs = []
  const smallRoofs = shuffle(roofSpots.filter((r) => r.w < 6 || r.d < 6))
  {
    const bigs = roofSpots.filter((r) => r.w >= 6 && r.d >= 6)
    bigRoofs.push(...shuffle(bigs.filter((r) => r.y <= 14)), ...shuffle(bigs.filter((r) => r.y > 14)))
  }

  // 雨水槽「只能」出現在屋頂邊緣：隨機挑一邊，槽體外緣貼齊該邊
  // （有女兒牆的透天厝貼齊女兒牆內側），長度沿著整條邊延伸。
  function gutterPos(spot) {
    // 槽寬 0.45（半寬 0.225）：inset 讓槽的外緣正好碰到屋頂邊界／女兒牆內側
    const inset = spot.parapet ? 0.38 : 0.35
    const margin = 0.9 // 兩端避開屋頂角落／女兒牆轉角
    const edge = Math.floor(Math.random() * 4) // 0/1: 南北邊；2/3: 東西邊
    if (edge < 2) {
      const zSign = edge === 0 ? 1 : -1
      return {
        x: spot.x,
        y: spot.y,
        z: spot.z + zSign * (spot.d / 2 - inset),
        rotY: 0,
        edgeLength: spot.w - margin,
        proxyRadius: Math.max(2.0, (spot.w - margin) / 2),
      }
    }
    const xSign = edge === 2 ? 1 : -1
    return {
      x: spot.x + xSign * (spot.w / 2 - inset),
      y: spot.y,
      z: spot.z,
      rotY: Math.PI / 2,
      edgeLength: spot.d - margin,
      proxyRadius: Math.max(2.0, (spot.d - margin) / 2),
    }
  }

  const centerPos = (s) => ({ x: s.x, y: s.y, z: s.z })

  place(bigRoofs, 5, true, 'tower', makeWaterTower, centerPos)   // 目標
  place(bigRoofs, 4, false, 'tower', makeWaterTower, centerPos)  // 誘餌（有蓋）

  // 空中花園涵蓋整個屋頂：把可用屋頂範圍傳給產生器，點擊判定半徑也隨屋頂放大
  const gardenPos = (s) => ({
    x: s.x, y: s.y, z: s.z, rotY: 0,
    makeArg: { w: s.w - 1.2, d: s.d - 1.2 },
    proxyRadius: Math.max(2.2, Math.min(s.w, s.d) / 2),
  })

  place(bigRoofs, 4, true, 'roofGarden', makeRoofGarden, gardenPos)
  place(bigRoofs, 3, false, 'roofGarden', makeRoofGarden, gardenPos)

  place(smallRoofs, 4, true, 'gutter', makeGutter, gutterPos)
  place(smallRoofs, 3, false, 'gutter', makeGutter, gutterPos)

  // 大屋頂不夠時（隨機生成的商業樓偏少），從透天厝屋頂補足
  const towersPlaced = targets.filter((t) => t.type === 'tower').length
  if (towersPlaced < 5) place(smallRoofs, 5 - towersPlaced, true, 'tower', makeWaterTower, centerPos)
  const gardensPlaced = targets.filter((t) => t.type === 'roofGarden').length
  if (gardensPlaced < 4) place(smallRoofs, 4 - gardensPlaced, true, 'roofGarden', makeRoofGarden, gardenPos)
  const guttersPlaced = targets.filter((t) => t.type === 'gutter').length
  if (guttersPlaced < 4) place(bigRoofs, 4 - guttersPlaced, true, 'gutter', makeGutter, gutterPos)

  // 公園角落：每座公園提供四個角落候選位置（addPark 已回傳具體座標）
  const lots = shuffle(lotSpots)
  place(lots, 5, true, 'debris', makeDebris)
  place(lots, 3, false, 'debris', makeDebris)

  // 帆布蓋建材：只出現在工地（3 個工地街區 × 4 個候選位置，數量必然足額）
  const sites = shuffle(siteSpots)
  place(sites, 4, true, 'tarp', makeTarpPile)
  place(sites, 3, false, 'tarp', makeTarpPile)

  // 一般積水容器：一部分放在屋簷上（騎樓遮簷、不同高度建築之間的簷面），
  // 簷面上的容器偏向垃圾桶／保麗龍箱（風吹上去或被丟棄的輕型容器）；其餘放地面。
  const grounds = shuffle(groundSpots)
  const eaves = shuffle(eaveSpots)
  const eavePos = (s) => ({ x: s.x, y: s.y, z: s.z, makeArg: ['foam', 'trash', 'bucket'] })
  place(eaves, 3, true, 'container', makeContainer, eavePos)
  place(eaves, 2, false, 'container', makeContainer, eavePos)
  place(grounds, 3, true, 'container', makeContainer)
  place(grounds, 4, false, 'container', makeContainer)

  // 公園不夠時（隨機生成的公園數量偏少），用街邊位置補足
  const debrisPlaced = targets.filter((t) => t.type === 'debris').length
  if (debrisPlaced < 5) place(grounds, 5 - debrisPlaced, true, 'debris', makeDebris)
  let containerPlaced = targets.filter((t) => t.type === 'container').length
  if (containerPlaced < 6) {
    // 簷面位置不足時先用地面位置補足
    place(grounds, 6 - containerPlaced, true, 'container', makeContainer)
    containerPlaced = targets.filter((t) => t.type === 'container').length
  }
  if (containerPlaced < 6) {
    // 再不夠時用尚未被其他目標使用的屋頂位置補足（兩池剩餘的部分）
    const extra = shuffle([...smallRoofs, ...bigRoofs])
    place(extra, 6 - containerPlaced, true, 'container', makeContainer, centerPos)
  }

  return { colliders, inspectables, targets, waterMeshes, spawnPoint, cars, pedestrians, traffic, zones }
}

// 產生單一積水樣態的展示物件（開場圖鑑用縮圖渲染）
export function makePreviewObject(type) {
  const sink = [] // 縮圖不需要水面閃爍動畫
  switch (type) {
    case 'tower': return makeWaterTower(true, sink)
    case 'tarp': return makeTarpPile(true, sink)
    case 'debris': return makeDebris(true, sink)
    case 'roofGarden': return makeRoofGarden(true, sink, { w: 6.4, d: 5.2 })
    case 'gutter': {
      // 雨水槽只出現在屋頂邊緣：縮圖用一小塊帶女兒牆的屋頂平台呈現真實情境
      const g = new THREE.Group()
      const slabW = 4.6, slabD = 3.4, slabH = 0.5
      const slabMat = new THREE.MeshStandardMaterial({ color: 0xa89a7e, roughness: 0.95 })
      const slab = new THREE.Mesh(new THREE.BoxGeometry(slabW, slabH, slabD), slabMat)
      slab.position.y = slabH / 2
      g.add(slab)
      // 三邊女兒牆（前緣留給雨水槽）
      const rimMat = new THREE.MeshStandardMaterial({ color: 0xcfc8bb, roughness: 0.9 })
      const t = 0.15, ph = 0.55
      const rims = [
        { geo: new THREE.BoxGeometry(slabW, ph, t), x: 0, z: -(slabD - t) / 2 },
        { geo: new THREE.BoxGeometry(t, ph, slabD), x: (slabW - t) / 2, z: 0 },
        { geo: new THREE.BoxGeometry(t, ph, slabD), x: -(slabW - t) / 2, z: 0 },
      ]
      for (const r of rims) {
        const rim = new THREE.Mesh(r.geo, rimMat)
        rim.position.set(r.x, slabH + ph / 2, r.z)
        g.add(rim)
      }
      const gutter = makeGutter(true, sink, slabW - 0.7)
      gutter.position.set(0, slabH, slabD / 2 - 0.35)
      g.add(gutter)
      return g
    }
    case 'container': {
      // 縮圖同時呈現兩種新容器：積水的保麗龍箱＋旁邊的垃圾桶
      const g = new THREE.Group()
      const foam = makeContainer(true, sink, ['foam'])
      foam.position.x = -0.45
      g.add(foam)
      const trash = makeContainer(false, sink, ['trash'])
      trash.position.set(0.55, 0, -0.1)
      g.add(trash)
      return g
    }
    default: return new THREE.Group()
  }
}

// 遊戲結束後標示「未找到」地點的紅色光柱＋類型文字標籤
export function makeMissedMarker(labelText) {
  const g = new THREE.Group()
  const color = 0xff4d4d
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 40, 12, 1, true),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3, depthWrite: false })
  )
  beam.position.y = 20
  g.add(beam)
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.12, 8, 28),
    new THREE.MeshBasicMaterial({ color })
  )
  ring.rotation.x = Math.PI / 2
  ring.position.y = 0.4
  g.add(ring)

  // 類型文字標籤：永遠面向鏡頭、隔著建築也看得到，方便玩家複盤時找到位置
  const c = document.createElement('canvas')
  c.width = 256; c.height = 64
  const ctx = c.getContext('2d')
  ctx.fillStyle = 'rgba(170, 30, 30, 0.9)'
  ctx.fillRect(0, 0, 256, 64)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 30px "Noto Sans TC", "Microsoft JhengHei", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(labelText, 128, 34)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }))
  sprite.scale.set(7, 1.75, 1)
  sprite.position.y = 9
  sprite.renderOrder = 999
  g.add(sprite)

  return g
}

// 找到目標後的綠色光柱標記
export function makeFoundMarker(good = true) {
  const g = new THREE.Group()
  const color = good ? 0x45d07a : 0x999999
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 40, 12, 1, true),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, depthWrite: false })
  )
  beam.position.y = 20
  g.add(beam)
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.12, 8, 28),
    new THREE.MeshBasicMaterial({ color })
  )
  ring.rotation.x = Math.PI / 2
  ring.position.y = 0.4
  g.add(ring)
  return g
}
