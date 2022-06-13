import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import DateConstants from './DateConstants';
import moment from 'moment';

var DateTHead = function DateTHead(_, _ref) {
  var attrs = _ref.attrs;
  var value = attrs.value;
  var localeData = value.localeData();
  var prefixCls = attrs.prefixCls;
  var veryShortWeekdays = [];
  var weekDays = [];
  var firstDayOfWeek = localeData.firstDayOfWeek();
  var showWeekNumberEl;
  var now = moment();

  for (var dateColIndex = 0; dateColIndex < DateConstants.DATE_COL_COUNT; dateColIndex++) {
    var index = (firstDayOfWeek + dateColIndex) % DateConstants.DATE_COL_COUNT;
    now.day(index);
    veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
    weekDays[dateColIndex] = localeData.weekdaysShort(now);
  }

  if (attrs.showWeekNumber) {
    showWeekNumberEl = _createVNode("th", {
      "role": "columnheader",
      "class": "".concat(prefixCls, "-column-header ").concat(prefixCls, "-week-number-header")
    }, [_createVNode("span", {
      "class": "".concat(prefixCls, "-column-header-inner")
    }, [_createTextVNode("x")])]);
  }

  var weekDaysEls = weekDays.map(function (day, xindex) {
    return _createVNode("th", {
      "key": xindex,
      "role": "columnheader",
      "title": day,
      "class": "".concat(prefixCls, "-column-header")
    }, [_createVNode("span", {
      "class": "".concat(prefixCls, "-column-header-inner")
    }, [veryShortWeekdays[xindex]])]);
  });
  return _createVNode("thead", null, [_createVNode("tr", {
    "role": "row"
  }, [showWeekNumberEl, weekDaysEls])]);
};

DateTHead.inheritAttrs = false;
export default DateTHead;