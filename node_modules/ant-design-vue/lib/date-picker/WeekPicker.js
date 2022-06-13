"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _moment = _interopRequireDefault(require("moment"));

var _vcCalendar = _interopRequireDefault(require("../vc-calendar"));

var _Picker = _interopRequireDefault(require("../vc-calendar/src/Picker"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _props = require("./props");

var _interopDefault = _interopRequireDefault(require("../_util/interopDefault"));

var _InputIcon = _interopRequireDefault(require("./InputIcon"));

var _util = require("../_util/util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

function formatValue(value, format) {
  return value && value.format(format) || '';
}

function noop() {}

var _default = (0, _vue.defineComponent)({
  name: 'AWeekPicker',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(_props.WeekPickerProps, {
    allowClear: true
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      prevState: {},
      input: undefined,
      sPrefixCls: undefined
    };
  },
  data: function data() {
    var value = this.value || this.defaultValue;

    if (value && !(0, _interopDefault.default)(_moment.default).isMoment(value)) {
      throw new Error('The value/defaultValue of WeekPicker or MonthPicker must be ' + 'a moment object');
    }

    return {
      _value: value,
      _open: this.open
    };
  },
  watch: {
    value: function value(val) {
      var state = {
        _value: val
      };
      this.setState(state);
      this.prevState = (0, _extends2.default)((0, _extends2.default)({}, this.$data), state);
    },
    open: function open(val) {
      var state = {
        _open: val
      };
      this.setState(state);
      this.prevState = (0, _extends2.default)((0, _extends2.default)({}, this.$data), state);
    },
    _open: function _open(val, oldVal) {
      var _this = this;

      (0, _vue.nextTick)(function () {
        if (!(0, _propsUtil.hasProp)(_this, 'open') && oldVal && !val) {
          _this.focus();
        }
      });
    }
  },
  mounted: function mounted() {
    this.prevState = (0, _extends2.default)({}, this.$data);
  },
  updated: function updated() {
    var _this2 = this;

    (0, _vue.nextTick)(function () {
      if (!(0, _propsUtil.hasProp)(_this2, 'open') && _this2.prevState._open && !_this2._open) {
        _this2.focus();
      }
    });
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    weekDateRender: function weekDateRender(_ref) {
      var current = _ref.current;
      var selectedValue = this.$data._value;
      var prefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var dateRender = this.dateRender || $slots.dateRender;
      var dateNode = dateRender ? dateRender({
        current: current
      }) : current.date();

      if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
        return (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-selected-day")
        }, [(0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-date")
        }, [dateNode])]);
      }

      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-date")
      }, [dateNode]);
    },
    handleChange: function handleChange(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          _value: value
        });
      }

      this.$emit('change', value, formatValue(value, this.format));
    },
    handleOpenChange: function handleOpenChange(open) {
      if (!(0, _propsUtil.hasProp)(this, 'open')) {
        this.setState({
          _open: open
        });
      }

      this.$emit('openChange', open);
    },
    clearSelection: function clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();
      this.handleChange(null);
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    renderFooter: function renderFooter() {
      var prefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var renderExtraFooter = this.renderExtraFooter || $slots.renderExtraFooter;
      return renderExtraFooter ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-footer-extra")
      }, [renderExtraFooter.apply(void 0, arguments)]) : null;
    }
  },
  render: function render() {
    var _this3 = this;

    var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
    var suffixIcon = (0, _propsUtil.getComponent)(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var customizePrefixCls = this.prefixCls,
        disabled = this.disabled,
        pickerClass = this.pickerClass,
        popupStyle = this.popupStyle,
        pickerInputClass = this.pickerInputClass,
        format = this.format,
        allowClear = this.allowClear,
        locale = this.locale,
        localeCode = this.localeCode,
        disabledDate = this.disabledDate,
        defaultPickerValue = this.defaultPickerValue,
        $data = this.$data,
        $slots = this.$slots;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('calendar', customizePrefixCls);
    this.sPrefixCls = prefixCls;
    var pickerValue = $data._value,
        open = $data._open;
    var className = props.class,
        style = props.style,
        id = props.id,
        _props$onFocus = props.onFocus,
        onFocus = _props$onFocus === void 0 ? noop : _props$onFocus,
        _props$onBlur = props.onBlur,
        onBlur = _props$onBlur === void 0 ? noop : _props$onBlur;

    if (pickerValue && localeCode) {
      pickerValue.locale(localeCode);
    }

    var placeholder = (0, _propsUtil.hasProp)(this, 'placeholder') ? this.placeholder : locale.lang.placeholder;
    var weekDateRender = this.dateRender || $slots.dateRender || this.weekDateRender;
    var calendar = (0, _vue.createVNode)(_vcCalendar.default, {
      "showWeekNumber": true,
      "dateRender": weekDateRender,
      "prefixCls": prefixCls,
      "format": format,
      "locale": locale.lang,
      "showDateInput": false,
      "showToday": false,
      "disabledDate": disabledDate,
      "renderFooter": this.renderFooter,
      "defaultValue": defaultPickerValue
    }, null);
    var clearIcon = !disabled && allowClear && $data._value ? (0, _vue.createVNode)(_CloseCircleFilled.default, {
      "class": "".concat(prefixCls, "-picker-clear"),
      "onClick": this.clearSelection
    }, null) : null;
    var inputIcon = (0, _vue.createVNode)(_InputIcon.default, {
      "suffixIcon": suffixIcon,
      "prefixCls": prefixCls
    }, null);

    var input = function input(_ref2) {
      var value = _ref2.value;
      return (0, _vue.createVNode)("span", {
        "style": {
          display: 'inline-block',
          width: '100%'
        }
      }, [(0, _vue.createVNode)("input", {
        "ref": _this3.saveInput,
        "disabled": disabled,
        "readonly": true,
        "value": value && value.format(format) || '',
        "placeholder": placeholder,
        "class": pickerInputClass,
        "onFocus": onFocus,
        "onBlur": onBlur
      }, null), clearIcon, inputIcon]);
    };

    var vcDatePickerProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
      calendar: calendar,
      prefixCls: "".concat(prefixCls, "-picker-container"),
      value: pickerValue,
      open: open,
      onChange: this.handleChange,
      onOpenChange: this.handleOpenChange,
      style: popupStyle
    });
    return (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
      "class": (0, _classNames.default)(className, pickerClass),
      "style": style,
      "id": id
    }, (0, _util.getDataAndAriaProps)(props)), [(0, _vue.createVNode)(_Picker.default, vcDatePickerProps, (0, _extends2.default)({
      default: input
    }, $slots))]);
  }
});

exports.default = _default;