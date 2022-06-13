import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import { getComponent, getSlot } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
export default {
  mixins: [BaseMixin],
  props: {
    duration: PropTypes.number.def(1.5),
    closable: PropTypes.looseBool,
    prefixCls: PropTypes.string,
    update: PropTypes.looseBool,
    closeIcon: PropTypes.any,
    onClose: PropTypes.func
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
    var className = (_className = {}, _defineProperty(_className, "".concat(componentClass), 1), _defineProperty(_className, "".concat(componentClass, "-closable"), closable), _className);
    var closeIcon = getComponent(this, 'closeIcon');
    return _createVNode("div", {
      "class": className,
      "style": $attrs.style || {
        right: '50%'
      },
      "onMouseenter": clearCloseTimer,
      "onMouseleave": startCloseTimer
    }, [_createVNode("div", {
      "class": "".concat(componentClass, "-content")
    }, [getSlot(this)]), closable ? _createVNode("a", {
      "tabindex": "0",
      "onClick": close,
      "class": "".concat(componentClass, "-close")
    }, [closeIcon || _createVNode("span", {
      "class": "".concat(componentClass, "-close-x")
    }, null)]) : null]);
  }
};