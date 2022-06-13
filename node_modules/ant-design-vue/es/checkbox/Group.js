import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, provide } from 'vue';
import PropTypes from '../_util/vue-types';
import Checkbox from './Checkbox';
import hasProp, { getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';

function noop() {}

export default defineComponent({
  name: 'ACheckboxGroup',
  props: {
    name: PropTypes.string,
    prefixCls: PropTypes.string,
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    },
    disabled: PropTypes.looseBool,
    onChange: PropTypes.func
  },
  emits: ['change', 'update:value'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue;
    return {
      sValue: value || defaultValue || [],
      registeredValues: []
    };
  },
  watch: {
    value: function value(val) {
      this.sValue = val || [];
    }
  },
  created: function created() {
    provide('checkboxGroupContext', this);
  },
  methods: {
    getOptions: function getOptions() {
      var _this$options = this.options,
          options = _this$options === void 0 ? [] : _this$options,
          $slots = this.$slots;
      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        var label = option.label;

        if (label === undefined && $slots.label) {
          label = $slots.label(option);
        }

        return _extends(_extends({}, option), {
          label: label
        });
      });
    },
    cancelValue: function cancelValue(value) {
      this.registeredValues = this.registeredValues.filter(function (val) {
        return val !== value;
      });
    },
    registerValue: function registerValue(value) {
      this.registeredValues = [].concat(_toConsumableArray(this.registeredValues), [value]);
    },
    toggleOption: function toggleOption(option) {
      var registeredValues = this.registeredValues;
      var optionIndex = this.sValue.indexOf(option.value);

      var value = _toConsumableArray(this.sValue);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!hasProp(this, 'value')) {
        this.sValue = value;
      }

      var options = this.getOptions();
      var val = value.filter(function (val) {
        return registeredValues.indexOf(val) !== -1;
      }).sort(function (a, b) {
        var indexA = options.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = options.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      }); // this.$emit('input', val);

      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render() {
    var props = this.$props,
        state = this.$data;
    var customizePrefixCls = props.prefixCls,
        options = props.options;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    var children = getSlot(this);
    var groupPrefixCls = "".concat(prefixCls, "-group");

    if (options && options.length > 0) {
      children = this.getOptions().map(function (option) {
        return _createVNode(Checkbox, {
          "prefixCls": prefixCls,
          "key": option.value.toString(),
          "disabled": 'disabled' in option ? option.disabled : props.disabled,
          "indeterminate": option.indeterminate,
          "value": option.value,
          "checked": state.sValue.indexOf(option.value) !== -1,
          "onChange": option.onChange || noop,
          "class": "".concat(groupPrefixCls, "-item")
        }, {
          default: function _default() {
            return [option.label];
          }
        });
      });
    }

    return _createVNode("div", {
      "class": groupPrefixCls
    }, [children]);
  }
});