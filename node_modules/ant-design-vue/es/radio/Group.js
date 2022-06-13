import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { provide, inject, nextTick, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import Radio from './Radio';
import { getOptionProps, filterEmpty, hasProp, getSlot } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
export default defineComponent({
  name: 'ARadioGroup',
  props: {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    size: PropTypes.oneOf(tuple('large', 'default', 'small')).def('default'),
    options: PropTypes.array,
    disabled: PropTypes.looseBool,
    name: PropTypes.string,
    buttonStyle: PropTypes.string.def('outline'),
    onChange: PropTypes.func
  },
  emits: ['update:value', 'change'],
  setup: function setup() {
    return {
      updatingValue: false,
      configProvider: inject('configProvider', defaultConfigProvider),
      radioGroupContext: null
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue;
    return {
      stateValue: value === undefined ? defaultValue : value
    };
  },
  watch: {
    value: function value(val) {
      this.updatingValue = false;
      this.stateValue = val;
    }
  },
  // computed: {
  //   radioOptions() {
  //     const { disabled } = this;
  //     return this.options.map(option => {
  //       return typeof option === 'string'
  //         ? { label: option, value: option }
  //         : { ...option, disabled: option.disabled === undefined ? disabled : option.disabled };
  //     });
  //   },
  // },
  created: function created() {
    this.radioGroupContext = provide('radioGroupContext', this);
  },
  methods: {
    onRadioChange: function onRadioChange(ev) {
      var _this = this;

      var lastValue = this.stateValue;
      var value = ev.target.value;

      if (!hasProp(this, 'value')) {
        this.stateValue = value;
      } // nextTick for https://github.com/vueComponent/ant-design-vue/issues/1280


      if (!this.updatingValue && value !== lastValue) {
        this.updatingValue = true;
        this.$emit('update:value', value);
        this.$emit('change', ev);
      }

      nextTick(function () {
        _this.updatingValue = false;
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
        options = props.options,
        buttonStyle = props.buttonStyle;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var classString = classNames(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), _defineProperty({}, "".concat(groupPrefixCls, "-").concat(props.size), props.size));
    var children = filterEmpty(getSlot(this)); // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      children = options.map(function (option) {
        if (typeof option === 'string') {
          return _createVNode(Radio, {
            "key": option,
            "prefixCls": prefixCls,
            "disabled": props.disabled,
            "value": option,
            "checked": _this2.stateValue === option
          }, {
            default: function _default() {
              return [option];
            }
          });
        }

        return _createVNode(Radio, {
          "key": "radio-group-value-options-".concat(option.value),
          "prefixCls": prefixCls,
          "disabled": option.disabled || props.disabled,
          "value": option.value,
          "checked": _this2.stateValue === option.value
        }, {
          default: function _default() {
            return [option.label];
          }
        });
      });
    }

    return _createVNode("div", {
      "class": classString
    }, [children]);
  }
});