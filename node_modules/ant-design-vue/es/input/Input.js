import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, nextTick, withDirectives } from 'vue';
import antInputDirective from '../_util/antInputDirective';
import classNames from '../_util/classNames';
import omit from 'omit.js';
import inputProps from './inputProps';
import { hasProp, getComponent, getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import ClearableLabeledInput from './ClearableLabeledInput';
export function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}
export function resolveOnChange(target, e, onChange) {
  if (onChange) {
    var event = e;

    if (e.type === 'click') {
      // click clear icon
      //event = Object.create(e);
      Object.defineProperty(event, 'target', {
        writable: true
      });
      Object.defineProperty(event, 'currentTarget', {
        writable: true
      });
      event.target = target;
      event.currentTarget = target;
      var originalInputValue = target.value; // change target ref value cause e.target.value should be '' when clear input

      target.value = '';
      onChange(event); // reset target ref value

      target.value = originalInputValue;
      return;
    }

    onChange(event);
  }
}
export function getInputClassName(prefixCls, size, disabled) {
  var _classNames;

  return classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
}
export default defineComponent({
  name: 'AInput',
  inheritAttrs: false,
  props: _extends({}, inputProps),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      removePasswordTimeout: undefined,
      input: null,
      clearableInput: null
    };
  },
  data: function data() {
    var props = this.$props;
    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value,
      isFocused: false
    };
  },
  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    nextTick(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }

      _this.clearPasswordValueAttribute();
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  },
  methods: {
    handleInputFocus: function handleInputFocus(e) {
      this.isFocused = true;
      this.onFocus && this.onFocus(e);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.isFocused = false;
      this.onBlur && this.onBlur(e);
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    select: function select() {
      this.input.select();
    },
    saveClearableInput: function saveClearableInput(input) {
      this.clearableInput = input;
    },
    saveInput: function saveInput(input) {
      this.input = input;
    },
    setValue: function setValue(value, callback) {
      if (this.stateValue === value) {
        return;
      }

      if (!hasProp(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      nextTick(function () {
        callback && callback();
      });
    },
    triggerChange: function triggerChange(e) {
      this.$emit('update:value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleReset: function handleReset(e) {
      var _this2 = this;

      this.setValue('', function () {
        _this2.focus();
      });
      resolveOnChange(this.input, e, this.triggerChange);
    },
    renderInput: function renderInput(prefixCls, _ref) {
      var addonBefore = _ref.addonBefore,
          addonAfter = _ref.addonAfter;
      var otherProps = omit(this.$props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', 'defaultValue', 'lazy', 'size', 'inputPrefixCls', 'loading']);
      var handleKeyDown = this.handleKeyDown,
          handleChange = this.handleChange,
          handleInputFocus = this.handleInputFocus,
          handleInputBlur = this.handleInputBlur,
          size = this.size,
          disabled = this.disabled,
          $attrs = this.$attrs;

      var inputProps = _extends(_extends(_extends({}, otherProps), $attrs), {
        onKeydown: handleKeyDown,
        class: classNames(getInputClassName(prefixCls, size, disabled), _defineProperty({}, $attrs.class, $attrs.class && !addonBefore && !addonAfter)),
        ref: this.saveInput,
        key: 'ant-input',
        onInput: handleChange,
        onChange: handleChange,
        onFocus: handleInputFocus,
        onBlur: handleInputBlur
      });

      if (!inputProps.autofocus) {
        delete inputProps.autofocus;
      }

      var inputNode = _createVNode("input", inputProps, null);

      return withDirectives(inputNode, [[antInputDirective]]);
    },
    clearPasswordValueAttribute: function clearPasswordValueAttribute() {
      var _this3 = this;

      // https://github.com/ant-design/ant-design/issues/20541
      this.removePasswordTimeout = setTimeout(function () {
        if (_this3.input && _this3.input.getAttribute && _this3.input.getAttribute('type') === 'password' && _this3.input.hasAttribute('value')) {
          _this3.input.removeAttribute('value');
        }
      });
    },
    handleChange: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing,
          isComposing = _e$target.isComposing; // https://github.com/vueComponent/ant-design-vue/issues/2203

      if ((isComposing || composing) && this.lazy || this.stateValue === value) return;
      this.setValue(value, this.clearPasswordValueAttribute);
      resolveOnChange(this.input, e, this.triggerChange);
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }

      this.$emit('keydown', e);
    }
  },
  render: function render() {
    var customizePrefixCls = this.$props.prefixCls;
    var _this$$data = this.$data,
        stateValue = _this$$data.stateValue,
        isFocused = _this$$data.isFocused;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var addonAfter = getComponent(this, 'addonAfter');
    var addonBefore = getComponent(this, 'addonBefore');
    var suffix = getComponent(this, 'suffix');
    var prefix = getComponent(this, 'prefix');

    var props = _extends(_extends(_extends({}, this.$attrs), getOptionProps(this)), {
      prefixCls: prefixCls,
      inputType: 'input',
      value: fixControlledValue(stateValue),
      element: this.renderInput(prefixCls, {
        addonAfter: addonAfter,
        addonBefore: addonBefore
      }),
      handleReset: this.handleReset,
      addonAfter: addonAfter,
      addonBefore: addonBefore,
      suffix: suffix,
      prefix: prefix,
      isFocused: isFocused
    });

    return _createVNode(ClearableLabeledInput, _objectSpread(_objectSpread({}, props), {}, {
      "ref": this.saveClearableInput
    }), null);
  }
});