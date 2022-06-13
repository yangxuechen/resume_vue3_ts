"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutContent = exports.LayoutSider = exports.LayoutFooter = exports.LayoutHeader = void 0;

var _layout = _interopRequireDefault(require("./layout"));

var _Sider = _interopRequireDefault(require("./Sider"));

_layout.default.Sider = _Sider.default;
/* istanbul ignore next */

_layout.default.install = function (app) {
  app.component(_layout.default.name, _layout.default);
  app.component(_layout.default.Header.name, _layout.default.Header);
  app.component(_layout.default.Footer.name, _layout.default.Footer);
  app.component(_layout.default.Sider.name, _layout.default.Sider);
  app.component(_layout.default.Content.name, _layout.default.Content);
  return app;
};

var LayoutHeader = _layout.default.Header;
exports.LayoutHeader = LayoutHeader;
var LayoutFooter = _layout.default.Footer;
exports.LayoutFooter = LayoutFooter;
var LayoutSider = _layout.default.Sider;
exports.LayoutSider = LayoutSider;
var LayoutContent = _layout.default.Content;
exports.LayoutContent = LayoutContent;
var _default = _layout.default;
exports.default = _default;