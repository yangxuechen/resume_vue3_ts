"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _zh_CN = _interopRequireDefault(require("../../vc-calendar/src/locale/zh_CN"));

var _zh_CN2 = _interopRequireDefault(require("../../time-picker/locale/zh_CN"));

var locale = {
  lang: (0, _extends2.default)({
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期']
  }, _zh_CN.default),
  timePickerLocale: (0, _extends2.default)({}, _zh_CN2.default)
}; // should add whitespace between char in Button

locale.lang.ok = '确 定'; // All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports.default = _default;