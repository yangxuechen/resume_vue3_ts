"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransferSearchProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SearchOutlined"));

var _input = _interopRequireDefault(require("../input"));

var TransferSearchProps = {
  prefixCls: _vueTypes.default.string,
  placeholder: _vueTypes.default.string,
  value: _vueTypes.default.any,
  handleClear: _vueTypes.default.func,
  disabled: _vueTypes.default.looseBool,
  onChange: _vueTypes.default.func
};
exports.TransferSearchProps = TransferSearchProps;

var _default = (0, _vue.defineComponent)({
  name: 'Search',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(TransferSearchProps, {
    placeholder: ''
  }),
  methods: {
    handleChange: function handleChange(e) {
      this.$emit('change', e);
    },
    handleClear2: function handleClear2(e) {
      e.preventDefault();
      var _this$$props = this.$props,
          handleClear = _this$$props.handleClear,
          disabled = _this$$props.disabled;

      if (!disabled && handleClear) {
        handleClear(e);
      }
    }
  },
  render: function render() {
    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        placeholder = _getOptionProps.placeholder,
        value = _getOptionProps.value,
        prefixCls = _getOptionProps.prefixCls,
        disabled = _getOptionProps.disabled;

    var icon = value && value.length > 0 ? (0, _vue.createVNode)("a", {
      "href": "#",
      "class": "".concat(prefixCls, "-action"),
      "onClick": this.handleClear2
    }, [(0, _vue.createVNode)(_CloseCircleFilled.default, null, null)]) : (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-action")
    }, [(0, _vue.createVNode)(_SearchOutlined.default, null, null)]);
    return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_input.default, {
      "placeholder": placeholder,
      "class": prefixCls,
      "value": value,
      "onChange": this.handleChange,
      "disabled": disabled
    }, null), icon]);
  }
});

exports.default = _default;