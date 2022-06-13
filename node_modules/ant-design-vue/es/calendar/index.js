import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { getOptionProps, hasProp } from '../_util/props-util';
import moment from 'moment';
import FullCalendar from '../vc-calendar/src/FullCalendar';
import Header from './Header';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import interopDefault from '../_util/interopDefault';
import { defaultConfigProvider } from '../config-provider';
import enUS from './locale/en_US';
import { checkValidate, stringToMoment, momentToString, TimeType } from '../_util/moment-util';
import { tuple, withInstall } from '../_util/type';

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) {
    return "0".concat(v);
  }

  return "".concat(v);
}

var CalendarModeTypes = tuple('month', 'year');
export var CalendarProps = {
  monthCellRender: PropTypes.func,
  dateCellRender: PropTypes.func,
  monthFullCellRender: PropTypes.func,
  dateFullCellRender: PropTypes.func,
  prefixCls: PropTypes.string,
  value: TimeType,
  defaultValue: TimeType,
  mode: PropTypes.oneOf(CalendarModeTypes),
  fullscreen: PropTypes.looseBool.def(true),
  locale: PropTypes.object.def({}),
  disabledDate: PropTypes.func,
  validRange: {
    type: Array
  },
  headerRender: PropTypes.func,
  valueFormat: PropTypes.string,
  onPanelChange: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  'onUpdate:value': PropTypes.func
};
var Calendar = defineComponent({
  name: 'ACalendar',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: CalendarProps,
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      sPrefixCls: undefined
    };
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue,
        valueFormat = this.valueFormat;
    var sValue = value || defaultValue || interopDefault(moment)();
    checkValidate('Calendar', defaultValue, 'defaultValue', valueFormat);
    checkValidate('Calendar', value, 'value', valueFormat);
    return {
      sValue: stringToMoment(sValue, valueFormat),
      sMode: this.mode || 'month'
    };
  },
  watch: {
    value: function value(val) {
      checkValidate('Calendar', val, 'value', this.valueFormat);
      this.setState({
        sValue: stringToMoment(val, this.valueFormat)
      });
    },
    mode: function mode(val) {
      this.setState({
        sMode: val
      });
    }
  },
  methods: {
    onHeaderValueChange: function onHeaderValueChange(value) {
      this.setValue(value, 'changePanel');
    },
    onHeaderTypeChange: function onHeaderTypeChange(mode) {
      this.sMode = mode;
      this.triggerPanelChange(this.sValue, mode);
    },
    triggerPanelChange: function triggerPanelChange(value, mode) {
      var val = this.valueFormat ? momentToString(value, this.valueFormat) : value;

      if (value !== this.sValue) {
        this.$emit('update:value', val);
        this.$emit('change', val);
      }

      this.$emit('panelChange', val, mode);
    },
    triggerSelect: function triggerSelect(value) {
      this.setValue(value, 'select');
    },
    setValue: function setValue(value, way) {
      var prevValue = this.value ? stringToMoment(this.value, this.valueFormat) : this.sValue;
      var mode = this.sMode,
          valueFormat = this.valueFormat;

      if (!hasProp(this, 'value')) {
        this.setState({
          sValue: value
        });
      }

      if (way === 'select') {
        var val = valueFormat ? momentToString(value, valueFormat) : value;

        if (prevValue && prevValue.month() !== value.month()) {
          this.triggerPanelChange(value, mode);
        } else {
          this.$emit('update:value', val);
        }

        this.$emit('select', val);
      } else if (way === 'changePanel') {
        this.triggerPanelChange(value, mode);
      }
    },
    getDateRange: function getDateRange(validRange, disabledDate) {
      return function (current) {
        if (!current) {
          return false;
        }

        var _validRange = _slicedToArray(validRange, 2),
            startDate = _validRange[0],
            endDate = _validRange[1];

        var inRange = !current.isBetween(startDate, endDate, 'days', '[]');

        if (disabledDate) {
          return disabledDate(current) || inRange;
        }

        return inRange;
      };
    },
    getDefaultLocale: function getDefaultLocale() {
      var result = _extends(_extends({}, enUS), this.$props.locale);

      result.lang = _extends(_extends({}, result.lang), (this.$props.locale || {}).lang);
      return result;
    },
    monthCellRender2: function monthCellRender2(_ref) {
      var value = _ref.current;
      var sPrefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var monthCellRender = this.monthCellRender || $slots.monthCellRender || noop;
      return _createVNode("div", {
        "class": "".concat(sPrefixCls, "-month")
      }, [_createVNode("div", {
        "class": "".concat(sPrefixCls, "-value")
      }, [value.localeData().monthsShort(value)]), _createVNode("div", {
        "class": "".concat(sPrefixCls, "-content")
      }, [monthCellRender({
        current: value
      })])]);
    },
    dateCellRender2: function dateCellRender2(_ref2) {
      var value = _ref2.current;
      var sPrefixCls = this.sPrefixCls,
          $slots = this.$slots;
      var dateCellRender = this.dateCellRender || $slots.dateCellRender || noop;
      return _createVNode("div", {
        "class": "".concat(sPrefixCls, "-date")
      }, [_createVNode("div", {
        "class": "".concat(sPrefixCls, "-value")
      }, [zerofixed(value.date())]), _createVNode("div", {
        "class": "".concat(sPrefixCls, "-content")
      }, [dateCellRender({
        current: value
      })])]);
    },
    renderCalendar: function renderCalendar(locale, localeCode) {
      var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

      var value = this.sValue,
          mode = this.sMode,
          $slots = this.$slots;

      if (value && localeCode) {
        value.locale(localeCode);
      }

      var customizePrefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          dateFullCellRender = props.dateFullCellRender,
          monthFullCellRender = props.monthFullCellRender,
          className = props.class,
          style = props.style;
      var headerRender = this.headerRender || $slots.headerRender;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      this.sPrefixCls = prefixCls;
      var cls = className || '';

      if (fullscreen) {
        cls += " ".concat(prefixCls, "-fullscreen");
      }

      var monthCellRender = monthFullCellRender || $slots.monthFullCellRender || this.monthCellRender2;
      var dateCellRender = dateFullCellRender || $slots.dateFullCellRender || this.dateCellRender2;
      var disabledDate = props.disabledDate;

      if (props.validRange) {
        disabledDate = this.getDateRange(props.validRange, disabledDate);
      }

      var fullCalendarProps = _extends(_extends(_extends({}, props), this.$attrs), {
        Select: {},
        locale: locale.lang,
        type: mode === 'year' ? 'month' : 'date',
        prefixCls: prefixCls,
        showHeader: false,
        value: value,
        monthCellRender: monthCellRender,
        dateCellRender: dateCellRender,
        disabledDate: disabledDate,
        onSelect: this.triggerSelect
      });

      return _createVNode("div", {
        "class": cls,
        "style": style
      }, [_createVNode(Header, {
        "fullscreen": fullscreen,
        "type": mode,
        "headerRender": headerRender,
        "value": value,
        "locale": locale.lang,
        "prefixCls": prefixCls,
        "onTypeChange": this.onHeaderTypeChange,
        "onValueChange": this.onHeaderValueChange,
        "validRange": props.validRange
      }, null), _createVNode(FullCalendar, fullCalendarProps, null)]);
    }
  },
  render: function render() {
    return _createVNode(LocaleReceiver, {
      "componentName": "Calendar",
      "defaultLocale": this.getDefaultLocale,
      "children": this.renderCalendar
    }, null);
  }
});
export { HeaderProps } from './Header';
export default withInstall(Calendar);