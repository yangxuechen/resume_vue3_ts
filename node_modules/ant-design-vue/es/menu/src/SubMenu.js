import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, vShow as _vShow, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import { computed, defineComponent, getCurrentInstance, ref, watch, onBeforeUnmount } from 'vue';
import useProvideKeyPath, { useInjectKeyPath } from './hooks/useKeyPath';
import { useInjectMenu, useProvideFirstLevel, MenuContextProvider } from './hooks/useMenuContext';
import { getPropsSlot, isValidElement } from '../../_util/props-util';
import classNames from '../../_util/classNames';
import useDirectionStyle from './hooks/useDirectionStyle';
import PopupTrigger from './PopupTrigger';
import SubMenuList from './SubMenuList';
import InlineSubMenuList from './InlineSubMenuList';
import Transition, { getTransitionProps } from '../../_util/transition';
import { cloneElement } from '../../_util/vnode';
import Overflow from '../../vc-overflow';
import devWarning from '../../vc-util/devWarning';
import isValid from '../../_util/isValid';
var indexGuid = 0;
var subMenuProps = {
  icon: PropTypes.VNodeChild,
  title: PropTypes.VNodeChild,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function
};
export default defineComponent({
  name: 'ASubMenu',
  inheritAttrs: false,
  props: subMenuProps,
  slots: ['icon', 'title', 'expandIcon'],
  emits: ['titleClick', 'mouseenter', 'mouseleave'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;

    var _a, _b;

    useProvideFirstLevel(false);
    var instance = getCurrentInstance();
    var vnodeKey = _typeof(instance.vnode.key) === 'symbol' ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(_typeof(instance.vnode.key) !== 'symbol', 'SubMenu', "SubMenu `:key=\"".concat(String(vnodeKey), "\"` not support Symbol type"));
    var key = isValid(vnodeKey) ? vnodeKey : "sub_menu_".concat(++indexGuid, "_$$_not_set_key");
    var eventKey = (_a = props.eventKey) !== null && _a !== void 0 ? _a : isValid(vnodeKey) ? "sub_menu_".concat(++indexGuid, "_$$_").concat(vnodeKey) : key;

    var _useInjectKeyPath = useInjectKeyPath(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentInfo = _useInjectKeyPath.parentInfo,
        parentKeys = _useInjectKeyPath.parentKeys;

    var keysPath = computed(function () {
      return [].concat(_toConsumableArray(parentKeys.value), [key]);
    });
    var eventKeysPath = computed(function () {
      return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
    });
    var childrenEventKeys = ref([]);
    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      childrenEventKeys: childrenEventKeys,
      parentKeys: parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    onBeforeUnmount(function () {
      var _a;

      if (parentInfo.childrenEventKeys) {
        parentInfo.childrenEventKeys.value = (_a = parentInfo.childrenEventKeys) === null || _a === void 0 ? void 0 : _a.value.filter(function (k) {
          return k != eventKey;
        });
      }
    });
    useProvideKeyPath(eventKey, key, menuInfo);

    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls,
        activeKeys = _useInjectMenu.activeKeys,
        contextDisabled = _useInjectMenu.disabled,
        changeActiveKeys = _useInjectMenu.changeActiveKeys,
        mode = _useInjectMenu.mode,
        inlineCollapsed = _useInjectMenu.inlineCollapsed,
        antdMenuTheme = _useInjectMenu.antdMenuTheme,
        openKeys = _useInjectMenu.openKeys,
        overflowDisabled = _useInjectMenu.overflowDisabled,
        onOpenChange = _useInjectMenu.onOpenChange,
        registerMenuInfo = _useInjectMenu.registerMenuInfo,
        unRegisterMenuInfo = _useInjectMenu.unRegisterMenuInfo,
        selectedSubMenuEventKeys = _useInjectMenu.selectedSubMenuEventKeys,
        motion = _useInjectMenu.motion,
        defaultMotions = _useInjectMenu.defaultMotions,
        menuExpandIcon = _useInjectMenu.expandIcon;

    registerMenuInfo(eventKey, menuInfo);
    onBeforeUnmount(function () {
      unRegisterMenuInfo(eventKey);
    });
    var subMenuPrefixCls = computed(function () {
      return "".concat(prefixCls.value, "-submenu");
    });
    var mergedDisabled = computed(function () {
      return contextDisabled.value || props.disabled;
    });
    var elementRef = ref();
    var popupRef = ref(); // // ================================ Icon ================================
    // const mergedItemIcon = itemIcon || contextItemIcon;
    // const mergedExpandIcon = expandIcon || contextExpandIcon;
    // ================================ Open ================================

    var originOpen = computed(function () {
      return openKeys.value.includes(key);
    });
    var open = computed(function () {
      return !overflowDisabled.value && originOpen.value;
    }); // =============================== Select ===============================

    var childrenSelected = computed(function () {
      return selectedSubMenuEventKeys.value.includes(eventKey);
    });
    var isActive = ref(false);
    watch(activeKeys, function () {
      isActive.value = !!activeKeys.value.find(function (val) {
        return val === key;
      });
    }, {
      immediate: true
    }); // =============================== Events ===============================
    // >>>> Title click

    var onInternalTitleClick = function onInternalTitleClick(e) {
      // Skip if disabled
      if (mergedDisabled.value) {
        return;
      }

      emit('titleClick', e, key); // Trigger open by click when mode is `inline`

      if (mode.value === 'inline') {
        onOpenChange(eventKey, !originOpen.value);
      }
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
    }; // ========================== DirectionStyle ==========================


    var directionStyle = useDirectionStyle(computed(function () {
      return eventKeysPath.value.length;
    })); // >>>>> Visible change

    var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
      if (mode.value !== 'inline') {
        onOpenChange(eventKey, newVisible);
      }
    };
    /**
     * Used for accessibility. Helper will focus element without key board.
     * We should manually trigger an active
     */


    var onInternalFocus = function onInternalFocus() {
      changeActiveKeys(keysPath.value);
    }; // =============================== Render ===============================


    var popupId = eventKey && "".concat(eventKey, "-popup");
    var popupClassName = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(antdMenuTheme.value), props.popupClassName);
    });

    var renderTitle = function renderTitle(title, icon) {
      if (!icon) {
        return inlineCollapsed.value && !parentEventKeys.value.length && title && typeof title === 'string' ? _createVNode("div", {
          "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
        }, [title.charAt(0)]) : _createVNode("span", {
          "class": "".concat(prefixCls.value, "-title-content")
        }, [title]);
      } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      var titleIsSpan = isValidElement(title) && title.type === 'span';
      return _createVNode(_Fragment, null, [cloneElement(icon, {
        class: "".concat(prefixCls.value, "-item-icon")
      }, false), titleIsSpan ? title : _createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [title])]);
    }; // Cache mode if it change to `inline` which do not have popup motion


    var triggerModeRef = computed(function () {
      return mode.value !== 'inline' && eventKeysPath.value.length > 1 ? 'vertical' : mode.value;
    });
    var renderMode = computed(function () {
      return mode.value === 'horizontal' ? 'vertical' : mode.value;
    });
    var style = ref({});
    var className = ref('');
    var mergedMotion = computed(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[mode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return res ? getTransitionProps(res.name) : undefined;
    });
    var subMenuTriggerModeRef = computed(function () {
      return triggerModeRef.value === 'horizontal' ? 'vertical' : triggerModeRef.value;
    });
    return function () {
      var _classNames;

      var _a;

      var icon = getPropsSlot(slots, props, 'icon');
      var title = renderTitle(getPropsSlot(slots, props, 'title'), icon);
      var subMenuPrefixClsValue = subMenuPrefixCls.value;
      var expandIcon = props.expandIcon || slots.expandIcon || menuExpandIcon;

      var titleNode = _createVNode("div", {
        "style": directionStyle.value,
        "class": "".concat(subMenuPrefixClsValue, "-title"),
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === 'string' ? title : null,
        "data-menu-id": key,
        "aria-expanded": open.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== 'horizontal' && expandIcon ? expandIcon(_extends(_extends({}, props), {
        isOpen: open.value
      })) : _createVNode("i", {
        "class": "".concat(subMenuPrefixClsValue, "-arrow")
      }, null)]);

      if (!overflowDisabled.value && mode.value !== 'inline') {
        var triggerMode = triggerModeRef.value;

        var _titleNode = function () {
          return titleNode;
        }();

        titleNode = _createVNode(PopupTrigger, {
          "mode": triggerMode,
          "prefixCls": subMenuPrefixClsValue,
          "visible": !props.internalPopupClose && open.value,
          "popupClassName": popupClassName.value,
          "popupOffset": props.popupOffset,
          "disabled": mergedDisabled.value,
          "onVisibleChange": onPopupVisibleChange
        }, {
          default: function _default() {
            return [_titleNode];
          },
          popup: function popup(_ref2) {
            var visible = _ref2.visible;

            var _a;

            return _createVNode(MenuContextProvider, {
              "mode": subMenuTriggerModeRef.value,
              "isRootMenu": false
            }, {
              default: function _default() {
                return [_createVNode(Transition, mergedMotion.value, {
                  default: function _default() {
                    return [_withDirectives(_createVNode(SubMenuList, {
                      "id": popupId,
                      "ref": popupRef
                    }, {
                      default: function _default() {
                        return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                      }
                    }), [[_vShow, visible]])];
                  }
                })];
              }
            });
          }
        });
      } else {
        var _titleNode2 = function () {
          return titleNode;
        }();

        // 包裹一层，保持结构一致，防止动画丢失
        // https://github.com/vueComponent/ant-design-vue/issues/4325
        titleNode = _createVNode(PopupTrigger, null, {
          default: function _default() {
            return [_titleNode2];
          }
        });
      }

      return _createVNode(MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: function _default() {
          return [_createVNode(Overflow.Item, _objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "role": "none",
            "class": classNames(subMenuPrefixClsValue, "".concat(subMenuPrefixClsValue, "-").concat(mode.value), attrs.class, (_classNames = {}, _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-open"), open.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-active"), isActive.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-selected"), childrenSelected.value), _defineProperty(_classNames, "".concat(subMenuPrefixClsValue, "-disabled"), mergedDisabled.value), _classNames)),
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "data-submenu-id": key
          }), {
            default: function _default() {
              return [titleNode, !overflowDisabled.value && _createVNode(InlineSubMenuList, {
                "id": popupId,
                "open": open.value,
                "keyPath": keysPath.value
              }, {
                default: function _default() {
                  return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                }
              })];
            }
          })];
        }
      });
    };
  }
});