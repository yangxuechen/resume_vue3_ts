"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _LazyRenderBox = _interopRequireDefault(require("./LazyRenderBox"));

var _default2 = {
  props: {
    hiddenClassName: _vueTypes.default.string.def(''),
    prefixCls: _vueTypes.default.string,
    visible: _vueTypes.default.looseBool
  },
  render: function render() {
    var _this = this;

    var _a, _b;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        visible = _this$$props.visible,
        hiddenClassName = _this$$props.hiddenClassName;
    return (0, _vue.createVNode)("div", {
      "class": !visible ? hiddenClassName : ''
    }, [(0, _vue.createVNode)(_LazyRenderBox.default, {
      "class": "".concat(prefixCls, "-content"),
      "visible": visible
    }, {
      default: function _default() {
        return [(_b = (_a = _this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)];
      }
    })]);
  }
};
exports.default = _default2;