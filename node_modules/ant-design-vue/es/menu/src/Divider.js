import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { useInjectMenu } from './hooks/useMenuContext';
export default defineComponent({
  name: 'AMenuDivider',
  setup: function setup() {
    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls;

    return function () {
      return _createVNode("li", {
        "class": "".concat(prefixCls.value, "-item-divider")
      }, null);
    };
  }
});