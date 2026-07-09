import * as THREE from 'three'

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

// 屋簷雨水槽：沿屋頂邊緣的排水溝，落葉堵塞後容易積水
function makeGutter(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const metal = new THREE.MeshStandardMaterial({ color: 0x8a8f94, roughness: 0.6, metalness: 0.5 })
  const length = 3.2
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
  for (let i = 0; i < 3; i++) {
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

// 帆布蓋建材：空地／工地上，帆布蓋著建材堆，中央凹陷處積水
function makeTarpPile(hasWater, waterMeshes) {
  const g = new THREE.Group()
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.9 })
  for (let i = 0; i < 3; i++) {
    const h = rand(0.4, 0.7)
    const crate = new THREE.Mesh(new THREE.BoxGeometry(rand(0.6, 1), h, rand(0.6, 1)), crateMat)
    crate.position.set(rand(-0.8, 0.8), h / 2, rand(-0.8, 0.8))
    g.add(crate)
  }

  const tarpMat = new THREE.MeshStandardMaterial({
    color: pick([0x2f6f8f, 0x3f7a4f, 0x6f6f3f]),
    roughness: 0.8,
    side: THREE.DoubleSide,
  })
  const tarp = new THREE.Mesh(new THREE.CircleGeometry(1.8, 20), tarpMat)
  tarp.rotation.x = -Math.PI / 2
  tarp.position.y = 0.75
  g.add(tarp)
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.08, 6, 20), tarpMat)
  rim.rotation.x = Math.PI / 2
  rim.position.y = 0.85
  g.add(rim)

  if (hasWater) {
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.75, 16), makeWaterMaterial())
    water.rotation.x = -Math.PI / 2
    water.position.y = 0.7
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
// 回傳騎樓下方的座標，可作為容器積水的新藏匿點（有遮蔽、從空中看不到）。
function addArcade(scene, px, pz, w, d) {
  const roofH = 3.6
  const depth = 2.0
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x6b5842, roughness: 0.85 })
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0xc9a876, roughness: 0.8 })

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, depth), roofMat)
  roof.position.set(px, roofH, pz + d / 2 + depth / 2)
  roof.castShadow = true
  scene.add(roof)

  const pillarCount = Math.max(2, Math.round(w / 3))
  for (let i = 0; i < pillarCount; i++) {
    const ppx = px - w / 2 + (i + 0.5) * (w / pillarCount)
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, roofH, 8), pillarMat)
    pillar.position.set(ppx, roofH / 2, pz + d / 2 + depth - 0.2)
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
      lantern.position.set(lx, roofH - 0.35, pz + d / 2 + depth - 0.3)
      scene.add(lantern)
    }
  }

  return { x: px, z: pz + d / 2 + depth * 0.6 }
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

          const h = rand(8, 34)

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
            sign.position.set(px, 4.2, pz + d / 2 + 0.06)
            scene.add(sign)
          }

          // 突出式直式招牌
          if (h < 16 && Math.random() < 0.3) {
            const vsign = new THREE.Mesh(
              new THREE.PlaneGeometry(1.1, 2.6),
              new THREE.MeshBasicMaterial({ map: makeVerticalSignTexture(pick(SIGN_TEXTS)), side: THREE.DoubleSide })
            )
            vsign.rotation.y = Math.PI / 2
            vsign.position.set(px + w / 2 + 0.55, 4.0, pz + d / 2 - 1.2)
            scene.add(vsign)
          }

          // 騎樓：外推遮簷走廊，底下也可能藏著積水容器
          if (h < 16 && Math.random() < 0.4) {
            const spot = addArcade(scene, px, pz, w, d)
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

  // ---------- 佈置目標與誘餌 ----------
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  function place(spotList, count, hasWater, type, makeFn, posFn) {
    for (let i = 0; i < count && spotList.length > 0; i++) {
      const spot = spotList.pop()
      const obj = makeFn(hasWater, waterMeshes)
      const p = posFn ? posFn(spot) : { x: spot.x, y: 0.2, z: spot.z }
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
      const radius = type === 'tower' ? 2.4
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

  // 水塔優先放在較高的屋頂（增加「要飛上去看」的難度），較低屋頂用於其他屋頂類型積水。
  // 直接改寫 roofSpots 本身（而非用 filter 產生的複本），確保後面各類型屋頂積水
  // 從同一個池子依序取用，不會重複用到同一棟屋頂。
  {
    const shortRoofs = roofSpots.filter((r) => r.y <= 14)
    const tallRoofs = shuffle(roofSpots.filter((r) => r.y > 14))
    roofSpots.length = 0
    roofSpots.push(...shuffle(shortRoofs), ...tallRoofs) // tall 放在陣列尾端，pop() 會優先取到
  }

  // 雨水槽要沿著屋頂邊緣（不是屋頂正中間），隨機挑一邊並沿著該邊緣對齊擺放
  function gutterPos(spot) {
    const inset = 0.35
    const edge = Math.floor(Math.random() * 4) // 0/1: 南北邊；2/3: 東西邊
    if (edge < 2) {
      const zSign = edge === 0 ? 1 : -1
      return {
        x: spot.x + rand(-(spot.w / 2 - 2), spot.w / 2 - 2),
        y: spot.y,
        z: spot.z + zSign * (spot.d / 2 - inset),
        rotY: 0,
      }
    }
    const xSign = edge === 2 ? 1 : -1
    return {
      x: spot.x + xSign * (spot.w / 2 - inset),
      y: spot.y,
      z: spot.z + rand(-(spot.d / 2 - 2), spot.d / 2 - 2),
      rotY: Math.PI / 2,
    }
  }

  place(roofSpots, 5, true, 'tower', makeWaterTower, (s) => ({ x: s.x, y: s.y, z: s.z }))   // 目標
  place(roofSpots, 4, false, 'tower', makeWaterTower, (s) => ({ x: s.x, y: s.y, z: s.z }))  // 誘餌（有蓋）

  place(roofSpots, 4, true, 'gutter', makeGutter, gutterPos)
  place(roofSpots, 3, false, 'gutter', makeGutter, gutterPos)

  place(roofSpots, 4, true, 'roofGarden', makeRoofGarden, (s) => ({ x: s.x, y: s.y, z: s.z }))
  place(roofSpots, 3, false, 'roofGarden', makeRoofGarden, (s) => ({ x: s.x, y: s.y, z: s.z }))

  // 空地／工地：一塊空地能同時容納好幾個藏匿點，每塊空地產生數個候選位置
  const lots = shuffle(lotSpots.flatMap((s) => [
    { x: s.x + rand(-9, 9), z: s.z + rand(-9, 9) },
    { x: s.x + rand(-9, 9), z: s.z + rand(-9, 9) },
    { x: s.x + rand(-9, 9), z: s.z + rand(-9, 9) },
  ]))
  place(lots, 5, true, 'debris', makeDebris)
  place(lots, 3, false, 'debris', makeDebris)

  // 帆布蓋建材：在地面上的空地／工地，而非屋頂
  place(lots, 4, true, 'tarp', makeTarpPile)
  place(lots, 3, false, 'tarp', makeTarpPile)

  const grounds = shuffle(groundSpots)
  place(grounds, 6, true, 'container', makeContainer)
  place(grounds, 6, false, 'container', makeContainer)

  // 空地不夠時，用街邊位置補足廢棄物目標
  const debrisPlaced = targets.filter((t) => t.type === 'debris').length
  if (debrisPlaced < 5) place(grounds, 5 - debrisPlaced, true, 'debris', makeDebris)
  const containerPlaced = targets.filter((t) => t.type === 'container').length
  if (containerPlaced < 6) {
    const extra = shuffle(roofSpots.slice())
    place(extra, 6 - containerPlaced, true, 'container', makeContainer, (s) => ({ x: s.x, y: s.y, z: s.z }))
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
