"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.context = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Preview = _interopRequireDefault(require("./Preview"));

var previewGroupContext = Symbol('previewGroupContext');
var context = {
  provide: function provide(val) {
    (0, _vue.provide)(previewGroupContext, val);
  },
  inject: function inject() {
    return (0, _vue.inject)(previewGroupContext, {
      isPreviewGroup: (0, _vue.ref)(false),
      previewUrls: (0, _vue.reactive)({}),
      setPreviewUrls: function setPreviewUrls() {},
      current: (0, _vue.ref)(null),
      setCurrent: function setCurrent() {},
      setShowPreview: function setShowPreview() {},
      setMousePosition: function setMousePosition() {},
      registerImage: null
    });
  }
};
exports.context = context;
var Group = (0, _vue.defineComponent)({
  name: 'PreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var previewUrls = (0, _vue.reactive)({});
    var current = (0, _vue.ref)();
    var isShowPreview = (0, _vue.ref)(false);
    var mousePosition = (0, _vue.ref)(null);

    var setPreviewUrls = function setPreviewUrls(val) {
      (0, _extends2.default)(previewUrls, val);
    };

    var setCurrent = function setCurrent(val) {
      current.value = val;
    };

    var setMousePosition = function setMousePosition(val) {
      mousePosition.value = val;
    };

    var setShowPreview = function setShowPreview(val) {
      isShowPreview.value = val;
    };

    var registerImage = function registerImage(id, url) {
      previewUrls[id] = url;
      return function () {
        delete previewUrls[id];
      };
    };

    var onPreviewClose = function onPreviewClose(e) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      isShowPreview.value = false;
      mousePosition.value = null;
    };

    context.provide({
      isPreviewGroup: (0, _vue.ref)(true),
      previewUrls: previewUrls,
      setPreviewUrls: setPreviewUrls,
      current: current,
      setCurrent: setCurrent,
      setShowPreview: setShowPreview,
      setMousePosition: setMousePosition,
      registerImage: registerImage
    });
    return function () {
      return (0, _vue.createVNode)(_vue.Fragment, null, [slots.default && slots.default(), (0, _vue.createVNode)(_Preview.default, {
        "ria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": props.previewPrefixCls,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": previewUrls[current.value]
      }, null)]);
    };
  }
});
var _default = Group;
exports.default = _default;