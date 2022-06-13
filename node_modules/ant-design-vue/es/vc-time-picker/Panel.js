import { createVNode as _createVNode } from "vue";
import moment from 'moment';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import Header from './Header';
import Combobox from './Combobox';
import { getComponent } from '../_util/props-util';
import { defineComponent } from 'vue';

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
  return moment("".concat(hour, ":").concat(minute, ":").concat(second), 'HH:mm:ss');
}

var Panel = defineComponent({
  name: 'Panel',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    clearText: PropTypes.string,
    prefixCls: PropTypes.string.def('rc-time-picker-panel'),
    defaultOpenValue: {
      type: Object,
      default: function _default() {
        return moment();
      }
    },
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    inputReadOnly: PropTypes.looseBool.def(false),
    disabledHours: PropTypes.func.def(noop),
    disabledMinutes: PropTypes.func.def(noop),
    disabledSeconds: PropTypes.func.def(noop),
    hideDisabledOptions: PropTypes.looseBool,
    // onChange: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: PropTypes.looseBool,
    showHour: PropTypes.looseBool,
    showMinute: PropTypes.looseBool,
    showSecond: PropTypes.looseBool,
    // onClear: PropTypes.func,
    use12Hours: PropTypes.looseBool.def(false),
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    addon: PropTypes.func.def(noop),
    focusOnOpen: PropTypes.looseBool,
    // onKeydown: PropTypes.func,
    clearIcon: PropTypes.any
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
    var clearIcon = getComponent(this, 'clearIcon');
    var disabledHourOptions = this.disabledHours2();
    var disabledMinuteOptions = disabledMinutes(sValue ? sValue.hour() : null);
    var disabledSecondOptions = disabledSeconds(sValue ? sValue.hour() : null, sValue ? sValue.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
    var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
    return _createVNode("div", {
      "className": classNames(className, "".concat(prefixCls, "-inner"))
    }, [_createVNode(Header, {
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
    }, null), _createVNode(Combobox, {
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
export default Panel;