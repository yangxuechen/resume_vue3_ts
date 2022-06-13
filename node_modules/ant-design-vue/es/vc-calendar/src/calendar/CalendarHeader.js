import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getOptionProps } from '../../../_util/props-util';
import MonthPanel from '../month/MonthPanel';
import YearPanel from '../year/YearPanel';
import DecadePanel from '../decade/DecadePanel';

function noop() {}

function goMonth(direction) {
  var next = this.value.clone();
  next.add(direction, 'months');

  this.__emit('valueChange', next);
}

function goYear(direction) {
  var next = this.value.clone();
  next.add(direction, 'years');

  this.__emit('valueChange', next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

var CalendarHeader = {
  name: 'CalendarHeader',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    prefixCls: PropTypes.string,
    value: PropTypes.object,
    // onValueChange: PropTypes.func,
    showTimePicker: PropTypes.looseBool,
    // onPanelChange: PropTypes.func,
    locale: PropTypes.object,
    enablePrev: PropTypes.any.def(1),
    enableNext: PropTypes.any.def(1),
    disabledMonth: PropTypes.func,
    mode: PropTypes.any,
    monthCellRender: PropTypes.func,
    monthCellContentRender: PropTypes.func,
    renderFooter: PropTypes.func
  },
  data: function data() {
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {
      yearPanelReferer: null
    };
  },
  methods: {
    onMonthSelect: function onMonthSelect(value) {
      this.__emit('panelChange', value, 'date');

      if (this.$attrs.onMonthSelect) {
        this.__emit('monthSelect', value);
      } else {
        this.__emit('valueChange', value);
      }
    },
    onYearSelect: function onYearSelect(value) {
      var referer = this.yearPanelReferer;
      this.setState({
        yearPanelReferer: null
      });

      this.__emit('panelChange', value, referer);

      this.__emit('valueChange', value);
    },
    onDecadeSelect: function onDecadeSelect(value) {
      this.__emit('panelChange', value, 'year');

      this.__emit('valueChange', value);
    },
    changeYear: function changeYear(direction) {
      if (direction > 0) {
        this.nextYear();
      } else {
        this.previousYear();
      }
    },
    monthYearElement: function monthYearElement(showTimePicker) {
      var _this = this;

      var props = this.$props;
      var prefixCls = props.prefixCls;
      var locale = props.locale;
      var value = props.value;
      var localeData = value.localeData();
      var monthBeforeYear = locale.monthBeforeYear;
      var selectClassName = "".concat(prefixCls, "-").concat(monthBeforeYear ? 'my-select' : 'ym-select');
      var timeClassName = showTimePicker ? " ".concat(prefixCls, "-time-status") : '';

      var year = _createVNode("a", {
        "class": "".concat(prefixCls, "-year-select").concat(timeClassName),
        "role": "button",
        "onClick": showTimePicker ? noop : function () {
          return _this.showYearPanel('date');
        },
        "title": showTimePicker ? null : locale.yearSelect
      }, [value.format(locale.yearFormat)]);

      var month = _createVNode("a", {
        "class": "".concat(prefixCls, "-month-select").concat(timeClassName),
        "role": "button",
        "onClick": showTimePicker ? noop : this.showMonthPanel,
        "title": showTimePicker ? null : locale.monthSelect
      }, [locale.monthFormat ? value.format(locale.monthFormat) : localeData.monthsShort(value)]);

      var day;

      if (showTimePicker) {
        day = _createVNode("a", {
          "class": "".concat(prefixCls, "-day-select").concat(timeClassName),
          "role": "button"
        }, [value.format(locale.dayFormat)]);
      }

      var my = [];

      if (monthBeforeYear) {
        my = [month, day, year];
      } else {
        my = [year, month, day];
      }

      return _createVNode("span", {
        "class": selectClassName
      }, [my]);
    },
    showMonthPanel: function showMonthPanel() {
      // null means that users' interaction doesn't change value
      this.__emit('panelChange', null, 'month');
    },
    showYearPanel: function showYearPanel(referer) {
      this.setState({
        yearPanelReferer: referer
      });

      this.__emit('panelChange', null, 'year');
    },
    showDecadePanel: function showDecadePanel() {
      this.__emit('panelChange', null, 'decade');
    }
  },
  render: function render() {
    var _this2 = this;

    var props = getOptionProps(this);
    var prefixCls = props.prefixCls,
        locale = props.locale,
        mode = props.mode,
        value = props.value,
        showTimePicker = props.showTimePicker,
        enableNext = props.enableNext,
        enablePrev = props.enablePrev,
        disabledMonth = props.disabledMonth,
        renderFooter = props.renderFooter;
    var panel = null;

    if (mode === 'month') {
      panel = _createVNode(MonthPanel, {
        "locale": locale,
        "value": value,
        "rootPrefixCls": prefixCls,
        "onSelect": this.onMonthSelect,
        "onYearPanelShow": function onYearPanelShow() {
          return _this2.showYearPanel('month');
        },
        "disabledDate": disabledMonth,
        "cellRender": props.monthCellRender,
        "contentRender": props.monthCellContentRender,
        "renderFooter": renderFooter,
        "changeYear": this.changeYear
      }, null);
    }

    if (mode === 'year') {
      panel = _createVNode(YearPanel, {
        "locale": locale,
        "value": value,
        "rootPrefixCls": prefixCls,
        "onSelect": this.onYearSelect,
        "onDecadePanelShow": this.showDecadePanel,
        "renderFooter": renderFooter
      }, null);
    }

    if (mode === 'decade') {
      panel = _createVNode(DecadePanel, {
        "locale": locale,
        "value": value,
        "rootPrefixCls": prefixCls,
        "onSelect": this.onDecadeSelect,
        "renderFooter": renderFooter
      }, null);
    }

    return _createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [_createVNode("div", {
      "style": {
        position: 'relative'
      }
    }, [showIf(enablePrev && !showTimePicker, _createVNode("a", {
      "class": "".concat(prefixCls, "-prev-year-btn"),
      "role": "button",
      "onClick": this.previousYear,
      "title": locale.previousYear
    }, null)), showIf(enablePrev && !showTimePicker, _createVNode("a", {
      "class": "".concat(prefixCls, "-prev-month-btn"),
      "role": "button",
      "onClick": this.previousMonth,
      "title": locale.previousMonth
    }, null)), this.monthYearElement(showTimePicker), showIf(enableNext && !showTimePicker, _createVNode("a", {
      "class": "".concat(prefixCls, "-next-month-btn"),
      "onClick": this.nextMonth,
      "title": locale.nextMonth
    }, null)), showIf(enableNext && !showTimePicker, _createVNode("a", {
      "class": "".concat(prefixCls, "-next-year-btn"),
      "onClick": this.nextYear,
      "title": locale.nextYear
    }, null))]), panel]);
  }
};
export default CalendarHeader;