"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _InkTabBarNode = _interopRequireDefault(require("./InkTabBarNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

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

function noop() {}

var InkTabBar = function InkTabBar(_, _ref) {
  var attrs = _ref.attrs;

  var _attrs$onTabClick = attrs.onTabClick,
      onTabClick = _attrs$onTabClick === void 0 ? noop : _attrs$onTabClick,
      props = __rest(attrs, ["onTabClick"]);

  return (0, _vue.createVNode)(_SaveRef.default, {
    "children": function children(saveRef, getRef) {
      return (0, _vue.createVNode)(_TabBarRootNode.default, (0, _objectSpread2.default)({
        "saveRef": saveRef
      }, props), {
        default: function _default() {
          return [(0, _vue.createVNode)(_TabBarTabsNode.default, (0, _objectSpread2.default)({
            "onTabClick": onTabClick,
            "saveRef": saveRef
          }, props), null), (0, _vue.createVNode)(_InkTabBarNode.default, (0, _objectSpread2.default)({
            "saveRef": saveRef,
            "getRef": getRef
          }, props), null)];
        }
      });
    }
  }, null);
};

InkTabBar.inheritAttrs = false;
var _default2 = InkTabBar;
exports.default = _default2;