import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import ScrollableTabBarNode from './ScrollableTabBarNode';
import TabBarRootNode from './TabBarRootNode';
import TabBarTabsNode from './TabBarTabsNode';
import SaveRef from './SaveRef';

var ScrollableTabBar = function ScrollableTabBar(_, _ref) {
  var attrs = _ref.attrs;
  return _createVNode(SaveRef, {
    "children": function children(saveRef, getRef) {
      return _createVNode(TabBarRootNode, _objectSpread({
        "saveRef": saveRef
      }, attrs), {
        default: function _default() {
          return [_createVNode(ScrollableTabBarNode, _objectSpread({
            "saveRef": saveRef,
            "getRef": getRef
          }, attrs), {
            default: function _default() {
              return [_createVNode(TabBarTabsNode, _objectSpread({
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
export default ScrollableTabBar;