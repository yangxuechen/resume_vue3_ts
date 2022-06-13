"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/* eslint-disable */
var Track = function Track(_, _ref) {
  var _ref2, _ref3;

  var attrs = _ref.attrs;
  var included = attrs.included,
      vertical = attrs.vertical,
      offset = attrs.offset,
      length = attrs.length,
      reverse = attrs.reverse,
      style = attrs.style,
      className = attrs.class;
  var positonStyle = vertical ? (_ref2 = {}, (0, _defineProperty2.default)(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref2, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty2.default)(_ref2, "height", "".concat(length, "%")), _ref2) : (_ref3 = {}, (0, _defineProperty2.default)(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref3, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty2.default)(_ref3, "width", "".concat(length, "%")), _ref3);
  var elStyle = (0, _extends2.default)((0, _extends2.default)({}, style), positonStyle);
  return included ? (0, _vue.createVNode)("div", {
    "class": className,
    "style": elStyle
  }, null) : null;
};

Track.inheritAttrs = false;
var _default = Track;
exports.default = _default;