
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
    token: '',
    mutations: {
      setUserInfo(state : { userInfo : UserInfo}, userInfo: UserInfo) {
        state.userInfo = userInfo;
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
      },
      setToken(state : { token: string }, token: string) {
        state.token = token;
      },
    },

    getters: {
        userInfo: (state: any) => state.userInfo,
        token: (state: any) => state.token,
    },
  };