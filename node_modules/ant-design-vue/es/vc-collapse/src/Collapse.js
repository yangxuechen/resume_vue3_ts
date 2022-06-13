import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import BaseMixin from '../../_util/BaseMixin';
import { hasProp, getPropsData, isEmptyElement, initDefaultProps, getSlot } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
import openAnimationFactory from './openAnimationFactory';
import { collapseProps } from './commonProps';
import { getDataAndAriaProps } from '../../_util/util';
import { defineComponent } from 'vue';

function _toArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);

    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

export default defineComponent({
  name: 'Collapse',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(collapseProps(), {
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

    if (hasProp(this, 'activeKey')) {
      currentActiveKey = activeKey;
    }

    var currentOpenAnimations = openAnimation || openAnimationFactory(prefixCls);
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
        activeKey = _toConsumableArray(activeKey);
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

      if (isEmptyElement(child)) return;
      var activeKey = this.stateActiveKey;
      var _this$$props2 = this.$props,
          prefixCls = _this$$props2.prefixCls,
          accordion = _this$$props2.accordion,
          destroyInactivePanel = _this$$props2.destroyInactivePanel,
          expandIcon = _this$$props2.expandIcon; // If there is no key provide, use the panel order as default key

      var key = String((_a = child.key) !== null && _a !== void 0 ? _a : index);

      var _getPropsData = getPropsData(child),
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

      var props = _extends({
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

      return cloneElement(child, props);
    },
    getItems: function getItems() {
      var _this = this;

      var newChildren = [];
      var children = getSlot(this);
      children && children.forEach(function (child, index) {
        newChildren.push(_this.getNewChild(child, index));
      });
      return newChildren;
    },
    setActiveKey: function setActiveKey(activeKey) {
      if (!hasProp(this, 'activeKey')) {
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
    var collapseClassName = (_collapseClassName = {}, _defineProperty(_collapseClassName, prefixCls, true), _defineProperty(_collapseClassName, className, className), _collapseClassName);
    return _createVNode("div", _objectSpread(_objectSpread({
      "class": collapseClassName
    }, getDataAndAriaProps(this.$attrs)), {}, {
      "style": style,
      "role": accordion ? 'tablist' : null
    }), [this.getItems()]);
  }
});