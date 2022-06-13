import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

function noop() {}

var TimePickerButton = function TimePickerButton(_, _ref) {
  var _className;

  var attrs = _ref.attrs;
  var prefixCls = attrs.prefixCls,
      locale = attrs.locale,
      showTimePicker = attrs.showTimePicker,
      timePickerDisabled = attrs.timePickerDisabled,
      _attrs$onCloseTimePic = attrs.onCloseTimePicker,
      onCloseTimePicker = _attrs$onCloseTimePic === void 0 ? noop : _attrs$onCloseTimePic,
      _attrs$onOpenTimePick = attrs.onOpenTimePicker,
      onOpenTimePicker = _attrs$onOpenTimePick === void 0 ? noop : _attrs$onOpenTimePick;
  var className = (_className = {}, _defineProperty(_className, "".concat(prefixCls, "-time-picker-btn"), true), _defineProperty(_className, "".concat(prefixCls, "-time-picker-btn-disabled"), timePickerDisabled), _className);
  var onClick = noop;

  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }

  return _createVNode("a", {
    "class": className,
    "role": "button",
    "onClick": onClick
  }, [showTimePicker ? locale.dateSelect : locale.timeSelect]);
};

TimePickerButton.inheritAttrs = false;
export default TimePickerButton;