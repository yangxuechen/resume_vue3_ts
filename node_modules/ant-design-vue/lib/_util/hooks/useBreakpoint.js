"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _responsiveObserve = _interopRequireDefault(require("../../_util/responsiveObserve"));

function useBreakpoint() {
  var screens = (0, _vue.ref)({});
  var token = null;
  (0, _vue.onMounted)(function () {
    token = _responsiveObserve.default.subscribe(function (supportScreens) {
      screens.value = supportScreens;
    });
  });
  (0, _vue.onUnmounted)(function () {
    _responsiveObserve.default.unsubscribe(token);
  });
  return screens;
}

var _default = useBreakpoint;
exports.default = _default;