import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getOptionProps, getComponent } from '../../../_util/props-util';
import { cloneElement } from '../../../_util/vnode';
import CalendarHeader from '../calendar/CalendarHeader';
import DateTable from '../date/DateTable';
import DateInput from '../date/DateInput';
import { getTimeConfig } from '../util/index';

function noop() {}

var CalendarPart = {
  name: 'CalendarPart',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    value: PropTypes.any,
    hoverValue: PropTypes.any,
    selectedValue: PropTypes.any,
    direction: PropTypes.any,
    locale: PropTypes.any,
    showDateInput: PropTypes.looseBool,
    showTimePicker: PropTypes.looseBool,
    showWeekNumber: PropTypes.looseBool,
    format: PropTypes.any,
    placeholder: PropTypes.any,
    disabledDate: PropTypes.any,
    timePicker: PropTypes.any,
    disabledTime: PropTypes.any,
    disabledMonth: PropTypes.any,
    mode: PropTypes.any,
    // onInputSelect: PropTypes.func,
    timePickerDisabledTime: PropTypes.object,
    enableNext: PropTypes.any,
    enablePrev: PropTypes.any,
    clearIcon: PropTypes.any,
    dateRender: PropTypes.func,
    inputMode: PropTypes.string,
    inputReadOnly: PropTypes.looseBool
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
    var clearIcon = getComponent(this, 'clearIcon');
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
    var disabledTimeConfig = shouldShowTimePicker && disabledTime ? getTimeConfig(selectedValue, disabledTime) : null;
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
      var timePickerProps = getOptionProps(timePicker);
      timePickerEle = cloneElement(timePicker, _extends(_extends(_extends(_extends({
        showHour: true,
        showMinute: true,
        showSecond: true
      }, timePickerProps), disabledTimeConfig), timePickerDisabledTime), {
        defaultOpenValue: value,
        value: selectedValue[index],
        onChange: onInputChange
      }));
    }

    var dateInputElement = showDateInput && _createVNode(DateInput, {
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

    var headerProps = _extends(_extends({}, newProps), {
      mode: mode,
      enableNext: enableNext,
      enablePrev: enablePrev,
      disabledMonth: disabledMonth,
      onValueChange: onValueChange,
      onPanelChange: onPanelChange
    });

    var tableProps = _extends(_extends({}, newProps), {
      hoverValue: hoverValue,
      selectedValue: selectedValue,
      dateRender: dateRender,
      disabledDate: disabledDate,
      showWeekNumber: showWeekNumber,
      onSelect: onSelect,
      onDayHover: onDayHover
    });

    return _createVNode("div", {
      "class": "".concat(rangeClassName, "-part ").concat(rangeClassName, "-").concat(direction)
    }, [dateInputElement, _createVNode("div", {
      "style": {
        outline: 'none'
      }
    }, [_createVNode(CalendarHeader, headerProps, null), showTimePicker ? _createVNode("div", {
      "class": "".concat(prefixCls, "-time-picker")
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-time-picker-panel")
    }, [timePickerEle])]) : null, _createVNode("div", {
      "class": "".concat(prefixCls, "-body")
    }, [_createVNode(DateTable, tableProps, null)])])]);
  }
};
export default CalendarPart;