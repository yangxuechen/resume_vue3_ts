import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BasePopup from '../Base/BasePopup';
import SearchInput from '../SearchInput';
import { createRef } from '../util';
var SinglePopup = {
  name: 'SinglePopup',
  inheritAttrs: false,
  props: _extends(_extends(_extends({}, BasePopup.props), SearchInput.props), {
    searchValue: PropTypes.string,
    showSearch: PropTypes.looseBool,
    dropdownPrefixCls: PropTypes.string,
    disabled: PropTypes.looseBool,
    searchPlaceholder: PropTypes.string
  }),
  created: function created() {
    this.inputRef = createRef();
    this.searchRef = createRef();
    this.popupRef = createRef();
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    getTree: function getTree() {
      return this.popupRef.current && this.popupRef.current.getTree();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          searchPlaceholder = _this$$props.searchPlaceholder,
          searchValue = _this$$props.searchValue,
          prefixCls = _this$$props.prefixCls;

      if (!searchPlaceholder) {
        return null;
      }

      return _createVNode("span", {
        "style": {
          display: searchValue ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [searchPlaceholder]);
    },
    _renderSearch: function _renderSearch() {
      var _this$$props2 = this.$props,
          showSearch = _this$$props2.showSearch,
          dropdownPrefixCls = _this$$props2.dropdownPrefixCls;

      if (!showSearch) {
        return null;
      }

      return _createVNode("span", {
        "class": "".concat(dropdownPrefixCls, "-search"),
        "ref": this.searchRef
      }, [_createVNode(SearchInput, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
        renderPlaceholder: this._renderPlaceholder
      })), {}, {
        "ref": this.inputRef
      }), null)]);
    }
  },
  render: function render() {
    return _createVNode(BasePopup, _objectSpread(_objectSpread({}, _extends(_extends(_extends({}, this.$props), this.$attrs), {
      renderSearch: this._renderSearch
    })), {}, {
      "ref": this.popupRef,
      "__propsSymbol__": []
    }), null);
  }
};
export default SinglePopup;