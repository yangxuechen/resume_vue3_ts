"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapPicker;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Panel = _interopRequireDefault(require("../vc-time-picker/Panel"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _timePicker = require("../time-picker");

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _momentUtil = require("../_util/moment-util");

var DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  week: 'gggg-wo',
  month: 'YYYY-MM'
};
var LOCALE_FORMAT_MAPPING = {
  date: 'dateFormat',
  dateTime: 'dateTimeFormat',
  week: 'weekFormat',
  month: 'monthFormat'
};

function getColumns(_ref) {
  var showHour = _ref.showHour,
      showMinute = _ref.showMinute,
      showSecond = _ref.showSecond,
      use12Hours = _ref.use12Hours;
  var column = 0;

  if (showHour) {
    column += 1;
  }

  if (showMinute) {
    column += 1;
  }

  if (showSecond) {
    column += 1;
  }

  if (use12Hours) {
    column += 1;
  }

  return column;
}

function wrapPicker(Picker, props, pickerType) {
  return (0, _vue.defineComponent)({
    name: Picker.name,
    inheritAttrs: false,
    props: (0, _extends2.default)((0, _extends2.default)({}, props), {
      transitionName: _vueTypes.default.string.def('slide-up'),
      popupStyle: _vueTypes.default.style,
      locale: _vueTypes.default.any.def({})
    }),
    emits: ['update:value', 'openChange', 'focus', 'blur', 'mouseenter', 'mouseleave', 'change', 'ok', 'calendarChange'],
    setup: function setup() {
      return {
        configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
        picker: undefined,
        popupRef: undefined
      };
    },
    watch: {
      value: function value(val) {
        (0, _momentUtil.checkValidate)('DatePicker', val, 'value', this.valueFormat);
      }
    },
    created: function created() {
      (0, _vue.provide)('savePopupRef', this.savePopupRef);
    },
    mounted: function mounted() {
      var _this = this;

      var _this$$props = this.$props,
          autofocus = _this$$props.autofocus,
          disabled = _this$$props.disabled,
          value = _this$$props.value,
          defaultValue = _this$$props.defaultValue,
          valueFormat = _this$$props.valueFormat;
      (0, _momentUtil.checkValidate)('DatePicker', defaultValue, 'defaultValue', valueFormat);
      (0, _momentUtil.checkValidate)('DatePicker', value, 'value', valueFormat);

      if (autofocus && !disabled) {
        (0, _vue.nextTick)(function () {
          _this.focus();
        });
      }
    },
    methods: {
      savePicker: function savePicker(node) {
        this.picker = node;
      },
      getDefaultLocale: function getDefaultLocale() {
        var result = (0, _extends2.default)((0, _extends2.default)({}, _en_US.default), this.locale);
        result.lang = (0, _extends2.default)((0, _extends2.default)({}, result.lang), (this.locale || {}).lang);
        return result;
      },
      savePopupRef: function savePopupRef(ref) {
        this.popupRef = ref;
      },
      handleOpenChange: function handleOpenChange(open) {
        this.$emit('openChange', open);
      },
      handleFocus: function handleFocus(e) {
        this.$emit('focus', e);
      },
      handleBlur: function handleBlur(e) {
        this.$emit('blur', e);
      },
      handleMouseEnter: function handleMouseEnter(e) {
        this.$emit('mouseenter', e);
      },
      handleMouseLeave: function handleMouseLeave(e) {
        this.$emit('mouseleave', e);
      },
      handleChange: function handleChange(date, dateString) {
        var value = this.valueFormat ? (0, _momentUtil.momentToString)(date, this.valueFormat) : date;
        this.$emit('update:value', value);
        this.$emit('change', value, dateString);
      },
      handleOk: function handleOk(val) {
        this.$emit('ok', this.valueFormat ? (0, _momentUtil.momentToString)(val, this.valueFormat) : val);
      },
      handleCalendarChange: function handleCalendarChange(date, dateString) {
        this.$emit('calendarChange', this.valueFormat ? (0, _momentUtil.momentToString)(date, this.valueFormat) : date, dateString);
      },
      focus: function focus() {
        this.picker.focus();
      },
      blur: function blur() {
        this.picker.blur();
      },
      transformValue: function transformValue(props) {
        if ('value' in props) {
          props.value = (0, _momentUtil.stringToMoment)(props.value, this.valueFormat);
        }

        if ('defaultValue' in props) {
          props.defaultValue = (0, _momentUtil.stringToMoment)(props.defaultValue, this.valueFormat);
        }

        if ('defaultPickerValue' in props) {
          props.defaultPickerValue = (0, _momentUtil.stringToMoment)(props.defaultPickerValue, this.valueFormat);
        }
      },
      renderPicker: function renderPicker(locale, localeCode) {
        var _classNames2;

        var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
        this.transformValue(props);
        var customizePrefixCls = props.prefixCls,
            customizeInputPrefixCls = props.inputPrefixCls,
            getCalendarContainer = props.getCalendarContainer,
            size = props.size,
            showTime = props.showTime,
            disabled = props.disabled,
            format = props.format;
        var mergedPickerType = showTime ? "".concat(pickerType, "Time") : pickerType;
        var mergedFormat = format || locale[LOCALE_FORMAT_MAPPING[mergedPickerType]] || DEFAULT_FORMAT[mergedPickerType];
        var _this$configProvider = this.configProvider,
            getPrefixCls = _this$configProvider.getPrefixCls,
            getContextPopupContainer = _this$configProvider.getPopupContainer;
        var getPopupContainer = getCalendarContainer || getContextPopupContainer;
        var prefixCls = getPrefixCls('calendar', customizePrefixCls);
        var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
        var pickerClass = (0, _classNames3.default)("".concat(prefixCls, "-picker"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-picker-").concat(size), !!size));
        var pickerInputClass = (0, _classNames3.default)("".concat(prefixCls, "-picker-input"), inputPrefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(inputPrefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classNames2, "".concat(inputPrefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_classNames2, "".concat(inputPrefixCls, "-disabled"), disabled), _classNames2));
        var timeFormat = showTime && showTime.format || 'HH:mm:ss';
        var vcTimePickerProps = (0, _extends2.default)((0, _extends2.default)({}, (0, _timePicker.generateShowHourMinuteSecond)(timeFormat)), {
          format: timeFormat,
          use12Hours: showTime && showTime.use12Hours
        });
        var columns = getColumns(vcTimePickerProps);
        var timePickerCls = "".concat(prefixCls, "-time-picker-column-").concat(columns);
        var timePickerPanelProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, vcTimePickerProps), showTime), {
          prefixCls: "".concat(prefixCls, "-time-picker"),
          placeholder: locale.timePickerLocale.placeholder,
          transitionName: 'slide-up',
          class: timePickerCls,
          onEsc: function onEsc() {}
        });
        var timePicker = showTime ? (0, _vue.createVNode)(_Panel.default, timePickerPanelProps, null) : null;
        var pickerProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
          getCalendarContainer: getPopupContainer,
          format: mergedFormat,
          pickerClass: pickerClass,
          pickerInputClass: pickerInputClass,
          locale: locale,
          localeCode: localeCode,
          timePicker: timePicker,
          onOpenChange: this.handleOpenChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onChange: this.handleChange,
          onOk: this.handleOk,
          onCalendarChange: this.handleCalendarChange,
          ref: this.savePicker
        });
        return (0, _vue.createVNode)(Picker, pickerProps, this.$slots);
      }
    },
    render: function render() {
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "DatePicker",
        "defaultLocale": this.getDefaultLocale,
        "children": this.renderPicker
      }, null);
    }
  });
}