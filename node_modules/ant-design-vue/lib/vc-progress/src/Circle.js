"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _propsUtil = require("../../_util/props-util");

var _enhancer = _interopRequireDefault(require("./enhancer"));

var _types = require("./types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var circlePropTypes = (0, _extends2.default)((0, _extends2.default)({}, _types.propTypes), {
  gapPosition: _vueTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  gapDegree: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string, _vueTypes.default.looseBool]))
});
var circleDefaultProps = (0, _extends2.default)((0, _extends2.default)({}, _types.defaultProps), {
  gapPosition: 'top'
});
var gradientSeed = 0;

function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}

function toArray(symArray) {
  return Array.isArray(symArray) ? symArray : [symArray];
}

function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : undefined;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;

  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;

    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;

    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;

    default:
  }

  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s' // eslint-disable-line

  };
  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}

var Circle = (0, _vue.defineComponent)({
  name: 'Circle',
  props: (0, _propsUtil.initDefaultProps)(circlePropTypes, circleDefaultProps),
  created: function created() {
    this.paths = {};
    this.gradientId = gradientSeed;
    gradientSeed += 1;
  },
  methods: {
    getStokeList: function getStokeList() {
      var _this = this;

      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          percent = _this$$props.percent,
          strokeColor = _this$$props.strokeColor,
          strokeWidth = _this$$props.strokeWidth,
          strokeLinecap = _this$$props.strokeLinecap,
          gapDegree = _this$$props.gapDegree,
          gapPosition = _this$$props.gapPosition;
      var percentList = toArray(percent);
      var strokeColorList = toArray(strokeColor);
      var stackPtg = 0;
      return percentList.map(function (ptg, index) {
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
        var stroke = Object.prototype.toString.call(color) === '[object Object]' ? "url(#".concat(prefixCls, "-gradient-").concat(_this.gradientId, ")") : '';

        var _getPathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
            pathString = _getPathStyles.pathString,
            pathStyle = _getPathStyles.pathStyle;

        stackPtg += ptg;
        var pathProps = {
          key: index,
          d: pathString,
          stroke: stroke,
          'stroke-linecap': strokeLinecap,
          'stroke-width': strokeWidth,
          opacity: ptg === 0 ? 0 : 1,
          'fill-opacity': '0',
          class: "".concat(prefixCls, "-circle-path"),
          style: pathStyle
        };
        return (0, _vue.createVNode)("path", (0, _objectSpread2.default)({
          "ref": function ref(c) {
            return _this.paths[index] = c;
          }
        }, pathProps), null);
      });
    }
  },
  render: function render() {
    var _a = this.$props,
        prefixCls = _a.prefixCls,
        strokeWidth = _a.strokeWidth,
        trailWidth = _a.trailWidth,
        gapDegree = _a.gapDegree,
        gapPosition = _a.gapPosition,
        trailColor = _a.trailColor,
        strokeLinecap = _a.strokeLinecap,
        strokeColor = _a.strokeColor,
        restProps = __rest(_a, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]);

    var _getPathStyles2 = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;

    delete restProps.percent;
    var strokeColorList = toArray(strokeColor);
    var gradient = strokeColorList.find(function (color) {
      return Object.prototype.toString.call(color) === '[object Object]';
    });
    var pathFirst = {
      d: pathString,
      stroke: trailColor,
      'stroke-linecap': strokeLinecap,
      'stroke-width': trailWidth || strokeWidth,
      'fill-opacity': '0',
      class: "".concat(prefixCls, "-circle-trail"),
      style: pathStyle
    };
    return (0, _vue.createVNode)("svg", (0, _objectSpread2.default)({
      "class": "".concat(prefixCls, "-circle"),
      "viewBox": "0 0 100 100"
    }, restProps), [gradient && (0, _vue.createVNode)("defs", null, [(0, _vue.createVNode)("linearGradient", {
      "id": "".concat(prefixCls, "-gradient-").concat(this.gradientId),
      "x1": "100%",
      "y1": "0%",
      "x2": "0%",
      "y2": "0%"
    }, [Object.keys(gradient).sort(function (a, b) {
      return stripPercentToNumber(a) - stripPercentToNumber(b);
    }).map(function (key, index) {
      return (0, _vue.createVNode)("stop", {
        "key": index,
        "offset": key,
        "stop-color": gradient[key]
      }, null);
    })])]), (0, _vue.createVNode)("path", pathFirst, null), this.getStokeList().reverse()]);
  }
});

var _default = (0, _enhancer.default)(Circle);

exports.default = _default;