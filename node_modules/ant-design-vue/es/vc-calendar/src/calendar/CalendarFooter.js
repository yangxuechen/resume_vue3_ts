import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getOptionProps, findDOMNode } from '../../../_util/props-util';
import TodayButton from './TodayButton';
import OkButton from './OkButton';
import TimePickerButton from './TimePickerButton';
var CalendarFooter = {
  name: 'CalendarFooter',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    showDateInput: PropTypes.looseBool,
    disabledTime: PropTypes.any,
    timePicker: PropTypes.any,
    selectedValue: PropTypes.any,
    showOk: PropTypes.looseBool,
    // onSelect: PropTypes.func,
    value: PropTypes.object,
    renderFooter: PropTypes.func,
    defaultValue: PropTypes.object,
    locale: PropTypes.object,
    showToday: PropTypes.looseBool,
    disabledDate: PropTypes.func,
    showTimePicker: PropTypes.looseBool,
    okDisabled: PropTypes.looseBool,
    mode: PropTypes.string
  },
  methods: {
    onSelect: function onSelect(value) {
      this.__emit('select', value);
    },
    getRootDOMNode: function getRootDOMNode() {
      return findDOMNode(this);
    }
  },
  render: function render() {
    var props = getOptionProps(this);
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter,
        showToday = props.showToday,
        mode = props.mode;
    var footerEl = null;
    var extraFooter = renderFooter && renderFooter(mode);

    if (showToday || timePicker || extraFooter) {
      var _cls;

      var btnProps = _extends(_extends(_extends({}, props), this.$attrs), {
        value: value
      });

      var nowEl = null;

      if (showToday) {
        nowEl = _createVNode(TodayButton, _objectSpread({
          "key": "todayButton"
        }, btnProps), null);
      }

      delete btnProps.value;
      var okBtn = null;

      if (showOk === true || showOk !== false && !!timePicker) {
        okBtn = _createVNode(OkButton, _objectSpread({
          "key": "okButton"
        }, btnProps), null);
      }

      var timePickerBtn = null;

      if (timePicker) {
        timePickerBtn = _createVNode(TimePickerButton, _objectSpread({
          "key": "timePickerButton"
        }, btnProps), null);
      }

      var footerBtn;

      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = _createVNode("span", {
          "class": "".concat(prefixCls, "-footer-btn")
        }, [extraFooter, nowEl, timePickerBtn, okBtn]);
      }

      var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-footer"), true), _defineProperty(_cls, "".concat(prefixCls, "-footer-show-ok"), !!okBtn), _cls);
      footerEl = _createVNode("div", {
        "class": cls
      }, [footerBtn]);
    }

    return footerEl;
  }
};
export default CalendarFooter;