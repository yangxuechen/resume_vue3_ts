import { onMounted, ref } from 'vue';
import { detectFlexGapSupported } from '../styleChecker';
export default (function () {
  var flexible = ref(false);
  onMounted(function () {
    flexible.value = detectFlexGapSupported();
  });
  return flexible;
});