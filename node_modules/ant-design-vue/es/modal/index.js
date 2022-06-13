import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import Modal, { destroyFns } from './Modal';
import modalConfirm from './confirm';
import InfoCircleOutlined from '@ant-design/icons-vue/InfoCircleOutlined';
import CheckCircleOutlined from '@ant-design/icons-vue/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons-vue/CloseCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons-vue/ExclamationCircleOutlined';

var info = function info(props) {
  var config = _extends({
    type: 'info',
    icon: function icon() {
      return _createVNode(InfoCircleOutlined, null, null);
    },
    okCancel: false
  }, props);

  return modalConfirm(config);
};

var success = function success(props) {
  var config = _extends({
    type: 'success',
    icon: function icon() {
      return _createVNode(CheckCircleOutlined, null, null);
    },
    okCancel: false
  }, props);

  return modalConfirm(config);
};

var error = function error(props) {
  var config = _extends({
    type: 'error',
    icon: function icon() {
      return _createVNode(CloseCircleOutlined, null, null);
    },
    okCancel: false
  }, props);

  return modalConfirm(config);
};

var warning = function warning(props) {
  var config = _extends({
    type: 'warning',
    icon: function icon() {
      return _createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: false
  }, props);

  return modalConfirm(config);
};

var warn = warning;

var confirm = function confirmFn(props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return modalConfirm(config);
};

Modal.info = info;
Modal.success = success;
Modal.error = error;
Modal.warning = warning;
Modal.warn = warn;
Modal.confirm = confirm;

Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};
/* istanbul ignore next */


Modal.install = function (app) {
  app.component(Modal.name, Modal);
  return app;
};

export default Modal;