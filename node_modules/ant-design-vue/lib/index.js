"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  install: true,
  version: true
};
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _version.default;
  }
});
exports.default = exports.install = void 0;

var components = _interopRequireWildcard(require("./components"));

Object.keys(components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return components[key];
    }
  });
});

var _version = _interopRequireDefault(require("./version"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var install = function install(app) {
  Object.keys(components).forEach(function (key) {
    var component = components[key];

    if (component.install) {
      app.use(component);
    }
  });
  app.config.globalProperties.$message = components.message;
  app.config.globalProperties.$notification = components.notification;
  app.config.globalProperties.$info = components.Modal.info;
  app.config.globalProperties.$success = components.Modal.success;
  app.config.globalProperties.$error = components.Modal.error;
  app.config.globalProperties.$warning = components.Modal.warning;
  app.config.globalProperties.$confirm = components.Modal.confirm;
  app.config.globalProperties.$destroyAll = components.Modal.destroyAll;
  return app;
};

exports.install = install;
var _default = {
  version: _version.default,
  install: install
};
exports.default = _default;