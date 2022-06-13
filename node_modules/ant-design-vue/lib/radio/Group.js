"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var _default2 = (0, _vue.defineComponent)({
  name: 'ARadioGroup',
  props: {
    prefixCls: _vueTypes.default.string,
    defaultValue: _vueTypes.default.any,
    value: _vueTypes.default.any,
    size: _vueTypes.default.oneOf((0, _type.tuple)('large', 'default', 'small')).def('default'),
    options: _vueTypes.default.array,
    disabled: _vueTypes.default.looseBool,
    name: _vueTypes.default.string,
    buttonStyle: _vueTypes.default.string.def('outline'),
    onChange: _vueTypes.default.func
  },
  emits: ['update:value', 'change'],
  setup: function setup() {
    return {
      updatingValue: false,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
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
    this.radioGroupContext = (0, _vue.provide)('radioGroupContext', this);
  },
  methods: {
    onRadioChange: function onRadioChange(ev) {
      var _this = this;

      var lastValue = this.stateValue;
      var value = ev.target.value;

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.stateValue = value;
      } // nextTick for https://github.com/vueComponent/ant-design-vue/issues/1280


      if (!this.updatingValue && value !== lastValue) {
        this.updatingValue = true;
        this.$emit('update:value', value);
        this.$emit('change', ev);
      }

      (0, _vue.nextTick)(function () {
        _this.updatingValue = false;
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        options = props.options,
        buttonStyle = props.buttonStyle;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var classString = (0, _classNames2.default)(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (0, _defineProperty2.default)({}, "".concat(groupPrefixCls, "-").concat(props.size), props.size));
    var children = (0, _propsUtil.filterEmpty)((0, _propsUtil.getSlot)(this)); // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      children = options.map(function (option) {
        if (typeof option === 'string') {
          return (0, _vue.createVNode)(_Radio.default, {
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

        return (0, _vue.createVNode)(_Radio.default, {
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

    return (0, _vue.createVNode)("div", {
      "class": classString
    }, [children]);
  }
});

exports.default = _default2;