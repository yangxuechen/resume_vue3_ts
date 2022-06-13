"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _type = require("../_util/type");

var _UpOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/UpOutlined"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));

var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));

var _ScrollableInkTabBar = _interopRequireDefault(require("../vc-tabs/src/ScrollableInkTabBar"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var TabBar = (0, _vue.defineComponent)({
  name: 'TabBar',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    centered: _vueTypes.default.looseBool.def(false),
    tabBarStyle: _vueTypes.default.style,
    tabBarExtraContent: _vueTypes.default.VNodeChild,
    type: _vueTypes.default.oneOf((0, _type.tuple)('line', 'card', 'editable-card')),
    tabPosition: _vueTypes.default.oneOf((0, _type.tuple)('top', 'right', 'bottom', 'left')).def('top'),
    tabBarPosition: _vueTypes.default.oneOf((0, _type.tuple)('top', 'right', 'bottom', 'left')),
    size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'small', 'large')),
    animated: {
      type: [Boolean, Object],
      default: undefined
    },
    renderTabBar: _vueTypes.default.func,
    panels: _vueTypes.default.array.def([]),
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    tabBarGutter: _vueTypes.default.number
  },
  render: function render() {
    var _cls;

    var _this$$props = this.$props,
        centered = _this$$props.centered,
        tabBarStyle = _this$$props.tabBarStyle,
        _this$$props$animated = _this$$props.animated,
        animated = _this$$props$animated === void 0 ? true : _this$$props$animated,
        renderTabBar = _this$$props.renderTabBar,
        tabBarExtraContent = _this$$props.tabBarExtraContent,
        tabPosition = _this$$props.tabPosition,
        prefixCls = _this$$props.prefixCls,
        _this$$props$type = _this$$props.type,
        type = _this$$props$type === void 0 ? 'line' : _this$$props$type,
        size = _this$$props.size;
    var inkBarAnimated = (0, _typeof2.default)(animated) === 'object' ? animated.inkBar : animated;
    var isVertical = tabPosition === 'left' || tabPosition === 'right';
    var prevIcon = (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-tab-prev-icon")
    }, [isVertical ? (0, _vue.createVNode)(_UpOutlined.default, {
      "class": "".concat(prefixCls, "-tab-prev-icon-target")
    }, null) : (0, _vue.createVNode)(_LeftOutlined.default, {
      "class": "".concat(prefixCls, "-tab-prev-icon-target")
    }, null)]);
    var nextIcon = (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-tab-next-icon")
    }, [isVertical ? (0, _vue.createVNode)(_DownOutlined.default, {
      "class": "".concat(prefixCls, "-tab-next-icon-target")
    }, null) : (0, _vue.createVNode)(_RightOutlined.default, {
      "class": "".concat(prefixCls, "-tab-next-icon-target")
    }, null)]); // Additional className for style usage

    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, this.$attrs.class, this.$attrs.class), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-centered-bar"), centered), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-").concat(tabPosition, "-bar"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-").concat(size, "-bar"), !!size), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-card-bar"), type && type.indexOf('card') >= 0), _cls);
    var renderProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs), {
      children: null,
      inkBarAnimated: inkBarAnimated,
      extraContent: tabBarExtraContent,
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      style: tabBarStyle,
      class: cls
    });

    if (renderTabBar) {
      return renderTabBar((0, _extends2.default)((0, _extends2.default)({}, renderProps), {
        DefaultTabBar: _ScrollableInkTabBar.default
      }));
    } else {
      return (0, _vue.createVNode)(_ScrollableInkTabBar.default, renderProps, null);
    }
  }
});
var _default = TabBar;
exports.default = _default;