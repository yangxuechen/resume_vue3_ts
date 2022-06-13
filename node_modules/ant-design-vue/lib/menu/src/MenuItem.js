"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _propsUtil = require("../../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _useKeyPath = require("./hooks/useKeyPath");

var _useMenuContext = require("./hooks/useMenuContext");

var _vnode = require("../../_util/vnode");

var _tooltip = _interopRequireDefault(require("../../tooltip"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _useDirectionStyle = _interopRequireDefault(require("./hooks/useDirectionStyle"));

var _vcOverflow = _interopRequireDefault(require("../../vc-overflow"));

var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));

var indexGuid = 0;
var menuItemProps = {
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: undefined
  },
  icon: _vueTypes.default.VNodeChild
};

var _default2 = (0, _vue.defineComponent)({
  name: 'AMenuItem',
  inheritAttrs: false,
  props: menuItemProps,
  emits: ['mouseenter', 'mouseleave', 'click', 'keydown', 'focus'],
  slots: ['icon', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs;
    var instance = (0, _vue.getCurrentInstance)();
    var key = (0, _typeof2.default)(instance.vnode.key) === 'symbol' ? String(instance.vnode.key) : instance.vnode.key;
    (0, _devWarning.default)((0, _typeof2.default)(instance.vnode.key) !== 'symbol', 'MenuItem', "MenuItem `:key=\"".concat(String(key), "\"` not support Symbol type"));
    var eventKey = "menu_item_".concat(++indexGuid, "_$$_").concat(key);

    var _useInjectKeyPath = (0, _useKeyPath.useInjectKeyPath)(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentKeys = _useInjectKeyPath.parentKeys;

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
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

    var firstLevel = (0, _useMenuContext.useInjectFirstLevel)();
    var isActive = (0, _vue.ref)(false);
    var keysPath = (0, _vue.computed)(function () {
      return [].concat((0, _toConsumableArray2.default)(parentKeys.value), [key]);
    }); // const keysPath = computed(() => [...parentEventKeys.value, eventKey]);

    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      parentKeys: parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    (0, _vue.onBeforeUnmount)(function () {
      unRegisterMenuInfo(eventKey);
    });
    (0, _vue.watch)(activeKeys, function () {
      isActive.value = !!activeKeys.value.find(function (val) {
        return val === key;
      });
    }, {
      immediate: true
    });
    var mergedDisabled = (0, _vue.computed)(function () {
      return disabled.value || props.disabled;
    });
    var selected = (0, _vue.computed)(function () {
      return selectedKeys.value.includes(key);
    });
    var classNames = (0, _vue.computed)(function () {
      var _ref2;

      var itemCls = "".concat(prefixCls.value, "-item");
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(itemCls), true), (0, _defineProperty2.default)(_ref2, "".concat(itemCls, "-danger"), props.danger), (0, _defineProperty2.default)(_ref2, "".concat(itemCls, "-active"), isActive.value), (0, _defineProperty2.default)(_ref2, "".concat(itemCls, "-selected"), selected.value), (0, _defineProperty2.default)(_ref2, "".concat(itemCls, "-disabled"), mergedDisabled.value), _ref2;
    });

    var getEventInfo = function getEventInfo(e) {
      return {
        key: key,
        eventKey: eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [].concat((0, _toConsumableArray2.default)(parentEventKeys.value), [eventKey]),
        domEvent: e,
        item: (0, _extends2.default)((0, _extends2.default)({}, props), attrs)
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

      if (e.which === _KeyCode.default.ENTER) {
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
      var wrapNode = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [children]); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || (0, _propsUtil.isValidElement)(children) && children.type === 'span') {
        if (children && inlineCollapsed.value && firstLevel && typeof children === 'string') {
          return (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
          }, [children.charAt(0)]);
        }
      }

      return wrapNode;
    }; // ========================== DirectionStyle ==========================


    var directionStyle = (0, _useDirectionStyle.default)((0, _vue.computed)(function () {
      return keysPath.value.length;
    }));
    return function () {
      var _ref3;

      var _a, _b, _c;

      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var children = (0, _propsUtil.flattenChildren)((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
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

      var icon = (0, _propsUtil.getPropsSlot)(slots, props, 'icon');
      return (0, _vue.createVNode)(_tooltip.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tooltipProps), {}, {
        "placement": rtl.value ? 'left' : 'right',
        "overlayClassName": "".concat(prefixCls.value, "-inline-collapsed-tooltip")
      }), {
        default: function _default() {
          return [(0, _vue.createVNode)(_vcOverflow.default.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
            "component": "li"
          }, attrs), {}, {
            "style": (0, _extends2.default)((0, _extends2.default)({}, attrs.style || {}), directionStyle.value),
            "class": [classNames.value, (_ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(attrs.class), !!attrs.class), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _ref3)],
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
              return [(0, _vnode.cloneElement)(icon, {
                class: "".concat(prefixCls.value, "-item-icon")
              }), renderItemChildren(icon, children)];
            }
          })];
        }
      });
    };
  }
});

exports.default = _default2;