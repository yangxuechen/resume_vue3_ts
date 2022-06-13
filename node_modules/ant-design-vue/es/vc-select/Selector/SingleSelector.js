import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import pickAttrs from '../../_util/pickAttrs';
import Input from './Input';
import { computed, defineComponent, Fragment, ref, watch } from 'vue';
import PropTypes from '../../_util/vue-types';
var props = {
  inputElement: PropTypes.any,
  id: PropTypes.string,
  prefixCls: PropTypes.string,
  values: PropTypes.array,
  open: PropTypes.looseBool,
  searchValue: PropTypes.string,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: PropTypes.looseBool,
  mode: PropTypes.string,
  showSearch: PropTypes.looseBool,
  autofocus: PropTypes.looseBool,
  autocomplete: PropTypes.string,
  accessibilityIndex: PropTypes.number,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeValue: PropTypes.string,
  backfill: PropTypes.looseBool,
  onInputChange: PropTypes.func,
  onInputPaste: PropTypes.func,
  onInputKeyDown: PropTypes.func,
  onInputMouseDown: PropTypes.func,
  onInputCompositionStart: PropTypes.func,
  onInputCompositionEnd: PropTypes.func
};
var SingleSelector = defineComponent({
  name: 'SingleSelector',
  setup: function setup(props) {
    var inputChanged = ref(false);
    var combobox = computed(function () {
      return props.mode === 'combobox';
    });
    var inputEditable = computed(function () {
      return combobox.value || props.showSearch;
    });
    var inputValue = computed(function () {
      var inputValue = props.searchValue || '';

      if (combobox.value && props.activeValue && !inputChanged.value) {
        inputValue = props.activeValue;
      }

      return inputValue;
    });
    watch([combobox, function () {
      return props.activeValue;
    }], function () {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    }); // Not show text when closed expect combobox mode

    var hasTextInput = computed(function () {
      return props.mode !== 'combobox' && !props.open ? false : !!inputValue.value;
    });
    var title = computed(function () {
      var item = props.values[0];
      return item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;
    });
    return function () {
      var inputElement = props.inputElement,
          prefixCls = props.prefixCls,
          id = props.id,
          values = props.values,
          inputRef = props.inputRef,
          disabled = props.disabled,
          autofocus = props.autofocus,
          autocomplete = props.autocomplete,
          accessibilityIndex = props.accessibilityIndex,
          open = props.open,
          placeholder = props.placeholder,
          tabindex = props.tabindex,
          onInputKeyDown = props.onInputKeyDown,
          onInputMouseDown = props.onInputMouseDown,
          onInputChange = props.onInputChange,
          onInputPaste = props.onInputPaste,
          onInputCompositionStart = props.onInputCompositionStart,
          onInputCompositionEnd = props.onInputCompositionEnd;
      var item = values[0];
      return _createVNode(_Fragment, null, [_createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [_createVNode(Input, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "accessibilityIndex": accessibilityIndex,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e) {
          inputChanged.value = true;
          onInputChange(e);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && _createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [_createVNode(_Fragment, {
        "key": item.key || item.value
      }, [item.label])]), !item && !hasTextInput.value && _createVNode("span", {
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [placeholder])]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
export default SingleSelector;