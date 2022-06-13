import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
export default {
  name: 'Content',
  props: {
    prefixCls: PropTypes.string,
    overlay: PropTypes.any,
    trigger: PropTypes.any,
    overlayInnerStyle: PropTypes.any
  },
  updated: function updated() {
    var trigger = this.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  },
  render: function render() {
    var overlay = this.overlay,
        prefixCls = this.prefixCls,
        overlayInnerStyle = this.overlayInnerStyle;
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-inner"),
      "role": "tooltip",
      "style": overlayInnerStyle
    }, [typeof overlay === 'function' ? overlay() : overlay]);
  }
};