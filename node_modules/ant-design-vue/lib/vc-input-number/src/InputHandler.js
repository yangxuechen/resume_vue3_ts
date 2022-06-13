"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vcMFeedback = _interopRequireDefault(require("../../vc-m-feedback"));

var _propsUtil = require("../../_util/props-util");

var InputHandler = {
  name: 'InputHandler',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool
  },
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        disabled = _this$$props.disabled;
    var touchableProps = {
      disabled: disabled,
      activeClassName: "".concat(prefixCls, "-handler-active")
    };
    return (0, _vue.createVNode)(_vcMFeedback.default, touchableProps, {
      default: function _default() {
        return [(0, _vue.createVNode)("span", _this.$attrs, [(0, _propsUtil.getSlot)(_this)])];
      }
    });
  }
};
var _default2 = InputHandler;
exports.default = _default2;