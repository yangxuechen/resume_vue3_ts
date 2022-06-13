import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { createApp, defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { getComponent } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import createChainedFunction from '../_util/createChainedFunction';
import Notice from './Notice';
import { getTransitionGroupProps, TransitionGroup } from '../_util/transition';

function noop() {}

var seed = 0;
var now = Date.now();

function getUuid() {
  return "rcNotification_".concat(now, "_").concat(seed++);
}

var Notification = defineComponent({
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string.def('rc-notification'),
    transitionName: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).def('fade'),
    maxCount: PropTypes.number,
    closeIcon: PropTypes.any
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
    var transitionProps = getTransitionGroupProps(getTransitionName());
    var noticeNodes = notices.map(function (notice, index) {
      var update = Boolean(index === notices.length - 1 && notice.updateKey);
      var key = notice.updateKey ? notice.updateKey : notice.key;
      var content = notice.content,
          duration = notice.duration,
          closable = notice.closable,
          onClose = notice.onClose,
          style = notice.style,
          className = notice.class;
      var close = createChainedFunction(remove.bind(_this, notice.key), onClose);
      var noticeProps = {
        prefixCls: prefixCls,
        duration: duration,
        closable: closable,
        update: update,
        closeIcon: getComponent(_this, 'closeIcon'),
        onClose: close,
        onClick: notice.onClick || noop,
        style: style,
        class: className,
        key: key
      };
      return _createVNode(Notice, noticeProps, {
        default: function _default() {
          return [typeof content === 'function' ? content() : content];
        }
      });
    });

    var className = _defineProperty({}, prefixCls, 1);

    return _createVNode("div", {
      "class": className,
      "style": $attrs.style || {
        top: '65px',
        left: '50%'
      }
    }, [_createVNode(TransitionGroup, _objectSpread({
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

  var app = createApp({
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
      var p = _extends(_extends({}, props), {
        ref: 'notification',
        style: style,
        class: className
      });

      return _createVNode(Notification, p, null);
    }
  });
  app.mount(div);
};

export default Notification;