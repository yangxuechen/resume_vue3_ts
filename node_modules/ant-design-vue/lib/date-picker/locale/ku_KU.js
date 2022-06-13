"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ku_KU = _interopRequireDefault(require("../../vc-calendar/src/locale/ku_KU"));

var _ku_KU2 = _interopRequireDefault(require("../../time-picker/locale/ku_KU"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2.default)({
    placeholder: 'هەڵبژاردنی ڕێکەوت',
    rangePlaceholder: ['دەستپێکی ڕێکەوت', 'کوتایی ڕێکەوت']
  }, _ku_KU.default),
  timePickerLocale: (0, _extends2.default)({}, _ku_KU2.default)
}; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports.default = _default;