// 視覺驗證基準線工具
//
// 用途：在 6 個固定鏡位截圖、量測積水線索的 ΔLuma（脈動最亮/最暗的亮度差）、
// 記錄 fps 與 draw call，並做兩次「再巡檢一次」的重建煙霧測試。
// 每個影響畫面的 PR 都以此產出前後對照與契約檢查：
//   - 水面線索契約：ΔLuma ≥ 基準線（scripts/visual-baseline.json）的 80%
//   - 重開契約：兩次重建後畫面仍正常渲染、無 JS 錯誤
//
// 用法：
//   npm run build && npm run shots
// （會自行啟動 vite preview 於 :4187；截圖輸出至 screenshots/<git-sha>/）
//
// 需求：playwright。本容器環境會自動從全域安裝載入；
// 其他環境請 `npm i -D playwright`（刻意不列入 package.json，避免拖慢部署 CI）。

import { execSync, spawn } from 'node:child_process'
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

async function loadPlaywright() {
  try { return await import('playwright') } catch {}
  for (const p of ['/opt/node22/lib/node_modules/playwright/index.mjs']) {
    try { return await import(pathToFileURL(p).href) } catch {}
  }
  throw new Error('找不到 playwright，請執行 npm i -D playwright')
}

const { chromium } = await loadPlaywright()

const PORT = 4187
const sha = execSync('git rev-parse --short HEAD').toString().trim()
const outDir = `screenshots/${sha}`
fs.mkdirSync(outDir, { recursive: true })

// 自行啟動 preview 伺服器（結束時關閉）
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], { stdio: 'ignore' })
const url = `http://localhost:${PORT}/?gfx=low&freeze=1`
for (let i = 0; i < 40; i++) {
  try {
    const r = await fetch(`http://localhost:${PORT}/`)
    if (r.ok) break
  } catch {}
  await new Promise((r) => setTimeout(r, 500))
}

const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
const pageErrors = []
page.on('pageerror', (e) => pageErrors.push(e.message))

async function startGame() {
  await page.click('#startBtn')
  await page.waitForTimeout(600)
  await page.click('#introStartBtn')
  await page.waitForTimeout(600)
}

await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
await startGame()

// 6 個固定鏡位（座標對準每回合固定的地標／設施；隨機建築僅作背景）
const POSES = [
  ['street', [-6, 3, 26], [-6, 3, -60]],          // 中央廣場向北的街谷
  ['canal-bridge', [13, 5, 76], [13, 0.5, 51]],   // 運河與橋
  ['museum', [-58, 17, 18], [-82, 6, -6]],        // 美術館二館
  ['hayashi', [6, 9, -32], [26, 8, -12]],         // 林百貨轉角
  ['park-or-blocks', [-44, 22, 60], [-82, 0, 32]],// 一般街區俯角
  ['overview', [0, 120, 150], [0, 0, -10]],       // 高空全景
]

async function shot(name) {
  await page.waitForTimeout(350)
  const path = `${outDir}/${name}.png`
  const buf = await page.screenshot({ path })
  return buf
}

for (const [name, pos, look] of POSES) {
  await page.evaluate(([p, l]) => window.__game.setPose(...p, ...l), [pos, look])
  await shot(name)
  console.log(`✔ ${name}`)
}

// --- 水面線索 ΔLuma（固定在第一個水塔目標正上方，脈動最亮/最暗各一張） ---
await page.evaluate(() => {
  const g = window.__game
  const t = g.getTargets().find((t) => t.type === 'tower')
  const v = new (t.group.position.constructor)()
  t.group.getWorldPosition(v)
  g.setPose(v.x, v.y + 9, v.z, v.x, v.y, v.z)
})
async function cropLuma(buf) {
  return page.evaluate(async (dataUrl) => {
    const img = new Image()
    await new Promise((r) => { img.onload = r; img.src = dataUrl })
    const c = document.createElement('canvas')
    c.width = img.width; c.height = img.height
    const g2 = c.getContext('2d')
    g2.drawImage(img, 0, 0)
    const s = 140
    const d = g2.getImageData(img.width / 2 - s / 2, img.height / 2 - s / 2, s, s).data
    let sum = 0
    for (let i = 0; i < d.length; i += 4) sum += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]
    return sum / (d.length / 4)
  }, 'data:image/png;base64,' + buf.toString('base64'))
}
await page.evaluate(() => window.__game.setWaterPhase('max'))
const lumaMax = await cropLuma(await shot('water-max'))
await page.evaluate(() => window.__game.setWaterPhase('min'))
const lumaMin = await cropLuma(await shot('water-min'))
await page.evaluate(() => window.__game.setWaterPhase(null))
const dLuma = lumaMax - lumaMin
console.log(`水面 ΔLuma = ${dLuma.toFixed(2)}（max ${lumaMax.toFixed(1)} / min ${lumaMin.toFixed(1)}）`)

// --- fps / draw call（自由運轉 3 秒後取樣） ---
await page.waitForTimeout(3000)
const stats = await page.evaluate(() => window.__game.getFrameStats())
console.log(`fps=${stats.fps.toFixed(1)} calls=${stats.calls} triangles=${stats.triangles}`)

// --- 重開契約：兩次重建世界後仍正常渲染 ---
for (let i = 0; i < 2; i++) {
  await page.evaluate(() => { document.exitPointerLock(); window.__game.restart() })
  await page.waitForTimeout(800)
  await startGame()
}
await page.evaluate(() => window.__game.setPose(0, 120, 150, 0, 0, -10))
const rebuiltLuma = await cropLuma(await shot('after-restart'))
const restartOk = rebuiltLuma > 10 && pageErrors.length === 0
console.log(`重開契約：luma=${rebuiltLuma.toFixed(1)} errors=${pageErrors.length} → ${restartOk ? 'OK' : 'FAIL'}`)

// --- 與基準線比對（無基準線時建立） ---
const baselinePath = 'scripts/visual-baseline.json'
let contractOk = true
if (fs.existsSync(baselinePath)) {
  const base = JSON.parse(fs.readFileSync(baselinePath, 'utf8'))
  contractOk = dLuma >= base.dLuma * 0.8
  console.log(`水面線索契約：ΔLuma ${dLuma.toFixed(2)} vs 基準 ${base.dLuma.toFixed(2)} ×0.8 → ${contractOk ? 'OK' : 'FAIL'}`)
} else {
  fs.writeFileSync(baselinePath, JSON.stringify({ dLuma: +dLuma.toFixed(2), createdAt: sha }, null, 2))
  console.log(`已建立基準線 ${baselinePath}`)
}

fs.writeFileSync(`${outDir}/metrics.json`, JSON.stringify({
  sha, dLuma: +dLuma.toFixed(2), lumaMax: +lumaMax.toFixed(1), lumaMin: +lumaMin.toFixed(1),
  fps: +stats.fps.toFixed(1), calls: stats.calls, triangles: stats.triangles,
  restartOk, pageErrors,
}, null, 2))

await browser.close()
server.kill()
console.log(pageErrors.length ? `pageerrors: ${JSON.stringify(pageErrors)}` : 'no page errors')
console.log(contractOk && restartOk ? 'ALL CONTRACTS OK' : 'CONTRACT FAILURE')
process.exit(contractOk && restartOk ? 0 : 1)
