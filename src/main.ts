import { user } from './store/modules/user';
import { UserInfo } from './views/UserInfo';
import { createApp } from 'vue'
import App from './App.vue'
import route from './router/'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import store from './store';

import  userInfo  from './utils/initUserInfo'
import  SvgIcon from './components/base/icon/SvgIcon.vue'
import RsSvgIcon from './components/base/icon/RsSvgIcon.vue'
import RsInput from './components/base/input/RsInput.vue'
console.log(userInfo ,'userInfo main.ts');

// 初始化用户信息 如果已经存在 不重新赋值
if(localStorage.getItem('userInfo')=='{}')
window.localStorage.setItem('userInfo',JSON.stringify(userInfo.userInfo))





createApp(App).use(route)
.use(Antd).use(store).component('rs-svg-icon',RsSvgIcon).component('rs-input',RsInput)
.mount('#app')
