"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Modal = _interopRequireWildcard(require("./Modal"));

var _confirm = _interopRequireDefault(require("./confirm"));

var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleOutlined"));

var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleOutlined"));

var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleOutlined"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleOutlined"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var info = function info(props) {
  var config = (0, _extends2.default)({
    type: 'info',
    icon: function icon() {
      return (0, _vue.createVNode)(_InfoCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props);
  return (0, _confirm.default)(config);
};

var success = function success(props) {
  var config = (0, _extends2.default)({
    type: 'success',
    icon: function icon() {
      return (0, _vue.createVNode)(_CheckCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props);
  return (0, _confirm.default)(config);
};

var error = function error(props) {
  var config = (0, _extends2.default)({
    type: 'error',
    icon: function icon() {
      return (0, _vue.createVNode)(_CloseCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props);
  return (0, _confirm.default)(config);
};

var warning = function warning(props) {
  var config = (0, _extends2.default)({
    type: 'warning',
    icon: function icon() {
      return (0, _vue.createVNode)(_ExclamationCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props);
  return (0, _confirm.default)(config);
};

var warn = warning;

var confirm = function confirmFn(props) {
  var config = (0, _extends2.default)({
    type: 'confirm',
    okCancel: true
  }, props);
  return (0, _confirm.default)(config);
};

_Modal.default.info = info;
_Modal.default.success = success;
_Modal.default.error = error;
_Modal.default.warning = warning;
_Modal.default.warn = warn;
_Modal.default.confirm = confirm;

_Modal.default.destroyAll = function destroyAllFn() {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();

    if (close) {
      close();
    }
  }
};
/* istanbul ignore next */


_Modal.default.install = function (app) {
  app.component(_Modal.default.name, _Modal.default);
  return app;
};

var _default = _Modal.default;
exports.default = _default;