"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _PreviewGroup = _interopRequireDefault(require("../vc-image/src/PreviewGroup"));

var _configProvider = require("../config-provider");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var InternalPreviewGroup = (0, _vue.defineComponent)({
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: _vueTypes.default.string
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var prefixCls = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('image-preview', props.previewPrefixCls);
    });
    return function () {
      return (0, _vue.createVNode)(_PreviewGroup.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _extends2.default)((0, _extends2.default)({}, attrs), props)), {}, {
        "previewPrefixCls": prefixCls.value
      }), slots);
    };
  }
});
var _default = InternalPreviewGroup;
exports.default = _default;