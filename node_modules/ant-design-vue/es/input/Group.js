import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
export default defineComponent({
  name: 'AInputGroup',
  props: {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOf(tuple('small', 'large', 'default')),
    compact: PropTypes.looseBool
  },
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  computed: {
    classes: function classes() {
      var _ref;

      var customizePrefixCls = this.prefixCls,
          size = this.size,
          _this$compact = this.compact,
          compact = _this$compact === void 0 ? false : _this$compact,
          configProvider = this.configProvider;
      var getPrefixCls = configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('input-group', customizePrefixCls);
      return _ref = {}, _defineProperty(_ref, "".concat(prefixCls), true), _defineProperty(_ref, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_ref, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_ref, "".concat(prefixCls, "-compact"), compact), _ref;
    }
  },
  render: function render() {
    return _createVNode("span", {
      "class": this.classes
    }, [getSlot(this)]);
  }
});