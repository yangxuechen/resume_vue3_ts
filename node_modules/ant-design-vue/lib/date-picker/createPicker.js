"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPicker;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _moment = _interopRequireDefault(require("moment"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _MonthCalendar = _interopRequireDefault(require("../vc-calendar/src/MonthCalendar"));

var _Picker = _interopRequireDefault(require("../vc-calendar/src/Picker"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CalendarOutlined"));

var _configProvider = require("../config-provider");

var _interopDefault = _interopRequireDefault(require("../_util/interopDefault"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _utils = require("./utils");

var _util = require("../_util/util");

function createPicker(TheCalendar, props, name) {
  return (0, _vue.defineComponent)({
    name: name,
    mixins: [_BaseMixin.default],
    inheritAttrs: false,
    props: (0, _extends2.default)((0, _extends2.default)({}, props), {
      allowClear: _vueTypes.default.looseBool.def(true),
      showToday: _vueTypes.default.looseBool.def(true)
    }),
    setup: function setup() {
      return {
        configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
        input: undefined,
        sPrefixCls: undefined
      };
    },
    data: function data() {
      var value = this.value || this.defaultValue;
      return {
        sValue: value,
        showDate: value,
        sOpen: !!this.open
      };
    },
    watch: {
      open: function open(val) {
        var props = (0, _propsUtil.getOptionProps)(this);
        var state = {};
        state.sOpen = val;

        if ('value' in props && !val && props.value !== this.showDate) {
          state.showDate = props.value;
        }

        this.setState(state);
      },
      value: function value(val) {
        var state = {};
        state.sValue = val;

        if (val !== this.sValue) {
          state.showDate = val;
        }

        this.setState(state);
      },
      sOpen: function sOpen(val, oldVal) {
        var _this = this;

        (0, _vue.nextTick)(function () {
          if (!(0, _propsUtil.hasProp)(_this, 'open') && oldVal && !val) {
            _this.focus();
          }
        });
      }
    },
    methods: {
      saveInput: function saveInput(node) {
        this.input = node;
      },
      clearSelection: function clearSelection(e) {
        e.preventDefault();
        e.stopPropagation();
        this.handleChange(null);
      },
      handleChange: function handleChange(value) {
        if (!(0, _propsUtil.hasProp)(this, 'value')) {
          this.setState({
            sValue: value,
            showDate: value
          });
        }

        this.$emit('change', value, (0, _utils.formatDate)(value, this.format));
      },
      handleCalendarChange: function handleCalendarChange(value) {
        this.setState({
          showDate: value
        });
      },
      handleOpenChange: function handleOpenChange(open) {
        var props = (0, _propsUtil.getOptionProps)(this);

        if (!('open' in props)) {
          this.setState({
            sOpen: open
          });
        }

        this.$emit('openChange', open);
      },
      focus: function focus() {
        var _a;

        (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;

        (_a = this.input) === null || _a === void 0 ? void 0 : _a.blur();
      },
      renderFooter: function renderFooter() {
        var $slots = this.$slots,
            prefixCls = this.sPrefixCls;
        var renderExtraFooter = this.renderExtraFooter || $slots.renderExtraFooter;
        return renderExtraFooter ? (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-footer-extra")
        }, [typeof renderExtraFooter === 'function' ? renderExtraFooter.apply(void 0, arguments) : renderExtraFooter]) : null;
      },
      onMouseEnter: function onMouseEnter(e) {
        this.$emit('mouseenter', e);
      },
      onMouseLeave: function onMouseLeave(e) {
        this.$emit('mouseleave', e);
      }
    },
    render: function render() {
      var _classNames,
          _this2 = this;

      var $slots = this.$slots;
      var _this$$data = this.$data,
          value = _this$$data.sValue,
          showDate = _this$$data.showDate,
          open = _this$$data.sOpen;
      var suffixIcon = (0, _propsUtil.getComponent)(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      var props = (0, _omit.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs), ['onChange']);
      var customizePrefixCls = props.prefixCls,
          locale = props.locale,
          localeCode = props.localeCode,
          inputReadOnly = props.inputReadOnly;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('calendar', customizePrefixCls);
      this.sPrefixCls = prefixCls;
      var dateRender = props.dateRender || $slots.dateRender;
      var monthCellContentRender = props.monthCellContentRender || $slots.monthCellContentRender;
      var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
      var disabledTime = props.showTime ? props.disabledTime : null;
      var calendarClassName = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-time"), props.showTime), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-month"), _MonthCalendar.default === TheCalendar), _classNames));

      if (value && localeCode) {
        value.locale(localeCode);
      }

      var pickerProps = {};
      var calendarProps = {};
      var pickerStyle = {};

      if (props.showTime) {
        // fix https://github.com/ant-design/ant-design/issues/1902
        calendarProps.onSelect = this.handleChange;
        pickerStyle.minWidth = '195px';
      } else {
        pickerProps.onChange = this.handleChange;
      }

      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      var theCalendarProps = (0, _extends2.default)((0, _extends2.default)({}, calendarProps), {
        disabledDate: props.disabledDate,
        disabledTime: disabledTime,
        locale: locale.lang,
        timePicker: props.timePicker,
        defaultValue: props.defaultPickerValue || (0, _interopDefault.default)(_moment.default)(),
        dateInputPlaceholder: placeholder,
        prefixCls: prefixCls,
        dateRender: dateRender,
        format: props.format,
        showToday: props.showToday,
        monthCellContentRender: monthCellContentRender,
        renderFooter: this.renderFooter,
        value: showDate,
        inputReadOnly: inputReadOnly,
        onOk: props.onOk,
        onPanelChange: props.onPanelChange,
        onChange: this.handleCalendarChange,
        class: calendarClassName
      });
      var calendar = (0, _vue.createVNode)(TheCalendar, theCalendarProps, $slots);
      var clearIcon = !props.disabled && props.allowClear && value ? (0, _vue.createVNode)(_CloseCircleFilled.default, {
        "class": "".concat(prefixCls, "-picker-clear"),
        "onClick": this.clearSelection
      }, null) : null;
      var inputIcon = suffixIcon && ((0, _propsUtil.isValidElement)(suffixIcon) ? (0, _vnode.cloneElement)(suffixIcon, {
        class: "".concat(prefixCls, "-picker-icon")
      }) : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-picker-icon")
      }, [suffixIcon])) || (0, _vue.createVNode)(_CalendarOutlined.default, {
        "class": "".concat(prefixCls, "-picker-icon")
      }, null);

      var input = function input(_ref) {
        var inputValue = _ref.value;
        return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("input", {
          "ref": _this2.saveInput,
          "disabled": props.disabled,
          "onFocus": props.onFocus,
          "onBlur": props.onBlur,
          "readonly": true,
          "value": (0, _utils.formatDate)(inputValue, _this2.format),
          "placeholder": placeholder,
          "class": props.pickerInputClass,
          "tabindex": props.tabindex,
          "name": _this2.name
        }, null), clearIcon, inputIcon]);
      };

      var vcDatePickerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), pickerProps), {
        calendar: calendar,
        value: value,
        prefixCls: "".concat(prefixCls, "-picker-container"),
        open: open,
        onOpenChange: this.handleOpenChange,
        style: props.popupStyle
      });
      return (0, _vue.createVNode)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "id": props.id,
        "class": (0, _classNames2.default)(props.class, props.pickerClass),
        "style": (0, _extends2.default)((0, _extends2.default)({}, pickerStyle), props.style)
      }, (0, _util.getDataAndAriaProps)(this.$attrs)), {}, {
        "onMouseenter": this.onMouseEnter,
        "onMouseleave": this.onMouseLeave
      }), [(0, _vue.createVNode)(_Picker.default, vcDatePickerProps, (0, _extends2.default)((0, _extends2.default)({}, $slots), {
        default: (0, _propsUtil.isEmptySlot)($slots.default) ? input : $slots.default
      }))]);
    }
  });
}