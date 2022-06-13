import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';
import { getSlot } from '../_util/props-util';
export default defineComponent({
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: {
    prefixCls: PropTypes.string,
    hoverable: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  render: function render() {
    var _classString;

    var _this$$props = this.$props,
        customizePrefixCls = _this$$props.prefixCls,
        _this$$props$hoverabl = _this$$props.hoverable,
        hoverable = _this$$props$hoverabl === void 0 ? true : _this$$props$hoverabl;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls, "-grid"), true), _defineProperty(_classString, "".concat(prefixCls, "-grid-hoverable"), hoverable), _classString);
    return _createVNode("div", {
      "class": classString
    }, [getSlot(this)]);
  }
});