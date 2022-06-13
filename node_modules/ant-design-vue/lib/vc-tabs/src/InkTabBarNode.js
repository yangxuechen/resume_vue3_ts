"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _utils = require("./utils");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

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
  var activeIndex = (0, _utils.getActiveIndex)(panels, activeKey);

  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }

  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = (0, _utils.isTransform3dSupported)(inkBarNodeStyle); // Reset current style

    (0, _utils.setTransform)(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = (0, _utils.getLeft)(tabNode, wrapNode);
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
        left = (0, _utils.getStyle)(tabNode, 'margin-left') - left;
      } // use 3d gpu to optimize render


      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, "translate3d(".concat(left, "px,0,0)"));
      } else {
        inkBarNodeStyle.left = "".concat(left, "px");
      }

      inkBarNodeStyle.width = "".concat(width, "px");
    } else {
      var top = (0, _utils.getTop)(tabNode, wrapNode, true);
      var height = tabNode.offsetHeight;

      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);

        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }

      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, "translate3d(0,".concat(top, "px,0)"));
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = "".concat(top, "px");
      }

      inkBarNodeStyle.height = "".concat(height, "px");
    }
  }

  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}

var _default = {
  name: 'InkTabBarNode',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    inkBarAnimated: {
      type: Boolean,
      default: true
    },
    direction: _vueTypes.default.string,
    prefixCls: String,
    styles: Object,
    tabBarPosition: String,
    saveRef: _vueTypes.default.func.def(function () {}),
    getRef: _vueTypes.default.func.def(function () {}),
    panels: _vueTypes.default.array,
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])
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
    var classes = (_classes = {}, (0, _defineProperty2.default)(_classes, className, true), (0, _defineProperty2.default)(_classes, inkBarAnimated ? "".concat(className, "-animated") : "".concat(className, "-no-animated"), true), _classes);
    return (0, _vue.createVNode)("div", {
      "style": styles.inkBar,
      "class": classes,
      "key": "inkBar",
      "ref": this.saveRef('inkBar')
    }, null);
  }
};
exports.default = _default;