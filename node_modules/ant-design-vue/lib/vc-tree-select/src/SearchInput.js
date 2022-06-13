"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _BaseInput = _interopRequireDefault(require("../../_util/BaseInput"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _util = require("./util");

/**
 * Since search box is in different position with different mode.
 * - Single: in the popup box
 * - multiple: in the selector
 * Move the code as a SearchInput for easy management.
 */
var SearchInput = {
  name: 'SearchInput',
  inheritAttrs: false,
  props: {
    open: _vueTypes.default.looseBool,
    searchValue: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool,
    renderPlaceholder: _vueTypes.default.func,
    needAlign: _vueTypes.default.looseBool,
    ariaId: _vueTypes.default.string,
    isMultiple: _vueTypes.default.looseBool.def(true),
    showSearch: _vueTypes.default.looseBool
  },
  emits: ['mirrorSearchValueChange'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var measureRef = (0, _vue.ref)();
    var inputWidth = (0, _vue.ref)(0);
    var mirrorSearchValue = (0, _vue.ref)(props.searchValue);
    (0, _vue.watch)((0, _vue.computed)(function () {
      return props.searchValue;
    }), function () {
      mirrorSearchValue.value = props.searchValue;
    });
    (0, _vue.watch)(mirrorSearchValue, function () {
      emit('mirrorSearchValueChange', mirrorSearchValue.value);
    }, {
      immediate: true
    }); // We measure width and set to the input immediately

    (0, _vue.onMounted)(function () {
      if (props.isMultiple) {
        (0, _vue.watch)(mirrorSearchValue, function () {
          inputWidth.value = measureRef.value.scrollWidth;
        }, {
          flush: 'post',
          immediate: true
        });
      }
    });
    return {
      measureRef: measureRef,
      inputWidth: inputWidth,
      vcTreeSelect: (0, _vue.inject)('vcTreeSelect', {}),
      mirrorSearchValue: mirrorSearchValue
    };
  },
  created: function created() {
    this.inputRef = (0, _util.createRef)();
    this.prevProps = (0, _extends2.default)({}, this.$props);
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var open = _this.$props.open;

      if (open) {
        _this.focus(true);
      }
    });
  },
  updated: function updated() {
    var _this2 = this;

    var open = this.$props.open;
    var prevProps = this.prevProps;
    this.$nextTick(function () {
      if (open && prevProps.open !== open) {
        _this2.focus();
      }

      _this2.prevProps = (0, _extends2.default)({}, _this2.$props);
    });
  },
  methods: {
    /**
     * Need additional timeout for focus cause parent dom is not ready when didMount trigger
     */
    focus: function focus(isDidMount) {
      var _this3 = this;

      if (this.inputRef.current) {
        if (isDidMount) {
          setTimeout(function () {
            _this3.inputRef.current.focus();
          }, 0);
        } else {
          // set it into else, Avoid scrolling when focus
          this.inputRef.current.focus();
        }
      }
    },
    blur: function blur() {
      if (this.inputRef.current) {
        this.inputRef.current.blur();
      }
    },
    handleInputChange: function handleInputChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing;
      var _this$searchValue = this.searchValue,
          searchValue = _this$searchValue === void 0 ? '' : _this$searchValue;

      if (e.isComposing || composing || searchValue === value) {
        this.mirrorSearchValue = value;
        return;
      }

      this.vcTreeSelect.onSearchInputChange(e);
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        searchValue = _this$$props.searchValue,
        prefixCls = _this$$props.prefixCls,
        disabled = _this$$props.disabled,
        renderPlaceholder = _this$$props.renderPlaceholder,
        open = _this$$props.open,
        ariaId = _this$$props.ariaId,
        isMultiple = _this$$props.isMultiple,
        showSearch = _this$$props.showSearch;
    var onSearchInputKeyDown = this.vcTreeSelect.onSearchInputKeyDown,
        handleInputChange = this.handleInputChange,
        mirrorSearchValue = this.mirrorSearchValue,
        inputWidth = this.inputWidth;
    return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-selection-search"),
      "style": isMultiple ? {
        width: inputWidth + 'px'
      } : {}
    }, [(0, _vue.createVNode)(_BaseInput.default, {
      "type": "text",
      "ref": this.inputRef,
      "onChange": handleInputChange,
      "onKeydown": onSearchInputKeyDown,
      "value": searchValue,
      "disabled": disabled,
      "readonly": !showSearch,
      "class": "".concat(prefixCls, "-selection-search-input"),
      "aria-label": "filter select",
      "aria-autocomplete": "list",
      "aria-controls": open ? ariaId : undefined,
      "aria-multiline": "false"
    }, null), isMultiple ? (0, _vue.createVNode)("span", {
      "ref": "measureRef",
      "class": "".concat(prefixCls, "-selection-search-mirror"),
      "aria-hidden": true
    }, [mirrorSearchValue, (0, _vue.createTextVNode)("\xA0")]) : null]), renderPlaceholder && !mirrorSearchValue ? renderPlaceholder() : null]);
  }
};
var _default = SearchInput;
exports.default = _default;