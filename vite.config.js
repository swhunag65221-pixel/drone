import { defineConfig } from 'vite'

// base './' 讓打包後的資源使用相對路徑，
// 部署在 GitHub Pages 子路徑（https://<user>.github.io/drone/）也能正常載入
export default defineConfig({
  base: './',
})
