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
import Radio, { radioProps } from './Radio';
import { getOptionProps, getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
export default defineComponent({
  name: 'ARadioButton',
  props: _extends({}, radioProps),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      radioGroupContext: inject('radioGroupContext', {})
    };
  },
  render: function render() {
    var _this = this;

    var props = getOptionProps(this);

    var customizePrefixCls = props.prefixCls,
        otherProps = __rest(props, ["prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

    var rProps = _extends({
      prefixCls: prefixCls
    }, otherProps);

    if (this.radioGroupContext) {
      rProps.onChange = this.radioGroupContext.onRadioChange;
      rProps.checked = props.value === this.radioGroupContext.stateValue;
      rProps.disabled = props.disabled || this.radioGroupContext.disabled;
    }

    return _createVNode(Radio, rProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});