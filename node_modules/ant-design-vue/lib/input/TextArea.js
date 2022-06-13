"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));

var _ResizableTextArea = _interopRequireDefault(require("./ResizableTextArea"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _Input = require("./Input");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextAreaProps = (0, _extends2.default)((0, _extends2.default)({}, _inputProps.default), {
  autosize: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Object, Boolean])),
  autoSize: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([Object, Boolean])),
  showCount: _vueTypes.default.looseBool,
  onCompositionstart: _vueTypes.default.func,
  onCompositionend: _vueTypes.default.func
});

var _default = (0, _vue.defineComponent)({
  name: 'ATextarea',
  inheritAttrs: false,
  props: (0, _extends2.default)({}, TextAreaProps),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
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

    (0, _vue.nextTick)(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }
    });
  },
  methods: {
    setValue: function setValue(value, callback) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.stateValue = value;
      } else {
        this.$forceUpdate();
      }

      (0, _vue.nextTick)(function () {
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
      (0, _Input.resolveOnChange)(this.resizableTextArea.textArea, e, this.triggerChange);
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
      (0, _Input.resolveOnChange)(this.resizableTextArea.textArea, e, this.triggerChange);
    },
    renderTextArea: function renderTextArea(prefixCls) {
      var props = (0, _propsUtil.getOptionProps)(this);
      var _this$$attrs = this.$attrs,
          style = _this$$attrs.style,
          customClass = _this$$attrs.class;
      var resizeProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs), {
        style: !props.showCount && style,
        class: !props.showCount && customClass,
        showCount: null,
        prefixCls: prefixCls,
        onInput: this.handleChange,
        onChange: this.handleChange,
        onKeydown: this.handleKeyDown
      });
      return (0, _vue.createVNode)(_ResizableTextArea.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, resizeProps), {}, {
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
    var value = (0, _Input.fixControlledValue)(stateValue); // Max length value

    var hasMaxlength = Number(maxlength) > 0;
    value = hasMaxlength ? value.slice(0, maxlength) : value;
    var props = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs), {
      prefixCls: prefixCls,
      inputType: 'text',
      element: this.renderTextArea(prefixCls),
      handleReset: this.handleReset
    });
    var textareaNode = (0, _vue.createVNode)(_ClearableLabeledInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      "value": value,
      "ref": this.saveClearableInput
    }), null);

    if (showCount) {
      var valueLength = (0, _toConsumableArray2.default)(value).length;
      var dataCount = "".concat(valueLength).concat(hasMaxlength ? " / ".concat(maxlength) : '');

      var _textareaNode = function () {
        return textareaNode;
      }();

      textareaNode = (0, _vue.createVNode)("div", {
        "class": (0, _classNames.default)("".concat(prefixCls, "-textarea"), "".concat(prefixCls, "-textarea-show-count"), customClass),
        "style": style,
        "data-count": dataCount
      }, [textareaNode]);
    }

    return textareaNode;
  }
});

exports.default = _default;