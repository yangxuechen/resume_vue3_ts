"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));

var _warning = _interopRequireDefault(require("../../../_util/warning"));

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning.default)(dots ? step > 0 : true, 'Slider', '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls,
      vertical = attrs.vertical,
      reverse = attrs.reverse,
      marks = attrs.marks,
      dots = attrs.dots,
      step = attrs.step,
      included = attrs.included,
      lowerBound = attrs.lowerBound,
      upperBound = attrs.upperBound,
      max = attrs.max,
      min = attrs.min,
      dotStyle = attrs.dotStyle,
      activeDotStyle = attrs.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends4.default)((0, _extends4.default)({}, dotStyle), (0, _defineProperty2.default)({}, reverse ? 'top' : 'bottom', offset)) : (0, _extends4.default)((0, _extends4.default)({}, dotStyle), (0, _defineProperty2.default)({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = (0, _extends4.default)((0, _extends4.default)({}, style), activeDotStyle);
    }

    var pointClassName = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return (0, _vue.createVNode)("span", {
      "class": pointClassName,
      "style": style,
      "key": point
    }, null);
  });
  return (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-step")
  }, [elements]);
};

Steps.inheritAttrs = false;
var _default = Steps;
exports.default = _default;