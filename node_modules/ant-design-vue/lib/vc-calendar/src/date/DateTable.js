"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _DateTHead = _interopRequireDefault(require("./DateTHead"));

var _DateTBody = _interopRequireDefault(require("./DateTBody"));

var DateTable = function DateTable(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls;
  return (0, _vue.createVNode)("table", {
    "class": "".concat(prefixCls, "-table"),
    "cellspacing": "0",
    "role": "grid"
  }, [(0, _vue.createVNode)(_DateTHead.default, attrs, null), (0, _vue.createVNode)(_DateTBody.default, attrs, null)]);
};

DateTable.inheritAttrs = false;
var _default = DateTable;
exports.default = _default;