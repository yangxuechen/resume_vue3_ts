"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.handleGradient = exports.sortGradient = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("./utils");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
var sortGradient = function sortGradient(gradients) {
  var tempArr = []; // eslint-disable-next-line no-restricted-syntax

  for (var _i = 0, _Object$entries = Object.entries(gradients); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var formatKey = parseFloat(key.replace(/%/g, ''));

    if (isNaN(formatKey)) {
      return {};
    }

    tempArr.push({
      key: formatKey,
      value: value
    });
  }

  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * {
 *   '0%': '#afc163',
 *   '25%': '#66FF00',
 *   '50%': '#00CC00',     ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *   '75%': '#009900',              #00CC00 50%, #009900 75%, #ffffff 100%)
 *   '100%': '#ffffff'
 * }
 *
 * Then this man came to realize the truth:
 * Besides six pence, there is the moon.
 * Besides bread and butter, there is the bug.
 * And...
 * Besides women, there is the code.
 */


exports.sortGradient = sortGradient;

var handleGradient = function handleGradient(strokeColor) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? '#1890ff' : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? '#1890ff' : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? 'to right' : _strokeColor$directio,
      rest = __rest(strokeColor, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

exports.handleGradient = handleGradient;

var Line = function Line(_, _ref2) {
  var attrs = _ref2.attrs,
      slots = _ref2.slots;
  var prefixCls = attrs.prefixCls,
      percent = attrs.percent,
      successPercent = attrs.successPercent,
      strokeWidth = attrs.strokeWidth,
      size = attrs.size,
      strokeColor = attrs.strokeColor,
      strokeLinecap = attrs.strokeLinecap,
      trailColor = attrs.trailColor;
  var backgroundProps;

  if (strokeColor && typeof strokeColor !== 'string') {
    backgroundProps = handleGradient(strokeColor);
  } else {
    backgroundProps = {
      background: strokeColor
    };
  }

  var trailStyle = trailColor ? {
    style: {
      backgroundColor: trailColor
    }
  } : undefined;
  var percentStyle = (0, _extends2.default)({
    width: "".concat((0, _utils.validProgress)(percent), "%"),
    height: "".concat(strokeWidth || (size === 'small' ? 6 : 8), "px"),
    background: strokeColor,
    borderRadius: strokeLinecap === 'square' ? 0 : '100px'
  }, backgroundProps);
  var successPercentStyle = {
    width: "".concat((0, _utils.validProgress)(successPercent), "%"),
    height: "".concat(strokeWidth || (size === 'small' ? 6 : 8), "px"),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  };
  var successSegment = successPercent !== undefined ? (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-success-bg"),
    "style": successPercentStyle
  }, null) : null;
  return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-outer")
  }, [(0, _vue.createVNode)("div", (0, _objectSpread2.default)({
    "class": "".concat(prefixCls, "-inner")
  }, trailStyle), [(0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-bg"),
    "style": percentStyle
  }, null), successSegment])]), slots === null || slots === void 0 ? void 0 : slots.default()]);
};

var _default = Line;
exports.default = _default;