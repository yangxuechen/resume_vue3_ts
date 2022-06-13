"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useProvideSize = exports.sizeProvider = exports.useInjectSize = void 0;

var _vue = require("vue");

var _configProvider = require("../../config-provider");

var sizeProvider = Symbol('SizeProvider');
exports.sizeProvider = sizeProvider;

var useProvideSize = function useProvideSize(props) {
  var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
  var size = (0, _vue.computed)(function () {
    return props.size || configProvider.componentSize;
  });
  (0, _vue.provide)(sizeProvider, size);
  return size;
};

exports.useProvideSize = useProvideSize;

var useInjectSize = function useInjectSize(props) {
  var size = props ? (0, _vue.computed)(function () {
    return props.size;
  }) : (0, _vue.inject)(sizeProvider, (0, _vue.computed)(function () {
    return 'default';
  }));
  return size;
};

exports.useInjectSize = useInjectSize;
var _default = useProvideSize;
exports.default = _default;