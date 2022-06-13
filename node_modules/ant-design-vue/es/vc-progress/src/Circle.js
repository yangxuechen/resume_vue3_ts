import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import PropTypes, { withUndefined } from '../../_util/vue-types';
import { initDefaultProps } from '../../_util/props-util';
import enhancer from './enhancer';
import { propTypes, defaultProps } from './types';
import { defineComponent } from 'vue';

var circlePropTypes = _extends(_extends({}, propTypes), {
  gapPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  gapDegree: withUndefined(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.looseBool]))
});

var circleDefaultProps = _extends(_extends({}, defaultProps), {
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

var Circle = defineComponent({
  name: 'Circle',
  props: initDefaultProps(circlePropTypes, circleDefaultProps),
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
        return _createVNode("path", _objectSpread({
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
    return _createVNode("svg", _objectSpread({
      "class": "".concat(prefixCls, "-circle"),
      "viewBox": "0 0 100 100"
    }, restProps), [gradient && _createVNode("defs", null, [_createVNode("linearGradient", {
      "id": "".concat(prefixCls, "-gradient-").concat(this.gradientId),
      "x1": "100%",
      "y1": "0%",
      "x2": "0%",
      "y2": "0%"
    }, [Object.keys(gradient).sort(function (a, b) {
      return stripPercentToNumber(a) - stripPercentToNumber(b);
    }).map(function (key, index) {
      return _createVNode("stop", {
        "key": index,
        "offset": key,
        "stop-color": gradient[key]
      }, null);
    })])]), _createVNode("path", pathFirst, null), this.getStokeList().reverse()]);
  }
});
export default enhancer(Circle);