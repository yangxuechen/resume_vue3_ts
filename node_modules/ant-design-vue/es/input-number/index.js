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

import { defineComponent, inject, nextTick, onMounted, ref } from 'vue';
import PropTypes from '../_util/vue-types';
import { getOptionProps } from '../_util/props-util';
import classNames from '../_util/classNames';
import UpOutlined from '@ant-design/icons-vue/UpOutlined';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import VcInputNumber from '../vc-input-number/src';
import { defaultConfigProvider } from '../config-provider';
import { tuple, withInstall } from '../_util/type';
var inputNumberProps = {
  prefixCls: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).def(1),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.looseBool,
  size: PropTypes.oneOf(tuple('large', 'small', 'default')),
  formatter: PropTypes.func,
  parser: PropTypes.func,
  decimalSeparator: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  precision: PropTypes.number,
  autofocus: PropTypes.looseBool,
  onPressEnter: {
    type: Function
  },
  onChange: Function
};
var InputNumber = defineComponent({
  name: 'AInputNumber',
  inheritAttrs: false,
  props: inputNumberProps,
  setup: function setup(props) {
    var inputNumberRef = ref(null);

    var focus = function focus() {
      inputNumberRef.value.focus();
    };

    var blur = function blur() {
      inputNumberRef.value.blur();
    };

    onMounted(function () {
      nextTick(function () {
        if (process.env.NODE_ENV === 'test') {
          if (props.autofocus && !props.disabled) {
            focus();
          }
        }
      });
    });
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      inputNumberRef: inputNumberRef,
      focus: focus,
      blur: blur
    };
  },
  render: function render() {
    var _classNames;

    var _a = _extends(_extends({}, getOptionProps(this)), this.$attrs),
        customizePrefixCls = _a.prefixCls,
        size = _a.size,
        className = _a.class,
        others = __rest(_a, ["prefixCls", "size", "class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    var inputNumberClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames), className);

    var upIcon = _createVNode(UpOutlined, {
      "class": "".concat(prefixCls, "-handler-up-inner")
    }, null);

    var downIcon = _createVNode(DownOutlined, {
      "class": "".concat(prefixCls, "-handler-down-inner")
    }, null);

    var vcInputNumberProps = _extends(_extends({
      prefixCls: prefixCls,
      upHandler: upIcon,
      downHandler: downIcon
    }, others), {
      class: inputNumberClass
    });

    return _createVNode(VcInputNumber, _objectSpread(_objectSpread({}, vcInputNumberProps), {}, {
      "ref": "inputNumberRef"
    }), null);
  }
});
export default withInstall(InputNumber);