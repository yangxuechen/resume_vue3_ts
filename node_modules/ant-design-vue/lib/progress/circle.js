"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcProgress = require("../vc-progress");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _utils = require("./utils");

var _props = require("./props");

var CircleProps = (0, _extends2.default)((0, _extends2.default)({}, _props.ProgressProps), {
  progressStatus: _vueTypes.default.string
});
var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

function getPercentage(_ref) {
  var percent = _ref.percent,
      successPercent = _ref.successPercent;
  var ptg = (0, _utils.validProgress)(percent);
  if (!successPercent) return ptg;
  var successPtg = (0, _utils.validProgress)(successPercent);
  return [successPercent, (0, _utils.validProgress)(ptg - successPtg)];
}

function getStrokeColor(_ref2) {
  var progressStatus = _ref2.progressStatus,
      successPercent = _ref2.successPercent,
      strokeColor = _ref2.strokeColor;
  var color = strokeColor || statusColorMap[progressStatus];
  if (!successPercent) return color;
  return [statusColorMap.success, color];
}

var Circle = (0, _vue.defineComponent)({
  props: CircleProps,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      var _wrapperClassName;

      var prefixCls = props.prefixCls,
          width = props.width,
          strokeWidth = props.strokeWidth,
          trailColor = props.trailColor,
          strokeLinecap = props.strokeLinecap,
          gapPosition = props.gapPosition,
          gapDegree = props.gapDegree,
          type = props.type;
      var circleSize = width || 120;
      var circleStyle = {
        width: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === 'number' ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
      var circleWidth = strokeWidth || 6;
      var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
      var gapDeg = gapDegree || type === 'dashboard' && 75;
      var strokeColor = getStrokeColor(props);
      var isGradient = Object.prototype.toString.call(strokeColor) === '[object Object]';
      var wrapperClassName = (_wrapperClassName = {}, (0, _defineProperty2.default)(_wrapperClassName, "".concat(prefixCls, "-inner"), true), (0, _defineProperty2.default)(_wrapperClassName, "".concat(prefixCls, "-circle-gradient"), isGradient), _wrapperClassName);
      return (0, _vue.createVNode)("div", {
        "class": wrapperClassName,
        "style": circleStyle
      }, [(0, _vue.createVNode)(_vcProgress.Circle, {
        "percent": getPercentage(props),
        "strokeWidth": circleWidth,
        "trailWidth": circleWidth,
        "strokeColor": strokeColor,
        "strokeLinecap": strokeLinecap,
        "trailColor": trailColor,
        "prefixCls": prefixCls,
        "gapDegree": gapDeg,
        "gapPosition": gapPos
      }, null), slots === null || slots === void 0 ? void 0 : slots.default()]);
    };
  }
});
var _default = Circle;
exports.default = _default;