"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _antInputDirective = _interopRequireDefault(require("./antInputDirective"));

var _vueTypes = _interopRequireDefault(require("./vue-types"));

var BaseInput = (0, _vue.defineComponent)({
  props: {
    value: _vueTypes.default.string.def('')
  },
  emits: ['change', 'input'],
  setup: function setup(_p, _ref) {
    var emit = _ref.emit;
    var inputRef = (0, _vue.ref)(null);

    var handleChange = function handleChange(e) {
      var composing = e.target.composing;

      if (e.isComposing || composing) {
        emit('input', e);
      } else {
        emit('input', e);
        emit('change', e);
      }
    };

    return {
      inputRef: inputRef,
      focus: function focus() {
        if (inputRef.value) {
          inputRef.value.focus();
        }
      },
      blur: function blur() {
        if (inputRef.value) {
          inputRef.value.blur();
        }
      },
      handleChange: handleChange
    };
  },
  render: function render() {
    return (0, _vue.withDirectives)((0, _vue.createVNode)("input", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$attrs), {}, {
      "onInput": this.handleChange,
      "onChange": this.handleChange,
      "ref": "inputRef"
    }), null), [[_antInputDirective.default]]);
  }
});
var _default = BaseInput;
exports.default = _default;