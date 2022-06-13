"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var breadcrumbSeparatorProps = {
  prefixCls: _vueTypes.default.string
};

var _default = (0, _vue.defineComponent)({
  name: 'ABreadcrumbSeparator',
  __ANT_BREADCRUMB_SEPARATOR: true,
  inheritAttrs: false,
  props: breadcrumbSeparatorProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('breadcrumb', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var separator = attrs.separator,
          className = attrs.class,
          restAttrs = __rest(attrs, ["separator", "class"]);

      var children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
        "class": ["".concat(prefixCls.value, "-separator"), className]
      }, restAttrs), [children.length > 0 ? children : '/']);
    };
  }
});

exports.default = _default;