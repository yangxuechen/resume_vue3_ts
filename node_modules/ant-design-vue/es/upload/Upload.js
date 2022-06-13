import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import uniqBy from 'lodash-es/uniqBy';
import findIndex from 'lodash-es/findIndex';
import VcUpload from '../vc-upload';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps, hasProp, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';
import { defaultConfigProvider } from '../config-provider';
import Dragger from './Dragger';
import UploadList from './UploadList';
import { UploadProps } from './interface';
import { T, fileToObject, genPercentAdd, getFileItem, removeFileItem } from './utils';
import { defineComponent, inject } from 'vue';
import { getDataAndAria } from '../vc-tree/src/util';
export default defineComponent({
  name: 'AUpload',
  mixins: [BaseMixin],
  inheritAttrs: false,
  Dragger: Dragger,
  props: initDefaultProps(UploadProps, {
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: T,
    showUploadList: true,
    listType: 'text',
    disabled: false,
    supportServerRender: true
  }),
  setup: function setup() {
    return {
      upload: null,
      progressTimer: null,
      configProvider: inject('configProvider', defaultConfigProvider)
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
      var targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      var nextFileList = this.sFileList.concat();
      var fileIndex = findIndex(nextFileList, function (_ref) {
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

      if (!window.File || (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env.TEST_IE) {
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
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.status = 'done';
      targetItem.response = response;
      targetItem.xhr = xhr;
      this.handleChange({
        file: _extends({}, targetItem),
        fileList: fileList
      });
    },
    onProgress: function onProgress(e, file) {
      var fileList = this.sFileList;
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.percent = e.percent;
      this.handleChange({
        event: e,
        file: _extends({}, targetItem),
        fileList: this.sFileList
      });
    },
    onError: function onError(error, response, file) {
      this.clearProgressTimer();
      var fileList = this.sFileList;
      var targetItem = getFileItem(file, fileList); // removed

      if (!targetItem) {
        return;
      }

      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      this.handleChange({
        file: _extends({}, targetItem),
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

        var removedFileList = removeFileItem(file, fileList);

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
      if (!hasProp(this, 'fileList')) {
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
          fileList: uniqBy(stateFileList.concat(fileList.map(fileToObject)), function (item) {
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

      var getPercent = genPercentAdd();
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
      var _getOptionProps = getOptionProps(this),
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
        locale: _extends(_extends({}, locale), propLocale),
        onRemove: this.handleManualRemove,
        onDownload: onDownload,
        onPreview: onPreview
      };
      return _createVNode(UploadList, uploadListProps, null);
    }
  },
  render: function render() {
    var _classNames2;

    var _getOptionProps2 = getOptionProps(this),
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

    var vcUploadProps = _extends(_extends({}, this.$props), {
      prefixCls: prefixCls,
      beforeUpload: this.reBeforeUpload,
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onReject: this.onReject,
      ref: 'uploadRef'
    });

    var uploadList = showUploadList ? _createVNode(LocaleReceiver, {
      "componentName": "Upload",
      "defaultLocale": defaultLocale.Upload,
      "children": this.renderUploadList
    }, null) : null;
    var children = getSlot(this);

    if (type === 'drag') {
      var _classNames;

      var dragCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-drag"), true), _defineProperty(_classNames, "".concat(prefixCls, "-drag-uploading"), fileList.some(function (file) {
        return file.status === 'uploading';
      })), _defineProperty(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return _createVNode("span", _objectSpread({
        "class": className
      }, getDataAndAria(this.$attrs)), [_createVNode("div", {
        "class": dragCls,
        "onDrop": this.onFileDrop,
        "onDragover": this.onFileDrop,
        "onDragleave": this.onFileDrop,
        "style": style
      }, [_createVNode(VcUpload, _objectSpread(_objectSpread({}, vcUploadProps), {}, {
        "class": "".concat(prefixCls, "-btn")
      }), {
        default: function _default() {
          return [_createVNode("div", {
            "class": "".concat(prefixCls, "-drag-container")
          }, [children])];
        }
      })]), uploadList]);
    }

    var uploadButtonCls = classNames(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-select"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2)); // Remove id to avoid open by label when trigger is hidden
    // https://github.com/ant-design/ant-design/issues/14298

    if (!children.length || disabled) {
      delete vcUploadProps.id;
    }

    var uploadButton = _createVNode("div", {
      "class": uploadButtonCls,
      "style": children.length ? undefined : {
        display: 'none'
      }
    }, [_createVNode(VcUpload, vcUploadProps, {
      default: function _default() {
        return [children];
      }
    })]);

    if (listType === 'picture-card') {
      return _createVNode("span", {
        "class": classNames("".concat(prefixCls, "-picture-card-wrapper"), className)
      }, [uploadList, uploadButton]);
    }

    return _createVNode("span", {
      "class": className
    }, [uploadButton, uploadList]);
  }
});