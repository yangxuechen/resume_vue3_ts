"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _propsUtil = _interopRequireWildcard(require("../_util/props-util"));

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function noop() {}

var _default2 = (0, _vue.defineComponent)({
  name: 'ACheckboxGroup',
  props: {
    name: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    options: {
      type: Array
    },
    disabled: _vueTypes.default.looseBool,
    onChange: _vueTypes.default.func
  },
  emits: ['change', 'update:value'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
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
    (0, _vue.provide)('checkboxGroupContext', this);
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

        return (0, _extends2.default)((0, _extends2.default)({}, option), {
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
      this.registeredValues = [].concat((0, _toConsumableArray2.default)(this.registeredValues), [value]);
    },
    toggleOption: function toggleOption(option) {
      var registeredValues = this.registeredValues;
      var optionIndex = this.sValue.indexOf(option.value);
      var value = (0, _toConsumableArray2.default)(this.sValue);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!(0, _propsUtil.default)(this, 'value')) {
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
    var children = (0, _propsUtil.getSlot)(this);
    var groupPrefixCls = "".concat(prefixCls, "-group");

    if (options && options.length > 0) {
      children = this.getOptions().map(function (option) {
        return (0, _vue.createVNode)(_Checkbox.default, {
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

    return (0, _vue.createVNode)("div", {
      "class": groupPrefixCls
    }, [children]);
  }
});

exports.default = _default2;