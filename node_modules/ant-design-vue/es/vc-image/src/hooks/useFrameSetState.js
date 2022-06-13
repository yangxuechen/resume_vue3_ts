import _extends from "@babel/runtime/helpers/esm/extends";
import raf from '../../../_util/raf';
import { onMounted, reactive, ref } from 'vue';
export default function useFrameSetState(initial) {
  var frame = ref(null);
  var state = reactive(_extends({}, initial));
  var queue = ref([]);

  var setFrameState = function setFrameState(newState) {
    if (frame.value === null) {
      queue.value = [];
      frame.value = raf(function () {
        var memoState;
        queue.value.forEach(function (queueState) {
          memoState = _extends(_extends({}, memoState), queueState);
        });

        _extends(state, memoState);

        frame.value = null;
      });
    }

    queue.value.push(newState);
  };

  onMounted(function () {
    frame.value && raf.cancel(frame.value);
  });
  return [state, setFrameState];
}