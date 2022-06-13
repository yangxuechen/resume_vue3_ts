"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BasePopup = _interopRequireDefault(require("../Base/BasePopup"));

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

var _util = require("../util");

var SinglePopup = {
  name: 'SinglePopup',
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, _BasePopup.default.props), _SearchInput.default.props), {
    searchValue: _vueTypes.default.string,
    showSearch: _vueTypes.default.looseBool,
    dropdownPrefixCls: _vueTypes.default.string,
    disabled: _vueTypes.default.looseBool,
    searchPlaceholder: _vueTypes.default.string
  }),
  created: function created() {
    this.inputRef = (0, _util.createRef)();
    this.searchRef = (0, _util.createRef)();
    this.popupRef = (0, _util.createRef)();
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

      return (0, _vue.createVNode)("span", {
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

      return (0, _vue.createVNode)("span", {
        "class": "".concat(dropdownPrefixCls, "-search"),
        "ref": this.searchRef
      }, [(0, _vue.createVNode)(_SearchInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs), {
        renderPlaceholder: this._renderPlaceholder
      })), {}, {
        "ref": this.inputRef
      }), null)]);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_BasePopup.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs), {
      renderSearch: this._renderSearch
    })), {}, {
      "ref": this.popupRef,
      "__propsSymbol__": []
    }), null);
  }
};
var _default = SinglePopup;
exports.default = _default;