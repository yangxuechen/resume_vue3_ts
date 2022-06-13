import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import KeyCode from '../../_util/KeyCode';
import { getSlot } from '../../_util/props-util';
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  position: 'absolute'
};
export default {
  name: 'Sentinel',
  props: {
    setRef: PropTypes.func,
    prevElement: PropTypes.any,
    nextElement: PropTypes.any
  },
  methods: {
    onKeyDown: function onKeyDown(_ref) {
      var target = _ref.target,
          which = _ref.which,
          shiftKey = _ref.shiftKey;
      var _this$$props = this.$props,
          nextElement = _this$$props.nextElement,
          prevElement = _this$$props.prevElement;
      if (which !== KeyCode.TAB || document.activeElement !== target) return; // Tab next

      if (!shiftKey && nextElement) {
        nextElement.focus();
      } // Tab prev


      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }
  },
  render: function render() {
    var setRef = this.$props.setRef;
    return _createVNode("div", {
      "tabindex": 0,
      "ref": setRef,
      "style": sentinelStyle,
      "onKeydown": this.onKeyDown,
      "role": "presentation"
    }, [getSlot(this)]);
  }
};