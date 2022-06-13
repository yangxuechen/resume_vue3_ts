import _extends from "@babel/runtime/helpers/esm/extends";
import ResizeObserver from 'resize-observer-polyfill';
import { defineComponent, getCurrentInstance, onMounted, onUnmounted, onUpdated, reactive, watch } from 'vue';
import { findDOMNode } from '../_util/props-util';
export default defineComponent({
  name: 'ResizeObserver',
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ['resize'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var state = reactive({
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

        _extends(state, size);

        if (onResize) {
          // defer the callback but not defer to next frame
          Promise.resolve().then(function () {
            onResize(_extends(_extends({}, size), {
              offsetWidth: offsetWidth,
              offsetHeight: offsetHeight
            }), target);
          });
        }
      }
    };

    var instance = getCurrentInstance();

    var registerObserver = function registerObserver() {
      var disabled = props.disabled; // Unregister if disabled

      if (disabled) {
        destroyObserver();
        return;
      } // Unregister if element changed


      var element = findDOMNode(instance);
      var elementChanged = element !== currentElement;

      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }

      if (!resizeObserver && element) {
        resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(element);
      }
    };

    onMounted(function () {
      registerObserver();
    });
    onUpdated(function () {
      registerObserver();
    });
    onUnmounted(function () {
      destroyObserver();
    });
    watch(function () {
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