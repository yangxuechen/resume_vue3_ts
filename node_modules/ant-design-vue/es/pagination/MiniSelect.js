import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import VcSelect, { SelectProps } from '../select';
import { getOptionProps, getSlot } from '../_util/props-util';
export default defineComponent({
  inheritAttrs: false,
  props: SelectProps(),
  Option: VcSelect.Option,
  render: function render() {
    var _this = this;

    var selectOptionsProps = getOptionProps(this);

    var selelctProps = _extends(_extends(_extends({}, selectOptionsProps), {
      size: 'small'
    }), this.$attrs);

    return _createVNode(VcSelect, selelctProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});