"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _vnode = require("../../../_util/vnode");

var _CalendarHeader = _interopRequireDefault(require("../calendar/CalendarHeader"));

var _DateTable = _interopRequireDefault(require("../date/DateTable"));

var _DateInput = _interopRequireDefault(require("../date/DateInput"));

var _index = require("../util/index");

function noop() {}

var CalendarPart = {
  name: 'CalendarPart',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    prefixCls: _vueTypes.default.string,
    value: _vueTypes.default.any,
    hoverValue: _vueTypes.default.any,
    selectedValue: _vueTypes.default.any,
    direction: _vueTypes.default.any,
    locale: _vueTypes.default.any,
    showDateInput: _vueTypes.default.looseBool,
    showTimePicker: _vueTypes.default.looseBool,
    showWeekNumber: _vueTypes.default.looseBool,
    format: _vueTypes.default.any,
    placeholder: _vueTypes.default.any,
    disabledDate: _vueTypes.default.any,
    timePicker: _vueTypes.default.any,
    disabledTime: _vueTypes.default.any,
    disabledMonth: _vueTypes.default.any,
    mode: _vueTypes.default.any,
    // onInputSelect: PropTypes.func,
    timePickerDisabledTime: _vueTypes.default.object,
    enableNext: _vueTypes.default.any,
    enablePrev: _vueTypes.default.any,
    clearIcon: _vueTypes.default.any,
    dateRender: _vueTypes.default.func,
    inputMode: _vueTypes.default.string,
    inputReadOnly: _vueTypes.default.looseBool
  },
  render: function render() {
    var props = this.$props;
    var prefixCls = props.prefixCls,
        value = props.value,
        hoverValue = props.hoverValue,
        selectedValue = props.selectedValue,
        mode = props.mode,
        direction = props.direction,
        locale = props.locale,
        format = props.format,
        placeholder = props.placeholder,
        disabledDate = props.disabledDate,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        timePickerDisabledTime = props.timePickerDisabledTime,
        showTimePicker = props.showTimePicker,
        enablePrev = props.enablePrev,
        enableNext = props.enableNext,
        disabledMonth = props.disabledMonth,
        showDateInput = props.showDateInput,
        dateRender = props.dateRender,
        showWeekNumber = props.showWeekNumber,
        showClear = props.showClear,
        inputMode = props.inputMode,
        inputReadOnly = props.inputReadOnly;
    var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
    var _this$$attrs = this.$attrs,
        _this$$attrs$onInputC = _this$$attrs.onInputChange,
        onInputChange = _this$$attrs$onInputC === void 0 ? noop : _this$$attrs$onInputC,
        _this$$attrs$onInputS = _this$$attrs.onInputSelect,
        onInputSelect = _this$$attrs$onInputS === void 0 ? noop : _this$$attrs$onInputS,
        _this$$attrs$onValueC = _this$$attrs.onValueChange,
        onValueChange = _this$$attrs$onValueC === void 0 ? noop : _this$$attrs$onValueC,
        _this$$attrs$onPanelC = _this$$attrs.onPanelChange,
        onPanelChange = _this$$attrs$onPanelC === void 0 ? noop : _this$$attrs$onPanelC,
        _this$$attrs$onSelect = _this$$attrs.onSelect,
        onSelect = _this$$attrs$onSelect === void 0 ? noop : _this$$attrs$onSelect,
        _this$$attrs$onDayHov = _this$$attrs.onDayHover,
        onDayHover = _this$$attrs$onDayHov === void 0 ? noop : _this$$attrs$onDayHov;
    var shouldShowTimePicker = showTimePicker && timePicker;
    var disabledTimeConfig = shouldShowTimePicker && disabledTime ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
    var rangeClassName = "".concat(prefixCls, "-range");
    var newProps = {
      locale: locale,
      value: value,
      prefixCls: prefixCls,
      showTimePicker: showTimePicker
    };
    var index = direction === 'left' ? 0 : 1;
    var timePickerEle = null;

    if (shouldShowTimePicker) {
      var timePickerProps = (0, _propsUtil.getOptionProps)(timePicker);
      timePickerEle = (0, _vnode.cloneElement)(timePicker, (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
        showHour: true,
        showMinute: true,
        showSecond: true
      }, timePickerProps), disabledTimeConfig), timePickerDisabledTime), {
        defaultOpenValue: value,
        value: selectedValue[index],
        onChange: onInputChange
      }));
    }

    var dateInputElement = showDateInput && (0, _vue.createVNode)(_DateInput.default, {
      "format": format,
      "locale": locale,
      "prefixCls": prefixCls,
      "timePicker": timePicker,
      "disabledDate": disabledDate,
      "placeholder": placeholder,
      "disabledTime": disabledTime,
      "value": value,
      "showClear": showClear || false,
      "selectedValue": selectedValue[index],
      "onChange": onInputChange,
      "onSelect": onInputSelect,
      "clearIcon": clearIcon,
      "inputMode": inputMode,
      "inputReadOnly": inputReadOnly
    }, null);
    var headerProps = (0, _extends2.default)((0, _extends2.default)({}, newProps), {
      mode: mode,
      enableNext: enableNext,
      enablePrev: enablePrev,
      disabledMonth: disabledMonth,
      onValueChange: onValueChange,
      onPanelChange: onPanelChange
    });
    var tableProps = (0, _extends2.default)((0, _extends2.default)({}, newProps), {
      hoverValue: hoverValue,
      selectedValue: selectedValue,
      dateRender: dateRender,
      disabledDate: disabledDate,
      showWeekNumber: showWeekNumber,
      onSelect: onSelect,
      onDayHover: onDayHover
    });
    return (0, _vue.createVNode)("div", {
      "class": "".concat(rangeClassName, "-part ").concat(rangeClassName, "-").concat(direction)
    }, [dateInputElement, (0, _vue.createVNode)("div", {
      "style": {
        outline: 'none'
      }
    }, [(0, _vue.createVNode)(_CalendarHeader.default, headerProps, null), showTimePicker ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-time-picker")
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-time-picker-panel")
    }, [timePickerEle])]) : null, (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body")
    }, [(0, _vue.createVNode)(_DateTable.default, tableProps, null)])])]);
  }
};
var _default = CalendarPart;
exports.default = _default;