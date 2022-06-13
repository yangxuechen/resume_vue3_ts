"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.destroyFns = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vcDialog = _interopRequireDefault(require("../vc-dialog"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));

var _locale = require("./locale");

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _button = _interopRequireDefault(require("../button"));

var _buttonTypes = _interopRequireWildcard(require("../button/buttonTypes"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  (0, _addEventListener.default)(document.documentElement, 'click', getClickPosition, true);
}

function noop() {}

var modalProps = {
  prefixCls: _vueTypes.default.string,

  /** 对话框是否可见*/
  visible: _vueTypes.default.looseBool,

  /** 确定按钮 loading*/
  confirmLoading: _vueTypes.default.looseBool,

  /** 标题*/
  title: _vueTypes.default.any,

  /** 是否显示右上角的关闭按钮*/
  closable: _vueTypes.default.looseBool,
  closeIcon: _vueTypes.default.any,

  /** 点击确定回调*/
  onOk: {
    type: Function
  },

  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
  onCancel: {
    type: Function
  },
  afterClose: _vueTypes.default.func.def(noop),

  /** 垂直居中 */
  centered: _vueTypes.default.looseBool,

  /** 宽度*/
  width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),

  /** 底部内容*/
  footer: _vueTypes.default.any,

  /** 确认按钮文字*/
  okText: _vueTypes.default.any,

  /** 确认按钮类型*/
  okType: {
    type: String
  },

  /** 取消按钮文字*/
  cancelText: _vueTypes.default.any,
  icon: _vueTypes.default.any,

  /** 点击蒙层是否允许关闭*/
  maskClosable: _vueTypes.default.looseBool,

  /** 强制渲染 Modal*/
  forceRender: _vueTypes.default.looseBool,
  okButtonProps: _vueTypes.default.shape(_buttonTypes.default).loose,
  cancelButtonProps: _vueTypes.default.shape(_buttonTypes.default).loose,
  destroyOnClose: _vueTypes.default.looseBool,
  wrapClassName: _vueTypes.default.string,
  maskTransitionName: _vueTypes.default.string,
  transitionName: _vueTypes.default.string,
  getContainer: _vueTypes.default.any,
  zIndex: _vueTypes.default.number,
  bodyStyle: _vueTypes.default.style,
  maskStyle: _vueTypes.default.style,
  mask: _vueTypes.default.looseBool,
  keyboard: _vueTypes.default.looseBool,
  wrapProps: _vueTypes.default.object,
  focusTriggerAfterClose: _vueTypes.default.looseBool
};
var destroyFns = [];
exports.destroyFns = destroyFns;

var _default2 = (0, _vue.defineComponent)({
  name: 'AModal',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(modalProps, {
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
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
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
      var cancelBtnProps = (0, _extends2.default)({
        onClick: this.handleCancel
      }, this.cancelButtonProps || {});
      var okBtnProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
        onClick: this.handleOk
      }, (0, _buttonTypes.convertLegacyProps)(okType)), {
        loading: confirmLoading
      }), this.okButtonProps || {});
      return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_button.default, cancelBtnProps, {
        default: function _default() {
          return [(0, _propsUtil.getComponent)(_this, 'cancelText') || locale.cancelText];
        }
      }), (0, _vue.createVNode)(_button.default, okBtnProps, {
        default: function _default() {
          return [(0, _propsUtil.getComponent)(_this, 'okText') || locale.okText];
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
    var children = (0, _propsUtil.getSlot)(this);
    var _this$configProvider = this.configProvider,
        getPrefixCls = _this$configProvider.getPrefixCls,
        getContextPopupContainer = _this$configProvider.getPopupContainer;
    var prefixCls = getPrefixCls('modal', customizePrefixCls);
    var defaultFooter = (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Modal",
      "defaultLocale": (0, _locale.getConfirmLocale)(),
      "children": this.renderFooter
    }, null);
    var closeIcon = (0, _propsUtil.getComponent)(this, 'closeIcon');
    var closeIconToRender = (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-close-x")
    }, [closeIcon || (0, _vue.createVNode)(_CloseOutlined.default, {
      "class": "".concat(prefixCls, "-close-icon")
    }, null)]);
    var footer = (0, _propsUtil.getComponent)(this, 'footer');
    var title = (0, _propsUtil.getComponent)(this, 'title');
    var dialogProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), $attrs), {
      getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
      prefixCls: prefixCls,
      wrapClassName: (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
      title: title,
      footer: footer === undefined ? defaultFooter : footer,
      visible: visible,
      mousePosition: mousePosition,
      closeIcon: closeIconToRender,
      onClose: this.handleCancel
    });
    return (0, _vue.createVNode)(_vcDialog.default, dialogProps, {
      default: function _default() {
        return [children];
      }
    });
  }
});

exports.default = _default2;