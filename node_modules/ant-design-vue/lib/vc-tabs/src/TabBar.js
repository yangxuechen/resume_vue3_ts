"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _TabBarRootNode = _interopRequireDefault(require("./TabBarRootNode"));

var _TabBarTabsNode = _interopRequireDefault(require("./TabBarTabsNode"));

var _SaveRef = _interopRequireDefault(require("./SaveRef"));

var _default2 = {
  name: 'TabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    return (0, _vue.createVNode)(_SaveRef.default, {
      "children": function children(saveRef) {
        return (0, _vue.createVNode)(_TabBarRootNode.default, (0, _objectSpread2.default)({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [(0, _vue.createVNode)(_TabBarTabsNode.default, (0, _objectSpread2.default)({
              "saveRef": saveRef
            }, _this.$attrs), null)];
          }
        });
      }
    }, null);
  }
};
exports.default = _default2;