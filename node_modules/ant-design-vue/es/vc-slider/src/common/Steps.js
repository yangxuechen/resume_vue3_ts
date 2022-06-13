import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import classNames from '../../../_util/classNames';
import warning from '../../../_util/warning';

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  warning(dots ? step > 0 : true, 'Slider', '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
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
    var style = vertical ? _extends(_extends({}, dotStyle), _defineProperty({}, reverse ? 'top' : 'bottom', offset)) : _extends(_extends({}, dotStyle), _defineProperty({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = _extends(_extends({}, style), activeDotStyle);
    }

    var pointClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-dot"), true), _defineProperty(_classNames, "".concat(prefixCls, "-dot-active"), isActived), _defineProperty(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return _createVNode("span", {
      "class": pointClassName,
      "style": style,
      "key": point
    }, null);
  });
  return _createVNode("div", {
    "class": "".concat(prefixCls, "-step")
  }, [elements]);
};

Steps.inheritAttrs = false;
export default Steps;