import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent, inject, nextTick } from 'vue';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import VcCheckbox from '../vc-checkbox';
import hasProp, { getOptionProps, getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import warning from '../_util/warning';

function noop() {}

export default defineComponent({
  name: 'ACheckbox',
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: {
    prefixCls: PropTypes.string,
    defaultChecked: PropTypes.looseBool,
    checked: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    isGroup: PropTypes.looseBool,
    value: PropTypes.any,
    name: PropTypes.string,
    id: PropTypes.string,
    indeterminate: PropTypes.looseBool,
    type: PropTypes.string.def('checkbox'),
    autofocus: PropTypes.looseBool,
    onChange: PropTypes.func,
    'onUpdate:checked': PropTypes.func
  },
  emits: ['change', 'update:checked'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      checkboxGroupContext: inject('checkboxGroupContext', undefined)
    };
  },
  watch: {
    value: function value(_value, prevValue) {
      var _this = this;

      nextTick(function () {
        var _this$checkboxGroupCo = _this.checkboxGroupContext,
            checkboxGroup = _this$checkboxGroupCo === void 0 ? {} : _this$checkboxGroupCo;

        if (checkboxGroup.registerValue && checkboxGroup.cancelValue) {
          checkboxGroup.cancelValue(prevValue);
          checkboxGroup.registerValue(_value);
        }
      });
    }
  },
  mounted: function mounted() {
    var value = this.value,
        _this$checkboxGroupCo2 = this.checkboxGroupContext,
        checkboxGroup = _this$checkboxGroupCo2 === void 0 ? {} : _this$checkboxGroupCo2;

    if (checkboxGroup.registerValue) {
      checkboxGroup.registerValue(value);
    }

    warning(hasProp(this, 'checked') || this.checkboxGroupContext || !hasProp(this, 'value'), 'Checkbox', '`value` is not validate prop, do you mean `checked`?');
  },
  beforeUnmount: function beforeUnmount() {
    var value = this.value,
        _this$checkboxGroupCo3 = this.checkboxGroupContext,
        checkboxGroup = _this$checkboxGroupCo3 === void 0 ? {} : _this$checkboxGroupCo3;

    if (checkboxGroup.cancelValue) {
      checkboxGroup.cancelValue(value);
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      var targetChecked = event.target.checked;
      this.$emit('update:checked', targetChecked); // this.$emit('input', targetChecked);

      this.$emit('change', event);
    },
    focus: function focus() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur() {
      this.$refs.vcCheckbox.blur();
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames;

    var props = getOptionProps(this);
    var checkboxGroup = this.checkboxGroupContext,
        $attrs = this.$attrs;
    var children = getSlot(this);

    var indeterminate = props.indeterminate,
        customizePrefixCls = props.prefixCls,
        restProps = __rest(props, ["indeterminate", "prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

    var _$attrs$onMouseenter = $attrs.onMouseenter,
        onMouseenter = _$attrs$onMouseenter === void 0 ? noop : _$attrs$onMouseenter,
        _$attrs$onMouseleave = $attrs.onMouseleave,
        onMouseleave = _$attrs$onMouseleave === void 0 ? noop : _$attrs$onMouseleave,
        onInput = $attrs.onInput,
        className = $attrs.class,
        style = $attrs.style,
        restAttrs = __rest($attrs, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]);

    var checkboxProps = _extends(_extends(_extends({}, restProps), {
      prefixCls: prefixCls
    }), restAttrs);

    if (checkboxGroup) {
      checkboxProps.onChange = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2.$emit.apply(_this2, ['change'].concat(args));

        checkboxGroup.toggleOption({
          label: children,
          value: props.value
        });
      };

      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.sValue.indexOf(props.value) !== -1;
      checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      checkboxProps.indeterminate = indeterminate;
    } else {
      checkboxProps.onChange = this.handleChange;
    }

    var classString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
    var checkboxClass = classNames(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
    return _createVNode("label", {
      "class": classString,
      "style": style,
      "onMouseenter": onMouseenter,
      "onMouseleave": onMouseleave
    }, [_createVNode(VcCheckbox, _objectSpread(_objectSpread({}, checkboxProps), {}, {
      "class": checkboxClass,
      "ref": "vcCheckbox"
    }), null), children.length ? _createVNode("span", null, [children]) : null]);
  }
});