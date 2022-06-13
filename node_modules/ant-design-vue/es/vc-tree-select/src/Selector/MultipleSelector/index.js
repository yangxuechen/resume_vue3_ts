import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import PropTypes from '../../../../_util/vue-types';
import { createRef } from '../../util';
import generateSelector, { selectorPropTypes } from '../../Base/BaseSelector';
import SearchInput from '../../SearchInput';
import Selection from './Selection';
import { getComponent, getSlot } from '../../../../_util/props-util';
import BaseMixin from '../../../../_util/BaseMixin';
var TREE_SELECT_EMPTY_VALUE_KEY = 'RC_TREE_SELECT_EMPTY_VALUE_KEY';
var Selector = generateSelector('multiple'); // export const multipleSelectorContextTypes = {
//   onMultipleSelectorRemove: PropTypes.func.isRequired,
// }

var MultipleSelector = {
  name: 'MultipleSelector',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends(_extends(_extends({}, selectorPropTypes()), SearchInput.props), {
    selectorValueList: PropTypes.array,
    disabled: PropTypes.looseBool,
    labelInValue: PropTypes.looseBool,
    maxTagCount: PropTypes.number,
    maxTagPlaceholder: PropTypes.any
  }),
  setup: function setup() {
    return {
      vcTreeSelect: inject('vcTreeSelect', {})
    };
  },
  created: function created() {
    this.inputRef = createRef();
  },
  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    focus: function focus() {
      this.inputRef.current.focus();
    },
    blur: function blur() {
      this.inputRef.current.blur();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var _this$$props = this.$props,
          prefixCls = _this$$props.prefixCls,
          placeholder = _this$$props.placeholder,
          searchPlaceholder = _this$$props.searchPlaceholder,
          searchValue = _this$$props.searchValue,
          selectorValueList = _this$$props.selectorValueList;
      var currentPlaceholder = placeholder || searchPlaceholder;
      if (!currentPlaceholder) return null;
      var hidden = searchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

      return _createVNode("span", {
        "style": {
          display: hidden ? 'none' : 'block'
        },
        "onClick": this.onPlaceholderClick,
        "class": "".concat(prefixCls, "-selection-placeholder")
      }, [currentPlaceholder]);
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.__emit.apply(this, ['choiceAnimationLeave'].concat(args));
    },
    renderSelection: function renderSelection() {
      var _this = this;

      var _this$$props2 = this.$props,
          selectorValueList = _this$$props2.selectorValueList,
          labelInValue = _this$$props2.labelInValue,
          maxTagCount = _this$$props2.maxTagCount;
      var children = getSlot(this);
      var onMultipleSelectorRemove = this.vcTreeSelect.onMultipleSelectorRemove; // Check if `maxTagCount` is set

      var myValueList = selectorValueList;

      if (maxTagCount >= 0) {
        myValueList = selectorValueList.slice(0, maxTagCount);
      } // Selector node list


      var selectedValueNodes = myValueList.map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return _createVNode(Selection, _objectSpread(_objectSpread({}, _extends(_extends({}, _this.$props), {
          label: label,
          value: value,
          onRemove: onMultipleSelectorRemove
        })), {}, {
          "key": value || TREE_SELECT_EMPTY_VALUE_KEY
        }), {
          default: function _default() {
            return [children];
          }
        });
      }); // Rest node count

      if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
        var content = "+ ".concat(selectorValueList.length - maxTagCount, " ...");
        var maxTagPlaceholder = getComponent(this, 'maxTagPlaceholder', {}, false);

        if (typeof maxTagPlaceholder === 'string') {
          content = maxTagPlaceholder;
        } else if (typeof maxTagPlaceholder === 'function') {
          var restValueList = selectorValueList.slice(maxTagCount);
          content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref2) {
            var value = _ref2.value;
            return value;
          }));
        }

        var restNodeSelect = _createVNode(Selection, _objectSpread(_objectSpread({}, _extends(_extends({}, this.$props), {
          label: content,
          value: null
        })), {}, {
          "key": "rc-tree-select-internal-max-tag-counter"
        }), {
          default: function _default() {
            return [children];
          }
        });

        selectedValueNodes.push(restNodeSelect);
      }

      selectedValueNodes.push(_createVNode(SearchInput, _objectSpread(_objectSpread(_objectSpread({
        "key": "SearchInput"
      }, this.$props), this.$attrs), {}, {
        "ref": this.inputRef
      }), {
        default: function _default() {
          return [children];
        }
      }));
      return selectedValueNodes;
    }
  },
  render: function render() {
    var _this2 = this;

    return _createVNode(Selector, _extends(_extends(_extends({}, this.$props), this.$attrs), {
      tabindex: -1,
      showArrow: false,
      renderSelection: this.renderSelection,
      renderPlaceholder: this._renderPlaceholder
    }), {
      default: function _default() {
        return [getSlot(_this2)];
      }
    });
  }
};
export default MultipleSelector;