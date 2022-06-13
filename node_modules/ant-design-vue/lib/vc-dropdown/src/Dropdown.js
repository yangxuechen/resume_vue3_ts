"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));

var _placements = _interopRequireDefault(require("./placements"));

var _propsUtil = require("../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _vnode = require("../../_util/vnode");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _default2 = (0, _vue.defineComponent)({
  mixins: [_BaseMixin.default],
  props: {
    minOverlayWidthMatchTrigger: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string.def('rc-dropdown'),
    transitionName: _vueTypes.default.string,
    overlayClassName: _vueTypes.default.string.def(''),
    openClassName: _vueTypes.default.string,
    animation: _vueTypes.default.any,
    align: _vueTypes.default.object,
    overlayStyle: _vueTypes.default.object.def(function () {
      return {};
    }),
    placement: _vueTypes.default.string.def('bottomLeft'),
    overlay: _vueTypes.default.any,
    trigger: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string)]).def('hover'),
    alignPoint: _vueTypes.default.looseBool,
    showAction: _vueTypes.default.array,
    hideAction: _vueTypes.default.array,
    getPopupContainer: _vueTypes.default.func,
    visible: _vueTypes.default.looseBool,
    defaultVisible: _vueTypes.default.looseBool.def(false),
    mouseEnterDelay: _vueTypes.default.number.def(0.15),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1)
  },
  data: function data() {
    var sVisible = this.defaultVisible;

    if ((0, _propsUtil.hasProp)(this, 'visible')) {
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

      if (!(0, _propsUtil.hasProp)(this, 'visible')) {
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
      if (!(0, _propsUtil.hasProp)(this, 'visible')) {
        this.setState({
          sVisible: visible
        });
      }

      this.__emit('update:visible', visible);

      this.__emit('visibleChange', visible);
    },
    getMinOverlayWidthMatchTrigger: function getMinOverlayWidthMatchTrigger() {
      var props = (0, _propsUtil.getOptionProps)(this);
      var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
          alignPoint = props.alignPoint;

      if ('minOverlayWidthMatchTrigger' in props) {
        return minOverlayWidthMatchTrigger;
      }

      return !alignPoint;
    },
    getOverlayElement: function getOverlayElement() {
      var overlay = (0, _propsUtil.getComponent)(this, 'overlay');
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

      if (overlayElement && overlayElement.type === _vue.Text) {
        delete extraOverlayProps.prefixCls;
      }

      return (0, _vnode.cloneElement)(overlayElement, extraOverlayProps);
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
        var rootNode = (0, _propsUtil.findDOMNode)(this);

        if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
          overlayNode.style.minWidth = "".concat(rootNode.offsetWidth, "px");

          if (this.triggerRef && this.triggerRef._component && this.triggerRef._component.alignInstance) {
            this.triggerRef._component.alignInstance.forceAlign();
          }
        }
      }
    },
    renderChildren: function renderChildren() {
      var children = (0, _propsUtil.getSlot)(this);
      var sVisible = this.sVisible;
      return sVisible && children ? (0, _vnode.cloneElement)(children[0], {
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

    var triggerProps = (0, _extends2.default)((0, _extends2.default)({}, otherProps), {
      prefixCls: prefixCls,
      popupClassName: overlayClassName,
      popupStyle: overlayStyle,
      builtinPlacements: _placements.default,
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
    return (0, _vue.createVNode)(_vcTrigger.default, triggerProps, {
      default: function _default() {
        return [_this2.renderChildren()];
      }
    });
  }
});

exports.default = _default2;