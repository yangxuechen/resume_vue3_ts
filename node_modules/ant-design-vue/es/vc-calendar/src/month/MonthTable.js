import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getTodayTime, getMonthName } from '../util/index';
var ROW = 4;
var COL = 3;

function noop() {}

var MonthTable = {
  name: 'MonthTable',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    cellRender: PropTypes.func,
    prefixCls: PropTypes.string,
    value: PropTypes.object,
    locale: PropTypes.any,
    contentRender: PropTypes.any,
    disabledDate: PropTypes.func
  },
  data: function data() {
    return {
      sValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.setState({
        sValue: val
      });
    }
  },
  methods: {
    setAndSelectValue: function setAndSelectValue(value) {
      this.setState({
        sValue: value
      });

      this.__emit('select', value);
    },
    chooseMonth: function chooseMonth(month) {
      var next = this.sValue.clone();
      next.month(month);
      this.setAndSelectValue(next);
    },
    months: function months() {
      var value = this.sValue;
      var current = value.clone();
      var months = [];
      var index = 0;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        months[rowIndex] = [];

        for (var colIndex = 0; colIndex < COL; colIndex++) {
          current.month(index);
          var content = getMonthName(current);
          months[rowIndex][colIndex] = {
            value: index,
            content: content,
            title: content
          };
          index++;
        }
      }

      return months;
    }
  },
  render: function render() {
    var _this = this;

    var props = this.$props;
    var value = this.sValue;
    var today = getTodayTime(value);
    var months = this.months();
    var currentMonth = value.month();
    var prefixCls = props.prefixCls,
        locale = props.locale,
        contentRender = props.contentRender,
        cellRender = props.cellRender,
        disabledDate = props.disabledDate;
    var monthsEls = months.map(function (month, index) {
      var tds = month.map(function (monthData) {
        var _classNameMap;

        var disabled = false;

        if (disabledDate) {
          var testValue = value.clone();
          testValue.month(monthData.value);
          disabled = disabledDate(testValue);
        }

        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-cell-disabled"), disabled), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), monthData.value === currentMonth), _defineProperty(_classNameMap, "".concat(prefixCls, "-current-cell"), today.year() === value.year() && monthData.value === today.month()), _classNameMap);
        var cellEl;

        if (cellRender) {
          var currentValue = value.clone();
          currentValue.month(monthData.value);
          cellEl = cellRender({
            current: currentValue,
            locale: locale
          });
        } else {
          var content;

          if (contentRender) {
            var _currentValue = value.clone();

            _currentValue.month(monthData.value);

            content = contentRender({
              current: _currentValue,
              locale: locale
            });
          } else {
            content = monthData.content;
          }

          cellEl = _createVNode("a", {
            "class": "".concat(prefixCls, "-month")
          }, [content]);
        }

        return _createVNode("td", {
          "role": "gridcell",
          "key": monthData.value,
          "onClick": disabled ? noop : function () {
            return _this.chooseMonth(monthData.value);
          },
          "title": monthData.title,
          "class": classNameMap
        }, [cellEl]);
      });
      return _createVNode("tr", {
        "key": index,
        "role": "row"
      }, [tds]);
    });
    return _createVNode("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [_createVNode("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [monthsEls])]);
  }
};
export default MonthTable;