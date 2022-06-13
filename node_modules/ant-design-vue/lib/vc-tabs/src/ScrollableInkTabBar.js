"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _InkTabBarNode = _interopRequireDefault(require("./InkTabBarNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _ScrollableTabBarNode = _interopRequireDefault(require("./ScrollableTabBarNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

var _default2 = (0, _vue.defineComponent)({
  name: 'ScrollableInkTabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    var renderTabBarNode = this.$attrs.children;
    return (0, _vue.createVNode)(_SaveRef.default, {
      "children": function children(saveRef, getRef) {
        return (0, _vue.createVNode)(_TabBarRootNode.default, (0, _objectSpread2.default)({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [(0, _vue.createVNode)(_ScrollableTabBarNode.default, (0, _objectSpread2.default)({
              "saveRef": saveRef,
              "getRef": getRef
            }, _this.$attrs), {
              default: function _default() {
                return [(0, _vue.createVNode)(_TabBarTabsNode.default, (0, _objectSpread2.default)({
                  "saveRef": saveRef
                }, (0, _extends2.default)((0, _extends2.default)({}, _this.$attrs), {
                  renderTabBarNode: renderTabBarNode
                })), null), (0, _vue.createVNode)(_InkTabBarNode.default, (0, _objectSpread2.default)({
                  "saveRef": saveRef,
                  "getRef": getRef
                }, _this.$attrs), null)];
              }
            })];
          }
        });
      }
    }, null);
  }
});

exports.default = _default2;