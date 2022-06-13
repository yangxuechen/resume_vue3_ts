"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "skeletonProps", {
  enumerable: true,
  get: function get() {
    return _Skeleton.skeletonProps;
  }
});
Object.defineProperty(exports, "SkeletonButton", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "SkeletonInput", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
Object.defineProperty(exports, "SkeletonImage", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "SkeletonAvatar", {
  enumerable: true,
  get: function get() {
    return _Avatar.default;
  }
});
exports.default = void 0;

var _Skeleton = _interopRequireWildcard(require("./Skeleton"));

var _Button = _interopRequireDefault(require("./Button"));

var _Input = _interopRequireDefault(require("./Input"));

var _Image = _interopRequireDefault(require("./Image"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_Skeleton.default.Button = _Button.default;
_Skeleton.default.Avatar = _Avatar.default;
_Skeleton.default.Input = _Input.default;
_Skeleton.default.Image = _Image.default;
/* istanbul ignore next */

_Skeleton.default.install = function (app) {
  app.component(_Skeleton.default.name, _Skeleton.default);
  app.component(_Skeleton.default.Button.name, _Button.default);
  app.component(_Skeleton.default.Avatar.name, _Avatar.default);
  app.component(_Skeleton.default.Input.name, _Input.default);
  app.component(_Skeleton.default.Image.name, _Image.default);
  return app;
};

var _default = _Skeleton.default;
exports.default = _default;