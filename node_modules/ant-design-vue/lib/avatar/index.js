"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "avatarProps", {
  enumerable: true,
  get: function get() {
    return _Avatar.avatarProps;
  }
});
Object.defineProperty(exports, "AvatarGroup", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
exports.default = void 0;

var _Avatar = _interopRequireWildcard(require("./Avatar"));

var _Group = _interopRequireDefault(require("./Group"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_Avatar.default.Group = _Group.default;
/* istanbul ignore next */

_Avatar.default.install = function (app) {
  app.component(_Avatar.default.name, _Avatar.default);
  app.component(_Group.default.name, _Group.default);
  return app;
};

var _default = _Avatar.default;
exports.default = _default;