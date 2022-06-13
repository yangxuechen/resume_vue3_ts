import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { ref, provide as _provide, defineComponent, inject as _inject, reactive } from 'vue';
import Preview from './Preview';
var previewGroupContext = Symbol('previewGroupContext');
export var context = {
  provide: function provide(val) {
    _provide(previewGroupContext, val);
  },
  inject: function inject() {
    return _inject(previewGroupContext, {
      isPreviewGroup: ref(false),
      previewUrls: reactive({}),
      setPreviewUrls: function setPreviewUrls() {},
      current: ref(null),
      setCurrent: function setCurrent() {},
      setShowPreview: function setShowPreview() {},
      setMousePosition: function setMousePosition() {},
      registerImage: null
    });
  }
};
var Group = defineComponent({
  name: 'PreviewGroup',
  inheritAttrs: false,
  props: {
    previewPrefixCls: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var previewUrls = reactive({});
    var current = ref();
    var isShowPreview = ref(false);
    var mousePosition = ref(null);

    var setPreviewUrls = function setPreviewUrls(val) {
      _extends(previewUrls, val);
    };

    var setCurrent = function setCurrent(val) {
      current.value = val;
    };

    var setMousePosition = function setMousePosition(val) {
      mousePosition.value = val;
    };

    var setShowPreview = function setShowPreview(val) {
      isShowPreview.value = val;
    };

    var registerImage = function registerImage(id, url) {
      previewUrls[id] = url;
      return function () {
        delete previewUrls[id];
      };
    };

    var onPreviewClose = function onPreviewClose(e) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      isShowPreview.value = false;
      mousePosition.value = null;
    };

    context.provide({
      isPreviewGroup: ref(true),
      previewUrls: previewUrls,
      setPreviewUrls: setPreviewUrls,
      current: current,
      setCurrent: setCurrent,
      setShowPreview: setShowPreview,
      setMousePosition: setMousePosition,
      registerImage: registerImage
    });
    return function () {
      return _createVNode(_Fragment, null, [slots.default && slots.default(), _createVNode(Preview, {
        "ria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": props.previewPrefixCls,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": previewUrls[current.value]
      }, null)]);
    };
  }
});
export default Group;