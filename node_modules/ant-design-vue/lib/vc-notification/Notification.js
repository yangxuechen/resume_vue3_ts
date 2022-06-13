"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _createChainedFunction = _interopRequireDefault(require("../_util/createChainedFunction"));

var _Notice = _interopRequireDefault(require("./Notice"));

var _transition = require("../_util/transition");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function noop() {}

var seed = 0;
var now = Date.now();

function getUuid() {
  return "rcNotification_".concat(now, "_").concat(seed++);
}

var Notification = (0, _vue.defineComponent)({
  mixins: [_BaseMixin.default],
  props: {
    prefixCls: _vueTypes.default.string.def('rc-notification'),
    transitionName: _vueTypes.default.string,
    animation: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object]).def('fade'),
    maxCount: _vueTypes.default.number,
    closeIcon: _vueTypes.default.any
  },
  data: function data() {
    return {
      notices: []
    };
  },
  methods: {
    getTransitionName: function getTransitionName() {
      var props = this.$props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(props.prefixCls, "-").concat(props.animation);
      }

      return transitionName;
    },
    add: function add(notice) {
      var key = notice.key = notice.key || getUuid();
      var maxCount = this.$props.maxCount;
      this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();

        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, notice);
        } else {
          if (maxCount && notices.length >= maxCount) {
            // XXX, use key of first item to update new added (let React to move exsiting
            // instead of remove and mount). Same key was used before for both a) external
            // manual control and b) internal react 'key' prop , which is not that good.
            notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
            updatedNotices.shift();
          }

          updatedNotices.push(notice);
        }

        return {
          notices: updatedNotices
        };
      });
    },
    remove: function remove(key) {
      this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }
  },
  render: function render() {
    var _this = this;

    var prefixCls = this.prefixCls,
        notices = this.notices,
        remove = this.remove,
        getTransitionName = this.getTransitionName,
        $attrs = this.$attrs;
    var transitionProps = (0, _transition.getTransitionGroupProps)(getTransitionName());
    var noticeNodes = notices.map(function (notice, index) {
      var update = Boolean(index === notices.length - 1 && notice.updateKey);
      var key = notice.updateKey ? notice.updateKey : notice.key;
      var content = notice.content,
          duration = notice.duration,
          closable = notice.closable,
          onClose = notice.onClose,
          style = notice.style,
          className = notice.class;
      var close = (0, _createChainedFunction.default)(remove.bind(_this, notice.key), onClose);
      var noticeProps = {
        prefixCls: prefixCls,
        duration: duration,
        closable: closable,
        update: update,
        closeIcon: (0, _propsUtil.getComponent)(_this, 'closeIcon'),
        onClose: close,
        onClick: notice.onClick || noop,
        style: style,
        class: className,
        key: key
      };
      return (0, _vue.createVNode)(_Notice.default, noticeProps, {
        default: function _default() {
          return [typeof content === 'function' ? content() : content];
        }
      });
    });
    var className = (0, _defineProperty2.default)({}, prefixCls, 1);
    return (0, _vue.createVNode)("div", {
      "class": className,
      "style": $attrs.style || {
        top: '65px',
        left: '50%'
      }
    }, [(0, _vue.createVNode)(_transition.TransitionGroup, (0, _objectSpread2.default)({
      "tag": "span"
    }, transitionProps), {
      default: function _default() {
        return [noticeNodes];
      }
    })]);
  }
});

Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _a = properties || {},
      getContainer = _a.getContainer,
      style = _a.style,
      className = _a.class,
      props = __rest(_a, ["getContainer", "style", "class"]);

  var div = document.createElement('div');

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var app = (0, _vue.createApp)({
    mounted: function mounted() {
      var self = this;
      this.$nextTick(function () {
        callback({
          notice: function notice(noticeProps) {
            self.$refs.notification.add(noticeProps);
          },
          removeNotice: function removeNotice(key) {
            self.$refs.notification.remove(key);
          },
          component: self,
          destroy: function destroy() {
            app.unmount(div);

            if (div.parentNode) {
              div.parentNode.removeChild(div);
            }
          }
        });
      });
    },
    render: function render() {
      var p = (0, _extends2.default)((0, _extends2.default)({}, props), {
        ref: 'notification',
        style: style,
        class: className
      });
      return (0, _vue.createVNode)(Notification, p, null);
    }
  });
  app.mount(div);
};

var _default2 = Notification;
exports.default = _default2;