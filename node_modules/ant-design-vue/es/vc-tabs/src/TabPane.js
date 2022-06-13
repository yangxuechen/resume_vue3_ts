import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../../_util/vue-types';
import { getComponent, getSlot } from '../../_util/props-util';
import Sentinel from './Sentinel';
export default defineComponent({
  name: 'TabPane',
  props: {
    active: PropTypes.looseBool,
    destroyInactiveTabPane: PropTypes.looseBool,
    forceRender: PropTypes.looseBool,
    placeholder: PropTypes.any,
    rootPrefixCls: PropTypes.string,
    tab: PropTypes.any,
    closable: PropTypes.looseBool,
    disabled: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      isActived: undefined,
      sentinelContext: inject('sentinelContext', {})
    };
  },
  render: function render() {
    var _cls;

    var _this$$props = this.$props,
        destroyInactiveTabPane = _this$$props.destroyInactiveTabPane,
        active = _this$$props.active,
        forceRender = _this$$props.forceRender,
        rootPrefixCls = _this$$props.rootPrefixCls;
    var children = getSlot(this);
    var placeholder = getComponent(this, 'placeholder');
    this.isActived = this.isActived || active;
    var prefixCls = "".concat(rootPrefixCls, "-tabpane");
    var cls = (_cls = {}, _defineProperty(_cls, prefixCls, 1), _defineProperty(_cls, "".concat(prefixCls, "-inactive"), !active), _defineProperty(_cls, "".concat(prefixCls, "-active"), active), _cls);
    var isRender = destroyInactiveTabPane ? active : this.isActived;
    var shouldRender = isRender || forceRender;
    var _this$sentinelContext = this.sentinelContext,
        sentinelStart = _this$sentinelContext.sentinelStart,
        sentinelEnd = _this$sentinelContext.sentinelEnd,
        setPanelSentinelStart = _this$sentinelContext.setPanelSentinelStart,
        setPanelSentinelEnd = _this$sentinelContext.setPanelSentinelEnd;
    var panelSentinelStart;
    var panelSentinelEnd;

    if (active && shouldRender) {
      panelSentinelStart = _createVNode(Sentinel, {
        "setRef": setPanelSentinelStart,
        "prevElement": sentinelStart
      }, null);
      panelSentinelEnd = _createVNode(Sentinel, {
        "setRef": setPanelSentinelEnd,
        "nextElement": sentinelEnd
      }, null);
    }

    return _createVNode("div", {
      "class": cls,
      "role": "tabpanel",
      "aria-hidden": active ? 'false' : 'true'
    }, [panelSentinelStart, shouldRender ? children : placeholder, panelSentinelEnd]);
  }
});