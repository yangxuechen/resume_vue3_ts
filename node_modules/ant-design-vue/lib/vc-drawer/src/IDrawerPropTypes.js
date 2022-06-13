"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDrawerChildProps = exports.IDrawerProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var IProps = {
  width: _vueTypes.default.any,
  height: _vueTypes.default.any,
  defaultOpen: _vueTypes.default.looseBool,
  firstEnter: _vueTypes.default.looseBool,
  open: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  placement: _vueTypes.default.string,
  level: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.array]),
  levelMove: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.func, _vueTypes.default.array]),
  ease: _vueTypes.default.string,
  duration: _vueTypes.default.string,
  handler: _vueTypes.default.any,
  showMask: _vueTypes.default.looseBool,
  maskStyle: _vueTypes.default.object,
  className: _vueTypes.default.string,
  wrapStyle: _vueTypes.default.object,
  maskClosable: _vueTypes.default.looseBool,
  afterVisibleChange: _vueTypes.default.func,
  keyboard: _vueTypes.default.looseBool
};
var IDrawerProps = (0, _extends2.default)((0, _extends2.default)({}, IProps), {
  wrapperClassName: _vueTypes.default.string,
  forceRender: _vueTypes.default.looseBool,
  getContainer: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func, _vueTypes.default.object, _vueTypes.default.looseBool])
});
exports.IDrawerProps = IDrawerProps;
var IDrawerChildProps = (0, _extends2.default)((0, _extends2.default)({}, IProps), {
  getContainer: _vueTypes.default.func,
  getOpenCount: _vueTypes.default.func,
  switchScrollingEffect: _vueTypes.default.func
});
exports.IDrawerChildProps = IDrawerChildProps;