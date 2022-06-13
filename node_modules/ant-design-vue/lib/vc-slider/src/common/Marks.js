"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _supportsPassive = _interopRequireDefault(require("../../../_util/supportsPassive"));

var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));

var _propsUtil = require("../../../_util/props-util");

var Marks = function Marks(_, _ref) {
  var attrs = _ref.attrs;
  var className = attrs.class,
      vertical = attrs.vertical,
      reverse = attrs.reverse,
      marks = attrs.marks,
      included = attrs.included,
      upperBound = attrs.upperBound,
      lowerBound = attrs.lowerBound,
      max = attrs.max,
      min = attrs.min,
      onClickLabel = attrs.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = typeof marks[point] === 'function' ? marks[point](h) : marks[point];
    var markPointIsObject = (0, _typeof2.default)(markPoint) === 'object' && !(0, _propsUtil.isValidElement)(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(className, "-text"), true), (0, _defineProperty2.default)(_classNames, "".concat(className, "-text-active"), isActive), _classNames));
    var bottomStyle = (0, _defineProperty2.default)({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));
    var leftStyle = (0, _defineProperty2.default)({
      transform: "translateX(-50%)",
      msTransform: "translateX(-50%)"
    }, reverse ? 'right' : 'left', reverse ? "".concat((point - min / 4) / range * 100, "%") : "".concat((point - min) / range * 100, "%"));
    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends2.default)((0, _extends2.default)({}, style), markPoint.style) : style;
    var touchEvents = (0, _defineProperty2.default)({}, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', function (e) {
      return onClickLabel(e, point);
    });
    return (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
      "class": markClassName,
      "style": markStyle,
      "key": point,
      "onMousedown": function onMousedown(e) {
        return onClickLabel(e, point);
      }
    }, touchEvents), [markLabel]);
  });
  return (0, _vue.createVNode)("div", {
    "class": className
  }, [elements]);
};

Marks.inheritAttrs = false;
var _default = Marks;
exports.default = _default;