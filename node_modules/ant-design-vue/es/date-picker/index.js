import _extends from "@babel/runtime/helpers/esm/extends";
import VcCalendar from '../vc-calendar';
import MonthCalendar from '../vc-calendar/src/MonthCalendar';
import createPicker from './createPicker';
import wrapPicker from './wrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import { DatePickerProps, MonthPickerProps, WeekPickerProps, RangePickerProps } from './props';
var WrappedRangePicker = wrapPicker(RangePicker, RangePickerProps, 'date');
var WrappedWeekPicker = wrapPicker(WeekPicker, WeekPickerProps, 'week');
var DatePicker = wrapPicker(createPicker(VcCalendar, DatePickerProps, 'ADatePicker'), DatePickerProps, 'date');
export var MonthPicker = wrapPicker(createPicker(MonthCalendar, MonthPickerProps, 'AMonthPicker'), MonthPickerProps, 'month');

_extends(DatePicker, {
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

export { WrappedRangePicker as RangePicker, WrappedWeekPicker as WeekPicker };
export default DatePicker;