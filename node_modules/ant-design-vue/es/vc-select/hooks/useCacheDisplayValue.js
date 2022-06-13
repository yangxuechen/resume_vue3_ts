import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { computed } from 'vue';
export default function useCacheDisplayValue(values) {
  var prevValues = _toConsumableArray(values.value);

  var mergedValues = computed(function () {
    // Create value - label map
    var valueLabels = new Map();
    prevValues.forEach(function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (value !== label) {
        valueLabels.set(value, label);
      }
    });
    var resultValues = values.value.map(function (item) {
      var cacheLabel = valueLabels.get(item.value);

      if (item.isCacheable && cacheLabel) {
        return _extends(_extends({}, item), {
          label: cacheLabel
        });
      }

      return item;
    });
    prevValues = resultValues;
    return resultValues;
  });
  return mergedValues;
}