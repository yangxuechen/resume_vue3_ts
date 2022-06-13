import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
var ILazyRenderBoxPropTypes = {
  visible: PropTypes.looseBool,
  hiddenClassName: PropTypes.string,
  forceRender: PropTypes.looseBool
};
export default {
  props: ILazyRenderBoxPropTypes,
  render: function render() {
    return _createVNode("div", null, [getSlot(this)]);
  }
};