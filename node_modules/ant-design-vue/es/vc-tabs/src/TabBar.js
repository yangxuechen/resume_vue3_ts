import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import TabBarRootNode from './TabBarRootNode';
import TabBarTabsNode from './TabBarTabsNode';
import SaveRef from './SaveRef';
export default {
  name: 'TabBar',
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    return _createVNode(SaveRef, {
      "children": function children(saveRef) {
        return _createVNode(TabBarRootNode, _objectSpread({
          "saveRef": saveRef
        }, _this.$attrs), {
          default: function _default() {
            return [_createVNode(TabBarTabsNode, _objectSpread({
              "saveRef": saveRef
            }, _this.$attrs), null)];
          }
        });
      }
    }, null);
  }
};