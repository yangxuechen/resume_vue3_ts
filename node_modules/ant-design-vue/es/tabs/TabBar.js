import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { tuple } from '../_util/type';
import UpOutlined from '@ant-design/icons-vue/UpOutlined';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import LeftOutlined from '@ant-design/icons-vue/LeftOutlined';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import ScrollableInkTabBar from '../vc-tabs/src/ScrollableInkTabBar';
import PropTypes from '../_util/vue-types';
var TabBar = defineComponent({
  name: 'TabBar',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    centered: PropTypes.looseBool.def(false),
    tabBarStyle: PropTypes.style,
    tabBarExtraContent: PropTypes.VNodeChild,
    type: PropTypes.oneOf(tuple('line', 'card', 'editable-card')),
    tabPosition: PropTypes.oneOf(tuple('top', 'right', 'bottom', 'left')).def('top'),
    tabBarPosition: PropTypes.oneOf(tuple('top', 'right', 'bottom', 'left')),
    size: PropTypes.oneOf(tuple('default', 'small', 'large')),
    animated: {
      type: [Boolean, Object],
      default: undefined
    },
    renderTabBar: PropTypes.func,
    panels: PropTypes.array.def([]),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tabBarGutter: PropTypes.number
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
    var inkBarAnimated = _typeof(animated) === 'object' ? animated.inkBar : animated;
    var isVertical = tabPosition === 'left' || tabPosition === 'right';

    var prevIcon = _createVNode("span", {
      "class": "".concat(prefixCls, "-tab-prev-icon")
    }, [isVertical ? _createVNode(UpOutlined, {
      "class": "".concat(prefixCls, "-tab-prev-icon-target")
    }, null) : _createVNode(LeftOutlined, {
      "class": "".concat(prefixCls, "-tab-prev-icon-target")
    }, null)]);

    var nextIcon = _createVNode("span", {
      "class": "".concat(prefixCls, "-tab-next-icon")
    }, [isVertical ? _createVNode(DownOutlined, {
      "class": "".concat(prefixCls, "-tab-next-icon-target")
    }, null) : _createVNode(RightOutlined, {
      "class": "".concat(prefixCls, "-tab-next-icon-target")
    }, null)]); // Additional className for style usage


    var cls = (_cls = {}, _defineProperty(_cls, this.$attrs.class, this.$attrs.class), _defineProperty(_cls, "".concat(prefixCls, "-centered-bar"), centered), _defineProperty(_cls, "".concat(prefixCls, "-").concat(tabPosition, "-bar"), true), _defineProperty(_cls, "".concat(prefixCls, "-").concat(size, "-bar"), !!size), _defineProperty(_cls, "".concat(prefixCls, "-card-bar"), type && type.indexOf('card') >= 0), _cls);

    var renderProps = _extends(_extends(_extends({}, this.$props), this.$attrs), {
      children: null,
      inkBarAnimated: inkBarAnimated,
      extraContent: tabBarExtraContent,
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      style: tabBarStyle,
      class: cls
    });

    if (renderTabBar) {
      return renderTabBar(_extends(_extends({}, renderProps), {
        DefaultTabBar: ScrollableInkTabBar
      }));
    } else {
      return _createVNode(ScrollableInkTabBar, renderProps, null);
    }
  }
});
export default TabBar;