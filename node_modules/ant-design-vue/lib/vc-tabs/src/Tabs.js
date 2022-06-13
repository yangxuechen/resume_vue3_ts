"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("./KeyCode"));

var _vnode = require("../../_util/vnode");

var _Sentinel = _interopRequireDefault(require("./Sentinel"));

var _isValid = _interopRequireDefault(require("../../_util/isValid"));

var _utils = require("./utils");

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

function getDefaultActiveKey(props) {
  var activeKey;
  var children = props.children;
  children.forEach(function (child) {
    if (child && !(0, _isValid.default)(activeKey) && !child.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var children = props.children;
  var keys = children.map(function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var _default = (0, _vue.defineComponent)({
  name: 'Tabs',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    destroyInactiveTabPane: _vueTypes.default.looseBool,
    renderTabBar: _vueTypes.default.func.isRequired,
    renderTabContent: _vueTypes.default.func.isRequired,
    navWrapper: _vueTypes.default.func.def(function (arg) {
      return arg;
    }),
    children: _vueTypes.default.any.def([]),
    prefixCls: _vueTypes.default.string.def('ant-tabs'),
    tabBarPosition: _vueTypes.default.string.def('top'),
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    defaultActiveKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    direction: _vueTypes.default.string.def('ltr'),
    tabBarGutter: _vueTypes.default.number
  },
  setup: function setup(props) {
    var activeKey;

    if (props.activeKey !== undefined) {
      // eslint-disable-next-line vue/no-setup-props-destructure
      activeKey = props.activeKey;
    } else if (props.defaultActiveKey !== undefined) {
      // eslint-disable-next-line vue/no-setup-props-destructure
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    var state = (0, _vue.reactive)({
      _activeKey: activeKey
    });
    (0, _vue.watchEffect)(function () {
      if (props.activeKey !== undefined) {
        state._activeKey = props.activeKey;
      } else if (!activeKeyIsValid(props, state._activeKey)) {
        // https://github.com/ant-design/ant-design/issues/7093
        state._activeKey = getDefaultActiveKey(props);
      }
    }, {
      flush: 'sync'
    });
    return {
      state: state
    };
  },
  created: function created() {
    this.panelSentinelStart = undefined;
    this.panelSentinelEnd = undefined;
    this.sentinelStart = undefined;
    this.sentinelEnd = undefined;
    (0, _vue.provide)('sentinelContext', this);
  },
  beforeUnmount: function beforeUnmount() {
    this.destroy = true;
    cancelAnimationFrame(this.sentinelId);
  },
  methods: {
    onTabClick: function onTabClick(activeKey, e) {
      if (this.tabBar.props && this.tabBar.props.onTabClick) {
        this.tabBar.props.onTabClick(activeKey, e);
      }

      this.setActiveKey(activeKey);
    },
    onNavKeyDown: function onNavKeyDown(e) {
      var eventKeyCode = e.keyCode;

      if (eventKeyCode === _KeyCode.default.RIGHT || eventKeyCode === _KeyCode.default.DOWN) {
        e.preventDefault();
        var nextKey = this.getNextActiveKey(true);
        this.onTabClick(nextKey);
      } else if (eventKeyCode === _KeyCode.default.LEFT || eventKeyCode === _KeyCode.default.UP) {
        e.preventDefault();
        var previousKey = this.getNextActiveKey(false);
        this.onTabClick(previousKey);
      }
    },
    onScroll: function onScroll(_ref) {
      var target = _ref.target,
          currentTarget = _ref.currentTarget;

      if (target === currentTarget && target.scrollLeft > 0) {
        target.scrollLeft = 0;
      }
    },
    // Sentinel for tab index
    setSentinelStart: function setSentinelStart(node) {
      this.sentinelStart = node;
    },
    setSentinelEnd: function setSentinelEnd(node) {
      this.sentinelEnd = node;
    },
    setPanelSentinelStart: function setPanelSentinelStart(node) {
      if (node !== this.panelSentinelStart) {
        this.updateSentinelContext();
      }

      this.panelSentinelStart = node;
    },
    setPanelSentinelEnd: function setPanelSentinelEnd(node) {
      if (node !== this.panelSentinelEnd) {
        this.updateSentinelContext();
      }

      this.panelSentinelEnd = node;
    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.state._activeKey !== activeKey) {
        var props = this.$props;

        if (props.activeKey === undefined) {
          this.state._activeKey = activeKey;
        }

        this.__emit('update:activeKey', activeKey);

        this.__emit('change', activeKey);
      }
    },
    getNextActiveKey: function getNextActiveKey(next) {
      var activeKey = this.state._activeKey;
      var children = [];
      this.$props.children.forEach(function (c) {
        var _a, _b;

        if (c && !((_a = c.props) === null || _a === void 0 ? void 0 : _a.disabled) && ((_b = c.props) === null || _b === void 0 ? void 0 : _b.disabled) !== '') {
          if (next) {
            children.push(c);
          } else {
            children.unshift(c);
          }
        }
      });
      var length = children.length;
      var ret = length && children[0].key;
      children.forEach(function (child, i) {
        if (child.key === activeKey) {
          if (i === length - 1) {
            ret = children[0].key;
          } else {
            ret = children[i + 1].key;
          }
        }
      });
      return ret;
    },
    updateSentinelContext: function updateSentinelContext() {
      var _this = this;

      if (this.destroy) return;
      cancelAnimationFrame(this.sentinelId);
      this.sentinelId = requestAnimationFrame(function () {
        if (_this.destroy) return;

        _this.$forceUpdate();
      });
    }
  },
  render: function render() {
    var _cls;

    var props = this.$props;
    var prefixCls = props.prefixCls,
        navWrapper = props.navWrapper,
        tabBarPosition = props.tabBarPosition,
        renderTabContent = props.renderTabContent,
        renderTabBar = props.renderTabBar,
        destroyInactiveTabPane = props.destroyInactiveTabPane,
        direction = props.direction,
        tabBarGutter = props.tabBarGutter;

    var _a = this.$attrs,
        className = _a.class,
        onChange = _a.onChange,
        style = _a.style,
        restProps = __rest(_a, ["class", "onChange", "style"]);

    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, className, className), (0, _defineProperty2.default)(_cls, prefixCls, 1), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-").concat(tabBarPosition), 1), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _cls);
    this.tabBar = renderTabBar();
    var tabBar = (0, _vnode.cloneElement)(this.tabBar, {
      prefixCls: prefixCls,
      navWrapper: navWrapper,
      tabBarPosition: tabBarPosition,
      panels: props.children,
      activeKey: this.state._activeKey,
      direction: direction,
      tabBarGutter: tabBarGutter,
      onKeydown: this.onNavKeyDown,
      onTabClick: this.onTabClick,
      key: 'tabBar'
    });
    var tabContent = (0, _vnode.cloneElement)(renderTabContent(), {
      prefixCls: prefixCls,
      tabBarPosition: tabBarPosition,
      activeKey: this.state._activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane,
      direction: direction,
      onChange: this.setActiveKey,
      children: props.children,
      key: 'tabContent'
    });
    var sentinelStart = (0, _vue.createVNode)(_Sentinel.default, {
      "key": "sentinelStart",
      "setRef": this.setSentinelStart,
      "nextElement": this.panelSentinelStart
    }, null);
    var sentinelEnd = (0, _vue.createVNode)(_Sentinel.default, {
      "key": "sentinelEnd",
      "setRef": this.setSentinelEnd,
      "prevElement": this.panelSentinelEnd
    }, null);
    var contents = [];

    if (tabBarPosition === 'bottom') {
      contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
    } else {
      contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
    }

    var p = (0, _extends2.default)((0, _extends2.default)({}, (0, _utils.getDataAttr)(restProps)), {
      style: style,
      onScroll: this.onScroll,
      class: cls
    });
    return (0, _vue.createVNode)("div", p, [contents]);
  }
});

exports.default = _default;