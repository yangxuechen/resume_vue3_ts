import { UserInfo } from './../../views/UserInfo';


import userInfo from '../../utils/initUserInfo'

export const user = {
    namespaced: true,
    state: {
      userInfo : userInfo.userInfo
    },
    mutations: {
      setUserInfo(state : { userInfo : UserInfo}, userInfo: UserInfo) {
        state.userInfo = userInfo;
      },
    },

    getters: {
        userInfo: (state: any) => state.userInfo,
    },
  };