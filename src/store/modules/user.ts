
import { UserInfo } from './../../views/UserInfo';

import userInfo from '../../utils/initUserInfo'

console.log('****start...');

if(!localStorage.getItem('userInfo')){
  console.log('没有userInfo');
  localStorage.setItem('userInfo',JSON.stringify(userInfo.userInfo))
}
const tempUserInfo = localStorage.getItem('userInfo') || '{}';

console.log(tempUserInfo,'tempUserInfo');

export const user = {
    namespaced: true,
    state: {
      userInfo :  JSON.parse(tempUserInfo) 
    },
    mutations: {
      setUserInfo(state : { userInfo : UserInfo}, userInfo: UserInfo) {
        state.userInfo = userInfo;
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
      },
    },

    getters: {
        userInfo: (state: any) => state.userInfo,
    },
  };