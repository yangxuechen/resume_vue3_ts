"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vcTree = _interopRequireDefault(require("../../vc-tree"));

/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */
var TreeNode = _vcTree.default.TreeNode;

function SelectNode(_, _ref) {
  var attrs = _ref.attrs,
      slots = _ref.slots;
  return (0, _vue.createVNode)(TreeNode, attrs, slots);
}

SelectNode.isTreeNode = true;
SelectNode.inheritAttrs = false;
SelectNode.displayName = 'ATreeSelectNode';
var _default = SelectNode;
exports.default = _default;