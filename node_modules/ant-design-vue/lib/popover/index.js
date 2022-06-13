"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _abstractTooltipProps = _interopRequireDefault(require("../tooltip/abstractTooltipProps"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var props = (0, _abstractTooltipProps.default)();
var Popover = (0, _vue.defineComponent)({
  name: 'APopover',
  props: (0, _extends2.default)((0, _extends2.default)({}, props), {
    prefixCls: _vueTypes.default.string,
    transitionName: _vueTypes.default.string.def('zoom-big'),
    content: _vueTypes.default.any,
    title: _vueTypes.default.any
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    }
  },
  render: function render() {
    var _this = this;

    var title = this.title,
        customizePrefixCls = this.prefixCls,
        $slots = this.$slots;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('popover', customizePrefixCls);
    var props = (0, _propsUtil.getOptionProps)(this);
    delete props.title;
    delete props.content;
    var tooltipProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
      prefixCls: prefixCls,
      ref: 'tooltip',
      title: (0, _vue.createVNode)("div", null, [(title || $slots.title) && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-title")
      }, [(0, _propsUtil.getComponent)(this, 'title')]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-inner-content")
      }, [(0, _propsUtil.getComponent)(this, 'content')])])
    });
    return (0, _vue.createVNode)(_tooltip.default, tooltipProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this)];
      }
    });
  }
});

var _default2 = (0, _type.withInstall)(Popover);

exports.default = _default2;