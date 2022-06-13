"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _vnode = require("../../_util/vnode");

var _createChainedFunction = _interopRequireDefault(require("../../_util/createChainedFunction"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _placements = _interopRequireDefault(require("./picker/placements"));

var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));

var _moment = _interopRequireDefault(require("moment"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var TimeType = {
  validator: function validator(value) {
    if (Array.isArray(value)) {
      return value.length === 0 || value.findIndex(function (val) {
        return !(0, _isNil.default)(val) && !_moment.default.isMoment(val);
      }) === -1;
    } else {
      return (0, _isNil.default)(value) || _moment.default.isMoment(value);
    }
  }
};

function refFn(field, component) {
  this[field] = component;
}

var Picker = (0, _vue.defineComponent)({
  name: 'Picker',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    animation: _vueTypes.default.oneOfType([_vueTypes.default.func, _vueTypes.default.string]),
    disabled: _vueTypes.default.looseBool,
    transitionName: _vueTypes.default.string,
    format: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.array, _vueTypes.default.func]),
    // onChange: PropTypes.func,
    // onOpenChange: PropTypes.func,
    getCalendarContainer: _vueTypes.default.func,
    calendar: _vueTypes.default.any,
    open: _vueTypes.default.looseBool,
    defaultOpen: _vueTypes.default.looseBool.def(false),
    prefixCls: _vueTypes.default.string.def('rc-calendar-picker'),
    placement: _vueTypes.default.any.def('bottomLeft'),
    value: TimeType,
    defaultValue: TimeType,
    align: _vueTypes.default.object.def(function () {
      return {};
    }),
    dropdownClassName: _vueTypes.default.string,
    dateRender: _vueTypes.default.func,
    children: _vueTypes.default.func
  },
  data: function data() {
    var props = this.$props;
    this.calendarElement = null;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    var open;

    if ((0, _propsUtil.hasProp)(this, 'open')) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }

    var value = props.value || props.defaultValue;
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
      this.setState({
        sOpen: val
      });
    }
  },
  mounted: function mounted() {
    this.preSOpen = this.sOpen;
  },
  updated: function updated() {
    if (!this.preSOpen && this.sOpen) {
      // setTimeout is for making sure saveCalendarRef happen before focusCalendar
      this.focusTimeout = setTimeout(this.focusCalendar, 100);
    }

    this.preSOpen = this.sOpen;
  },
  beforeUnmount: function beforeUnmount() {
    clearTimeout(this.focusTimeout);
  },
  methods: {
    onCalendarKeyDown: function onCalendarKeyDown(event) {
      if (event.keyCode === _KeyCode.default.ESC) {
        event.stopPropagation();
        this.closeCalendar(this.focus);
      }
    },
    onCalendarSelect: function onCalendarSelect(value) {
      var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var props = this.$props;

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      var calendarProps = (0, _propsUtil.getOptionProps)(props.calendar);

      if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !calendarProps.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
        this.closeCalendar(this.focus);
      }

      this.__emit('change', value);
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.sOpen && (event.keyCode === _KeyCode.default.DOWN || event.keyCode === _KeyCode.default.ENTER)) {
        this.openCalendar();
        event.preventDefault();
      }
    },
    onCalendarOk: function onCalendarOk() {
      this.closeCalendar(this.focus);
    },
    onCalendarClear: function onCalendarClear() {
      this.closeCalendar(this.focus);
    },
    onCalendarBlur: function onCalendarBlur() {
      this.setOpen(false);
    },
    onVisibleChange: function onVisibleChange(open) {
      this.setOpen(open);
    },
    getCalendarElement: function getCalendarElement() {
      var props = this.$props;
      var calendarProps = (0, _propsUtil.getOptionProps)(props.calendar);
      var calendarEvents = (0, _propsUtil.getEvents)(props.calendar);
      var value = this.sValue;
      var defaultValue = value;
      var extraProps = {
        ref: this.saveCalendarRef,
        defaultValue: defaultValue || calendarProps.defaultValue,
        selectedValue: value,
        onKeydown: this.onCalendarKeyDown,
        onOk: (0, _createChainedFunction.default)(calendarEvents.onOk, this.onCalendarOk),
        onSelect: (0, _createChainedFunction.default)(calendarEvents.onSelect, this.onCalendarSelect),
        onClear: (0, _createChainedFunction.default)(calendarEvents.onClear, this.onCalendarClear),
        onBlur: (0, _createChainedFunction.default)(calendarEvents.onBlur, this.onCalendarBlur)
      };
      return (0, _vnode.cloneElement)(props.calendar, extraProps);
    },
    setOpen: function setOpen(open, callback) {
      if (this.sOpen !== open) {
        if (!(0, _propsUtil.hasProp)(this, 'open')) {
          this.setState({
            sOpen: open
          }, callback);
        }

        this.__emit('openChange', open);
      }
    },
    openCalendar: function openCalendar(callback) {
      this.setOpen(true, callback);
    },
    closeCalendar: function closeCalendar(callback) {
      this.setOpen(false, callback);
    },
    focus: function focus() {
      if (!this.sOpen) {
        (0, _propsUtil.findDOMNode)(this).focus();
      }
    },
    focusCalendar: function focusCalendar() {
      if (this.sOpen && !!this.calendarInstance) {
        this.calendarInstance.focus();
      }
    }
  },
  render: function render() {
    var _this = this;

    var props = (0, _propsUtil.getOptionProps)(this);
    var prefixCls = props.prefixCls,
        placement = props.placement,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        dropdownClassName = props.dropdownClassName,
        transitionName = props.transitionName;
    var sValue = this.sValue,
        sOpen = this.sOpen;
    var childrenState = {
      value: sValue,
      open: sOpen
    };
    var children = this.$slots.default(childrenState);

    if (this.sOpen || !this.calendarElement) {
      this.calendarElement = this.getCalendarElement();
    }

    return (0, _vue.createVNode)(_vcTrigger.default, {
      "popupAlign": align,
      "builtinPlacements": _placements.default,
      "popupPlacement": placement,
      "action": disabled && !sOpen ? [] : ['click'],
      "destroyPopupOnHide": true,
      "getPopupContainer": getCalendarContainer,
      "popupStyle": this.$attrs.style || {},
      "popupAnimation": animation,
      "popupTransitionName": transitionName,
      "popupVisible": sOpen,
      "onPopupVisibleChange": this.onVisibleChange,
      "prefixCls": prefixCls,
      "popupClassName": dropdownClassName,
      "popup": this.calendarElement
    }, {
      default: function _default() {
        return [(0, _vnode.cloneElement)(children, {
          onKeydown: _this.onKeyDown
        })];
      }
    });
  }
});
var _default2 = Picker;
exports.default = _default2;