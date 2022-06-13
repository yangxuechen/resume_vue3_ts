"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _menu = _interopRequireWildcard(require("../../menu"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _Option = require("./Option");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function noop() {}

var _default2 = {
  name: 'DropdownMenu',
  props: {
    prefixCls: _vueTypes.default.string,
    options: _vueTypes.default.arrayOf(_Option.OptionProps)
  },
  setup: function setup() {
    return {
      mentionsContext: (0, _vue.inject)('mentionsContext')
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
    return (0, _vue.createVNode)(_menu.default, {
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
        return [[].concat((0, _toConsumableArray2.default)(options.map(function (option, index) {
          var value = option.value,
              disabled = option.disabled,
              children = option.children;
          return (0, _vue.createVNode)(_menu.Item, {
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
        })), [!options.length && (0, _vue.createVNode)(_menu.Item, {
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
exports.default = _default2;