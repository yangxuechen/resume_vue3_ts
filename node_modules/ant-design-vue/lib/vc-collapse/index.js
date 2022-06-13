"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "collapseProps", {
  enumerable: true,
  get: function get() {
    return _commonProps.collapseProps;
  }
});
Object.defineProperty(exports, "panelProps", {
  enumerable: true,
  get: function get() {
    return _commonProps.panelProps;
  }
});
exports.default = void 0;

var _Panel = _interopRequireDefault(require("./src/Panel"));

var _Collapse = _interopRequireDefault(require("./src/Collapse"));

var _commonProps = require("./src/commonProps");

// based on rc-collapse 1.11.8
_Collapse.default.Panel = _Panel.default;
var _default = _Collapse.default;
exports.default = _default;