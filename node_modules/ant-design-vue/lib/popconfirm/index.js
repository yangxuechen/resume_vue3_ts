"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _omit = _interopRequireDefault(require("omit.js"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _abstractTooltipProps = _interopRequireDefault(require("../tooltip/abstractTooltipProps"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _buttonTypes = require("../button/buttonTypes");

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));

var _button = _interopRequireDefault(require("../button"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _default3 = _interopRequireDefault(require("../locale-provider/default"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var tooltipProps = (0, _abstractTooltipProps.default)();
var Popconfirm = (0, _vue.defineComponent)({
  name: 'APopconfirm',
  mixins: [_BaseMixin.default],
  props: (0, _extends2.default)((0, _extends2.default)({}, tooltipProps), {
    prefixCls: _vueTypes.default.string,
    transitionName: _vueTypes.default.string.def('zoom-big'),
    content: _vueTypes.default.any,
    title: _vueTypes.default.any,
    trigger: tooltipProps.trigger.def('click'),
    okType: {
      type: String,
      default: 'primary'
    },
    disabled: _vueTypes.default.looseBool.def(false),
    okText: _vueTypes.default.any,
    cancelText: _vueTypes.default.any,
    icon: _vueTypes.default.any,
    okButtonProps: _vueTypes.default.object,
    cancelButtonProps: _vueTypes.default.object,
    onConfirm: _vueTypes.default.func,
    onCancel: _vueTypes.default.func,
    onVisibleChange: _vueTypes.default.func
  }),
  emits: ['update:visible', 'confirm', 'cancel', 'visibleChange'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var state = {
      sVisible: false
    };

    if ('visible' in props) {
      state.sVisible = props.visible;
    }

    if ('defaultVisible' in props) {
      state.sVisible = props.defaultVisible;
    }

    return state;
  },
  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    onConfirmHandle: function onConfirmHandle(e) {
      this.setVisible(false, e);
      this.$emit('confirm', e);
    },
    onCancelHandle: function onCancelHandle(e) {
      this.setVisible(false, e);
      this.$emit('cancel', e);
    },
    onVisibleChangeHandle: function onVisibleChangeHandle(sVisible) {
      var disabled = this.$props.disabled;

      if (disabled) {
        return;
      }

      this.setVisible(sVisible);
    },
    setVisible: function setVisible(sVisible, e) {
      if (!(0, _propsUtil.hasProp)(this, 'visible')) {
        this.setState({
          sVisible: sVisible
        });
      }

      this.$emit('update:visible', sVisible);
      this.$emit('visibleChange', sVisible, e);
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    renderOverlay: function renderOverlay(prefixCls, popconfirmLocale) {
      var _this = this;

      var okType = this.okType,
          okButtonProps = this.okButtonProps,
          cancelButtonProps = this.cancelButtonProps;
      var icon = (0, _propsUtil.getComponent)(this, 'icon') || (0, _vue.createVNode)(_ExclamationCircleFilled.default, null, null);
      var cancelBtnProps = (0, _propsUtil.mergeProps)((0, _extends2.default)({
        size: 'small',
        onClick: this.onCancelHandle
      }, cancelButtonProps));
      var okBtnProps = (0, _propsUtil.mergeProps)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _buttonTypes.convertLegacyProps)(okType)), {
        size: 'small',
        onClick: this.onConfirmHandle
      }), okButtonProps));
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-inner-content")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-message")
      }, [icon, (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-message-title")
      }, [(0, _propsUtil.getComponent)(this, 'title')])]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-buttons")
      }, [(0, _vue.createVNode)(_button.default, cancelBtnProps, {
        default: function _default() {
          return [(0, _propsUtil.getComponent)(_this, 'cancelText') || popconfirmLocale.cancelText];
        }
      }), (0, _vue.createVNode)(_button.default, okBtnProps, {
        default: function _default() {
          return [(0, _propsUtil.getComponent)(_this, 'okText') || popconfirmLocale.okText];
        }
      })])]);
    }
  },
  render: function render() {
    var _this2 = this;

    var _a;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('popover', customizePrefixCls);
    var otherProps = (0, _omit.default)(props, ['title', 'content', 'cancelText', 'okText', 'onUpdate:visible']);
    var overlay = (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Popconfirm",
      "defaultLocale": _default3.default.Popconfirm,
      "children": function children(popconfirmLocale) {
        return _this2.renderOverlay(prefixCls, popconfirmLocale);
      }
    }, null);
    var tooltipProps = (0, _extends2.default)((0, _extends2.default)({}, otherProps), {
      title: overlay,
      prefixCls: prefixCls,
      visible: this.sVisible,
      ref: 'tooltip',
      onVisibleChange: this.onVisibleChangeHandle
    });
    return (0, _vue.createVNode)(_tooltip.default, tooltipProps, {
      default: function _default() {
        return [(_a = _this2.$slots) === null || _a === void 0 ? void 0 : _a.default()];
      }
    });
  }
});

var _default2 = (0, _type.withInstall)(Popconfirm);

exports.default = _default2;