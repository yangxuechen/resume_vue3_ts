"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function get() {
    return _TabPane.default;
  }
});
Object.defineProperty(exports, "TabContent", {
  enumerable: true,
  get: function get() {
    return _TabContent.default;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _tabs = _interopRequireDefault(require("./tabs"));

var _TabPane = _interopRequireDefault(require("../vc-tabs/src/TabPane"));

var _TabContent = _interopRequireDefault(require("../vc-tabs/src/TabContent"));

_tabs.default.TabPane = (0, _extends2.default)((0, _extends2.default)({}, _TabPane.default), {
  name: 'ATabPane',
  __ANT_TAB_PANE: true
});
_tabs.default.TabContent = (0, _extends2.default)((0, _extends2.default)({}, _TabContent.default), {
  name: 'ATabContent'
});
/* istanbul ignore next */

_tabs.default.install = function (app) {
  app.component(_tabs.default.name, _tabs.default);
  app.component(_tabs.default.TabPane.name, _tabs.default.TabPane);
  app.component(_tabs.default.TabContent.name, _tabs.default.TabContent);
  return app;
};

var _default = _tabs.default;
exports.default = _default;