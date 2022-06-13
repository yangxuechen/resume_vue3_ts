import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import { getInputClassName } from './Input';
import PropTypes from '../_util/vue-types';
import { cloneElement } from '../_util/vnode';
import { getComponent } from '../_util/props-util';
import { defineComponent } from 'vue';
import { tuple } from '../_util/type';
export function hasPrefixSuffix(instance) {
  return !!(getComponent(instance, 'prefix') || getComponent(instance, 'suffix') || instance.$props.allowClear);
}
var ClearableInputType = ['text', 'input'];
var ClearableLabeledInput = defineComponent({
  name: 'ClearableLabeledInput',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    inputType: PropTypes.oneOf(tuple('text', 'input')),
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    allowClear: PropTypes.looseBool,
    element: PropTypes.VNodeChild,
    handleReset: PropTypes.func,
    disabled: PropTypes.looseBool,
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    suffix: PropTypes.VNodeChild,
    prefix: PropTypes.VNodeChild,
    addonBefore: PropTypes.VNodeChild,
    addonAfter: PropTypes.VNodeChild,
    readonly: PropTypes.looseBool,
    isFocused: PropTypes.looseBool
  },
  methods: {
    renderClearIcon: function renderClearIcon(prefixCls) {
      var _this$$props = this.$props,
          allowClear = _this$$props.allowClear,
          value = _this$$props.value,
          disabled = _this$$props.disabled,
          readonly = _this$$props.readonly,
          inputType = _this$$props.inputType,
          handleReset = _this$$props.handleReset;

      if (!allowClear) {
        return null;
      }

      var showClearIcon = !disabled && !readonly && value !== undefined && value !== null && value !== '';
      var className = inputType === ClearableInputType[0] ? "".concat(prefixCls, "-textarea-clear-icon") : "".concat(prefixCls, "-clear-icon");
      return _createVNode(CloseCircleFilled, {
        "onClick": handleReset,
        "class": classNames(className, _defineProperty({}, "".concat(className, "-hidden"), !showClearIcon)),
        "role": "button"
      }, null);
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var _this$$props2 = this.$props,
          suffix = _this$$props2.suffix,
          allowClear = _this$$props2.allowClear;

      if (suffix || allowClear) {
        return _createVNode("span", {
          "class": "".concat(prefixCls, "-suffix")
        }, [this.renderClearIcon(prefixCls), suffix]);
      }

      return null;
    },
    renderLabeledIcon: function renderLabeledIcon(prefixCls, element) {
      var _classNames2;

      var _a;

      var props = this.$props;
      var style = this.$attrs.style;
      var suffix = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(this)) {
        return cloneElement(element, {
          value: props.value
        });
      }

      var prefix = props.prefix ? _createVNode("span", {
        "class": "".concat(prefixCls, "-prefix")
      }, [props.prefix]) : null;
      var affixWrapperCls = classNames((_a = this.$attrs) === null || _a === void 0 ? void 0 : _a.class, "".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), props.isFocused), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props.disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), props.suffix && props.allowClear && this.$props.value), _classNames2));
      return _createVNode("span", {
        "class": affixWrapperCls,
        "style": style
      }, [prefix, cloneElement(element, {
        style: null,
        value: props.value,
        class: getInputClassName(prefixCls, props.size, props.disabled)
      }), suffix]);
    },
    renderInputWithLabel: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames4;

      var _this$$props3 = this.$props,
          addonBefore = _this$$props3.addonBefore,
          addonAfter = _this$$props3.addonAfter,
          size = _this$$props3.size;
      var _this$$attrs = this.$attrs,
          style = _this$$attrs.style,
          className = _this$$attrs.class; // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return labeledElement;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? _createVNode("span", {
        "class": addonClassName
      }, [addonBefore]) : null;
      var addonAfterNode = addonAfter ? _createVNode("span", {
        "class": addonClassName
      }, [addonAfter]) : null;
      var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), _defineProperty({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = classNames(className, "".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _classNames4)); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return _createVNode("span", {
        "class": mergedGroupClassName,
        "style": style
      }, [_createVNode("span", {
        "class": mergedWrapperClassName
      }, [addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode])]);
    },
    renderTextAreaWithClearIcon: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _this$$props4 = this.$props,
          value = _this$$props4.value,
          allowClear = _this$$props4.allowClear;
      var _this$$attrs2 = this.$attrs,
          style = _this$$attrs2.style,
          className = _this$$attrs2.class;

      if (!allowClear) {
        return cloneElement(element, {
          value: value
        });
      }

      var affixWrapperCls = classNames(className, "".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"));
      return _createVNode("span", {
        "class": affixWrapperCls,
        "style": style
      }, [cloneElement(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls)]);
    },
    renderClearableLabeledInput: function renderClearableLabeledInput() {
      var _this$$props5 = this.$props,
          prefixCls = _this$$props5.prefixCls,
          inputType = _this$$props5.inputType,
          element = _this$$props5.element;

      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }

      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  },
  render: function render() {
    return this.renderClearableLabeledInput();
  }
});
export default ClearableLabeledInput;