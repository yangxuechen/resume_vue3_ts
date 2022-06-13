"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _default = {
  name: 'LazyRenderBox',
  props: {
    visible: _vueTypes.default.looseBool,
    hiddenClassName: _vueTypes.default.string
  },
  render: function render() {
    var hiddenClassName = this.$props.hiddenClassName;
    var child = (0, _propsUtil.getSlot)(this);

    if (hiddenClassName || child && child.length > 1 || child && child[0] && child[0].type === _vue.Text) {
      // const cls = '';
      // if (!visible && hiddenClassName) {
      //   // cls += ` ${hiddenClassName}`
      // }
      return (0, _vue.createVNode)("div", null, [child]);
    }

    return child && child[0];
  }
};
exports.default = _default;