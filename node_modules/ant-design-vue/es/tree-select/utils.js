import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { flattenChildren, isValidElement } from '../_util/props-util';
export function convertChildrenToData(nodes) {
  return flattenChildren(nodes).map(function (node) {
    if (!isValidElement(node) || !node.type) {
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

    var data = _extends({
      key: key,
      value: value
    }, restProps);

    Object.keys(restSlot).forEach(function (p) {
      if (typeof restSlot[p] === 'function') {
        data[p] = _createVNode(_Fragment, null, [restSlot[p]()]);
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