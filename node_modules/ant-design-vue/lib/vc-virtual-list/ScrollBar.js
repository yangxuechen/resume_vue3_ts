"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _createRef = _interopRequireDefault(require("../_util/createRef"));

var _raf = _interopRequireDefault(require("../_util/raf"));

var _supportsPassive = _interopRequireDefault(require("../_util/supportsPassive"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

var _default = (0, _vue.defineComponent)({
  name: 'ScrollBar',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    scrollTop: _vueTypes.default.number,
    scrollHeight: _vueTypes.default.number,
    height: _vueTypes.default.number,
    count: _vueTypes.default.number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup() {
    return {
      moveRaf: null,
      scrollbarRef: (0, _createRef.default)(),
      thumbRef: (0, _createRef.default)(),
      visibleTimeout: null,
      state: (0, _vue.reactive)({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: 'post'
    }
  },
  mounted: function mounted() {
    this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart, _supportsPassive.default ? {
      passive: false
    } : false);
    this.thumbRef.current.addEventListener('touchstart', this.onMouseDown, _supportsPassive.default ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;

      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function () {
        _this.state.visible = false;
      }, 2000);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents: function patchEvents() {
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
      this.thumbRef.current.addEventListener('touchmove', this.onMouseMove, _supportsPassive.default ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener('touchend', this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
      this.scrollbarRef.current.removeEventListener('touchstart', this.onScrollbarTouchStart, _supportsPassive.default ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchstart', this.onMouseDown, _supportsPassive.default ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchmove', this.onMouseMove, _supportsPassive.default ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener('touchend', this.onMouseUp);

      _raf.default.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown: function onMouseDown(e) {
      var onStartMove = this.$props.onStartMove;
      (0, _extends2.default)(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove: function onMouseMove(e) {
      var _this$state = this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;

      _raf.default.cancel(this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = (0, _raf.default)(function () {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props,
          height = _this$$props.height,
          count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props,
          scrollHeight = _this$$props2.scrollHeight,
          height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll: function showScroll() {
      var _this$$props3 = this.$props,
          height = _this$$props3.height,
          scrollHeight = _this$$props3.scrollHeight;
      return scrollHeight > height;
    }
  },
  render: function render() {
    // eslint-disable-next-line no-unused-vars
    var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + 'px';
    var top = this.getTop() + 'px';
    var canScroll = this.showScroll();
    var mergedVisible = canScroll && visible;
    return (0, _vue.createVNode)("div", {
      "ref": this.scrollbarRef,
      "class": (0, _classNames3.default)("".concat(prefixCls, "-scrollbar"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
      "style": {
        width: '8px',
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: mergedVisible ? undefined : 'none'
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [(0, _vue.createVNode)("div", {
      "ref": this.thumbRef,
      "class": (0, _classNames3.default)("".concat(prefixCls, "-scrollbar-thumb"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: '100%',
        height: spinHeight,
        top: top,
        left: 0,
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '99px',
        cursor: 'pointer',
        userSelect: 'none'
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});

exports.default = _default;