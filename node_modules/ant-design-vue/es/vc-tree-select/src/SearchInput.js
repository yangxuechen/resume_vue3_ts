import _extends from "@babel/runtime/helpers/esm/extends";
import { createTextVNode as _createTextVNode, createVNode as _createVNode, Fragment as _Fragment } from "vue";

/**
 * Since search box is in different position with different mode.
 * - Single: in the popup box
 * - multiple: in the selector
 * Move the code as a SearchInput for easy management.
 */
import BaseInput from '../../_util/BaseInput';
import { inject, ref, onMounted, computed, watch } from 'vue';
import PropTypes from '../../_util/vue-types';
import { createRef } from './util';
var SearchInput = {
  name: 'SearchInput',
  inheritAttrs: false,
  props: {
    open: PropTypes.looseBool,
    searchValue: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.looseBool,
    renderPlaceholder: PropTypes.func,
    needAlign: PropTypes.looseBool,
    ariaId: PropTypes.string,
    isMultiple: PropTypes.looseBool.def(true),
    showSearch: PropTypes.looseBool
  },
  emits: ['mirrorSearchValueChange'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var measureRef = ref();
    var inputWidth = ref(0);
    var mirrorSearchValue = ref(props.searchValue);
    watch(computed(function () {
      return props.searchValue;
    }), function () {
      mirrorSearchValue.value = props.searchValue;
    });
    watch(mirrorSearchValue, function () {
      emit('mirrorSearchValueChange', mirrorSearchValue.value);
    }, {
      immediate: true
    }); // We measure width and set to the input immediately

    onMounted(function () {
      if (props.isMultiple) {
        watch(mirrorSearchValue, function () {
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
      vcTreeSelect: inject('vcTreeSelect', {}),
      mirrorSearchValue: mirrorSearchValue
    };
  },
  created: function created() {
    this.inputRef = createRef();
    this.prevProps = _extends({}, this.$props);
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

      _this2.prevProps = _extends({}, _this2.$props);
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
    return _createVNode(_Fragment, null, [_createVNode("span", {
      "class": "".concat(prefixCls, "-selection-search"),
      "style": isMultiple ? {
        width: inputWidth + 'px'
      } : {}
    }, [_createVNode(BaseInput, {
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
    }, null), isMultiple ? _createVNode("span", {
      "ref": "measureRef",
      "class": "".concat(prefixCls, "-selection-search-mirror"),
      "aria-hidden": true
    }, [mirrorSearchValue, _createTextVNode("\xA0")]) : null]), renderPlaceholder && !mirrorSearchValue ? renderPlaceholder() : null]);
  }
};
export default SearchInput;