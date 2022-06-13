"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _InputHandler = _interopRequireDefault(require("./InputHandler"));

var _supportsPassive = _interopRequireDefault(require("../../_util/supportsPassive"));

// based on rc-input-number 4.5.5
function preventDefault(e) {
  e.preventDefault();
}

function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '');
}
/**
 * When click and hold on a button - the speed of auto changin the value.
 */


var SPEED = 200;
/**
 * When click and hold on a button - the delay before auto changin the value.
 */

var DELAY = 600;
/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var isValidProps = function isValidProps(value) {
  return value !== undefined && value !== null;
};

var isEqual = function isEqual(oldValue, newValue) {
  return newValue === oldValue || typeof newValue === 'number' && typeof oldValue === 'number' && isNaN(newValue) && isNaN(oldValue);
};

var inputNumberProps = {
  value: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  focusOnUpDown: _vueTypes.default.looseBool,
  autofocus: _vueTypes.default.looseBool,
  // onChange: PropTypes.func,
  // onKeyDown: PropTypes.func,
  // onKeyUp: PropTypes.func,
  prefixCls: _vueTypes.default.string,
  tabindex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  placeholder: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  // onFocus: PropTypes.func,
  // onBlur: PropTypes.func,
  readonly: _vueTypes.default.looseBool,
  max: _vueTypes.default.number,
  min: _vueTypes.default.number,
  step: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
  upHandler: _vueTypes.default.any,
  downHandler: _vueTypes.default.any,
  useTouch: _vueTypes.default.looseBool,
  formatter: _vueTypes.default.func,
  parser: _vueTypes.default.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onMouseOver: PropTypes.func,
  // onMouseOut: PropTypes.func,
  precision: _vueTypes.default.number,
  required: _vueTypes.default.looseBool,
  pattern: _vueTypes.default.string,
  decimalSeparator: _vueTypes.default.string,
  autocomplete: _vueTypes.default.string,
  title: _vueTypes.default.string,
  name: _vueTypes.default.string,
  id: _vueTypes.default.string,
  type: _vueTypes.default.string,
  maxlength: _vueTypes.default.any
};

var _default2 = (0, _vue.defineComponent)({
  name: 'VCInputNumber',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  // model: {
  //   prop: 'value',
  //   event: 'change',
  // },
  props: (0, _propsUtil.initDefaultProps)(inputNumberProps, {
    focusOnUpDown: true,
    useTouch: false,
    prefixCls: 'rc-input-number',
    min: -MAX_SAFE_INTEGER,
    step: 1,
    parser: defaultParser,
    required: false,
    autocomplete: 'off'
  }),
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    this.prevProps = (0, _extends2.default)({}, props);
    var value;

    if ('value' in props) {
      value = this.value;
    } else {
      value = this.defaultValue;
    }

    var validValue = this.getValidValue(this.toNumber(value));
    return {
      inputValue: this.toPrecisionAsStep(validValue),
      sValue: validValue,
      focused: this.autofocus
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.updatedFunc();
    });
  },
  updated: function updated() {
    var _this2 = this;

    var _this$$props = this.$props,
        value = _this$$props.value,
        max = _this$$props.max,
        min = _this$$props.min;
    var focused = this.$data.focused;
    var prevProps = this.prevProps;
    var props = (0, _propsUtil.getOptionProps)(this); // Don't trigger in componentDidMount

    if (prevProps) {
      if (!isEqual(prevProps.value, value) || !isEqual(prevProps.max, max) || !isEqual(prevProps.min, min)) {
        var validValue = focused ? value : this.getValidValue(value);
        var nextInputValue;

        if (this.pressingUpOrDown) {
          nextInputValue = validValue;
        } else if (this.inputting) {
          nextInputValue = this.rawInput;
        } else {
          nextInputValue = this.toPrecisionAsStep(validValue);
        }

        this.setState({
          // eslint-disable-line
          sValue: validValue,
          inputValue: nextInputValue
        });
      } // Trigger onChange when max or min change
      // https://github.com/ant-design/ant-design/issues/11574


      var nextValue = 'value' in props ? value : this.$data.sValue; // ref: null < 20 === true
      // https://github.com/ant-design/ant-design/issues/14277

      if ('max' in props && prevProps.max !== max && typeof nextValue === 'number' && nextValue > max) {
        this.__emit('update:value', max);

        this.__emit('change', max);
      }

      if ('min' in props && prevProps.min !== min && typeof nextValue === 'number' && nextValue < min) {
        this.__emit('update:value', min);

        this.__emit('change', min);
      }
    }

    this.prevProps = (0, _extends2.default)({}, props);
    this.$nextTick(function () {
      _this2.updatedFunc();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.stop();
  },
  methods: {
    updatedFunc: function updatedFunc() {
      var inputElem = this.inputRef; // Restore cursor

      try {
        // Firefox set the input cursor after it get focused.
        // This caused that if an input didn't init with the selection,
        // set will cause cursor not correct when first focus.
        // Safari will focus input if set selection. We need skip this.
        if (this.cursorStart !== undefined && this.$data.focused) {
          // In most cases, the string after cursor is stable.
          // We can move the cursor before it
          if ( // If not match full str, try to match part of str
          !this.partRestoreByAfter(this.cursorAfter) && this.$data.sValue !== this.value) {
            // If not match any of then, let's just keep the position
            // TODO: Logic should not reach here, need check if happens
            var pos = this.cursorStart + 1; // If not have last string, just position to the end

            if (!this.cursorAfter) {
              pos = inputElem.value.length;
            } else if (this.lastKeyCode === _KeyCode.default.BACKSPACE) {
              pos = this.cursorStart - 1;
            } else if (this.lastKeyCode === _KeyCode.default.DELETE) {
              pos = this.cursorStart;
            }

            this.fixCaret(pos, pos);
          } else if (this.currentValue === inputElem.value) {
            // Handle some special key code
            switch (this.lastKeyCode) {
              case _KeyCode.default.BACKSPACE:
                this.fixCaret(this.cursorStart - 1, this.cursorStart - 1);
                break;

              case _KeyCode.default.DELETE:
                this.fixCaret(this.cursorStart + 1, this.cursorStart + 1);
                break;

              default: // Do nothing

            }
          }
        }
      } catch (e) {// Do nothing
      } // Reset last key


      this.lastKeyCode = null; // pressingUpOrDown is true means that someone just click up or down button

      if (!this.pressingUpOrDown) {
        return;
      }

      if (this.focusOnUpDown && this.$data.focused) {
        if (document.activeElement !== inputElem) {
          this.focus();
        }
      }

      this.pressingUpOrDown = false;
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === _KeyCode.default.UP) {
        var ratio = this.getRatio(e);
        this.up(e, ratio);
        this.stop();
      } else if (e.keyCode === _KeyCode.default.DOWN) {
        var _ratio = this.getRatio(e);

        this.down(e, _ratio);
        this.stop();
      } else if (e.keyCode === _KeyCode.default.ENTER) {
        this.__emit('pressEnter', e);
      } // Trigger user key down


      this.recordCursorPosition();
      this.lastKeyCode = e.keyCode;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.__emit.apply(this, ['keydown', e].concat(args));
    },
    onKeyUp: function onKeyUp(e) {
      this.stop();
      this.recordCursorPosition();

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.__emit.apply(this, ['keyup', e].concat(args));
    },
    onTrigger: function onTrigger(e) {
      if (e.target.composing) return false;
      this.onChange(e);
    },
    onChange: function onChange(e) {
      if (this.$data.focused) {
        this.inputting = true;
      }

      this.rawInput = this.parser(this.getValueFromEvent(e));
      this.setState({
        inputValue: this.rawInput
      });
      var num = this.toNumber(this.rawInput); // valid number or invalid string

      this.__emit('update:value', num);

      this.__emit('change', num);
    },
    onFocus: function onFocus() {
      this.setState({
        focused: true
      });

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.__emit.apply(this, ['focus'].concat(args));
    },
    onBlur: function onBlur() {
      this.inputting = false;
      this.setState({
        focused: false
      });
      var value = this.getCurrentValidValue(this.$data.inputValue);
      var newValue = this.setValue(value);

      if (this.$attrs.onBlur && this.inputRef) {
        var originValue = this.inputRef.value;
        var inputValue = this.getInputDisplayValue({
          focused: false,
          sValue: newValue
        });
        this.inputRef.value = inputValue;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        this.__emit.apply(this, ['blur'].concat(args));

        this.inputRef.value = originValue;
      }
    },
    getCurrentValidValue: function getCurrentValidValue(value) {
      var val = value;

      if (val === '') {
        val = '';
      } else if (!this.isNotCompleteNumber(parseFloat(val, 10))) {
        val = this.getValidValue(val);
      } else {
        val = this.$data.sValue;
      }

      return this.toNumber(val);
    },
    getRatio: function getRatio(e) {
      var ratio = 1;

      if (e.metaKey || e.ctrlKey) {
        ratio = 0.1;
      } else if (e.shiftKey) {
        ratio = 10;
      }

      return ratio;
    },
    getValueFromEvent: function getValueFromEvent(e) {
      // optimize for chinese input expierence
      // https://github.com/ant-design/ant-design/issues/8196
      var value = e.target.value.trim().replace(/。/g, '.');

      if (isValidProps(this.decimalSeparator)) {
        value = value.replace(this.decimalSeparator, '.');
      }

      return value;
    },
    getValidValue: function getValidValue(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.max;
      var val = parseFloat(value, 10); // https://github.com/ant-design/ant-design/issues/7358

      if (isNaN(val)) {
        return value;
      }

      if (val < min) {
        val = min;
      }

      if (val > max) {
        val = max;
      }

      return val;
    },
    setValue: function setValue(v, callback) {
      // trigger onChange
      var precision = this.$props.precision;
      var newValue = this.isNotCompleteNumber(parseFloat(v, 10)) ? null : parseFloat(v, 10);
      var _this$$data = this.$data,
          _this$$data$sValue = _this$$data.sValue,
          value = _this$$data$sValue === void 0 ? null : _this$$data$sValue,
          _this$$data$inputValu = _this$$data.inputValue,
          inputValue = _this$$data$inputValu === void 0 ? null : _this$$data$inputValu; // https://github.com/ant-design/ant-design/issues/7363
      // https://github.com/ant-design/ant-design/issues/16622

      var newValueInString = typeof newValue === 'number' ? newValue.toFixed(precision) : "".concat(newValue);
      var changed = newValue !== value || newValueInString !== "".concat(inputValue);

      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: newValue,
          inputValue: this.toPrecisionAsStep(v)
        }, callback);
      } else {
        // always set input value same as value
        this.setState({
          inputValue: this.toPrecisionAsStep(this.$data.sValue)
        }, callback);
      }

      if (changed) {
        this.__emit('update:value', newValue);

        this.__emit('change', newValue);
      }

      return newValue;
    },
    getPrecision: function getPrecision(value) {
      if (isValidProps(this.precision)) {
        return this.precision;
      }

      var valueString = value.toString();

      if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
      }

      var precision = 0;

      if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1;
      }

      return precision;
    },
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.$props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision: function getMaxPrecision(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (isValidProps(this.precision)) {
        return this.precision;
      }

      var step = this.step;
      var ratioPrecision = this.getPrecision(ratio);
      var stepPrecision = this.getPrecision(step);
      var currentValuePrecision = this.getPrecision(currentValue);

      if (!currentValue) {
        return ratioPrecision + stepPrecision;
      }

      return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    },
    getPrecisionFactor: function getPrecisionFactor(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var precision = this.getMaxPrecision(currentValue, ratio);
      return Math.pow(10, precision);
    },
    getInputDisplayValue: function getInputDisplayValue(state) {
      var _ref = state || this.$data,
          focused = _ref.focused,
          inputValue = _ref.inputValue,
          sValue = _ref.sValue;

      var inputDisplayValue;

      if (focused) {
        inputDisplayValue = inputValue;
      } else {
        inputDisplayValue = this.toPrecisionAsStep(sValue);
      }

      if (inputDisplayValue === undefined || inputDisplayValue === null) {
        inputDisplayValue = '';
      }

      var inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);

      if (isValidProps(this.$props.decimalSeparator)) {
        inputDisplayValueFormat = inputDisplayValueFormat.toString().replace('.', this.$props.decimalSeparator);
      }

      return inputDisplayValueFormat;
    },
    recordCursorPosition: function recordCursorPosition() {
      // Record position
      try {
        var inputElem = this.inputRef;
        this.cursorStart = inputElem.selectionStart;
        this.cursorEnd = inputElem.selectionEnd;
        this.currentValue = inputElem.value;
        this.cursorBefore = inputElem.value.substring(0, this.cursorStart);
        this.cursorAfter = inputElem.value.substring(this.cursorEnd);
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    fixCaret: function fixCaret(start, end) {
      if (start === undefined || end === undefined || !this.inputRef || !this.inputRef.value) {
        return;
      }

      try {
        var inputElem = this.inputRef;
        var currentStart = inputElem.selectionStart;
        var currentEnd = inputElem.selectionEnd;

        if (start !== currentStart || end !== currentEnd) {
          inputElem.setSelectionRange(start, end);
        }
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    restoreByAfter: function restoreByAfter(str) {
      if (str === undefined) return false;
      var fullStr = this.inputRef.value;
      var index = fullStr.lastIndexOf(str);
      if (index === -1) return false;
      var prevCursorPos = this.cursorBefore.length;

      if (this.lastKeyCode === _KeyCode.default.DELETE && this.cursorBefore.charAt(prevCursorPos - 1) === str[0]) {
        this.fixCaret(prevCursorPos, prevCursorPos);
        return true;
      }

      if (index + str.length === fullStr.length) {
        this.fixCaret(index, index);
        return true;
      }

      return false;
    },
    partRestoreByAfter: function partRestoreByAfter(str) {
      var _this3 = this;

      if (str === undefined) return false; // For loop from full str to the str with last char to map. e.g. 123
      // -> 123
      // -> 23
      // -> 3

      return Array.prototype.some.call(str, function (_, start) {
        var partStr = str.substring(start);
        return _this3.restoreByAfter(partStr);
      });
    },
    focus: function focus() {
      this.inputRef.focus();
      this.recordCursorPosition();
    },
    blur: function blur() {
      this.inputRef.blur();
    },
    formatWrapper: function formatWrapper(num) {
      // http://2ality.com/2012/03/signedzero.html
      // https://github.com/ant-design/ant-design/issues/9439
      if (this.formatter) {
        return this.formatter(num);
      }

      return num;
    },
    toPrecisionAsStep: function toPrecisionAsStep(num) {
      if (this.isNotCompleteNumber(num) || num === '') {
        return num;
      }

      var precision = Math.abs(this.getMaxPrecision(num));

      if (!isNaN(precision)) {
        return Number(num).toFixed(precision);
      }

      return num.toString();
    },
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber: function isNotCompleteNumber(num) {
      return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
    },
    toNumber: function toNumber(num) {
      var _this$$props2 = this.$props,
          precision = _this$$props2.precision,
          autofocus = _this$$props2.autofocus;
      var _this$$data$focused = this.$data.focused,
          focused = _this$$data$focused === void 0 ? autofocus : _this$$data$focused; // num.length > 16 => This is to prevent input of large numbers

      var numberIsTooLarge = num && num.length > 16 && focused;

      if (this.isNotCompleteNumber(num) || numberIsTooLarge) {
        return num;
      }

      if (isValidProps(precision)) {
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
      }

      return Number(num);
    },
    upStep: function upStep(val, rat) {
      var step = this.step;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));
      var result = ((precisionFactor * val + precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      return this.toNumber(result);
    },
    downStep: function downStep(val, rat) {
      var step = this.step;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));
      var result = ((precisionFactor * val - precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      return this.toNumber(result);
    },
    stepFn: function stepFn(type, e) {
      var _this4 = this;

      var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var recursive = arguments.length > 3 ? arguments[3] : undefined;
      this.stop();

      if (e) {
        // e.persist()
        e.preventDefault();
      }

      if (this.disabled) {
        return;
      }

      var max = this.max,
          min = this.min;
      var value = this.getCurrentValidValue(this.$data.inputValue) || 0;

      if (this.isNotCompleteNumber(value)) {
        return;
      }

      var val = this["".concat(type, "Step")](value, ratio);
      var outOfRange = val > max || val < min;

      if (val > max) {
        val = max;
      } else if (val < min) {
        val = min;
      }

      this.setValue(val);
      this.setState({
        focused: true
      });

      if (outOfRange) {
        return;
      }

      this.autoStepTimer = setTimeout(function () {
        _this4[type](e, ratio, true);
      }, recursive ? SPEED : DELAY);
    },
    stop: function stop() {
      if (this.autoStepTimer) {
        clearTimeout(this.autoStepTimer);
      }
    },
    down: function down(e, ratio, recursive) {
      this.pressingUpOrDown = true;
      this.stepFn('down', e, ratio, recursive);
    },
    up: function up(e, ratio, recursive) {
      this.pressingUpOrDown = true;
      this.stepFn('up', e, ratio, recursive);
    },
    handleInputClick: function handleInputClick() {
      this.__emit('click');
    },
    saveUp: function saveUp(node) {
      this.upHandlerRef = node;
    },
    saveDown: function saveDown(node) {
      this.downHandlerRef = node;
    },
    saveInput: function saveInput(node) {
      this.inputRef = node;
    },
    onCompositionstart: function onCompositionstart(e) {
      e.target.composing = true;
    },
    onCompositionend: function onCompositionend(e) {
      this.onChange(e);
      e.target.composing = false;
    }
  },
  render: function render() {
    var _classNames;

    var props = (0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs);
    var prefixCls = props.prefixCls,
        disabled = props.disabled,
        readonly = props.readonly,
        useTouch = props.useTouch,
        autocomplete = props.autocomplete,
        upHandler = props.upHandler,
        downHandler = props.downHandler,
        className = props.class;
    var classes = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, className, className), (0, _defineProperty2.default)(_classNames, prefixCls, true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-focused"), this.$data.focused), _classNames));
    var upDisabledClass = '';
    var downDisabledClass = '';
    var sValue = this.$data.sValue;

    if (sValue || sValue === 0) {
      if (!isNaN(sValue)) {
        var val = Number(sValue);

        if (val >= this.max) {
          upDisabledClass = "".concat(prefixCls, "-handler-up-disabled");
        }

        if (val <= this.min) {
          downDisabledClass = "".concat(prefixCls, "-handler-down-disabled");
        }
      } else {
        upDisabledClass = "".concat(prefixCls, "-handler-up-disabled");
        downDisabledClass = "".concat(prefixCls, "-handler-down-disabled");
      }
    }

    var dataOrAriaAttributeProps = {};

    for (var key in props) {
      if (props.hasOwnProperty(key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
        dataOrAriaAttributeProps[key] = props[key];
      }
    }

    var editable = !this.readonly && !this.disabled; // focus state, show input value
    // unfocus state, show valid value

    var inputDisplayValue = this.getInputDisplayValue();
    var upEvents;
    var downEvents;

    if (useTouch) {
      var _upEvents, _downEvents;

      upEvents = (_upEvents = {}, (0, _defineProperty2.default)(_upEvents, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', editable && !upDisabledClass && this.up), (0, _defineProperty2.default)(_upEvents, "onTouchend", this.stop), _upEvents);
      downEvents = (_downEvents = {}, (0, _defineProperty2.default)(_downEvents, _supportsPassive.default ? 'onTouchstartPassive' : 'onTouchstart', editable && !downDisabledClass && this.down), (0, _defineProperty2.default)(_downEvents, "onTouchend", this.stop), _downEvents);
    } else {
      upEvents = {
        onMousedown: editable && !upDisabledClass && this.up,
        onMouseup: this.stop,
        onMouseleave: this.stop
      };
      downEvents = {
        onMousedown: editable && !downDisabledClass && this.down,
        onMouseup: this.stop,
        onMouseleave: this.stop
      };
    }

    var isUpDisabled = !!upDisabledClass || disabled || readonly;
    var isDownDisabled = !!downDisabledClass || disabled || readonly;
    var upHandlerProps = (0, _extends2.default)((0, _extends2.default)({
      disabled: isUpDisabled,
      prefixCls: prefixCls,
      unselectable: 'unselectable',
      role: 'button',
      'aria-label': 'Increase Value',
      'aria-disabled': !!isUpDisabled,
      class: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-up ").concat(upDisabledClass)
    }, upEvents), {
      ref: this.saveUp
    });
    var downHandlerProps = (0, _extends2.default)((0, _extends2.default)({
      disabled: isDownDisabled,
      prefixCls: prefixCls,
      unselectable: 'unselectable',
      role: 'button',
      'aria-label': 'Decrease Value',
      'aria-disabled': !!isDownDisabled,
      class: "".concat(prefixCls, "-handler ").concat(prefixCls, "-handler-down ").concat(downDisabledClass)
    }, downEvents), {
      ref: this.saveDown
    });
    return (0, _vue.createVNode)("div", {
      "class": classes,
      "style": props.style,
      "title": props.title,
      "onMouseenter": props.onMouseenter,
      "onMouseleave": props.onMouseleave,
      "onMouseover": props.onMouseover,
      "onMouseout": props.onMouseout
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-handler-wrap")
    }, [(0, _vue.createVNode)("span", null, [(0, _vue.createVNode)(_InputHandler.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, upHandlerProps), {}, {
      "key": "upHandler"
    }), {
      default: function _default() {
        return [upHandler || (0, _vue.createVNode)("span", {
          "unselectable": "unselectable",
          "class": "".concat(prefixCls, "-handler-up-inner"),
          "onClick": preventDefault
        }, null)];
      }
    })]), (0, _vue.createVNode)(_InputHandler.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, downHandlerProps), {}, {
      "key": "downHandler"
    }), {
      default: function _default() {
        return [downHandler || (0, _vue.createVNode)("span", {
          "unselectable": "unselectable",
          "class": "".concat(prefixCls, "-handler-down-inner"),
          "onClick": preventDefault
        }, null)];
      }
    })]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-input-wrap")
    }, [(0, _vue.createVNode)("input", (0, _objectSpread2.default)({
      "role": "spinbutton",
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
      "aria-valuenow": sValue,
      "required": this.required,
      "type": props.type,
      "placeholder": this.placeholder,
      "onClick": this.handleInputClick,
      "class": "".concat(prefixCls, "-input"),
      "tabindex": this.tabindex,
      "autocomplete": autocomplete,
      "onFocus": this.onFocus,
      "onBlur": this.onBlur,
      "onKeydown": editable && this.onKeyDown,
      "onKeyup": editable && this.onKeyUp,
      "autofocus": this.autofocus,
      "maxlength": this.maxlength,
      "readonly": this.readonly,
      "disabled": this.disabled,
      "max": this.max,
      "min": this.min,
      "step": this.step,
      "name": this.name,
      "title": this.title,
      "id": this.id,
      "onInput": this.onTrigger,
      "onCompositionstart": this.onCompositionstart,
      "onCompositionend": this.onCompositionend,
      "ref": this.saveInput,
      "value": inputDisplayValue,
      "pattern": this.pattern
    }, dataOrAriaAttributeProps), null)])]);
  }
});

exports.default = _default2;