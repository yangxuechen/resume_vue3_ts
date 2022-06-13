import cssAnimation from './css-animation';
import { nextTick } from 'vue';

function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  var appearRequestAnimationFrameId;
  return cssAnimation(node, 'ant-motion-collapse-legacy', {
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
    nextTick(function () {
      animate(node, true, done);
    });
  },
  onLeave: function onLeave(node, done) {
    return animate(node, false, done);
  }
};
export default animation;