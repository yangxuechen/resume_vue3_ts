import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
var CheckableTag = defineComponent({
  name: 'ACheckableTag',
  props: {
    prefixCls: PropTypes.string,
    checked: PropTypes.looseBool,
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  emits: ['update:checked', 'change', 'click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var _useConfigInject = useConfigInject('tag', props),
        prefixCls = _useConfigInject.prefixCls;

    var handleClick = function handleClick(e) {
      var checked = props.checked;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    };

    var cls = computed(function () {
      var _classNames;

      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props.checked), _classNames));
    });
    return function () {
      var _a;

      return _createVNode("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
export default CheckableTag;