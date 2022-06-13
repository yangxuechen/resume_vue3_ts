"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CalendarOutlined"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var InputIcon = function InputIcon(_, _ref) {
  var _classNames;

  var attrs = _ref.attrs;

  var _a, _b;

  var suffixIcon = attrs.suffixIcon,
      prefixCls = attrs.prefixCls;
  return (suffixIcon && (0, _propsUtil.isValidElement)(suffixIcon) ? (0, _vnode.cloneElement)(suffixIcon, {
    class: (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, (_a = suffixIcon.props) === null || _a === void 0 ? void 0 : _a.class, (_b = suffixIcon.props) === null || _b === void 0 ? void 0 : _b.class), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-picker-icon"), true), _classNames))
  }) : (0, _vue.createVNode)("span", {
    "class": "".concat(prefixCls, "-picker-icon")
  }, [suffixIcon])) || (0, _vue.createVNode)(_CalendarOutlined.default, {
    "class": "".concat(prefixCls, "-picker-icon")
  }, null);
};

InputIcon.inheritAttrs = false;
var _default = InputIcon;
exports.default = _default;