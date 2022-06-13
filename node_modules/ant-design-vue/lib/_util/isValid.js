"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isValid = function isValid(value) {
  return value !== undefined && value !== null && value !== '';
};

var _default = isValid;
exports.default = _default;