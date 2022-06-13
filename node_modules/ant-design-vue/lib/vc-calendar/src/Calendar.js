"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _vnode = require("../../_util/vnode");

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _moment = _interopRequireDefault(require("moment"));

var _DateTable = _interopRequireDefault(require("./date/DateTable"));

var _CalendarHeader = _interopRequireDefault(require("./calendar/CalendarHeader"));

var _CalendarFooter = _interopRequireDefault(require("./calendar/CalendarFooter"));

var _CalendarMixin = _interopRequireWildcard(require("./mixin/CalendarMixin"));

var _CommonMixin = _interopRequireDefault(require("./mixin/CommonMixin"));

var _DateInput = _interopRequireDefault(require("./date/DateInput"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _util = require("./util");

var _toTime = require("./util/toTime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getMomentObjectIfValid = function getMomentObjectIfValid(date) {
  if (_moment.default.isMoment(date) && date.isValid()) {
    return date;
  }

  return false;
};

var Calendar = (0, _vue.defineComponent)({
  name: 'Calendar',
  mixins: [_BaseMixin.default, _CommonMixin.default, _CalendarMixin.default],
  inheritAttrs: false,
  props: {
    locale: _vueTypes.default.object.def(_en_US.default),
    format: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string), _vueTypes.default.func]),
    visible: _vueTypes.default.looseBool.def(true),
    prefixCls: _vueTypes.default.string.def('rc-calendar'),
    // prefixCls: PropTypes.string,
    defaultValue: _vueTypes.default.object,
    value: _vueTypes.default.object,
    selectedValue: _vueTypes.default.object,
    defaultSelectedValue: _vueTypes.default.object,
    mode: _vueTypes.default.oneOf(['time', 'date', 'month', 'year', 'decade']),
    // locale: PropTypes.object,
    showDateInput: _vueTypes.default.looseBool.def(true),
    showWeekNumber: _vueTypes.default.looseBool,
    showToday: _vueTypes.default.looseBool.def(true),
    showOk: _vueTypes.default.looseBool,
    // onSelect: PropTypes.func,
    // onOk: PropTypes.func,
    // onKeyDown: PropTypes.func,
    timePicker: _vueTypes.default.any,
    dateInputPlaceholder: _vueTypes.default.any,
    // onClear: PropTypes.func,
    // onChange: PropTypes.func,
    // onPanelChange: PropTypes.func,
    disabledDate: _vueTypes.default.func,
    disabledTime: _vueTypes.default.any,
    dateRender: _vueTypes.default.func,
    renderFooter: _vueTypes.default.func.def(function () {
      return null;
    }),
    renderSidebar: _vueTypes.default.func.def(function () {
      return null;
    }),
    clearIcon: _vueTypes.default.any,
    focusablePanel: _vueTypes.default.looseBool.def(true),
    inputMode: _vueTypes.default.string,
    inputReadOnly: _vueTypes.default.looseBool,
    monthCellRender: _vueTypes.default.func,
    monthCellContentRender: _vueTypes.default.func
  },
  data: function data() {
    var props = this.$props;
    return {
      sMode: this.mode || 'date',
      sValue: getMomentObjectIfValid(props.value) || getMomentObjectIfValid(props.defaultValue) || (0, _moment.default)(),
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
        sValue: getMomentObjectIfValid(val) || getMomentObjectIfValid(this.defaultValue) || (0, _CalendarMixin.getNowByCurrentStateValue)(this.sValue)
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
      _this.saveFocusElement(_DateInput.default.getInstance());
    });
  },
  methods: {
    onPanelChange: function onPanelChange(value, mode) {
      var sValue = this.sValue;

      if (!(0, _propsUtil.hasProp)(this, 'mode')) {
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
        case _KeyCode.default.DOWN:
          this.goTime(1, 'weeks');
          event.preventDefault();
          return 1;

        case _KeyCode.default.UP:
          this.goTime(-1, 'weeks');
          event.preventDefault();
          return 1;

        case _KeyCode.default.LEFT:
          if (ctrlKey) {
            this.goTime(-1, 'years');
          } else {
            this.goTime(-1, 'days');
          }

          event.preventDefault();
          return 1;

        case _KeyCode.default.RIGHT:
          if (ctrlKey) {
            this.goTime(1, 'years');
          } else {
            this.goTime(1, 'days');
          }

          event.preventDefault();
          return 1;

        case _KeyCode.default.HOME:
          this.setValue((0, _toTime.goStartMonth)(value));
          event.preventDefault();
          return 1;

        case _KeyCode.default.END:
          this.setValue((0, _toTime.goEndMonth)(value));
          event.preventDefault();
          return 1;

        case _KeyCode.default.PAGE_DOWN:
          this.goTime(1, 'month');
          event.preventDefault();
          return 1;

        case _KeyCode.default.PAGE_UP:
          this.goTime(-1, 'month');
          event.preventDefault();
          return 1;

        case _KeyCode.default.ENTER:
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
        var timePickerProps = (0, _propsUtil.getOptionProps)(timePicker);
        var timePickerDefaultValue = timePickerProps.defaultValue;

        if (timePickerDefaultValue) {
          (0, _util.syncTime)(timePickerDefaultValue, value);
        }
      }

      this.onSelect(value);
    },
    onToday: function onToday() {
      var sValue = this.sValue;
      var now = (0, _util.getTodayTime)(sValue);
      this.onSelect(now, {
        source: 'todayButton'
      });
    },
    onBlur: function onBlur(event) {
      var _this2 = this;

      setTimeout(function () {
        var dateInput = _DateInput.default.getInstance();

        var rootInstance = _this2.rootInstance;

        if (!rootInstance || rootInstance.contains(document.activeElement) || dateInput && dateInput.contains(document.activeElement)) {
          // focused element is still part of Calendar
          return;
        }

        _this2.__emit('blur', event);
      }, 0);
    },
    getRootDOMNode: function getRootDOMNode() {
      return (0, _propsUtil.findDOMNode)(this);
    },
    openTimePicker: function openTimePicker() {
      this.onPanelChange(null, 'time');
    },
    closeTimePicker: function closeTimePicker() {
      this.onPanelChange(null, 'date');
    },
    goTime: function goTime(direction, unit) {
      this.setValue((0, _toTime.goTime)(this.sValue, direction, unit));
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
    var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
    var showTimePicker = sMode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? (0, _util.getTimeConfig)(sSelectedValue, disabledTime) : null;
    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerOriginProps = (0, _propsUtil.getOptionProps)(timePicker);
      var timePickerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
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

      timePickerEle = (0, _vnode.cloneElement)(timePicker, timePickerProps);
    }

    var dateInputElement = showDateInput ? (0, _vue.createVNode)(_DateInput.default, {
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

    children.push((0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-panel"),
      "key": "panel"
    }, [dateInputElement, (0, _vue.createVNode)("div", {
      "tabindex": props.focusablePanel ? 0 : undefined,
      "class": "".concat(prefixCls, "-date-panel")
    }, [(0, _vue.createVNode)(_CalendarHeader.default, {
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
    }, null), timePicker && showTimePicker ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-time-picker")
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-time-picker-panel")
    }, [timePickerEle])]) : null, (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body")
    }, [(0, _vue.createVNode)(_DateTable.default, {
      "locale": locale,
      "value": sValue,
      "selectedValue": sSelectedValue,
      "prefixCls": prefixCls,
      "dateRender": props.dateRender,
      "onSelect": this.onDateTableSelect,
      "disabledDate": disabledDate,
      "showWeekNumber": props.showWeekNumber
    }, null)]), (0, _vue.createVNode)(_CalendarFooter.default, {
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
var _default = Calendar;
exports.default = _default;