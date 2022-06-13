"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lock = false;
  var lockTimeout = null;

  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(function () {
      lock = false;
    }, 50);
  }

  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll = // Pass origin wheel when on the top
    deltaY < 0 && isScrollAtTop.value || deltaY > 0 && isScrollAtBottom.value;

    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }

    return !lock && originScroll;
  };
};

exports.default = _default;