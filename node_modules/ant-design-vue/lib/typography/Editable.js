"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _TextArea = _interopRequireDefault(require("../input/TextArea"));

var _EnterOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EnterOutlined"));

var Editable = (0, _vue.defineComponent)({
  name: 'Editable',
  props: {
    prefixCls: _vueTypes.default.string,
    value: _vueTypes.default.string,
    maxlength: _vueTypes.default.number,
    autoSize: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]),
    onSave: _vueTypes.default.func,
    onCancel: _vueTypes.default.func,
    onEnd: _vueTypes.default.func,
    onChange: _vueTypes.default.func,
    originContent: _vueTypes.default.string
  },
  emits: ['save', 'cancel', 'end', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var state = (0, _vue.reactive)({
      current: props.value || '',
      lastKeyCode: undefined,
      inComposition: false,
      cancelFlag: false
    });
    (0, _vue.watch)(function () {
      return props.value;
    }, function (current) {
      state.current = current;
    });
    var textArea = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      var _a;

      if (textArea.value) {
        var resizableTextArea = (_a = textArea.value) === null || _a === void 0 ? void 0 : _a.resizableTextArea;
        var innerTextArea = resizableTextArea === null || resizableTextArea === void 0 ? void 0 : resizableTextArea.textArea;
        innerTextArea.focus();
        var length = innerTextArea.value.length;
        innerTextArea.setSelectionRange(length, length);
      }
    });

    function saveTextAreaRef(node) {
      textArea.value = node;
    }

    function onChange(_ref2) {
      var value = _ref2.target.value;
      state.current = value.replace(/[\r\n]/g, '');
      emit('change', state.current);
    }

    function onCompositionStart() {
      state.inComposition = true;
    }

    function onCompositionEnd() {
      state.inComposition = false;
    }

    function onKeyDown(e) {
      var keyCode = e.keyCode;

      if (keyCode === _KeyCode.default.ENTER) {
        e.preventDefault();
      } // We don't record keyCode when IME is using


      if (state.inComposition) return;
      state.lastKeyCode = keyCode;
    }

    function onKeyUp(e) {
      var keyCode = e.keyCode,
          ctrlKey = e.ctrlKey,
          altKey = e.altKey,
          metaKey = e.metaKey,
          shiftKey = e.shiftKey; // Check if it's a real key

      if (state.lastKeyCode === keyCode && !state.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === _KeyCode.default.ENTER) {
          confirmChange();
          emit('end');
        } else if (keyCode === _KeyCode.default.ESC) {
          state.current = props.originContent;
          emit('cancel');
        }
      }
    }

    function onBlur() {
      confirmChange();
      emit('end');
    }

    function confirmChange() {
      emit('save', state.current.trim());
    }

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, " ").concat(props.prefixCls, "-edit-content")
      }, [(0, _vue.createVNode)(_TextArea.default, {
        "ref": saveTextAreaRef,
        "maxlength": props.maxlength,
        "value": state.current,
        "onChange": onChange,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd,
        "onBlur": onBlur,
        "autoSize": props.autoSize === undefined || props.autoSize
      }, null), (0, _vue.createVNode)(_EnterOutlined.default, {
        "class": "".concat(props.prefixCls, "-edit-content-confirm")
      }, null)]);
    };
  }
});
var _default = Editable;
exports.default = _default;