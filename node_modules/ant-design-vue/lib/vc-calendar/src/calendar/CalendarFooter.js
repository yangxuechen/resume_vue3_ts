"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _TodayButton = _interopRequireDefault(require("./TodayButton"));

var _OkButton = _interopRequireDefault(require("./OkButton"));

var _TimePickerButton = _interopRequireDefault(require("./TimePickerButton"));

var CalendarFooter = {
  name: 'CalendarFooter',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    prefixCls: _vueTypes.default.string,
    showDateInput: _vueTypes.default.looseBool,
    disabledTime: _vueTypes.default.any,
    timePicker: _vueTypes.default.any,
    selectedValue: _vueTypes.default.any,
    showOk: _vueTypes.default.looseBool,
    // onSelect: PropTypes.func,
    value: _vueTypes.default.object,
    renderFooter: _vueTypes.default.func,
    defaultValue: _vueTypes.default.object,
    locale: _vueTypes.default.object,
    showToday: _vueTypes.default.looseBool,
    disabledDate: _vueTypes.default.func,
    showTimePicker: _vueTypes.default.looseBool,
    okDisabled: _vueTypes.default.looseBool,
    mode: _vueTypes.default.string
  },
  methods: {
    onSelect: function onSelect(value) {
      this.__emit('select', value);
    },
    getRootDOMNode: function getRootDOMNode() {
      return (0, _propsUtil.findDOMNode)(this);
    }
  },
  render: function render() {
    var props = (0, _propsUtil.getOptionProps)(this);
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

      var btnProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs), {
        value: value
      });
      var nowEl = null;

      if (showToday) {
        nowEl = (0, _vue.createVNode)(_TodayButton.default, (0, _objectSpread2.default)({
          "key": "todayButton"
        }, btnProps), null);
      }

      delete btnProps.value;
      var okBtn = null;

      if (showOk === true || showOk !== false && !!timePicker) {
        okBtn = (0, _vue.createVNode)(_OkButton.default, (0, _objectSpread2.default)({
          "key": "okButton"
        }, btnProps), null);
      }

      var timePickerBtn = null;

      if (timePicker) {
        timePickerBtn = (0, _vue.createVNode)(_TimePickerButton.default, (0, _objectSpread2.default)({
          "key": "timePickerButton"
        }, btnProps), null);
      }

      var footerBtn;

      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-footer-btn")
        }, [extraFooter, nowEl, timePickerBtn, okBtn]);
      }

      var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-footer"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-footer-show-ok"), !!okBtn), _cls);
      footerEl = (0, _vue.createVNode)("div", {
        "class": cls
      }, [footerBtn]);
    }

    return footerEl;
  }
};
var _default = CalendarFooter;
exports.default = _default;