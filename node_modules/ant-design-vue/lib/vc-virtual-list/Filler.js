"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

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
    innerStyle = (0, _extends2.default)((0, _extends2.default)({}, innerStyle), {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return (0, _vue.createVNode)("div", {
    "style": outerStyle
  }, [(0, _vue.createVNode)(_vcResizeObserver.default, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default() {
      return [(0, _vue.createVNode)("div", {
        "style": innerStyle,
        "class": (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
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
var _default2 = Filter;
exports.default = _default2;