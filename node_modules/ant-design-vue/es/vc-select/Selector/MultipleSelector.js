import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Fragment as _Fragment, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import TransBtn from '../TransBtn';
import Input from './Input';
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import classNames from '../../_util/classNames';
import pickAttrs from '../../_util/pickAttrs';
import PropTypes from '../../_util/vue-types';
import Overflow from '../../vc-overflow';
var props = {
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
  removeIcon: PropTypes.VNodeChild,
  choiceTransitionName: PropTypes.string,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxTagTextLength: PropTypes.number,
  maxTagPlaceholder: PropTypes.any.def(function () {
    return function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: PropTypes.func,
  onToggleOpen: {
    type: Function
  },
  onSelect: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputPaste: PropTypes.func,
  onInputKeyDown: PropTypes.func,
  onInputMouseDown: PropTypes.func,
  onInputCompositionStart: PropTypes.func,
  onInputCompositionEnd: PropTypes.func
};

var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = defineComponent({
  name: 'MultipleSelectSelector',
  inheritAttrs: false,
  props: props,
  setup: function setup(props) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var selectionPrefixCls = computed(function () {
      return "".concat(props.prefixCls, "-selection");
    }); // ===================== Search ======================

    var inputValue = computed(function () {
      return props.open || props.mode === 'tags' ? props.searchValue : '';
    });
    var inputEditable = computed(function () {
      return props.mode === 'tags' || props.showSearch && (props.open || focused.value);
    }); // We measure width and set to the input immediately

    onMounted(function () {
      watch(inputValue, function () {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: 'post',
        immediate: true
      });
    }); // ===================== Render ======================
    // >>> Render Selector Node. Includes Item & Rest

    function defaultRenderSelector(content, itemDisabled, closable, onClose) {
      return _createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled))
      }, [_createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && _createVNode(TransBtn, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props.removeIcon
      }, {
        default: function _default() {
          return [_createTextVNode("\xD7")];
        }
      })]);
    }

    function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
      var onMouseDown = function onMouseDown(e) {
        onPreventMouseDown(e);
        props.onToggleOpen(!open);
      };

      return _createVNode("span", {
        "onMousedown": onMouseDown
      }, [props.tagRender({
        label: content,
        value: value,
        disabled: itemDisabled,
        closable: closable,
        onClose: onClose
      })]);
    }

    function renderItem(_ref) {
      var itemDisabled = _ref.disabled,
          label = _ref.label,
          value = _ref.value;
      var closable = !props.disabled && !itemDisabled;
      var displayLabel = label;

      if (typeof props.maxTagTextLength === 'number') {
        if (typeof label === 'string' || typeof label === 'number') {
          var strLabel = String(displayLabel);

          if (strLabel.length > props.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props.maxTagTextLength), "...");
          }
        }
      }

      var onClose = function onClose(event) {
        if (event) event.stopPropagation();
        props.onSelect(value, {
          selected: false
        });
      };

      return typeof props.tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(displayLabel, itemDisabled, closable, onClose);
    }

    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props.maxTagPlaceholder,
          maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
        return "+ ".concat(omittedValues.length, " ...");
      } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, false);
    }

    return function () {
      var id = props.id,
          prefixCls = props.prefixCls,
          values = props.values,
          open = props.open,
          inputRef = props.inputRef,
          placeholder = props.placeholder,
          disabled = props.disabled,
          autofocus = props.autofocus,
          autocomplete = props.autocomplete,
          accessibilityIndex = props.accessibilityIndex,
          tabindex = props.tabindex,
          onInputChange = props.onInputChange,
          onInputPaste = props.onInputPaste,
          onInputKeyDown = props.onInputKeyDown,
          onInputMouseDown = props.onInputMouseDown,
          onInputCompositionStart = props.onInputCompositionStart,
          onInputCompositionEnd = props.onInputCompositionEnd; // >>> Input Node

      var inputNode = _createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + 'px'
        },
        "key": "input"
      }, [_createVNode(Input, {
        "inputRef": inputRef,
        "open": open,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "accessibilityIndex": accessibilityIndex,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props, true),
        "onFocus": function onFocus() {
          return focused.value = true;
        },
        "onBlur": function onBlur() {
          return focused.value = false;
        }
      }, null), _createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, _createTextVNode("\xA0")])]); // >>> Selections


      var selectionNode = _createVNode(Overflow, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props.maxTagCount,
        "key": "overflow"
      }, null);

      return _createVNode(_Fragment, null, [selectionNode, !values.length && !inputValue.value && _createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
export default SelectSelector;