import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { flattenChildren } from '../_util/props-util';
import { computed, defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
import { withInstall } from '../_util/type';
export var dividerProps = {
  prefixCls: String,
  type: {
    type: String,
    default: 'horizontal'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String,
    default: 'center'
  },
  plain: {
    type: Boolean,
    default: false
  }
};
var Divider = defineComponent({
  name: 'ADivider',
  props: dividerProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var configProvider = inject('configProvider', defaultConfigProvider);
    var prefixClsRef = computed(function () {
      return configProvider.getPrefixCls('divider', props.prefixCls);
    });
    var classString = computed(function () {
      var _ref2;

      var type = props.type,
          dashed = props.dashed,
          plain = props.plain;
      var prefixCls = prefixClsRef.value;
      return _ref2 = {}, _defineProperty(_ref2, prefixCls, true), _defineProperty(_ref2, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_ref2, "".concat(prefixCls, "-dashed"), !!dashed), _defineProperty(_ref2, "".concat(prefixCls, "-plain"), !!plain), _defineProperty(_ref2, "".concat(prefixCls, "-rtl"), configProvider.direction === 'rtl'), _ref2;
    });
    var orientationPrefix = computed(function () {
      return props.orientation.length > 0 ? '-' + props.orientation : props.orientation;
    });
    return function () {
      var _a;

      var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return _createVNode("div", {
        "class": [classString.value, children.length ? "".concat(prefixClsRef.value, "-with-text ").concat(prefixClsRef.value, "-with-text").concat(orientationPrefix.value) : ''],
        "role": "separator"
      }, [children.length ? _createVNode("span", {
        "class": "".concat(prefixClsRef.value, "-inner-text")
      }, [children]) : null]);
    };
  }
});
export default withInstall(Divider);