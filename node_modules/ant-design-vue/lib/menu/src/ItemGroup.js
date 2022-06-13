"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propsUtil = require("../../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _useMenuContext = require("./hooks/useMenuContext");

var menuItemGroupProps = {
  title: _vueTypes.default.VNodeChild
};

var _default = (0, _vue.defineComponent)({
  name: 'AMenuItemGroup',
  inheritAttrs: false,
  props: menuItemGroupProps,
  slots: ['title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
        prefixCls = _useInjectMenu.prefixCls;

    var groupPrefixCls = (0, _vue.computed)(function () {
      return "".concat(prefixCls.value, "-item-group");
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("li", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "onClick": function onClick(e) {
          return e.stopPropagation();
        },
        "class": groupPrefixCls.value
      }), [(0, _vue.createVNode)("div", {
        "title": typeof props.title === 'string' ? props.title : undefined,
        "class": "".concat(groupPrefixCls.value, "-title")
      }, [(0, _propsUtil.getPropsSlot)(slots, props, 'title')]), (0, _vue.createVNode)("ul", {
        "class": "".concat(groupPrefixCls.value, "-list")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});

exports.default = _default;