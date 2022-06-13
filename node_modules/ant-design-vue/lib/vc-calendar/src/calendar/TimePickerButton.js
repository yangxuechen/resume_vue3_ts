"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
  var className = (_className = {}, (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-time-picker-btn"), true), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-time-picker-btn-disabled"), timePickerDisabled), _className);
  var onClick = noop;

  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }

  return (0, _vue.createVNode)("a", {
    "class": className,
    "role": "button",
    "onClick": onClick
  }, [showTimePicker ? locale.dateSelect : locale.timeSelect]);
};

TimePickerButton.inheritAttrs = false;
var _default = TimePickerButton;
exports.default = _default;