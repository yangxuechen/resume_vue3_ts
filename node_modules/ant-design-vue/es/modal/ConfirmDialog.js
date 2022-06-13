import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import Dialog from './Modal';
import ActionButton from './ActionButton';
import { getConfirmLocale } from './locale';

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
  var runtimeLocale = getConfirmLocale();
  var okText = renderSomeContent('okText', props.okText) || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = renderSomeContent('cancelText', props.cancelText) || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = classNames(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), "".concat(prefixCls, "-").concat(props.type), props.class);

  var cancelButton = okCancel && _createVNode(ActionButton, {
    "actionFn": onCancel,
    "closeModal": close,
    "autofocus": autoFocusButton === 'cancel',
    "buttonProps": cancelButtonProps
  }, {
    default: function _default() {
      return [cancelText];
    }
  });

  return _createVNode(Dialog, {
    "prefixCls": prefixCls,
    "class": classString,
    "wrapClassName": classNames(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!centered)),
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
      return [_createVNode("div", {
        "class": "".concat(contentPrefixCls, "-body-wrapper")
      }, [_createVNode("div", {
        "class": "".concat(contentPrefixCls, "-body")
      }, [renderSomeContent('icon', icon), props.title === undefined ? null : _createVNode("span", {
        "class": "".concat(contentPrefixCls, "-title")
      }, [renderSomeContent('title', props.title)]), _createVNode("div", {
        "class": "".concat(contentPrefixCls, "-content")
      }, [renderSomeContent('content', props.content)])]), _createVNode("div", {
        "class": "".concat(contentPrefixCls, "-btns")
      }, [cancelButton, _createVNode(ActionButton, {
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
export default ConfirmDialog;