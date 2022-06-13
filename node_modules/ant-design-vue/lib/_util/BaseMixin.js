"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _propsUtil = require("./props-util");

var _default = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      var newState = typeof state === 'function' ? state(this.$data, this.$props) : state;

      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps((0, _propsUtil.getOptionProps)(this), (0, _extends2.default)((0, _extends2.default)({}, this.$data), newState));

        if (s === null) {
          return;
        } else {
          newState = (0, _extends2.default)((0, _extends2.default)({}, newState), s || {});
        }
      }

      (0, _extends2.default)(this.$data, newState);

      if (this._.isMounted) {
        this.$forceUpdate();
      }

      (0, _vue.nextTick)(function () {
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
            event[i].apply(event, (0, _toConsumableArray2.default)(args.slice(1)));
          }
        } else {
          event.apply(void 0, (0, _toConsumableArray2.default)(args.slice(1)));
        }
      }
    }
  }
};
exports.default = _default;