import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, nextTick } from 'vue';
import ClearableLabeledInput from './ClearableLabeledInput';
import ResizableTextArea from './ResizableTextArea';
import inputProps from './inputProps';
import { hasProp, getOptionProps } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { fixControlledValue, resolveOnChange } from './Input';
import classNames from '../_util/classNames';
import PropTypes, { withUndefined } from '../_util/vue-types';

var TextAreaProps = _extends(_extends({}, inputProps), {
  autosize: withUndefined(PropTypes.oneOfType([Object, Boolean])),
  autoSize: withUndefined(PropTypes.oneOfType([Object, Boolean])),
  showCount: PropTypes.looseBool,
  onCompositionstart: PropTypes.func,
  onCompositionend: PropTypes.func
});

export default defineComponent({
  name: 'ATextarea',
  inheritAttrs: false,
  props: _extends({}, TextAreaProps),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      resizableTextArea: null,
      clearableInput: null
    };
  },
  data: function data() {
    var value = typeof this.value === 'undefined' ? this.defaultValue : this.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value
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
    });
  },
  methods: {
    setValue: function setValue(value, callback) {
      if (!hasProp(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      nextTick(function () {
        callback && callback();
      });
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }

      this.$emit('keydown', e);
    },
    triggerChange: function triggerChange(e) {
      this.$emit('update:value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleChange: function handleChange(e) {
      var _this2 = this;

      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing,
          isComposing = _e$target.isComposing;
      if ((isComposing || composing) && this.lazy || this.stateValue === value) return;
      this.setValue(e.target.value, function () {
        var _a;

        (_a = _this2.resizableTextArea) === null || _a === void 0 ? void 0 : _a.resizeTextarea();
      });
      resolveOnChange(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    focus: function focus() {
      this.resizableTextArea.textArea.focus();
    },
    blur: function blur() {
      this.resizableTextArea.textArea.blur();
    },
    saveTextArea: function saveTextArea(resizableTextArea) {
      this.resizableTextArea = resizableTextArea;
    },
    saveClearableInput: function saveClearableInput(clearableInput) {
      this.clearableInput = clearableInput;
    },
    handleReset: function handleReset(e) {
      var _this3 = this;

      this.setValue('', function () {
        _this3.resizableTextArea.renderTextArea();

        _this3.focus();
      });
      resolveOnChange(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    renderTextArea: function renderTextArea(prefixCls) {
      var props = getOptionProps(this);
      var _this$$attrs = this.$attrs,
          style = _this$$attrs.style,
          customClass = _this$$attrs.class;

      var resizeProps = _extends(_extends(_extends({}, props), this.$attrs), {
        style: !props.showCount && style,
        class: !props.showCount && customClass,
        showCount: null,
        prefixCls: prefixCls,
        onInput: this.handleChange,
        onChange: this.handleChange,
        onKeydown: this.handleKeyDown
      });

      return _createVNode(ResizableTextArea, _objectSpread(_objectSpread({}, resizeProps), {}, {
        "ref": this.saveTextArea
      }), null);
    }
  },
  render: function render() {
    var stateValue = this.stateValue,
        customizePrefixCls = this.prefixCls,
        maxlength = this.maxlength,
        showCount = this.showCount;
    var _this$$attrs2 = this.$attrs,
        style = _this$$attrs2.style,
        customClass = _this$$attrs2.class;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var value = fixControlledValue(stateValue); // Max length value

    var hasMaxlength = Number(maxlength) > 0;
    value = hasMaxlength ? value.slice(0, maxlength) : value;

    var props = _extends(_extends(_extends({}, getOptionProps(this)), this.$attrs), {
      prefixCls: prefixCls,
      inputType: 'text',
      element: this.renderTextArea(prefixCls),
      handleReset: this.handleReset
    });

    var textareaNode = _createVNode(ClearableLabeledInput, _objectSpread(_objectSpread({}, props), {}, {
      "value": value,
      "ref": this.saveClearableInput
    }), null);

    if (showCount) {
      var valueLength = _toConsumableArray(value).length;

      var dataCount = "".concat(valueLength).concat(hasMaxlength ? " / ".concat(maxlength) : '');

      var _textareaNode = function () {
        return textareaNode;
      }();

      textareaNode = _createVNode("div", {
        "class": classNames("".concat(prefixCls, "-textarea"), "".concat(prefixCls, "-textarea-show-count"), customClass),
        "style": style,
        "data-count": dataCount
      }, [textareaNode]);
    }

    return textareaNode;
  }
});