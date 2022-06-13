"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _openAnimation = _interopRequireDefault(require("../_util/openAnimation"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _vcCollapse = _interopRequireDefault(require("../vc-collapse"));

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var _configProvider = require("../config-provider");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

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

var collapseProps = {
  prefixCls: _vueTypes.default.string,
  activeKey: {
    type: [Array, Number, String]
  },
  defaultActiveKey: {
    type: [Array, Number, String]
  },
  accordion: _vueTypes.default.looseBool,
  destroyInactivePanel: _vueTypes.default.looseBool,
  bordered: _vueTypes.default.looseBool.def(true),
  expandIcon: _vueTypes.default.func,
  openAnimation: _vueTypes.default.object.def(_openAnimation.default),
  expandIconPosition: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right')).def('left'),
  'onUpdate:activeKey': _vueTypes.default.func,
  onChange: _vueTypes.default.func
};

var _default2 = (0, _vue.defineComponent)({
  name: 'ACollapse',
  inheritAttrs: false,
  props: collapseProps,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    renderExpandIcon: function renderExpandIcon() {
      var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var prefixCls = arguments.length > 1 ? arguments[1] : undefined;
      var expandIcon = (0, _propsUtil.getComponent)(this, 'expandIcon', panelProps);
      var icon = expandIcon || (0, _vue.createVNode)(_RightOutlined.default, {
        "rotate": panelProps.isActive ? 90 : undefined
      }, null);
      return (0, _propsUtil.isValidElement)(Array.isArray(expandIcon) ? icon[0] : icon) ? (0, _vnode.cloneElement)(icon, {
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

    var collapseClassName = (_collapseClassName = {}, (0, _defineProperty2.default)(_collapseClassName, className, className), (0, _defineProperty2.default)(_collapseClassName, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2.default)(_collapseClassName, "".concat(prefixCls, "-icon-position-").concat(expandIconPosition), true), _collapseClassName);
    var rcCollapeProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), {
      prefixCls: prefixCls,
      expandIcon: function expandIcon(panelProps) {
        return _this.renderExpandIcon(panelProps, prefixCls);
      },
      class: collapseClassName
    }), restAttrs), {
      onChange: this.handleChange
    });
    return (0, _vue.createVNode)(_vcCollapse.default, rcCollapeProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});

exports.default = _default2;