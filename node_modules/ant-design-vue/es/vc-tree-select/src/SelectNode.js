import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import VcTree from '../../vc-tree';
/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */

var TreeNode = VcTree.TreeNode;

function SelectNode(_, _ref) {
  var attrs = _ref.attrs,
      slots = _ref.slots;
  return _createVNode(TreeNode, attrs, slots);
}

SelectNode.isTreeNode = true;
SelectNode.inheritAttrs = false;
SelectNode.displayName = 'ATreeSelectNode';
export default SelectNode;