import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import ResizeObserver from '../vc-resize-observer';

var Filter = function Filter(_ref, _ref2) {
  var height = _ref.height,
      offset = _ref.offset,
      prefixCls = _ref.prefixCls,
      onInnerResize = _ref.onInnerResize;
  var slots = _ref2.slots;

  var _a;

  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  if (offset !== undefined) {
    outerStyle = {
      height: "".concat(height, "px"),
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _extends(_extends({}, innerStyle), {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return _createVNode("div", {
    "style": outerStyle
  }, [_createVNode(ResizeObserver, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default() {
      return [_createVNode("div", {
        "style": innerStyle,
        "class": classNames(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])];
    }
  })]);
};

Filter.displayName = 'Filter';
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,

  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,

  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
export default Filter;