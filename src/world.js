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

// 巷弄容器：水桶 / 水盆 / 輪胎
function makeContainer(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const kind = pick(['bucket', 'basin', 'tire'])

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

// 屋頂花園：花盆綠意間藏著積水
function makeRoofGarden(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const potMat = new THREE.MeshStandardMaterial({ color: 0x8a6b4a, roughness: 0.9 })
  const leafMats = [
    new THREE.MeshStandardMaterial({ color: 0x4c8a3f, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x5a9c4a, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x3f7d3a, roughness: 0.95 }),
  ]

  const deck = new THREE.Mesh(
    new THREE.CylinderGeometry(1.9, 1.9, 0.12, 16),
    new THREE.MeshStandardMaterial({ color: 0x9a9488, roughness: 0.9 })
  )
  deck.position.y = 0.06
  g.add(deck)

  const n = 4 + Math.floor(Math.random() * 3)
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand(-0.3, 0.3)
    const r = rand(0.8, 1.6)
    const px = Math.cos(a) * r
    const pz = Math.sin(a) * r
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 0.35, 10), potMat)
    pot.position.set(px, 0.3, pz)
    g.add(pot)
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(rand(0.28, 0.4), 8, 6), pick(leafMats))
    leaf.position.set(px, 0.62, pz)
    leaf.scale.y = 0.8
    g.add(leaf)
  }

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(1.1, 16), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.position.set(rand(-0.3, 0.3), 0.13, rand(-0.3, 0.3))
    g.add(water)
    waterMeshes.push(water)
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

  return { x: px, z: pz + dir * (d / 2 + depth * 0.6) }
}

// 連棟透天厝：台灣城市街景的主體。一排 3 戶相連的窄面寬街屋，
// 各戶樓層數與外牆色略異；屋頂約半數有鐵皮加蓋（無人機空拍最經典的台灣屋頂樣貌），
// 其餘為女兒牆平屋頂（可作為屋頂積水目標的藏匿點），部分有樓梯間小屋。
function addRowhouseStrip(scene, colliders, roofSpots, groundSpots, px, pz, sub, facing, caches) {
  const n = 3
  const W = sub * 0.88
  const d = sub * 0.72
  const w = W / n

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
    if (Math.random() < 0.5) {
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

      roofSpots.push({ x: hx, y: roofY, z: pz, w: w - 0.8, d: d - 0.8 })
    }

    // 店家招牌（共用少量材質，重複使用）
    if (Math.random() < 0.6) {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, 0.9), pick(caches.signMats))
      sign.position.set(hx, 4.4, pz + facing * (d / 2 + 0.06))
      if (facing < 0) sign.rotation.y = Math.PI
      scene.add(sign)
    }
  }

  // 整排騎樓
  if (Math.random() < 0.45) {
    const spot = addArcade(scene, px, pz, W, d, facing)
    if (Math.random() < 0.5) groundSpots.push(spot)
  }
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

  // 堤岸
  const embankMat = new THREE.MeshStandardMaterial({ color: 0xb7ab94, roughness: 0.9 })
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(canalLen, 0.9, 0.6), embankMat)
    wall.position.set(0, 0.45, canalZ + side * (canalWidth / 2 + 0.3))
    scene.add(wall)
  }

  // 跨運河橋樑（對應每條南北向街道）
  const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.8 })
  for (let j = 1; j <= GRID; j++) {
    const bx = -HALF + j * PITCH - STREET / 2
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(STREET, 0.3, canalWidth + 1.2), bridgeMat)
    bridge.position.set(bx, 0.35, canalZ)
    scene.add(bridge)
  }

  // 運河上的小船
  for (let i = 0; i < 3; i++) {
    const boat = makeBoat()
    boat.rotation.y = rand(-0.2, 0.2)
    boat.position.set(rand(-HALF + 20, HALF - 20), 0.08, canalZ + rand(-canalWidth / 4, canalWidth / 4))
    scene.add(boat)
  }

  const roofSpots = []      // 可放水塔的屋頂 {x, y, z}
  const groundSpots = []    // 巷弄/街邊可放容器的位置
  const lotSpots = []       // 空地中心（放廢棄物）

  let signIdx = 0
  let spawnPoint = null // 保留空地街區（無建築）的實際中心座標，供無人機安全重生用

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

      // 中央街區留空當出發廣場，並放置赤崁樓地標；其餘 ~18% 是空地
      if (isCenter) {
        const landmark = makeChihkanTower()
        landmark.position.set(cx, 0.2, cz - 7)
        scene.add(landmark)

        const landmarkBox = new THREE.Box3().setFromObject(landmark)
        landmarkBox.expandByScalar(0.9)
        colliders.push(landmarkBox)
        continue
      }
      if (Math.random() < 0.18) {
        lotSpots.push({ x: cx, z: cz })
        // 空地圍牆
        const fenceMat = new THREE.MeshStandardMaterial({ color: 0x9a9a90, roughness: 0.9 })
        for (const [dx, dz, w, d] of [
          [0, -BLOCK / 2, BLOCK, 0.3], [0, BLOCK / 2, BLOCK, 0.3],
          [-BLOCK / 2, 0, 0.3, BLOCK], [BLOCK / 2, 0, 0.3, BLOCK],
        ]) {
          const fence = new THREE.Mesh(new THREE.BoxGeometry(w, 1.6, d), fenceMat)
          fence.position.set(cx + dx, 1.0, cz + dz)
          scene.add(fence)
        }
        // 空地內雜草
        for (let i = 0; i < 3; i++) {
          const tree = Math.random() < 0.3 ? makeBanyanTree() : makeTree()
          tree.position.set(cx + rand(-9, 9), 0.2, cz + rand(-9, 9))
          scene.add(tree)
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
            addRowhouseStrip(scene, colliders, roofSpots, groundSpots, px, pz, sub, facing, caches)
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
            if (Math.random() < 0.5) groundSpots.push(spot)
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

  // ---------- 佈置目標與誘餌 ----------
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  function place(spotList, count, hasWater, type, makeFn, posFn) {
    for (let i = 0; i < count && spotList.length > 0; i++) {
      const spot = spotList.pop()
      const p = posFn ? posFn(spot) : { x: spot.x, y: 0.2, z: spot.z }
      const obj = makeFn(hasWater, waterMeshes, p.edgeLength)
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

  // 雨水槽要沿著屋頂邊緣（不是屋頂正中間），隨機挑一邊，長度與該邊等長並置中對齊
  function gutterPos(spot) {
    const inset = 0.35
    const margin = 0.6 // 兩端留一點餘量，避免超出屋頂角落
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

  place(bigRoofs, 4, true, 'roofGarden', makeRoofGarden, centerPos)
  place(bigRoofs, 3, false, 'roofGarden', makeRoofGarden, centerPos)

  place(smallRoofs, 4, true, 'gutter', makeGutter, gutterPos)
  place(smallRoofs, 3, false, 'gutter', makeGutter, gutterPos)

  // 大屋頂不夠時（隨機生成的商業樓偏少），從透天厝屋頂補足
  const towersPlaced = targets.filter((t) => t.type === 'tower').length
  if (towersPlaced < 5) place(smallRoofs, 5 - towersPlaced, true, 'tower', makeWaterTower, centerPos)
  const gardensPlaced = targets.filter((t) => t.type === 'roofGarden').length
  if (gardensPlaced < 4) place(smallRoofs, 4 - gardensPlaced, true, 'roofGarden', makeRoofGarden, centerPos)
  const guttersPlaced = targets.filter((t) => t.type === 'gutter').length
  if (guttersPlaced < 4) place(bigRoofs, 4 - guttersPlaced, true, 'gutter', makeGutter, gutterPos)

  // 空地／工地：一塊空地能同時容納好幾個藏匿點，每塊空地產生數個候選位置
  const lots = shuffle(lotSpots.flatMap((s) => Array.from({ length: 5 }, () => (
    { x: s.x + rand(-9, 9), z: s.z + rand(-9, 9) }
  ))))
  place(lots, 5, true, 'debris', makeDebris)
  place(lots, 3, false, 'debris', makeDebris)

  // 帆布蓋建材：在地面上的空地／工地，而非屋頂
  place(lots, 4, true, 'tarp', makeTarpPile)
  place(lots, 3, false, 'tarp', makeTarpPile)

  const grounds = shuffle(groundSpots)
  place(grounds, 6, true, 'container', makeContainer)
  place(grounds, 6, false, 'container', makeContainer)

  // 空地不夠時（隨機生成的城市空地數量偏少），用街邊位置補足
  const debrisPlaced = targets.filter((t) => t.type === 'debris').length
  if (debrisPlaced < 5) place(grounds, 5 - debrisPlaced, true, 'debris', makeDebris)
  const tarpPlaced = targets.filter((t) => t.type === 'tarp').length
  if (tarpPlaced < 4) place(grounds, 4 - tarpPlaced, true, 'tarp', makeTarpPile)
  const containerPlaced = targets.filter((t) => t.type === 'container').length
  if (containerPlaced < 6) {
    // 用尚未被其他目標使用的屋頂位置補足（兩池剩餘的部分）
    const extra = shuffle([...smallRoofs, ...bigRoofs])
    place(extra, 6 - containerPlaced, true, 'container', makeContainer, centerPos)
  }

  return { colliders, inspectables, targets, waterMeshes, spawnPoint }
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
