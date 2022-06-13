"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _propsUtil = require("../../../_util/props-util");

var _classNames = _interopRequireDefault(require("../../../_util/classNames"));

var _DateConstants = _interopRequireDefault(require("./DateConstants"));

var _util = require("../util/");

function noop() {}

function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }

  return current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }

  return current.year() === today.year() && current.month() > today.month();
}

function getIdFromDate(date) {
  return "rc-calendar-".concat(date.year(), "-").concat(date.month(), "-").concat(date.date());
}

var DateTBody = {
  name: 'DateTBody',
  inheritAttrs: false,
  props: {
    contentRender: _vueTypes.default.func,
    dateRender: _vueTypes.default.func,
    disabledDate: _vueTypes.default.func,
    prefixCls: _vueTypes.default.string,
    selectedValue: _vueTypes.default.any,
    value: _vueTypes.default.object,
    hoverValue: _vueTypes.default.any.def([]),
    showWeekNumber: _vueTypes.default.looseBool
  },
  render: function render() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var contentRender = props.contentRender,
        prefixCls = props.prefixCls,
        selectedValue = props.selectedValue,
        value = props.value,
        showWeekNumber = props.showWeekNumber,
        dateRender = props.dateRender,
        disabledDate = props.disabledDate,
        hoverValue = props.hoverValue;
    var _this$$attrs = this.$attrs,
        _this$$attrs$onSelect = _this$$attrs.onSelect,
        onSelect = _this$$attrs$onSelect === void 0 ? noop : _this$$attrs$onSelect,
        _this$$attrs$onDayHov = _this$$attrs.onDayHover,
        onDayHover = _this$$attrs$onDayHov === void 0 ? noop : _this$$attrs$onDayHov;
    var iIndex;
    var jIndex;
    var current;
    var dateTable = [];
    var today = (0, _util.getTodayTime)(value);
    var cellClass = "".concat(prefixCls, "-cell");
    var weekNumberCellClass = "".concat(prefixCls, "-week-number-cell");
    var dateClass = "".concat(prefixCls, "-date");
    var todayClass = "".concat(prefixCls, "-today");
    var selectedClass = "".concat(prefixCls, "-selected-day");
    var selectedDateClass = "".concat(prefixCls, "-selected-date"); // do not move with mouse operation

    var selectedStartDateClass = "".concat(prefixCls, "-selected-start-date");
    var selectedEndDateClass = "".concat(prefixCls, "-selected-end-date");
    var inRangeClass = "".concat(prefixCls, "-in-range-cell");
    var lastMonthDayClass = "".concat(prefixCls, "-last-month-cell");
    var nextMonthDayClass = "".concat(prefixCls, "-next-month-btn-day");
    var disabledClass = "".concat(prefixCls, "-disabled-cell");
    var firstDisableClass = "".concat(prefixCls, "-disabled-cell-first-of-row");
    var lastDisableClass = "".concat(prefixCls, "-disabled-cell-last-of-row");
    var lastDayOfMonthClass = "".concat(prefixCls, "-last-day-of-month");
    var month1 = value.clone();
    month1.date(1);
    var day = month1.day();
    var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7; // calculate last month

    var lastMonth1 = month1.clone();
    lastMonth1.add(0 - lastMonthDiffDay, 'days');
    var passed = 0;

    for (iIndex = 0; iIndex < _DateConstants.default.DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < _DateConstants.default.DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;

        if (passed) {
          current = current.clone();
          current.add(passed, 'days');
        }

        dateTable.push(current);
        passed++;
      }
    }

    var tableHtml = [];
    passed = 0;

    for (iIndex = 0; iIndex < _DateConstants.default.DATE_ROW_COUNT; iIndex++) {
      var _cx;

      var isCurrentWeek = void 0;
      var weekNumberCell = void 0;
      var isActiveWeek = false;
      var dateCells = [];

      if (showWeekNumber) {
        weekNumberCell = (0, _vue.createVNode)("td", {
          "key": "week-".concat(dateTable[passed].week()),
          "role": "gridcell",
          "class": weekNumberCellClass
        }, [dateTable[passed].week()]);
      }

      for (jIndex = 0; jIndex < _DateConstants.default.DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];

        if (jIndex < _DateConstants.default.DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }

        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }

        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += " ".concat(todayClass);
          isCurrentWeek = true;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          var rangeValue = hoverValue.length ? hoverValue : selectedValue;

          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = rangeValue[0];
            var endValue = rangeValue[1];

            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
                isActiveWeek = true;
                cls += " ".concat(selectedStartDateClass);
              }
            }

            if (startValue || endValue) {
              if (isSameDay(current, endValue)) {
                selected = true;
                isActiveWeek = true;
                cls += " ".concat(selectedEndDateClass);
              } else if ((startValue === null || startValue === undefined) && current.isBefore(endValue, 'day')) {
                cls += " ".concat(inRangeClass);
              } else if ((endValue === null || endValue === undefined) && current.isAfter(startValue, 'day')) {
                cls += " ".concat(inRangeClass);
              } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
                cls += " ".concat(inRangeClass);
              }
            }
          }
        } else if (isSameDay(current, value)) {
          // keyboard change value, highlight works
          selected = true;
          isActiveWeek = true;
        }

        if (isSameDay(current, selectedValue)) {
          cls += " ".concat(selectedDateClass);
        }

        if (isBeforeCurrentMonthYear) {
          cls += " ".concat(lastMonthDayClass);
        }

        if (isAfterCurrentMonthYear) {
          cls += " ".concat(nextMonthDayClass);
        }

        if (current.clone().endOf('month').date() === current.date()) {
          cls += " ".concat(lastDayOfMonthClass);
        }

        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += " ".concat(firstDisableClass);
            }

            if (!next || !disabledDate(next, value)) {
              cls += " ".concat(lastDisableClass);
            }
          }
        }

        if (selected) {
          cls += " ".concat(selectedClass);
        }

        if (disabled) {
          cls += " ".concat(disabledClass);
        }

        var dateHtml = void 0;

        if (dateRender) {
          dateHtml = dateRender({
            current: current,
            today: value
          });
        } else {
          var content = contentRender ? contentRender({
            current: current,
            today: value
          }) : current.date();
          dateHtml = (0, _vue.createVNode)("div", {
            "key": getIdFromDate(current),
            "class": dateClass,
            "aria-selected": selected,
            "aria-disabled": disabled
          }, [content]);
        }

        dateCells.push((0, _vue.createVNode)("td", {
          "key": passed,
          "onClick": disabled ? noop : onSelect.bind(null, current),
          "onMouseenter": disabled ? noop : onDayHover.bind(null, current),
          "role": "gridcell",
          "title": (0, _util.getTitleString)(current),
          "class": cls
        }, [dateHtml]));
        passed++;
      }

      tableHtml.push((0, _vue.createVNode)("tr", {
        "key": iIndex,
        "role": "row",
        "class": (0, _classNames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-current-week"), isCurrentWeek), (0, _defineProperty2.default)(_cx, "".concat(prefixCls, "-active-week"), isActiveWeek), _cx))
      }, [weekNumberCell, dateCells]));
    }

    return (0, _vue.createVNode)("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [tableHtml]);
  }
};
var _default = DateTBody;
exports.default = _default;