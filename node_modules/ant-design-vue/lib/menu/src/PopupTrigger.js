"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));

var _useMenuContext = require("./hooks/useMenuContext");

var _placements = require("./placements");

var _raf = _interopRequireDefault(require("../../_util/raf"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var _default = (0, _vue.defineComponent)({
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
    var innerVisible = (0, _vue.ref)(false);

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
        getPopupContainer = _useInjectMenu.getPopupContainer,
        rtl = _useInjectMenu.rtl,
        subMenuOpenDelay = _useInjectMenu.subMenuOpenDelay,
        subMenuCloseDelay = _useInjectMenu.subMenuCloseDelay,
        builtinPlacements = _useInjectMenu.builtinPlacements,
        triggerSubMenuAction = _useInjectMenu.triggerSubMenuAction,
        isRootMenu = _useInjectMenu.isRootMenu;

    var placement = (0, _vue.computed)(function () {
      return rtl.value ? (0, _extends2.default)((0, _extends2.default)({}, _placements.placementsRtl), builtinPlacements.value) : (0, _extends2.default)((0, _extends2.default)({}, _placements.placements), builtinPlacements.value);
    });
    var popupPlacement = (0, _vue.computed)(function () {
      return popupPlacementMap[props.mode];
    });
    var visibleRef = (0, _vue.ref)();
    (0, _vue.watch)(function () {
      return props.visible;
    }, function (visible) {
      _raf.default.cancel(visibleRef.value);

      visibleRef.value = (0, _raf.default)(function () {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    (0, _vue.onBeforeUnmount)(function () {
      _raf.default.cancel(visibleRef.value);
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
      return (0, _vue.createVNode)(_vcTrigger.default, {
        "prefixCls": prefixCls,
        "popupClassName": (0, _classNames2.default)("".concat(prefixCls, "-popup"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-rtl"), rtl.value), popupClassName),
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

exports.default = _default;