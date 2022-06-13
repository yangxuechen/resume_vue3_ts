"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToData = convertChildrenToData;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propsUtil = require("../../_util/props-util");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function convertNodeToOption(node) {
  var _a = node,
      key = _a.key,
      children = _a.children,
      _b = _a.props,
      value = _b.value,
      disabled = _b.disabled,
      restProps = __rest(_b, ["value", "disabled"]);

  var child = children && children.default ? children.default() : undefined;
  return (0, _extends2.default)({
    key: key,
    value: value !== undefined ? value : key,
    children: child,
    disabled: disabled || disabled === ''
  }, restProps);
}

function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dd = (0, _propsUtil.flattenChildren)(nodes).map(function (node, index) {
    var _a;

    if (!(0, _propsUtil.isValidElement)(node) || !node.type) {
      return null;
    }

    var isSelectOptGroup = node.type.isSelectOptGroup,
        key = node.key,
        children = node.children,
        props = node.props;

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    var child = children && children.default ? children.default() : undefined;
    var label = (props === null || props === void 0 ? void 0 : props.label) || ((_a = children.label) === null || _a === void 0 ? void 0 : _a.call(children)) || key;
    return (0, _extends2.default)((0, _extends2.default)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : String(key), "__")
    }, props), {
      label: label,
      options: convertChildrenToData(child || [])
    });
  }).filter(function (data) {
    return data;
  });
  return dd;
}