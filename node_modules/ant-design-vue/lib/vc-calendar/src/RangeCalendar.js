"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _moment = _interopRequireDefault(require("moment"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _CalendarPart = _interopRequireDefault(require("./range-calendar/CalendarPart"));

var _TodayButton = _interopRequireDefault(require("./calendar/TodayButton"));

var _OkButton = _interopRequireDefault(require("./calendar/OkButton"));

var _TimePickerButton = _interopRequireDefault(require("./calendar/TimePickerButton"));

var _CommonMixin = _interopRequireDefault(require("./mixin/CommonMixin"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _util = require("./util/");

var _toTime = require("./util/toTime");

function noop() {}

function isEmptyArray(arr) {
  return Array.isArray(arr) && (arr.length === 0 || arr.every(function (i) {
    return !i;
  }));
}

function isArraysEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }

  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function getValueFromSelectedValue(selectedValue) {
  var _selectedValue = (0, _slicedToArray2.default)(selectedValue, 2),
      start = _selectedValue[0],
      end = _selectedValue[1];

  if (end && (start === undefined || start === null)) {
    start = end.clone().subtract(1, 'month');
  }

  if (start && (end === undefined || end === null)) {
    end = start.clone().add(1, 'month');
  }

  return [start, end];
}

function normalizeAnchor(props, init) {
  var selectedValue = props.selectedValue || init && props.defaultSelectedValue;
  var value = props.value || init && props.defaultValue;
  var normalizedValue = value ? getValueFromSelectedValue(value) : getValueFromSelectedValue(selectedValue);
  return !isEmptyArray(normalizedValue) ? normalizedValue : init && [(0, _moment.default)(), (0, _moment.default)().add(1, 'months')];
}

function generateOptions(length, extraOptionGen) {
  var arr = extraOptionGen ? extraOptionGen().concat() : [];

  for (var value = 0; value < length; value++) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }

  return arr;
}

function onInputSelect(direction, value, cause) {
  if (!value) {
    return;
  }

  var originalValue = this.sSelectedValue;
  var selectedValue = originalValue.concat();
  var index = direction === 'left' ? 0 : 1;
  selectedValue[index] = value;

  if (selectedValue[0] && this.compare(selectedValue[0], selectedValue[1]) > 0) {
    selectedValue[1 - index] = this.sShowTimePicker ? selectedValue[index] : undefined;
  }

  this.__emit('inputSelect', selectedValue);

  this.fireSelectValueChange(selectedValue, null, cause || {
    source: 'dateInput'
  });
}

var RangeCalendar = (0, _vue.defineComponent)({
  name: 'RangeCalendar',
  mixins: [_BaseMixin.default, _CommonMixin.default],
  inheritAttrs: false,
  props: {
    locale: _vueTypes.default.object.def(_en_US.default),
    visible: _vueTypes.default.looseBool.def(true),
    prefixCls: _vueTypes.default.string.def('rc-calendar'),
    dateInputPlaceholder: _vueTypes.default.any,
    seperator: _vueTypes.default.string.def('~'),
    defaultValue: _vueTypes.default.any,
    value: _vueTypes.default.any,
    hoverValue: _vueTypes.default.any,
    mode: _vueTypes.default.arrayOf(_vueTypes.default.oneOf(['time', 'date', 'month', 'year', 'decade'])),
    showDateInput: _vueTypes.default.looseBool.def(true),
    timePicker: _vueTypes.default.any,
    showOk: _vueTypes.default.looseBool,
    showToday: _vueTypes.default.looseBool.def(true),
    defaultSelectedValue: _vueTypes.default.array.def([]),
    selectedValue: _vueTypes.default.array,
    showClear: _vueTypes.default.looseBool,
    showWeekNumber: _vueTypes.default.looseBool,
    // locale: PropTypes.object,
    // onChange: PropTypes.func,
    // onSelect: PropTypes.func,
    // onValueChange: PropTypes.func,
    // onHoverChange: PropTypes.func,
    // onPanelChange: PropTypes.func,
    format: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string), _vueTypes.default.func]),
    // onClear: PropTypes.func,
    type: _vueTypes.default.any.def('both'),
    disabledDate: _vueTypes.default.func,
    disabledTime: _vueTypes.default.func.def(noop),
    renderFooter: _vueTypes.default.func.def(function () {
      return null;
    }),
    renderSidebar: _vueTypes.default.func.def(function () {
      return null;
    }),
    dateRender: _vueTypes.default.func,
    clearIcon: _vueTypes.default.any,
    inputReadOnly: _vueTypes.default.looseBool
  },
  data: function data() {
    var props = this.$props;
    var selectedValue = props.selectedValue || props.defaultSelectedValue;
    var value = normalizeAnchor(props, 1);
    return {
      sSelectedValue: selectedValue,
      prevSelectedValue: selectedValue,
      firstSelectedValue: null,
      sHoverValue: props.hoverValue || [],
      sValue: value,
      sShowTimePicker: false,
      sMode: props.mode || ['date', 'date'],
      sPanelTriggerSource: '' // Trigger by which picker panel: 'start' & 'end'

    };
  },
  watch: {
    value: function value() {
      var newState = {};
      newState.sValue = normalizeAnchor(this.$props, 0);
      this.setState(newState);
    },
    hoverValue: function hoverValue(val) {
      if (!isArraysEqual(this.sHoverValue, val)) {
        this.setState({
          sHoverValue: val
        });
      }
    },
    selectedValue: function selectedValue(val) {
      var newState = {};
      newState.sSelectedValue = val;
      newState.prevSelectedValue = val;
      this.setState(newState);
    },
    mode: function mode(val) {
      if (!isArraysEqual(this.sMode, val)) {
        this.setState({
          sMode: val
        });
      }
    }
  },
  methods: {
    onDatePanelEnter: function onDatePanelEnter() {
      if (this.hasSelectedValue()) {
        this.fireHoverValueChange(this.sSelectedValue.concat());
      }
    },
    onDatePanelLeave: function onDatePanelLeave() {
      if (this.hasSelectedValue()) {
        this.fireHoverValueChange([]);
      }
    },
    onSelect: function onSelect(value) {
      var type = this.type,
          sSelectedValue = this.sSelectedValue,
          prevSelectedValue = this.prevSelectedValue,
          firstSelectedValue = this.firstSelectedValue;
      var nextSelectedValue;

      if (type === 'both') {
        if (!firstSelectedValue) {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          nextSelectedValue = [value];
        } else if (this.compare(firstSelectedValue, value) < 0) {
          (0, _util.syncTime)(prevSelectedValue[1], value);
          nextSelectedValue = [firstSelectedValue, value];
        } else {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          (0, _util.syncTime)(prevSelectedValue[1], firstSelectedValue);
          nextSelectedValue = [value, firstSelectedValue];
        }
      } else if (type === 'start') {
        (0, _util.syncTime)(prevSelectedValue[0], value);
        var endValue = sSelectedValue[1];
        nextSelectedValue = endValue && this.compare(endValue, value) > 0 ? [value, endValue] : [value];
      } else {
        // type === 'end'
        var startValue = sSelectedValue[0];

        if (startValue && this.compare(startValue, value) <= 0) {
          (0, _util.syncTime)(prevSelectedValue[1], value);
          nextSelectedValue = [startValue, value];
        } else {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          nextSelectedValue = [value];
        }
      }

      this.fireSelectValueChange(nextSelectedValue);
    },
    onKeyDown: function onKeyDown(event) {
      var _this = this;

      if (event.target.nodeName.toLowerCase() === 'input') {
        return;
      }

      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var _this$$data = this.$data,
          selectedValue = _this$$data.sSelectedValue,
          hoverValue = _this$$data.sHoverValue,
          firstSelectedValue = _this$$data.firstSelectedValue,
          value = _this$$data.sValue;
      var disabledDate = this.$props.disabledDate; // Update last time of the picker

      var updateHoverPoint = function updateHoverPoint(func) {
        // Change hover to make focus in UI
        var currentHoverTime;
        var nextHoverTime;
        var nextHoverValue;

        if (!firstSelectedValue) {
          currentHoverTime = hoverValue[0] || selectedValue[0] || value[0] || (0, _moment.default)();
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = [nextHoverTime];

          _this.fireHoverValueChange(nextHoverValue);
        } else {
          if (hoverValue.length === 1) {
            currentHoverTime = hoverValue[0].clone();
            nextHoverTime = func(currentHoverTime);
            nextHoverValue = _this.onDayHover(nextHoverTime);
          } else {
            currentHoverTime = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
            nextHoverTime = func(currentHoverTime);
            nextHoverValue = _this.onDayHover(nextHoverTime);
          }
        } // Find origin hover time on value index


        if (nextHoverValue.length >= 2) {
          var miss = nextHoverValue.some(function (ht) {
            return !(0, _toTime.includesTime)(value, ht, 'month');
          });

          if (miss) {
            var newValue = nextHoverValue.slice().sort(function (t1, t2) {
              return t1.valueOf() - t2.valueOf();
            });

            if (newValue[0].isSame(newValue[1], 'month')) {
              newValue[1] = newValue[0].clone().add(1, 'month');
            }

            _this.fireValueChange(newValue);
          }
        } else if (nextHoverValue.length === 1) {
          // If only one value, let's keep the origin panel
          var oriValueIndex = value.findIndex(function (time) {
            return time.isSame(currentHoverTime, 'month');
          });
          if (oriValueIndex === -1) oriValueIndex = 0;

          if (value.every(function (time) {
            return !time.isSame(nextHoverTime, 'month');
          })) {
            var _newValue = value.slice();

            _newValue[oriValueIndex] = nextHoverTime.clone();

            _this.fireValueChange(_newValue);
          }
        }

        event.preventDefault();
        return nextHoverTime;
      };

      switch (keyCode) {
        case _KeyCode.default.DOWN:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, 1, 'weeks');
          });
          return;

        case _KeyCode.default.UP:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, -1, 'weeks');
          });
          return;

        case _KeyCode.default.LEFT:
          if (ctrlKey) {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, -1, 'years');
            });
          } else {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, -1, 'days');
            });
          }

          return;

        case _KeyCode.default.RIGHT:
          if (ctrlKey) {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, 1, 'years');
            });
          } else {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, 1, 'days');
            });
          }

          return;

        case _KeyCode.default.HOME:
          updateHoverPoint(function (time) {
            return (0, _toTime.goStartMonth)(time);
          });
          return;

        case _KeyCode.default.END:
          updateHoverPoint(function (time) {
            return (0, _toTime.goEndMonth)(time);
          });
          return;

        case _KeyCode.default.PAGE_DOWN:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, 1, 'month');
          });
          return;

        case _KeyCode.default.PAGE_UP:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, -1, 'month');
          });
          return;

        case _KeyCode.default.ENTER:
          {
            var lastValue;

            if (hoverValue.length === 0) {
              lastValue = updateHoverPoint(function (time) {
                return time;
              });
            } else if (hoverValue.length === 1) {
              lastValue = hoverValue[0];
            } else {
              lastValue = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
            }

            if (lastValue && (!disabledDate || !disabledDate(lastValue))) {
              this.onSelect(lastValue);
            }

            event.preventDefault();
            return;
          }

        default:
          this.__emit('keydown', event);

      }
    },
    onDayHover: function onDayHover(value) {
      var hoverValue = [];
      var sSelectedValue = this.sSelectedValue,
          firstSelectedValue = this.firstSelectedValue,
          type = this.type;

      if (type === 'start' && sSelectedValue[1]) {
        hoverValue = this.compare(value, sSelectedValue[1]) < 0 ? [value, sSelectedValue[1]] : [value];
      } else if (type === 'end' && sSelectedValue[0]) {
        hoverValue = this.compare(value, sSelectedValue[0]) > 0 ? [sSelectedValue[0], value] : [];
      } else {
        if (!firstSelectedValue) {
          if (this.sHoverValue.length) {
            this.setState({
              sHoverValue: []
            });
          }

          return hoverValue;
        }

        hoverValue = this.compare(value, firstSelectedValue) < 0 ? [value, firstSelectedValue] : [firstSelectedValue, value];
      }

      this.fireHoverValueChange(hoverValue);
      return hoverValue;
    },
    onToday: function onToday() {
      var startValue = (0, _util.getTodayTime)(this.sValue[0]);
      var endValue = startValue.clone().add(1, 'months');
      this.setState({
        sValue: [startValue, endValue]
      });
    },
    onOpenTimePicker: function onOpenTimePicker() {
      this.setState({
        sShowTimePicker: true
      });
    },
    onCloseTimePicker: function onCloseTimePicker() {
      this.setState({
        sShowTimePicker: false
      });
    },
    onOk: function onOk() {
      var sSelectedValue = this.sSelectedValue;

      if (this.isAllowedDateAndTime(sSelectedValue)) {
        this.__emit('ok', sSelectedValue);
      }
    },
    onStartInputChange: function onStartInputChange() {
      for (var _len = arguments.length, oargs = new Array(_len), _key = 0; _key < _len; _key++) {
        oargs[_key] = arguments[_key];
      }

      var args = ['left'].concat(oargs);
      return onInputSelect.apply(this, args);
    },
    onEndInputChange: function onEndInputChange() {
      for (var _len2 = arguments.length, oargs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        oargs[_key2] = arguments[_key2];
      }

      var args = ['right'].concat(oargs);
      return onInputSelect.apply(this, args);
    },
    onStartInputSelect: function onStartInputSelect(value) {
      var args = ['left', value, {
        source: 'dateInputSelect'
      }];
      return onInputSelect.apply(this, args);
    },
    onEndInputSelect: function onEndInputSelect(value) {
      var args = ['right', value, {
        source: 'dateInputSelect'
      }];
      return onInputSelect.apply(this, args);
    },
    onStartValueChange: function onStartValueChange(leftValue) {
      var value = (0, _toConsumableArray2.default)(this.sValue);
      value[0] = leftValue;
      return this.fireValueChange(value);
    },
    onEndValueChange: function onEndValueChange(rightValue) {
      var value = (0, _toConsumableArray2.default)(this.sValue);
      value[1] = rightValue;
      return this.fireValueChange(value);
    },
    onStartPanelChange: function onStartPanelChange(value, mode) {
      var sMode = this.sMode,
          sValue = this.sValue;
      var newMode = [mode, sMode[1]];
      var newValue = [value || sValue[0], sValue[1]];

      this.__emit('panelChange', newValue, newMode);

      var newState = {
        sPanelTriggerSource: 'start'
      };

      if (!(0, _propsUtil.hasProp)(this, 'mode')) {
        newState.sMode = newMode;
      }

      this.setState(newState);
    },
    onEndPanelChange: function onEndPanelChange(value, mode) {
      var sMode = this.sMode,
          sValue = this.sValue;
      var newMode = [sMode[0], mode];
      var newValue = [sValue[0], value || sValue[1]];

      this.__emit('panelChange', newValue, newMode);

      var newState = {
        sPanelTriggerSource: 'end'
      };

      if (!(0, _propsUtil.hasProp)(this, 'mode')) {
        newState.sMode = newMode;
      }

      this.setState(newState);
    },
    getStartValue: function getStartValue() {
      var _this$$data2 = this.$data,
          selectedValue = _this$$data2.sSelectedValue,
          showTimePicker = _this$$data2.sShowTimePicker,
          value = _this$$data2.sValue,
          mode = _this$$data2.sMode,
          panelTriggerSource = _this$$data2.sPanelTriggerSource;
      var startValue = value[0]; // keep selectedTime when select date

      if (selectedValue[0] && this.$props.timePicker) {
        startValue = startValue.clone();
        (0, _util.syncTime)(selectedValue[0], startValue);
      }

      if (showTimePicker && selectedValue[0]) {
        startValue = selectedValue[0];
      } // Adjust month if date not align


      if (panelTriggerSource === 'end' && mode[0] === 'date' && mode[1] === 'date' && startValue.isSame(value[1], 'month')) {
        startValue = startValue.clone().subtract(1, 'month');
      }

      return startValue;
    },
    getEndValue: function getEndValue() {
      var _this$$data3 = this.$data,
          selectedValue = _this$$data3.sSelectedValue,
          showTimePicker = _this$$data3.sShowTimePicker,
          value = _this$$data3.sValue,
          mode = _this$$data3.sMode,
          panelTriggerSource = _this$$data3.sPanelTriggerSource;
      var endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month'); // keep selectedTime when select date

      if (selectedValue[1] && this.$props.timePicker) {
        (0, _util.syncTime)(selectedValue[1], endValue);
      }

      if (showTimePicker) {
        endValue = selectedValue[1] ? selectedValue[1] : this.getStartValue();
      } // Adjust month if date not align


      if (!showTimePicker && panelTriggerSource !== 'end' && mode[0] === 'date' && mode[1] === 'date' && endValue.isSame(value[0], 'month')) {
        endValue = endValue.clone().add(1, 'month');
      }

      return endValue;
    },
    // get disabled hours for second picker
    getEndDisableTime: function getEndDisableTime() {
      var sSelectedValue = this.sSelectedValue,
          sValue = this.sValue,
          disabledTime = this.disabledTime;
      var userSettingDisabledTime = disabledTime(sSelectedValue, 'end') || {};
      var startValue = sSelectedValue && sSelectedValue[0] || sValue[0].clone(); // if startTime and endTime is same day..
      // the second time picker will not able to pick time before first time picker

      if (!sSelectedValue[1] || startValue.isSame(sSelectedValue[1], 'day')) {
        var hours = startValue.hour();
        var minutes = startValue.minute();
        var second = startValue.second();
        var _disabledHours = userSettingDisabledTime.disabledHours,
            _disabledMinutes = userSettingDisabledTime.disabledMinutes,
            _disabledSeconds = userSettingDisabledTime.disabledSeconds;
        var oldDisabledMinutes = _disabledMinutes ? _disabledMinutes() : [];
        var olddisabledSeconds = _disabledSeconds ? _disabledSeconds() : [];
        _disabledHours = generateOptions(hours, _disabledHours);
        _disabledMinutes = generateOptions(minutes, _disabledMinutes);
        _disabledSeconds = generateOptions(second, _disabledSeconds);
        return {
          disabledHours: function disabledHours() {
            return _disabledHours;
          },
          disabledMinutes: function disabledMinutes(hour) {
            if (hour === hours) {
              return _disabledMinutes;
            }

            return oldDisabledMinutes;
          },
          disabledSeconds: function disabledSeconds(hour, minute) {
            if (hour === hours && minute === minutes) {
              return _disabledSeconds;
            }

            return olddisabledSeconds;
          }
        };
      }

      return userSettingDisabledTime;
    },
    isAllowedDateAndTime: function isAllowedDateAndTime(selectedValue) {
      return (0, _util.isAllowedDate)(selectedValue[0], this.disabledDate, this.disabledStartTime) && (0, _util.isAllowedDate)(selectedValue[1], this.disabledDate, this.disabledEndTime);
    },
    isMonthYearPanelShow: function isMonthYearPanelShow(mode) {
      return ['month', 'year', 'decade'].indexOf(mode) > -1;
    },
    hasSelectedValue: function hasSelectedValue() {
      var sSelectedValue = this.sSelectedValue;
      return !!sSelectedValue[1] && !!sSelectedValue[0];
    },
    compare: function compare(v1, v2) {
      if (this.timePicker) {
        return v1.diff(v2);
      }

      return v1.diff(v2, 'days');
    },
    fireSelectValueChange: function fireSelectValueChange(selectedValue, direct, cause) {
      var timePicker = this.timePicker,
          prevSelectedValue = this.prevSelectedValue;

      if (timePicker) {
        var timePickerProps = (0, _propsUtil.getOptionProps)(timePicker);

        if (timePickerProps.defaultValue) {
          var timePickerDefaultValue = timePickerProps.defaultValue;

          if (!prevSelectedValue[0] && selectedValue[0]) {
            (0, _util.syncTime)(timePickerDefaultValue[0], selectedValue[0]);
          }

          if (!prevSelectedValue[1] && selectedValue[1]) {
            (0, _util.syncTime)(timePickerDefaultValue[1], selectedValue[1]);
          }
        }
      } // 尚未选择过时间，直接输入的话


      if (!this.sSelectedValue[0] || !this.sSelectedValue[1]) {
        var startValue = selectedValue[0] || (0, _moment.default)();
        var endValue = selectedValue[1] || startValue.clone().add(1, 'months');
        this.setState({
          sSelectedValue: selectedValue,
          sValue: selectedValue && selectedValue.length === 2 ? getValueFromSelectedValue([startValue, endValue]) : this.sValue
        });
      }

      if (selectedValue[0] && !selectedValue[1]) {
        this.setState({
          firstSelectedValue: selectedValue[0]
        });
        this.fireHoverValueChange(selectedValue.concat());
      }

      this.__emit('change', selectedValue);

      if (direct || selectedValue[0] && selectedValue[1]) {
        this.setState({
          prevSelectedValue: selectedValue,
          firstSelectedValue: null
        });
        this.fireHoverValueChange([]);

        this.__emit('select', selectedValue, cause);
      }

      if (!(0, _propsUtil.hasProp)(this, 'selectedValue')) {
        this.setState({
          sSelectedValue: selectedValue
        });
      }
    },
    fireValueChange: function fireValueChange(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      this.__emit('valueChange', value);
    },
    fireHoverValueChange: function fireHoverValueChange(hoverValue) {
      if (!(0, _propsUtil.hasProp)(this, 'hoverValue')) {
        this.setState({
          sHoverValue: hoverValue
        });
      }

      this.__emit('hoverChange', hoverValue);
    },
    clear: function clear() {
      this.fireSelectValueChange([], true);

      this.__emit('clear');
    },
    disabledStartTime: function disabledStartTime(time) {
      return this.disabledTime(time, 'start');
    },
    disabledEndTime: function disabledEndTime(time) {
      return this.disabledTime(time, 'end');
    },
    disabledStartMonth: function disabledStartMonth(month) {
      var sValue = this.sValue;
      return month.isAfter(sValue[1], 'month');
    },
    disabledEndMonth: function disabledEndMonth(month) {
      var sValue = this.sValue;
      return month.isBefore(sValue[0], 'month');
    }
  },
  render: function render() {
    var _className, _cls;

    var props = (0, _propsUtil.getOptionProps)(this);
    var prefixCls = props.prefixCls,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        showOk = props.showOk,
        locale = props.locale,
        showClear = props.showClear,
        showToday = props.showToday,
        type = props.type,
        seperator = props.seperator;
    var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
    var sHoverValue = this.sHoverValue,
        sSelectedValue = this.sSelectedValue,
        mode = this.sMode,
        sShowTimePicker = this.sShowTimePicker,
        sValue = this.sValue;
    var className = (_className = {}, (0, _defineProperty2.default)(_className, this.$attrs.class, !!this.$attrs.class), (0, _defineProperty2.default)(_className, prefixCls, 1), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-hidden"), !props.visible), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-range"), 1), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-show-time-picker"), sShowTimePicker), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-week-number"), props.showWeekNumber), _className);
    var baseProps = (0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs);
    var newProps = {
      selectedValue: sSelectedValue,
      onSelect: this.onSelect,
      onDayHover: type === 'start' && sSelectedValue[1] || type === 'end' && sSelectedValue[0] || !!sHoverValue.length ? this.onDayHover : noop
    };
    var placeholder1;
    var placeholder2;

    if (dateInputPlaceholder) {
      if (Array.isArray(dateInputPlaceholder)) {
        var _dateInputPlaceholder = (0, _slicedToArray2.default)(dateInputPlaceholder, 2);

        placeholder1 = _dateInputPlaceholder[0];
        placeholder2 = _dateInputPlaceholder[1];
      } else {
        placeholder1 = placeholder2 = dateInputPlaceholder;
      }
    }

    var showOkButton = showOk === true || showOk !== false && !!timePicker;
    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-footer"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-range-bottom"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-footer-show-ok"), showOkButton), _cls);
    var startValue = this.getStartValue();
    var endValue = this.getEndValue();
    var todayTime = (0, _util.getTodayTime)(startValue);
    var thisMonth = todayTime.month();
    var thisYear = todayTime.year();
    var isTodayInView = startValue.year() === thisYear && startValue.month() === thisMonth || endValue.year() === thisYear && endValue.month() === thisMonth;
    var nextMonthOfStart = startValue.clone().add(1, 'months');
    var isClosestMonths = nextMonthOfStart.year() === endValue.year() && nextMonthOfStart.month() === endValue.month();
    var leftPartProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, baseProps), newProps), {
      hoverValue: sHoverValue,
      direction: 'left',
      disabledTime: this.disabledStartTime,
      disabledMonth: this.disabledStartMonth,
      format: this.getFormat(),
      value: startValue,
      mode: mode[0],
      placeholder: placeholder1,
      showDateInput: this.showDateInput,
      timePicker: timePicker,
      showTimePicker: sShowTimePicker || mode[0] === 'time',
      enablePrev: true,
      enableNext: !isClosestMonths || this.isMonthYearPanelShow(mode[1]),
      clearIcon: clearIcon,
      onInputChange: this.onStartInputChange,
      onInputSelect: this.onStartInputSelect,
      onValueChange: this.onStartValueChange,
      onPanelChange: this.onStartPanelChange
    });
    var rightPartProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, baseProps), newProps), {
      hoverValue: sHoverValue,
      direction: 'right',
      format: this.getFormat(),
      timePickerDisabledTime: this.getEndDisableTime(),
      placeholder: placeholder2,
      value: endValue,
      mode: mode[1],
      showDateInput: this.showDateInput,
      timePicker: timePicker,
      showTimePicker: sShowTimePicker || mode[1] === 'time',
      disabledTime: this.disabledEndTime,
      disabledMonth: this.disabledEndMonth,
      enablePrev: !isClosestMonths || this.isMonthYearPanelShow(mode[0]),
      enableNext: true,
      clearIcon: clearIcon,
      onInputChange: this.onEndInputChange,
      onInputSelect: this.onEndInputSelect,
      onValueChange: this.onEndValueChange,
      onPanelChange: this.onEndPanelChange
    });
    var TodayButtonNode = null;

    if (showToday) {
      var todayButtonProps = (0, _extends2.default)((0, _extends2.default)({}, baseProps), {
        disabled: isTodayInView,
        value: sValue[0],
        text: locale.backToToday,
        onToday: this.onToday
      });
      TodayButtonNode = (0, _vue.createVNode)(_TodayButton.default, (0, _objectSpread2.default)({
        "key": "todayButton"
      }, todayButtonProps), null);
    }

    var TimePickerButtonNode = null;

    if (props.timePicker) {
      var timePickerButtonProps = (0, _extends2.default)((0, _extends2.default)({}, baseProps), {
        showTimePicker: sShowTimePicker || mode[0] === 'time' && mode[1] === 'time',
        timePickerDisabled: !this.hasSelectedValue() || sHoverValue.length,
        onOpenTimePicker: this.onOpenTimePicker,
        onCloseTimePicker: this.onCloseTimePicker
      });
      TimePickerButtonNode = (0, _vue.createVNode)(_TimePickerButton.default, (0, _objectSpread2.default)({
        "key": "timePickerButton"
      }, timePickerButtonProps), null);
    }

    var OkButtonNode = null;

    if (showOkButton) {
      var okButtonProps = (0, _extends2.default)((0, _extends2.default)({}, baseProps), {
        okDisabled: !this.isAllowedDateAndTime(sSelectedValue) || !this.hasSelectedValue() || sHoverValue.length,
        onOk: this.onOk
      });
      OkButtonNode = (0, _vue.createVNode)(_OkButton.default, (0, _objectSpread2.default)({
        "key": "okButtonNode"
      }, okButtonProps), null);
    }

    var extraFooter = this.renderFooter(mode);
    return (0, _vue.createVNode)("div", {
      "ref": "rootInstance",
      "class": className,
      "tabindex": "0",
      "onKeydown": this.onKeyDown
    }, [props.renderSidebar(), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-panel")
    }, [showClear && sSelectedValue[0] && sSelectedValue[1] ? (0, _vue.createVNode)("a", {
      "role": "button",
      "title": locale.clear,
      "onClick": this.clear
    }, [clearIcon || (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-clear-btn")
    }, null)]) : null, (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-date-panel"),
      "onMouseleave": type !== 'both' ? this.onDatePanelLeave : noop,
      "onMouseenter": type !== 'both' ? this.onDatePanelEnter : noop
    }, [(0, _vue.createVNode)(_CalendarPart.default, leftPartProps, null), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-range-middle")
    }, [seperator]), (0, _vue.createVNode)(_CalendarPart.default, rightPartProps, null)]), (0, _vue.createVNode)("div", {
      "class": cls
    }, [showToday || props.timePicker || showOkButton || extraFooter ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer-btn")
    }, [extraFooter, TodayButtonNode, TimePickerButtonNode, OkButtonNode]) : null])])]);
  }
});
var _default = RangeCalendar;
exports.default = _default;