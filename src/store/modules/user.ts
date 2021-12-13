
import { UserInfo } from './../../views/UserInfo';

const tempUserInfo = localStorage.getItem('userInfo') || '';
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