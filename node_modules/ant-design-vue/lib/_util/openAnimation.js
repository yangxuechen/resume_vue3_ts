"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cssAnimation = _interopRequireDefault(require("./css-animation"));

var _vue = require("vue");

function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  var appearRequestAnimationFrameId;
  return (0, _cssAnimation.default)(node, 'ant-motion-collapse-legacy', {
    start: function start() {
      if (appearRequestAnimationFrameId) {
        cancelAnimationFrame(appearRequestAnimationFrameId);
      }

      if (!show) {
        node.style.height = "".concat(node.offsetHeight, "px");
        node.style.opacity = '1';
      } else {
        height = node.offsetHeight; // not get offsetHeight when appear
        // set it into raf get correct offsetHeight

        if (height === 0) {
          appearRequestAnimationFrameId = requestAnimationFrame(function () {
            height = node.offsetHeight;
            node.style.height = '0px';
            node.style.opacity = '0';
          });
        } else {
          node.style.height = '0px';
          node.style.opacity = '0';
        }
      }
    },
    active: function active() {
      if (requestAnimationFrameId) {
        cancelAnimationFrame(requestAnimationFrameId);
      }

      requestAnimationFrameId = requestAnimationFrame(function () {
        node.style.height = "".concat(show ? height : 0, "px");
        node.style.opacity = show ? '1' : '0';
      });
    },
    end: function end() {
      if (appearRequestAnimationFrameId) {
        cancelAnimationFrame(appearRequestAnimationFrameId);
      }

      if (requestAnimationFrameId) {
        cancelAnimationFrame(requestAnimationFrameId);
      }

      node.style.height = '';
      node.style.opacity = '';
      done && done();
    }
  });
}

var animation = {
  onEnter: function onEnter(node, done) {
    (0, _vue.nextTick)(function () {
      animate(node, true, done);
    });
  },
  onLeave: function onLeave(node, done) {
    return animate(node, false, done);
  }
};
var _default = animation;
exports.default = _default;