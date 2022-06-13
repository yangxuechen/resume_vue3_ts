"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNowByCurrentStateValue = getNowByCurrentStateValue;
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _moment = _interopRequireDefault(require("moment"));

var _index = require("../util/index");

function noop() {}

function getNowByCurrentStateValue(value) {
  var ret;

  if (value) {
    ret = (0, _index.getTodayTime)(value);
  } else {
    ret = (0, _moment.default)();
  }

  return ret;
}

function isMoment(value) {
  if (Array.isArray(value)) {
    return value.length === 0 || value.findIndex(function (val) {
      return val === undefined || _moment.default.isMoment(val);
    }) !== -1;
  } else {
    return value === undefined || _moment.default.isMoment(value);
  }
}

var MomentType = _vueTypes.default.custom(isMoment);

var CalendarMixin = {
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  name: 'CalendarMixinWrapper',
  props: {
    value: MomentType,
    defaultValue: MomentType
  },
  data: function data() {
    if (this.onKeyDown === undefined) {
      this.onKeyDown = noop;
    }

    if (this.onBlur === undefined) {
      this.onBlur = noop;
    }

    var props = this.$props;
    var sValue = props.value || props.defaultValue || getNowByCurrentStateValue();
    return {
      sValue: sValue,
      sSelectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  watch: {
    value: function value(val) {
      var sValue = val || this.defaultValue || getNowByCurrentStateValue(this.sValue);
      this.setState({
        sValue: sValue
      });
    },
    selectedValue: function selectedValue(val) {
      this.setState({
        sSelectedValue: val
      });
    }
  },
  methods: {
    onSelect: function onSelect(value, cause) {
      if (value) {
        this.setValue(value);
      }

      this.setSelectedValue(value, cause);
    },
    renderRoot: function renderRoot(newProps) {
      var _className;

      var props = (0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs);
      var prefixCls = props.prefixCls;
      var className = (_className = {}, (0, _defineProperty2.default)(_className, prefixCls, 1), (0, _defineProperty2.default)(_className, "".concat(prefixCls, "-hidden"), !props.visible), (0, _defineProperty2.default)(_className, props.class, !!props.class), (0, _defineProperty2.default)(_className, newProps.class, !!newProps.class), _className);
      return (0, _vue.createVNode)("div", {
        "ref": this.saveRoot,
        "class": className,
        "tabindex": "0",
        "onKeydown": this.onKeyDown || noop,
        "onBlur": this.onBlur || noop
      }, [newProps.children]);
    },
    setSelectedValue: function setSelectedValue(selectedValue, cause) {
      // if (this.isAllowedDate(selectedValue)) {
      if (!(0, _propsUtil.hasProp)(this, 'selectedValue')) {
        this.setState({
          sSelectedValue: selectedValue
        });
      }

      this.__emit('select', selectedValue, cause); // }

    },
    setValue: function setValue(value) {
      var originalValue = this.sValue;

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
        this.__emit('change', value);
      }
    },
    isAllowedDate: function isAllowedDate(value) {
      var disabledDate = this.disabledDate;
      var disabledTime = this.disabledTime;
      return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
    }
  }
};
var _default = CalendarMixin;
exports.default = _default;