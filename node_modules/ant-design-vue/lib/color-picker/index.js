"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ColorPicker = _interopRequireDefault(require("./ColorPicker"));

/* istanbul ignore next */
_ColorPicker.default.install = function (app) {
  app.component(_ColorPicker.default.name, _ColorPicker.default);
  return app;
};

var _default = _ColorPicker.default;
exports.default = _default;