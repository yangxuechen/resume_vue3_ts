import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { provide, inject, cloneVNode, defineComponent } from 'vue';
import RcDropdown from '../vc-dropdown/src/index';
import DropdownButton from './dropdown-button';
import PropTypes from '../_util/vue-types';
import { cloneElement } from '../_util/vnode';
import classNames from '../_util/classNames';
import { getOptionProps, getPropsData, getComponent, isValidElement, getSlot } from '../_util/props-util';
import getDropdownProps from './getDropdownProps';
import { defaultConfigProvider } from '../config-provider';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
var dropdownProps = getDropdownProps();
var Dropdown = defineComponent({
  name: 'ADropdown',
  inheritAttrs: false,
  props: _extends(_extends({}, dropdownProps), {
    prefixCls: PropTypes.string,
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1),
    placement: dropdownProps.placement.def('bottomLeft'),
    onVisibleChange: PropTypes.func,
    'onUpdate:visible': PropTypes.func
  }),
  emits: ['visibleChange', 'update:visible'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      popupRef: null
    };
  },
  created: function created() {
    provide('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    getTransitionName: function getTransitionName() {
      var _this$$props = this.$props,
          _this$$props$placemen = _this$$props.placement,
          placement = _this$$props$placemen === void 0 ? '' : _this$$props$placemen,
          transitionName = _this$$props.transitionName;

      if (transitionName !== undefined) {
        return transitionName;
      }

      if (placement.indexOf('top') >= 0) {
        return 'slide-down';
      }

      return 'slide-up';
    },
    renderOverlay: function renderOverlay(prefixCls) {
      var overlay = getComponent(this, 'overlay');
      var overlayNode = Array.isArray(overlay) ? overlay[0] : overlay; // menu cannot be selectable in dropdown defaultly
      // menu should be focusable in dropdown defaultly

      var overlayProps = overlayNode && getPropsData(overlayNode);

      var _ref = overlayProps || {},
          _ref$selectable = _ref.selectable,
          selectable = _ref$selectable === void 0 ? false : _ref$selectable,
          _ref$focusable = _ref.focusable,
          focusable = _ref$focusable === void 0 ? true : _ref$focusable;

      var expandIcon = function expandIcon() {
        return _createVNode("span", {
          "class": "".concat(prefixCls, "-menu-submenu-arrow")
        }, [_createVNode(RightOutlined, {
          "class": "".concat(prefixCls, "-menu-submenu-arrow-icon")
        }, null)]);
      };

      var fixedModeOverlay = isValidElement(overlayNode) ? cloneVNode(overlayNode, {
        mode: 'vertical',
        selectable: selectable,
        focusable: focusable,
        expandIcon: expandIcon
      }) : overlay;
      return fixedModeOverlay;
    },
    handleVisibleChange: function handleVisibleChange(val) {
      this.$emit('update:visible', val);
      this.$emit('visibleChange', val);
    }
  },
  render: function render() {
    var _a;

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
        trigger = props.trigger,
        disabled = props.disabled,
        getPopupContainer = props.getPopupContainer;
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    var child = getSlot(this)[0];
    var dropdownTrigger = cloneElement(child, {
      class: classNames((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.class, "".concat(prefixCls, "-trigger")),
      disabled: disabled
    });
    var triggerActions = disabled ? [] : typeof trigger === 'string' ? [trigger] : trigger;
    var alignPoint;

    if (triggerActions && triggerActions.indexOf('contextmenu') !== -1) {
      alignPoint = true;
    }

    var dropdownProps = _extends(_extends(_extends({
      alignPoint: alignPoint
    }, props), this.$attrs), {
      prefixCls: prefixCls,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      transitionName: this.getTransitionName(),
      trigger: triggerActions,
      overlay: this.renderOverlay(prefixCls),
      onVisibleChange: this.handleVisibleChange
    });

    return _createVNode(RcDropdown, dropdownProps, {
      default: function _default() {
        return [dropdownTrigger];
      }
    });
  }
});
Dropdown.Button = DropdownButton;
export default Dropdown;