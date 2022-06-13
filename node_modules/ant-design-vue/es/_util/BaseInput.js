import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, withDirectives } from 'vue';
import antInput from './antInputDirective';
import PropTypes from './vue-types';
var BaseInput = defineComponent({
  props: {
    value: PropTypes.string.def('')
  },
  emits: ['change', 'input'],
  setup: function setup(_p, _ref) {
    var emit = _ref.emit;
    var inputRef = ref(null);

    var handleChange = function handleChange(e) {
      var composing = e.target.composing;

      if (e.isComposing || composing) {
        emit('input', e);
      } else {
        emit('input', e);
        emit('change', e);
      }
    };

    return {
      inputRef: inputRef,
      focus: function focus() {
        if (inputRef.value) {
          inputRef.value.focus();
        }
      },
      blur: function blur() {
        if (inputRef.value) {
          inputRef.value.blur();
        }
      },
      handleChange: handleChange
    };
  },
  render: function render() {
    return withDirectives(_createVNode("input", _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
      "onInput": this.handleChange,
      "onChange": this.handleChange,
      "ref": "inputRef"
    }), null), [[antInput]]);
  }
});
export default BaseInput;