import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, provide, reactive, watchEffect } from 'vue';
import BaseMixin from '../../_util/BaseMixin';
import PropTypes from '../../_util/vue-types';
import KeyCode from './KeyCode';
import { cloneElement } from '../../_util/vnode';
import Sentinel from './Sentinel';
import isValid from '../../_util/isValid';
import { getDataAttr } from './utils';

function getDefaultActiveKey(props) {
  var activeKey;
  var children = props.children;
  children.forEach(function (child) {
    if (child && !isValid(activeKey) && !child.disabled) {
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

export default defineComponent({
  name: 'Tabs',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    destroyInactiveTabPane: PropTypes.looseBool,
    renderTabBar: PropTypes.func.isRequired,
    renderTabContent: PropTypes.func.isRequired,
    navWrapper: PropTypes.func.def(function (arg) {
      return arg;
    }),
    children: PropTypes.any.def([]),
    prefixCls: PropTypes.string.def('ant-tabs'),
    tabBarPosition: PropTypes.string.def('top'),
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    direction: PropTypes.string.def('ltr'),
    tabBarGutter: PropTypes.number
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

    var state = reactive({
      _activeKey: activeKey
    });
    watchEffect(function () {
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
    provide('sentinelContext', this);
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

      if (eventKeyCode === KeyCode.RIGHT || eventKeyCode === KeyCode.DOWN) {
        e.preventDefault();
        var nextKey = this.getNextActiveKey(true);
        this.onTabClick(nextKey);
      } else if (eventKeyCode === KeyCode.LEFT || eventKeyCode === KeyCode.UP) {
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

    var cls = (_cls = {}, _defineProperty(_cls, className, className), _defineProperty(_cls, prefixCls, 1), _defineProperty(_cls, "".concat(prefixCls, "-").concat(tabBarPosition), 1), _defineProperty(_cls, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _cls);
    this.tabBar = renderTabBar();
    var tabBar = cloneElement(this.tabBar, {
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
    var tabContent = cloneElement(renderTabContent(), {
      prefixCls: prefixCls,
      tabBarPosition: tabBarPosition,
      activeKey: this.state._activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane,
      direction: direction,
      onChange: this.setActiveKey,
      children: props.children,
      key: 'tabContent'
    });

    var sentinelStart = _createVNode(Sentinel, {
      "key": "sentinelStart",
      "setRef": this.setSentinelStart,
      "nextElement": this.panelSentinelStart
    }, null);

    var sentinelEnd = _createVNode(Sentinel, {
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

    var p = _extends(_extends({}, getDataAttr(restProps)), {
      style: style,
      onScroll: this.onScroll,
      class: cls
    });

    return _createVNode("div", p, [contents]);
  }
});