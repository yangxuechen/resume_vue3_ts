"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _default = {
  mixins: [_BaseMixin.default],
  props: {
    duration: _vueTypes.default.number.def(1.5),
    closable: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string,
    update: _vueTypes.default.looseBool,
    closeIcon: _vueTypes.default.any,
    onClose: _vueTypes.default.func
  },
  watch: {
    duration: function duration() {
      this.restartCloseTimer();
    }
  },
  mounted: function mounted() {
    this.startCloseTimer();
  },
  updated: function updated() {
    if (this.update) {
      this.restartCloseTimer();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.clearCloseTimer();
    this.willDestroy = true; // beforeUnmount调用后依然会触发onMouseleave事件
  },
  methods: {
    close: function close(e) {
      if (e) {
        e.stopPropagation();
      }

      this.clearCloseTimer();

      this.__emit('close');
    },
    startCloseTimer: function startCloseTimer() {
      var _this = this;

      this.clearCloseTimer();

      if (!this.willDestroy && this.duration) {
        this.closeTimer = setTimeout(function () {
          _this.close();
        }, this.duration * 1000);
      }
    },
    clearCloseTimer: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    restartCloseTimer: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  },
  render: function render() {
    var _className;

    var prefixCls = this.prefixCls,
        closable = this.closable,
        clearCloseTimer = this.clearCloseTimer,
        startCloseTimer = this.startCloseTimer,
        close = this.close,
        $attrs = this.$attrs;
    var componentClass = "".concat(prefixCls, "-notice");
    var className = (_className = {}, (0, _defineProperty2.default)(_className, "".concat(componentClass), 1), (0, _defineProperty2.default)(_className, "".concat(componentClass, "-closable"), closable), _className);
    var closeIcon = (0, _propsUtil.getComponent)(this, 'closeIcon');
    return (0, _vue.createVNode)("div", {
      "class": className,
      "style": $attrs.style || {
        right: '50%'
      },
      "onMouseenter": clearCloseTimer,
      "onMouseleave": startCloseTimer
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(componentClass, "-content")
    }, [(0, _propsUtil.getSlot)(this)]), closable ? (0, _vue.createVNode)("a", {
      "tabindex": "0",
      "onClick": close,
      "class": "".concat(componentClass, "-close")
    }, [closeIcon || (0, _vue.createVNode)("span", {
      "class": "".concat(componentClass, "-close-x")
    }, null)]) : null]);
  }
};
exports.default = _default;