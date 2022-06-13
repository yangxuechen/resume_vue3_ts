import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { flattenChildren } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
var buttonGroupProps = {
  prefixCls: PropTypes.string,
  size: {
    type: String
  }
};
export { buttonGroupProps };
export default defineComponent({
  name: 'AButtonGroup',
  props: buttonGroupProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('btn-group', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var classes = computed(function () {
      var _ref2;

      var size = props.size; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    return function () {
      var _a;

      return _createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});