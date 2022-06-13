"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KeyPathContext = exports.useInjectKeyPath = exports.useProvideKeyPath = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vue = require("vue");

var KeyPathContext = Symbol('KeyPathContext');
exports.KeyPathContext = KeyPathContext;

var useInjectKeyPath = function useInjectKeyPath() {
  return (0, _vue.inject)(KeyPathContext, {
    parentEventKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentInfo: {}
  });
};

exports.useInjectKeyPath = useInjectKeyPath;

var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
      parentEventKeys = _useInjectKeyPath.parentEventKeys,
      parentKeys = _useInjectKeyPath.parentKeys;

  var eventKeys = (0, _vue.computed)(function () {
    return [].concat((0, _toConsumableArray2.default)(parentEventKeys.value), [eventKey]);
  });
  var keys = (0, _vue.computed)(function () {
    return [].concat((0, _toConsumableArray2.default)(parentKeys.value), [key]);
  });
  (0, _vue.provide)(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};

exports.useProvideKeyPath = useProvideKeyPath;
var _default = useProvideKeyPath;
exports.default = _default;