"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _vcUpload = _interopRequireDefault(require("../vc-upload"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _default3 = _interopRequireDefault(require("../locale-provider/default"));

var _configProvider = require("../config-provider");

var _Dragger = _interopRequireDefault(require("./Dragger"));

var _UploadList = _interopRequireDefault(require("./UploadList"));

var _interface = require("./interface");

var _utils = require("./utils");

var _util = require("../vc-tree/src/util");

var _default2 = (0, _vue.defineComponent)({
  name: 'AUpload',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  Dragger: _Dragger.default,
  props: (0, _initDefaultProps.default)(_interface.UploadProps, {
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: _utils.T,
    showUploadList: true,
    listType: 'text',
    disabled: false,
    supportServerRender: true
  }),
  setup: function setup() {
    return {
      upload: null,
      progressTimer: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  // recentUploadStatus: boolean | PromiseLike<any>;
  data: function data() {
    return {
      sFileList: this.fileList || this.defaultFileList || [],
      dragState: 'drop'
    };
  },
  watch: {
    fileList: function fileList(val) {
      this.sFileList = val || [];
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.clearProgressTimer();
  },
  methods: {
    onStart: function onStart(file) {
      var targetItem = (0, _utils.fileToObject)(file);
      targetItem.status = 'uploading';
      var nextFileList = this.sFileList.concat();
      var fileIndex = (0, _findIndex.default)(nextFileList, function (_ref) {
        var uid = _ref.uid;
        return uid === targetItem.uid;
      });

      if (fileIndex === -1) {
        nextFileList.push(targetItem);
      } else {
        nextFileList[fileIndex] = targetItem;
      }

      this.handleChange({
        file: targetItem,
        fileList: nextFileList
      }); // fix ie progress

      if (!window.File || (typeof process === "undefined" ? "undefined" : (0, _typeof2.default)(process)) === 'object' && process.env.TEST_IE) {
        this.autoUpdateProgress(0, targetItem);
      }
    },
    onSuccess: function onSuccess(response, file, xhr) {
      this.clearProgressTimer();

      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }

      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.status = 'done';
      targetItem.response = response;
      targetItem.xhr = xhr;
      this.handleChange({
        file: (0, _extends2.default)({}, targetItem),
        fileList: fileList
      });
    },
    onProgress: function onProgress(e, file) {
      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.percent = e.percent;
      this.handleChange({
        event: e,
        file: (0, _extends2.default)({}, targetItem),
        fileList: this.sFileList
      });
    },
    onError: function onError(error, response, file) {
      this.clearProgressTimer();
      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      this.handleChange({
        file: (0, _extends2.default)({}, targetItem),
        fileList: fileList
      });
    },
    onReject: function onReject(fileList) {
      this.$emit('reject', fileList);
    },
    handleRemove: function handleRemove(file) {
      var _this = this;

      var onRemove = this.remove;
      var fileList = this.$data.sFileList;
      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
        // Prevent removing file
        if (ret === false) {
          return;
        }

        var removedFileList = (0, _utils.removeFileItem)(file, fileList);

        if (removedFileList) {
          file.status = 'removed'; // eslint-disable-line

          if (_this.upload) {
            _this.upload.abort(file);
          }

          _this.handleChange({
            file: file,
            fileList: removedFileList
          });
        }
      });
    },
    handleManualRemove: function handleManualRemove(file) {
      if (this.$refs.uploadRef) {
        this.$refs.uploadRef.abort(file);
      }

      this.handleRemove(file);
    },
    handleChange: function handleChange(info) {
      if (!(0, _propsUtil.hasProp)(this, 'fileList')) {
        this.setState({
          sFileList: info.fileList
        });
      }

      this.$emit('update:fileList', info.fileList);
      this.$emit('change', info);
    },
    onFileDrop: function onFileDrop(e) {
      this.setState({
        dragState: e.type
      });
    },
    reBeforeUpload: function reBeforeUpload(file, fileList) {
      var beforeUpload = this.$props.beforeUpload;
      var stateFileList = this.$data.sFileList;

      if (!beforeUpload) {
        return true;
      }

      var result = beforeUpload(file, fileList);

      if (result === false) {
        this.handleChange({
          file: file,
          fileList: (0, _uniqBy.default)(stateFileList.concat(fileList.map(_utils.fileToObject)), function (item) {
            return item.uid;
          })
        });
        return false;
      }

      if (result && result.then) {
        return result;
      }

      return true;
    },
    clearProgressTimer: function clearProgressTimer() {
      clearInterval(this.progressTimer);
    },
    autoUpdateProgress: function autoUpdateProgress(_, file) {
      var _this2 = this;

      var getPercent = (0, _utils.genPercentAdd)();
      var curPercent = 0;
      this.clearProgressTimer();
      this.progressTimer = setInterval(function () {
        curPercent = getPercent(curPercent);

        _this2.onProgress({
          percent: curPercent * 100
        }, file);
      }, 200);
    },
    renderUploadList: function renderUploadList(locale) {
      var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
          _getOptionProps$showU = _getOptionProps.showUploadList,
          showUploadList = _getOptionProps$showU === void 0 ? {} : _getOptionProps$showU,
          listType = _getOptionProps.listType,
          previewFile = _getOptionProps.previewFile,
          disabled = _getOptionProps.disabled,
          propLocale = _getOptionProps.locale;

      var showRemoveIcon = showUploadList.showRemoveIcon,
          showPreviewIcon = showUploadList.showPreviewIcon,
          showDownloadIcon = showUploadList.showDownloadIcon;
      var fileList = this.$data.sFileList;
      var _this$$props = this.$props,
          onDownload = _this$$props.onDownload,
          onPreview = _this$$props.onPreview;
      var uploadListProps = {
        listType: listType,
        items: fileList,
        previewFile: previewFile,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        locale: (0, _extends2.default)((0, _extends2.default)({}, locale), propLocale),
        onRemove: this.handleManualRemove,
        onDownload: onDownload,
        onPreview: onPreview
      };
      return (0, _vue.createVNode)(_UploadList.default, uploadListProps, null);
    }
  },
  render: function render() {
    var _classNames2;

    var _getOptionProps2 = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps2.prefixCls,
        showUploadList = _getOptionProps2.showUploadList,
        listType = _getOptionProps2.listType,
        type = _getOptionProps2.type,
        disabled = _getOptionProps2.disabled;

    var _this$$data = this.$data,
        fileList = _this$$data.sFileList,
        dragState = _this$$data.dragState;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('upload', customizePrefixCls);
    var vcUploadProps = (0, _extends2.default)((0, _extends2.default)({}, this.$props), {
      prefixCls: prefixCls,
      beforeUpload: this.reBeforeUpload,
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onReject: this.onReject,
      ref: 'uploadRef'
    });
    var uploadList = showUploadList ? (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Upload",
      "defaultLocale": _default3.default.Upload,
      "children": this.renderUploadList
    }, null) : null;
    var children = (0, _propsUtil.getSlot)(this);

    if (type === 'drag') {
      var _classNames;

      var dragCls = (0, _classNames3.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-drag"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-drag-uploading"), fileList.some(function (file) {
        return file.status === 'uploading';
      })), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
        "class": className
      }, (0, _util.getDataAndAria)(this.$attrs)), [(0, _vue.createVNode)("div", {
        "class": dragCls,
        "onDrop": this.onFileDrop,
        "onDragover": this.onFileDrop,
        "onDragleave": this.onFileDrop,
        "style": style
      }, [(0, _vue.createVNode)(_vcUpload.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, vcUploadProps), {}, {
        "class": "".concat(prefixCls, "-btn")
      }), {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-drag-container")
          }, [children])];
        }
      })]), uploadList]);
    }

    var uploadButtonCls = (0, _classNames3.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-select"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2)); // Remove id to avoid open by label when trigger is hidden
    // https://github.com/ant-design/ant-design/issues/14298

    if (!children.length || disabled) {
      delete vcUploadProps.id;
    }

    var uploadButton = (0, _vue.createVNode)("div", {
      "class": uploadButtonCls,
      "style": children.length ? undefined : {
        display: 'none'
      }
    }, [(0, _vue.createVNode)(_vcUpload.default, vcUploadProps, {
      default: function _default() {
        return [children];
      }
    })]);

    if (listType === 'picture-card') {
      return (0, _vue.createVNode)("span", {
        "class": (0, _classNames3.default)("".concat(prefixCls, "-picture-card-wrapper"), className)
      }, [uploadList, uploadButton]);
    }

    return (0, _vue.createVNode)("span", {
      "class": className
    }, [uploadButton, uploadList]);
  }
});

exports.default = _default2;