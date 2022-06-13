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

import classNames from '../_util/classNames';
import { getComponent, getOptionProps } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import Input from './Input';
import EyeOutlined from '@ant-design/icons-vue/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons-vue/EyeInvisibleOutlined';
import inputProps from './inputProps';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseover'
};
export default defineComponent({
  name: 'AInputPassword',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps), {
    prefixCls: PropTypes.string,
    inputPrefixCls: PropTypes.string,
    action: PropTypes.string.def('click'),
    visibilityToggle: PropTypes.looseBool.def(true),
    iconRender: PropTypes.func.def(function (visible) {
      return visible ? _createVNode(EyeOutlined, null, null) : _createVNode(EyeInvisibleOutlined, null, null);
    })
  }),
  setup: function setup() {
    return {
      input: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }

      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon(prefixCls) {
      var _iconProps;

      var action = this.$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconRender = this.$slots.iconRender || this.$props.iconRender;
      var icon = iconRender(this.visible);
      var iconProps = (_iconProps = {}, _defineProperty(_iconProps, iconTrigger, this.onVisibleChange), _defineProperty(_iconProps, "onMousedown", function onMousedown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), _defineProperty(_iconProps, "onMouseup", function onMouseup(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/pull/23633/files
        e.preventDefault();
      }), _defineProperty(_iconProps, "class", "".concat(prefixCls, "-icon")), _defineProperty(_iconProps, "key", 'passwordIcon'), _iconProps);
      return cloneElement(icon, iconProps);
    }
  },
  render: function render() {
    var _a = getOptionProps(this),
        customizePrefixCls = _a.prefixCls,
        customizeInputPrefixCls = _a.inputPrefixCls,
        size = _a.size,
        suffix = _a.suffix,
        action = _a.action,
        visibilityToggle = _a.visibilityToggle,
        iconRender = _a.iconRender,
        restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]);

    var className = this.$attrs.class;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && this.getIcon(prefixCls);
    var inputClassName = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));

    var inputProps = _extends(_extends(_extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: suffixIcon,
      prefix: getComponent(this, 'prefix'),
      addonAfter: getComponent(this, 'addonAfter'),
      addonBefore: getComponent(this, 'addonBefore')
    }), this.$attrs), {
      type: this.visible ? 'text' : 'password',
      class: inputClassName,
      ref: 'input'
    });

    return _createVNode(Input, _objectSpread(_objectSpread({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});