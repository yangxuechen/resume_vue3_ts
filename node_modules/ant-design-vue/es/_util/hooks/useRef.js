import { onBeforeUpdate, ref } from 'vue';
export var useRef = function useRef() {
  var refs = ref({});

  var setRef = function setRef(el, key) {
    refs.value[key] = el;
  };

  onBeforeUpdate(function () {
    refs.value = {};
  });
  return [setRef, refs];
};