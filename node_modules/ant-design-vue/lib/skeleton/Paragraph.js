"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.skeletonParagraphProps = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var widthUnit = _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]);

var skeletonParagraphProps = {
  prefixCls: _vueTypes.default.string,
  width: _vueTypes.default.oneOfType([widthUnit, _vueTypes.default.arrayOf(widthUnit)]),
  rows: _vueTypes.default.number
};
exports.skeletonParagraphProps = skeletonParagraphProps;
var SkeletonParagraph = (0, _vue.defineComponent)({
  name: 'SkeletonParagraph',
  props: skeletonParagraphProps,
  setup: function setup(props) {
    var getWidth = function getWidth(index) {
      var width = props.width,
          _props$rows = props.rows,
          rows = _props$rows === void 0 ? 2 : _props$rows;

      if (Array.isArray(width)) {
        return width[index];
      } // last paragraph


      if (rows - 1 === index) {
        return width;
      }

      return undefined;
    };

    return function () {
      var prefixCls = props.prefixCls,
          rows = props.rows;
      var rowList = (0, _toConsumableArray2.default)(Array(rows)).map(function (_, index) {
        var width = getWidth(index);
        return (0, _vue.createVNode)("li", {
          "key": index,
          "style": {
            width: typeof width === 'number' ? "".concat(width, "px") : width
          }
        }, null);
      });
      return (0, _vue.createVNode)("ul", {
        "class": prefixCls
      }, [rowList]);
    };
  }
});
var _default = SkeletonParagraph;
exports.default = _default;