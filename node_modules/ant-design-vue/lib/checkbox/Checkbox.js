"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _vcCheckbox = _interopRequireDefault(require("../vc-checkbox"));

var _propsUtil = _interopRequireWildcard(require("../_util/props-util"));

var _configProvider = require("../config-provider");

var _warning = _interopRequireDefault(require("../_util/warning"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function noop() {}

var _default = (0, _vue.defineComponent)({
  name: 'ACheckbox',
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: {
    prefixCls: _vueTypes.default.string,
    defaultChecked: _vueTypes.default.looseBool,
    checked: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    isGroup: _vueTypes.default.looseBool,
    value: _vueTypes.default.any,
    name: _vueTypes.default.string,
    id: _vueTypes.default.string,
    indeterminate: _vueTypes.default.looseBool,
    type: _vueTypes.default.string.def('checkbox'),
    autofocus: _vueTypes.default.looseBool,
    onChange: _vueTypes.default.func,
    'onUpdate:checked': _vueTypes.default.func
  },
  emits: ['change', 'update:checked'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      checkboxGroupContext: (0, _vue.inject)('checkboxGroupContext', undefined)
    };
  },
  watch: {
    value: function value(_value, prevValue) {
      var _this = this;

      (0, _vue.nextTick)(function () {
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

    (0, _warning.default)((0, _propsUtil.default)(this, 'checked') || this.checkboxGroupContext || !(0, _propsUtil.default)(this, 'value'), 'Checkbox', '`value` is not validate prop, do you mean `checked`?');
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

    var props = (0, _propsUtil.getOptionProps)(this);
    var checkboxGroup = this.checkboxGroupContext,
        $attrs = this.$attrs;
    var children = (0, _propsUtil.getSlot)(this);

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

    var checkboxProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restProps), {
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

    var classString = (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
    var checkboxClass = (0, _classNames3.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
    return (0, _vue.createVNode)("label", {
      "class": classString,
      "style": style,
      "onMouseenter": onMouseenter,
      "onMouseleave": onMouseleave
    }, [(0, _vue.createVNode)(_vcCheckbox.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, checkboxProps), {}, {
      "class": checkboxClass,
      "ref": "vcCheckbox"
    }), null), children.length ? (0, _vue.createVNode)("span", null, [children]) : null]);
  }
});

exports.default = _default;