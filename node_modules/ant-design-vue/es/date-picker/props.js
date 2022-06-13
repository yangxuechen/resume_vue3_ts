import _extends from "@babel/runtime/helpers/esm/extends";
import PropTypes, { withUndefined } from '../_util/vue-types';
import { tuple } from '../_util/type';
export var PickerProps = {
  name: PropTypes.string,
  transitionName: PropTypes.string,
  prefixCls: PropTypes.string,
  inputPrefixCls: PropTypes.string,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
  disabled: PropTypes.looseBool,
  allowClear: PropTypes.looseBool,
  suffixIcon: PropTypes.any,
  popupStyle: PropTypes.object,
  dropdownClassName: PropTypes.string,
  locale: PropTypes.any,
  localeCode: PropTypes.string,
  size: PropTypes.oneOf(tuple('large', 'small', 'default')),
  getCalendarContainer: PropTypes.func,
  open: PropTypes.looseBool,
  disabledDate: PropTypes.func,
  showToday: PropTypes.looseBool,
  dateRender: PropTypes.any,
  pickerClass: PropTypes.string,
  pickerInputClass: PropTypes.string,
  timePicker: PropTypes.any,
  autofocus: PropTypes.looseBool,
  tagPrefixCls: PropTypes.string,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.object.def(function () {
    return {};
  }),
  inputReadOnly: PropTypes.looseBool,
  valueFormat: PropTypes.string,
  onOpenChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  //'onUpdate:value': PropTypes.func,
  onMouseenter: PropTypes.func,
  onMouseleave: PropTypes.func
};
export var SinglePickerProps = {
  value: {
    type: [String, Object]
  },
  defaultValue: {
    type: [String, Object]
  },
  defaultPickerValue: {
    type: [String, Object]
  },
  renderExtraFooter: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
export var DatePickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  showTime: withUndefined(PropTypes.oneOfType([PropTypes.object, PropTypes.looseBool])),
  open: PropTypes.looseBool,
  disabledTime: PropTypes.func,
  mode: PropTypes.oneOf(tuple('time', 'date', 'month', 'year', 'decade')),
  onOpenChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  onOk: PropTypes.func
});
export var MonthPickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  placeholder: PropTypes.string,
  monthCellContentRender: PropTypes.func
}); // export const RangePickerPresetRange = PropTypes.oneOfType([TimesType, PropTypes.func])

export var RangePickerProps = _extends(_extends({}, PickerProps), {
  tagPrefixCls: PropTypes.string,
  value: {
    type: Array
  },
  defaultValue: {
    type: Array
  },
  defaultPickerValue: {
    type: Array
  },
  timePicker: PropTypes.any,
  showTime: withUndefined(PropTypes.oneOfType([PropTypes.object, PropTypes.looseBool])),
  ranges: PropTypes.object,
  placeholder: PropTypes.arrayOf(String),
  mode: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(String)]),
  separator: PropTypes.any,
  disabledTime: PropTypes.func,
  showToday: PropTypes.looseBool,
  renderExtraFooter: PropTypes.any,
  onChange: PropTypes.func,
  onCalendarChange: PropTypes.func,
  onOk: PropTypes.func,
  onPanelChange: PropTypes.func,
  onMouseenter: PropTypes.func,
  onMouseleave: PropTypes.func
});
export var WeekPickerProps = _extends(_extends(_extends({}, PickerProps), SinglePickerProps), {
  placeholder: PropTypes.string
});