"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.starProps = void 0;

var _vue = require("vue");

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var starProps = {
  value: _vueTypes.default.number,
  index: _vueTypes.default.number,
  prefixCls: _vueTypes.default.string,
  allowHalf: _vueTypes.default.looseBool,
  disabled: _vueTypes.default.looseBool,
  character: _vueTypes.default.any,
  characterRender: _vueTypes.default.func,
  focused: _vueTypes.default.looseBool,
  count: _vueTypes.default.number,
  onClick: _vueTypes.default.func,
  onHover: _vueTypes.default.func
};
exports.starProps = starProps;

var _default = (0, _vue.defineComponent)({
  name: 'Star',
  inheritAttrs: false,
  props: starProps,
  emits: ['hover', 'click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var onHover = function onHover(e) {
      var index = props.index;
      emit('hover', e, index);
    };

    var onClick = function onClick(e) {
      var index = props.index;
      emit('click', e, index);
    };

    var onKeyDown = function onKeyDown(e) {
      var index = props.index;

      if (e.keyCode === 13) {
        emit('click', e, index);
      }
    };

    var cls = (0, _vue.computed)(function () {
      var prefixCls = props.prefixCls,
          index = props.index,
          value = props.value,
          allowHalf = props.allowHalf,
          focused = props.focused;
      var starValue = index + 1;
      var className = prefixCls;

      if (value === 0 && index === 0 && focused) {
        className += " ".concat(prefixCls, "-focused");
      } else if (allowHalf && value + 0.5 >= starValue && value < starValue) {
        className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");

        if (focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");

        if (starValue === value && focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      }

      return className;
    });
    return function () {
      var disabled = props.disabled,
          prefixCls = props.prefixCls,
          characterRender = props.characterRender,
          index = props.index,
          count = props.count,
          value = props.value;
      var character = (0, _propsUtil.getPropsSlot)(slots, props, 'character');
      var star = (0, _vue.createVNode)("li", {
        "class": cls.value
      }, [(0, _vue.createVNode)("div", {
        "onClick": disabled ? null : onClick,
        "onKeydown": disabled ? null : onKeyDown,
        "onMousemove": disabled ? null : onHover,
        "role": "radio",
        "aria-checked": value > index ? 'true' : 'false',
        "aria-posinset": index + 1,
        "aria-setsize": count,
        "tabindex": disabled ? -1 : 0
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-first")
      }, [character]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-second")
      }, [character])])]);

      if (characterRender) {
        star = characterRender(star, props);
      }

      return star;
    };
  }
});

exports.default = _default;