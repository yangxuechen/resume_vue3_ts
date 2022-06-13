"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _type = require("../_util/type");

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _PlusOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusOutlined"));

var _src = _interopRequireWildcard(require("../vc-tabs/src"));

var _TabContent = _interopRequireDefault(require("../vc-tabs/src/TabContent"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _vnode = require("../_util/vnode");

var _isValid = _interopRequireDefault(require("../_util/isValid"));

var _configProvider = require("../config-provider");

var _TabBar = _interopRequireDefault(require("./TabBar"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var _default = (0, _vue.defineComponent)({
  TabPane: _src.TabPane,
  name: 'ATabs',
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    activeKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    defaultActiveKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    hideAdd: _vueTypes.default.looseBool.def(false),
    centered: _vueTypes.default.looseBool.def(false),
    tabBarStyle: _vueTypes.default.object,
    tabBarExtraContent: _vueTypes.default.any,
    destroyInactiveTabPane: _vueTypes.default.looseBool.def(false),
    type: _vueTypes.default.oneOf((0, _type.tuple)('line', 'card', 'editable-card')),
    tabPosition: _vueTypes.default.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
    size: _vueTypes.default.oneOf(['default', 'small', 'large']),
    animated: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    tabBarGutter: _vueTypes.default.number,
    renderTabBar: _vueTypes.default.func,
    onChange: {
      type: Function
    },
    onTabClick: _vueTypes.default.func,
    onPrevClick: {
      type: Function
    },
    onNextClick: {
      type: Function
    },
    onEdit: {
      type: Function
    }
  },
  emits: ['update:activeKey', 'edit', 'change'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    removeTab: function removeTab(targetKey, e) {
      e.stopPropagation();

      if ((0, _isValid.default)(targetKey)) {
        this.$emit('edit', targetKey, 'remove');
      }
    },
    handleChange: function handleChange(activeKey) {
      this.$emit('update:activeKey', activeKey);
      this.$emit('change', activeKey);
    },
    createNewTab: function createNewTab(targetKey) {
      this.$emit('edit', targetKey, 'add');
    }
  },
  render: function render() {
    var _cls,
        _this = this,
        _contentCls;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        size = props.size,
        _props$type = props.type,
        type = _props$type === void 0 ? 'line' : _props$type,
        tabPosition = props.tabPosition,
        _props$animated = props.animated,
        animated = _props$animated === void 0 ? true : _props$animated,
        hideAdd = props.hideAdd,
        renderTabBar = props.renderTabBar;

    var _a = this.$attrs,
        className = _a.class,
        restProps = __rest(_a, ["class"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tabs', customizePrefixCls);
    var children = (0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this));
    var tabBarExtraContent = (0, _propsUtil.getComponent)(this, 'tabBarExtraContent');
    var tabPaneAnimated = (0, _typeof2.default)(animated) === 'object' ? animated.tabPane : animated; // card tabs should not have animation

    if (type !== 'line') {
      tabPaneAnimated = 'animated' in props ? tabPaneAnimated : false;
    }

    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, className, className), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-vertical"), tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-").concat(size), !!size), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-card"), type.indexOf('card') >= 0), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-").concat(type), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-no-animation"), !tabPaneAnimated), _cls); // only card type tabs can be added and closed

    var childrenWithClose = [];

    if (type === 'editable-card') {
      childrenWithClose = [];
      children.forEach(function (child, index) {
        var props = (0, _propsUtil.getPropsData)(child);
        var closable = props.closable;
        closable = typeof closable === 'undefined' ? true : closable;
        var closeIcon = closable ? (0, _vue.createVNode)(_CloseOutlined.default, {
          "class": "".concat(prefixCls, "-close-x"),
          "onClick": function onClick(e) {
            return _this.removeTab(child.key, e);
          }
        }, null) : null;
        childrenWithClose.push((0, _vnode.cloneElement)(child, {
          tab: (0, _vue.createVNode)("div", {
            "class": closable ? undefined : "".concat(prefixCls, "-tab-unclosable")
          }, [(0, _propsUtil.getComponent)(child, 'tab'), closeIcon]),
          key: child.key || index
        }));
      }); // Add new tab handler

      if (!hideAdd) {
        tabBarExtraContent = (0, _vue.createVNode)("span", null, [(0, _vue.createVNode)(_PlusOutlined.default, {
          "class": "".concat(prefixCls, "-new-tab"),
          "onClick": this.createNewTab
        }, null), tabBarExtraContent]);
      }
    }

    tabBarExtraContent = tabBarExtraContent ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-extra-content")
    }, [tabBarExtraContent]) : null;
    var renderTabBarSlot = renderTabBar || this.$slots.renderTabBar;
    var tabBarProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
      prefixCls: prefixCls,
      tabBarExtraContent: tabBarExtraContent,
      renderTabBar: renderTabBarSlot
    }), restProps), {
      children: children
    });
    var contentCls = (_contentCls = {}, (0, _defineProperty2.default)(_contentCls, "".concat(prefixCls, "-").concat(tabPosition, "-content"), true), (0, _defineProperty2.default)(_contentCls, "".concat(prefixCls, "-card-content"), type.indexOf('card') >= 0), _contentCls);
    var tabsProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
      prefixCls: prefixCls,
      tabBarPosition: tabPosition,
      // https://github.com/vueComponent/ant-design-vue/issues/2030
      // 如仅传递 tabBarProps 会导致，第二次执行 renderTabBar 时，丢失 on 属性，
      // 添加key之后，会在babel jsx 插件中做一次merge，最终TabBar接收的是一个新的对象，而不是 tabBarProps
      renderTabBar: function renderTabBar() {
        return (0, _vue.createVNode)(_TabBar.default, (0, _objectSpread2.default)({
          "key": "tabBar"
        }, tabBarProps), null);
      },
      renderTabContent: function renderTabContent() {
        return (0, _vue.createVNode)(_TabContent.default, {
          "class": contentCls,
          "animated": tabPaneAnimated,
          "animatedWithMargin": true
        }, null);
      },
      children: childrenWithClose.length > 0 ? childrenWithClose : children
    }), restProps), {
      onChange: this.handleChange,
      class: cls
    });
    return (0, _vue.createVNode)(_src.default, tabsProps, null);
  }
});

exports.default = _default;