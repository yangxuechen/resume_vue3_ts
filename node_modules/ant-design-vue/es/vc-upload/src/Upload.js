import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import { initDefaultProps, getSlot } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
import AjaxUpload from './AjaxUploader';
import IframeUpload from './IframeUploader';
import { defineComponent, nextTick } from 'vue';

function empty() {}

var uploadProps = {
  componentTag: PropTypes.string,
  prefixCls: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  name: PropTypes.string,
  multipart: PropTypes.looseBool,
  directory: PropTypes.looseBool,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  onProgress: PropTypes.func,
  onStart: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  headers: PropTypes.object,
  accept: PropTypes.string,
  multiple: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  beforeUpload: PropTypes.func,
  customRequest: PropTypes.func,
  onReady: PropTypes.func,
  withCredentials: PropTypes.looseBool,
  supportServerRender: PropTypes.looseBool,
  openFileDialogOnClick: PropTypes.looseBool,
  method: PropTypes.string
};
export default defineComponent({
  name: 'Upload',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(uploadProps, {
    componentTag: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    onReady: empty,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    supportServerRender: false,
    multiple: false,
    beforeUpload: empty,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  data: function data() {
    this.Component = null;
    return {// Component: null, // 组件作为响应式数据，性能比较低，采用强制刷新
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.supportServerRender) {
        _this.Component = _this.getComponent();

        _this.$forceUpdate();

        nextTick(function () {
          _this.__emit('ready');
        });
      }
    });
  },
  methods: {
    getComponent: function getComponent() {
      return typeof File !== 'undefined' ? AjaxUpload : IframeUpload;
    },
    abort: function abort(file) {
      this.$refs.uploaderRef.abort(file);
    }
  },
  render: function render() {
    var _this2 = this;

    var componentProps = _extends(_extends(_extends({}, this.$props), {
      ref: 'uploaderRef'
    }), this.$attrs);

    if (this.supportServerRender) {
      var _ComponentUploader = this.Component;

      if (_ComponentUploader) {
        return _createVNode(_ComponentUploader, componentProps, {
          default: function _default() {
            return [getSlot(_this2)];
          }
        });
      }

      return null;
    }

    var ComponentUploader = this.getComponent();
    return _createVNode(ComponentUploader, componentProps, {
      default: function _default() {
        return [getSlot(_this2)];
      }
    });
  }
});