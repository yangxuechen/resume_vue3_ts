"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _sv_SE = _interopRequireDefault(require("../../vc-calendar/src/locale/sv_SE"));

var _sv_SE2 = _interopRequireDefault(require("../../time-picker/locale/sv_SE"));

var locale = {
  lang: (0, _extends2.default)({
    placeholder: 'Välj datum',
    rangePlaceholder: ['Startdatum', 'Slutdatum']
  }, _sv_SE.default),
  timePickerLocale: (0, _extends2.default)({}, _sv_SE2.default)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports.default = _default;