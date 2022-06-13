import { onBeforeUnmount, ref } from 'vue';
import wrapperRaf from '../raf';
/**
 * Execute code before next frame but async
 */

export function useLayoutState(defaultState) {
  var stateRef = ref(defaultState);
  var tempState = stateRef.value;
  var updateBatchRef = [];
  var rafRef = ref();

  function setFrameState(updater) {
    wrapperRaf.cancel(rafRef.value);
    updateBatchRef.push(updater);
    rafRef.value = wrapperRaf(function () {
      var prevBatch = updateBatchRef; // const prevState = stateRef.value;

      updateBatchRef = [];
      prevBatch.forEach(function (batchUpdater) {
        tempState = batchUpdater(tempState);
      }); // if (tempState !== stateRef.value) {

      stateRef.value = tempState; // }
    });
  }

  onBeforeUnmount(function () {
    wrapperRaf.cancel(rafRef.value);
  });
  return [stateRef, setFrameState];
}