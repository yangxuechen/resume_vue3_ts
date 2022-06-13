import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import { getPropsSlot } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
export var starProps = {
  value: PropTypes.number,
  index: PropTypes.number,
  prefixCls: PropTypes.string,
  allowHalf: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  character: PropTypes.any,
  characterRender: PropTypes.func,
  focused: PropTypes.looseBool,
  count: PropTypes.number,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};
export default defineComponent({
  name: 'Star',
  inheritAttrs: false,
  props: starProps,
  emits: ['hover', 'click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var onHover = function onHover(e) {
      var index = props.index;
      emit('hover', e, index);
    };

    var onClick = function onClick(e) {
      var index = props.index;
      emit('click', e, index);
    };

    var onKeyDown = function onKeyDown(e) {
      var index = props.index;

      if (e.keyCode === 13) {
        emit('click', e, index);
      }
    };

    var cls = computed(function () {
      var prefixCls = props.prefixCls,
          index = props.index,
          value = props.value,
          allowHalf = props.allowHalf,
          focused = props.focused;
      var starValue = index + 1;
      var className = prefixCls;

      if (value === 0 && index === 0 && focused) {
        className += " ".concat(prefixCls, "-focused");
      } else if (allowHalf && value + 0.5 >= starValue && value < starValue) {
        className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");

        if (focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");

        if (starValue === value && focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      }

      return className;
    });
    return function () {
      var disabled = props.disabled,
          prefixCls = props.prefixCls,
          characterRender = props.characterRender,
          index = props.index,
          count = props.count,
          value = props.value;
      var character = getPropsSlot(slots, props, 'character');

      var star = _createVNode("li", {
        "class": cls.value
      }, [_createVNode("div", {
        "onClick": disabled ? null : onClick,
        "onKeydown": disabled ? null : onKeyDown,
        "onMousemove": disabled ? null : onHover,
        "role": "radio",
        "aria-checked": value > index ? 'true' : 'false',
        "aria-posinset": index + 1,
        "aria-setsize": count,
        "tabindex": disabled ? -1 : 0
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-first")
      }, [character]), _createVNode("div", {
        "class": "".concat(prefixCls, "-second")
      }, [character])])]);

      if (characterRender) {
        star = characterRender(star, props);
      }

      return star;
    };
  }
});