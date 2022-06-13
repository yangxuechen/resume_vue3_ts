"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withUndefined = withUndefined;
exports.default = void 0;

var _vueTypes = require("vue-types");

var PropTypes = (0, _vueTypes.createTypes)({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined
});
PropTypes.extend([{
  name: 'looseBool',
  getter: true,
  type: Boolean,
  default: undefined
}, {
  name: 'style',
  getter: true,
  type: [String, Object],
  default: undefined
}, {
  name: 'VNodeChild',
  getter: true,
  type: null
}]);

function withUndefined(type) {
  type.default = undefined;
  return type;
}

var _default = PropTypes;
exports.default = _default;