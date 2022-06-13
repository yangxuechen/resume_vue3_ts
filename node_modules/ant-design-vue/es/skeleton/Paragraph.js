import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
var widthUnit = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export var skeletonParagraphProps = {
  prefixCls: PropTypes.string,
  width: PropTypes.oneOfType([widthUnit, PropTypes.arrayOf(widthUnit)]),
  rows: PropTypes.number
};
var SkeletonParagraph = defineComponent({
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

      var rowList = _toConsumableArray(Array(rows)).map(function (_, index) {
        var width = getWidth(index);
        return _createVNode("li", {
          "key": index,
          "style": {
            width: typeof width === 'number' ? "".concat(width, "px") : width
          }
        }, null);
      });

      return _createVNode("ul", {
        "class": prefixCls
      }, [rowList]);
    };
  }
});
export default SkeletonParagraph;