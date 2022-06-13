"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _default = {
  name: 'Content',
  props: {
    prefixCls: _vueTypes.default.string,
    overlay: _vueTypes.default.any,
    trigger: _vueTypes.default.any,
    overlayInnerStyle: _vueTypes.default.any
  },
  updated: function updated() {
    var trigger = this.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  },
  render: function render() {
    var overlay = this.overlay,
        prefixCls = this.prefixCls,
        overlayInnerStyle = this.overlayInnerStyle;
    return (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-inner"),
      "role": "tooltip",
      "style": overlayInnerStyle
    }, [typeof overlay === 'function' ? overlay() : overlay]);
  }
};
exports.default = _default;