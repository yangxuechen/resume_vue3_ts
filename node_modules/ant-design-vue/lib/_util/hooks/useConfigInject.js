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
  var direction = (0, _vue.computed)(function () {
    return configProvider.direction;
  });
  var autoInsertSpaceInButton = (0, _vue.computed)(function () {
    return configProvider.autoInsertSpaceInButton;
  });
  var renderEmpty = (0, _vue.computed)(function () {
    return configProvider.renderEmpty;
  });
  var space = (0, _vue.computed)(function () {
    return configProvider.space;
  });
  var pageHeader = (0, _vue.computed)(function () {
    return configProvider.pageHeader;
  });
  var form = (0, _vue.computed)(function () {
    return configProvider.form;
  });
  var size = (0, _vue.computed)(function () {
    return props.size || configProvider.componentSize;
  });
  var getTargetContainer = (0, _vue.computed)(function () {
    return props.getTargetContainer;
  });
  return {
    configProvider: configProvider,
    prefixCls: prefixCls,
    direction: direction,
    size: size,
    getTargetContainer: getTargetContainer,
    space: space,
    pageHeader: pageHeader,
    form: form,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    renderEmpty: renderEmpty
  };
};

exports.default = _default;