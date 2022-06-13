"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInjectOverflowContext = exports.OverflowContextProvider = void 0;

var _vue = require("vue");

var OverflowContextProviderKey = Symbol('OverflowContextProviderKey');
var OverflowContextProvider = (0, _vue.defineComponent)({
  name: 'OverflowContextProvider',
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _vue.provide)(OverflowContextProviderKey, (0, _vue.computed)(function () {
      return props.value;
    }));
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
exports.OverflowContextProvider = OverflowContextProvider;

var useInjectOverflowContext = function useInjectOverflowContext() {
  return (0, _vue.inject)(OverflowContextProviderKey, (0, _vue.computed)(function () {
    return null;
  }));
};

exports.useInjectOverflowContext = useInjectOverflowContext;