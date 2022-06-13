import _extends from "@babel/runtime/helpers/esm/extends";
import { defineComponent, inject, provide, toRef } from 'vue';
var MenuContextKey = Symbol('menuContextKey');

var useProvideMenu = function useProvideMenu(props) {
  provide(MenuContextKey, props);
};

var useInjectMenu = function useInjectMenu() {
  return inject(MenuContextKey);
};

var MenuFirstLevelContextKey = Symbol('menuFirstLevelContextKey');

var useProvideFirstLevel = function useProvideFirstLevel(firstLevel) {
  provide(MenuFirstLevelContextKey, firstLevel);
};

var useInjectFirstLevel = function useInjectFirstLevel() {
  return inject(MenuFirstLevelContextKey, true);
};

var MenuContextProvider = defineComponent({
  name: 'MenuContextProvider',
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: undefined
    },
    overflowDisabled: {
      type: Boolean,
      default: undefined
    },
    isRootMenu: {
      type: Boolean,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var menuContext = useInjectMenu();

    var newContext = _extends({}, menuContext); // 确保传入的属性不会动态增删
    // 不需要 watch 变化


    if (props.mode !== undefined) {
      newContext.mode = toRef(props, 'mode');
    }

    if (props.isRootMenu !== undefined) {
      newContext.isRootMenu = toRef(props, 'isRootMenu');
    }

    if (props.overflowDisabled !== undefined) {
      newContext.overflowDisabled = toRef(props, 'overflowDisabled');
    }

    useProvideMenu(newContext);
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
export { useProvideMenu, MenuContextKey, useInjectMenu, MenuFirstLevelContextKey, useProvideFirstLevel, useInjectFirstLevel, MenuContextProvider };
export default useProvideMenu;