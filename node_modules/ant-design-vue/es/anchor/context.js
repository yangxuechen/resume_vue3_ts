import { computed, inject, provide } from 'vue'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

function noop() {}

export var AnchorContextKey = Symbol('anchorContextKey');

var useProvideAnchor = function useProvideAnchor(state) {
  provide(AnchorContextKey, state);
};

var useInjectAnchor = function useInjectAnchor() {
  return inject(AnchorContextKey, {
    registerLink: noop,
    unregisterLink: noop,
    scrollTo: noop,
    activeLink: computed(function () {
      return '';
    }),
    handleClick: noop
  });
};

export { useInjectAnchor, useProvideAnchor };
export default useProvideAnchor;