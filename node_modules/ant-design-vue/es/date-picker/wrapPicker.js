import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { provide, inject, defineComponent, nextTick } from 'vue';
import TimePickerPanel from '../vc-time-picker/Panel';
import classNames from '../_util/classNames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { generateShowHourMinuteSecond } from '../time-picker';
import enUS from './locale/en_US';
import PropTypes from '../_util/vue-types';
import { getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { checkValidate, stringToMoment, momentToString } from '../_util/moment-util';
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

export default function wrapPicker(Picker, props, pickerType) {
  return defineComponent({
    name: Picker.name,
    inheritAttrs: false,
    props: _extends(_extends({}, props), {
      transitionName: PropTypes.string.def('slide-up'),
      popupStyle: PropTypes.style,
      locale: PropTypes.any.def({})
    }),
    emits: ['update:value', 'openChange', 'focus', 'blur', 'mouseenter', 'mouseleave', 'change', 'ok', 'calendarChange'],
    setup: function setup() {
      return {
        configProvider: inject('configProvider', defaultConfigProvider),
        picker: undefined,
        popupRef: undefined
      };
    },
    watch: {
      value: function value(val) {
        checkValidate('DatePicker', val, 'value', this.valueFormat);
      }
    },
    created: function created() {
      provide('savePopupRef', this.savePopupRef);
    },
    mounted: function mounted() {
      var _this = this;

      var _this$$props = this.$props,
          autofocus = _this$$props.autofocus,
          disabled = _this$$props.disabled,
          value = _this$$props.value,
          defaultValue = _this$$props.defaultValue,
          valueFormat = _this$$props.valueFormat;
      checkValidate('DatePicker', defaultValue, 'defaultValue', valueFormat);
      checkValidate('DatePicker', value, 'value', valueFormat);

      if (autofocus && !disabled) {
        nextTick(function () {
          _this.focus();
        });
      }
    },
    methods: {
      savePicker: function savePicker(node) {
        this.picker = node;
      },
      getDefaultLocale: function getDefaultLocale() {
        var result = _extends(_extends({}, enUS), this.locale);

        result.lang = _extends(_extends({}, result.lang), (this.locale || {}).lang);
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
        var value = this.valueFormat ? momentToString(date, this.valueFormat) : date;
        this.$emit('update:value', value);
        this.$emit('change', value, dateString);
      },
      handleOk: function handleOk(val) {
        this.$emit('ok', this.valueFormat ? momentToString(val, this.valueFormat) : val);
      },
      handleCalendarChange: function handleCalendarChange(date, dateString) {
        this.$emit('calendarChange', this.valueFormat ? momentToString(date, this.valueFormat) : date, dateString);
      },
      focus: function focus() {
        this.picker.focus();
      },
      blur: function blur() {
        this.picker.blur();
      },
      transformValue: function transformValue(props) {
        if ('value' in props) {
          props.value = stringToMoment(props.value, this.valueFormat);
        }

        if ('defaultValue' in props) {
          props.defaultValue = stringToMoment(props.defaultValue, this.valueFormat);
        }

        if ('defaultPickerValue' in props) {
          props.defaultPickerValue = stringToMoment(props.defaultPickerValue, this.valueFormat);
        }
      },
      renderPicker: function renderPicker(locale, localeCode) {
        var _classNames2;

        var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

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
        var pickerClass = classNames("".concat(prefixCls, "-picker"), _defineProperty({}, "".concat(prefixCls, "-picker-").concat(size), !!size));
        var pickerInputClass = classNames("".concat(prefixCls, "-picker-input"), inputPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(inputPrefixCls, "-lg"), size === 'large'), _defineProperty(_classNames2, "".concat(inputPrefixCls, "-sm"), size === 'small'), _defineProperty(_classNames2, "".concat(inputPrefixCls, "-disabled"), disabled), _classNames2));
        var timeFormat = showTime && showTime.format || 'HH:mm:ss';

        var vcTimePickerProps = _extends(_extends({}, generateShowHourMinuteSecond(timeFormat)), {
          format: timeFormat,
          use12Hours: showTime && showTime.use12Hours
        });

        var columns = getColumns(vcTimePickerProps);
        var timePickerCls = "".concat(prefixCls, "-time-picker-column-").concat(columns);

        var timePickerPanelProps = _extends(_extends(_extends({}, vcTimePickerProps), showTime), {
          prefixCls: "".concat(prefixCls, "-time-picker"),
          placeholder: locale.timePickerLocale.placeholder,
          transitionName: 'slide-up',
          class: timePickerCls,
          onEsc: function onEsc() {}
        });

        var timePicker = showTime ? _createVNode(TimePickerPanel, timePickerPanelProps, null) : null;

        var pickerProps = _extends(_extends({}, props), {
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

        return _createVNode(Picker, pickerProps, this.$slots);
      }
    },
    render: function render() {
      return _createVNode(LocaleReceiver, {
        "componentName": "DatePicker",
        "defaultLocale": this.getDefaultLocale,
        "children": this.renderPicker
      }, null);
    }
  });
}