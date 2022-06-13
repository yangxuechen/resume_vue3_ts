"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _vnode = require("../../_util/vnode");

var _openAnimationFactory = _interopRequireDefault(require("./openAnimationFactory"));

var _commonProps = require("./commonProps");

var _util = require("../../_util/util");

function _toArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = (0, _typeof2.default)(currentActiveKey);
    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var _default = (0, _vue.defineComponent)({
  name: 'Collapse',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _commonProps.collapseProps)(), {
    prefixCls: 'rc-collapse',
    accordion: false,
    destroyInactivePanel: false
  }),
  data: function data() {
    var _this$$props = this.$props,
        activeKey = _this$$props.activeKey,
        defaultActiveKey = _this$$props.defaultActiveKey,
        openAnimation = _this$$props.openAnimation,
        prefixCls = _this$$props.prefixCls;
    var currentActiveKey = defaultActiveKey;

    if ((0, _propsUtil.hasProp)(this, 'activeKey')) {
      currentActiveKey = activeKey;
    }

    var currentOpenAnimations = openAnimation || (0, _openAnimationFactory.default)(prefixCls);
    return {
      currentOpenAnimations: currentOpenAnimations,
      stateActiveKey: _toArray(currentActiveKey)
    };
  },
  watch: {
    activeKey: function activeKey(val) {
      this.setState({
        stateActiveKey: _toArray(val)
      });
    },
    openAnimation: function openAnimation(val) {
      this.setState({
        currentOpenAnimations: val
      });
    }
  },
  methods: {
    onClickItem: function onClickItem(key) {
      var activeKey = this.stateActiveKey;

      if (this.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = (0, _toConsumableArray2.default)(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      this.setActiveKey(activeKey);
    },
    getNewChild: function getNewChild(child, index) {
      var _a;

      if ((0, _propsUtil.isEmptyElement)(child)) return;
      var activeKey = this.stateActiveKey;
      var _this$$props2 = this.$props,
          prefixCls = _this$$props2.prefixCls,
          accordion = _this$$props2.accordion,
          destroyInactivePanel = _this$$props2.destroyInactivePanel,
          expandIcon = _this$$props2.expandIcon; // If there is no key provide, use the panel order as default key

      var key = String((_a = child.key) !== null && _a !== void 0 ? _a : index);

      var _getPropsData = (0, _propsUtil.getPropsData)(child),
          header = _getPropsData.header,
          headerClass = _getPropsData.headerClass,
          disabled = _getPropsData.disabled;

      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var panelEvents = {};

      if (!disabled && disabled !== '') {
        panelEvents = {
          onItemClick: this.onClickItem
        };
      }

      var props = (0, _extends2.default)({
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel,
        openAnimation: this.currentOpenAnimations,
        accordion: accordion,
        expandIcon: expandIcon
      }, panelEvents);
      return (0, _vnode.cloneElement)(child, props);
    },
    getItems: function getItems() {
      var _this = this;

      var newChildren = [];
      var children = (0, _propsUtil.getSlot)(this);
      children && children.forEach(function (child, index) {
        newChildren.push(_this.getNewChild(child, index));
      });
      return newChildren;
    },
    setActiveKey: function setActiveKey(activeKey) {
      if (!(0, _propsUtil.hasProp)(this, 'activeKey')) {
        this.setState({
          stateActiveKey: activeKey
        });
      }

      this.__emit('change', this.accordion ? activeKey[0] : activeKey);
    }
  },
  render: function render() {
    var _collapseClassName;

    var _this$$props3 = this.$props,
        prefixCls = _this$$props3.prefixCls,
        accordion = _this$$props3.accordion;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    var collapseClassName = (_collapseClassName = {}, (0, _defineProperty2.default)(_collapseClassName, prefixCls, true), (0, _defineProperty2.default)(_collapseClassName, className, className), _collapseClassName);
    return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      "class": collapseClassName
    }, (0, _util.getDataAndAriaProps)(this.$attrs)), {}, {
      "style": style,
      "role": accordion ? 'tablist' : null
    }), [this.getItems()]);
  }
});

exports.default = _default;