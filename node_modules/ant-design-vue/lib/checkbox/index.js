"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CheckboxGroup", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
exports.default = void 0;

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Group = _interopRequireDefault(require("./Group"));

_Checkbox.default.Group = _Group.default;
/* istanbul ignore next */

_Checkbox.default.install = function (app) {
  app.component(_Checkbox.default.name, _Checkbox.default);
  app.component(_Group.default.name, _Group.default);
  return app;
};

var _default = _Checkbox.default;
exports.default = _default;