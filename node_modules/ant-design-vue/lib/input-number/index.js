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

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _UpOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/UpOutlined"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _src = _interopRequireDefault(require("../vc-input-number/src"));

var _configProvider = require("../config-provider");

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

var inputNumberProps = {
  prefixCls: _vueTypes.default.string,
  min: _vueTypes.default.number,
  max: _vueTypes.default.number,
  value: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  step: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]).def(1),
  defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  disabled: _vueTypes.default.looseBool,
  size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'small', 'default')),
  formatter: _vueTypes.default.func,
  parser: _vueTypes.default.func,
  decimalSeparator: _vueTypes.default.string,
  placeholder: _vueTypes.default.string,
  name: _vueTypes.default.string,
  id: _vueTypes.default.string,
  precision: _vueTypes.default.number,
  autofocus: _vueTypes.default.looseBool,
  onPressEnter: {
    type: Function
  },
  onChange: Function
};
var InputNumber = (0, _vue.defineComponent)({
  name: 'AInputNumber',
  inheritAttrs: false,
  props: inputNumberProps,
  setup: function setup(props) {
    var inputNumberRef = (0, _vue.ref)(null);

    var focus = function focus() {
      inputNumberRef.value.focus();
    };

    var blur = function blur() {
      inputNumberRef.value.blur();
    };

    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        if (process.env.NODE_ENV === 'test') {
          if (props.autofocus && !props.disabled) {
            focus();
          }
        }
      });
    });
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      inputNumberRef: inputNumberRef,
      focus: focus,
      blur: blur
    };
  },
  render: function render() {
    var _classNames;

    var _a = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
        customizePrefixCls = _a.prefixCls,
        size = _a.size,
        className = _a.class,
        others = __rest(_a, ["prefixCls", "size", "class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    var inputNumberClass = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames), className);
    var upIcon = (0, _vue.createVNode)(_UpOutlined.default, {
      "class": "".concat(prefixCls, "-handler-up-inner")
    }, null);
    var downIcon = (0, _vue.createVNode)(_DownOutlined.default, {
      "class": "".concat(prefixCls, "-handler-down-inner")
    }, null);
    var vcInputNumberProps = (0, _extends2.default)((0, _extends2.default)({
      prefixCls: prefixCls,
      upHandler: upIcon,
      downHandler: downIcon
    }, others), {
      class: inputNumberClass
    });
    return (0, _vue.createVNode)(_src.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, vcInputNumberProps), {}, {
      "ref": "inputNumberRef"
    }), null);
  }
});

var _default = (0, _type.withInstall)(InputNumber);

exports.default = _default;