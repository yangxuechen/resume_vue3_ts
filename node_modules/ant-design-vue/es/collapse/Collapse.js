import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, inject } from 'vue';
import animation from '../_util/openAnimation';
import { getOptionProps, getComponent, isValidElement, getSlot } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import VcCollapse from '../vc-collapse';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
var collapseProps = {
  prefixCls: PropTypes.string,
  activeKey: {
    type: [Array, Number, String]
  },
  defaultActiveKey: {
    type: [Array, Number, String]
  },
  accordion: PropTypes.looseBool,
  destroyInactivePanel: PropTypes.looseBool,
  bordered: PropTypes.looseBool.def(true),
  expandIcon: PropTypes.func,
  openAnimation: PropTypes.object.def(animation),
  expandIconPosition: PropTypes.oneOf(tuple('left', 'right')).def('left'),
  'onUpdate:activeKey': PropTypes.func,
  onChange: PropTypes.func
};
export default defineComponent({
  name: 'ACollapse',
  inheritAttrs: false,
  props: collapseProps,
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  methods: {
    renderExpandIcon: function renderExpandIcon() {
      var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var prefixCls = arguments.length > 1 ? arguments[1] : undefined;
      var expandIcon = getComponent(this, 'expandIcon', panelProps);

      var icon = expandIcon || _createVNode(RightOutlined, {
        "rotate": panelProps.isActive ? 90 : undefined
      }, null);

      return isValidElement(Array.isArray(expandIcon) ? icon[0] : icon) ? cloneElement(icon, {
        class: "".concat(prefixCls, "-arrow")
      }) : icon;
    },
    handleChange: function handleChange(activeKey) {
      this.$emit('update:activeKey', activeKey);
      this.$emit('change', activeKey);
    }
  },
  render: function render() {
    var _collapseClassName,
        _this = this;

    var customizePrefixCls = this.prefixCls,
        bordered = this.bordered,
        expandIconPosition = this.expandIconPosition;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('collapse', customizePrefixCls);

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var collapseClassName = (_collapseClassName = {}, _defineProperty(_collapseClassName, className, className), _defineProperty(_collapseClassName, "".concat(prefixCls, "-borderless"), !bordered), _defineProperty(_collapseClassName, "".concat(prefixCls, "-icon-position-").concat(expandIconPosition), true), _collapseClassName);

    var rcCollapeProps = _extends(_extends(_extends(_extends({}, getOptionProps(this)), {
      prefixCls: prefixCls,
      expandIcon: function expandIcon(panelProps) {
        return _this.renderExpandIcon(panelProps, prefixCls);
      },
      class: collapseClassName
    }), restAttrs), {
      onChange: this.handleChange
    });

    return _createVNode(VcCollapse, rcCollapeProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});