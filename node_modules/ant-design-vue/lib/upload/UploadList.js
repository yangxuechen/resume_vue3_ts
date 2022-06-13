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

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _transition = require("../_util/transition");

var _configProvider = require("../config-provider");

var _utils = require("./utils");

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _PaperClipOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PaperClipOutlined"));

var _PictureTwoTone = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PictureTwoTone"));

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileOutlined"));

var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DeleteOutlined"));

var _DownloadOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownloadOutlined"));

var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EyeOutlined"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _progress = _interopRequireDefault(require("../progress"));

var _classNames5 = _interopRequireDefault(require("../_util/classNames"));

var _interface = require("./interface");

var _default2 = (0, _vue.defineComponent)({
  name: 'AUploadList',
  mixins: [_BaseMixin.default],
  props: (0, _propsUtil.initDefaultProps)(_interface.UploadListProps, {
    listType: 'text',
    progressAttr: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: _utils.previewImage
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  updated: function updated() {
    var _this = this;

    (0, _vue.nextTick)(function () {
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

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
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
      var icon = file.status === 'uploading' ? (0, _vue.createVNode)(_LoadingOutlined.default, null, null) : (0, _vue.createVNode)(_PaperClipOutlined.default, null, null);

      if (listType === 'picture' || listType === 'picture-card') {
        if (listType === 'picture-card' && file.status === 'uploading') {
          icon = (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-list-item-uploading-text")
          }, [locale.uploading]);
        } else if (!file.thumbUrl && !file.url) {
          icon = (0, _vue.createVNode)(_PictureTwoTone.default, {
            "class": "".concat(prefixCls, "-list-item-thumbnail")
          }, null);
        } else {
          var thumbnail = (0, _utils.isImageUrl)(file) ? (0, _vue.createVNode)("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : (0, _vue.createVNode)(_FileOutlined.default, {
            "class": "".concat(prefixCls, "-list-item-icon")
          }, null);
          icon = (0, _vue.createVNode)("a", {
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
        var progressProps = (0, _extends2.default)((0, _extends2.default)({}, progressAttr), {
          type: 'line',
          percent: file.percent
        }); // show loading icon if upload progress listener is disabled

        var loadingProgress = 'percent' in file ? (0, _vue.createVNode)(_progress.default, progressProps, null) : null;
        progress = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-list-item-progress"),
          "key": "progress"
        }, [loadingProgress]);
      }

      var infoUploadingClass = (0, _classNames5.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-list-item"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames));
      var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? (0, _vue.createVNode)(_DeleteOutlined.default, {
        "title": locale.removeFile,
        "onClick": function onClick() {
          return _this2.handleClose(file);
        }
      }, null) : null;
      var downloadIcon = showDownloadIcon && file.status === 'done' ? (0, _vue.createVNode)(_DownloadOutlined.default, {
        "title": locale.downloadFile,
        "onClick": function onClick() {
          return _this2.handleDownload(file);
        }
      }, null) : null;
      var downloadOrDelete = listType !== 'picture-card' && (0, _vue.createVNode)("span", {
        "key": "download-delete",
        "class": "".concat(prefixCls, "-list-item-card-actions ").concat(listType === 'picture' ? 'picture' : '')
      }, [downloadIcon && (0, _vue.createVNode)("a", {
        "title": locale.downloadFile
      }, [downloadIcon]), removeIcon && (0, _vue.createVNode)("a", {
        "title": locale.removeFile
      }, [removeIcon])]);
      var listItemNameClass = (0, _classNames5.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-list-item-name"), true), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-list-item-name-icon-count-").concat([downloadIcon, removeIcon].filter(function (x) {
        return x;
      }).length), true), _classNames2));
      var preview = file.url ? [(0, _vue.createVNode)("a", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "target": "_blank",
        "rel": "noopener noreferrer",
        "class": listItemNameClass,
        "title": file.name
      }, linkProps), {}, {
        "href": file.url,
        "onClick": function onClick(e) {
          return _this2.handlePreview(file, e);
        }
      }), [file.name]), downloadOrDelete] : [(0, _vue.createVNode)("span", {
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
      var previewIcon = showPreviewIcon ? (0, _vue.createVNode)("a", {
        "href": file.url || file.thumbUrl,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "style": style,
        "onClick": function onClick(e) {
          return _this2.handlePreview(file, e);
        },
        "title": locale.previewFile
      }, [(0, _vue.createVNode)(_EyeOutlined.default, null, null)]) : null;
      var actions = listType === 'picture-card' && file.status !== 'uploading' && (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === 'done' && downloadIcon, removeIcon]);
      var message;

      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        message = file.error && file.error.statusText || locale.uploadError;
      }

      var iconAndPreview = (0, _vue.createVNode)("span", null, [icon, preview]);
      var transitionProps = (0, _transition.getTransitionProps)('fade');
      var dom = (0, _vue.createVNode)("div", {
        "class": infoUploadingClass,
        "key": file.uid
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [progress];
        }
      })]);
      var listContainerNameClass = (0, _classNames5.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-list-picture-card-container"), listType === 'picture-card'));
      return (0, _vue.createVNode)("div", {
        "key": file.uid,
        "class": listContainerNameClass
      }, [file.status === 'error' ? (0, _vue.createVNode)(_tooltip.default, {
        "title": message
      }, {
        default: function _default() {
          return [dom];
        }
      }) : (0, _vue.createVNode)("span", null, [dom])]);
    });
    var listClassNames = (0, _classNames5.default)((_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-list"), true), (0, _defineProperty2.default)(_classNames4, "".concat(prefixCls, "-list-").concat(listType), true), _classNames4));
    var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
    var transitionGroupProps = (0, _extends2.default)((0, _extends2.default)({}, (0, _transition.getTransitionGroupProps)("".concat(prefixCls, "-").concat(animationDirection))), {
      class: listClassNames
    });
    return (0, _vue.createVNode)(_transition.TransitionGroup, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, transitionGroupProps), {}, {
      "tag": "div"
    }), {
      default: function _default() {
        return [list];
      }
    });
  }
});

exports.default = _default2;