import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue';
import ImageInternal from '../vc-image';
import { imageProps } from '../vc-image/src/Image';
import useConfigInject from '../_util/hooks/useConfigInject';
import PreviewGroup from './PreviewGroup';
var Image = defineComponent({
  name: 'AImage',
  inheritAttrs: false,
  props: imageProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;

    var _useConfigInject = useConfigInject('image', props),
        prefixCls = _useConfigInject.prefixCls;

    return function () {
      return _createVNode(ImageInternal, _extends(_extends(_extends({}, attrs), props), {
        prefixCls: prefixCls.value
      }), slots);
    };
  }
});
export { imageProps };
Image.PreviewGroup = PreviewGroup;

Image.install = function (app) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};

export { PreviewGroup as ImagePreviewGroup };
export default Image;