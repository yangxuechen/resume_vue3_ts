import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import CalendarOutlined from '@ant-design/icons-vue/CalendarOutlined';
import { isValidElement } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import classNames from '../_util/classNames';

var InputIcon = function InputIcon(_, _ref) {
  var _classNames;

  var attrs = _ref.attrs;

  var _a, _b;

  var suffixIcon = attrs.suffixIcon,
      prefixCls = attrs.prefixCls;
  return (suffixIcon && isValidElement(suffixIcon) ? cloneElement(suffixIcon, {
    class: classNames((_classNames = {}, _defineProperty(_classNames, (_a = suffixIcon.props) === null || _a === void 0 ? void 0 : _a.class, (_b = suffixIcon.props) === null || _b === void 0 ? void 0 : _b.class), _defineProperty(_classNames, "".concat(prefixCls, "-picker-icon"), true), _classNames))
  }) : _createVNode("span", {
    "class": "".concat(prefixCls, "-picker-icon")
  }, [suffixIcon])) || _createVNode(CalendarOutlined, {
    "class": "".concat(prefixCls, "-picker-icon")
  }, null);
};

InputIcon.inheritAttrs = false;
export default InputIcon;