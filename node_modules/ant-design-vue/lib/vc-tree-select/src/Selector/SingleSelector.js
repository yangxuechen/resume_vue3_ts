"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _BaseSelector = _interopRequireWildcard(require("../Base/BaseSelector"));

var _util = require("../util");

var _propsUtil = require("../../../_util/props-util");

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Selector = (0, _BaseSelector.default)('single');
var SingleSelector = {
  name: 'SingleSelector',
  inheritAttrs: false,
  props: (0, _BaseSelector.selectorPropTypes)(),
  created: function created() {
    this.selectorRef = (0, _util.createRef)();
    this.inputRef = (0, _util.createRef)();
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

      return (0, _vue.createVNode)("span", {
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
        selectedValueNodes.push((0, _vue.createVNode)("span", {
          "key": value,
          "title": (0, _util.toTitle)(label),
          "class": "".concat(prefixCls, "-selection-item")
        }, [label || value]));
      }

      selectedValueNodes.push((0, _vue.createVNode)(_SearchInput.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$attrs), {}, {
        "ref": this.inputRef,
        "isMultiple": false,
        "onMirrorSearchValueChange": this.onMirrorSearchValueChange
      }), null));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var props = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs), {
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder,
      ref: this.selectorRef
    });
    return (0, _vue.createVNode)(Selector, props, null);
  }
};
var _default = SingleSelector;
exports.default = _default;