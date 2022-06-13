"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));

var _Panel = _interopRequireDefault(require("./Panel"));

var _placements = _interopRequireDefault(require("./placements"));

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var _default2 = (0, _vue.defineComponent)({
  name: 'VcTimePicker',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes.default.string,
    clearText: _vueTypes.default.string,
    value: _vueTypes.default.any,
    defaultOpenValue: {
      type: Object,
      default: function _default() {
        return (0, _moment.default)();
      }
    },
    pickerInputClass: String,
    inputReadOnly: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    allowEmpty: _vueTypes.default.looseBool,
    defaultValue: _vueTypes.default.any,
    open: _vueTypes.default.looseBool,
    defaultOpen: _vueTypes.default.looseBool,
    align: _vueTypes.default.object,
    placement: _vueTypes.default.any,
    transitionName: _vueTypes.default.string,
    getPopupContainer: _vueTypes.default.func,
    placeholder: _vueTypes.default.string,
    format: _vueTypes.default.string,
    showHour: _vueTypes.default.looseBool,
    showMinute: _vueTypes.default.looseBool,
    showSecond: _vueTypes.default.looseBool,
    popupClassName: _vueTypes.default.string,
    popupStyle: _vueTypes.default.object,
    disabledHours: _vueTypes.default.func,
    disabledMinutes: _vueTypes.default.func,
    disabledSeconds: _vueTypes.default.func,
    hideDisabledOptions: _vueTypes.default.looseBool,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    // onOpen: PropTypes.func,
    // onClose: PropTypes.func,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    name: _vueTypes.default.string,
    autocomplete: _vueTypes.default.string,
    use12Hours: _vueTypes.default.looseBool,
    hourStep: _vueTypes.default.number,
    minuteStep: _vueTypes.default.number,
    secondStep: _vueTypes.default.number,
    focusOnOpen: _vueTypes.default.looseBool,
    // onKeyDown: PropTypes.func,
    autofocus: _vueTypes.default.looseBool,
    id: _vueTypes.default.string,
    inputIcon: _vueTypes.default.any,
    clearIcon: _vueTypes.default.any,
    addon: _vueTypes.default.func
  }, {
    clearText: 'clear',
    prefixCls: 'rc-time-picker',
    defaultOpen: false,
    inputReadOnly: false,
    popupClassName: '',
    popupStyle: {},
    align: {},
    allowEmpty: true,
    showHour: true,
    showMinute: true,
    showSecond: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    use12Hours: false,
    focusOnOpen: false
  }),
  data: function data() {
    this.saveInputRef = refFn.bind(this, 'picker');
    this.savePanelRef = refFn.bind(this, 'panelInstance');
    var defaultOpen = this.defaultOpen,
        defaultValue = this.defaultValue,
        _this$open = this.open,
        open = _this$open === void 0 ? defaultOpen : _this$open,
        _this$value = this.value,
        value = _this$value === void 0 ? defaultValue : _this$value;
    return {
      sOpen: open,
      sValue: value
    };
  },
  watch: {
    value: function value(val) {
      this.setState({
        sValue: val
      });
    },
    open: function open(val) {
      if (val !== undefined) {
        this.setState({
          sOpen: val
        });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autofocus) {
        _this.focus();
      }
    });
  },
  methods: {
    onPanelChange: function onPanelChange(value) {
      this.setValue(value);
    },
    onAmPmChange: function onAmPmChange(ampm) {
      this.__emit('amPmChange', ampm);
    },
    onClear: function onClear(event) {
      event.stopPropagation();
      this.setValue(null);
      this.setOpen(false);
    },
    onVisibleChange: function onVisibleChange(open) {
      this.setOpen(open);
    },
    onEsc: function onEsc() {
      this.setOpen(false);
      this.focus();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 40) {
        this.setOpen(true);
      }
    },
    onKeyDown2: function onKeyDown2(e) {
      this.__emit('keydown', e);
    },
    setValue: function setValue(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      this.__emit('change', value);
    },
    getFormat: function getFormat() {
      var format = this.format,
          showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          use12Hours = this.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
          return !!item;
        }).join(':');
        return fmtString.concat(' a');
      }

      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    },
    getPanelElement: function getPanelElement() {
      var prefixCls = this.prefixCls,
          placeholder = this.placeholder,
          disabledHours = this.disabledHours,
          addon = this.addon,
          disabledMinutes = this.disabledMinutes,
          disabledSeconds = this.disabledSeconds,
          hideDisabledOptions = this.hideDisabledOptions,
          inputReadOnly = this.inputReadOnly,
          showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          defaultOpenValue = this.defaultOpenValue,
          clearText = this.clearText,
          use12Hours = this.use12Hours,
          focusOnOpen = this.focusOnOpen,
          onKeyDown2 = this.onKeyDown2,
          hourStep = this.hourStep,
          minuteStep = this.minuteStep,
          secondStep = this.secondStep,
          sValue = this.sValue;
      var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
      return (0, _vue.createVNode)(_Panel.default, {
        "clearText": clearText,
        "prefixCls": "".concat(prefixCls, "-panel"),
        "ref": this.savePanelRef,
        "value": sValue,
        "inputReadOnly": inputReadOnly,
        "onChange": this.onPanelChange,
        "onAmPmChange": this.onAmPmChange,
        "defaultOpenValue": defaultOpenValue,
        "showHour": showHour,
        "showMinute": showMinute,
        "showSecond": showSecond,
        "onEsc": this.onEsc,
        "format": this.getFormat(),
        "placeholder": placeholder,
        "disabledHours": disabledHours,
        "disabledMinutes": disabledMinutes,
        "disabledSeconds": disabledSeconds,
        "hideDisabledOptions": hideDisabledOptions,
        "use12Hours": use12Hours,
        "hourStep": hourStep,
        "minuteStep": minuteStep,
        "secondStep": secondStep,
        "focusOnOpen": focusOnOpen,
        "onKeydown": onKeyDown2,
        "clearIcon": clearIcon,
        "addon": addon
      }, null);
    },
    getPopupClassName: function getPopupClassName() {
      var showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          use12Hours = this.use12Hours,
          prefixCls = this.prefixCls,
          popupClassName = this.popupClassName;
      var selectColumnCount = 0;

      if (showHour) {
        selectColumnCount += 1;
      }

      if (showMinute) {
        selectColumnCount += 1;
      }

      if (showSecond) {
        selectColumnCount += 1;
      }

      if (use12Hours) {
        selectColumnCount += 1;
      } // Keep it for old compatibility


      return (0, _classNames2.default)(popupClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-panel-narrow"), (!showHour || !showMinute || !showSecond) && !use12Hours), "".concat(prefixCls, "-panel-column-").concat(selectColumnCount));
    },
    setOpen: function setOpen(open) {
      if (this.sOpen !== open) {
        if (!(0, _propsUtil.hasProp)(this, 'open')) {
          this.setState({
            sOpen: open
          });
        }

        if (open) {
          this.__emit('open', {
            open: open
          });
        } else {
          this.__emit('close', {
            open: open
          });
        }
      }
    },
    focus: function focus() {
      this.picker.focus();
    },
    blur: function blur() {
      this.picker.blur();
    },
    onFocus: function onFocus(e) {
      this.__emit('focus', e);
    },
    onBlur: function onBlur(e) {
      this.__emit('blur', e);
    },
    renderClearButton: function renderClearButton() {
      var _this2 = this;

      var sValue = this.sValue;
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          allowEmpty = _this$$props.allowEmpty,
          clearText = _this$$props.clearText,
          disabled = _this$$props.disabled;

      if (!allowEmpty || !sValue || disabled) {
        return null;
      }

      var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');

      if ((0, _propsUtil.isValidElement)(clearIcon)) {
        var _ref = (0, _propsUtil.getEvents)(clearIcon) || {},
            _onClick = _ref.onClick;

        return (0, _vnode.cloneElement)(clearIcon, {
          onClick: function onClick() {
            if (_onClick) _onClick.apply(void 0, arguments);

            _this2.onClear.apply(_this2, arguments);
          }
        });
      }

      return (0, _vue.createVNode)("a", {
        "role": "button",
        "class": "".concat(prefixCls, "-clear"),
        "title": clearText,
        "onClick": this.onClear,
        "tabindex": 0
      }, [clearIcon || (0, _vue.createVNode)("i", {
        "class": "".concat(prefixCls, "-clear-icon")
      }, null)]);
    }
  },
  render: function render() {
    var _this3 = this;

    var prefixCls = this.prefixCls,
        placeholder = this.placeholder,
        placement = this.placement,
        align = this.align,
        id = this.id,
        disabled = this.disabled,
        transitionName = this.transitionName,
        getPopupContainer = this.getPopupContainer,
        name = this.name,
        autocomplete = this.autocomplete,
        autofocus = this.autofocus,
        sOpen = this.sOpen,
        sValue = this.sValue,
        onFocus = this.onFocus,
        onBlur = this.onBlur,
        popupStyle = this.popupStyle,
        pickerInputClass = this.pickerInputClass;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    var popupClassName = this.getPopupClassName();
    var inputIcon = (0, _propsUtil.getComponent)(this, 'inputIcon');
    return (0, _vue.createVNode)(_vcTrigger.default, {
      "prefixCls": "".concat(prefixCls, "-panel"),
      "popupClassName": popupClassName,
      "popupStyle": popupStyle,
      "popupAlign": align,
      "builtinPlacements": _placements.default,
      "popupPlacement": placement,
      "action": disabled ? [] : ['click'],
      "destroyPopupOnHide": true,
      "getPopupContainer": getPopupContainer,
      "popupTransitionName": transitionName,
      "popupVisible": sOpen,
      "onPopupVisibleChange": this.onVisibleChange,
      "popup": this.getPanelElement()
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)("span", {
          "class": (0, _classNames2.default)(prefixCls, className),
          "style": style
        }, [(0, _vue.createVNode)("input", {
          "class": pickerInputClass,
          "ref": _this3.saveInputRef,
          "type": "text",
          "placeholder": placeholder,
          "name": name,
          "onKeydown": _this3.onKeyDown,
          "disabled": disabled,
          "value": sValue && sValue.format(_this3.getFormat()) || '',
          "autocomplete": autocomplete,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "autofocus": autofocus,
          "readonly": true,
          "id": id
        }, null), inputIcon || (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-icon")
        }, null), _this3.renderClearButton()])];
      }
    });
  }
});

exports.default = _default2;