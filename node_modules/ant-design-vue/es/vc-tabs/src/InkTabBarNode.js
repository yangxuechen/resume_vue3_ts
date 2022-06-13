import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import { setTransform, isTransform3dSupported, getLeft, getStyle, getTop, getActiveIndex } from './utils';
import BaseMixin from '../../_util/BaseMixin';

function componentDidUpdate(component, init) {
  var _component$$props = component.$props,
      _component$$props$sty = _component$$props.styles,
      styles = _component$$props$sty === void 0 ? {} : _component$$props$sty,
      panels = _component$$props.panels,
      activeKey = _component$$props.activeKey,
      direction = _component$$props.direction;
  var rootNode = component.getRef('root');
  var wrapNode = component.getRef('nav') || rootNode;
  var inkBarNode = component.getRef('inkBar');
  var activeTab = component.getRef('activeTab');
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.$props.tabBarPosition;
  var activeIndex = getActiveIndex(panels, activeKey);

  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }

  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = isTransform3dSupported(inkBarNodeStyle); // Reset current style

    setTransform(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = getLeft(tabNode, wrapNode);
      var width = tabNode.offsetWidth; // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564

      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);

        if (width) {
          left += (tabNode.offsetWidth - width) / 2;
        }
      }

      if (direction === 'rtl') {
        left = getStyle(tabNode, 'margin-left') - left;
      } // use 3d gpu to optimize render


      if (transformSupported) {
        setTransform(inkBarNodeStyle, "translate3d(".concat(left, "px,0,0)"));
      } else {
        inkBarNodeStyle.left = "".concat(left, "px");
      }

      inkBarNodeStyle.width = "".concat(width, "px");
    } else {
      var top = getTop(tabNode, wrapNode, true);
      var height = tabNode.offsetHeight;

      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);

        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }

      if (transformSupported) {
        setTransform(inkBarNodeStyle, "translate3d(0,".concat(top, "px,0)"));
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = "".concat(top, "px");
      }

      inkBarNodeStyle.height = "".concat(height, "px");
    }
  }

  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}

export default {
  name: 'InkTabBarNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    inkBarAnimated: {
      type: Boolean,
      default: true
    },
    direction: PropTypes.string,
    prefixCls: String,
    styles: Object,
    tabBarPosition: String,
    saveRef: PropTypes.func.def(function () {}),
    getRef: PropTypes.func.def(function () {}),
    panels: PropTypes.array,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      componentDidUpdate(_this);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      componentDidUpdate(_this2, true);
    });
  },
  render: function render() {
    var _classes;

    var prefixCls = this.prefixCls,
        _this$styles = this.styles,
        styles = _this$styles === void 0 ? {} : _this$styles,
        inkBarAnimated = this.inkBarAnimated;
    var className = "".concat(prefixCls, "-ink-bar");
    var classes = (_classes = {}, _defineProperty(_classes, className, true), _defineProperty(_classes, inkBarAnimated ? "".concat(className, "-animated") : "".concat(className, "-no-animated"), true), _classes);
    return _createVNode("div", {
      "style": styles.inkBar,
      "class": classes,
      "key": "inkBar",
      "ref": this.saveRef('inkBar')
    }, null);
  }
};