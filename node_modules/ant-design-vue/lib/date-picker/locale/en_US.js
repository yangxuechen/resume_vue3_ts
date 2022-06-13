"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _en_US = _interopRequireDefault(require("../../vc-calendar/src/locale/en_US"));

var _en_US2 = _interopRequireDefault(require("../../time-picker/locale/en_US"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2.default)({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, _en_US.default),
  timePickerLocale: (0, _extends2.default)({}, _en_US2.default)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports.default = _default;