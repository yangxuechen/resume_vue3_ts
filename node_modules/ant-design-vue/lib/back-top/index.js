"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backTopProps = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/VerticalAlignTopOutlined"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));

var _getScroll = _interopRequireDefault(require("../_util/getScroll"));

var _transition = require("../_util/transition");

var _configProvider = require("../config-provider");

var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

var _type = require("../_util/type");

var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));

var backTopProps = {
  visibilityHeight: _vueTypes.default.number.def(400),
  duration: _vueTypes.default.number.def(450),
  target: Function,
  prefixCls: _vueTypes.default.string,
  onClick: _vueTypes.default.func // visible: PropTypes.looseBool, // Only for test. Don't use it.

};
exports.backTopProps = backTopProps;
var BackTop = (0, _vue.defineComponent)({
  name: 'ABackTop',
  inheritAttrs: false,
  props: backTopProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var domRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
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
      (0, _scrollTo.default)(0, {
        getContainer: target,
        duration: duration
      });
      emit('click', e);
    };

    var handleScroll = (0, _throttleByAnimationFrame.default)(function (e) {
      var visibilityHeight = props.visibilityHeight;
      var scrollTop = (0, _getScroll.default)(e.target, true);
      state.visible = scrollTop > visibilityHeight;
    });

    var bindScrollEvent = function bindScrollEvent() {
      var target = props.target;
      var getTarget = target || getDefaultTarget;
      var container = getTarget();
      state.scrollEvent = (0, _addEventListener.default)(container, 'scroll', function (e) {
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

    (0, _vue.watch)(function () {
      return props.target;
    }, function () {
      scrollRemove();
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onActivated)(function () {
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onDeactivated)(function () {
      scrollRemove();
    });
    (0, _vue.onBeforeUnmount)(function () {
      scrollRemove();
    });
    var prefixCls = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('back-top', props.prefixCls);
    });
    return function () {
      var _class;

      var _a;

      var defaultElement = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-icon")
      }, [(0, _vue.createVNode)(_VerticalAlignTopOutlined.default, null, null)])]);
      var divProps = (0, _extends2.default)((0, _extends2.default)({}, attrs), {
        onClick: scrollToTop,
        class: (_class = {}, (0, _defineProperty2.default)(_class, "".concat(prefixCls.value), true), (0, _defineProperty2.default)(_class, "".concat(attrs.class), attrs.class), (0, _defineProperty2.default)(_class, "".concat(prefixCls.value, "-rtl"), configProvider.direction === 'rtl'), _class)
      });
      var backTopBtn = state.visible ? (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, divProps), {}, {
        "ref": domRef
      }), [((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultElement]) : null;
      var transitionProps = (0, _transition.getTransitionProps)('fade');
      return (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [backTopBtn];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(BackTop);

exports.default = _default2;