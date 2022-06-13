"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateShowHourMinuteSecond = generateShowHourMinuteSecond;
exports.default = exports.timePickerProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _omit = _interopRequireDefault(require("omit.js"));

var _vcTimePicker = _interopRequireDefault(require("../vc-time-picker"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _ClockCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ClockCircleOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vnode = require("../_util/vnode");

var _configProvider = require("../config-provider");

var _momentUtil = require("../_util/moment-util");

var _type = require("../_util/type");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}

var timePickerProps = function timePickerProps() {
  return {
    size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'default', 'small')),
    value: _momentUtil.TimeOrTimesType,
    defaultValue: _momentUtil.TimeOrTimesType,
    open: _vueTypes.default.looseBool,
    format: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool,
    placeholder: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    hideDisabledOptions: _vueTypes.default.looseBool,
    disabledHours: _vueTypes.default.func,
    disabledMinutes: _vueTypes.default.func,
    disabledSeconds: _vueTypes.default.func,
    getPopupContainer: _vueTypes.default.func,
    use12Hours: _vueTypes.default.looseBool,
    focusOnOpen: _vueTypes.default.looseBool,
    hourStep: _vueTypes.default.number,
    minuteStep: _vueTypes.default.number,
    secondStep: _vueTypes.default.number,
    allowEmpty: _vueTypes.default.looseBool,
    allowClear: _vueTypes.default.looseBool,
    inputReadOnly: _vueTypes.default.looseBool,
    clearText: _vueTypes.default.string,
    defaultOpenValue: _vueTypes.default.object,
    popupClassName: _vueTypes.default.string,
    popupStyle: _vueTypes.default.style,
    suffixIcon: _vueTypes.default.any,
    align: _vueTypes.default.object,
    placement: _vueTypes.default.any,
    transitionName: _vueTypes.default.string,
    autofocus: _vueTypes.default.looseBool,
    addon: _vueTypes.default.any,
    clearIcon: _vueTypes.default.any,
    locale: _vueTypes.default.object,
    valueFormat: _vueTypes.default.string,
    onChange: _vueTypes.default.func,
    onAmPmChange: _vueTypes.default.func,
    onOpen: _vueTypes.default.func,
    onClose: _vueTypes.default.func,
    onFocus: _vueTypes.default.func,
    onBlur: _vueTypes.default.func,
    onKeydown: _vueTypes.default.func,
    onOpenChange: _vueTypes.default.func
  };
};

exports.timePickerProps = timePickerProps;
var TimePicker = (0, _vue.defineComponent)({
  name: 'ATimePicker',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(timePickerProps(), {
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
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue,
        valueFormat = this.valueFormat;
    (0, _momentUtil.checkValidate)('TimePicker', defaultValue, 'defaultValue', valueFormat);
    (0, _momentUtil.checkValidate)('TimePicker', value, 'value', valueFormat);
    (0, _warning.default)(!(0, _propsUtil.hasProp)(this, 'allowEmpty'), 'TimePicker', '`allowEmpty` is deprecated. Please use `allowClear` instead.');
    return {
      sValue: (0, _momentUtil.stringToMoment)(value || defaultValue, valueFormat)
    };
  },
  watch: {
    value: function value(val) {
      (0, _momentUtil.checkValidate)('TimePicker', val, 'value', this.valueFormat);
      this.setState({
        sValue: (0, _momentUtil.stringToMoment)(val, this.valueFormat)
      });
    }
  },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
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

      if ((0, _propsUtil.hasProp)(this, 'allowClear')) {
        return allowClear;
      }

      return allowEmpty;
    },
    getDefaultLocale: function getDefaultLocale() {
      var defaultLocale = (0, _extends2.default)((0, _extends2.default)({}, _en_US.default), this.$props.locale);
      return defaultLocale;
    },
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    saveTimePicker: function saveTimePicker(timePickerRef) {
      this.timePickerRef = timePickerRef;
    },
    handleChange: function handleChange(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      var _this$format = this.format,
          format = _this$format === void 0 ? 'HH:mm:ss' : _this$format;
      var val = this.valueFormat ? (0, _momentUtil.momentToString)(value, this.valueFormat) : value;
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
      var suffixIcon = (0, _propsUtil.getComponent)(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      var clockIcon = suffixIcon && (0, _propsUtil.isValidElement)(suffixIcon) && (0, _vnode.cloneElement)(suffixIcon, {
        class: "".concat(prefixCls, "-clock-icon")
      }) || (0, _vue.createVNode)(_ClockCircleOutlined.default, {
        "class": "".concat(prefixCls, "-clock-icon")
      }, null);
      return (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-icon")
      }, [clockIcon]);
    },
    renderClearIcon: function renderClearIcon(prefixCls) {
      var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
      var clearIconPrefixCls = "".concat(prefixCls, "-clear");

      if (clearIcon && (0, _propsUtil.isValidElement)(clearIcon)) {
        return (0, _vnode.cloneElement)(clearIcon, {
          class: clearIconPrefixCls
        });
      }

      return (0, _vue.createVNode)(_CloseCircleFilled.default, {
        "class": clearIconPrefixCls
      }, null);
    },
    renderTimePicker: function renderTimePicker(locale) {
      var _pickerClassName;

      var props = (0, _propsUtil.getOptionProps)(this);
      props = (0, _omit.default)(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);
      var className = this.$attrs.class;
      var _props = props,
          customizePrefixCls = _props.prefixCls,
          getPopupContainer = _props.getPopupContainer,
          placeholder = _props.placeholder,
          size = _props.size;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('time-picker', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input');
      var pickerInputClass = (0, _classNames.default)("".concat(prefixCls, "-input"), inputPrefixCls);
      var format = this.getDefaultFormat();
      var pickerClassName = (_pickerClassName = {}, (0, _defineProperty2.default)(_pickerClassName, className, className), (0, _defineProperty2.default)(_pickerClassName, "".concat(prefixCls, "-").concat(size), !!size), _pickerClassName);
      var tempAddon = (0, _propsUtil.getComponent)(this, 'addon', {}, false);

      var pickerAddon = function pickerAddon(panel) {
        return tempAddon ? (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-panel-addon")
        }, [typeof tempAddon === 'function' ? tempAddon(panel) : tempAddon]) : null;
      };

      var inputIcon = this.renderInputIcon(prefixCls);
      var clearIcon = this.renderClearIcon(prefixCls);
      var getContextPopupContainer = this.configProvider.getPopupContainer;
      var timeProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, generateShowHourMinuteSecond(format)), props), this.$attrs), {
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
      return (0, _vue.createVNode)(_vcTimePicker.default, timeProps, null);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "TimePicker",
      "defaultLocale": this.getDefaultLocale(),
      "children": this.renderTimePicker
    }, null);
  }
});

var _default = (0, _type.withInstall)(TimePicker);

exports.default = _default;