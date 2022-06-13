"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDelayReset;

var _vue = require("vue");

/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var bool = (0, _vue.ref)(false);
  var delay;

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delay);
  };

  (0, _vue.onMounted)(function () {
    cancelLatest();
  });

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delay = window.setTimeout(function () {
      bool.value = value;

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}