"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

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

var Typography = (0, _vue.defineComponent)({
  name: 'ATypography',
  inheritAttrs: false,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = (0, _useConfigInject2.default)('typography', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      var _a;

      var _b = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
          _prefixCls = _b.prefixCls,
          _className = _b.class,
          _b$component = _b.component,
          Component = _b$component === void 0 ? 'article' : _b$component,
          restProps = __rest(_b, ["prefixCls", "class", "component"]);

      return (0, _vue.createVNode)(Component, (0, _objectSpread2.default)({
        "class": (0, _classNames.default)(prefixCls.value, attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
Typography.props = {
  prefixCls: _vueTypes.default.string,
  component: _vueTypes.default.string
};
var _default2 = Typography;
exports.default = _default2;