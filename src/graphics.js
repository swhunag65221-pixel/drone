import * as THREE from 'three'

// ---------- 畫質分級 ----------
// 所有效能相關旗標的單一出處：其他模組只准「讀取」這張表，
// 不得在別處散落畫質判斷（避免旗標漂移）。
export const TIERS = {
  high: {
    label: '高',
    pixelRatio: 2,
    shadowMapSize: 2048,
    softShadow: true,
    post: true,            // 後製特效（Bloom 等，Phase E）
    clouds: true,          // 天空雲朵（Phase B）
    contactShadows: 'all', // 接觸陰影（Phase D）：all | moving | buildings
    textureDetail: 512,    // 程序化貼圖解析度（Phase C）
    anisotropy: 4,
    fogNear: 170, fogFar: 480, cameraFar: 600,
  },
  medium: {
    label: '中',
    pixelRatio: 1.5,
    shadowMapSize: 2048,
    softShadow: false,
    post: false,
    clouds: true,
    contactShadows: 'moving',
    textureDetail: 512,
    anisotropy: 1,
    fogNear: 170, fogFar: 480, cameraFar: 600,
  },
  low: {
    label: '低',
    pixelRatio: 1,
    shadowMapSize: 1024,
    softShadow: false,
    post: false,
    clouds: false,
    contactShadows: 'buildings',
    textureDetail: 256,
    anisotropy: 1,
    fogNear: 150, fogFar: 380, cameraFar: 500,
  },
}

const TIER_ORDER = ['high', 'medium', 'low']

// 偵測順序：URL 覆寫（測試用）→ 記憶的手動選擇 → GPU 字串 → 預設高
// 之後開場另有 fps 探測，只降不升（見 initGraphics.probe）。
function detectTier(renderer) {
  const q = new URLSearchParams(location.search).get('gfx')
  if (TIERS[q]) return { tier: q, source: 'url' }

  const saved = localStorage.getItem('gfxTier')
  if (TIERS[saved]) return { tier: saved, source: 'saved' }

  try {
    const gl = renderer.getContext()
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    const gpu = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '')
    // 軟體渲染（headless 測試環境）一律最低畫質——後製永不啟動，測試管線維持輕量
    if (/swiftshader|llvmpipe|software/i.test(gpu)) return { tier: 'low', source: 'gpu' }
    const mobileGpu = /mali|adreno|powervr|apple gpu/i.test(gpu)
    const touchMobile = navigator.maxTouchPoints > 1 && /mobile|android|iphone|ipad/i.test(navigator.userAgent)
    if (mobileGpu || touchMobile) return { tier: 'medium', source: 'gpu' }
  } catch { /* 偵測失敗就走預設 */ }

  return { tier: 'high', source: 'default' }
}

// 套用分級：pixelRatio／陰影／霧／視距。
// 陰影「柔和度」（shadowMap.type）只在首次 render 前設定有效，
// 因此手動切換畫質採 localStorage＋reload；執行中只允許 fps 探測降級（不動 type）。
function applyTier(name, ctx) {
  const t = TIERS[name]
  const { renderer, camera, scene, sun } = ctx
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, t.pixelRatio))
  sun.shadow.mapSize.set(t.shadowMapSize, t.shadowMapSize)
  if (sun.shadow.map) {
    sun.shadow.map.dispose()
    sun.shadow.map = null
  }
  scene.fog.near = t.fogNear
  scene.fog.far = t.fogFar
  camera.far = t.cameraFar
  camera.updateProjectionMatrix()
  return t
}

// ---------- 天空與大氣 ----------

// 漸層天空穹頂：天頂藍→中段→暖色地平線＋朝太陽方向的光暈。
// 不用 THREE.Sky（物理散射模型、fragment 成本高且偏寫實）——
// 三段漸層更貼近風格化遊戲的乾淨質感。
// 半徑 460 < 最低畫質視距 500，任何分級都不會被裁切；
// shader 末端套用與場景相同的色調映射，讓霧色與地平線無縫銜接。
export const SKY_HORIZON = 0xf5e6cf // 供 main.js 設定霧色（霧色＝地平線色 → 遠景融入天空）

export function createSky(sunPosition) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x6fb2e8) },
      midColor: { value: new THREE.Color(0xbfe0f5) },
      horizonColor: { value: new THREE.Color(SKY_HORIZON) },
      sunDirection: { value: sunPosition.clone().normalize() },
      sunColor: { value: new THREE.Color(0xfff0d0) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      varying vec3 vDir;
      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, 0.0, 1.0);
        vec3 col = h < 0.25
          ? mix(horizonColor, midColor, smoothstep(0.0, 0.25, h))
          : mix(midColor, topColor, smoothstep(0.25, 1.0, h));
        // 太陽：核心亮斑＋大範圍暖暈
        float d = max(dot(dir, sunDirection), 0.0);
        col += sunColor * (pow(d, 400.0) * 1.1 + pow(d, 10.0) * 0.18);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  })
  const dome = new THREE.Mesh(new THREE.SphereGeometry(460, 32, 18), mat)
  dome.renderOrder = -1
  return dome
}

// 柔邊雲貼圖（數個重疊的放射漸層白斑）
function makeCloudTexture() {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 128
  const g = c.getContext('2d')
  for (let i = 0; i < 7; i++) {
    const x = 40 + Math.random() * 176
    const y = 45 + Math.random() * 40
    const r = 26 + Math.random() * 34
    const grad = g.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, 'rgba(255,255,255,0.85)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 256, 128)
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 高空慢速漂移的雲層（Sprite 廣告牌；中畫質以上）
export function createClouds(count = 12) {
  const group = new THREE.Group()
  const tex = makeCloudTexture()
  for (let i = 0; i < count; i++) {
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.55 + Math.random() * 0.25, depthWrite: false })
    const cloud = new THREE.Sprite(mat)
    cloud.scale.set(60 + Math.random() * 60, 22 + Math.random() * 18, 1)
    cloud.position.set((Math.random() - 0.5) * 760, 120 + Math.random() * 60, (Math.random() - 0.5) * 760)
    cloud.userData.speed = 1.2 + Math.random() * 1.6
    group.add(cloud)
  }
  return group
}

export function updateClouds(clouds, dt) {
  for (const c of clouds.children) {
    c.position.x += c.userData.speed * dt
    if (c.position.x > 420) c.position.x = -420
  }
}

// 建立畫質系統：偵測 → 套用 → 回傳控制物件
export function initGraphics(ctx) {
  const { renderer } = ctx
  const detected = detectTier(renderer)

  const gfx = {
    tier: detected.tier,
    source: detected.source,
    flags: TIERS[detected.tier],
    // 手動選擇：記住並重新載入（陰影管線在初始化時才可完整切換）
    setTier(name) {
      if (name === 'auto') localStorage.removeItem('gfxTier')
      else localStorage.setItem('gfxTier', name)
      location.reload()
    },
    // fps 探測降級（開場 overlay 期間呼叫）：只降一級、只動安全旗標
    demote() {
      const idx = TIER_ORDER.indexOf(gfx.tier)
      if (idx >= TIER_ORDER.length - 1) return false
      gfx.tier = TIER_ORDER[idx + 1]
      gfx.flags = applyTier(gfx.tier, ctx)
      gfx.source = 'probe'
      return true
    },
    applyResize() {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, gfx.flags.pixelRatio))
    },
  }

  // 首次套用（在第一個 render 之前呼叫，shadowMap.type 也在此生效）
  renderer.shadowMap.type = gfx.flags.softShadow ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap
  gfx.flags = applyTier(gfx.tier, ctx)
  return gfx
}
