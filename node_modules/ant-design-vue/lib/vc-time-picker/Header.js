"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _moment = _interopRequireDefault(require("moment"));

var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));

var Header = {
  inheritAttrs: false,
  name: 'Header',
  mixins: [_BaseMixin.default],
  props: {
    format: _vueTypes.default.string,
    prefixCls: _vueTypes.default.string,
    disabledDate: _vueTypes.default.func,
    placeholder: _vueTypes.default.string,
    clearText: _vueTypes.default.string,
    value: _vueTypes.default.object,
    inputReadOnly: _vueTypes.default.looseBool.def(false),
    hourOptions: _vueTypes.default.array,
    minuteOptions: _vueTypes.default.array,
    secondOptions: _vueTypes.default.array,
    disabledHours: _vueTypes.default.func,
    disabledMinutes: _vueTypes.default.func,
    disabledSeconds: _vueTypes.default.func,
    // onChange: PropTypes.func,
    // onClear: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: _vueTypes.default.looseBool,
    defaultOpenValue: _vueTypes.default.object,
    currentSelectPanel: _vueTypes.default.string,
    focusOnOpen: _vueTypes.default.looseBool,
    // onKeyDown: PropTypes.func,
    clearIcon: _vueTypes.default.any
  },
  data: function data() {
    var value = this.value,
        format = this.format;
    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(function () {
        _this.refInput.focus();

        _this.refInput.select();
      });
    }
  },
  watch: {
    value: function value(val) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setState({
          str: val && val.format(_this2.format) || '',
          invalid: false
        });
      });
    }
  },
  methods: {
    onInputChange: function onInputChange(e) {
      var _e$target = e.target,
          str = _e$target.value,
          composing = _e$target.composing;
      var _this$str = this.str,
          oldStr = _this$str === void 0 ? '' : _this$str;
      if (e.isComposing || composing || oldStr === str) return;
      this.setState({
        str: str
      });
      var format = this.format,
          hourOptions = this.hourOptions,
          minuteOptions = this.minuteOptions,
          secondOptions = this.secondOptions,
          disabledHours = this.disabledHours,
          disabledMinutes = this.disabledMinutes,
          disabledSeconds = this.disabledSeconds,
          originalValue = this.value;

      if (str) {
        var value = this.getProtoValue().clone();
        var parsed = (0, _moment.default)(str, format, true);

        if (!parsed.isValid()) {
          this.setState({
            invalid: true
          });
          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          this.setState({
            invalid: true
          });
          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());

            this.__emit('change', changedValue);
          }
        } else if (originalValue !== value) {
          this.__emit('change', value);
        }
      } else {
        this.__emit('change', null);
      }

      this.setState({
        invalid: false
      });
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 27) {
        this.__emit('esc');
      }

      this.__emit('keydown', e);
    },
    getProtoValue: function getProtoValue() {
      return this.value || this.defaultOpenValue;
    },
    getInput: function getInput() {
      var _this3 = this;

      var prefixCls = this.prefixCls,
          placeholder = this.placeholder,
          inputReadOnly = this.inputReadOnly,
          invalid = this.invalid,
          str = this.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return (0, _vue.withDirectives)((0, _vue.createVNode)("input", {
        "class": "".concat(prefixCls, "-input ").concat(invalidClass),
        "ref": function ref(_ref) {
          _this3.refInput = _ref;
        },
        "onKeydown": this.onKeyDown,
        "value": str,
        "placeholder": placeholder,
        "onInput": this.onInputChange,
        "onChange": this.onInputChange,
        "readonly": !!inputReadOnly
      }, null), [[_antInputDirective.default]]);
    }
  },
  render: function render() {
    var prefixCls = this.prefixCls;
    return (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-input-wrap")
    }, [this.getInput()]);
  }
};
var _default = Header;
exports.default = _default;