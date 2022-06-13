import _extends from "@babel/runtime/helpers/esm/extends";
import { withDirectives as _withDirectives, createVNode as _createVNode, vShow as _vShow } from "vue";
import { computed, defineComponent, ref, watch } from 'vue';
import Transition from '../../_util/transition';
import { useInjectMenu, MenuContextProvider } from './hooks/useMenuContext';
import SubMenuList from './SubMenuList';
export default defineComponent({
  name: 'InlineSubMenuList',
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var fixedMode = computed(function () {
      return 'inline';
    });

    var _useInjectMenu = useInjectMenu(),
        motion = _useInjectMenu.motion,
        mode = _useInjectMenu.mode,
        defaultMotions = _useInjectMenu.defaultMotions;

    var sameModeRef = computed(function () {
      return mode.value === fixedMode.value;
    });
    var destroy = ref(!sameModeRef.value);
    var mergedOpen = computed(function () {
      return sameModeRef.value ? props.open : false;
    }); // ================================= Effect =================================
    // Reset destroy state when mode change back

    watch(mode, function () {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: 'post'
    });
    var style = ref({});
    var className = ref('');
    var mergedMotion = computed(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return _extends(_extends({}, res), {
        appear: props.keyPath.length <= 1
      });
    });
    return function () {
      var _a;

      if (destroy.value) {
        return null;
      }

      return _createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: function _default() {
          return [_createVNode(Transition, mergedMotion.value, {
            default: function _default() {
              return [_withDirectives(_createVNode(SubMenuList, {
                "id": props.id,
                "style": style.value,
                "class": className.value
              }, {
                default: function _default() {
                  return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                }
              }), [[_vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});