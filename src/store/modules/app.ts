export const app = {
    namespaced: true,
    state: {
      themeColor :  '#062743',
      canEdit: true,
    },
    mutations: {
      setThemeColor(state : { themeColor : String}, color: String) {
        state.themeColor = color;
        localStorage.setItem('themeColor',color.toString());
      },
      setCanEdit(state: {canEdit: boolean} , editVal: boolean){
         state.canEdit = editVal;
         localStorage.setItem('canEdit',editVal.toString());
      }
    },

    getters: {
        themeColor: (state: any) => state.themeColor,
        canEdit: (state:any) => state.canEdit,
    },
  };