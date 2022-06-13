"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _Input = _interopRequireDefault(require("./Input"));

var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeOutlined"));

var _EyeInvisibleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeInvisibleOutlined"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _configProvider = require("../config-provider");

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

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseover'
};

var _default = (0, _vue.defineComponent)({
  name: 'AInputPassword',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, _inputProps.default), {
    prefixCls: _vueTypes.default.string,
    inputPrefixCls: _vueTypes.default.string,
    action: _vueTypes.default.string.def('click'),
    visibilityToggle: _vueTypes.default.looseBool.def(true),
    iconRender: _vueTypes.default.func.def(function (visible) {
      return visible ? (0, _vue.createVNode)(_EyeOutlined.default, null, null) : (0, _vue.createVNode)(_EyeInvisibleOutlined.default, null, null);
    })
  }),
  setup: function setup() {
    return {
      input: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }

      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon(prefixCls) {
      var _iconProps;

      var action = this.$props.action;
      var iconTrigger = ActionMap[action] || '';
      var iconRender = this.$slots.iconRender || this.$props.iconRender;
      var icon = iconRender(this.visible);
      var iconProps = (_iconProps = {}, (0, _defineProperty2.default)(_iconProps, iconTrigger, this.onVisibleChange), (0, _defineProperty2.default)(_iconProps, "onMousedown", function onMousedown(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      }), (0, _defineProperty2.default)(_iconProps, "onMouseup", function onMouseup(e) {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/pull/23633/files
        e.preventDefault();
      }), (0, _defineProperty2.default)(_iconProps, "class", "".concat(prefixCls, "-icon")), (0, _defineProperty2.default)(_iconProps, "key", 'passwordIcon'), _iconProps);
      return (0, _vnode.cloneElement)(icon, iconProps);
    }
  },
  render: function render() {
    var _a = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _a.prefixCls,
        customizeInputPrefixCls = _a.inputPrefixCls,
        size = _a.size,
        suffix = _a.suffix,
        action = _a.action,
        visibilityToggle = _a.visibilityToggle,
        iconRender = _a.iconRender,
        restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "suffix", "action", "visibilityToggle", "iconRender"]);

    var className = this.$attrs.class;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && this.getIcon(prefixCls);
    var inputClassName = (0, _classNames2.default)(prefixCls, className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-").concat(size), !!size));
    var inputProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: suffixIcon,
      prefix: (0, _propsUtil.getComponent)(this, 'prefix'),
      addonAfter: (0, _propsUtil.getComponent)(this, 'addonAfter'),
      addonBefore: (0, _propsUtil.getComponent)(this, 'addonBefore')
    }), this.$attrs), {
      type: this.visible ? 'text' : 'password',
      class: inputClassName,
      ref: 'input'
    });
    return (0, _vue.createVNode)(_Input.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});

exports.default = _default;