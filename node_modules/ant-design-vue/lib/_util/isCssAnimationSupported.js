"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var animation;

function isCssAnimationSupported() {
  if (animation !== undefined) {
    return animation;
  }

  var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
  var elm = document.createElement('div');

  if (elm.style.animationName !== undefined) {
    animation = true;
  }

  if (animation !== undefined) {
    for (var i = 0; i < domPrefixes.length; i++) {
      if (elm.style["".concat(domPrefixes[i], "AnimationName")] !== undefined) {
        animation = true;
        break;
      }
    }
  }

  animation = animation || false;
  return animation;
}

var _default = isCssAnimationSupported;
exports.default = _default;