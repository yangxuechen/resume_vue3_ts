import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/plugins/svgBuilder'

import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    // 引入svg
    createSvg('./src/assets/svg/'),
  ],
  server:{
    port:3001
  }
})
