import { ref, watch } from 'vue';
export default function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = ref(getValue());
  watch(condition, function (next, pre) {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue();
      }
    } else {
      cacheRef.value = getValue();
    }
  });
  return cacheRef;
}