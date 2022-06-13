"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _util = require("../util/");

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
  var disabledToday = disabledDate && !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? "".concat(prefixCls, "-today-btn-disabled") : '';
  return (0, _vue.createVNode)("a", {
    "class": "".concat(prefixCls, "-today-btn ").concat(disabledTodayClass),
    "role": "button",
    "onClick": isDisabled ? noop : onToday,
    "title": (0, _util.getTodayTimeStr)(value)
  }, [localeNow]);
};

TodayButton.inheritAttrs = false;
var _default = TodayButton;
exports.default = _default;