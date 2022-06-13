"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPrefixSuffix = hasPrefixSuffix;
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames5 = _interopRequireDefault(require("../_util/classNames"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _Input = require("./Input");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vnode = require("../_util/vnode");

var _propsUtil = require("../_util/props-util");

var _type = require("../_util/type");

function hasPrefixSuffix(instance) {
  return !!((0, _propsUtil.getComponent)(instance, 'prefix') || (0, _propsUtil.getComponent)(instance, 'suffix') || instance.$props.allowClear);
}

var ClearableInputType = ['text', 'input'];
var ClearableLabeledInput = (0, _vue.defineComponent)({
  name: 'ClearableLabeledInput',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    inputType: _vueTypes.default.oneOf((0, _type.tuple)('text', 'input')),
    value: _vueTypes.default.any,
    defaultValue: _vueTypes.default.any,
    allowClear: _vueTypes.default.looseBool,
    element: _vueTypes.default.VNodeChild,
    handleReset: _vueTypes.default.func,
    disabled: _vueTypes.default.looseBool,
    size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'large', 'default')),
    suffix: _vueTypes.default.VNodeChild,
    prefix: _vueTypes.default.VNodeChild,
    addonBefore: _vueTypes.default.VNodeChild,
    addonAfter: _vueTypes.default.VNodeChild,
    readonly: _vueTypes.default.looseBool,
    isFocused: _vueTypes.default.looseBool
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
      return (0, _vue.createVNode)(_CloseCircleFilled.default, {
        "onClick": handleReset,
        "class": (0, _classNames5.default)(className, (0, _defineProperty2.default)({}, "".concat(className, "-hidden"), !showClearIcon)),
        "role": "button"
      }, null);
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var _this$$props2 = this.$props,
          suffix = _this$$props2.suffix,
          allowClear = _this$$props2.allowClear;

      if (suffix || allowClear) {
        return (0, _vue.createVNode)("span", {
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
        return (0, _vnode.cloneElement)(element, {
          value: props.value
        });
      }

      var prefix = props.prefix ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-prefix")
      }, [props.prefix]) : null;
      var affixWrapperCls = (0, _classNames5.default)((_a = this.$attrs) === null || _a === void 0 ? void 0 : _a.class, "".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), props.isFocused), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props.disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), props.size === 'small'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), props.size === 'large'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), props.suffix && props.allowClear && this.$props.value), _classNames2));
      return (0, _vue.createVNode)("span", {
        "class": affixWrapperCls,
        "style": style
      }, [prefix, (0, _vnode.cloneElement)(element, {
        style: null,
        value: props.value,
        class: (0, _Input.getInputClassName)(prefixCls, props.size, props.disabled)
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
      var addonBeforeNode = addonBefore ? (0, _vue.createVNode)("span", {
        "class": addonClassName
      }, [addonBefore]) : null;
      var addonAfterNode = addonAfter ? (0, _vue.createVNode)("span", {
        "class": addonClassName
      }, [addonAfter]) : null;
      var mergedWrapperClassName = (0, _classNames5.default)("".concat(prefixCls, "-wrapper"), (0, _defineProperty2.default)({}, wrapperClassName, addonBefore || addonAfter));
      var mergedGroupClassName = (0, _classNames5.default)(className, "".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _classNames4)); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return (0, _vue.createVNode)("span", {
        "class": mergedGroupClassName,
        "style": style
      }, [(0, _vue.createVNode)("span", {
        "class": mergedWrapperClassName
      }, [addonBeforeNode, (0, _vnode.cloneElement)(labeledElement, {
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
        return (0, _vnode.cloneElement)(element, {
          value: value
        });
      }

      var affixWrapperCls = (0, _classNames5.default)(className, "".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"));
      return (0, _vue.createVNode)("span", {
        "class": affixWrapperCls,
        "style": style
      }, [(0, _vnode.cloneElement)(element, {
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
var _default = ClearableLabeledInput;
exports.default = _default;