export const app = {
    namespaced: true,
    state: {
      themeColor :  '#062743'
    },
    mutations: {
      setThemeColor(state : { themeColor : String}, color: String) {
        state.themeColor = color;
        localStorage.setItem('themeColor',color.toString());
      },
    },

    getters: {
        themeColor: (state: any) => state.themeColor,
    },
  };