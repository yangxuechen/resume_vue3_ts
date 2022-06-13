"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CollapsePanel", {
  enumerable: true,
  get: function get() {
    return _CollapsePanel.default;
  }
});
exports.default = void 0;

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _CollapsePanel = _interopRequireDefault(require("./CollapsePanel"));

_Collapse.default.Panel = _CollapsePanel.default;
/* istanbul ignore next */

_Collapse.default.install = function (app) {
  app.component(_Collapse.default.name, _Collapse.default);
  app.component(_CollapsePanel.default.name, _CollapsePanel.default);
  return app;
};

var _default = _Collapse.default;
exports.default = _default;