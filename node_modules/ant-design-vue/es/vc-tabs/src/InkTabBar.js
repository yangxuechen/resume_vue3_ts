import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";

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

import InkTabBarNode from './InkTabBarNode';
import TabBarTabsNode from './TabBarTabsNode';
import TabBarRootNode from './TabBarRootNode';
import SaveRef from './SaveRef';

function noop() {}

var InkTabBar = function InkTabBar(_, _ref) {
  var attrs = _ref.attrs;

  var _attrs$onTabClick = attrs.onTabClick,
      onTabClick = _attrs$onTabClick === void 0 ? noop : _attrs$onTabClick,
      props = __rest(attrs, ["onTabClick"]);

  return _createVNode(SaveRef, {
    "children": function children(saveRef, getRef) {
      return _createVNode(TabBarRootNode, _objectSpread({
        "saveRef": saveRef
      }, props), {
        default: function _default() {
          return [_createVNode(TabBarTabsNode, _objectSpread({
            "onTabClick": onTabClick,
            "saveRef": saveRef
          }, props), null), _createVNode(InkTabBarNode, _objectSpread({
            "saveRef": saveRef,
            "getRef": getRef
          }, props), null)];
        }
      });
    }
  }, null);
};

InkTabBar.inheritAttrs = false;
export default InkTabBar;