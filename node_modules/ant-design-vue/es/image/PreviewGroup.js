import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import PreviewGroup from '../vc-image/src/PreviewGroup';
import { computed, defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';
var InternalPreviewGroup = defineComponent({
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: PropTypes.string
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;
    var configProvider = inject('configProvider', defaultConfigProvider);
    var prefixCls = computed(function () {
      return configProvider.getPrefixCls('image-preview', props.previewPrefixCls);
    });
    return function () {
      return _createVNode(PreviewGroup, _objectSpread(_objectSpread({}, _extends(_extends({}, attrs), props)), {}, {
        "previewPrefixCls": prefixCls.value
      }), slots);
    };
  }
});
export default InternalPreviewGroup;