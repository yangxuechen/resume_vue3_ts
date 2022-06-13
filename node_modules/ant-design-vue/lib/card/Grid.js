"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

var _default = (0, _vue.defineComponent)({
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: {
    prefixCls: _vueTypes.default.string,
    hoverable: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  render: function render() {
    var _classString;

    var _this$$props = this.$props,
        customizePrefixCls = _this$$props.prefixCls,
        _this$$props$hoverabl = _this$$props.hoverable,
        hoverable = _this$$props$hoverabl === void 0 ? true : _this$$props$hoverabl;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-grid"), true), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-grid-hoverable"), hoverable), _classString);
    return (0, _vue.createVNode)("div", {
      "class": classString
    }, [(0, _propsUtil.getSlot)(this)]);
  }
});

exports.default = _default;