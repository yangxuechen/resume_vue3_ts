import { computed } from 'vue';
import { inject, provide } from 'vue';
export var RowContextKey = Symbol('rowContextKey');

var useProvideRow = function useProvideRow(state) {
  provide(RowContextKey, state);
};

var useInjectRow = function useInjectRow() {
  return inject(RowContextKey, {
    gutter: computed(function () {
      return undefined;
    }),
    wrap: computed(function () {
      return undefined;
    }),
    supportFlexGap: computed(function () {
      return undefined;
    })
  });
};

export { useInjectRow, useProvideRow };
export default useProvideRow;