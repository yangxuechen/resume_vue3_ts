"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _MultipleSelector = _interopRequireDefault(require("./MultipleSelector"));

var _SingleSelector = _interopRequireDefault(require("./SingleSelector"));

var _useLock3 = _interopRequireDefault(require("../hooks/useLock"));

var _createRef = _interopRequireDefault(require("../../_util/createRef"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */
var Selector = (0, _vue.defineComponent)({
  name: 'Selector',
  inheritAttrs: false,
  props: {
    id: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    showSearch: _vueTypes.default.looseBool,
    open: _vueTypes.default.looseBool,

    /** Display in the Selector value, it's not same as `value` prop */
    values: _vueTypes.default.array,
    multiple: _vueTypes.default.looseBool,
    mode: _vueTypes.default.string,
    searchValue: _vueTypes.default.string,
    activeValue: _vueTypes.default.string,
    inputElement: _vueTypes.default.any,
    autofocus: _vueTypes.default.looseBool,
    accessibilityIndex: _vueTypes.default.number,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    disabled: _vueTypes.default.looseBool,
    placeholder: _vueTypes.default.any,
    removeIcon: _vueTypes.default.any,
    // Tags
    maxTagCount: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    maxTagTextLength: _vueTypes.default.number,
    maxTagPlaceholder: _vueTypes.default.any,
    tagRender: _vueTypes.default.func,

    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: _vueTypes.default.looseBool,
    // Motion
    choiceTransitionName: _vueTypes.default.string,
    onToggleOpen: {
      type: Function
    },

    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: _vueTypes.default.func,
    onSearchSubmit: _vueTypes.default.func,
    onSelect: _vueTypes.default.func,
    onInputKeyDown: {
      type: Function
    },

    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: _vueTypes.default.func
  },
  setup: function setup(props) {
    var inputRef = (0, _createRef.default)();
    var compositionStatus = false; // ====================== Input ======================

    var _useLock = (0, _useLock3.default)(0),
        _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
        getInputMouseDown = _useLock2[0],
        setInputMouseDown = _useLock2[1];

    var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
      var which = event.which;

      if (which === _KeyCode.default.UP || which === _KeyCode.default.DOWN) {
        event.preventDefault();
      }

      if (props.onInputKeyDown) {
        props.onInputKeyDown(event);
      }

      if (which === _KeyCode.default.ENTER && props.mode === 'tags' && !compositionStatus && !props.open) {
        // When menu isn't open, OptionList won't trigger a value change
        // So when enter is pressed, the tag's input value should be emitted here to let selector know
        props.onSearchSubmit(event.target.value);
      }

      if (![_KeyCode.default.SHIFT, _KeyCode.default.TAB, _KeyCode.default.BACKSPACE, _KeyCode.default.ESC].includes(which)) {
        props.onToggleOpen(true);
      }
    };
    /**
     * We can not use `findDOMNode` sine it will get warning,
     * have to use timer to check if is input element.
     */


    var onInternalInputMouseDown = function onInternalInputMouseDown() {
      setInputMouseDown(true);
    }; // When paste come, ignore next onChange


    var pastedText = null;

    var triggerOnSearch = function triggerOnSearch(value) {
      if (props.onSearch(value, true, compositionStatus) !== false) {
        props.onToggleOpen(true);
      }
    };

    var onInputCompositionStart = function onInputCompositionStart() {
      compositionStatus = true;
    };

    var onInputCompositionEnd = function onInputCompositionEnd(e) {
      compositionStatus = false; // Trigger search again to support `tokenSeparators` with typewriting

      if (props.mode !== 'combobox') {
        triggerOnSearch(e.target.value);
      }
    };

    var onInputChange = function onInputChange(event) {
      var value = event.target.value; // Pasted text should replace back to origin content

      if (props.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        // CRLF will be treated as a single space for input element
        var replacedText = pastedText.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
        value = value.replace(replacedText, pastedText);
      }

      pastedText = null;
      triggerOnSearch(value);
    };

    var onInputPaste = function onInputPaste(e) {
      var clipboardData = e.clipboardData;
      var value = clipboardData.getData('text');
      pastedText = value;
    };

    var onClick = function onClick(_ref) {
      var target = _ref.target;

      if (target !== inputRef.current) {
        // Should focus input if click the selector
        var isIE = document.body.style.msTouchAction !== undefined;

        if (isIE) {
          setTimeout(function () {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };

    var onMousedown = function onMousedown(event) {
      var inputMouseDown = getInputMouseDown();

      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }

      if (props.mode !== 'combobox' && (!props.showSearch || !inputMouseDown) || !props.open) {
        if (props.open) {
          props.onSearch('', true, false);
        }

        props.onToggleOpen();
      }
    };

    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      },
      onMousedown: onMousedown,
      onClick: onClick,
      onInputPaste: onInputPaste,
      inputRef: inputRef,
      onInternalInputKeyDown: onInternalInputKeyDown,
      onInternalInputMouseDown: onInternalInputMouseDown,
      onInputChange: onInputChange,
      onInputCompositionEnd: onInputCompositionEnd,
      onInputCompositionStart: onInputCompositionStart
    };
  },
  render: function render() {
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        domRef = _this$$props.domRef,
        multiple = _this$$props.multiple;
    var onMousedown = this.onMousedown,
        onClick = this.onClick,
        inputRef = this.inputRef,
        onInputPaste = this.onInputPaste,
        onInternalInputKeyDown = this.onInternalInputKeyDown,
        onInternalInputMouseDown = this.onInternalInputMouseDown,
        onInputChange = this.onInputChange,
        onInputCompositionStart = this.onInputCompositionStart,
        onInputCompositionEnd = this.onInputCompositionEnd;
    var sharedProps = {
      inputRef: inputRef,
      onInputKeyDown: onInternalInputKeyDown,
      onInputMouseDown: onInternalInputMouseDown,
      onInputChange: onInputChange,
      onInputPaste: onInputPaste,
      onInputCompositionStart: onInputCompositionStart,
      onInputCompositionEnd: onInputCompositionEnd
    };
    var selectNode = multiple ? (0, _vue.createVNode)(_MultipleSelector.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), sharedProps), null) : (0, _vue.createVNode)(_SingleSelector.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), sharedProps), null);
    return (0, _vue.createVNode)("div", {
      "ref": domRef,
      "class": "".concat(prefixCls, "-selector"),
      "onClick": onClick,
      "onMousedown": onMousedown
    }, [selectNode]);
  }
});
var _default = Selector;
exports.default = _default;