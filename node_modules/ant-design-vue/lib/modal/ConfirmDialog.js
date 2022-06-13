"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _locale = require("./locale");

function renderSomeContent(_name, someContent) {
  if (typeof someContent === 'function') {
    return someContent();
  }

  return someContent;
}

var ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
      onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = (0, _locale.getConfirmLocale)();
  var okText = renderSomeContent('okText', props.okText) || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = renderSomeContent('cancelText', props.cancelText) || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = (0, _classNames2.default)(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), "".concat(prefixCls, "-").concat(props.type), props.class);
  var cancelButton = okCancel && (0, _vue.createVNode)(_ActionButton.default, {
    "actionFn": onCancel,
    "closeModal": close,
    "autofocus": autoFocusButton === 'cancel',
    "buttonProps": cancelButtonProps
  }, {
    default: function _default() {
      return [cancelText];
    }
  });
  return (0, _vue.createVNode)(_Modal.default, {
    "prefixCls": prefixCls,
    "class": classString,
    "wrapClassName": (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(contentPrefixCls, "-centered"), !!centered)),
    "onCancel": function onCancel(e) {
      return close({
        triggerCancel: true
      }, e);
    },
    "visible": visible,
    "title": "",
    "transitionName": transitionName,
    "footer": "",
    "maskTransitionName": maskTransitionName,
    "mask": mask,
    "maskClosable": maskClosable,
    "maskStyle": maskStyle,
    "style": style,
    "width": width,
    "zIndex": zIndex,
    "afterClose": afterClose,
    "keyboard": keyboard,
    "centered": centered,
    "getContainer": getContainer,
    "closable": closable
  }, {
    default: function _default() {
      return [(0, _vue.createVNode)("div", {
        "class": "".concat(contentPrefixCls, "-body-wrapper")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(contentPrefixCls, "-body")
      }, [renderSomeContent('icon', icon), props.title === undefined ? null : (0, _vue.createVNode)("span", {
        "class": "".concat(contentPrefixCls, "-title")
      }, [renderSomeContent('title', props.title)]), (0, _vue.createVNode)("div", {
        "class": "".concat(contentPrefixCls, "-content")
      }, [renderSomeContent('content', props.content)])]), (0, _vue.createVNode)("div", {
        "class": "".concat(contentPrefixCls, "-btns")
      }, [cancelButton, (0, _vue.createVNode)(_ActionButton.default, {
        "type": okType,
        "actionFn": onOk,
        "closeModal": close,
        "autofocus": autoFocusButton === 'ok',
        "buttonProps": okButtonProps
      }, {
        default: function _default() {
          return [okText];
        }
      })])])];
    }
  });
};

ConfirmDialog.inheritAttrs = false;
var _default2 = ConfirmDialog;
exports.default = _default2;