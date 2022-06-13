import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import generateSelector, { selectorPropTypes } from '../Base/BaseSelector';
import { toTitle } from '../util';
import { getOptionProps } from '../../../_util/props-util';
import { createRef } from '../util';
import SearchInput from '../SearchInput';
var Selector = generateSelector('single');
var SingleSelector = {
  name: 'SingleSelector',
  inheritAttrs: false,
  props: selectorPropTypes(),
  created: function created() {
    this.selectorRef = createRef();
    this.inputRef = createRef();
  },
  data: function data() {
    return {
      mirrorSearchValue: this.searchValue
    };
  },
  watch: {
    searchValue: function searchValue(val) {
      this.mirrorSearchValue = val;
    }
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    focus: function focus() {
      this.selectorRef.current.focus();
    },
    blur: function blur() {
      this.selectorRef.current.blur();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          placeholder = _this$$props.placeholder,
          searchPlaceholder = _this$$props.searchPlaceholder,
          selectorValueList = _this$$props.selectorValueList;
      var currentPlaceholder = placeholder || searchPlaceholder;
      if (!currentPlaceholder) return null;
      var hidden = this.mirrorSearchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

      return _createVNode("span", {
        "style": {
          display: hidden ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [currentPlaceholder]);
    },
    onMirrorSearchValueChange: function onMirrorSearchValueChange(value) {
      this.mirrorSearchValue = value;
    },
    renderSelection: function renderSelection() {
      var _this$$props2 = this.$props,
          selectorValueList = _this$$props2.selectorValueList,
          prefixCls = _this$$props2.prefixCls;
      var selectedValueNodes = [];

      if (selectorValueList.length && !this.mirrorSearchValue) {
        var _selectorValueList$ = selectorValueList[0],
            label = _selectorValueList$.label,
            value = _selectorValueList$.value;
        selectedValueNodes.push(_createVNode("span", {
          "key": value,
          "title": toTitle(label),
          "class": "".concat(prefixCls, "-selection-item")
        }, [label || value]));
      }

      selectedValueNodes.push(_createVNode(SearchInput, _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
        "ref": this.inputRef,
        "isMultiple": false,
        "onMirrorSearchValueChange": this.onMirrorSearchValueChange
      }), null));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var props = _extends(_extends(_extends({}, getOptionProps(this)), this.$attrs), {
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder,
      ref: this.selectorRef
    });

    return _createVNode(Selector, props, null);
  }
};
export default SingleSelector;