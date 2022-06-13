"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _useKeyPath = _interopRequireWildcard(require("./hooks/useKeyPath"));

var _useMenuContext = require("./hooks/useMenuContext");

var _propsUtil = require("../../_util/props-util");

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _useDirectionStyle = _interopRequireDefault(require("./hooks/useDirectionStyle"));

var _PopupTrigger = _interopRequireDefault(require("./PopupTrigger"));

var _SubMenuList = _interopRequireDefault(require("./SubMenuList"));

var _InlineSubMenuList = _interopRequireDefault(require("./InlineSubMenuList"));

var _transition = _interopRequireWildcard(require("../../_util/transition"));

var _vnode = require("../../_util/vnode");

var _vcOverflow = _interopRequireDefault(require("../../vc-overflow"));

var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));

var _isValid = _interopRequireDefault(require("../../_util/isValid"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var indexGuid = 0;
var subMenuProps = {
  icon: _vueTypes.default.VNodeChild,
  title: _vueTypes.default.VNodeChild,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function
};

var _default2 = (0, _vue.defineComponent)({
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

    (0, _useMenuContext.useProvideFirstLevel)(false);
    var instance = (0, _vue.getCurrentInstance)();
    var vnodeKey = (0, _typeof2.default)(instance.vnode.key) === 'symbol' ? String(instance.vnode.key) : instance.vnode.key;
    (0, _devWarning.default)((0, _typeof2.default)(instance.vnode.key) !== 'symbol', 'SubMenu', "SubMenu `:key=\"".concat(String(vnodeKey), "\"` not support Symbol type"));
    var key = (0, _isValid.default)(vnodeKey) ? vnodeKey : "sub_menu_".concat(++indexGuid, "_$$_not_set_key");
    var eventKey = (_a = props.eventKey) !== null && _a !== void 0 ? _a : (0, _isValid.default)(vnodeKey) ? "sub_menu_".concat(++indexGuid, "_$$_").concat(vnodeKey) : key;

    var _useInjectKeyPath = (0, _useKeyPath.useInjectKeyPath)(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentInfo = _useInjectKeyPath.parentInfo,
        parentKeys = _useInjectKeyPath.parentKeys;

    var keysPath = (0, _vue.computed)(function () {
      return [].concat((0, _toConsumableArray2.default)(parentKeys.value), [key]);
    });
    var eventKeysPath = (0, _vue.computed)(function () {
      return [].concat((0, _toConsumableArray2.default)(parentEventKeys.value), [eventKey]);
    });
    var childrenEventKeys = (0, _vue.ref)([]);
    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      childrenEventKeys: childrenEventKeys,
      parentKeys: parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    (0, _vue.onBeforeUnmount)(function () {
      var _a;

      if (parentInfo.childrenEventKeys) {
        parentInfo.childrenEventKeys.value = (_a = parentInfo.childrenEventKeys) === null || _a === void 0 ? void 0 : _a.value.filter(function (k) {
          return k != eventKey;
        });
      }
    });
    (0, _useKeyPath.default)(eventKey, key, menuInfo);

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
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
    (0, _vue.onBeforeUnmount)(function () {
      unRegisterMenuInfo(eventKey);
    });
    var subMenuPrefixCls = (0, _vue.computed)(function () {
      return "".concat(prefixCls.value, "-submenu");
    });
    var mergedDisabled = (0, _vue.computed)(function () {
      return contextDisabled.value || props.disabled;
    });
    var elementRef = (0, _vue.ref)();
    var popupRef = (0, _vue.ref)(); // // ================================ Icon ================================
    // const mergedItemIcon = itemIcon || contextItemIcon;
    // const mergedExpandIcon = expandIcon || contextExpandIcon;
    // ================================ Open ================================

    var originOpen = (0, _vue.computed)(function () {
      return openKeys.value.includes(key);
    });
    var open = (0, _vue.computed)(function () {
      return !overflowDisabled.value && originOpen.value;
    }); // =============================== Select ===============================

    var childrenSelected = (0, _vue.computed)(function () {
      return selectedSubMenuEventKeys.value.includes(eventKey);
    });
    var isActive = (0, _vue.ref)(false);
    (0, _vue.watch)(activeKeys, function () {
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


    var directionStyle = (0, _useDirectionStyle.default)((0, _vue.computed)(function () {
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
    var popupClassName = (0, _vue.computed)(function () {
      return (0, _classNames2.default)(prefixCls.value, "".concat(prefixCls.value, "-").concat(antdMenuTheme.value), props.popupClassName);
    });

    var renderTitle = function renderTitle(title, icon) {
      if (!icon) {
        return inlineCollapsed.value && !parentEventKeys.value.length && title && typeof title === 'string' ? (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
        }, [title.charAt(0)]) : (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls.value, "-title-content")
        }, [title]);
      } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      var titleIsSpan = (0, _propsUtil.isValidElement)(title) && title.type === 'span';
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vnode.cloneElement)(icon, {
        class: "".concat(prefixCls.value, "-item-icon")
      }, false), titleIsSpan ? title : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [title])]);
    }; // Cache mode if it change to `inline` which do not have popup motion


    var triggerModeRef = (0, _vue.computed)(function () {
      return mode.value !== 'inline' && eventKeysPath.value.length > 1 ? 'vertical' : mode.value;
    });
    var renderMode = (0, _vue.computed)(function () {
      return mode.value === 'horizontal' ? 'vertical' : mode.value;
    });
    var style = (0, _vue.ref)({});
    var className = (0, _vue.ref)('');
    var mergedMotion = (0, _vue.computed)(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[mode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return res ? (0, _transition.getTransitionProps)(res.name) : undefined;
    });
    var subMenuTriggerModeRef = (0, _vue.computed)(function () {
      return triggerModeRef.value === 'horizontal' ? 'vertical' : triggerModeRef.value;
    });
    return function () {
      var _classNames;

      var _a;

      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon');
      var title = renderTitle((0, _propsUtil.getPropsSlot)(slots, props, 'title'), icon);
      var subMenuPrefixClsValue = subMenuPrefixCls.value;
      var expandIcon = props.expandIcon || slots.expandIcon || menuExpandIcon;
      var titleNode = (0, _vue.createVNode)("div", {
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
      }, [title, mode.value !== 'horizontal' && expandIcon ? expandIcon((0, _extends2.default)((0, _extends2.default)({}, props), {
        isOpen: open.value
      })) : (0, _vue.createVNode)("i", {
        "class": "".concat(subMenuPrefixClsValue, "-arrow")
      }, null)]);

      if (!overflowDisabled.value && mode.value !== 'inline') {
        var triggerMode = triggerModeRef.value;

        var _titleNode = function () {
          return titleNode;
        }();

        titleNode = (0, _vue.createVNode)(_PopupTrigger.default, {
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

            return (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
              "mode": subMenuTriggerModeRef.value,
              "isRootMenu": false
            }, {
              default: function _default() {
                return [(0, _vue.createVNode)(_transition.default, mergedMotion.value, {
                  default: function _default() {
                    return [(0, _vue.withDirectives)((0, _vue.createVNode)(_SubMenuList.default, {
                      "id": popupId,
                      "ref": popupRef
                    }, {
                      default: function _default() {
                        return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                      }
                    }), [[_vue.vShow, visible]])];
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
        titleNode = (0, _vue.createVNode)(_PopupTrigger.default, null, {
          default: function _default() {
            return [_titleNode2];
          }
        });
      }

      return (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_vcOverflow.default.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            "component": "li"
          }, attrs), {}, {
            "role": "none",
            "class": (0, _classNames2.default)(subMenuPrefixClsValue, "".concat(subMenuPrefixClsValue, "-").concat(mode.value), attrs.class, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(subMenuPrefixClsValue, "-open"), open.value), (0, _defineProperty2.default)(_classNames, "".concat(subMenuPrefixClsValue, "-active"), isActive.value), (0, _defineProperty2.default)(_classNames, "".concat(subMenuPrefixClsValue, "-selected"), childrenSelected.value), (0, _defineProperty2.default)(_classNames, "".concat(subMenuPrefixClsValue, "-disabled"), mergedDisabled.value), _classNames)),
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "data-submenu-id": key
          }), {
            default: function _default() {
              return [titleNode, !overflowDisabled.value && (0, _vue.createVNode)(_InlineSubMenuList.default, {
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

exports.default = _default2;