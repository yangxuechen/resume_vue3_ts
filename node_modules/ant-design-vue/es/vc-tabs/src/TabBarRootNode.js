import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { cloneElement } from '../../_util/vnode';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getSlot } from '../../_util/props-util';
import { getDataAttr } from './utils';

function noop() {}

export default {
  name: 'TabBarRootNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    saveRef: PropTypes.func.def(noop),
    getRef: PropTypes.func.def(noop),
    prefixCls: PropTypes.string.def(''),
    tabBarPosition: PropTypes.string.def('top'),
    extraContent: PropTypes.any
  },
  methods: {
    onKeyDown: function onKeyDown(e) {
      this.__emit('keydown', e);
    }
  },
  render: function render() {
    var _cls;

    var prefixCls = this.prefixCls,
        onKeyDown = this.onKeyDown,
        tabBarPosition = this.tabBarPosition,
        extraContent = this.extraContent;

    var _a = this.$attrs,
        className = _a.class,
        style = _a.style,
        onKeydown = _a.onKeydown,
        restProps = __rest(_a, ["class", "style", "onKeydown"]);

    var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-bar"), true), _defineProperty(_cls, className, !!className), _cls);
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? {
      float: 'right'
    } : {};
    var children = getSlot(this);
    var newChildren = children;

    if (extraContent) {
      newChildren = [cloneElement(extraContent, {
        key: 'extra',
        style: _extends({}, tabBarExtraContentStyle)
      }), cloneElement(children, {
        key: 'content'
      })];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }

    return _createVNode("div", _objectSpread({
      "role": "tablist",
      "class": cls,
      "tabindex": "0",
      "onKeydown": onKeyDown,
      "style": style,
      "ref": this.saveRef('root')
    }, getDataAttr(restProps)), [newChildren]);
  }
};