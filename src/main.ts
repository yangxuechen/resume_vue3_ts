import { createApp } from 'vue'
import App from './App.vue'
import route from './router/'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(route)
.use(Antd)
.mount('#app')
