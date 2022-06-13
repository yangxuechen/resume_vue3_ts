"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElement = cloneElement;
exports.cloneVNodes = cloneVNodes;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propsUtil = require("./props-util");

var _vue = require("vue");

var _warning = _interopRequireDefault(require("./warning"));

function cloneElement(vnode) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mergeRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var ele = vnode;

  if (Array.isArray(vnode)) {
    ele = (0, _propsUtil.filterEmpty)(vnode)[0];
  }

  if (!ele) {
    return null;
  }

  var node = (0, _vue.cloneVNode)(ele, nodeProps, mergeRef); // cloneVNode内部是合并属性，这里改成覆盖属性

  node.props = override ? (0, _extends2.default)((0, _extends2.default)({}, node.props), nodeProps) : node.props;
  (0, _warning.default)((0, _typeof2.default)(node.props.class) !== 'object', 'class must be string');
  return node;
}

function cloneVNodes(vnodes) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return vnodes.map(function (vnode) {
    return cloneElement(vnode, nodeProps, override);
  });
}