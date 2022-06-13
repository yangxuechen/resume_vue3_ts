import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import { useInjectFormItemPrefix } from './context';
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue';
import classNames from '../_util/classNames';
import Transition, { getTransitionProps } from '../_util/transition';
import useConfigInject from '../_util/hooks/useConfigInject';
export default defineComponent({
  name: 'ErrorList',
  props: ['errors', 'help', 'onDomErrorVisibleChange'],
  setup: function setup(props) {
    var _useConfigInject = useConfigInject('', props),
        rootPrefixCls = _useConfigInject.prefixCls;

    var _useInjectFormItemPre = useInjectFormItemPrefix(),
        prefixCls = _useInjectFormItemPre.prefixCls,
        status = _useInjectFormItemPre.status;

    var visible = ref(!!(props.errors && props.errors.length));
    var innerStatus = ref(status.value);
    var timeout = ref();
    var cacheErrors = ref(_toConsumableArray(props.errors));
    watch([function () {
      return _toConsumableArray(props.errors);
    }, function () {
      return props.help;
    }], function (newValues) {
      window.clearTimeout(timeout.value);

      if (props.help) {
        visible.value = !!(props.errors && props.errors.length);

        if (visible.value) {
          cacheErrors.value = newValues[0];
        }
      } else {
        timeout.value = window.setTimeout(function () {
          visible.value = !!(props.errors && props.errors.length);

          if (visible.value) {
            cacheErrors.value = newValues[0];
          }
        });
      }
    });
    onBeforeUnmount(function () {
      window.clearTimeout(timeout.value);
    }); // Memo status in same visible

    watch([visible, status], function () {
      if (visible.value && status.value) {
        innerStatus.value = status.value;
      }
    });
    watch(visible, function () {
      var _a;

      if (visible.value) {
        (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, true);
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    return function () {
      var _a;

      var baseClassName = "".concat(prefixCls.value, "-item-explain");
      var transitionProps = getTransitionProps("".concat(rootPrefixCls.value, "-show-help"), {
        onAfterLeave: function onAfterLeave() {
          var _a;

          (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, false);
        }
      });
      return _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [visible.value ? _createVNode("div", {
            "class": classNames(baseClassName, _defineProperty({}, "".concat(baseClassName, "-").concat(innerStatus.value), innerStatus.value)),
            "key": "help"
          }, [(_a = cacheErrors.value) === null || _a === void 0 ? void 0 : _a.map(function (error, index) {
            return _createVNode("div", {
              "key": index,
              "role": "alert"
            }, [error]);
          })]) : null];
        }
      });
    };
  }
});