import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { nextTick } from 'vue';
import ResizeObserver from '../vc-resize-observer';
import omit from 'omit.js';
import classNames from '../_util/classNames';
import calculateNodeHeight from './calculateNodeHeight';
import raf from '../_util/raf';
import warning from '../_util/warning';
import BaseMixin from '../_util/BaseMixin';
import inputProps from './inputProps';
import PropTypes from '../_util/vue-types';
import { getOptionProps } from '../_util/props-util';
import { defineComponent, withDirectives } from 'vue';
import antInput from '../_util/antInputDirective';
var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;

var TextAreaProps = _extends(_extends({}, inputProps), {
  autosize: {
    type: [Boolean, Object],
    default: undefined
  },
  autoSize: {
    type: [Boolean, Object],
    default: undefined
  },
  onResize: PropTypes.func
});

var ResizableTextArea = defineComponent({
  name: 'ResizableTextArea',
  mixins: [BaseMixin],
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

      nextTick(function () {
        _this.resizeTextarea();
      });
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },
  beforeUnmount: function beforeUnmount() {
    raf.cancel(this.nextFrameActionId);
    raf.cancel(this.resizeFrameId);
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
      raf.cancel(this.nextFrameActionId);
      this.nextFrameActionId = raf(this.resizeTextarea);
    },
    resizeTextarea: function resizeTextarea() {
      var _this2 = this;

      var autoSize = this.$props.autoSize || this.$props.autosize;

      if (!autoSize || !this.textArea) {
        return;
      }

      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;
      var textareaStyles = calculateNodeHeight(this.textArea, false, minRows, maxRows);
      this.setState({
        textareaStyles: textareaStyles,
        resizeStatus: RESIZE_STATUS_RESIZING
      }, function () {
        raf.cancel(_this2.resizeFrameId);
        _this2.resizeFrameId = raf(function () {
          _this2.setState({
            resizeStatus: RESIZE_STATUS_RESIZED
          }, function () {
            _this2.resizeFrameId = raf(function () {
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

      var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

      var prefixCls = props.prefixCls,
          autoSize = props.autoSize,
          autosize = props.autosize,
          disabled = props.disabled,
          className = props.class;
      var _this$$data = this.$data,
          textareaStyles = _this$$data.textareaStyles,
          resizeStatus = _this$$data.resizeStatus;
      warning(autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
      var otherProps = omit(props, ['prefixCls', 'onPressEnter', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy']);
      var cls = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator

      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      var style = _extends(_extends(_extends({}, props.style), textareaStyles), resizeStatus === RESIZE_STATUS_RESIZING ? {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null);

      var textareaProps = _extends(_extends({}, otherProps), {
        style: style,
        class: cls
      });

      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }

      return _createVNode(ResizeObserver, {
        "onResize": this.handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default() {
          return [withDirectives(_createVNode("textarea", _objectSpread(_objectSpread({}, textareaProps), {}, {
            "ref": _this3.saveTextArea
          }), null), [[antInput]])];
        }
      });
    }
  },
  render: function render() {
    return this.renderTextArea();
  }
});
export default ResizableTextArea;