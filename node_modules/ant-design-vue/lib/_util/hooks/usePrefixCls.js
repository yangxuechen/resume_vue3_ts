"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _configProvider = require("../../config-provider");

var _default = function _default(name, props) {
  var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
  var prefixCls = (0, _vue.computed)(function () {
    return configProvider.getPrefixCls(name, props.prefixCls);
  });
  return prefixCls;
};

exports.default = _default;