import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // 引入svg
    createSvg('./src/assets/svg/')],
  server:{
    port:3001
  }
})
