"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vcNotification = _interopRequireDefault(require("../vc-notification"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));

var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleFilled"));

var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';

var getContainer = function getContainer() {
  return document.body;
};

var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  _vcNotification.default.newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

var iconMap = {
  info: _InfoCircleFilled.default,
  success: _CheckCircleFilled.default,
  error: _CloseCircleFilled.default,
  warning: _ExclamationCircleFilled.default,
  loading: _LoadingOutlined.default
};

function notice(args) {
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var Icon = iconMap[args.type];
  var iconNode = Icon ? (0, _vue.createVNode)(Icon, null, null) : '';
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getMessageInstance(function (instance) {
      instance.notice({
        key: target,
        duration: duration,
        style: args.style || {},
        class: args.class,
        content: function content() {
          return (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-custom-content").concat(args.type ? " ".concat(prefixCls, "-").concat(args.type) : '')
          }, [args.icon || iconNode, (0, _vue.createVNode)("span", null, [args.content])]);
        },
        onClose: callback
      });
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }

    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }

    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }

    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return api.open((0, _extends2.default)((0, _extends2.default)({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
});
api.warn = api.warning;
var _default = api;
exports.default = _default;