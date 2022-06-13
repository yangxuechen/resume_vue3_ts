import { onMounted, onUnmounted, ref } from 'vue';
import ResponsiveObserve from '../../_util/responsiveObserve';

function useBreakpoint() {
  var screens = ref({});
  var token = null;
  onMounted(function () {
    token = ResponsiveObserve.subscribe(function (supportScreens) {
      screens.value = supportScreens;
    });
  });
  onUnmounted(function () {
    ResponsiveObserve.unsubscribe(token);
  });
  return screens;
}

export default useBreakpoint;