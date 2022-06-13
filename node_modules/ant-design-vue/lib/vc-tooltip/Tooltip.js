"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));

var _placements = require("./placements");

var _Content = _interopRequireDefault(require("./Content"));

var _propsUtil = require("../_util/props-util");

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

function noop() {}

var _default2 = (0, _vue.defineComponent)({
  name: 'Tooltip',
  inheritAttrs: false,
  props: {
    trigger: _vueTypes.default.any.def(['hover']),
    defaultVisible: _vueTypes.default.looseBool,
    visible: _vueTypes.default.looseBool,
    placement: _vueTypes.default.string.def('right'),
    transitionName: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object]),
    animation: _vueTypes.default.any,
    afterVisibleChange: _vueTypes.default.func.def(function () {}),
    overlay: _vueTypes.default.any,
    overlayStyle: _vueTypes.default.object,
    overlayClassName: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string.def('rc-tooltip'),
    mouseEnterDelay: _vueTypes.default.number.def(0),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1),
    getTooltipContainer: _vueTypes.default.func,
    destroyTooltipOnHide: _vueTypes.default.looseBool.def(false),
    align: _vueTypes.default.object.def(function () {
      return {};
    }),
    arrowContent: _vueTypes.default.any.def(null),
    tipId: _vueTypes.default.string,
    builtinPlacements: _vueTypes.default.object,
    overlayInnerStyle: _vueTypes.default.style
  },
  methods: {
    getPopupElement: function getPopupElement() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          tipId = _this$$props.tipId,
          overlayInnerStyle = _this$$props.overlayInnerStyle;
      return [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-arrow"),
        "key": "arrow"
      }, [(0, _propsUtil.getComponent)(this, 'arrowContent')]), (0, _vue.createVNode)(_Content.default, {
        "key": "content",
        "trigger": this.$refs.trigger,
        "prefixCls": prefixCls,
        "id": tipId,
        "overlay": (0, _propsUtil.getComponent)(this, 'overlay'),
        "overlayInnerStyle": overlayInnerStyle
      }, null)];
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.trigger.getPopupDomNode();
    }
  },
  render: function render(h) {
    var _this = this;

    var _a = (0, _propsUtil.getOptionProps)(this),
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

    var extraProps = (0, _extends2.default)({}, restProps);

    if ((0, _propsUtil.hasProp)(this, 'visible')) {
      extraProps.popupVisible = this.$props.visible;
    }

    var $attrs = this.$attrs;
    var triggerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
      popupClassName: overlayClassName,
      prefixCls: prefixCls,
      action: trigger,
      builtinPlacements: _placements.placements,
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
    return (0, _vue.createVNode)(_vcTrigger.default, triggerProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)[0]];
      }
    });
  }
});

exports.default = _default2;