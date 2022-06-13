"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _transition = _interopRequireDefault(require("../../_util/transition"));

var _useMenuContext = require("./hooks/useMenuContext");

var _SubMenuList = _interopRequireDefault(require("./SubMenuList"));

var _default2 = (0, _vue.defineComponent)({
  name: 'InlineSubMenuList',
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var fixedMode = (0, _vue.computed)(function () {
      return 'inline';
    });

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
        motion = _useInjectMenu.motion,
        mode = _useInjectMenu.mode,
        defaultMotions = _useInjectMenu.defaultMotions;

    var sameModeRef = (0, _vue.computed)(function () {
      return mode.value === fixedMode.value;
    });
    var destroy = (0, _vue.ref)(!sameModeRef.value);
    var mergedOpen = (0, _vue.computed)(function () {
      return sameModeRef.value ? props.open : false;
    }); // ================================= Effect =================================
    // Reset destroy state when mode change back

    (0, _vue.watch)(mode, function () {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: 'post'
    });
    var style = (0, _vue.ref)({});
    var className = (0, _vue.ref)('');
    var mergedMotion = (0, _vue.computed)(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return (0, _extends2.default)((0, _extends2.default)({}, res), {
        appear: props.keyPath.length <= 1
      });
    });
    return function () {
      var _a;

      if (destroy.value) {
        return null;
      }

      return (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transition.default, mergedMotion.value, {
            default: function _default() {
              return [(0, _vue.withDirectives)((0, _vue.createVNode)(_SubMenuList.default, {
                "id": props.id,
                "style": style.value,
                "class": className.value
              }, {
                default: function _default() {
                  return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                }
              }), [[_vue.vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});

exports.default = _default2;