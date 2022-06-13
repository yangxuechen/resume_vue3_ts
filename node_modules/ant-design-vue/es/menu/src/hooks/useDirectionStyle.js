import { computed } from 'vue';
import { useInjectMenu } from './useMenuContext';
export default function useDirectionStyle(level) {
  var _useInjectMenu = useInjectMenu(),
      mode = _useInjectMenu.mode,
      rtl = _useInjectMenu.rtl,
      inlineIndent = _useInjectMenu.inlineIndent;

  return computed(function () {
    return mode.value !== 'inline' ? null : rtl.value ? {
      paddingRight: "".concat(level.value * inlineIndent.value, "px")
    } : {
      paddingLeft: "".concat(level.value * inlineIndent.value, "px")
    };
  });
}