import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import VcCheckbox from '../vc-checkbox';
import classNames from '../_util/classNames';
import { getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
export var radioProps = {
  prefixCls: PropTypes.string,
  defaultChecked: PropTypes.looseBool,
  checked: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  isGroup: PropTypes.looseBool,
  value: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  autofocus: PropTypes.looseBool,
  type: PropTypes.string.def('radio'),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default defineComponent({
  name: 'ARadio',
  props: radioProps,
  emits: ['update:checked', 'update:value', 'change', 'blur', 'focus'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      radioGroupContext: inject('radioGroupContext', null)
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
    var props = getOptionProps(this);

    var customizePrefixCls = props.prefixCls,
        restProps = __rest(props, ["prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);

    var rProps = _extends({
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

    var wrapperClassString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), rProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), rProps.disabled), _classNames));
    return _createVNode("label", {
      "class": wrapperClassString
    }, [_createVNode(VcCheckbox, _objectSpread(_objectSpread({}, rProps), {}, {
      "ref": "vcCheckbox"
    }), null), $slots.default && _createVNode("span", null, [$slots.default()])]);
  }
});