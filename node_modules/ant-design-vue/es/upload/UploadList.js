import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, nextTick } from 'vue';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps, initDefaultProps } from '../_util/props-util';
import { getTransitionProps, Transition, getTransitionGroupProps, TransitionGroup } from '../_util/transition';
import { defaultConfigProvider } from '../config-provider';
import { previewImage, isImageUrl } from './utils';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import PaperClipOutlined from '@ant-design/icons-vue/PaperClipOutlined';
import PictureTwoTone from '@ant-design/icons-vue/PictureTwoTone';
import FileTwoTone from '@ant-design/icons-vue/FileOutlined';
import DeleteOutlined from '@ant-design/icons-vue/DeleteOutlined';
import DownloadOutlined from '@ant-design/icons-vue/DownloadOutlined';
import EyeOutlined from '@ant-design/icons-vue/EyeOutlined';
import Tooltip from '../tooltip';
import Progress from '../progress';
import classNames from '../_util/classNames';
import { UploadListProps } from './interface';
export default defineComponent({
  name: 'AUploadList',
  mixins: [BaseMixin],
  props: initDefaultProps(UploadListProps, {
    listType: 'text',
    progressAttr: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: previewImage
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  updated: function updated() {
    var _this = this;

    nextTick(function () {
      var _this$$props = _this.$props,
          listType = _this$$props.listType,
          items = _this$$props.items,
          previewFile = _this$$props.previewFile;

      if (listType !== 'picture' && listType !== 'picture-card') {
        return;
      }

      (items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
          return;
        }
        /*eslint-disable */


        file.thumbUrl = '';

        if (previewFile) {
          previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';

            _this.$forceUpdate();
          });
        }
      });
    });
  },
  methods: {
    handlePreview: function handlePreview(file, e) {
      var onPreview = this.$props.onPreview;

      if (!onPreview) {
        return;
      }

      e.preventDefault();
      return this.$emit('preview', file);
    },
    handleDownload: function handleDownload(file) {
      var onDownload = this.$props.onDownload;

      if (typeof onDownload === 'function') {
        this.$emit('download', file);
      } else if (file.url) {
        window.open(file.url);
      }
    },
    handleClose: function handleClose(file) {
      this.$emit('remove', file);
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames4;

    var _getOptionProps = getOptionProps(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        _getOptionProps$items = _getOptionProps.items,
        items = _getOptionProps$items === void 0 ? [] : _getOptionProps$items,
        listType = _getOptionProps.listType,
        showPreviewIcon = _getOptionProps.showPreviewIcon,
        showRemoveIcon = _getOptionProps.showRemoveIcon,
        showDownloadIcon = _getOptionProps.showDownloadIcon,
        locale = _getOptionProps.locale,
        progressAttr = _getOptionProps.progressAttr;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('upload', customizePrefixCls);
    var list = items.map(function (file) {
      var _classNames, _classNames2;

      var progress;
      var icon = file.status === 'uploading' ? _createVNode(LoadingOutlined, null, null) : _createVNode(PaperClipOutlined, null, null);

      if (listType === 'picture' || listType === 'picture-card') {
        if (listType === 'picture-card' && file.status === 'uploading') {
          icon = _createVNode("div", {
            "class": "".concat(prefixCls, "-list-item-uploading-text")
          }, [locale.uploading]);
        } else if (!file.thumbUrl && !file.url) {
          icon = _createVNode(PictureTwoTone, {
            "class": "".concat(prefixCls, "-list-item-thumbnail")
          }, null);
        } else {
          var thumbnail = isImageUrl(file) ? _createVNode("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : _createVNode(FileTwoTone, {
            "class": "".concat(prefixCls, "-list-item-icon")
          }, null);
          icon = _createVNode("a", {
            "class": "".concat(prefixCls, "-list-item-thumbnail"),
            "onClick": function onClick(e) {
              return _this2.handlePreview(file, e);
            },
            "href": file.url || file.thumbUrl,
            "target": "_blank",
            "rel": "noopener noreferrer"
          }, [thumbnail]);
        }
      }

      if (file.status === 'uploading') {
        var progressProps = _extends(_extends({}, progressAttr), {
          type: 'line',
          percent: file.percent
        }); // show loading icon if upload progress listener is disabled


        var loadingProgress = 'percent' in file ? _createVNode(Progress, progressProps, null) : null;
        progress = _createVNode("div", {
          "class": "".concat(prefixCls, "-list-item-progress"),
          "key": "progress"
        }, [loadingProgress]);
      }

      var infoUploadingClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-list-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-item-").concat(file.status), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames));
      var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? _createVNode(DeleteOutlined, {
        "title": locale.removeFile,
        "onClick": function onClick() {
          return _this2.handleClose(file);
        }
      }, null) : null;
      var downloadIcon = showDownloadIcon && file.status === 'done' ? _createVNode(DownloadOutlined, {
        "title": locale.downloadFile,
        "onClick": function onClick() {
          return _this2.handleDownload(file);
        }
      }, null) : null;

      var downloadOrDelete = listType !== 'picture-card' && _createVNode("span", {
        "key": "download-delete",
        "class": "".concat(prefixCls, "-list-item-card-actions ").concat(listType === 'picture' ? 'picture' : '')
      }, [downloadIcon && _createVNode("a", {
        "title": locale.downloadFile
      }, [downloadIcon]), removeIcon && _createVNode("a", {
        "title": locale.removeFile
      }, [removeIcon])]);

      var listItemNameClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-list-item-name"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-list-item-name-icon-count-").concat([downloadIcon, removeIcon].filter(function (x) {
        return x;
      }).length), true), _classNames2));
      var preview = file.url ? [_createVNode("a", _objectSpread(_objectSpread({
        "target": "_blank",
        "rel": "noopener noreferrer",
        "class": listItemNameClass,
        "title": file.name
      }, linkProps), {}, {
        "href": file.url,
        "onClick": function onClick(e) {
          return _this2.handlePreview(file, e);
        }
      }), [file.name]), downloadOrDelete] : [_createVNode("span", {
        "key": "view",
        "class": "".concat(prefixCls, "-list-item-name"),
        "onClick": function onClick(e) {
          return _this2.handlePreview(file, e);
        },
        "title": file.name
      }, [file.name]), downloadOrDelete];
      var style = file.url || file.thumbUrl ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? _createVNode("a", {
        "href": file.url || file.thumbUrl,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "style": style,
        "onClick": function onClick(e) {
          return _this2.handlePreview(file, e);
        },
        "title": locale.previewFile
      }, [_createVNode(EyeOutlined, null, null)]) : null;

      var actions = listType === 'picture-card' && file.status !== 'uploading' && _createVNode("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === 'done' && downloadIcon, removeIcon]);

      var message;

      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        message = file.error && file.error.statusText || locale.uploadError;
      }

      var iconAndPreview = _createVNode("span", null, [icon, preview]);

      var transitionProps = getTransitionProps('fade');

      var dom = _createVNode("div", {
        "class": infoUploadingClass,
        "key": file.uid
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [progress];
        }
      })]);

      var listContainerNameClass = classNames(_defineProperty({}, "".concat(prefixCls, "-list-picture-card-container"), listType === 'picture-card'));
      return _createVNode("div", {
        "key": file.uid,
        "class": listContainerNameClass
      }, [file.status === 'error' ? _createVNode(Tooltip, {
        "title": message
      }, {
        default: function _default() {
          return [dom];
        }
      }) : _createVNode("span", null, [dom])]);
    });
    var listClassNames = classNames((_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-list"), true), _defineProperty(_classNames4, "".concat(prefixCls, "-list-").concat(listType), true), _classNames4));
    var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';

    var transitionGroupProps = _extends(_extends({}, getTransitionGroupProps("".concat(prefixCls, "-").concat(animationDirection))), {
      class: listClassNames
    });

    return _createVNode(TransitionGroup, _objectSpread(_objectSpread({}, transitionGroupProps), {}, {
      "tag": "div"
    }), {
      default: function _default() {
        return [list];
      }
    });
  }
});