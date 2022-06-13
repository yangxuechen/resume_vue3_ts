"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _pickAttrs = _interopRequireDefault(require("../../_util/pickAttrs"));

var _Input = _interopRequireDefault(require("./Input"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var props = {
  inputElement: _vueTypes.default.any,
  id: _vueTypes.default.string,
  prefixCls: _vueTypes.default.string,
  values: _vueTypes.default.array,
  open: _vueTypes.default.looseBool,
  searchValue: _vueTypes.default.string,
  inputRef: _vueTypes.default.any,
  placeholder: _vueTypes.default.any,
  disabled: _vueTypes.default.looseBool,
  mode: _vueTypes.default.string,
  showSearch: _vueTypes.default.looseBool,
  autofocus: _vueTypes.default.looseBool,
  autocomplete: _vueTypes.default.string,
  accessibilityIndex: _vueTypes.default.number,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  activeValue: _vueTypes.default.string,
  backfill: _vueTypes.default.looseBool,
  onInputChange: _vueTypes.default.func,
  onInputPaste: _vueTypes.default.func,
  onInputKeyDown: _vueTypes.default.func,
  onInputMouseDown: _vueTypes.default.func,
  onInputCompositionStart: _vueTypes.default.func,
  onInputCompositionEnd: _vueTypes.default.func
};
var SingleSelector = (0, _vue.defineComponent)({
  name: 'SingleSelector',
  setup: function setup(props) {
    var inputChanged = (0, _vue.ref)(false);
    var combobox = (0, _vue.computed)(function () {
      return props.mode === 'combobox';
    });
    var inputEditable = (0, _vue.computed)(function () {
      return combobox.value || props.showSearch;
    });
    var inputValue = (0, _vue.computed)(function () {
      var inputValue = props.searchValue || '';

      if (combobox.value && props.activeValue && !inputChanged.value) {
        inputValue = props.activeValue;
      }

      return inputValue;
    });
    (0, _vue.watch)([combobox, function () {
      return props.activeValue;
    }], function () {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    }); // Not show text when closed expect combobox mode

    var hasTextInput = (0, _vue.computed)(function () {
      return props.mode !== 'combobox' && !props.open ? false : !!inputValue.value;
    });
    var title = (0, _vue.computed)(function () {
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
      return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [(0, _vue.createVNode)(_Input.default, {
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
        "attrs": (0, _pickAttrs.default)(props, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [(0, _vue.createVNode)(_vue.Fragment, {
        "key": item.key || item.value
      }, [item.label])]), !item && !hasTextInput.value && (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [placeholder])]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
var _default = SingleSelector;
exports.default = _default;