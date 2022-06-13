import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { nextTick } from 'vue';
import { getOptionProps } from './props-util';
export default {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      var newState = typeof state === 'function' ? state(this, this.$props) : state;

      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this), newState));

        if (s === null) {
          return;
        } else {
          newState = _extends(_extends({}, newState), s || {});
        }
      }

      _extends(this, newState);

      if (this._.isMounted) {
        this.$forceUpdate();
      }

      nextTick(function () {
        callback && callback();
      });
    },
    __emit: function __emit() {
      // 直接调用事件，底层组件不需要vueTool记录events
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      eventName = "on".concat(eventName[0].toUpperCase()).concat(eventName.substring(1));
      var event = this.$props[eventName] || this.$attrs[eventName];

      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            event[i].apply(event, _toConsumableArray(args.slice(1)));
          }
        } else {
          event.apply(void 0, _toConsumableArray(args.slice(1)));
        }
      }
    }
  }
};