import { computed, inject, provide } from 'vue';
import { defaultConfigProvider } from '../../config-provider';
var sizeProvider = Symbol('SizeProvider');

var useProvideSize = function useProvideSize(props) {
  var configProvider = inject('configProvider', defaultConfigProvider);
  var size = computed(function () {
    return props.size || configProvider.componentSize;
  });
  provide(sizeProvider, size);
  return size;
};

var useInjectSize = function useInjectSize(props) {
  var size = props ? computed(function () {
    return props.size;
  }) : inject(sizeProvider, computed(function () {
    return 'default';
  }));
  return size;
};

export { useInjectSize, sizeProvider, useProvideSize };
export default useProvideSize;