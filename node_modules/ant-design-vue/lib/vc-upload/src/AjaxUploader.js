"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _partition = _interopRequireDefault(require("lodash/partition"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _request = _interopRequireDefault(require("./request"));

var _uid = _interopRequireDefault(require("./uid"));

var _attrAccept = _interopRequireDefault(require("./attr-accept"));

var _traverseFileTree = _interopRequireDefault(require("./traverseFileTree"));

var _propsUtil = require("../../_util/props-util");

var upLoadPropTypes = {
  componentTag: _vueTypes.default.string,
  // style: PropTypes.object,
  prefixCls: _vueTypes.default.string,
  name: _vueTypes.default.string,
  // className: PropTypes.string,
  multiple: _vueTypes.default.looseBool,
  directory: _vueTypes.default.looseBool,
  disabled: _vueTypes.default.looseBool,
  accept: _vueTypes.default.string,
  // children: PropTypes.any,
  // onStart: PropTypes.func,
  data: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.func]),
  action: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
  headers: _vueTypes.default.object,
  beforeUpload: _vueTypes.default.func,
  customRequest: _vueTypes.default.func,
  // onProgress: PropTypes.func,
  withCredentials: _vueTypes.default.looseBool,
  openFileDialogOnClick: _vueTypes.default.looseBool,
  transformFile: _vueTypes.default.func,
  method: _vueTypes.default.string
};
var AjaxUploader = {
  inheritAttrs: false,
  name: 'ajaxUploader',
  mixins: [_BaseMixin.default],
  props: upLoadPropTypes,
  data: function data() {
    this.reqs = {};
    return {
      uid: (0, _uid.default)()
    };
  },
  mounted: function mounted() {
    this._isMounted = true;
  },
  beforeUnmount: function beforeUnmount() {
    this._isMounted = false;
    this.abort();
  },
  methods: {
    onChange: function onChange(e) {
      var files = e.target.files;
      this.uploadFiles(files);
      this.reset();
    },
    onClick: function onClick() {
      var el = this.$refs.fileInputRef;

      if (!el) {
        return;
      }

      el.click();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        this.onClick();
      }
    },
    onFileDrop: function onFileDrop(e) {
      var _this = this;

      var multiple = this.$props.multiple;
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (this.directory) {
        (0, _traverseFileTree.default)(e.dataTransfer.items, this.uploadFiles, function (_file) {
          return (0, _attrAccept.default)(_file, _this.accept);
        });
      } else {
        var files = (0, _partition.default)(Array.prototype.slice.call(e.dataTransfer.files), function (file) {
          return (0, _attrAccept.default)(file, _this.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];

        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }

        this.uploadFiles(successFiles);

        if (errorFiles.length) {
          this.__emit('reject', errorFiles);
        }
      }
    },
    uploadFiles: function uploadFiles(files) {
      var _this2 = this;

      var postFiles = Array.prototype.slice.call(files);
      postFiles.map(function (file) {
        file.uid = (0, _uid.default)();
        return file;
      }).forEach(function (file) {
        _this2.upload(file, postFiles);
      });
    },
    upload: function upload(file, fileList) {
      var _this3 = this;

      if (!this.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }

      var before = this.beforeUpload(file, fileList);

      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);

          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            return _this3.post(processedFile);
          }

          return _this3.post(file);
        }).catch(function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }
    },
    post: function post(file) {
      var _this4 = this;

      if (!this._isMounted) {
        return;
      }

      var props = this.$props;
      var data = props.data;
      var _props$transformFile = props.transformFile,
          transformFile = _props$transformFile === void 0 ? function (originFile) {
        return originFile;
      } : _props$transformFile;
      new Promise(function (resolve) {
        var action = _this4.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }

        resolve(action);
      }).then(function (action) {
        var uid = file.uid;
        var request = _this4.customRequest || _request.default;
        var transform = Promise.resolve(transformFile(file)).catch(function (e) {
          console.error(e); // eslint-disable-line no-console
        });
        transform.then(function (transformedFile) {
          if (typeof data === 'function') {
            data = data(file);
          }

          var requestOption = {
            action: action,
            filename: _this4.name,
            data: data,
            file: transformedFile,
            headers: _this4.headers,
            withCredentials: _this4.withCredentials,
            method: props.method || 'post',
            onProgress: function onProgress(e) {
              _this4.__emit('progress', e, file);
            },
            onSuccess: function onSuccess(ret, xhr) {
              delete _this4.reqs[uid];

              _this4.__emit('success', ret, file, xhr);
            },
            onError: function onError(err, ret) {
              delete _this4.reqs[uid];

              _this4.__emit('error', err, ret, file);
            }
          };
          _this4.reqs[uid] = request(requestOption);

          _this4.__emit('start', file);
        });
      });
    },
    reset: function reset() {
      this.setState({
        uid: (0, _uid.default)()
      });
    },
    abort: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;

        if (file && file.uid) {
          uid = file.uid;
        }

        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var $props = this.$props,
        $attrs = this.$attrs;
    var Tag = $props.componentTag,
        prefixCls = $props.prefixCls,
        disabled = $props.disabled,
        multiple = $props.multiple,
        accept = $props.accept,
        directory = $props.directory,
        openFileDialogOnClick = $props.openFileDialogOnClick;
    var className = $attrs.class,
        style = $attrs.style,
        id = $attrs.id;
    var cls = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, prefixCls, true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: openFileDialogOnClick ? this.onClick : function () {},
      onKeydown: openFileDialogOnClick ? this.onKeyDown : function () {},
      onDrop: this.onFileDrop,
      onDragover: this.onFileDrop
    };
    var tagProps = (0, _extends2.default)((0, _extends2.default)({}, events), {
      role: 'button',
      tabindex: disabled ? null : '0',
      class: cls,
      style: style
    });
    return (0, _vue.createVNode)(Tag, tagProps, {
      default: function _default() {
        return [(0, _vue.createVNode)("input", {
          "id": id,
          "type": "file",
          "ref": "fileInputRef",
          "onClick": function onClick(e) {
            return e.stopPropagation();
          },
          "key": _this5.uid,
          "style": {
            display: 'none'
          },
          "accept": accept,
          "directory": directory ? 'directory' : null,
          "webkitdirectory": directory ? 'webkitdirectory' : null,
          "multiple": multiple,
          "onChange": _this5.onChange
        }, null), (0, _propsUtil.getSlot)(_this5)];
      }
    });
  }
};
var _default2 = AjaxUploader;
exports.default = _default2;