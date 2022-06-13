import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getOptionProps, hasProp, getComponent, findDOMNode } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
import KeyCode from '../../_util/KeyCode';
import moment from 'moment';
import DateTable from './date/DateTable';
import CalendarHeader from './calendar/CalendarHeader';
import CalendarFooter from './calendar/CalendarFooter';
import CalendarMixin, { getNowByCurrentStateValue } from './mixin/CalendarMixin';
import CommonMixin from './mixin/CommonMixin';
import DateInput from './date/DateInput';
import enUs from './locale/en_US';
import { getTimeConfig, getTodayTime, syncTime } from './util';
import { goStartMonth, goEndMonth, goTime as _goTime } from './util/toTime';
import { defineComponent } from 'vue';

var getMomentObjectIfValid = function getMomentObjectIfValid(date) {
  if (moment.isMoment(date) && date.isValid()) {
    return date;
  }

  return false;
};

var Calendar = defineComponent({
  name: 'Calendar',
  mixins: [BaseMixin, CommonMixin, CalendarMixin],
  inheritAttrs: false,
  props: {
    locale: PropTypes.object.def(enUs),
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
    visible: PropTypes.looseBool.def(true),
    prefixCls: PropTypes.string.def('rc-calendar'),
    // prefixCls: PropTypes.string,
    defaultValue: PropTypes.object,
    value: PropTypes.object,
    selectedValue: PropTypes.object,
    defaultSelectedValue: PropTypes.object,
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade']),
    // locale: PropTypes.object,
    showDateInput: PropTypes.looseBool.def(true),
    showWeekNumber: PropTypes.looseBool,
    showToday: PropTypes.looseBool.def(true),
    showOk: PropTypes.looseBool,
    // onSelect: PropTypes.func,
    // onOk: PropTypes.func,
    // onKeyDown: PropTypes.func,
    timePicker: PropTypes.any,
    dateInputPlaceholder: PropTypes.any,
    // onClear: PropTypes.func,
    // onChange: PropTypes.func,
    // onPanelChange: PropTypes.func,
    disabledDate: PropTypes.func,
    disabledTime: PropTypes.any,
    dateRender: PropTypes.func,
    renderFooter: PropTypes.func.def(function () {
      return null;
    }),
    renderSidebar: PropTypes.func.def(function () {
      return null;
    }),
    clearIcon: PropTypes.any,
    focusablePanel: PropTypes.looseBool.def(true),
    inputMode: PropTypes.string,
    inputReadOnly: PropTypes.looseBool,
    monthCellRender: PropTypes.func,
    monthCellContentRender: PropTypes.func
  },
  data: function data() {
    var props = this.$props;
    return {
      sMode: this.mode || 'date',
      sValue: getMomentObjectIfValid(props.value) || getMomentObjectIfValid(props.defaultValue) || moment(),
      sSelectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  watch: {
    mode: function mode(val) {
      this.setState({
        sMode: val
      });
    },
    value: function value(val) {
      this.setState({
        sValue: getMomentObjectIfValid(val) || getMomentObjectIfValid(this.defaultValue) || getNowByCurrentStateValue(this.sValue)
      });
    },
    selectedValue: function selectedValue(val) {
      this.setState({
        sSelectedValue: val
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.saveFocusElement(DateInput.getInstance());
    });
  },
  methods: {
    onPanelChange: function onPanelChange(value, mode) {
      var sValue = this.sValue;

      if (!hasProp(this, 'mode')) {
        this.setState({
          sMode: mode
        });
      }

      this.__emit('panelChange', value || sValue, mode);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.target.nodeName.toLowerCase() === 'input') {
        return undefined;
      }

      var keyCode = event.keyCode; // mac

      var ctrlKey = event.ctrlKey || event.metaKey;
      var disabledDate = this.disabledDate,
          value = this.sValue;

      switch (keyCode) {
        case KeyCode.DOWN:
          this.goTime(1, 'weeks');
          event.preventDefault();
          return 1;

        case KeyCode.UP:
          this.goTime(-1, 'weeks');
          event.preventDefault();
          return 1;

        case KeyCode.LEFT:
          if (ctrlKey) {
            this.goTime(-1, 'years');
          } else {
            this.goTime(-1, 'days');
          }

          event.preventDefault();
          return 1;

        case KeyCode.RIGHT:
          if (ctrlKey) {
            this.goTime(1, 'years');
          } else {
            this.goTime(1, 'days');
          }

          event.preventDefault();
          return 1;

        case KeyCode.HOME:
          this.setValue(goStartMonth(value));
          event.preventDefault();
          return 1;

        case KeyCode.END:
          this.setValue(goEndMonth(value));
          event.preventDefault();
          return 1;

        case KeyCode.PAGE_DOWN:
          this.goTime(1, 'month');
          event.preventDefault();
          return 1;

        case KeyCode.PAGE_UP:
          this.goTime(-1, 'month');
          event.preventDefault();
          return 1;

        case KeyCode.ENTER:
          if (!disabledDate || !disabledDate(value)) {
            this.onSelect(value, {
              source: 'keyboard'
            });
          }

          event.preventDefault();
          return 1;

        default:
          this.__emit('keydown', event);

          return 1;
      }
    },
    onClear: function onClear() {
      this.onSelect(null);

      this.__emit('clear');
    },
    onOk: function onOk() {
      var sSelectedValue = this.sSelectedValue;

      if (this.isAllowedDate(sSelectedValue)) {
        this.__emit('ok', sSelectedValue);
      }
    },
    onDateInputChange: function onDateInputChange(value) {
      this.onSelect(value, {
        source: 'dateInput'
      });
    },
    onDateInputSelect: function onDateInputSelect(value) {
      this.onSelect(value, {
        source: 'dateInputSelect'
      });
    },
    onDateTableSelect: function onDateTableSelect(value) {
      var timePicker = this.timePicker,
          sSelectedValue = this.sSelectedValue;

      if (!sSelectedValue && timePicker) {
        var timePickerProps = getOptionProps(timePicker);
        var timePickerDefaultValue = timePickerProps.defaultValue;

        if (timePickerDefaultValue) {
          syncTime(timePickerDefaultValue, value);
        }
      }

      this.onSelect(value);
    },
    onToday: function onToday() {
      var sValue = this.sValue;
      var now = getTodayTime(sValue);
      this.onSelect(now, {
        source: 'todayButton'
      });
    },
    onBlur: function onBlur(event) {
      var _this2 = this;

      setTimeout(function () {
        var dateInput = DateInput.getInstance();
        var rootInstance = _this2.rootInstance;

        if (!rootInstance || rootInstance.contains(document.activeElement) || dateInput && dateInput.contains(document.activeElement)) {
          // focused element is still part of Calendar
          return;
        }

        _this2.__emit('blur', event);
      }, 0);
    },
    getRootDOMNode: function getRootDOMNode() {
      return findDOMNode(this);
    },
    openTimePicker: function openTimePicker() {
      this.onPanelChange(null, 'time');
    },
    closeTimePicker: function closeTimePicker() {
      this.onPanelChange(null, 'date');
    },
    goTime: function goTime(direction, unit) {
      this.setValue(_goTime(this.sValue, direction, unit));
    }
  },
  render: function render() {
    var locale = this.locale,
        prefixCls = this.prefixCls,
        disabledDate = this.disabledDate,
        dateInputPlaceholder = this.dateInputPlaceholder,
        timePicker = this.timePicker,
        disabledTime = this.disabledTime,
        showDateInput = this.showDateInput,
        sValue = this.sValue,
        sSelectedValue = this.sSelectedValue,
        sMode = this.sMode,
        renderFooter = this.renderFooter,
        inputMode = this.inputMode,
        inputReadOnly = this.inputReadOnly,
        monthCellRender = this.monthCellRender,
        monthCellContentRender = this.monthCellContentRender,
        props = this.$props;
    var clearIcon = getComponent(this, 'clearIcon');
    var showTimePicker = sMode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? getTimeConfig(sSelectedValue, disabledTime) : null;
    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerOriginProps = getOptionProps(timePicker);

      var timePickerProps = _extends(_extends(_extends({
        showHour: true,
        showSecond: true,
        showMinute: true
      }, timePickerOriginProps), disabledTimeConfig), {
        value: sSelectedValue,
        disabledTime: disabledTime,
        onChange: this.onDateInputChange
      });

      if (timePickerOriginProps.defaultValue !== undefined) {
        timePickerProps.defaultOpenValue = timePickerOriginProps.defaultValue;
      }

      timePickerEle = cloneElement(timePicker, timePickerProps);
    }

    var dateInputElement = showDateInput ? _createVNode(DateInput, {
      "format": this.getFormat(),
      "key": "date-input",
      "value": sValue,
      "locale": locale,
      "placeholder": dateInputPlaceholder,
      "showClear": true,
      "disabledTime": disabledTime,
      "disabledDate": disabledDate,
      "onClear": this.onClear,
      "prefixCls": prefixCls,
      "selectedValue": sSelectedValue,
      "onChange": this.onDateInputChange,
      "clearIcon": clearIcon,
      "onSelect": this.onDateInputSelect,
      "inputMode": inputMode,
      "inputReadOnly": inputReadOnly
    }, null) : null;
    var children = [];

    if (props.renderSidebar) {
      children.push(props.renderSidebar());
    }

    children.push(_createVNode("div", {
      "class": "".concat(prefixCls, "-panel"),
      "key": "panel"
    }, [dateInputElement, _createVNode("div", {
      "tabindex": props.focusablePanel ? 0 : undefined,
      "class": "".concat(prefixCls, "-date-panel")
    }, [_createVNode(CalendarHeader, {
      "locale": locale,
      "mode": sMode,
      "value": sValue,
      "onValueChange": this.setValue,
      "onPanelChange": this.onPanelChange,
      "renderFooter": renderFooter,
      "showTimePicker": showTimePicker,
      "prefixCls": prefixCls,
      "monthCellRender": monthCellRender,
      "monthCellContentRender": monthCellContentRender
    }, null), timePicker && showTimePicker ? _createVNode("div", {
      "class": "".concat(prefixCls, "-time-picker")
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-time-picker-panel")
    }, [timePickerEle])]) : null, _createVNode("div", {
      "class": "".concat(prefixCls, "-body")
    }, [_createVNode(DateTable, {
      "locale": locale,
      "value": sValue,
      "selectedValue": sSelectedValue,
      "prefixCls": prefixCls,
      "dateRender": props.dateRender,
      "onSelect": this.onDateTableSelect,
      "disabledDate": disabledDate,
      "showWeekNumber": props.showWeekNumber
    }, null)]), _createVNode(CalendarFooter, {
      "showOk": props.showOk,
      "mode": sMode,
      "renderFooter": props.renderFooter,
      "locale": locale,
      "prefixCls": prefixCls,
      "showToday": props.showToday,
      "disabledTime": disabledTime,
      "showTimePicker": showTimePicker,
      "showDateInput": props.showDateInput,
      "timePicker": timePicker,
      "selectedValue": sSelectedValue,
      "timePickerDisabled": !sSelectedValue,
      "value": sValue,
      "disabledDate": disabledDate,
      "okDisabled": props.showOk !== false && (!sSelectedValue || !this.isAllowedDate(sSelectedValue)),
      "onOk": this.onOk,
      "onSelect": this.onSelect,
      "onToday": this.onToday,
      "onOpenTimePicker": this.openTimePicker,
      "onCloseTimePicker": this.closeTimePicker
    }, null)])]));
    return this.renderRoot({
      children: children,
      class: props.showWeekNumber ? "".concat(prefixCls, "-week-number") : ''
    });
  }
});
export default Calendar;