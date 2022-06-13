import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, nextTick, onActivated, onBeforeUnmount, onMounted, reactive, ref, watch, onDeactivated, computed } from 'vue';
import VerticalAlignTopOutlined from '@ant-design/icons-vue/VerticalAlignTopOutlined';
import PropTypes from '../_util/vue-types';
import addEventListener from '../vc-util/Dom/addEventListener';
import getScroll from '../_util/getScroll';
import { getTransitionProps, Transition } from '../_util/transition';
import { defaultConfigProvider } from '../config-provider';
import scrollTo from '../_util/scrollTo';
import { withInstall } from '../_util/type';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
export var backTopProps = {
  visibilityHeight: PropTypes.number.def(400),
  duration: PropTypes.number.def(450),
  target: Function,
  prefixCls: PropTypes.string,
  onClick: PropTypes.func // visible: PropTypes.looseBool, // Only for test. Don't use it.

};
var BackTop = defineComponent({
  name: 'ABackTop',
  inheritAttrs: false,
  props: backTopProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var configProvider = inject('configProvider', defaultConfigProvider);
    var domRef = ref();
    var state = reactive({
      visible: false,
      scrollEvent: null
    });

    var getDefaultTarget = function getDefaultTarget() {
      return domRef.value && domRef.value.ownerDocument ? domRef.value.ownerDocument : window;
    };

    var scrollToTop = function scrollToTop(e) {
      var _props$target = props.target,
          target = _props$target === void 0 ? getDefaultTarget : _props$target,
          duration = props.duration;
      scrollTo(0, {
        getContainer: target,
        duration: duration
      });
      emit('click', e);
    };

    var handleScroll = throttleByAnimationFrame(function (e) {
      var visibilityHeight = props.visibilityHeight;
      var scrollTop = getScroll(e.target, true);
      state.visible = scrollTop > visibilityHeight;
    });

    var bindScrollEvent = function bindScrollEvent() {
      var target = props.target;
      var getTarget = target || getDefaultTarget;
      var container = getTarget();
      state.scrollEvent = addEventListener(container, 'scroll', function (e) {
        handleScroll(e);
      });
      handleScroll({
        target: container
      });
    };

    var scrollRemove = function scrollRemove() {
      if (state.scrollEvent) {
        state.scrollEvent.remove();
      }

      handleScroll.cancel();
    };

    watch(function () {
      return props.target;
    }, function () {
      scrollRemove();
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onMounted(function () {
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onActivated(function () {
      nextTick(function () {
        bindScrollEvent();
      });
    });
    onDeactivated(function () {
      scrollRemove();
    });
    onBeforeUnmount(function () {
      scrollRemove();
    });
    var prefixCls = computed(function () {
      return configProvider.getPrefixCls('back-top', props.prefixCls);
    });
    return function () {
      var _class;

      var _a;

      var defaultElement = _createVNode("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls.value, "-icon")
      }, [_createVNode(VerticalAlignTopOutlined, null, null)])]);

      var divProps = _extends(_extends({}, attrs), {
        onClick: scrollToTop,
        class: (_class = {}, _defineProperty(_class, "".concat(prefixCls.value), true), _defineProperty(_class, "".concat(attrs.class), attrs.class), _defineProperty(_class, "".concat(prefixCls.value, "-rtl"), configProvider.direction === 'rtl'), _class)
      });

      var backTopBtn = state.visible ? _createVNode("div", _objectSpread(_objectSpread({}, divProps), {}, {
        "ref": domRef
      }), [((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultElement]) : null;
      var transitionProps = getTransitionProps('fade');
      return _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [backTopBtn];
        }
      });
    };
  }
});
export default withInstall(BackTop);