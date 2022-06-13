import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed, inject, provide } from 'vue';
var KeyPathContext = Symbol('KeyPathContext');

var useInjectKeyPath = function useInjectKeyPath() {
  return inject(KeyPathContext, {
    parentEventKeys: computed(function () {
      return [];
    }),
    parentKeys: computed(function () {
      return [];
    }),
    parentInfo: {}
  });
};

var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
      parentEventKeys = _useInjectKeyPath.parentEventKeys,
      parentKeys = _useInjectKeyPath.parentKeys;

  var eventKeys = computed(function () {
    return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
  });
  var keys = computed(function () {
    return [].concat(_toConsumableArray(parentKeys.value), [key]);
  });
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};

export { useProvideKeyPath, useInjectKeyPath, KeyPathContext };
export default useProvideKeyPath;