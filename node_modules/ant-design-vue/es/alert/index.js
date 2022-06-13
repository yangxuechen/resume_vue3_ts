import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { inject, cloneVNode, defineComponent, ref } from 'vue';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import CheckCircleOutlined from '@ant-design/icons-vue/CheckCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons-vue/ExclamationCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons-vue/InfoCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons-vue/CloseCircleOutlined';
import CheckCircleFilled from '@ant-design/icons-vue/CheckCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons-vue/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons-vue/InfoCircleFilled';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { getTransitionProps, Transition } from '../_util/transition';
import { isValidElement, getPropsSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { tuple, withInstall } from '../_util/type';

function noop() {}

var iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
var iconMapOutlined = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
var AlertTypes = tuple('success', 'info', 'warning', 'error');
var alertProps = {
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: PropTypes.oneOf(AlertTypes),

  /** Whether Alert can be closed */
  closable: PropTypes.looseBool,

  /** Close text to show */
  closeText: PropTypes.VNodeChild,

  /** Content of Alert */
  message: PropTypes.VNodeChild,

  /** Additional content of Alert */
  description: PropTypes.VNodeChild,

  /** Trigger when animation ending of Alert */
  afterClose: PropTypes.func.def(noop),

  /** Whether to show icon */
  showIcon: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  banner: PropTypes.looseBool,
  icon: PropTypes.VNodeChild,
  onClose: PropTypes.VNodeChild
};
var Alert = defineComponent({
  name: 'AAlert',
  inheritAttrs: false,
  props: alertProps,
  emits: ['close'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs,
        expose = _ref.expose;
    var configProvider = inject('configProvider', defaultConfigProvider);
    var closing = ref(false);
    var closed = ref(false);
    var alertNode = ref();

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
      var closeText = getPropsSlot(slots, props, 'closeText');
      var description = getPropsSlot(slots, props, 'description');
      var message = getPropsSlot(slots, props, 'message');
      var icon = getPropsSlot(slots, props, 'icon'); // banner模式默认有 Icon

      showIcon = banner && showIcon === undefined ? true : showIcon; // banner模式默认为警告

      type = banner && type === undefined ? 'warning' : type || 'info';
      var IconType = (description ? iconMapOutlined : iconMapFilled)[type] || null; // closeable when closeText is assigned

      if (closeText) {
        closable = true;
      }

      var alertCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_classNames, "".concat(prefixCls, "-closing"), closing.value), _defineProperty(_classNames, "".concat(prefixCls, "-with-description"), !!description), _defineProperty(_classNames, "".concat(prefixCls, "-no-icon"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-banner"), !!banner), _defineProperty(_classNames, "".concat(prefixCls, "-closable"), closable), _classNames));
      var closeIcon = closable ? _createVNode("button", {
        "type": "button",
        "onClick": handleClose,
        "class": "".concat(prefixCls, "-close-icon"),
        "tabindex": 0
      }, [closeText ? _createVNode("span", {
        "class": "".concat(prefixCls, "-close-text")
      }, [closeText]) : _createVNode(CloseOutlined, null, null)]) : null;

      var iconNode = icon && (isValidElement(icon) ? cloneVNode(icon, {
        class: "".concat(prefixCls, "-icon")
      }) : _createVNode("span", {
        "class": "".concat(prefixCls, "-icon")
      }, [icon])) || _createVNode(IconType, {
        "class": "".concat(prefixCls, "-icon")
      }, null);

      var transitionProps = getTransitionProps("".concat(prefixCls, "-slide-up"), {
        appear: false,
        onAfterLeave: animationEnd
      });
      return closed.value ? null : _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
            "class": [attrs.class, alertCls],
            "data-show": !closing.value,
            "ref": alertNode
          }), [showIcon ? iconNode : null, _createVNode("div", {
            "class": "".concat(prefixCls, "-content")
          }, [_createVNode("div", {
            "class": "".concat(prefixCls, "-message")
          }, [message]), _createVNode("div", {
            "class": "".concat(prefixCls, "-description")
          }, [description])]), closeIcon]), [[_vShow, !closing.value]])];
        }
      });
    };
  }
});
export default withInstall(Alert);