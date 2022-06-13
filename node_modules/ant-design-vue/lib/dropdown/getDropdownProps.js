"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _default = function _default() {
  return {
    trigger: {
      type: [Array, String],
      default: 'hover'
    },
    overlay: _vueTypes.default.any,
    visible: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    align: _vueTypes.default.object,
    getPopupContainer: _vueTypes.default.func,
    prefixCls: _vueTypes.default.string,
    transitionName: _vueTypes.default.string,
    placement: _vueTypes.default.oneOf((0, _type.tuple)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight')),
    overlayClassName: _vueTypes.default.string,
    overlayStyle: _vueTypes.default.style,
    forceRender: _vueTypes.default.looseBool,
    mouseEnterDelay: _vueTypes.default.number,
    mouseLeaveDelay: _vueTypes.default.number,
    openClassName: _vueTypes.default.string,
    minOverlayWidthMatchTrigger: _vueTypes.default.looseBool
  };
};

exports.default = _default;