"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _index = require("../util/index");

var ROW = 4;
var COL = 3;

function noop() {}

var MonthTable = {
  name: 'MonthTable',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    cellRender: _vueTypes.default.func,
    prefixCls: _vueTypes.default.string,
    value: _vueTypes.default.object,
    locale: _vueTypes.default.any,
    contentRender: _vueTypes.default.any,
    disabledDate: _vueTypes.default.func
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
          var content = (0, _index.getMonthName)(current);
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
    var today = (0, _index.getTodayTime)(value);
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

        var classNameMap = (_classNameMap = {}, (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-cell"), 1), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-cell-disabled"), disabled), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-selected-cell"), monthData.value === currentMonth), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-current-cell"), today.year() === value.year() && monthData.value === today.month()), _classNameMap);
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

          cellEl = (0, _vue.createVNode)("a", {
            "class": "".concat(prefixCls, "-month")
          }, [content]);
        }

        return (0, _vue.createVNode)("td", {
          "role": "gridcell",
          "key": monthData.value,
          "onClick": disabled ? noop : function () {
            return _this.chooseMonth(monthData.value);
          },
          "title": monthData.title,
          "class": classNameMap
        }, [cellEl]);
      });
      return (0, _vue.createVNode)("tr", {
        "key": index,
        "role": "row"
      }, [tds]);
    });
    return (0, _vue.createVNode)("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [(0, _vue.createVNode)("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [monthsEls])]);
  }
};
var _default = MonthTable;
exports.default = _default;