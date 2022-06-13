import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getOptionProps } from '../../_util/props-util';
import addEventListener from '../../vc-util/Dom/addEventListener';
export default defineComponent({
  name: 'Handle',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    vertical: PropTypes.looseBool,
    offset: PropTypes.number,
    disabled: PropTypes.looseBool,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    reverse: PropTypes.looseBool // handleFocus: PropTypes.func.def(noop),
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
    this.onMouseUpListener = addEventListener(document, 'mouseup', this.handleMouseUp);
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

    var _getOptionProps = getOptionProps(this),
        prefixCls = _getOptionProps.prefixCls,
        vertical = _getOptionProps.vertical,
        reverse = _getOptionProps.reverse,
        offset = _getOptionProps.offset,
        disabled = _getOptionProps.disabled,
        min = _getOptionProps.min,
        max = _getOptionProps.max,
        value = _getOptionProps.value,
        tabindex = _getOptionProps.tabindex;

    var className = classNames(this.$attrs.class, _defineProperty({}, "".concat(prefixCls, "-handle-click-focused"), this.clickFocused));
    var positionStyle = vertical ? (_ref = {}, _defineProperty(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), _defineProperty(_ref, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref, "transform", "translateY(+50%)"), _ref) : (_ref2 = {}, _defineProperty(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), _defineProperty(_ref2, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);
    var ariaProps = {
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
      'aria-disabled': !!disabled
    };

    var elStyle = _extends(_extends({}, this.$attrs.style), positionStyle);

    var _tabIndex = tabindex || 0;

    if (disabled || tabindex === null) {
      _tabIndex = null;
    }

    var handleProps = _extends(_extends(_extends(_extends({}, this.$attrs), {
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

    return _createVNode("div", handleProps, null);
  }
});