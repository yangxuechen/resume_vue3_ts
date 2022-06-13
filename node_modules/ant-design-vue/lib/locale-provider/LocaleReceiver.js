"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _default2 = _interopRequireDefault(require("./default"));

var _default = (0, _vue.defineComponent)({
  name: 'LocaleReceiver',
  props: {
    componentName: _vueTypes.default.string,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var localeData = (0, _vue.inject)('localeData', {});
    var locale = (0, _vue.computed)(function () {
      var _props$componentName = props.componentName,
          componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
          defaultLocale = props.defaultLocale;
      var locale = defaultLocale || _default2.default[componentName || 'global'];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2.default)((0, _extends2.default)({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    });
    var localeCode = (0, _vue.computed)(function () {
      var antLocale = localeData.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default2.default.locale;
      }

      return localeCode;
    });
    return function () {
      var children = props.children || slots.default;
      var antLocale = localeData.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale.value, localeCode.value, antLocale);
    };
  }
});

exports.default = _default;

function useLocaleReceiver(componentName, defaultLocale) {
  var localeData = (0, _vue.inject)('localeData', {});
  var componentLocale = (0, _vue.computed)(function () {
    var antLocale = localeData.antLocale;
    var locale = defaultLocale || _default2.default[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _extends2.default)((0, _extends2.default)({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  });
  return [componentLocale];
}