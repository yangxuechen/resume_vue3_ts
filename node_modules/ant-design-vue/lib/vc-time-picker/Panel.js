"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _moment = _interopRequireDefault(require("moment"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _Header = _interopRequireDefault(require("./Header"));

var _Combobox = _interopRequireDefault(require("./Combobox"));

var _propsUtil = require("../_util/props-util");

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var arr = [];

  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }

  return arr;
}

function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
  var hour = hourOptions.slice().sort(function (a, b) {
    return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
  })[0];
  var minute = minuteOptions.slice().sort(function (a, b) {
    return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
  })[0];
  var second = secondOptions.slice().sort(function (a, b) {
    return Math.abs(time.second() - a) - Math.abs(time.second() - b);
  })[0];
  return (0, _moment.default)("".concat(hour, ":").concat(minute, ":").concat(second), 'HH:mm:ss');
}

var Panel = (0, _vue.defineComponent)({
  name: 'Panel',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    clearText: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string.def('rc-time-picker-panel'),
    defaultOpenValue: {
      type: Object,
      default: function _default() {
        return (0, _moment.default)();
      }
    },
    value: _vueTypes.default.any,
    defaultValue: _vueTypes.default.any,
    placeholder: _vueTypes.default.string,
    format: _vueTypes.default.string,
    inputReadOnly: _vueTypes.default.looseBool.def(false),
    disabledHours: _vueTypes.default.func.def(noop),
    disabledMinutes: _vueTypes.default.func.def(noop),
    disabledSeconds: _vueTypes.default.func.def(noop),
    hideDisabledOptions: _vueTypes.default.looseBool,
    // onChange: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: _vueTypes.default.looseBool,
    showHour: _vueTypes.default.looseBool,
    showMinute: _vueTypes.default.looseBool,
    showSecond: _vueTypes.default.looseBool,
    // onClear: PropTypes.func,
    use12Hours: _vueTypes.default.looseBool.def(false),
    hourStep: _vueTypes.default.number,
    minuteStep: _vueTypes.default.number,
    secondStep: _vueTypes.default.number,
    addon: _vueTypes.default.func.def(noop),
    focusOnOpen: _vueTypes.default.looseBool,
    // onKeydown: PropTypes.func,
    clearIcon: _vueTypes.default.any
  },
  data: function data() {
    return {
      sValue: this.value,
      selectionRange: [],
      currentSelectPanel: ''
    };
  },
  watch: {
    value: function value(val) {
      this.setState({
        sValue: val
      });
    }
  },
  methods: {
    onChange: function onChange(newValue) {
      this.setState({
        sValue: newValue
      });

      this.__emit('change', newValue);
    },
    onAmPmChange: function onAmPmChange(ampm) {
      this.__emit('amPmChange', ampm);
    },
    onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
      this.setState({
        currentSelectPanel: currentSelectPanel
      });
    },
    // https://github.com/ant-design/ant-design/issues/5829
    close: function close() {
      this.__emit('esc');
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    disabledHours2: function disabledHours2() {
      var use12Hours = this.use12Hours,
          disabledHours = this.disabledHours;
      var disabledOptions = disabledHours();

      if (use12Hours && Array.isArray(disabledOptions)) {
        if (this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }

      return disabledOptions;
    },
    isAM: function isAM() {
      var value = this.sValue || this.defaultOpenValue;
      return value.hour() >= 0 && value.hour() < 12;
    }
  },
  render: function render() {
    var prefixCls = this.prefixCls,
        placeholder = this.placeholder,
        disabledMinutes = this.disabledMinutes,
        addon = this.addon,
        disabledSeconds = this.disabledSeconds,
        hideDisabledOptions = this.hideDisabledOptions,
        showHour = this.showHour,
        showMinute = this.showMinute,
        showSecond = this.showSecond,
        format = this.format,
        defaultOpenValue = this.defaultOpenValue,
        clearText = this.clearText,
        use12Hours = this.use12Hours,
        focusOnOpen = this.focusOnOpen,
        hourStep = this.hourStep,
        minuteStep = this.minuteStep,
        secondStep = this.secondStep,
        inputReadOnly = this.inputReadOnly,
        sValue = this.sValue,
        currentSelectPanel = this.currentSelectPanel;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        _this$$attrs$onEsc = _this$$attrs.onEsc,
        onEsc = _this$$attrs$onEsc === void 0 ? noop : _this$$attrs$onEsc,
        _this$$attrs$onKeydow = _this$$attrs.onKeydown,
        onKeydown = _this$$attrs$onKeydow === void 0 ? noop : _this$$attrs$onKeydow;
    var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
    var disabledHourOptions = this.disabledHours2();
    var disabledMinuteOptions = disabledMinutes(sValue ? sValue.hour() : null);
    var disabledSecondOptions = disabledSeconds(sValue ? sValue.hour() : null, sValue ? sValue.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
    var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
    return (0, _vue.createVNode)("div", {
      "className": (0, _classNames.default)(className, "".concat(prefixCls, "-inner"))
    }, [(0, _vue.createVNode)(_Header.default, {
      "clearText": clearText,
      "prefixCls": prefixCls,
      "defaultOpenValue": validDefaultOpenValue,
      "value": sValue,
      "currentSelectPanel": currentSelectPanel,
      "onEsc": onEsc,
      "format": format,
      "placeholder": placeholder,
      "hourOptions": hourOptions,
      "minuteOptions": minuteOptions,
      "secondOptions": secondOptions,
      "disabledHours": this.disabledHours2,
      "disabledMinutes": disabledMinutes,
      "disabledSeconds": disabledSeconds,
      "onChange": this.onChange,
      "focusOnOpen": focusOnOpen,
      "onKeydown": onKeydown,
      "inputReadOnly": inputReadOnly,
      "clearIcon": clearIcon
    }, null), (0, _vue.createVNode)(_Combobox.default, {
      "prefixCls": prefixCls,
      "value": sValue,
      "defaultOpenValue": validDefaultOpenValue,
      "format": format,
      "onChange": this.onChange,
      "onAmPmChange": this.onAmPmChange,
      "showHour": showHour,
      "showMinute": showMinute,
      "showSecond": showSecond,
      "hourOptions": hourOptions,
      "minuteOptions": minuteOptions,
      "secondOptions": secondOptions,
      "disabledHours": this.disabledHours2,
      "disabledMinutes": disabledMinutes,
      "disabledSeconds": disabledSeconds,
      "onCurrentSelectPanelChange": this.onCurrentSelectPanelChange,
      "use12Hours": use12Hours,
      "onEsc": this.onEsc,
      "isAM": this.isAM()
    }, null), addon(this)]);
  }
});
var _default2 = Panel;
exports.default = _default2;