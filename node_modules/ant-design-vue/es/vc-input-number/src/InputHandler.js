import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import Touchable from '../../vc-m-feedback';
import { getSlot } from '../../_util/props-util';
var InputHandler = {
  name: 'InputHandler',
  inheritAttrs: false,
  props: {
    prefixCls: PropTypes.string,
    disabled: PropTypes.looseBool
  },
  render: function render() {
    var _this = this;

    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        disabled = _this$$props.disabled;
    var touchableProps = {
      disabled: disabled,
      activeClassName: "".concat(prefixCls, "-handler-active")
    };
    return _createVNode(Touchable, touchableProps, {
      default: function _default() {
        return [_createVNode("span", _this.$attrs, [getSlot(_this)])];
      }
    });
  }
};
export default InputHandler;