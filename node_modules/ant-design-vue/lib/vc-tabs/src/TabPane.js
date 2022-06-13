"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _propsUtil = require("../../_util/props-util");

var _Sentinel = _interopRequireDefault(require("./Sentinel"));

var _default = (0, _vue.defineComponent)({
  name: 'TabPane',
  props: {
    active: _vueTypes.default.looseBool,
    destroyInactiveTabPane: _vueTypes.default.looseBool,
    forceRender: _vueTypes.default.looseBool,
    placeholder: _vueTypes.default.any,
    rootPrefixCls: _vueTypes.default.string,
    tab: _vueTypes.default.any,
    closable: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool
  },
  setup: function setup() {
    return {
      isActived: undefined,
      sentinelContext: (0, _vue.inject)('sentinelContext', {})
    };
  },
  render: function render() {
    var _cls;

    var _this$$props = this.$props,
        destroyInactiveTabPane = _this$$props.destroyInactiveTabPane,
        active = _this$$props.active,
        forceRender = _this$$props.forceRender,
        rootPrefixCls = _this$$props.rootPrefixCls;
    var children = (0, _propsUtil.getSlot)(this);
    var placeholder = (0, _propsUtil.getComponent)(this, 'placeholder');
    this.isActived = this.isActived || active;
    var prefixCls = "".concat(rootPrefixCls, "-tabpane");
    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, prefixCls, 1), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-inactive"), !active), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-active"), active), _cls);
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
      panelSentinelStart = (0, _vue.createVNode)(_Sentinel.default, {
        "setRef": setPanelSentinelStart,
        "prevElement": sentinelStart
      }, null);
      panelSentinelEnd = (0, _vue.createVNode)(_Sentinel.default, {
        "setRef": setPanelSentinelEnd,
        "nextElement": sentinelEnd
      }, null);
    }

    return (0, _vue.createVNode)("div", {
      "class": cls,
      "role": "tabpanel",
      "aria-hidden": active ? 'false' : 'true'
    }, [panelSentinelStart, shouldRender ? children : placeholder, panelSentinelEnd]);
  }
});

exports.default = _default;