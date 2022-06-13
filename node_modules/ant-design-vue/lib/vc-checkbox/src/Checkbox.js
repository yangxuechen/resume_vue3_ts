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

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

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

var _default = (0, _vue.defineComponent)({
  name: 'Checkbox',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes.default.string,
    name: _vueTypes.default.string,
    id: _vueTypes.default.string,
    type: _vueTypes.default.string,
    defaultChecked: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.looseBool])),
    checked: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.looseBool])),
    disabled: _vueTypes.default.looseBool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    readonly: _vueTypes.default.looseBool,
    autofocus: _vueTypes.default.looseBool,
    value: _vueTypes.default.any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = (0, _propsUtil.hasProp)(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },
  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.$refs.input && _this.$refs.input.focus();
        }
      }
    });
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = (0, _propsUtil.getOptionProps)(this);

      if (props.disabled) {
        return;
      }

      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }

      e.shiftKey = this.eventShiftKey;
      var eventObj = {
        target: (0, _extends2.default)((0, _extends2.default)({}, props), {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      }; // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      // 受控模式下维持现有状态

      if ('checked' in props) {
        this.$refs.input.checked = props.checked;
      }

      this.__emit('change', eventObj);

      this.eventShiftKey = false;
    },
    onClick: function onClick(e) {
      this.__emit('click', e); // onChange没能获取到shiftKey，使用onClick hack


      this.eventShiftKey = e.shiftKey;
    }
  },
  render: function render() {
    var _classNames;

    var _a = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _a.prefixCls,
        name = _a.name,
        id = _a.id,
        type = _a.type,
        disabled = _a.disabled,
        readonly = _a.readonly,
        tabindex = _a.tabindex,
        autofocus = _a.autofocus,
        value = _a.value,
        others = __rest(_a, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value"]);

    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        onFocus = _this$$attrs.onFocus,
        onBlur = _this$$attrs.onBlur;
    var globalProps = Object.keys((0, _extends2.default)((0, _extends2.default)({}, others), this.$attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }

      return prev;
    }, {});
    var sChecked = this.sChecked;
    var classString = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-checked"), sChecked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
    var inputProps = (0, _extends2.default)((0, _extends2.default)({
      name: name,
      id: id,
      type: type,
      readonly: readonly,
      disabled: disabled,
      tabindex: tabindex,
      class: "".concat(prefixCls, "-input"),
      checked: !!sChecked,
      autofocus: autofocus,
      value: value
    }, globalProps), {
      onChange: this.handleChange,
      onClick: this.onClick,
      onFocus: onFocus,
      onBlur: onBlur
    });
    return (0, _vue.createVNode)("span", {
      "class": classString
    }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)({
      "ref": "input"
    }, inputProps), null), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-inner")
    }, null)]);
  }
});

exports.default = _default;