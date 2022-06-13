import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import warning from 'warning';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getComponent, getPropsData } from '../../_util/props-util';
import { isVertical } from './utils';

function noop() {}

export default {
  name: 'TabBarTabsNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    panels: PropTypes.any.def([]),
    prefixCls: PropTypes.string.def(''),
    tabBarGutter: PropTypes.any.def(null),
    onTabClick: PropTypes.func,
    saveRef: PropTypes.func.def(noop),
    getRef: PropTypes.func.def(noop),
    renderTabBarNode: PropTypes.func,
    tabBarPosition: PropTypes.string,
    direction: PropTypes.string
  },
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        children = _this$$props.panels,
        activeKey = _this$$props.activeKey,
        prefixCls = _this$$props.prefixCls,
        tabBarGutter = _this$$props.tabBarGutter,
        saveRef = _this$$props.saveRef,
        tabBarPosition = _this$$props.tabBarPosition,
        direction = _this$$props.direction;
    var rst = [];
    var renderTabBarNode = this.renderTabBarNode || this.$slots.renderTabBarNode;
    children.forEach(function (child, index) {
      if (!child) {
        return;
      }

      var props = getPropsData(child);
      var key = child.key;
      var cls = activeKey === key ? "".concat(prefixCls, "-tab-active") : '';
      cls += " ".concat(prefixCls, "-tab");
      var events = {};
      var disabled = props.disabled;

      if (disabled) {
        cls += " ".concat(prefixCls, "-tab-disabled");
      } else {
        events.onClick = function () {
          _this.__emit('tabClick', key);
        };
      }

      var tab = getComponent(child, 'tab');
      var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
      gutter = typeof gutter === 'number' ? "".concat(gutter, "px") : gutter;
      var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';

      var style = _defineProperty({}, isVertical(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);

      warning(tab !== undefined, 'There must be `tab` property or slot on children of Tabs.');

      var node = _createVNode("div", _objectSpread(_objectSpread({
        "role": "tab",
        "aria-disabled": disabled ? 'true' : 'false',
        "aria-selected": activeKey === key ? 'true' : 'false'
      }, events), {}, {
        "class": cls.trim(),
        "key": key,
        "style": style,
        "ref": activeKey === key ? saveRef('activeTab') : noop
      }), [tab]);

      if (renderTabBarNode) {
        node = renderTabBarNode(node);
      }

      rst.push(node);
    });
    return _createVNode("div", {
      "ref": this.saveRef('navTabsContainer')
    }, [rst]);
  }
};