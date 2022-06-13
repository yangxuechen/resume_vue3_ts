"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _button = _interopRequireDefault(require("../button"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _buttonTypes = _interopRequireDefault(require("../button/buttonTypes"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _getDropdownProps = _interopRequireDefault(require("./getDropdownProps"));

var _configProvider = require("../config-provider");

var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EllipsisOutlined"));

var _type = require("../_util/type");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonTypesProps = (0, _buttonTypes.default)();
var DropdownProps = (0, _getDropdownProps.default)();
var ButtonGroup = _button.default.Group;
var dropdownButtonProps = (0, _extends2.default)((0, _extends2.default)({}, DropdownProps), {
  type: _vueTypes.default.oneOf((0, _type.tuple)('primary', 'ghost', 'dashed', 'danger', 'default')).def('default'),
  size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'large', 'default')).def('default'),
  htmlType: ButtonTypesProps.htmlType,
  href: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  placement: DropdownProps.placement.def('bottomRight'),
  icon: _vueTypes.default.any,
  title: _vueTypes.default.string,
  onClick: _vueTypes.default.func,
  onVisibleChange: _vueTypes.default.func,
  'onUpdate:visible': _vueTypes.default.func
});

var _default2 = (0, _vue.defineComponent)({
  name: 'ADropdownButton',
  inheritAttrs: false,
  props: dropdownButtonProps,
  emits: ['click', 'visibleChange', 'update:visible'],
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

    var _a = (0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs),
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

    var icon = (0, _propsUtil.getComponent)(this, 'icon') || (0, _vue.createVNode)(_EllipsisOutlined.default, null, null);
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

    if ((0, _propsUtil.hasProp)(this, 'visible')) {
      dropdownProps.visible = visible;
    }

    var buttonGroupProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
      class: (0, _classNames.default)(prefixCls, className)
    });
    return (0, _vue.createVNode)(ButtonGroup, buttonGroupProps, {
      default: function _default() {
        return [(0, _vue.createVNode)(_button.default, {
          "type": type,
          "disabled": disabled,
          "onClick": _this.handleClick,
          "htmlType": htmlType,
          "href": href,
          "title": title
        }, {
          default: function _default() {
            return [(0, _propsUtil.getSlot)(_this)];
          }
        }), (0, _vue.createVNode)(_dropdown.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dropdownProps), {}, {
          "overlay": (0, _propsUtil.getComponent)(_this, 'overlay')
        }), {
          default: function _default() {
            return [(0, _vue.createVNode)(_button.default, {
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

exports.default = _default2;