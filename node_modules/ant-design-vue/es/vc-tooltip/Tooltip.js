import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import PropTypes from '../_util/vue-types';
import Trigger from '../vc-trigger';
import { placements } from './placements';
import Content from './Content';
import { hasProp, getComponent, getOptionProps, getSlot } from '../_util/props-util';
import { defineComponent } from 'vue';

function noop() {}

export default defineComponent({
  name: 'Tooltip',
  inheritAttrs: false,
  props: {
    trigger: PropTypes.any.def(['hover']),
    defaultVisible: PropTypes.looseBool,
    visible: PropTypes.looseBool,
    placement: PropTypes.string.def('right'),
    transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    animation: PropTypes.any,
    afterVisibleChange: PropTypes.func.def(function () {}),
    overlay: PropTypes.any,
    overlayStyle: PropTypes.object,
    overlayClassName: PropTypes.string,
    prefixCls: PropTypes.string.def('rc-tooltip'),
    mouseEnterDelay: PropTypes.number.def(0),
    mouseLeaveDelay: PropTypes.number.def(0.1),
    getTooltipContainer: PropTypes.func,
    destroyTooltipOnHide: PropTypes.looseBool.def(false),
    align: PropTypes.object.def(function () {
      return {};
    }),
    arrowContent: PropTypes.any.def(null),
    tipId: PropTypes.string,
    builtinPlacements: PropTypes.object,
    overlayInnerStyle: PropTypes.style
  },
  methods: {
    getPopupElement: function getPopupElement() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          tipId = _this$$props.tipId,
          overlayInnerStyle = _this$$props.overlayInnerStyle;
      return [_createVNode("div", {
        "class": "".concat(prefixCls, "-arrow"),
        "key": "arrow"
      }, [getComponent(this, 'arrowContent')]), _createVNode(Content, {
        "key": "content",
        "trigger": this.$refs.trigger,
        "prefixCls": prefixCls,
        "id": tipId,
        "overlay": getComponent(this, 'overlay'),
        "overlayInnerStyle": overlayInnerStyle
      }, null)];
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.trigger.getPopupDomNode();
    }
  },
  render: function render(h) {
    var _this = this;

    var _a = getOptionProps(this),
        overlayClassName = _a.overlayClassName,
        trigger = _a.trigger,
        mouseEnterDelay = _a.mouseEnterDelay,
        mouseLeaveDelay = _a.mouseLeaveDelay,
        overlayStyle = _a.overlayStyle,
        prefixCls = _a.prefixCls,
        afterVisibleChange = _a.afterVisibleChange,
        transitionName = _a.transitionName,
        animation = _a.animation,
        placement = _a.placement,
        align = _a.align,
        destroyTooltipOnHide = _a.destroyTooltipOnHide,
        defaultVisible = _a.defaultVisible,
        getTooltipContainer = _a.getTooltipContainer,
        restProps = __rest(_a, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]);

    var extraProps = _extends({}, restProps);

    if (hasProp(this, 'visible')) {
      extraProps.popupVisible = this.$props.visible;
    }

    var $attrs = this.$attrs;

    var triggerProps = _extends(_extends(_extends({
      popupClassName: overlayClassName,
      prefixCls: prefixCls,
      action: trigger,
      builtinPlacements: placements,
      popupPlacement: placement,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      defaultPopupVisible: defaultVisible,
      destroyPopupOnHide: destroyTooltipOnHide,
      mouseLeaveDelay: mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay: mouseEnterDelay
    }, extraProps), $attrs), {
      onPopupVisibleChange: $attrs.onVisibleChange || noop,
      onPopupAlign: $attrs.onPopupAlign || noop,
      ref: 'trigger',
      popup: this.getPopupElement()
    });

    return _createVNode(Trigger, triggerProps, {
      default: function _default() {
        return [getSlot(_this)[0]];
      }
    });
  }
});