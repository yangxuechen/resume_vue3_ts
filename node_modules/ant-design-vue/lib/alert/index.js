"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleOutlined"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleOutlined"));

var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleOutlined"));

var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleOutlined"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));

var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _transition = require("../_util/transition");

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

function noop() {}

var iconMapFilled = {
  success: _CheckCircleFilled.default,
  info: _InfoCircleFilled.default,
  error: _CloseCircleFilled.default,
  warning: _ExclamationCircleFilled.default
};
var iconMapOutlined = {
  success: _CheckCircleOutlined.default,
  info: _InfoCircleOutlined.default,
  error: _CloseCircleOutlined.default,
  warning: _ExclamationCircleOutlined.default
};
var AlertTypes = (0, _type.tuple)('success', 'info', 'warning', 'error');
var alertProps = {
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: _vueTypes.default.oneOf(AlertTypes),

  /** Whether Alert can be closed */
  closable: _vueTypes.default.looseBool,

  /** Close text to show */
  closeText: _vueTypes.default.VNodeChild,

  /** Content of Alert */
  message: _vueTypes.default.VNodeChild,

  /** Additional content of Alert */
  description: _vueTypes.default.VNodeChild,

  /** Trigger when animation ending of Alert */
  afterClose: _vueTypes.default.func.def(noop),

  /** Whether to show icon */
  showIcon: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  banner: _vueTypes.default.looseBool,
  icon: _vueTypes.default.VNodeChild,
  onClose: _vueTypes.default.VNodeChild
};
var Alert = (0, _vue.defineComponent)({
  name: 'AAlert',
  inheritAttrs: false,
  props: alertProps,
  emits: ['close'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs,
        expose = _ref.expose;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var closing = (0, _vue.ref)(false);
    var closed = (0, _vue.ref)(false);
    var alertNode = (0, _vue.ref)();

    var handleClose = function handleClose(e) {
      e.preventDefault();
      var dom = alertNode.value;
      dom.style.height = "".concat(dom.offsetHeight, "px"); // Magic code
      // 重复一次后才能正确设置 height

      dom.style.height = "".concat(dom.offsetHeight, "px");
      closing.value = true;
      emit('close', e);
    };

    var animationEnd = function animationEnd() {
      var _a;

      closing.value = false;
      closed.value = true;
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    };

    expose({
      animationEnd: animationEnd
    });
    return function () {
      var _classNames;

      var customizePrefixCls = props.prefixCls,
          banner = props.banner;
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('alert', customizePrefixCls);
      var closable = props.closable,
          type = props.type,
          showIcon = props.showIcon;
      var closeText = (0, _propsUtil.getPropsSlot)(slots, props, 'closeText');
      var description = (0, _propsUtil.getPropsSlot)(slots, props, 'description');
      var message = (0, _propsUtil.getPropsSlot)(slots, props, 'message');
      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon'); // banner模式默认有 Icon

      showIcon = banner && showIcon === undefined ? true : showIcon; // banner模式默认为警告

      type = banner && type === undefined ? 'warning' : type || 'info';
      var IconType = (description ? iconMapOutlined : iconMapFilled)[type] || null; // closeable when closeText is assigned

      if (closeText) {
        closable = true;
      }

      var alertCls = (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(type), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-closing"), closing.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-with-description"), !!description), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-no-icon"), !showIcon), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-banner"), !!banner), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-closable"), closable), _classNames));
      var closeIcon = closable ? (0, _vue.createVNode)("button", {
        "type": "button",
        "onClick": handleClose,
        "class": "".concat(prefixCls, "-close-icon"),
        "tabindex": 0
      }, [closeText ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-close-text")
      }, [closeText]) : (0, _vue.createVNode)(_CloseOutlined.default, null, null)]) : null;
      var iconNode = icon && ((0, _propsUtil.isValidElement)(icon) ? (0, _vue.cloneVNode)(icon, {
        class: "".concat(prefixCls, "-icon")
      }) : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-icon")
      }, [icon])) || (0, _vue.createVNode)(IconType, {
        "class": "".concat(prefixCls, "-icon")
      }, null);
      var transitionProps = (0, _transition.getTransitionProps)("".concat(prefixCls, "-slide-up"), {
        appear: false,
        onAfterLeave: animationEnd
      });
      return closed.value ? null : (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
            "class": [attrs.class, alertCls],
            "data-show": !closing.value,
            "ref": alertNode
          }), [showIcon ? iconNode : null, (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-content")
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-message")
          }, [message]), (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-description")
          }, [description])]), closeIcon]), [[_vue.vShow, !closing.value]])];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(Alert);

exports.default = _default2;