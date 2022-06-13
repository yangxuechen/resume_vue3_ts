import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getOptionProps, hasProp, getEvents, findDOMNode } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
import createChainedFunction from '../../_util/createChainedFunction';
import KeyCode from '../../_util/KeyCode';
import placements from './picker/placements';
import Trigger from '../../vc-trigger';
import moment from 'moment';
import isNil from 'lodash-es/isNil';
import { defineComponent } from 'vue';
var TimeType = {
  validator: function validator(value) {
    if (Array.isArray(value)) {
      return value.length === 0 || value.findIndex(function (val) {
        return !isNil(val) && !moment.isMoment(val);
      }) === -1;
    } else {
      return isNil(value) || moment.isMoment(value);
    }
  }
};

function refFn(field, component) {
  this[field] = component;
}

var Picker = defineComponent({
  name: 'Picker',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    animation: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    disabled: PropTypes.looseBool,
    transitionName: PropTypes.string,
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
    // onChange: PropTypes.func,
    // onOpenChange: PropTypes.func,
    getCalendarContainer: PropTypes.func,
    calendar: PropTypes.any,
    open: PropTypes.looseBool,
    defaultOpen: PropTypes.looseBool.def(false),
    prefixCls: PropTypes.string.def('rc-calendar-picker'),
    placement: PropTypes.any.def('bottomLeft'),
    value: TimeType,
    defaultValue: TimeType,
    align: PropTypes.object.def(function () {
      return {};
    }),
    dropdownClassName: PropTypes.string,
    dateRender: PropTypes.func,
    children: PropTypes.func
  },
  data: function data() {
    var props = this.$props;
    this.calendarElement = null;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    var open;

    if (hasProp(this, 'open')) {
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
      if (event.keyCode === KeyCode.ESC) {
        event.stopPropagation();
        this.closeCalendar(this.focus);
      }
    },
    onCalendarSelect: function onCalendarSelect(value) {
      var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var props = this.$props;

      if (!hasProp(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      var calendarProps = getOptionProps(props.calendar);

      if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !calendarProps.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
        this.closeCalendar(this.focus);
      }

      this.__emit('change', value);
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.sOpen && (event.keyCode === KeyCode.DOWN || event.keyCode === KeyCode.ENTER)) {
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
      var calendarProps = getOptionProps(props.calendar);
      var calendarEvents = getEvents(props.calendar);
      var value = this.sValue;
      var defaultValue = value;
      var extraProps = {
        ref: this.saveCalendarRef,
        defaultValue: defaultValue || calendarProps.defaultValue,
        selectedValue: value,
        onKeydown: this.onCalendarKeyDown,
        onOk: createChainedFunction(calendarEvents.onOk, this.onCalendarOk),
        onSelect: createChainedFunction(calendarEvents.onSelect, this.onCalendarSelect),
        onClear: createChainedFunction(calendarEvents.onClear, this.onCalendarClear),
        onBlur: createChainedFunction(calendarEvents.onBlur, this.onCalendarBlur)
      };
      return cloneElement(props.calendar, extraProps);
    },
    setOpen: function setOpen(open, callback) {
      if (this.sOpen !== open) {
        if (!hasProp(this, 'open')) {
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
        findDOMNode(this).focus();
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

    var props = getOptionProps(this);
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

    return _createVNode(Trigger, {
      "popupAlign": align,
      "builtinPlacements": placements,
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
        return [cloneElement(children, {
          onKeydown: _this.onKeyDown
        })];
      }
    });
  }
});
export default Picker;