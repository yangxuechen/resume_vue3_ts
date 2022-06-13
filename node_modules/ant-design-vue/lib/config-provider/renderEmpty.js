"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _empty = _interopRequireDefault(require("../empty"));

var _ = require(".");

var RenderEmpty = function RenderEmpty(props) {
  var configProvider = (0, _vue.inject)('configProvider', _.defaultConfigProvider);

  var renderHtml = function renderHtml(componentName) {
    var getPrefixCls = configProvider.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return (0, _vue.createVNode)(_empty.default, {
          "image": _empty.default.PRESENTED_IMAGE_SIMPLE
        }, null);

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return (0, _vue.createVNode)(_empty.default, {
          "image": _empty.default.PRESENTED_IMAGE_SIMPLE,
          "class": "".concat(prefix, "-small")
        }, null);

      default:
        return (0, _vue.createVNode)(_empty.default, null, null);
    }
  };

  return renderHtml(props.componentName);
};

function renderEmpty(componentName) {
  return (0, _vue.createVNode)(RenderEmpty, {
    "componentName": componentName
  }, null);
}

var _default = renderEmpty;
exports.default = _default;