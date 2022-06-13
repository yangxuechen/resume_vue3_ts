"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WeekPicker = exports.RangePicker = exports.MonthPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcCalendar = _interopRequireDefault(require("../vc-calendar"));

var _MonthCalendar = _interopRequireDefault(require("../vc-calendar/src/MonthCalendar"));

var _createPicker = _interopRequireDefault(require("./createPicker"));

var _wrapPicker = _interopRequireDefault(require("./wrapPicker"));

var _RangePicker = _interopRequireDefault(require("./RangePicker"));

var _WeekPicker = _interopRequireDefault(require("./WeekPicker"));

var _props = require("./props");

var WrappedRangePicker = (0, _wrapPicker.default)(_RangePicker.default, _props.RangePickerProps, 'date');
exports.RangePicker = WrappedRangePicker;
var WrappedWeekPicker = (0, _wrapPicker.default)(_WeekPicker.default, _props.WeekPickerProps, 'week');
exports.WeekPicker = WrappedWeekPicker;
var DatePicker = (0, _wrapPicker.default)((0, _createPicker.default)(_vcCalendar.default, _props.DatePickerProps, 'ADatePicker'), _props.DatePickerProps, 'date');
var MonthPicker = (0, _wrapPicker.default)((0, _createPicker.default)(_MonthCalendar.default, _props.MonthPickerProps, 'AMonthPicker'), _props.MonthPickerProps, 'month');
exports.MonthPicker = MonthPicker;
(0, _extends2.default)(DatePicker, {
  RangePicker: WrappedRangePicker,
  MonthPicker: MonthPicker,
  WeekPicker: WrappedWeekPicker
});
/* istanbul ignore next */

DatePicker.install = function (app) {
  app.component(DatePicker.name, DatePicker);
  app.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
  app.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
  app.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker);
  return app;
};

var _default = DatePicker;
exports.default = _default;