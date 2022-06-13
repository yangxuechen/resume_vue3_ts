"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var triggerType = _vueTypes.default.oneOf((0, _type.tuple)('hover', 'focus', 'click', 'contextmenu'));

var _default = function _default() {
  return {
    trigger: _vueTypes.default.oneOfType([triggerType, _vueTypes.default.arrayOf(triggerType)]).def('hover'),
    visible: _vueTypes.default.looseBool,
    defaultVisible: _vueTypes.default.looseBool,
    placement: _vueTypes.default.oneOf((0, _type.tuple)('top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom')).def('top'),
    color: _vueTypes.default.string,
    transitionName: _vueTypes.default.string.def('zoom-big-fast'),
    overlayStyle: _vueTypes.default.object.def(function () {
      return {};
    }),
    overlayClassName: _vueTypes.default.string,
    openClassName: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    mouseEnterDelay: _vueTypes.default.number.def(0.1),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1),
    getPopupContainer: _vueTypes.default.func,
    arrowPointAtCenter: _vueTypes.default.looseBool.def(false),
    autoAdjustOverflow: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]).def(true),
    destroyTooltipOnHide: _vueTypes.default.looseBool.def(false),
    align: _vueTypes.default.object.def(function () {
      return {};
    }),
    builtinPlacements: _vueTypes.default.object,
    children: _vueTypes.default.array,
    onVisibleChange: _vueTypes.default.func,
    'onUpdate:visible': _vueTypes.default.func
  };
};

exports.default = _default;