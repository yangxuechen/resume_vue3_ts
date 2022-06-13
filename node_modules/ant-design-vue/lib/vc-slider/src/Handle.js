"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));

var _default = (0, _vue.defineComponent)({
  name: 'Handle',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    vertical: _vueTypes.default.looseBool,
    offset: _vueTypes.default.number,
    disabled: _vueTypes.default.looseBool,
    min: _vueTypes.default.number,
    max: _vueTypes.default.number,
    value: _vueTypes.default.number,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    reverse: _vueTypes.default.looseBool // handleFocus: PropTypes.func.def(noop),
    // handleBlur: PropTypes.func.def(noop),

  },
  data: function data() {
    return {
      clickFocused: false
    };
  },
  mounted: function mounted() {
    // mouseup won't trigger if mouse moved out of handle
    // so we listen on document here.
    this.onMouseUpListener = (0, _addEventListener.default)(document, 'mouseup', this.handleMouseUp);
  },
  beforeUnmount: function beforeUnmount() {
    if (this.onMouseUpListener) {
      this.onMouseUpListener.remove();
    }
  },
  methods: {
    setHandleRef: function setHandleRef(node) {
      this.handle = node;
    },
    setClickFocus: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    },
    handleMouseUp: function handleMouseUp() {
      if (document.activeElement === this.handle) {
        this.setClickFocus(true);
      }
    },
    handleBlur: function handleBlur(e) {
      this.setClickFocus(false);

      this.__emit('blur', e);
    },
    handleKeyDown: function handleKeyDown() {
      this.setClickFocus(false);
    },
    clickFocus: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    },
    focus: function focus() {
      this.handle.focus();
    },
    blur: function blur() {
      this.handle.blur();
    },
    // when click can not focus in vue, use mousedown trigger focus
    handleMousedown: function handleMousedown(e) {
      this.focus();

      this.__emit('mousedown', e);
    }
  },
  render: function render() {
    var _ref, _ref2;

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _getOptionProps.prefixCls,
        vertical = _getOptionProps.vertical,
        reverse = _getOptionProps.reverse,
        offset = _getOptionProps.offset,
        disabled = _getOptionProps.disabled,
        min = _getOptionProps.min,
        max = _getOptionProps.max,
        value = _getOptionProps.value,
        tabindex = _getOptionProps.tabindex;

    var className = (0, _classNames2.default)(this.$attrs.class, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-handle-click-focused"), this.clickFocused));
    var positionStyle = vertical ? (_ref = {}, (0, _defineProperty2.default)(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty2.default)(_ref, "transform", "translateY(+50%)"), _ref) : (_ref2 = {}, (0, _defineProperty2.default)(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0, _defineProperty2.default)(_ref2, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty2.default)(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);
    var ariaProps = {
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
      'aria-disabled': !!disabled
    };
    var elStyle = (0, _extends2.default)((0, _extends2.default)({}, this.$attrs.style), positionStyle);

    var _tabIndex = tabindex || 0;

    if (disabled || tabindex === null) {
      _tabIndex = null;
    }

    var handleProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$attrs), {
      role: 'slider',
      tabindex: _tabIndex
    }), ariaProps), {
      class: className,
      onBlur: this.handleBlur,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMousedown,
      ref: this.setHandleRef,
      style: elStyle
    });
    return (0, _vue.createVNode)("div", handleProps, null);
  }
});

exports.default = _default;