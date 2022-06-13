import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { defineComponent } from 'vue';
import { initDefaultProps } from '../../_util/props-util';
import enhancer from './enhancer';
import { propTypes, defaultProps } from './types';
var Line = defineComponent({
  name: 'Line',
  props: initDefaultProps(propTypes, defaultProps),
  created: function created() {
    this.paths = {};
  },
  render: function render() {
    var _this = this;

    var _a = this.$props,
        percent = _a.percent,
        prefixCls = _a.prefixCls,
        strokeColor = _a.strokeColor,
        strokeLinecap = _a.strokeLinecap,
        strokeWidth = _a.strokeWidth,
        trailColor = _a.trailColor,
        trailWidth = _a.trailWidth,
        transition = _a.transition,
        restProps = __rest(_a, ["percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "trailColor", "trailWidth", "transition"]);

    delete restProps.gapPosition;
    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n           L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
    var viewBoxString = "0 0 100 ".concat(strokeWidth);
    var stackPtg = 0;
    var pathFirst = {
      d: pathString,
      'stroke-linecap': strokeLinecap,
      stroke: trailColor,
      'stroke-width': trailWidth || strokeWidth,
      'fill-opacity': '0',
      class: "".concat(prefixCls, "-line-trail")
    };
    return _createVNode("svg", _objectSpread({
      "class": "".concat(prefixCls, "-line"),
      "viewBox": viewBoxString,
      "preserveAspectRatio": "none"
    }, restProps), [_createVNode("path", pathFirst, null), percentList.map(function (ptg, index) {
      var pathStyle = {
        strokeDasharray: "".concat(ptg, "px, 100px"),
        strokeDashoffset: "-".concat(stackPtg, "px"),
        transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
      };
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      stackPtg += ptg;
      var pathProps = {
        key: index,
        d: pathString,
        'stroke-linecap': strokeLinecap,
        stroke: color,
        'stroke-width': strokeWidth,
        'fill-opacity': '0',
        class: "".concat(prefixCls, "-line-path"),
        style: pathStyle
      };
      return _createVNode("path", _objectSpread({
        "ref": function ref(c) {
          return _this.paths[index] = c;
        }
      }, pathProps), null);
    })]);
  }
});
export default enhancer(Line);