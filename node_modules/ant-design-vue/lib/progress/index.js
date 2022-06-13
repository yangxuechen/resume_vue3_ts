"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ProgressProps", {
  enumerable: true,
  get: function get() {
    return _props.ProgressProps;
  }
});
exports.default = void 0;

var _progress = _interopRequireDefault(require("./progress"));

var _type = require("../_util/type");

var _props = require("./props");

var _default = (0, _type.withInstall)(_progress.default);

exports.default = _default;