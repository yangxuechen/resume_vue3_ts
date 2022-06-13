import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import InkTabBarNode from './InkTabBarNode';
import TabBarTabsNode from './TabBarTabsNode';
import TabBarRootNode from './TabBarRootNode';
import ScrollableTabBarNode from './ScrollableTabBarNode';
import SaveRef from './SaveRef';
export default defineComponent({
  name: 'ScrollableInkTabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    var renderTabBarNode = this.$attrs.children;
    return _createVNode(SaveRef, {
      "children": function children(saveRef, getRef) {
        return _createVNode(TabBarRootNode, _objectSpread({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [_createVNode(ScrollableTabBarNode, _objectSpread({
              "saveRef": saveRef,
              "getRef": getRef
            }, _this.$attrs), {
              default: function _default() {
                return [_createVNode(TabBarTabsNode, _objectSpread({
                  "saveRef": saveRef
                }, _extends(_extends({}, _this.$attrs), {
                  renderTabBarNode: renderTabBarNode
                })), null), _createVNode(InkTabBarNode, _objectSpread({
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