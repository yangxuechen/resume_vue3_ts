"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _index = _interopRequireDefault(require("../vc-dropdown/src/index"));

var _dropdownButton = _interopRequireDefault(require("./dropdown-button"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vnode = require("../_util/vnode");

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _getDropdownProps = _interopRequireDefault(require("./getDropdownProps"));

var _configProvider = require("../config-provider");

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var dropdownProps = (0, _getDropdownProps.default)();
var Dropdown = (0, _vue.defineComponent)({
  name: 'ADropdown',
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, dropdownProps), {
    prefixCls: _vueTypes.default.string,
    mouseEnterDelay: _vueTypes.default.number.def(0.15),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1),
    placement: dropdownProps.placement.def('bottomLeft'),
    onVisibleChange: _vueTypes.default.func,
    'onUpdate:visible': _vueTypes.default.func
  }),
  emits: ['visibleChange', 'update:visible'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      popupRef: null
    };
  },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
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
      var overlay = (0, _propsUtil.getComponent)(this, 'overlay');
      var overlayNode = Array.isArray(overlay) ? overlay[0] : overlay; // menu cannot be selectable in dropdown defaultly
      // menu should be focusable in dropdown defaultly

      var overlayProps = overlayNode && (0, _propsUtil.getPropsData)(overlayNode);

      var _ref = overlayProps || {},
          _ref$selectable = _ref.selectable,
          selectable = _ref$selectable === void 0 ? false : _ref$selectable,
          _ref$focusable = _ref.focusable,
          focusable = _ref$focusable === void 0 ? true : _ref$focusable;

      var expandIcon = function expandIcon() {
        return (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-menu-submenu-arrow")
        }, [(0, _vue.createVNode)(_RightOutlined.default, {
          "class": "".concat(prefixCls, "-menu-submenu-arrow-icon")
        }, null)]);
      };

      var fixedModeOverlay = (0, _propsUtil.isValidElement)(overlayNode) ? (0, _vue.cloneVNode)(overlayNode, {
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

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        trigger = props.trigger,
        disabled = props.disabled,
        getPopupContainer = props.getPopupContainer;
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    var child = (0, _propsUtil.getSlot)(this)[0];
    var dropdownTrigger = (0, _vnode.cloneElement)(child, {
      class: (0, _classNames.default)((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.class, "".concat(prefixCls, "-trigger")),
      disabled: disabled
    });
    var triggerActions = disabled ? [] : typeof trigger === 'string' ? [trigger] : trigger;
    var alignPoint;

    if (triggerActions && triggerActions.indexOf('contextmenu') !== -1) {
      alignPoint = true;
    }

    var dropdownProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
      alignPoint: alignPoint
    }, props), this.$attrs), {
      prefixCls: prefixCls,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      transitionName: this.getTransitionName(),
      trigger: triggerActions,
      overlay: this.renderOverlay(prefixCls),
      onVisibleChange: this.handleVisibleChange
    });
    return (0, _vue.createVNode)(_index.default, dropdownProps, {
      default: function _default() {
        return [dropdownTrigger];
      }
    });
  }
});
Dropdown.Button = _dropdownButton.default;
var _default2 = Dropdown;
exports.default = _default2;