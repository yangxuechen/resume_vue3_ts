"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _omit = _interopRequireDefault(require("omit.js"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _calculateNodeHeight = _interopRequireDefault(require("./calculateNodeHeight"));

var _raf = _interopRequireDefault(require("../_util/raf"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));

var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;
var TextAreaProps = (0, _extends2.default)((0, _extends2.default)({}, _inputProps.default), {
  autosize: {
    type: [Boolean, Object],
    default: undefined
  },
  autoSize: {
    type: [Boolean, Object],
    default: undefined
  },
  onResize: _vueTypes.default.func
});
var ResizableTextArea = (0, _vue.defineComponent)({
  name: 'ResizableTextArea',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: TextAreaProps,
  setup: function setup() {
    return {
      nextFrameActionId: undefined,
      textArea: null,
      resizeFrameId: undefined
    };
  },
  data: function data() {
    return {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS_NONE
    };
  },
  watch: {
    value: function value() {
      var _this = this;

      (0, _vue.nextTick)(function () {
        _this.resizeTextarea();
      });
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },
  beforeUnmount: function beforeUnmount() {
    _raf.default.cancel(this.nextFrameActionId);

    _raf.default.cancel(this.resizeFrameId);
  },
  methods: {
    saveTextArea: function saveTextArea(textArea) {
      this.textArea = textArea;
    },
    handleResize: function handleResize(size) {
      var resizeStatus = this.$data.resizeStatus;

      if (resizeStatus !== RESIZE_STATUS_NONE) {
        return;
      }

      this.$emit('resize', size);
    },
    resizeOnNextFrame: function resizeOnNextFrame() {
      _raf.default.cancel(this.nextFrameActionId);

      this.nextFrameActionId = (0, _raf.default)(this.resizeTextarea);
    },
    resizeTextarea: function resizeTextarea() {
      var _this2 = this;

      var autoSize = this.$props.autoSize || this.$props.autosize;

      if (!autoSize || !this.textArea) {
        return;
      }

      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;
      var textareaStyles = (0, _calculateNodeHeight.default)(this.textArea, false, minRows, maxRows);
      this.setState({
        textareaStyles: textareaStyles,
        resizeStatus: RESIZE_STATUS_RESIZING
      }, function () {
        _raf.default.cancel(_this2.resizeFrameId);

        _this2.resizeFrameId = (0, _raf.default)(function () {
          _this2.setState({
            resizeStatus: RESIZE_STATUS_RESIZED
          }, function () {
            _this2.resizeFrameId = (0, _raf.default)(function () {
              _this2.setState({
                resizeStatus: RESIZE_STATUS_NONE
              });

              _this2.fixFirefoxAutoScroll();
            });
          });
        });
      });
    },
    // https://github.com/ant-design/ant-design/issues/21870
    fixFirefoxAutoScroll: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.textArea) {
          var currentStart = this.textArea.selectionStart;
          var currentEnd = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    renderTextArea: function renderTextArea() {
      var _this3 = this;

      var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
      var prefixCls = props.prefixCls,
          autoSize = props.autoSize,
          autosize = props.autosize,
          disabled = props.disabled,
          className = props.class;
      var _this$$data = this.$data,
          textareaStyles = _this$$data.textareaStyles,
          resizeStatus = _this$$data.resizeStatus;
      (0, _warning.default)(autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
      var otherProps = (0, _omit.default)(props, ['prefixCls', 'onPressEnter', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy']);
      var cls = (0, _classNames2.default)(prefixCls, className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator

      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      var style = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props.style), textareaStyles), resizeStatus === RESIZE_STATUS_RESIZING ? {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null);
      var textareaProps = (0, _extends2.default)((0, _extends2.default)({}, otherProps), {
        style: style,
        class: cls
      });

      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }

      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": this.handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("textarea", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, textareaProps), {}, {
            "ref": _this3.saveTextArea
          }), null), [[_antInputDirective.default]])];
        }
      });
    }
  },
  render: function render() {
    return this.renderTextArea();
  }
});
var _default2 = ResizableTextArea;
exports.default = _default2;