"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayoutState = useLayoutState;

var _vue = require("vue");

var _raf = _interopRequireDefault(require("../raf"));

/**
 * Execute code before next frame but async
 */
function useLayoutState(defaultState) {
  var stateRef = (0, _vue.ref)(defaultState);
  var tempState = stateRef.value;
  var updateBatchRef = [];
  var rafRef = (0, _vue.ref)();

  function setFrameState(updater) {
    _raf.default.cancel(rafRef.value);

    updateBatchRef.push(updater);
    rafRef.value = (0, _raf.default)(function () {
      var prevBatch = updateBatchRef; // const prevState = stateRef.value;

      updateBatchRef = [];
      prevBatch.forEach(function (batchUpdater) {
        tempState = batchUpdater(tempState);
      }); // if (tempState !== stateRef.value) {

      stateRef.value = tempState; // }
    });
  }

  (0, _vue.onBeforeUnmount)(function () {
    _raf.default.cancel(rafRef.value);
  });
  return [stateRef, setFrameState];
}