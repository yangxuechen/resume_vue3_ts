import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from '../../_util/classNames';
import { initDefaultProps, getSlot } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
import warning from '../../_util/warning';
import BaseMixin from '../../_util/BaseMixin';
import { ITouchProps } from './PropTypes';
import { defineComponent } from 'vue';
import supportsPassive from '../../_util/supportsPassive';
export default defineComponent({
  name: 'TouchFeedback',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(ITouchProps, {
    disabled: false
  }),
  data: function data() {
    this.child = null;
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.disabled && _this.active) {
        _this.setState({
          active: false
        });
      }
    });
  },
  methods: {
    triggerEvent: function triggerEvent(type, isActive, ev) {
      var eventType = "on".concat(type);
      var child = this.child;

      if (child.props[eventType]) {
        child.props[eventType](ev);
      }

      if (isActive !== this.active) {
        this.setState({
          active: isActive
        });
      }
    },
    onTouchStart: function onTouchStart(e) {
      this.triggerEvent('Touchstart', true, e);
    },
    onTouchMove: function onTouchMove(e) {
      this.triggerEvent('Touchmove', false, e);
    },
    onTouchEnd: function onTouchEnd(e) {
      this.triggerEvent('Touchend', false, e);
    },
    onTouchCancel: function onTouchCancel(e) {
      this.triggerEvent('Touchcancel', false, e);
    },
    onMouseDown: function onMouseDown(e) {
      // pc simulate mobile
      this.triggerEvent('Mousedown', true, e);
    },
    onMouseUp: function onMouseUp(e) {
      this.triggerEvent('Mouseup', false, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      this.triggerEvent('Mouseleave', false, e);
    }
  },
  render: function render() {
    var _ref;

    var _this$$props = this.$props,
        disabled = _this$$props.disabled,
        _this$$props$activeCl = _this$$props.activeClassName,
        activeClassName = _this$$props$activeCl === void 0 ? '' : _this$$props$activeCl,
        _this$$props$activeSt = _this$$props.activeStyle,
        activeStyle = _this$$props$activeSt === void 0 ? {} : _this$$props$activeSt;
    var child = getSlot(this);

    if (child.length !== 1) {
      warning(false, 'm-feedback组件只能包含一个子元素');
      return null;
    }

    var events = disabled ? undefined : (_ref = {}, _defineProperty(_ref, supportsPassive ? 'onTouchstartPassive' : 'onTouchstart', this.onTouchStart), _defineProperty(_ref, supportsPassive ? 'onTouchmovePassive' : 'onTouchmove', this.onTouchMove), _defineProperty(_ref, "onTouchend", this.onTouchEnd), _defineProperty(_ref, "onTouchcancel", this.onTouchCancel), _defineProperty(_ref, "onMousedown", this.onMouseDown), _defineProperty(_ref, "onMouseup", this.onMouseUp), _defineProperty(_ref, "onMouseleave", this.onMouseLeave), _ref);
    child = child[0];
    this.child = child;

    if (!disabled && this.active) {
      var _child$props = child.props,
          style = _child$props.style,
          className = _child$props.class;

      if (activeStyle !== false) {
        if (activeStyle) {
          style = _extends(_extends({}, style), activeStyle);
        }

        className = classNames(className, activeClassName);
      }

      return cloneElement(child, _extends({
        class: className,
        style: style
      }, events));
    }

    return cloneElement(child, events);
  }
});