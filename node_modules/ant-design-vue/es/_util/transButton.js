import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, ref, onMounted } from 'vue';
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 * This helps accessibility reader to tread as a interactive button to operation.
 */

import KeyCode from './KeyCode';
import PropTypes from './vue-types';
var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = defineComponent({
  name: 'TransButton',
  inheritAttrs: false,
  props: {
    noStyle: PropTypes.looseBool,
    onClick: PropTypes.func,
    disabled: PropTypes.looseBool,
    autofocus: PropTypes.looseBool
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs,
        expose = _ref.expose;
    var domRef = ref();

    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === KeyCode.ENTER) {
        event.preventDefault();
      }
    };

    var onKeyUp = function onKeyUp(event) {
      var keyCode = event.keyCode;

      if (keyCode === KeyCode.ENTER) {
        emit('click', event);
      }
    };

    var onClick = function onClick(e) {
      emit('click', e);
    };

    var focus = function focus() {
      if (domRef.value) {
        domRef.value.focus();
      }
    };

    var blur = function blur() {
      if (domRef.value) {
        domRef.value.blur();
      }
    };

    onMounted(function () {
      if (props.autofocus) {
        focus();
      }
    });
    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _a;

      var noStyle = props.noStyle,
          disabled = props.disabled,
          restProps = __rest(props, ["noStyle", "disabled"]);

      var mergedStyle = {};

      if (!noStyle) {
        mergedStyle = _extends({}, inlineStyle);
      }

      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }

      return _createVNode("div", _objectSpread(_objectSpread(_objectSpread({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": _extends(_extends({}, mergedStyle), attrs.style || {})
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
export default TransButton;