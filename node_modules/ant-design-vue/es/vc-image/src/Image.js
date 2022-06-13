import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { ref, watch, defineComponent, computed, onMounted } from 'vue';
import isNumber from 'lodash-es/isNumber';
import BaseMixin from '../../_util/BaseMixin';
import cn from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import { getOffset } from '../../vc-util/Dom/css';
import Preview from './Preview';
import PreviewGroup, { context } from './PreviewGroup';
export var imageProps = {
  src: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.style,
  prefixCls: PropTypes.string,
  previewPrefixCls: PropTypes.string,
  placeholder: PropTypes.VNodeChild,
  fallback: PropTypes.string,
  preview: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.shape({
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    getContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.looseBool, PropTypes.string])
  }).loose]).def(true)
};

var mergeDefaultValue = function mergeDefaultValue(obj, defaultValues) {
  var res = _extends({}, obj);

  Object.keys(defaultValues).forEach(function (key) {
    if (obj[key] === undefined) {
      res[key] = defaultValues[key];
    }
  });
  return res;
};

var uuid = 0;
var ImageInternal = defineComponent({
  name: 'Image',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: imageProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        emit = _ref.emit;
    var prefixCls = computed(function () {
      return props.prefixCls;
    });
    var previewPrefixCls = computed(function () {
      return "".concat(prefixCls.value, "-preview");
    });
    var preview = computed(function () {
      var defaultValues = {
        visible: undefined,
        onVisibleChange: function onVisibleChange() {},
        getContainer: undefined
      };
      return _typeof(props.preview) === 'object' ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
    });
    var isCustomPlaceholder = computed(function () {
      return props.placeholder && props.placeholder !== true || slots.placeholder;
    });
    var previewVisible = computed(function () {
      return preview.value.visible;
    });
    var onPreviewVisibleChange = computed(function () {
      return preview.value.onVisibleChange;
    });
    var getPreviewContainer = computed(function () {
      return preview.value.getContainer;
    });
    var isControlled = computed(function () {
      return previewVisible.value !== undefined;
    });
    var isShowPreview = ref(!!previewVisible.value);
    watch(previewVisible, function () {
      isShowPreview.value = !!previewVisible.value;
    });
    watch(isShowPreview, function (val, preVal) {
      onPreviewVisibleChange.value(val, preVal);
    });
    var status = ref(isCustomPlaceholder.value ? 'loading' : 'normal');
    watch(function () {
      return props.src;
    }, function () {
      status.value = isCustomPlaceholder.value ? 'loading' : 'normal';
    });
    var mousePosition = ref(null);
    var isError = computed(function () {
      return status.value === 'error';
    });
    var groupContext = context.inject();
    var isPreviewGroup = groupContext.isPreviewGroup,
        setCurrent = groupContext.setCurrent,
        setGroupShowPreview = groupContext.setShowPreview,
        setGroupMousePosition = groupContext.setMousePosition,
        registerImage = groupContext.registerImage;
    var currentId = ref(uuid++);
    var canPreview = computed(function () {
      return props.preview && !isError.value;
    });

    var onLoad = function onLoad() {
      status.value = 'normal';
    };

    var onError = function onError() {
      status.value = 'error';
    };

    var onPreview = function onPreview(e) {
      if (!isControlled.value) {
        var _getOffset = getOffset(e.target),
            left = _getOffset.left,
            top = _getOffset.top;

        if (isPreviewGroup.value) {
          setCurrent(currentId.value);
          setGroupMousePosition({
            x: left,
            y: top
          });
        } else {
          mousePosition.value = {
            x: left,
            y: top
          };
        }
      }

      if (isPreviewGroup.value) {
        setGroupShowPreview(true);
      } else {
        isShowPreview.value = true;
      }

      emit('click', e);
    };

    var onPreviewClose = function onPreviewClose() {
      isShowPreview.value = false;

      if (!isControlled.value) {
        mousePosition.value = null;
      }
    };

    var img = ref(null);
    watch(function () {
      return img;
    }, function () {
      if (status.value !== 'loading') return;

      if (img.value.complete && (img.value.naturalWidth || img.value.naturalHeight)) {
        onLoad();
      }
    });

    var unRegister = function unRegister() {};

    onMounted(function () {
      watch([function () {
        return props.src;
      }, canPreview], function () {
        unRegister();

        if (!isPreviewGroup.value) {
          return function () {};
        }

        unRegister = registerImage(currentId.value, props.src);

        if (!canPreview.value) {
          unRegister();
        }
      }, {
        flush: 'post',
        immediate: true
      });
    });

    var toSizePx = function toSizePx(l) {
      if (isNumber(l)) return l + 'px';
      return l;
    };

    return function () {
      var prefixCls = props.prefixCls,
          wrapperClassName = props.wrapperClassName,
          fallback = props.fallback,
          src = props.src,
          preview = props.preview,
          placeholder = props.placeholder,
          wrapperStyle = props.wrapperStyle;
      var width = attrs.width,
          height = attrs.height,
          crossorigin = attrs.crossorigin,
          decoding = attrs.decoding,
          alt = attrs.alt,
          sizes = attrs.sizes,
          srcset = attrs.srcset,
          usemap = attrs.usemap,
          cls = attrs.class,
          style = attrs.style;
      var wrappperClass = cn(prefixCls, wrapperClassName, _defineProperty({}, "".concat(prefixCls, "-error"), isError.value));
      var mergedSrc = isError.value && fallback ? fallback : src;
      var previewMask = slots.previewMask && slots.previewMask();
      var imgCommonProps = {
        crossorigin: crossorigin,
        decoding: decoding,
        alt: alt,
        sizes: sizes,
        srcset: srcset,
        usemap: usemap,
        class: cn("".concat(prefixCls, "-img"), _defineProperty({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), cls),
        style: _extends({
          height: height
        }, style)
      };
      return _createVNode(_Fragment, null, [_createVNode("div", {
        "class": wrappperClass,
        "onClick": preview && !isError.value ? onPreview : function (e) {
          emit('click', e);
        },
        "style": _extends({
          width: toSizePx(width),
          height: toSizePx(height)
        }, wrapperStyle)
      }, [_createVNode("img", _objectSpread(_objectSpread(_objectSpread({}, imgCommonProps), isError.value && fallback ? {
        src: fallback
      } : {
        onLoad: onLoad,
        onError: onError,
        src: src
      }), {}, {
        "ref": img
      }), null), status.value === 'loading' && _createVNode("div", {
        "aria-hidden": "true",
        "class": "".concat(prefixCls, "-placeholder")
      }, [placeholder || slots.placeholder && slots.placeholder()]), previewMask && canPreview.value && _createVNode("div", {
        "class": "".concat(prefixCls, "-mask")
      }, [previewMask])]), !isPreviewGroup.value && canPreview.value && _createVNode(Preview, {
        "aria-hidden": !isShowPreview.value,
        "visible": isShowPreview.value,
        "prefixCls": previewPrefixCls.value,
        "onClose": onPreviewClose,
        "mousePosition": mousePosition.value,
        "src": mergedSrc,
        "alt": alt,
        "getContainer": getPreviewContainer.value
      }, null)]);
    };
  }
});
ImageInternal.PreviewGroup = PreviewGroup;
export default ImageInternal;