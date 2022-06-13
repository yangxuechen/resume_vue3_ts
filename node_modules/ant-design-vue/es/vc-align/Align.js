import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { defineComponent, ref, computed, onMounted, onUpdated, watch, onUnmounted } from 'vue';
import { alignElement, alignPoint } from 'dom-align';
import addEventListener from '../vc-util/Dom/addEventListener';
import { cloneElement } from '../_util/vnode';
import isVisible from '../vc-util/Dom/isVisible';
import { isSamePoint, restoreFocus, monitorResize } from './util';
import useBuffer from './hooks/useBuffer';
var alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof(point) !== 'object' || !point) return null;
  return point;
}

export default defineComponent({
  name: 'Align',
  props: alignProps,
  emits: ['align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
        slots = _ref.slots;
    var cacheRef = ref({});
    var nodeRef = ref();
    var forceAlignPropsRef = computed(function () {
      return {
        disabled: props.disabled,
        target: props.target,
        onAlign: props.onAlign
      };
    });

    var _useBuffer = useBuffer(function () {
      var _forceAlignPropsRef$v = forceAlignPropsRef.value,
          latestDisabled = _forceAlignPropsRef$v.disabled,
          latestTarget = _forceAlignPropsRef$v.target,
          latestOnAlign = _forceAlignPropsRef$v.onAlign;

      if (!latestDisabled && latestTarget && nodeRef.value && nodeRef.value.$el) {
        var source = nodeRef.value.$el;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point; // IE lose focus after element realign
        // We should record activeElement and restore later

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var _document = document,
            activeElement = _document.activeElement; // We only align when element is visible

        // We only align when element is visible
        if (element && isVisible(element)) {
          result = alignElement(source, element, props.align);
        } else if (point) {
          result = alignPoint(source, point, props.align);
        }

        restoreFocus(activeElement, source);

        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }

        return true;
      }

      return false;
    }, computed(function () {
      return props.monitorBufferTime;
    })),
        _useBuffer2 = _slicedToArray(_useBuffer, 2),
        _forceAlign = _useBuffer2[0],
        cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
    // Listen for target updated


    var resizeMonitor = ref({
      cancel: function cancel() {}
    }); // Listen for source updated

    var sourceResizeMonitor = ref({
      cancel: function cancel() {}
    });

    var goAlign = function goAlign() {
      var target = props.target;
      var element = getElement(target);
      var point = getPoint(target);

      if (nodeRef.value && nodeRef.value.$el !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value.$el;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value.$el, _forceAlign);
      }

      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point)) {
        _forceAlign(); // Add resize observer


        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, _forceAlign);
        }
      }
    };

    onMounted(function () {
      goAlign();
    });
    onUpdated(function () {
      goAlign();
    }); // Listen for disabled change

    watch(function () {
      return props.disabled;
    }, function (disabled) {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      flush: 'post'
    }); // Listen for window resize

    var winResizeRef = ref(null);
    watch(function () {
      return props.monitorWindowResize;
    }, function (monitorWindowResize) {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListener(window, 'resize', _forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: 'post'
    });
    onUnmounted(function () {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value) winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    });
    return function () {
      var child = slots === null || slots === void 0 ? void 0 : slots.default();

      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }

      return child && child[0];
    };
  }
});