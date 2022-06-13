import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getComponent, findDOMNode } from '../../../_util/props-util';
import moment from 'moment';
import { formatDate } from '../util';
import KeyCode from '../../../_util/KeyCode';
import { withDirectives } from 'vue';
import antInput from '../../../_util/antInputDirective';
var cachedSelectionStart;
var cachedSelectionEnd;
var dateInputInstance;
var DateInput = {
  name: 'DateInput',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    timePicker: PropTypes.object,
    value: PropTypes.object,
    disabledTime: PropTypes.any,
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
    locale: PropTypes.object,
    disabledDate: PropTypes.func,
    // onChange: PropTypes.func,
    // onClear: PropTypes.func,
    placeholder: PropTypes.string,
    // onSelect: PropTypes.func,
    selectedValue: PropTypes.object,
    clearIcon: PropTypes.any,
    inputMode: PropTypes.string,
    inputReadOnly: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    showClear: PropTypes.looseBool
  },
  data: function data() {
    var selectedValue = this.selectedValue;
    return {
      str: formatDate(selectedValue, this.format),
      invalid: false,
      hasFocus: false
    };
  },
  watch: {
    selectedValue: function selectedValue() {
      this.setState();
    },
    format: function format() {
      this.setState();
    }
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      if (dateInputInstance && _this.$data.hasFocus && !_this.invalid && !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
        dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
      }
    });
  },
  getInstance: function getInstance() {
    return dateInputInstance;
  },
  methods: {
    getDerivedStateFromProps: function getDerivedStateFromProps(nextProps, state) {
      var newState = {};

      if (dateInputInstance) {
        cachedSelectionStart = dateInputInstance.selectionStart;
        cachedSelectionEnd = dateInputInstance.selectionEnd;
      } // when popup show, click body will call this, bug!


      var selectedValue = nextProps.selectedValue;

      if (!state.hasFocus) {
        newState = {
          str: formatDate(selectedValue, this.format),
          invalid: false
        };
      }

      return newState;
    },
    onClear: function onClear() {
      this.setState({
        str: ''
      });

      this.__emit('clear', null);
    },
    onInputChange: function onInputChange(e) {
      var _e$target = e.target,
          str = _e$target.value,
          composing = _e$target.composing;
      var _this$str = this.str,
          oldStr = _this$str === void 0 ? '' : _this$str;
      if (e.isComposing || composing || oldStr === str) return;
      var _this$$props = this.$props,
          disabledDate = _this$$props.disabledDate,
          format = _this$$props.format,
          selectedValue = _this$$props.selectedValue; // 没有内容，合法并直接退出

      if (!str) {
        this.__emit('change', null);

        this.setState({
          invalid: false,
          str: str
        });
        return;
      } // 不合法直接退出


      var parsed = moment(str, format, true);

      if (!parsed.isValid()) {
        this.setState({
          invalid: true,
          str: str
        });
        return;
      }

      var value = this.value.clone();
      value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      if (!value || disabledDate && disabledDate(value)) {
        this.setState({
          invalid: true,
          str: str
        });
        return;
      }

      if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
        this.setState({
          invalid: false,
          str: str
        });

        this.__emit('change', value);
      }
    },
    onFocus: function onFocus() {
      this.setState({
        hasFocus: true
      });
    },
    onBlur: function onBlur() {
      this.setState(function (prevState, prevProps) {
        return {
          hasFocus: false,
          str: formatDate(prevProps.value, prevProps.format)
        };
      });
    },
    onKeyDown: function onKeyDown(event) {
      var keyCode = event.keyCode;
      var _this$$props2 = this.$props,
          value = _this$$props2.value,
          disabledDate = _this$$props2.disabledDate;

      if (keyCode === KeyCode.ENTER) {
        var validateDate = !disabledDate || !disabledDate(value);

        if (validateDate) {
          this.__emit('select', value.clone());
        }

        event.preventDefault();
      }
    },
    getRootDOMNode: function getRootDOMNode() {
      return findDOMNode(this);
    },
    focus: function focus() {
      if (dateInputInstance) {
        dateInputInstance.focus();
      }
    },
    saveDateInput: function saveDateInput(dateInput) {
      dateInputInstance = dateInput;
    }
  },
  render: function render() {
    var invalid = this.invalid,
        str = this.str,
        locale = this.locale,
        prefixCls = this.prefixCls,
        placeholder = this.placeholder,
        disabled = this.disabled,
        showClear = this.showClear,
        inputMode = this.inputMode,
        inputReadOnly = this.inputReadOnly;
    var clearIcon = getComponent(this, 'clearIcon');
    var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-input-wrap")
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-date-input-wrap")
    }, [withDirectives(_createVNode("input", {
      "ref": this.saveDateInput,
      "class": "".concat(prefixCls, "-input ").concat(invalidClass),
      "value": str,
      "disabled": disabled,
      "placeholder": placeholder,
      "onInput": this.onInputChange,
      "onChange": this.onInputChange,
      "onKeydown": this.onKeyDown,
      "onFocus": this.onFocus,
      "onBlur": this.onBlur,
      "inputMode": inputMode,
      "readonly": inputReadOnly
    }, null), [[antInput]])]), showClear ? _createVNode("a", {
      "role": "button",
      "title": locale.clear,
      "onClick": this.onClear
    }, [clearIcon || _createVNode("span", {
      "class": "".concat(prefixCls, "-clear-btn")
    }, null)]) : null]);
  }
};
export default DateInput;