import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot } from '../_util/props-util';
import DropDown from '../dropdown/dropdown';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import useConfigInject from '../_util/hooks/useConfigInject';
var breadcrumbItemProps = {
  prefixCls: PropTypes.string,
  href: PropTypes.string,
  separator: PropTypes.any,
  overlay: PropTypes.any
};
export default defineComponent({
  name: 'ABreadcrumbItem',
  __ANT_BREADCRUMB_ITEM: true,
  props: breadcrumbItemProps,
  slots: ['separator', 'overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('breadcrumb', props),
        prefixCls = _useConfigInject.prefixCls;
    /**
     * if overlay is have
     * Wrap a DropDown
     */


    var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem, prefixCls) {
      var overlay = getPropsSlot(slots, props, 'overlay');

      if (overlay) {
        return _createVNode(DropDown, {
          "overlay": overlay,
          "placement": "bottomCenter"
        }, {
          default: function _default() {
            return [_createVNode("span", {
              "class": "".concat(prefixCls, "-overlay-link")
            }, [breadcrumbItem, _createVNode(DownOutlined, null, null)])];
          }
        });
      }

      return breadcrumbItem;
    };

    return function () {
      var _a;

      var separator = (_a = getPropsSlot(slots, props, 'separator')) !== null && _a !== void 0 ? _a : '/';
      var children = getPropsSlot(slots, props);
      var link;

      if (props.href !== undefined) {
        link = _createVNode("a", {
          "class": "".concat(prefixCls.value, "-link")
        }, [children]);
      } else {
        link = _createVNode("span", {
          "class": "".concat(prefixCls.value, "-link")
        }, [children]);
      } // wrap to dropDown


      link = renderBreadcrumbNode(link, prefixCls.value);

      if (children) {
        return _createVNode("span", null, [link, separator && _createVNode("span", {
          "class": "".concat(prefixCls.value, "-separator")
        }, [separator])]);
      }

      return null;
    };
  }
});