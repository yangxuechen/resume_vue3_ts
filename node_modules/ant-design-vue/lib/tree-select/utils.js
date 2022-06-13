"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToData = convertChildrenToData;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propsUtil = require("../_util/props-util");

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

function convertChildrenToData(nodes) {
  return (0, _propsUtil.flattenChildren)(nodes).map(function (node) {
    if (!(0, _propsUtil.isValidElement)(node) || !node.type) {
      return null;
    }

    var _a = node.children || {},
        d = _a.default,
        restSlot = __rest(_a, ["default"]);

    var children = d ? d() : [];

    var key = node.key,
        _b = node.props,
        value = _b.value,
        restProps = __rest(_b, ["value"]);

    var data = (0, _extends2.default)({
      key: key,
      value: value
    }, restProps);
    Object.keys(restSlot).forEach(function (p) {
      if (typeof restSlot[p] === 'function') {
        data[p] = (0, _vue.createVNode)(_vue.Fragment, null, [restSlot[p]()]);
      }
    });
    var childData = convertChildrenToData(children);

    if (childData.length) {
      data.children = childData;
    }

    return data;
  }).filter(function (data) {
    return data;
  });
}