"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DirectoryTree", {
  enumerable: true,
  get: function get() {
    return _DirectoryTree.default;
  }
});
exports.default = exports.TreeNode = void 0;

var _Tree = _interopRequireDefault(require("./Tree"));

var _DirectoryTree = _interopRequireDefault(require("./DirectoryTree"));

_Tree.default.TreeNode.name = 'ATreeNode';
_Tree.default.DirectoryTree = _DirectoryTree.default;
/* istanbul ignore next */

_Tree.default.install = function (app) {
  app.component(_Tree.default.name, _Tree.default);
  app.component(_Tree.default.TreeNode.name, _Tree.default.TreeNode);
  app.component(_DirectoryTree.default.name, _DirectoryTree.default);
  return app;
};

var TreeNode = _Tree.default.TreeNode;
exports.TreeNode = TreeNode;
var _default = _Tree.default;
exports.default = _default;