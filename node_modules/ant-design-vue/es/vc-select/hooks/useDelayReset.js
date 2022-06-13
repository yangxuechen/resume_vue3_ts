import { onMounted, ref } from 'vue';
/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

export default function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var bool = ref(false);
  var delay;

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delay);
  };

  onMounted(function () {
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