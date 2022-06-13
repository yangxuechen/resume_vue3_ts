import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import omit from 'omit.js';
import { defineComponent, inject } from 'vue';
import Tooltip from '../tooltip';
import abstractTooltipProps from '../tooltip/abstractTooltipProps';
import PropTypes from '../_util/vue-types';
import { getOptionProps, hasProp, getComponent, mergeProps } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { convertLegacyProps } from '../button/buttonTypes';
import ExclamationCircleFilled from '@ant-design/icons-vue/ExclamationCircleFilled';
import Button from '../button';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';
import { defaultConfigProvider } from '../config-provider';
import { withInstall } from '../_util/type';
var tooltipProps = abstractTooltipProps();
var Popconfirm = defineComponent({
  name: 'APopconfirm',
  mixins: [BaseMixin],
  props: _extends(_extends({}, tooltipProps), {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string.def('zoom-big'),
    content: PropTypes.any,
    title: PropTypes.any,
    trigger: tooltipProps.trigger.def('click'),
    okType: {
      type: String,
      default: 'primary'
    },
    disabled: PropTypes.looseBool.def(false),
    okText: PropTypes.any,
    cancelText: PropTypes.any,
    icon: PropTypes.any,
    okButtonProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onVisibleChange: PropTypes.func
  }),
  emits: ['update:visible', 'confirm', 'cancel', 'visibleChange'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var props = getOptionProps(this);
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
      if (!hasProp(this, 'visible')) {
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

      var icon = getComponent(this, 'icon') || _createVNode(ExclamationCircleFilled, null, null);

      var cancelBtnProps = mergeProps(_extends({
        size: 'small',
        onClick: this.onCancelHandle
      }, cancelButtonProps));
      var okBtnProps = mergeProps(_extends(_extends(_extends({}, convertLegacyProps(okType)), {
        size: 'small',
        onClick: this.onConfirmHandle
      }), okButtonProps));
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-inner-content")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-message")
      }, [icon, _createVNode("div", {
        "class": "".concat(prefixCls, "-message-title")
      }, [getComponent(this, 'title')])]), _createVNode("div", {
        "class": "".concat(prefixCls, "-buttons")
      }, [_createVNode(Button, cancelBtnProps, {
        default: function _default() {
          return [getComponent(_this, 'cancelText') || popconfirmLocale.cancelText];
        }
      }), _createVNode(Button, okBtnProps, {
        default: function _default() {
          return [getComponent(_this, 'okText') || popconfirmLocale.okText];
        }
      })])]);
    }
  },
  render: function render() {
    var _this2 = this;

    var _a;

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('popover', customizePrefixCls);
    var otherProps = omit(props, ['title', 'content', 'cancelText', 'okText', 'onUpdate:visible']);

    var overlay = _createVNode(LocaleReceiver, {
      "componentName": "Popconfirm",
      "defaultLocale": defaultLocale.Popconfirm,
      "children": function children(popconfirmLocale) {
        return _this2.renderOverlay(prefixCls, popconfirmLocale);
      }
    }, null);

    var tooltipProps = _extends(_extends({}, otherProps), {
      title: overlay,
      prefixCls: prefixCls,
      visible: this.sVisible,
      ref: 'tooltip',
      onVisibleChange: this.onVisibleChangeHandle
    });

    return _createVNode(Tooltip, tooltipProps, {
      default: function _default() {
        return [(_a = _this2.$slots) === null || _a === void 0 ? void 0 : _a.default()];
      }
    });
  }
});
export default withInstall(Popconfirm);