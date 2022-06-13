"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _ScrollableTabBarNode = _interopRequireDefault(require("./ScrollableTabBarNode"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

var ScrollableTabBar = function ScrollableTabBar(_, _ref) {
  var attrs = _ref.attrs;
  return (0, _vue.createVNode)(_SaveRef.default, {
    "children": function children(saveRef, getRef) {
      return (0, _vue.createVNode)(_TabBarRootNode.default, (0, _objectSpread2.default)({
        "saveRef": saveRef
      }, attrs), {
        default: function _default() {
          return [(0, _vue.createVNode)(_ScrollableTabBarNode.default, (0, _objectSpread2.default)({
            "saveRef": saveRef,
            "getRef": getRef
          }, attrs), {
            default: function _default() {
              return [(0, _vue.createVNode)(_TabBarTabsNode.default, (0, _objectSpread2.default)({
                "saveRef": saveRef
              }, attrs), null)];
            }
          })];
        }
      });
    }
  }, null);
};

ScrollableTabBar.inheritAttrs = false;
var _default2 = ScrollableTabBar;
exports.default = _default2;