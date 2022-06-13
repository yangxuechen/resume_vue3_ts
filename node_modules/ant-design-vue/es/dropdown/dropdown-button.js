import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
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

import { provide, inject, defineComponent } from 'vue';
import Button from '../button';
import classNames from '../_util/classNames';
import buttonTypes from '../button/buttonTypes';
import Dropdown from './dropdown';
import PropTypes from '../_util/vue-types';
import { hasProp, getComponent, getSlot } from '../_util/props-util';
import getDropdownProps from './getDropdownProps';
import { defaultConfigProvider } from '../config-provider';
import EllipsisOutlined from '@ant-design/icons-vue/EllipsisOutlined';
import { tuple } from '../_util/type';
var ButtonTypesProps = buttonTypes();
var DropdownProps = getDropdownProps();
var ButtonGroup = Button.Group;

var dropdownButtonProps = _extends(_extends({}, DropdownProps), {
  type: PropTypes.oneOf(tuple('primary', 'ghost', 'dashed', 'danger', 'default')).def('default'),
  size: PropTypes.oneOf(tuple('small', 'large', 'default')).def('default'),
  htmlType: ButtonTypesProps.htmlType,
  href: PropTypes.string,
  disabled: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  placement: DropdownProps.placement.def('bottomRight'),
  icon: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onVisibleChange: PropTypes.func,
  'onUpdate:visible': PropTypes.func
});

export default defineComponent({
  name: 'ADropdownButton',
  inheritAttrs: false,
  props: dropdownButtonProps,
  emits: ['click', 'visibleChange', 'update:visible'],
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
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleVisibleChange: function handleVisibleChange(val) {
      this.$emit('update:visible', val);
      this.$emit('visibleChange', val);
    }
  },
  render: function render() {
    var _this = this;

    var _a = _extends(_extends({}, this.$props), this.$attrs),
        type = _a.type,
        disabled = _a.disabled,
        onClick = _a.onClick,
        htmlType = _a.htmlType,
        className = _a.class,
        customizePrefixCls = _a.prefixCls,
        overlay = _a.overlay,
        trigger = _a.trigger,
        align = _a.align,
        visible = _a.visible,
        onVisibleChange = _a.onVisibleChange,
        placement = _a.placement,
        getPopupContainer = _a.getPopupContainer,
        href = _a.href,
        title = _a.title,
        restProps = __rest(_a, ["type", "disabled", "onClick", "htmlType", "class", "prefixCls", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "title"]);

    var icon = getComponent(this, 'icon') || _createVNode(EllipsisOutlined, null, null);

    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
    var dropdownProps = {
      align: align,
      disabled: disabled,
      trigger: disabled ? [] : trigger,
      placement: placement,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      onVisibleChange: this.handleVisibleChange
    };

    if (hasProp(this, 'visible')) {
      dropdownProps.visible = visible;
    }

    var buttonGroupProps = _extends(_extends({}, restProps), {
      class: classNames(prefixCls, className)
    });

    return _createVNode(ButtonGroup, buttonGroupProps, {
      default: function _default() {
        return [_createVNode(Button, {
          "type": type,
          "disabled": disabled,
          "onClick": _this.handleClick,
          "htmlType": htmlType,
          "href": href,
          "title": title
        }, {
          default: function _default() {
            return [getSlot(_this)];
          }
        }), _createVNode(Dropdown, _objectSpread(_objectSpread({}, dropdownProps), {}, {
          "overlay": getComponent(_this, 'overlay')
        }), {
          default: function _default() {
            return [_createVNode(Button, {
              "type": type
            }, {
              default: function _default() {
                return [icon];
              }
            })];
          }
        })];
      }
    });
  }
});