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

import { defineComponent, Text } from 'vue';
import PropTypes from '../../_util/vue-types';
import Trigger from '../../vc-trigger';
import placements from './placements';
import { hasProp, getComponent, getOptionProps, getSlot, findDOMNode } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
import { cloneElement } from '../../_util/vnode';
export default defineComponent({
  mixins: [BaseMixin],
  props: {
    minOverlayWidthMatchTrigger: PropTypes.looseBool,
    prefixCls: PropTypes.string.def('rc-dropdown'),
    transitionName: PropTypes.string,
    overlayClassName: PropTypes.string.def(''),
    openClassName: PropTypes.string,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: PropTypes.object.def(function () {
      return {};
    }),
    placement: PropTypes.string.def('bottomLeft'),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def('hover'),
    alignPoint: PropTypes.looseBool,
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: PropTypes.func,
    visible: PropTypes.looseBool,
    defaultVisible: PropTypes.looseBool.def(false),
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  data: function data() {
    var sVisible = this.defaultVisible;

    if (hasProp(this, 'visible')) {
      sVisible = this.visible;
    }

    return {
      sVisible: sVisible
    };
  },
  watch: {
    visible: function visible(val) {
      if (val !== undefined) {
        this.setState({
          sVisible: val
        });
      }
    }
  },
  methods: {
    onClick: function onClick(e) {
      var overlayProps = this.getOverlayElement().props; // do no call onVisibleChange, if you need click to hide, use onClick and control visible

      if (!hasProp(this, 'visible')) {
        this.setState({
          sVisible: false
        });
      }

      this.__emit('overlayClick', e);

      if (overlayProps.onClick) {
        overlayProps.onClick(e);
      }
    },
    onVisibleChange: function onVisibleChange(visible) {
      if (!hasProp(this, 'visible')) {
        this.setState({
          sVisible: visible
        });
      }

      this.__emit('update:visible', visible);

      this.__emit('visibleChange', visible);
    },
    getMinOverlayWidthMatchTrigger: function getMinOverlayWidthMatchTrigger() {
      var props = getOptionProps(this);
      var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
          alignPoint = props.alignPoint;

      if ('minOverlayWidthMatchTrigger' in props) {
        return minOverlayWidthMatchTrigger;
      }

      return !alignPoint;
    },
    getOverlayElement: function getOverlayElement() {
      var overlay = getComponent(this, 'overlay');
      return Array.isArray(overlay) ? overlay[0] : overlay;
    },
    getMenuElement: function getMenuElement() {
      var _this = this;

      var onClick = this.onClick,
          prefixCls = this.prefixCls;
      var overlayElement = this.getOverlayElement();
      var extraOverlayProps = {
        prefixCls: "".concat(prefixCls, "-menu"),
        getPopupContainer: function getPopupContainer() {
          return _this.getPopupDomNode();
        },
        onClick: onClick
      };

      if (overlayElement && overlayElement.type === Text) {
        delete extraOverlayProps.prefixCls;
      }

      return cloneElement(overlayElement, extraOverlayProps);
    },
    getMenuElementOrLambda: function getMenuElementOrLambda() {
      var overlay = this.overlay || this.$slots.overlay;

      if (typeof overlay === 'function') {
        return this.getMenuElement;
      }

      return this.getMenuElement();
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.triggerRef.getPopupDomNode();
    },
    getOpenClassName: function getOpenClassName() {
      var _this$$props = this.$props,
          openClassName = _this$$props.openClassName,
          prefixCls = _this$$props.prefixCls;

      if (openClassName !== undefined) {
        return openClassName;
      }

      return "".concat(prefixCls, "-open");
    },
    afterVisibleChange: function afterVisibleChange(visible) {
      if (visible && this.getMinOverlayWidthMatchTrigger()) {
        var overlayNode = this.getPopupDomNode();
        var rootNode = findDOMNode(this);

        if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
          overlayNode.style.minWidth = "".concat(rootNode.offsetWidth, "px");

          if (this.triggerRef && this.triggerRef._component && this.triggerRef._component.alignInstance) {
            this.triggerRef._component.alignInstance.forceAlign();
          }
        }
      }
    },
    renderChildren: function renderChildren() {
      var children = getSlot(this);
      var sVisible = this.sVisible;
      return sVisible && children ? cloneElement(children[0], {
        class: this.getOpenClassName()
      }, false) : children;
    },
    saveTrigger: function saveTrigger(node) {
      this.triggerRef = node;
    }
  },
  render: function render() {
    var _this2 = this;

    var _a = this.$props,
        prefixCls = _a.prefixCls,
        transitionName = _a.transitionName,
        animation = _a.animation,
        align = _a.align,
        placement = _a.placement,
        getPopupContainer = _a.getPopupContainer,
        showAction = _a.showAction,
        hideAction = _a.hideAction,
        overlayClassName = _a.overlayClassName,
        overlayStyle = _a.overlayStyle,
        trigger = _a.trigger,
        otherProps = __rest(_a, ["prefixCls", "transitionName", "animation", "align", "placement", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "trigger"]);

    var triggerHideAction = hideAction;

    if (!triggerHideAction && trigger.indexOf('contextmenu') !== -1) {
      triggerHideAction = ['click'];
    }

    var triggerProps = _extends(_extends({}, otherProps), {
      prefixCls: prefixCls,
      popupClassName: overlayClassName,
      popupStyle: overlayStyle,
      builtinPlacements: placements,
      action: trigger,
      showAction: showAction,
      hideAction: triggerHideAction || [],
      popupPlacement: placement,
      popupAlign: align,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      popupVisible: this.sVisible,
      afterPopupVisibleChange: this.afterVisibleChange,
      getPopupContainer: getPopupContainer,
      onPopupVisibleChange: this.onVisibleChange,
      popup: this.getMenuElementOrLambda(),
      ref: this.saveTrigger
    });

    return _createVNode(Trigger, triggerProps, {
      default: function _default() {
        return [_this2.renderChildren()];
      }
    });
  }
});