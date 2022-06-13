"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TransBtn = _interopRequireDefault(require("../TransBtn"));

var _Input = _interopRequireDefault(require("./Input"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _pickAttrs = _interopRequireDefault(require("../../_util/pickAttrs"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vcOverflow = _interopRequireDefault(require("../../vc-overflow"));

var props = {
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
  removeIcon: _vueTypes.default.VNodeChild,
  choiceTransitionName: _vueTypes.default.string,
  maxTagCount: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  maxTagTextLength: _vueTypes.default.number,
  maxTagPlaceholder: _vueTypes.default.any.def(function () {
    return function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: _vueTypes.default.func,
  onToggleOpen: {
    type: Function
  },
  onSelect: _vueTypes.default.func,
  onInputChange: _vueTypes.default.func,
  onInputPaste: _vueTypes.default.func,
  onInputKeyDown: _vueTypes.default.func,
  onInputMouseDown: _vueTypes.default.func,
  onInputCompositionStart: _vueTypes.default.func,
  onInputCompositionEnd: _vueTypes.default.func
};

var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = (0, _vue.defineComponent)({
  name: 'MultipleSelectSelector',
  inheritAttrs: false,
  props: props,
  setup: function setup(props) {
    var measureRef = (0, _vue.ref)();
    var inputWidth = (0, _vue.ref)(0);
    var focused = (0, _vue.ref)(false);
    var selectionPrefixCls = (0, _vue.computed)(function () {
      return "".concat(props.prefixCls, "-selection");
    }); // ===================== Search ======================

    var inputValue = (0, _vue.computed)(function () {
      return props.open || props.mode === 'tags' ? props.searchValue : '';
    });
    var inputEditable = (0, _vue.computed)(function () {
      return props.mode === 'tags' || props.showSearch && (props.open || focused.value);
    }); // We measure width and set to the input immediately

    (0, _vue.onMounted)(function () {
      (0, _vue.watch)(inputValue, function () {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: 'post',
        immediate: true
      });
    }); // ===================== Render ======================
    // >>> Render Selector Node. Includes Item & Rest

    function defaultRenderSelector(content, itemDisabled, closable, onClose) {
      return (0, _vue.createVNode)("span", {
        "class": (0, _classNames2.default)("".concat(selectionPrefixCls.value, "-item"), (0, _defineProperty2.default)({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled))
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && (0, _vue.createVNode)(_TransBtn.default, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props.removeIcon
      }, {
        default: function _default() {
          return [(0, _vue.createTextVNode)("\xD7")];
        }
      })]);
    }

    function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
      var onMouseDown = function onMouseDown(e) {
        onPreventMouseDown(e);
        props.onToggleOpen(!open);
      };

      return (0, _vue.createVNode)("span", {
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

      var inputNode = (0, _vue.createVNode)("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + 'px'
        },
        "key": "input"
      }, [(0, _vue.createVNode)(_Input.default, {
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
        "attrs": (0, _pickAttrs.default)(props, true),
        "onFocus": function onFocus() {
          return focused.value = true;
        },
        "onBlur": function onBlur() {
          return focused.value = false;
        }
      }, null), (0, _vue.createVNode)("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, (0, _vue.createTextVNode)("\xA0")])]); // >>> Selections

      var selectionNode = (0, _vue.createVNode)(_vcOverflow.default, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props.maxTagCount,
        "key": "overflow"
      }, null);
      return (0, _vue.createVNode)(_vue.Fragment, null, [selectionNode, !values.length && !inputValue.value && (0, _vue.createVNode)("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
var _default2 = SelectSelector;
exports.default = _default2;