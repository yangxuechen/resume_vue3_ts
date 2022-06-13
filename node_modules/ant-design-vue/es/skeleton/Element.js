import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import { tuple } from '../_util/type';
import PropTypes from '../_util/vue-types';
export var skeletonElementProps = function skeletonElementProps() {
  return {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.oneOf(tuple('large', 'small', 'default')), PropTypes.number]),
    shape: PropTypes.oneOf(tuple('circle', 'square', 'round')),
    active: PropTypes.looseBool
  };
};

var Element = function Element(props) {
  var _classNames, _classNames2;

  var prefixCls = props.prefixCls,
      size = props.size,
      shape = props.shape;
  var sizeCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), _defineProperty(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), _defineProperty(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    lineHeight: "".concat(size, "px")
  } : {};
  return _createVNode("span", {
    "class": classNames(prefixCls, sizeCls, shapeCls),
    "style": sizeStyle
  }, null);
};

Element.displayName = 'SkeletonElement';
export default Element;