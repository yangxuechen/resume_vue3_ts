"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.selectorPropTypes = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _util = require("../util");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../../../_util/classNames"));

var _propsUtil = require("../../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

/**
 * Input Box is in different position for different mode.
 * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
 * We will not follow the new design immediately since antd 3.x is already released.
 *
 * So this file named as Selector to avoid confuse.
 */
var selectorPropTypes = function selectorPropTypes() {
  return {
    prefixCls: _vueTypes.default.string,
    open: _vueTypes.default.looseBool,
    selectorValueList: _vueTypes.default.array,
    allowClear: _vueTypes.default.looseBool,
    showArrow: _vueTypes.default.looseBool,
    // onClick: PropTypes.func,
    // onBlur: PropTypes.func,
    // onFocus: PropTypes.func,
    removeSelected: _vueTypes.default.func,
    choiceTransitionName: _vueTypes.default.string,
    // Pass by component
    ariaId: _vueTypes.default.string,
    inputIcon: _vueTypes.default.any,
    clearIcon: _vueTypes.default.any,
    removeIcon: _vueTypes.default.any,
    placeholder: _vueTypes.default.any,
    disabled: _vueTypes.default.looseBool,
    focused: _vueTypes.default.looseBool,
    isMultiple: _vueTypes.default.looseBool,
    showSearch: _vueTypes.default.looseBool,
    searchValue: _vueTypes.default.string
  };
};

exports.selectorPropTypes = selectorPropTypes;

function noop() {}

function _default() {
  var BaseSelector = {
    name: 'BaseSelector',
    inheritAttrs: false,
    mixins: [_BaseMixin.default],
    props: (0, _propsUtil.initDefaultProps)((0, _extends2.default)((0, _extends2.default)({}, selectorPropTypes()), {
      // Pass by HOC
      renderSelection: _vueTypes.default.func.isRequired,
      renderPlaceholder: _vueTypes.default.func,
      tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string])
    }), {
      tabindex: 0
    }),
    setup: function setup() {
      return {
        vcTreeSelect: (0, _vue.inject)('vcTreeSelect', {})
      };
    },
    created: function created() {
      this.domRef = (0, _util.createRef)();
    },
    methods: {
      onFocus: function onFocus(e) {
        var focused = this.$props.focused;
        var onSelectorFocus = this.vcTreeSelect.onSelectorFocus;

        if (!focused) {
          onSelectorFocus();
        }

        this.__emit('focus', e);
      },
      onBlur: function onBlur(e) {
        var onSelectorBlur = this.vcTreeSelect.onSelectorBlur; // TODO: Not trigger when is inner component get focused

        onSelectorBlur();

        this.__emit('blur', e);
      },
      focus: function focus() {
        this.domRef.current.focus();
      },
      blur: function blur() {
        this.domRef.current.blur();
      },
      renderClear: function renderClear() {
        var _this$$props = this.$props,
            prefixCls = _this$$props.prefixCls,
            allowClear = _this$$props.allowClear,
            selectorValueList = _this$$props.selectorValueList;
        var onSelectorClear = this.vcTreeSelect.onSelectorClear;

        if (!allowClear || !selectorValueList.length) {
          return null;
        }

        var clearIcon = (0, _propsUtil.getComponent)(this, 'clearIcon');
        return (0, _vue.createVNode)("span", {
          "key": "clear",
          "unselectable": "on",
          "aria-hidden": "true",
          "style": "user-select: none;",
          "class": "".concat(prefixCls, "-clear"),
          "onClick": onSelectorClear
        }, [clearIcon]);
      },
      renderArrow: function renderArrow() {
        var _this$$props2 = this.$props,
            prefixCls = _this$$props2.prefixCls,
            showArrow = _this$$props2.showArrow;

        if (!showArrow) {
          return null;
        }

        var inputIcon = (0, _propsUtil.getComponent)(this, 'inputIcon');
        return (0, _vue.createVNode)("span", {
          "key": "arrow",
          "class": "".concat(prefixCls, "-arrow"),
          "style": {
            outline: 'none',
            userSelect: 'none'
          }
        }, [inputIcon]);
      }
    },
    render: function render() {
      var _classNames;

      var _this$$props3 = this.$props,
          prefixCls = _this$$props3.prefixCls,
          open = _this$$props3.open,
          focused = _this$$props3.focused,
          disabled = _this$$props3.disabled,
          allowClear = _this$$props3.allowClear,
          ariaId = _this$$props3.ariaId,
          renderSelection = _this$$props3.renderSelection,
          renderPlaceholder = _this$$props3.renderPlaceholder,
          tabindex = _this$$props3.tabindex,
          isMultiple = _this$$props3.isMultiple,
          showArrow = _this$$props3.showArrow,
          showSearch = _this$$props3.showSearch;
      var _this$$attrs = this.$attrs,
          className = _this$$attrs.class,
          style = _this$$attrs.style,
          _this$$attrs$onClick = _this$$attrs.onClick,
          onClick = _this$$attrs$onClick === void 0 ? noop : _this$$attrs$onClick;
      var onSelectorKeyDown = this.vcTreeSelect.onSelectorKeyDown;
      var myTabIndex = tabindex;

      if (disabled) {
        myTabIndex = null;
      }

      var mergedClassName = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-focused"), open || focused), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-multiple"), isMultiple), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-single"), !isMultiple), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-allow-clear"), allowClear), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-open"), open), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-show-search"), showSearch), _classNames));
      return (0, _vue.createVNode)("div", {
        "style": style,
        "onClick": onClick,
        "class": mergedClassName,
        "ref": this.domRef,
        "role": "combobox",
        "aria-expanded": open,
        "aria-owns": open ? ariaId : undefined,
        "aria-controls": open ? ariaId : undefined,
        "aria-haspopup": "listbox",
        "aria-disabled": disabled,
        "tabindex": myTabIndex,
        "onFocus": this.onFocus,
        "onBlur": this.onBlur,
        "onKeydown": onSelectorKeyDown
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-selector")
      }, [renderSelection(), renderPlaceholder && renderPlaceholder()]), this.renderArrow(), this.renderClear()]);
    }
  };
  return BaseSelector;
}