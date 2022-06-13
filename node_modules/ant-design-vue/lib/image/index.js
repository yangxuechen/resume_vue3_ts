"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "imageProps", {
  enumerable: true,
  get: function get() {
    return _Image.imageProps;
  }
});
Object.defineProperty(exports, "ImagePreviewGroup", {
  enumerable: true,
  get: function get() {
    return _PreviewGroup.default;
  }
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcImage = _interopRequireDefault(require("../vc-image"));

var _Image = require("../vc-image/src/Image");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _PreviewGroup = _interopRequireDefault(require("./PreviewGroup"));

var Image = (0, _vue.defineComponent)({
  name: 'AImage',
  inheritAttrs: false,
  props: _Image.imageProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('image', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      return (0, _vue.createVNode)(_vcImage.default, (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, attrs), props), {
        prefixCls: prefixCls.value
      }), slots);
    };
  }
});
Image.PreviewGroup = _PreviewGroup.default;

Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};

var _default = Image;
exports.default = _default;