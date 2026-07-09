import * as THREE from 'three'

// ---------- 常數 ----------
export const TARGET_TYPES = {
  tower:      { label: '空水塔積水',       points: 30 },
  tarp:       { label: '屋頂帆布凹陷積水', points: 25 },
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
  const bases = ['#a8adb3', '#b9b2a4', '#9fb0b8', '#c2beb2', '#aab6ab']
  g.fillStyle = pick(bases)
  g.fillRect(0, 0, 128, 128)
  for (let y = 10; y < 118; y += 26) {
    for (let x = 10; x < 118; x += 26) {
      g.fillStyle = Math.random() < 0.3 ? '#ffe9a8' : '#33414d'
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
]

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

// 屋頂帆布：蓋在雜物上的帆布中央凹陷積水
function makeRoofTarp(hasWater, waterMeshes) {
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
    new THREE.MeshStandardMaterial({ color: 0x3d4248, roughness: 0.95 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // 街道中線
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xd8d8c8 })
  for (let i = 0; i <= GRID; i++) {
    const p = -HALF + i * PITCH - STREET / 2
    if (i === 0) continue
    const lineH = new THREE.Mesh(new THREE.PlaneGeometry(GRID * PITCH, 0.35), lineMat)
    lineH.rotation.x = -Math.PI / 2
    lineH.position.set(0, 0.02, p)
    scene.add(lineH)
    const lineV = new THREE.Mesh(new THREE.PlaneGeometry(0.35, GRID * PITCH), lineMat)
    lineV.rotation.x = -Math.PI / 2
    lineV.position.set(p, 0.02, 0)
    scene.add(lineV)
  }

  const roofSpots = []      // 可放水塔的屋頂 {x, y, z}
  const groundSpots = []    // 巷弄/街邊可放容器的位置
  const lotSpots = []       // 空地中心（放廢棄物）

  let signIdx = 0

  for (let bx = 0; bx < GRID; bx++) {
    for (let bz = 0; bz < GRID; bz++) {
      const cx = -HALF + bx * PITCH + BLOCK / 2
      const cz = -HALF + bz * PITCH + BLOCK / 2
      const isCenter = bx === Math.floor(GRID / 2) && bz === Math.floor(GRID / 2)

      // 街區底座（人行道/基地）
      const pad = new THREE.Mesh(
        new THREE.BoxGeometry(BLOCK + 2, 0.2, BLOCK + 2),
        new THREE.MeshStandardMaterial({ color: 0x8f8f86, roughness: 0.95 })
      )
      pad.position.set(cx, 0.1, cz)
      pad.receiveShadow = true
      scene.add(pad)

      // 中央街區留空當出發廣場；其餘 ~18% 是空地
      if (isCenter) continue
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
          const tree = makeTree()
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
          const h = rand(8, 34)

          const sideMat = new THREE.MeshStandardMaterial({ map: windowTex.clone(), roughness: 0.85 })
          sideMat.map.repeat.set(Math.max(1, Math.round(w / 6)), Math.max(1, Math.round(h / 6)))
          sideMat.map.needsUpdate = true
          const roofMat = new THREE.MeshStandardMaterial({
            color: pick([0x7d8288, 0x8a8478, 0x757d84]),
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

          roofSpots.push({ x: px, y: h + 0.2, z: pz })

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
        const tree = makeTree()
        tree.position.set(cx + BLOCK / 2 + 3, 0, cz + rand(-BLOCK / 2, BLOCK / 2))
        scene.add(tree)
      }
    }
  }

  // ---------- 佈置目標與誘餌 ----------
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  function place(spotList, count, hasWater, type, makeFn, yFn) {
    for (let i = 0; i < count && spotList.length > 0; i++) {
      const spot = spotList.pop()
      const obj = makeFn(hasWater, waterMeshes)
      obj.position.set(spot.x, yFn ? yFn(spot) : 0.2, spot.z)
      obj.rotation.y = rand(0, Math.PI * 2)
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

  place(roofSpots, 5, true, 'tower', makeWaterTower, (s) => s.y)   // 目標
  place(roofSpots, 4, false, 'tower', makeWaterTower, (s) => s.y)  // 誘餌（有蓋）

  place(roofSpots, 4, true, 'gutter', makeGutter, (s) => s.y)
  place(roofSpots, 3, false, 'gutter', makeGutter, (s) => s.y)

  place(roofSpots, 4, true, 'roofGarden', makeRoofGarden, (s) => s.y)
  place(roofSpots, 3, false, 'roofGarden', makeRoofGarden, (s) => s.y)

  place(roofSpots, 4, true, 'tarp', makeRoofTarp, (s) => s.y)
  place(roofSpots, 3, false, 'tarp', makeRoofTarp, (s) => s.y)

  const lots = shuffle(lotSpots.map((s) => ({ x: s.x + rand(-7, 7), z: s.z + rand(-7, 7) })))
  place(lots, 5, true, 'debris', makeDebris)
  place(lots, 3, false, 'debris', makeDebris)

  const grounds = shuffle(groundSpots)
  place(grounds, 6, true, 'container', makeContainer)
  place(grounds, 6, false, 'container', makeContainer)

  // 空地不夠時，用街邊位置補足廢棄物目標
  const debrisPlaced = targets.filter((t) => t.type === 'debris').length
  if (debrisPlaced < 5) place(grounds, 5 - debrisPlaced, true, 'debris', makeDebris)
  const containerPlaced = targets.filter((t) => t.type === 'container').length
  if (containerPlaced < 6) {
    const extra = shuffle(roofSpots.slice()).map((r) => ({ x: r.x, z: r.z, y: r.y }))
    place(extra, 6 - containerPlaced, true, 'container', makeContainer, (s) => s.y)
  }

  return { colliders, inspectables, targets, waterMeshes }
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
