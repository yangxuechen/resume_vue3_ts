import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

/* eslint-disable */
var Track = function Track(_, _ref) {
  var _ref2, _ref3;

  var attrs = _ref.attrs;
  var included = attrs.included,
      vertical = attrs.vertical,
      offset = attrs.offset,
      length = attrs.length,
      reverse = attrs.reverse,
      style = attrs.style,
      className = attrs.class;
  var positonStyle = vertical ? (_ref2 = {}, _defineProperty(_ref2, reverse ? 'top' : 'bottom', "".concat(offset, "%")), _defineProperty(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref2, "height", "".concat(length, "%")), _ref2) : (_ref3 = {}, _defineProperty(_ref3, reverse ? 'right' : 'left', "".concat(offset, "%")), _defineProperty(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref3, "width", "".concat(length, "%")), _ref3);

  var elStyle = _extends(_extends({}, style), positonStyle);

  return included ? _createVNode("div", {
    "class": className,
    "style": elStyle
  }, null) : null;
};

Track.inheritAttrs = false;
export default Track;