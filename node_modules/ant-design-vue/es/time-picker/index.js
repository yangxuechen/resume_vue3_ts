import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import omit from 'omit.js';
import { defineComponent, inject, provide } from 'vue';
import VcTimePicker from '../vc-time-picker';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import BaseMixin from '../_util/BaseMixin';
import PropTypes from '../_util/vue-types';
import warning from '../_util/warning';
import ClockCircleOutlined from '@ant-design/icons-vue/ClockCircleOutlined';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import enUS from './locale/en_US';
import { hasProp, getOptionProps, getComponent, isValidElement } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { cloneElement } from '../_util/vnode';
import { defaultConfigProvider } from '../config-provider';
import { checkValidate, stringToMoment, momentToString, TimeOrTimesType } from '../_util/moment-util';
import { tuple, withInstall } from '../_util/type';
import classNames from '../_util/classNames';
export function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}
export var timePickerProps = function timePickerProps() {
  return {
    size: PropTypes.oneOf(tuple('large', 'default', 'small')),
    value: TimeOrTimesType,
    defaultValue: TimeOrTimesType,
    open: PropTypes.looseBool,
    format: PropTypes.string,
    disabled: PropTypes.looseBool,
    placeholder: PropTypes.string,
    prefixCls: PropTypes.string,
    hideDisabledOptions: PropTypes.looseBool,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    getPopupContainer: PropTypes.func,
    use12Hours: PropTypes.looseBool,
    focusOnOpen: PropTypes.looseBool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    allowEmpty: PropTypes.looseBool,
    allowClear: PropTypes.looseBool,
    inputReadOnly: PropTypes.looseBool,
    clearText: PropTypes.string,
    defaultOpenValue: PropTypes.object,
    popupClassName: PropTypes.string,
    popupStyle: PropTypes.style,
    suffixIcon: PropTypes.any,
    align: PropTypes.object,
    placement: PropTypes.any,
    transitionName: PropTypes.string,
    autofocus: PropTypes.looseBool,
    addon: PropTypes.any,
    clearIcon: PropTypes.any,
    locale: PropTypes.object,
    valueFormat: PropTypes.string,
    onChange: PropTypes.func,
    onAmPmChange: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeydown: PropTypes.func,
    onOpenChange: PropTypes.func
  };
};
var TimePicker = defineComponent({
  name: 'ATimePicker',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(timePickerProps(), {
    align: {
      offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true,
    allowClear: true
  }),
  emits: ['update:value', 'update:open', 'change', 'openChange', 'focus', 'blur', 'keydown'],
  setup: function setup() {
    return {
      popupRef: null,
      timePickerRef: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue,
        valueFormat = this.valueFormat;
    checkValidate('TimePicker', defaultValue, 'defaultValue', valueFormat);
    checkValidate('TimePicker', value, 'value', valueFormat);
    warning(!hasProp(this, 'allowEmpty'), 'TimePicker', '`allowEmpty` is deprecated. Please use `allowClear` instead.');
    return {
      sValue: stringToMoment(value || defaultValue, valueFormat)
    };
  },
  watch: {
    value: function value(val) {
      checkValidate('TimePicker', val, 'value', this.valueFormat);
      this.setState({
        sValue: stringToMoment(val, this.valueFormat)
      });
    }
  },
  created: function created() {
    provide('savePopupRef', this.savePopupRef);
  },
  methods: {
    getDefaultFormat: function getDefaultFormat() {
      var format = this.format,
          use12Hours = this.use12Hours;

      if (format) {
        return format;
      } else if (use12Hours) {
        return 'h:mm:ss a';
      }

      return 'HH:mm:ss';
    },
    getAllowClear: function getAllowClear() {
      var _this$$props = this.$props,
          allowClear = _this$$props.allowClear,
          allowEmpty = _this$$props.allowEmpty;

      if (hasProp(this, 'allowClear')) {
        return allowClear;
      }

      return allowEmpty;
    },
    getDefaultLocale: function getDefaultLocale() {
      var defaultLocale = _extends(_extends({}, enUS), this.$props.locale);

      return defaultLocale;
    },
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    saveTimePicker: function saveTimePicker(timePickerRef) {
      this.timePickerRef = timePickerRef;
    },
    handleChange: function handleChange(value) {
      if (!hasProp(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      var _this$format = this.format,
          format = _this$format === void 0 ? 'HH:mm:ss' : _this$format;
      var val = this.valueFormat ? momentToString(value, this.valueFormat) : value;
      this.$emit('update:value', val);
      this.$emit('change', val, value && value.format(format) || '');
    },
    handleOpenClose: function handleOpenClose(_ref) {
      var open = _ref.open;
      this.$emit('update:open', open);
      this.$emit('openChange', open);
    },
    focus: function focus() {
      this.timePickerRef.focus();
    },
    blur: function blur() {
      this.timePickerRef.blur();
    },
    renderInputIcon: function renderInputIcon(prefixCls) {
      var suffixIcon = getComponent(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;

      var clockIcon = suffixIcon && isValidElement(suffixIcon) && cloneElement(suffixIcon, {
        class: "".concat(prefixCls, "-clock-icon")
      }) || _createVNode(ClockCircleOutlined, {
        "class": "".concat(prefixCls, "-clock-icon")
      }, null);

      return _createVNode("span", {
        "class": "".concat(prefixCls, "-icon")
      }, [clockIcon]);
    },
    renderClearIcon: function renderClearIcon(prefixCls) {
      var clearIcon = getComponent(this, 'clearIcon');
      var clearIconPrefixCls = "".concat(prefixCls, "-clear");

      if (clearIcon && isValidElement(clearIcon)) {
        return cloneElement(clearIcon, {
          class: clearIconPrefixCls
        });
      }

      return _createVNode(CloseCircleFilled, {
        "class": clearIconPrefixCls
      }, null);
    },
    renderTimePicker: function renderTimePicker(locale) {
      var _pickerClassName;

      var props = getOptionProps(this);
      props = omit(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);
      var className = this.$attrs.class;
      var _props = props,
          customizePrefixCls = _props.prefixCls,
          getPopupContainer = _props.getPopupContainer,
          placeholder = _props.placeholder,
          size = _props.size;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('time-picker', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input');
      var pickerInputClass = classNames("".concat(prefixCls, "-input"), inputPrefixCls);
      var format = this.getDefaultFormat();
      var pickerClassName = (_pickerClassName = {}, _defineProperty(_pickerClassName, className, className), _defineProperty(_pickerClassName, "".concat(prefixCls, "-").concat(size), !!size), _pickerClassName);
      var tempAddon = getComponent(this, 'addon', {}, false);

      var pickerAddon = function pickerAddon(panel) {
        return tempAddon ? _createVNode("div", {
          "class": "".concat(prefixCls, "-panel-addon")
        }, [typeof tempAddon === 'function' ? tempAddon(panel) : tempAddon]) : null;
      };

      var inputIcon = this.renderInputIcon(prefixCls);
      var clearIcon = this.renderClearIcon(prefixCls);
      var getContextPopupContainer = this.configProvider.getPopupContainer;

      var timeProps = _extends(_extends(_extends(_extends({}, generateShowHourMinuteSecond(format)), props), this.$attrs), {
        allowEmpty: this.getAllowClear(),
        prefixCls: prefixCls,
        pickerInputClass: pickerInputClass,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        format: format,
        value: this.sValue,
        placeholder: placeholder === undefined ? locale.placeholder : placeholder,
        addon: pickerAddon,
        inputIcon: inputIcon,
        clearIcon: clearIcon,
        class: pickerClassName,
        ref: this.saveTimePicker,
        onChange: this.handleChange,
        onOpen: this.handleOpenClose,
        onClose: this.handleOpenClose
      });

      return _createVNode(VcTimePicker, timeProps, null);
    }
  },
  render: function render() {
    return _createVNode(LocaleReceiver, {
      "componentName": "TimePicker",
      "defaultLocale": this.getDefaultLocale(),
      "children": this.renderTimePicker
    }, null);
  }
});
export default withInstall(TimePicker);