import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { getPropsSlot } from '../../_util/props-util';
import { computed, defineComponent } from 'vue';
import PropTypes from '../../_util/vue-types';
import { useInjectMenu } from './hooks/useMenuContext';
var menuItemGroupProps = {
  title: PropTypes.VNodeChild
};
export default defineComponent({
  name: 'AMenuItemGroup',
  inheritAttrs: false,
  props: menuItemGroupProps,
  slots: ['title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls;

    var groupPrefixCls = computed(function () {
      return "".concat(prefixCls.value, "-item-group");
    });
    return function () {
      var _a;

      return _createVNode("li", _objectSpread(_objectSpread({}, attrs), {}, {
        "onClick": function onClick(e) {
          return e.stopPropagation();
        },
        "class": groupPrefixCls.value
      }), [_createVNode("div", {
        "title": typeof props.title === 'string' ? props.title : undefined,
        "class": "".concat(groupPrefixCls.value, "-title")
      }, [getPropsSlot(slots, props, 'title')]), _createVNode("ul", {
        "class": "".concat(groupPrefixCls.value, "-list")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});