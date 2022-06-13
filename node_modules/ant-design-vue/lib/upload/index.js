"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UploadProps", {
  enumerable: true,
  get: function get() {
    return _interface.UploadProps;
  }
});
Object.defineProperty(exports, "UploadListProps", {
  enumerable: true,
  get: function get() {
    return _interface.UploadListProps;
  }
});
Object.defineProperty(exports, "UploadChangeParam", {
  enumerable: true,
  get: function get() {
    return _interface.UploadChangeParam;
  }
});
exports.default = exports.UploadDragger = void 0;

var _Upload = _interopRequireDefault(require("./Upload"));

var _Dragger = _interopRequireDefault(require("./Dragger"));

var _interface = require("./interface");

_Upload.default.Dragger = _Dragger.default;
/* istanbul ignore next */

_Upload.default.install = function (app) {
  app.component(_Upload.default.name, _Upload.default);
  app.component(_Dragger.default.name, _Dragger.default);
  return app;
};

var UploadDragger = _Dragger.default;
exports.UploadDragger = UploadDragger;
var _default = _Upload.default;
exports.default = _default;