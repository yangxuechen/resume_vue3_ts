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

import { defineComponent, inject } from 'vue';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import VcCollapse from '../vc-collapse';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';
var collapsePanelProps = {
  openAnimation: PropTypes.object,
  prefixCls: PropTypes.string,
  header: PropTypes.VNodeChild,
  headerClass: PropTypes.string,
  showArrow: PropTypes.looseBool,
  isActive: PropTypes.looseBool,
  destroyInactivePanel: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  accordion: PropTypes.looseBool,
  forceRender: PropTypes.looseBool,
  expandIcon: PropTypes.func,
  extra: PropTypes.VNodeChild,
  panelKey: PropTypes.VNodeChild
};
export default defineComponent({
  name: 'ACollapsePanel',
  inheritAttrs: false,
  props: collapsePanelProps,
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  render: function render() {
    var _collapsePanelClassNa,
        _this = this;

    var customizePrefixCls = this.prefixCls,
        _this$showArrow = this.showArrow,
        showArrow = _this$showArrow === void 0 ? true : _this$showArrow;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('collapse', customizePrefixCls);

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var collapsePanelClassName = (_collapsePanelClassNa = {}, _defineProperty(_collapsePanelClassNa, className, className), _defineProperty(_collapsePanelClassNa, "".concat(prefixCls, "-no-arrow"), !showArrow), _collapsePanelClassNa);

    var rcCollapePanelProps = _extends(_extends(_extends({}, getOptionProps(this)), {
      header: getComponent(this, 'header'),
      prefixCls: prefixCls,
      extra: getComponent(this, 'extra'),
      class: collapsePanelClassName
    }), restAttrs);

    return _createVNode(VcCollapse.Panel, rcCollapePanelProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});