"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useProvideAnchor = exports.useInjectAnchor = exports.AnchorContextKey = void 0;

var _vue = require("vue");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function noop() {}

var AnchorContextKey = Symbol('anchorContextKey');
exports.AnchorContextKey = AnchorContextKey;

var useProvideAnchor = function useProvideAnchor(state) {
  (0, _vue.provide)(AnchorContextKey, state);
};

exports.useProvideAnchor = useProvideAnchor;

var useInjectAnchor = function useInjectAnchor() {
  return (0, _vue.inject)(AnchorContextKey, {
    registerLink: noop,
    unregisterLink: noop,
    scrollTo: noop,
    activeLink: (0, _vue.computed)(function () {
      return '';
    }),
    handleClick: noop
  });
};

exports.useInjectAnchor = useInjectAnchor;
var _default = useProvideAnchor;
exports.default = _default;