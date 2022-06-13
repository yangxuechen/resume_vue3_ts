import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import classNames from '../_util/classNames';
import Dialog from '../vc-dialog';
import PropTypes from '../_util/vue-types';
import addEventListener from '../vc-util/Dom/addEventListener';
import { getConfirmLocale } from './locale';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import Button from '../button';
import buttonTypes, { convertLegacyProps } from '../button/buttonTypes';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';
var mousePosition = null; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListener(document.documentElement, 'click', getClickPosition, true);
}

function noop() {}

var modalProps = {
  prefixCls: PropTypes.string,

  /** 对话框是否可见*/
  visible: PropTypes.looseBool,

  /** 确定按钮 loading*/
  confirmLoading: PropTypes.looseBool,

  /** 标题*/
  title: PropTypes.any,

  /** 是否显示右上角的关闭按钮*/
  closable: PropTypes.looseBool,
  closeIcon: PropTypes.any,

  /** 点击确定回调*/
  onOk: {
    type: Function
  },

  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
  onCancel: {
    type: Function
  },
  afterClose: PropTypes.func.def(noop),

  /** 垂直居中 */
  centered: PropTypes.looseBool,

  /** 宽度*/
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** 底部内容*/
  footer: PropTypes.any,

  /** 确认按钮文字*/
  okText: PropTypes.any,

  /** 确认按钮类型*/
  okType: {
    type: String
  },

  /** 取消按钮文字*/
  cancelText: PropTypes.any,
  icon: PropTypes.any,

  /** 点击蒙层是否允许关闭*/
  maskClosable: PropTypes.looseBool,

  /** 强制渲染 Modal*/
  forceRender: PropTypes.looseBool,
  okButtonProps: PropTypes.shape(buttonTypes).loose,
  cancelButtonProps: PropTypes.shape(buttonTypes).loose,
  destroyOnClose: PropTypes.looseBool,
  wrapClassName: PropTypes.string,
  maskTransitionName: PropTypes.string,
  transitionName: PropTypes.string,
  getContainer: PropTypes.any,
  zIndex: PropTypes.number,
  bodyStyle: PropTypes.style,
  maskStyle: PropTypes.style,
  mask: PropTypes.looseBool,
  keyboard: PropTypes.looseBool,
  wrapProps: PropTypes.object,
  focusTriggerAfterClose: PropTypes.looseBool
};
export var destroyFns = [];
export default defineComponent({
  name: 'AModal',
  inheritAttrs: false,
  props: initDefaultProps(modalProps, {
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'
  }),
  emits: ['update:visible', 'cancel', 'change', 'ok'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      sVisible: !!this.visible
    };
  },
  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    handleCancel: function handleCancel(e) {
      this.$emit('update:visible', false);
      this.$emit('cancel', e);
      this.$emit('change', false);
    },
    handleOk: function handleOk(e) {
      this.$emit('ok', e);
    },
    renderFooter: function renderFooter(locale) {
      var _this = this;

      var okType = this.okType,
          confirmLoading = this.confirmLoading;

      var cancelBtnProps = _extends({
        onClick: this.handleCancel
      }, this.cancelButtonProps || {});

      var okBtnProps = _extends(_extends(_extends({
        onClick: this.handleOk
      }, convertLegacyProps(okType)), {
        loading: confirmLoading
      }), this.okButtonProps || {});

      return _createVNode("div", null, [_createVNode(Button, cancelBtnProps, {
        default: function _default() {
          return [getComponent(_this, 'cancelText') || locale.cancelText];
        }
      }), _createVNode(Button, okBtnProps, {
        default: function _default() {
          return [getComponent(_this, 'okText') || locale.okText];
        }
      })]);
    }
  },
  render: function render() {
    var customizePrefixCls = this.prefixCls,
        visible = this.sVisible,
        wrapClassName = this.wrapClassName,
        centered = this.centered,
        getContainer = this.getContainer,
        $attrs = this.$attrs;
    var children = getSlot(this);
    var _this$configProvider = this.configProvider,
        getPrefixCls = _this$configProvider.getPrefixCls,
        getContextPopupContainer = _this$configProvider.getPopupContainer;
    var prefixCls = getPrefixCls('modal', customizePrefixCls);

    var defaultFooter = _createVNode(LocaleReceiver, {
      "componentName": "Modal",
      "defaultLocale": getConfirmLocale(),
      "children": this.renderFooter
    }, null);

    var closeIcon = getComponent(this, 'closeIcon');

    var closeIconToRender = _createVNode("span", {
      "class": "".concat(prefixCls, "-close-x")
    }, [closeIcon || _createVNode(CloseOutlined, {
      "class": "".concat(prefixCls, "-close-icon")
    }, null)]);

    var footer = getComponent(this, 'footer');
    var title = getComponent(this, 'title');

    var dialogProps = _extends(_extends(_extends({}, this.$props), $attrs), {
      getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
      prefixCls: prefixCls,
      wrapClassName: classNames(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
      title: title,
      footer: footer === undefined ? defaultFooter : footer,
      visible: visible,
      mousePosition: mousePosition,
      closeIcon: closeIconToRender,
      onClose: this.handleCancel
    });

    return _createVNode(Dialog, dialogProps, {
      default: function _default() {
        return [children];
      }
    });
  }
});