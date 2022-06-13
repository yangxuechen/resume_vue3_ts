import { createVNode as _createVNode } from "vue";
import { getTodayTimeStr, getTodayTime, isAllowedDate } from '../util/';

function noop() {}

var TodayButton = function TodayButton(_, _ref) {
  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls,
      locale = attrs.locale,
      value = attrs.value,
      timePicker = attrs.timePicker,
      disabled = attrs.disabled,
      disabledDate = attrs.disabledDate,
      onToday = attrs.onToday,
      text = attrs.text;
  var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
  var disabledToday = disabledDate && !isAllowedDate(getTodayTime(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? "".concat(prefixCls, "-today-btn-disabled") : '';
  return _createVNode("a", {
    "class": "".concat(prefixCls, "-today-btn ").concat(disabledTodayClass),
    "role": "button",
    "onClick": isDisabled ? noop : onToday,
    "title": getTodayTimeStr(value)
  }, [localeNow]);
};

TodayButton.inheritAttrs = false;
export default TodayButton;