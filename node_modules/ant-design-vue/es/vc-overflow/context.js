import { computed, defineComponent, inject, provide } from 'vue';
var OverflowContextProviderKey = Symbol('OverflowContextProviderKey');
export var OverflowContextProvider = defineComponent({
  name: 'OverflowContextProvider',
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    provide(OverflowContextProviderKey, computed(function () {
      return props.value;
    }));
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
export var useInjectOverflowContext = function useInjectOverflowContext() {
  return inject(OverflowContextProviderKey, computed(function () {
    return null;
  }));
};