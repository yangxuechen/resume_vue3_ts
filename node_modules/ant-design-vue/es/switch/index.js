import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, onBeforeMount, ref, computed, onMounted, nextTick, watch } from 'vue';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import PropTypes from '../_util/vue-types';
import KeyCode from '../_util/KeyCode';
import Wave from '../_util/wave';
import warning from '../_util/warning';
import { tuple, withInstall } from '../_util/type';
import { getPropsSlot } from '../_util/props-util';
import Omit from 'omit.js';
import useConfigInject from '../_util/hooks/useConfigInject';
export var SwitchSizes = tuple('small', 'default');
var switchProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(SwitchSizes),
  disabled: PropTypes.looseBool,
  checkedChildren: PropTypes.VNodeChild,
  unCheckedChildren: PropTypes.VNodeChild,
  tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autofocus: PropTypes.looseBool,
  loading: PropTypes.looseBool,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]),
  checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(true),
  unCheckedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(false),
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onMouseup: {
    type: Function
  },
  'onUpdate:checked': {
    type: Function
  }
};
var Switch = defineComponent({
  name: 'ASwitch',
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps,
  slots: ['checkedChildren', 'unCheckedChildren'],
  emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit;
    onBeforeMount(function () {
      warning(!('defaultChecked' in attrs), 'Switch', "'defaultChecked' is deprecated, please use 'v-model:checked'");
      warning(!('value' in attrs), 'Switch', '`value` is not validate prop, do you mean `checked`?');
    });
    var checked = ref(props.checked !== undefined ? props.checked : attrs.defaultChecked);
    var checkedStatus = computed(function () {
      return checked.value === props.checkedValue;
    });
    watch(function () {
      return props.checked;
    }, function () {
      checked.value = props.checked;
    });

    var _useConfigInject = useConfigInject('switch', props),
        prefixCls = _useConfigInject.prefixCls;

    var refSwitchNode = ref();

    var focus = function focus() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.focus();
    };

    var blur = function blur() {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
    };

    expose({
      focus: focus,
      blur: blur
    });
    onMounted(function () {
      nextTick(function () {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });

    var setChecked = function setChecked(check, e) {
      if (props.disabled) {
        return;
      }

      emit('update:checked', check);
      emit('change', check, e);
    };

    var handleClick = function handleClick(e) {
      focus();
      var newChecked = checkedStatus.value ? props.unCheckedValue : props.checkedValue;
      setChecked(newChecked, e);
      emit('click', newChecked, e);
    };

    var handleKeyDown = function handleKeyDown(e) {
      if (e.keyCode === KeyCode.LEFT) {
        setChecked(props.unCheckedValue, e);
      } else if (e.keyCode === KeyCode.RIGHT) {
        setChecked(props.checkedValue, e);
      }

      emit('keydown', e);
    };

    var handleMouseUp = function handleMouseUp(e) {
      var _a;

      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
      emit('mouseup', e);
    };

    var classNames = computed(function () {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-small"), props.size === 'small'), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), _defineProperty(_ref2, "".concat(prefixCls.value, "-checked"), checkedStatus.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), _defineProperty(_ref2, prefixCls.value, true), _ref2;
    });
    return function () {
      return _createVNode(Wave, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [_createVNode("button", _objectSpread(_objectSpread(_objectSpread({}, Omit(props, ['prefixCls', 'checkedChildren', 'unCheckedChildren', 'checked', 'autofocus', 'defaultChecked', 'checkedValue', 'unCheckedValue'])), attrs), {}, {
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": [attrs.class, classNames.value],
            "ref": refSwitchNode
          }), [props.loading ? _createVNode(LoadingOutlined, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null, _createVNode("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checkedStatus.value ? getPropsSlot(slots, props, 'checkedChildren') : getPropsSlot(slots, props, 'unCheckedChildren')])])];
        }
      });
    };
  }
});
export default withInstall(Switch);