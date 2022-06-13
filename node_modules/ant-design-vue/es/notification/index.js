import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import Notification from '../vc-notification';
import CheckCircleOutlined from '@ant-design/icons-vue/CheckCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons-vue/InfoCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons-vue/CloseCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons-vue/ExclamationCircleOutlined';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = '24px';
var defaultBottom = '24px';
var defaultPlacement = 'topRight';

var defaultGetContainer = function defaultGetContainer() {
  return document.body;
};

var defaultCloseIcon = null;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon;

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  }

  if (bottom !== undefined) {
    defaultBottom = typeof bottom === 'number' ? "".concat(bottom, "px") : bottom;
  }

  if (top !== undefined) {
    defaultTop = typeof top === 'number' ? "".concat(top, "px") : top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: '0px',
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: '0px',
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: '0px',
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: '0px',
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(_ref, callback) {
  var prefixCls = _ref.prefixCls,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? defaultPlacement : _ref$placement,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? defaultGetContainer : _ref$getContainer,
      top = _ref.top,
      bottom = _ref.bottom,
      _ref$closeIcon = _ref.closeIcon,
      _closeIcon = _ref$closeIcon === void 0 ? defaultCloseIcon : _ref$closeIcon;

  var cacheKey = "".concat(prefixCls, "-").concat(placement);

  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }

  Notification.newInstance({
    prefixCls: prefixCls,
    class: "".concat(prefixCls, "-").concat(placement),
    style: getPlacementStyle(placement, top, bottom),
    getContainer: getContainer,
    closeIcon: function closeIcon() {
      var closeIconToRender = _createVNode("span", {
        "class": "".concat(prefixCls, "-close-x")
      }, [_closeIcon || _createVNode(CloseOutlined, {
        "class": "".concat(prefixCls, "-close-icon")
      }, null)]);

      return closeIconToRender;
    }
  }, function (notification) {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}

var typeToIcon = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};

function notice(args) {
  var icon = args.icon,
      type = args.type,
      description = args.description,
      message = args.message,
      btn = args.btn;
  var outerPrefixCls = args.prefixCls || 'ant-notification';
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (icon) {
    iconNode = function iconNode() {
      return _createVNode("span", {
        "class": "".concat(prefixCls, "-icon")
      }, [icon]);
    };
  } else if (type) {
    var Icon = typeToIcon[type];

    iconNode = function iconNode() {
      return _createVNode(Icon, {
        "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
      }, null);
    };
  }

  var placement = args.placement,
      top = args.top,
      bottom = args.bottom,
      getContainer = args.getContainer,
      closeIcon = args.closeIcon;
  getNotificationInstance({
    prefixCls: outerPrefixCls,
    placement: placement,
    top: top,
    bottom: bottom,
    getContainer: getContainer,
    closeIcon: closeIcon
  }, function (notification) {
    notification.notice({
      content: function content() {
        return _createVNode("div", {
          "class": iconNode ? "".concat(prefixCls, "-with-icon") : ''
        }, [iconNode && iconNode(), _createVNode("div", {
          "class": "".concat(prefixCls, "-message")
        }, [!description && iconNode ? _createVNode("span", {
          "class": "".concat(prefixCls, "-message-single-line-auto-margin")
        }, null) : null, message]), _createVNode("div", {
          "class": "".concat(prefixCls, "-description")
        }, [description]), btn ? _createVNode("span", {
          "class": "".concat(prefixCls, "-btn")
        }, [btn]) : null]);
      },
      duration: duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}

var apiBase = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return notificationInstance[cacheKey].removeNotice(key);
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  }
};
var api = apiBase;
var iconTypes = ['success', 'info', 'warning', 'error'];
iconTypes.forEach(function (type) {
  api[type] = function (args) {
    return api.open(_extends(_extends({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
export default api;