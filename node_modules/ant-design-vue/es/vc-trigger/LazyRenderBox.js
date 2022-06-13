import { createVNode as _createVNode } from "vue";
import { Text } from 'vue';
import PropTypes from '../_util/vue-types';
import { getSlot } from '../_util/props-util';
export default {
  name: 'LazyRenderBox',
  props: {
    visible: PropTypes.looseBool,
    hiddenClassName: PropTypes.string
  },
  render: function render() {
    var hiddenClassName = this.$props.hiddenClassName;
    var child = getSlot(this);

    if (hiddenClassName || child && child.length > 1 || child && child[0] && child[0].type === Text) {
      // const cls = '';
      // if (!visible && hiddenClassName) {
      //   // cls += ` ${hiddenClassName}`
      // }
      return _createVNode("div", null, [child]);
    }

    return child && child[0];
  }
};