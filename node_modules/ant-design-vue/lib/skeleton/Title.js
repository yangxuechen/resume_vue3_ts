"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.skeletonTitleProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var skeletonTitleProps = {
  prefixCls: _vueTypes.default.string,
  width: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string])
};
exports.skeletonTitleProps = skeletonTitleProps;
var SkeletonTitle = (0, _vue.defineComponent)({
  name: 'SkeletonTitle',
  props: skeletonTitleProps,
  setup: function setup(props) {
    return function () {
      var prefixCls = props.prefixCls,
          width = props.width;
      var zWidth = typeof width === 'number' ? "".concat(width, "px") : width;
      return (0, _vue.createVNode)("h3", {
        "class": prefixCls,
        "style": {
          width: zWidth
        }
      }, null);
    };
  }
});
var _default = SkeletonTitle;
exports.default = _default;