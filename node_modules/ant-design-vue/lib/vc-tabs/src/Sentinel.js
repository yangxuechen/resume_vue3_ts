"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _propsUtil = require("../../_util/props-util");

var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  position: 'absolute'
};
var _default = {
  name: 'Sentinel',
  props: {
    setRef: _vueTypes.default.func,
    prevElement: _vueTypes.default.any,
    nextElement: _vueTypes.default.any
  },
  methods: {
    onKeyDown: function onKeyDown(_ref) {
      var target = _ref.target,
          which = _ref.which,
          shiftKey = _ref.shiftKey;
      var _this$$props = this.$props,
          nextElement = _this$$props.nextElement,
          prevElement = _this$$props.prevElement;
      if (which !== _KeyCode.default.TAB || document.activeElement !== target) return; // Tab next

      if (!shiftKey && nextElement) {
        nextElement.focus();
      } // Tab prev


      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }
  },
  render: function render() {
    var setRef = this.$props.setRef;
    return (0, _vue.createVNode)("div", {
      "tabindex": 0,
      "ref": setRef,
      "style": sentinelStyle,
      "onKeydown": this.onKeyDown,
      "role": "presentation"
    }, [(0, _propsUtil.getSlot)(this)]);
  }
};
exports.default = _default;