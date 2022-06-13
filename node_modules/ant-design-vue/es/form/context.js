import { inject, provide, computed } from 'vue';
export var FormContextKey = Symbol('formContextKey');
export var useProvideForm = function useProvideForm(state) {
  provide(FormContextKey, state);
};
export var useInjectForm = function useInjectForm() {
  return inject(FormContextKey, {
    labelAlign: computed(function () {
      return 'right';
    }),
    vertical: computed(function () {
      return false;
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: function addField(_eventKey, _field) {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: function removeField(_eventKey) {},
    model: computed(function () {
      return undefined;
    }),
    rules: computed(function () {
      return undefined;
    }),
    requiredMark: computed(function () {
      return false;
    })
  });
};
export var FormItemPrefixContextKey = Symbol('formItemPrefixContextKey');
export var useProvideFormItemPrefix = function useProvideFormItemPrefix(state) {
  provide(FormItemPrefixContextKey, state);
};
export var useInjectFormItemPrefix = function useInjectFormItemPrefix() {
  return inject(FormItemPrefixContextKey, {
    prefixCls: computed(function () {
      return '';
    })
  });
};