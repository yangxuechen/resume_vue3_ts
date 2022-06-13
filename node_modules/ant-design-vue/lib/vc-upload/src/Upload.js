"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _propsUtil = require("../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _AjaxUploader = _interopRequireDefault(require("./AjaxUploader"));

var _IframeUploader = _interopRequireDefault(require("./IframeUploader"));

function empty() {}

var uploadProps = {
  componentTag: _vueTypes.default.string,
  prefixCls: _vueTypes.default.string,
  action: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
  name: _vueTypes.default.string,
  multipart: _vueTypes.default.looseBool,
  directory: _vueTypes.default.looseBool,
  onError: _vueTypes.default.func,
  onSuccess: _vueTypes.default.func,
  onProgress: _vueTypes.default.func,
  onStart: _vueTypes.default.func,
  data: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.func]),
  headers: _vueTypes.default.object,
  accept: _vueTypes.default.string,
  multiple: _vueTypes.default.looseBool,
  disabled: _vueTypes.default.looseBool,
  beforeUpload: _vueTypes.default.func,
  customRequest: _vueTypes.default.func,
  onReady: _vueTypes.default.func,
  withCredentials: _vueTypes.default.looseBool,
  supportServerRender: _vueTypes.default.looseBool,
  openFileDialogOnClick: _vueTypes.default.looseBool,
  method: _vueTypes.default.string
};

var _default2 = (0, _vue.defineComponent)({
  name: 'Upload',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(uploadProps, {
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

        (0, _vue.nextTick)(function () {
          _this.__emit('ready');
        });
      }
    });
  },
  methods: {
    getComponent: function getComponent() {
      return typeof File !== 'undefined' ? _AjaxUploader.default : _IframeUploader.default;
    },
    abort: function abort(file) {
      this.$refs.uploaderRef.abort(file);
    }
  },
  render: function render() {
    var _this2 = this;

    var componentProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), {
      ref: 'uploaderRef'
    }), this.$attrs);

    if (this.supportServerRender) {
      var _ComponentUploader = this.Component;

      if (_ComponentUploader) {
        return (0, _vue.createVNode)(_ComponentUploader, componentProps, {
          default: function _default() {
            return [(0, _propsUtil.getSlot)(_this2)];
          }
        });
      }

      return null;
    }

    var ComponentUploader = this.getComponent();
    return (0, _vue.createVNode)(ComponentUploader, componentProps, {
      default: function _default() {
        return [(0, _propsUtil.getSlot)(_this2)];
      }
    });
  }
});

exports.default = _default2;