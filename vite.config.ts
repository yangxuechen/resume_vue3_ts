import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/plugins/svgBuilder'
import path from 'path' 
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    // 引入svg
    createSvg('./src/assets/svg/'),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server:{
    port:3001
  },
  // 上传打包项目到github pages 配置的路径
  base:'/resume_vue3_ts/'
})
