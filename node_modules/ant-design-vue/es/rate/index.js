import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import { watch } from 'vue';
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { initDefaultProps, getPropsSlot, findDOMNode } from '../_util/props-util';
import { withInstall } from '../_util/type';
import { getOffsetLeft } from './util';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import KeyCode from '../_util/KeyCode';
import StarFilled from '@ant-design/icons-vue/StarFilled';
import Tooltip from '../tooltip';
import useConfigInject from '../_util/hooks/useConfigInject';
import Star from './Star';
import { useRef } from '../_util/hooks/useRef';
export var rateProps = {
  prefixCls: PropTypes.string,
  count: PropTypes.number,
  value: PropTypes.number,
  allowHalf: PropTypes.looseBool,
  allowClear: PropTypes.looseBool,
  tooltips: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.looseBool,
  character: PropTypes.any,
  autofocus: PropTypes.looseBool,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.string
};
var Rate = defineComponent({
  name: 'ARate',
  inheritAttrs: false,
  props: initDefaultProps(rateProps, {
    value: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    prefixCls: 'ant-rate',
    tabindex: 0,
    direction: 'ltr'
  }),
  emits: ['hoverChange', 'update:value', 'change', 'focus', 'blur', 'keydown'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit,
        expose = _ref.expose;

    var _useConfigInject = useConfigInject('rate', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var rateRef = ref();

    var _useRef = useRef(),
        _useRef2 = _slicedToArray(_useRef, 2),
        setRef = _useRef2[0],
        starRefs = _useRef2[1];

    var state = reactive({
      value: props.value,
      focused: false,
      cleanedValue: null,
      hoverValue: undefined
    });
    watch(function () {
      return props.value;
    }, function () {
      state.value = props.value;
    });

    var getStarDOM = function getStarDOM(index) {
      return findDOMNode(starRefs.value[index]);
    };

    var getStarValue = function getStarValue(index, x) {
      var reverse = direction.value === 'rtl';
      var value = index + 1;

      if (props.allowHalf) {
        var starEle = getStarDOM(index);
        var leftDis = getOffsetLeft(starEle);
        var width = starEle.clientWidth;

        if (reverse && x - leftDis > width / 2) {
          value -= 0.5;
        } else if (!reverse && x - leftDis < width / 2) {
          value -= 0.5;
        }
      }

      return value;
    };

    var changeValue = function changeValue(value) {
      if (props.value === undefined) {
        state.value = value;
      }

      emit('update:value', value);
      emit('change', value);
    };

    var onHover = function onHover(e, index) {
      var hoverValue = getStarValue(index, e.pageX);

      if (hoverValue !== state.cleanedValue) {
        state.hoverValue = hoverValue;
        state.cleanedValue = null;
      }

      emit('hoverChange', hoverValue);
    };

    var onMouseLeave = function onMouseLeave() {
      state.hoverValue = undefined;
      state.cleanedValue = null;
      emit('hoverChange', undefined);
    };

    var onClick = function onClick(event, index) {
      var allowClear = props.allowClear;
      var newValue = getStarValue(index, event.pageX);
      var isReset = false;

      if (allowClear) {
        isReset = newValue === state.value;
      }

      onMouseLeave();
      changeValue(isReset ? 0 : newValue);
      state.cleanedValue = isReset ? newValue : null;
    };

    var onFocus = function onFocus() {
      state.focused = true;
      emit('focus');
    };

    var onBlur = function onBlur() {
      state.focused = false;
      emit('blur');
    };

    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;
      var count = props.count,
          allowHalf = props.allowHalf;
      var reverse = direction.value === 'rtl';

      if (keyCode === KeyCode.RIGHT && state.value < count && !reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }

        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && state.value > 0 && !reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }

        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.RIGHT && state.value > 0 && reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }

        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && state.value < count && reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }

        changeValue(state.value);
        event.preventDefault();
      }

      emit('keydown', event);
    };

    var focus = function focus() {
      if (!props.disabled) {
        rateRef.value.focus();
      }
    };

    var blur = function blur() {
      if (!props.disabled) {
        rateRef.value.blur();
      }
    };

    expose({
      focus: focus,
      blur: blur
    });
    onMounted(function () {
      var autofocus = props.autofocus,
          disabled = props.disabled;

      if (autofocus && !disabled) {
        focus();
      }
    });

    var characterRender = function characterRender(node, _ref2) {
      var index = _ref2.index;
      var tooltips = props.tooltips;
      if (!tooltips) return node;
      return _createVNode(Tooltip, {
        "title": tooltips[index]
      }, {
        default: function _default() {
          return [node];
        }
      });
    };

    var character = getPropsSlot(slots, props, 'character') || _createVNode(StarFilled, null, null);

    return function () {
      var count = props.count,
          allowHalf = props.allowHalf,
          disabled = props.disabled,
          tabindex = props.tabindex;
      var className = attrs.class,
          style = attrs.style;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls.value, "-disabled") : '';

      var _loop = function _loop(index) {
        stars.push(_createVNode(Star, {
          "ref": function ref(r) {
            return setRef(r, index);
          },
          "key": index,
          "index": index,
          "count": count,
          "disabled": disabled,
          "prefixCls": "".concat(prefixCls.value, "-star"),
          "allowHalf": allowHalf,
          "value": state.hoverValue === undefined ? state.value : state.hoverValue,
          "onClick": onClick,
          "onHover": onHover,
          "character": character,
          "characterRender": characterRender,
          "focused": state.focused
        }, null));
      };

      for (var index = 0; index < count; index++) {
        _loop(index);
      }

      var rateClassName = classNames(prefixCls.value, disabledClass, className, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      return _createVNode("ul", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": rateClassName,
        "style": style,
        "onMouseleave": disabled ? null : onMouseLeave,
        "tabindex": disabled ? -1 : tabindex,
        "onFocus": disabled ? null : onFocus,
        "onBlur": disabled ? null : onBlur,
        "onKeydown": disabled ? null : onKeyDown,
        "ref": rateRef,
        "role": "radiogroup"
      }), [stars]);
    };
  }
});
export default withInstall(Rate);