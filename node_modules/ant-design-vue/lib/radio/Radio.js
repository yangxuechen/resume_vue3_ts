"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.radioProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcCheckbox = _interopRequireDefault(require("../vc-checkbox"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var radioProps = {
  prefixCls: _vueTypes.default.string,
  defaultChecked: _vueTypes.default.looseBool,
  checked: _vueTypes.default.looseBool,
  disabled: _vueTypes.default.looseBool,
  isGroup: _vueTypes.default.looseBool,
  value: _vueTypes.default.any,
  name: _vueTypes.default.string,
  id: _vueTypes.default.string,
  autofocus: _vueTypes.default.looseBool,
  type: _vueTypes.default.string.def('radio'),
  onChange: _vueTypes.default.func,
  onFocus: _vueTypes.default.func,
  onBlur: _vueTypes.default.func
};
exports.radioProps = radioProps;

var _default = (0, _vue.defineComponent)({
  name: 'ARadio',
  props: radioProps,
  emits: ['update:checked', 'update:value', 'change', 'blur', 'focus'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      radioGroupContext: (0, _vue.inject)('radioGroupContext', null)
    };
  },
  methods: {
    focus: function focus() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur() {
      this.$refs.vcCheckbox.blur();
    },
    handleChange: function handleChange(event) {
      var targetChecked = event.target.checked;
      this.$emit('update:checked', targetChecked);
      this.$emit('update:value', targetChecked);
      this.$emit('change', event);
    },
    onChange2: function onChange2(e) {
      this.$emit('change', e);

      if (this.radioGroupContext && this.radioGroupContext.onRadioChange) {
        this.radioGroupContext.onRadioChange(e);
      }
    }
  },
  render: function render() {
    var _classNames;

    var $slots = this.$slots,
        radioGroup = this.radioGroupContext;
    var props = (0, _propsUtil.getOptionProps)(this);

    var customizePrefixCls = props.prefixCls,
        restProps = __rest(props, ["prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var rProps = (0, _extends2.default)({
      prefixCls: prefixCls
    }, restProps);

    if (radioGroup) {
      rProps.name = radioGroup.name;
      rProps.onChange = this.onChange2;
      rProps.checked = props.value === radioGroup.stateValue;
      rProps.disabled = props.disabled || radioGroup.disabled;
    } else {
      rProps.onChange = this.handleChange;
    }

    var wrapperClassString = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper-checked"), rProps.checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), rProps.disabled), _classNames));
    return (0, _vue.createVNode)("label", {
      "class": wrapperClassString
    }, [(0, _vue.createVNode)(_vcCheckbox.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rProps), {}, {
      "ref": "vcCheckbox"
    }), null), $slots.default && (0, _vue.createVNode)("span", null, [$slots.default()])]);
  }
});

exports.default = _default;