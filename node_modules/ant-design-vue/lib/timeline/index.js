"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TimelineItem", {
  enumerable: true,
  get: function get() {
    return _TimelineItem.default;
  }
});
exports.default = void 0;

var _Timeline = _interopRequireDefault(require("./Timeline"));

var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));

_Timeline.default.Item = _TimelineItem.default;
/* istanbul ignore next */

_Timeline.default.install = function (app) {
  app.component(_Timeline.default.name, _Timeline.default);
  app.component(_TimelineItem.default.name, _TimelineItem.default);
  return app;
};

var _default = _Timeline.default;
exports.default = _default;