import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createVNode as _createVNode } from "vue";
import Menu, { Item as MenuItem } from '../../menu';
import PropTypes from '../../_util/vue-types';
import { OptionProps } from './Option';
import { inject } from 'vue';

function noop() {}

export default {
  name: 'DropdownMenu',
  props: {
    prefixCls: PropTypes.string,
    options: PropTypes.arrayOf(OptionProps)
  },
  setup: function setup() {
    return {
      mentionsContext: inject('mentionsContext')
    };
  },
  render: function render() {
    var _this$mentionsContext = this.mentionsContext,
        notFoundContent = _this$mentionsContext.notFoundContent,
        activeIndex = _this$mentionsContext.activeIndex,
        setActiveIndex = _this$mentionsContext.setActiveIndex,
        selectOption = _this$mentionsContext.selectOption,
        _this$mentionsContext2 = _this$mentionsContext.onFocus,
        onFocus = _this$mentionsContext2 === void 0 ? noop : _this$mentionsContext2,
        _this$mentionsContext3 = _this$mentionsContext.onBlur,
        onBlur = _this$mentionsContext3 === void 0 ? noop : _this$mentionsContext3;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        options = _this$$props.options;
    var activeOption = options[activeIndex] || {};
    return _createVNode(Menu, {
      "prefixCls": "".concat(prefixCls, "-menu"),
      "activeKey": activeOption.value,
      "onSelect": function onSelect(_ref) {
        var key = _ref.key;
        var option = options.find(function (_ref2) {
          var value = _ref2.value;
          return value === key;
        });
        selectOption(option);
      },
      "onBlur": onBlur,
      "onFocus": onFocus
    }, {
      default: function _default() {
        return [[].concat(_toConsumableArray(options.map(function (option, index) {
          var value = option.value,
              disabled = option.disabled,
              children = option.children;
          return _createVNode(MenuItem, {
            "key": value,
            "disabled": disabled,
            "onMouseenter": function onMouseenter() {
              setActiveIndex(index);
            }
          }, {
            default: function _default() {
              return [children];
            }
          });
        })), [!options.length && _createVNode(MenuItem, {
          "key": "notFoundContent",
          "disabled": true
        }, {
          default: function _default() {
            return [notFoundContent];
          }
        })]).filter(Boolean)];
      }
    });
  }
};