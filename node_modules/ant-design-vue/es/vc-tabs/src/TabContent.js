import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import { cloneElement } from '../../_util/vnode';
import { getTransformByIndex, getActiveIndex, getTransformPropValue, getMarginStyle } from './utils';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TabContent',
  inheritAttrs: false,
  props: {
    animated: PropTypes.looseBool.def(true),
    animatedWithMargin: PropTypes.looseBool.def(true),
    prefixCls: PropTypes.string.def('ant-tabs'),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tabBarPosition: PropTypes.string,
    direction: PropTypes.string,
    destroyInactiveTabPane: PropTypes.looseBool,
    children: PropTypes.any
  },
  computed: {
    classes: function classes() {
      var _ref;

      var animated = this.animated,
          prefixCls = this.prefixCls;
      var className = this.$attrs.class;
      return _ref = {}, _defineProperty(_ref, className, !!className), _defineProperty(_ref, "".concat(prefixCls, "-content"), true), _defineProperty(_ref, animated ? "".concat(prefixCls, "-content-animated") : "".concat(prefixCls, "-content-no-animated"), true), _ref;
    }
  },
  methods: {
    getTabPanes: function getTabPanes(children) {
      var props = this.$props;
      var activeKey = props.activeKey;
      var newChildren = [];
      children.forEach(function (child) {
        if (!child) {
          return;
        }

        var key = child.key;
        var active = activeKey === key;
        newChildren.push(cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });
      return newChildren;
    }
  },
  render: function render() {
    var activeKey = this.activeKey,
        tabBarPosition = this.tabBarPosition,
        animated = this.animated,
        animatedWithMargin = this.animatedWithMargin,
        direction = this.direction,
        classes = this.classes,
        children = this.children;
    var style = {};

    if (animated && children) {
      var activeIndex = getActiveIndex(children, activeKey);

      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? getMarginStyle(activeIndex, tabBarPosition) : getTransformPropValue(getTransformByIndex(activeIndex, tabBarPosition, direction));
        style = _extends(_extends({}, this.$attrs.style), animatedStyle);
      } else {
        style = _extends(_extends({}, this.$attrs.style), {
          display: 'none'
        });
      }
    }

    return _createVNode("div", {
      "class": classes,
      "style": style
    }, [this.getTabPanes(children || [])]);
  }
});