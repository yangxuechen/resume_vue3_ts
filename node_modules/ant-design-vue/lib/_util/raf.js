"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapperRaf;
var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = requestAnimationFrame(internalCallback);
    }
  }

  ids[myId] = requestAnimationFrame(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  cancelAnimationFrame(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage