import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

/**
 * Input Box is in different position for different mode.
 * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
 * We will not follow the new design immediately since antd 3.x is already released.
 *
 * So this file named as Selector to avoid confuse.
 */
import { inject } from 'vue';
import { createRef } from '../util';
import PropTypes from '../../../_util/vue-types';
import classNames from '../../../_util/classNames';
import { initDefaultProps, getComponent } from '../../../_util/props-util';
import BaseMixin from '../../../_util/BaseMixin';
export var selectorPropTypes = function selectorPropTypes() {
  return {
    prefixCls: PropTypes.string,
    open: PropTypes.looseBool,
    selectorValueList: PropTypes.array,
    allowClear: PropTypes.looseBool,
    showArrow: PropTypes.looseBool,
    // onClick: PropTypes.func,
    // onBlur: PropTypes.func,
    // onFocus: PropTypes.func,
    removeSelected: PropTypes.func,
    choiceTransitionName: PropTypes.string,
    // Pass by component
    ariaId: PropTypes.string,
    inputIcon: PropTypes.any,
    clearIcon: PropTypes.any,
    removeIcon: PropTypes.any,
    placeholder: PropTypes.any,
    disabled: PropTypes.looseBool,
    focused: PropTypes.looseBool,
    isMultiple: PropTypes.looseBool,
    showSearch: PropTypes.looseBool,
    searchValue: PropTypes.string
  };
};

function noop() {}

export default function () {
  var BaseSelector = {
    name: 'BaseSelector',
    inheritAttrs: false,
    mixins: [BaseMixin],
    props: initDefaultProps(_extends(_extends({}, selectorPropTypes()), {
      // Pass by HOC
      renderSelection: PropTypes.func.isRequired,
      renderPlaceholder: PropTypes.func,
      tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }), {
      tabindex: 0
    }),
    setup: function setup() {
      return {
        vcTreeSelect: inject('vcTreeSelect', {})
      };
    },
    created: function created() {
      this.domRef = createRef();
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

        var clearIcon = getComponent(this, 'clearIcon');
        return _createVNode("span", {
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

        var inputIcon = getComponent(this, 'inputIcon');
        return _createVNode("span", {
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

      var mergedClassName = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-focused"), open || focused), _defineProperty(_classNames, "".concat(prefixCls, "-multiple"), isMultiple), _defineProperty(_classNames, "".concat(prefixCls, "-single"), !isMultiple), _defineProperty(_classNames, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-open"), open), _defineProperty(_classNames, "".concat(prefixCls, "-show-search"), showSearch), _classNames));
      return _createVNode("div", {
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
      }, [_createVNode("span", {
        "class": "".concat(prefixCls, "-selector")
      }, [renderSelection(), renderPlaceholder && renderPlaceholder()]), this.renderArrow(), this.renderClear()]);
    }
  };
  return BaseSelector;
}