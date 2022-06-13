"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _DateConstants = _interopRequireDefault(require("./DateConstants"));

var _moment = _interopRequireDefault(require("moment"));

var DateTHead = function DateTHead(_, _ref) {
  var attrs = _ref.attrs;
  var value = attrs.value;
  var localeData = value.localeData();
  var prefixCls = attrs.prefixCls;
  var veryShortWeekdays = [];
  var weekDays = [];
  var firstDayOfWeek = localeData.firstDayOfWeek();
  var showWeekNumberEl;
  var now = (0, _moment.default)();

  for (var dateColIndex = 0; dateColIndex < _DateConstants.default.DATE_COL_COUNT; dateColIndex++) {
    var index = (firstDayOfWeek + dateColIndex) % _DateConstants.default.DATE_COL_COUNT;
    now.day(index);
    veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
    weekDays[dateColIndex] = localeData.weekdaysShort(now);
  }

  if (attrs.showWeekNumber) {
    showWeekNumberEl = (0, _vue.createVNode)("th", {
      "role": "columnheader",
      "class": "".concat(prefixCls, "-column-header ").concat(prefixCls, "-week-number-header")
    }, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-column-header-inner")
    }, [(0, _vue.createTextVNode)("x")])]);
  }

  var weekDaysEls = weekDays.map(function (day, xindex) {
    return (0, _vue.createVNode)("th", {
      "key": xindex,
      "role": "columnheader",
      "title": day,
      "class": "".concat(prefixCls, "-column-header")
    }, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-column-header-inner")
    }, [veryShortWeekdays[xindex]])]);
  });
  return (0, _vue.createVNode)("thead", null, [(0, _vue.createVNode)("tr", {
    "role": "row"
  }, [showWeekNumberEl, weekDaysEls])]);
};

DateTHead.inheritAttrs = false;
var _default = DateTHead;
exports.default = _default;