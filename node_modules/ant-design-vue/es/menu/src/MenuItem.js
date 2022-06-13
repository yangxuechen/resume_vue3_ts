import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { flattenChildren, getPropsSlot, isValidElement } from '../../_util/props-util';
import PropTypes from '../../_util/vue-types';
import { computed, defineComponent, getCurrentInstance, onBeforeUnmount, ref, watch } from 'vue';
import { useInjectKeyPath } from './hooks/useKeyPath';
import { useInjectFirstLevel, useInjectMenu } from './hooks/useMenuContext';
import { cloneElement } from '../../_util/vnode';
import Tooltip from '../../tooltip';
import KeyCode from '../../_util/KeyCode';
import useDirectionStyle from './hooks/useDirectionStyle';
import Overflow from '../../vc-overflow';
import devWarning from '../../vc-util/devWarning';
var indexGuid = 0;
var menuItemProps = {
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: undefined
  },
  icon: PropTypes.VNodeChild
};
export default defineComponent({
  name: 'AMenuItem',
  inheritAttrs: false,
  props: menuItemProps,
  emits: ['mouseenter', 'mouseleave', 'click', 'keydown', 'focus'],
  slots: ['icon', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs;
    var instance = getCurrentInstance();
    var key = _typeof(instance.vnode.key) === 'symbol' ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(_typeof(instance.vnode.key) !== 'symbol', 'MenuItem', "MenuItem `:key=\"".concat(String(key), "\"` not support Symbol type"));
    var eventKey = "menu_item_".concat(++indexGuid, "_$$_").concat(key);

    var _useInjectKeyPath = useInjectKeyPath(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentKeys = _useInjectKeyPath.parentKeys;

    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls,
        activeKeys = _useInjectMenu.activeKeys,
        disabled = _useInjectMenu.disabled,
        changeActiveKeys = _useInjectMenu.changeActiveKeys,
        rtl = _useInjectMenu.rtl,
        inlineCollapsed = _useInjectMenu.inlineCollapsed,
        siderCollapsed = _useInjectMenu.siderCollapsed,
        onItemClick = _useInjectMenu.onItemClick,
        selectedKeys = _useInjectMenu.selectedKeys,
        registerMenuInfo = _useInjectMenu.registerMenuInfo,
        unRegisterMenuInfo = _useInjectMenu.unRegisterMenuInfo;

    var firstLevel = useInjectFirstLevel();
    var isActive = ref(false);
    var keysPath = computed(function () {
      return [].concat(_toConsumableArray(parentKeys.value), [key]);
    }); // const keysPath = computed(() => [...parentEventKeys.value, eventKey]);

    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      parentKeys: parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    onBeforeUnmount(function () {
      unRegisterMenuInfo(eventKey);
    });
    watch(activeKeys, function () {
      isActive.value = !!activeKeys.value.find(function (val) {
        return val === key;
      });
    }, {
      immediate: true
    });
    var mergedDisabled = computed(function () {
      return disabled.value || props.disabled;
    });
    var selected = computed(function () {
      return selectedKeys.value.includes(key);
    });
    var classNames = computed(function () {
      var _ref2;

      var itemCls = "".concat(prefixCls.value, "-item");
      return _ref2 = {}, _defineProperty(_ref2, "".concat(itemCls), true), _defineProperty(_ref2, "".concat(itemCls, "-danger"), props.danger), _defineProperty(_ref2, "".concat(itemCls, "-active"), isActive.value), _defineProperty(_ref2, "".concat(itemCls, "-selected"), selected.value), _defineProperty(_ref2, "".concat(itemCls, "-disabled"), mergedDisabled.value), _ref2;
    });

    var getEventInfo = function getEventInfo(e) {
      return {
        key: key,
        eventKey: eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]),
        domEvent: e,
        item: _extends(_extends({}, props), attrs)
      };
    }; // ============================ Events ============================


    var onInternalClick = function onInternalClick(e) {
      if (mergedDisabled.value) {
        return;
      }

      var info = getEventInfo(e);
      emit('click', e);
      onItemClick(info);
    };

    var onMouseEnter = function onMouseEnter(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit('mouseenter', event);
      }
    };

    var onMouseLeave = function onMouseLeave(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit('mouseleave', event);
      }
    };

    var onInternalKeyDown = function onInternalKeyDown(e) {
      emit('keydown', e);

      if (e.which === KeyCode.ENTER) {
        var info = getEventInfo(e); // Legacy. Key will also trigger click event

        emit('click', e);
        onItemClick(info);
      }
    };
    /**
     * Used for accessibility. Helper will focus element without key board.
     * We should manually trigger an active
     */


    var onInternalFocus = function onInternalFocus(e) {
      changeActiveKeys(keysPath.value);
      emit('focus', e);
    };

    var renderItemChildren = function renderItemChildren(icon, children) {
      var wrapNode = _createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [children]); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      if (!icon || isValidElement(children) && children.type === 'span') {
        if (children && inlineCollapsed.value && firstLevel && typeof children === 'string') {
          return _createVNode("div", {
            "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
          }, [children.charAt(0)]);
        }
      }

      return wrapNode;
    }; // ========================== DirectionStyle ==========================


    var directionStyle = useDirectionStyle(computed(function () {
      return keysPath.value.length;
    }));
    return function () {
      var _ref3;

      var _a, _b, _c;

      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      var childrenLength = children.length;
      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel && childrenLength ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      } // ============================ Render ============================


      var optionRoleProps = {};

      if (props.role === 'option') {
        optionRoleProps['aria-selected'] = selected.value;
      }

      var icon = getPropsSlot(slots, props, 'icon');
      return _createVNode(Tooltip, _objectSpread(_objectSpread({}, tooltipProps), {}, {
        "placement": rtl.value ? 'left' : 'right',
        "overlayClassName": "".concat(prefixCls.value, "-inline-collapsed-tooltip")
      }), {
        default: function _default() {
          return [_createVNode(Overflow.Item, _objectSpread(_objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "style": _extends(_extends({}, attrs.style || {}), directionStyle.value),
            "class": [classNames.value, (_ref3 = {}, _defineProperty(_ref3, "".concat(attrs.class), !!attrs.class), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _ref3)],
            "role": props.role || 'menuitem',
            "tabindex": props.disabled ? null : -1,
            "data-menu-id": key,
            "aria-disabled": props.disabled
          }, optionRoleProps), {}, {
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "onClick": onInternalClick,
            "onKeydown": onInternalKeyDown,
            "onFocus": onInternalFocus,
            "title": typeof title === 'string' ? title : undefined
          }), {
            default: function _default() {
              return [cloneElement(icon, {
                class: "".concat(prefixCls.value, "-item-icon")
              }), renderItemChildren(icon, children)];
            }
          })];
        }
      });
    };
  }
});