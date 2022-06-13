"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var _default = (0, _vue.defineComponent)({
  name: 'AInputGroup',
  props: {
    prefixCls: _vueTypes.default.string,
    size: _vueTypes.default.oneOf((0, _type.tuple)('small', 'large', 'default')),
    compact: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  computed: {
    classes: function classes() {
      var _ref;

      var customizePrefixCls = this.prefixCls,
          size = this.size,
          _this$compact = this.compact,
          compact = _this$compact === void 0 ? false : _this$compact,
          configProvider = this.configProvider;
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('input-group', customizePrefixCls);
      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefixCls), true), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-compact"), compact), _ref;
    }
  },
  render: function render() {
    return (0, _vue.createVNode)("span", {
      "class": this.classes
    }, [(0, _propsUtil.getSlot)(this)]);
  }
});

exports.default = _default;