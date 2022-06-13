import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
export var skeletonTitleProps = {
  prefixCls: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var SkeletonTitle = defineComponent({
  name: 'SkeletonTitle',
  props: skeletonTitleProps,
  setup: function setup(props) {
    return function () {
      var prefixCls = props.prefixCls,
          width = props.width;
      var zWidth = typeof width === 'number' ? "".concat(width, "px") : width;
      return _createVNode("h3", {
        "class": prefixCls,
        "style": {
          width: zWidth
        }
      }, null);
    };
  }
});
export default SkeletonTitle;