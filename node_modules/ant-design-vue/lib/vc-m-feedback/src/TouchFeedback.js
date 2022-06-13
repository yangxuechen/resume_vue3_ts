"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _propsUtil = require("../../_util/props-util");

var _vnode = require("../../_util/vnode");

var _warning = _interopRequireDefault(require("../../_util/warning"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _PropTypes = require("./PropTypes");

var _vue = require("vue");

var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));

var _default = (0, _vue.defineComponent)({
  name: 'TouchFeedback',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(_PropTypes.ITouchProps, {
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
    var child = (0, _propsUtil.getSlot)(this);

    if (child.length !== 1) {
      (0, _warning.default)(false, 'm-feedback组件只能包含一个子元素');
      return null;
    }

    var events = disabled ? undefined : (_ref = {}, (0, _defineProperty2.default)(_ref, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', this.onTouchStart), (0, _defineProperty2.default)(_ref, _supportsPassive.default ? 'onTouchmovePassive' : 'onTouchmove', this.onTouchMove), (0, _defineProperty2.default)(_ref, "onTouchend", this.onTouchEnd), (0, _defineProperty2.default)(_ref, "onTouchcancel", this.onTouchCancel), (0, _defineProperty2.default)(_ref, "onMousedown", this.onMouseDown), (0, _defineProperty2.default)(_ref, "onMouseup", this.onMouseUp), (0, _defineProperty2.default)(_ref, "onMouseleave", this.onMouseLeave), _ref);
    child = child[0];
    this.child = child;

    if (!disabled && this.active) {
      var _child$props = child.props,
          style = _child$props.style,
          className = _child$props.class;

      if (activeStyle !== false) {
        if (activeStyle) {
          style = (0, _extends2.default)((0, _extends2.default)({}, style), activeStyle);
        }

        className = (0, _classNames.default)(className, activeClassName);
      }

      return (0, _vnode.cloneElement)(child, (0, _extends2.default)({
        class: className,
        style: style
      }, events));
    }

    return (0, _vnode.cloneElement)(child, events);
  }
});

exports.default = _default;