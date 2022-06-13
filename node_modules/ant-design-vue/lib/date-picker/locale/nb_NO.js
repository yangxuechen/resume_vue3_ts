"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _nb_NO = _interopRequireDefault(require("../../vc-calendar/src/locale/nb_NO"));

var _nb_NO2 = _interopRequireDefault(require("../../time-picker/locale/nb_NO"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2.default)({
    placeholder: 'Velg dato',
    rangePlaceholder: ['Startdato', 'Sluttdato']
  }, _nb_NO.default),
  timePickerLocale: (0, _extends2.default)({}, _nb_NO2.default)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports.default = _default;