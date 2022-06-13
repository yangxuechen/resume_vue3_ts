"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

function getComponentLocale(props, context, componentName, getDefaultLocale) {
  var locale = {};

  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    var defaultLocale = getDefaultLocale(); // TODO: make default lang of antd be English
    // https://github.com/ant-design/ant-design/issues/6334

    locale = defaultLocale.default || defaultLocale;
  }

  var result = (0, _extends2.default)((0, _extends2.default)({}, locale), props.locale);
  result.lang = (0, _extends2.default)((0, _extends2.default)({}, locale.lang), props.locale.lang);
  return result;
}

function getLocaleCode(context) {
  var localeCode = context.antLocale && context.antLocale.locale; // Had use LocaleProvide but didn't set locale

  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn';
  }

  return localeCode;
}