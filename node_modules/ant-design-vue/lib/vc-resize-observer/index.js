"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _vue = require("vue");

var _propsUtil = require("../_util/props-util");

var _default = (0, _vue.defineComponent)({
  name: 'ResizeObserver',
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ['resize'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var state = (0, _vue.reactive)({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    var currentElement = null;
    var resizeObserver = null;

    var destroyObserver = function destroyObserver() {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };

    var onResize = function onResize(entries) {
      var onResize = props.onResize;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;

      var offsetWidth = target.offsetWidth,
          offsetHeight = target.offsetHeight;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */

      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth: offsetWidth,
          offsetHeight: offsetHeight
        };
        (0, _extends2.default)(state, size);

        if (onResize) {
          // defer the callback but not defer to next frame
          Promise.resolve().then(function () {
            onResize((0, _extends2.default)((0, _extends2.default)({}, size), {
              offsetWidth: offsetWidth,
              offsetHeight: offsetHeight
            }), target);
          });
        }
      }
    };

    var instance = (0, _vue.getCurrentInstance)();

    var registerObserver = function registerObserver() {
      var disabled = props.disabled; // Unregister if disabled

      if (disabled) {
        destroyObserver();
        return;
      } // Unregister if element changed


      var element = (0, _propsUtil.findDOMNode)(instance);
      var elementChanged = element !== currentElement;

      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }

      if (!resizeObserver && element) {
        resizeObserver = new _resizeObserverPolyfill.default(onResize);
        resizeObserver.observe(element);
      }
    };

    (0, _vue.onMounted)(function () {
      registerObserver();
    });
    (0, _vue.onUpdated)(function () {
      registerObserver();
    });
    (0, _vue.onUnmounted)(function () {
      destroyObserver();
    });
    (0, _vue.watch)(function () {
      return props.disabled;
    }, function () {
      registerObserver();
    }, {
      flush: 'post'
    });
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});

exports.default = _default;