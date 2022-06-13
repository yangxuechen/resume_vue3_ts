import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Trigger from '../../vc-trigger';
import { computed, defineComponent, onBeforeUnmount, ref, watch } from 'vue';
import { useInjectMenu } from './hooks/useMenuContext';
import { placements, placementsRtl } from './placements';
import raf from '../../_util/raf';
import classNames from '../../_util/classNames';
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
export default defineComponent({
  name: 'PopupTrigger',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: ['popup'],
  emits: ['visibleChange'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var innerVisible = ref(false);

    var _useInjectMenu = useInjectMenu(),
        getPopupContainer = _useInjectMenu.getPopupContainer,
        rtl = _useInjectMenu.rtl,
        subMenuOpenDelay = _useInjectMenu.subMenuOpenDelay,
        subMenuCloseDelay = _useInjectMenu.subMenuCloseDelay,
        builtinPlacements = _useInjectMenu.builtinPlacements,
        triggerSubMenuAction = _useInjectMenu.triggerSubMenuAction,
        isRootMenu = _useInjectMenu.isRootMenu;

    var placement = computed(function () {
      return rtl.value ? _extends(_extends({}, placementsRtl), builtinPlacements.value) : _extends(_extends({}, placements), builtinPlacements.value);
    });
    var popupPlacement = computed(function () {
      return popupPlacementMap[props.mode];
    });
    var visibleRef = ref();
    watch(function () {
      return props.visible;
    }, function (visible) {
      raf.cancel(visibleRef.value);
      visibleRef.value = raf(function () {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    onBeforeUnmount(function () {
      raf.cancel(visibleRef.value);
    });

    var onVisibleChange = function onVisibleChange(visible) {
      emit('visibleChange', visible);
    };

    return function () {
      var prefixCls = props.prefixCls,
          popupClassName = props.popupClassName,
          mode = props.mode,
          popupOffset = props.popupOffset,
          disabled = props.disabled;
      return _createVNode(Trigger, {
        "prefixCls": prefixCls,
        "popupClassName": classNames("".concat(prefixCls, "-popup"), _defineProperty({}, "".concat(prefixCls, "-rtl"), rtl.value), popupClassName),
        "stretch": mode === 'horizontal' ? 'minWidth' : null,
        "getPopupContainer": isRootMenu.value ? getPopupContainer.value : function (triggerNode) {
          return triggerNode.parentNode;
        },
        "builtinPlacements": placement.value,
        "popupPlacement": popupPlacement.value,
        "popupVisible": innerVisible.value,
        "popupAlign": popupOffset && {
          offset: popupOffset
        },
        "action": disabled ? [] : [triggerSubMenuAction.value],
        "mouseEnterDelay": subMenuOpenDelay.value,
        "mouseLeaveDelay": subMenuCloseDelay.value,
        "onPopupVisibleChange": onVisibleChange,
        "forceRender": true
      }, {
        popup: function popup() {
          var _a;

          return (_a = slots.popup) === null || _a === void 0 ? void 0 : _a.call(slots, {
            visible: innerVisible.value
          });
        },
        default: slots.default
      });
    };
  }
});