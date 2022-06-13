"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuContextProvider = exports.useInjectFirstLevel = exports.useProvideFirstLevel = exports.MenuFirstLevelContextKey = exports.useInjectMenu = exports.MenuContextKey = exports.useProvideMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var MenuContextKey = Symbol('menuContextKey');
exports.MenuContextKey = MenuContextKey;

var useProvideMenu = function useProvideMenu(props) {
  (0, _vue.provide)(MenuContextKey, props);
};

exports.useProvideMenu = useProvideMenu;

var useInjectMenu = function useInjectMenu() {
  return (0, _vue.inject)(MenuContextKey);
};

exports.useInjectMenu = useInjectMenu;
var MenuFirstLevelContextKey = Symbol('menuFirstLevelContextKey');
exports.MenuFirstLevelContextKey = MenuFirstLevelContextKey;

var useProvideFirstLevel = function useProvideFirstLevel(firstLevel) {
  (0, _vue.provide)(MenuFirstLevelContextKey, firstLevel);
};

exports.useProvideFirstLevel = useProvideFirstLevel;

var useInjectFirstLevel = function useInjectFirstLevel() {
  return (0, _vue.inject)(MenuFirstLevelContextKey, true);
};

exports.useInjectFirstLevel = useInjectFirstLevel;
var MenuContextProvider = (0, _vue.defineComponent)({
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
    var newContext = (0, _extends2.default)({}, menuContext); // 确保传入的属性不会动态增删
    // 不需要 watch 变化

    if (props.mode !== undefined) {
      newContext.mode = (0, _vue.toRef)(props, 'mode');
    }

    if (props.isRootMenu !== undefined) {
      newContext.isRootMenu = (0, _vue.toRef)(props, 'isRootMenu');
    }

    if (props.overflowDisabled !== undefined) {
      newContext.overflowDisabled = (0, _vue.toRef)(props, 'overflowDisabled');
    }

    useProvideMenu(newContext);
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
exports.MenuContextProvider = MenuContextProvider;
var _default = useProvideMenu;
exports.default = _default;