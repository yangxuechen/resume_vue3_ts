import { createVNode as _createVNode } from "vue";
import KeyCode from '../_util/KeyCode';
import PropTypes from '../_util/vue-types';
import TextArea from '../input/TextArea';
import EnterOutlined from '@ant-design/icons-vue/EnterOutlined';
import { defineComponent, ref, reactive, watch, onMounted } from 'vue';
var Editable = defineComponent({
  name: 'Editable',
  props: {
    prefixCls: PropTypes.string,
    value: PropTypes.string,
    maxlength: PropTypes.number,
    autoSize: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]),
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onEnd: PropTypes.func,
    onChange: PropTypes.func,
    originContent: PropTypes.string
  },
  emits: ['save', 'cancel', 'end', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var state = reactive({
      current: props.value || '',
      lastKeyCode: undefined,
      inComposition: false,
      cancelFlag: false
    });
    watch(function () {
      return props.value;
    }, function (current) {
      state.current = current;
    });
    var textArea = ref();
    onMounted(function () {
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

      if (keyCode === KeyCode.ENTER) {
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
        if (keyCode === KeyCode.ENTER) {
          confirmChange();
          emit('end');
        } else if (keyCode === KeyCode.ESC) {
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
      return _createVNode("div", {
        "class": "".concat(props.prefixCls, " ").concat(props.prefixCls, "-edit-content")
      }, [_createVNode(TextArea, {
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
      }, null), _createVNode(EnterOutlined, {
        "class": "".concat(props.prefixCls, "-edit-content-confirm")
      }, null)]);
    };
  }
});
export default Editable;