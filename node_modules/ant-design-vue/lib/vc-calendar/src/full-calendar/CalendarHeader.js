"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _util = require("../util");

var CalendarHeader = {
  name: 'CalendarHeader',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    value: _vueTypes.default.object,
    locale: _vueTypes.default.object,
    yearSelectOffset: _vueTypes.default.number.def(10),
    yearSelectTotal: _vueTypes.default.number.def(20),
    // onValueChange: PropTypes.func,
    // onTypeChange: PropTypes.func,
    Select: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    type: _vueTypes.default.string,
    showTypeSwitch: _vueTypes.default.looseBool,
    headerComponents: _vueTypes.default.array
  },
  methods: {
    onYearChange: function onYearChange(year) {
      var newValue = this.value.clone();
      newValue.year(parseInt(year, 10));

      this.__emit('valueChange', newValue);
    },
    onMonthChange: function onMonthChange(month) {
      var newValue = this.value.clone();
      newValue.month(parseInt(month, 10));

      this.__emit('valueChange', newValue);
    },
    yearSelectElement: function yearSelectElement(year) {
      var yearSelectOffset = this.yearSelectOffset,
          yearSelectTotal = this.yearSelectTotal,
          prefixCls = this.prefixCls,
          Select = this.Select;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      var options = [];

      var _loop = function _loop(index) {
        options.push((0, _vue.createVNode)(Select.Option, {
          "key": "".concat(index)
        }, {
          default: function _default() {
            return [function () {
              return index;
            }()];
          }
        }));
      };

      for (var index = start; index < end; index++) {
        _loop(index);
      }

      return (0, _vue.createVNode)(Select, {
        "class": "".concat(prefixCls, "-header-year-select"),
        "onChange": this.onYearChange,
        "dropdownStyle": {
          zIndex: 2000
        },
        "dropdownMenuStyle": {
          maxHeight: '250px',
          overflow: 'auto',
          fontSize: '12px'
        },
        "optionLabelProp": "children",
        "value": String(year),
        "showSearch": false
      }, {
        default: function _default() {
          return [options];
        }
      });
    },
    monthSelectElement: function monthSelectElement(month) {
      var value = this.value,
          Select = this.Select,
          prefixCls = this.prefixCls;
      var t = value.clone();
      var options = [];

      for (var index = 0; index < 12; index++) {
        t.month(index);
        options.push((0, _vue.createVNode)(Select.Option, {
          "key": "".concat(index)
        }, {
          default: function _default() {
            return [function () {
              return (0, _util.getMonthName)(t);
            }()];
          }
        }));
      }

      return (0, _vue.createVNode)(Select, {
        "class": "".concat(prefixCls, "-header-month-select"),
        "dropdownStyle": {
          zIndex: 2000
        },
        "dropdownMenuStyle": {
          maxHeight: '250px',
          overflow: 'auto',
          overflowX: 'hidden',
          fontSize: '12px'
        },
        "optionLabelProp": "children",
        "value": String(month),
        "showSearch": false,
        "onChange": this.onMonthChange
      }, {
        default: function _default() {
          return [options];
        }
      });
    },
    changeTypeToDate: function changeTypeToDate() {
      this.__emit('typeChange', 'date');
    },
    changeTypeToMonth: function changeTypeToMonth() {
      this.__emit('typeChange', 'month');
    }
  },
  render: function render() {
    var value = this.value,
        locale = this.locale,
        prefixCls = this.prefixCls,
        type = this.type,
        showTypeSwitch = this.showTypeSwitch,
        headerComponents = this.headerComponents;
    var year = value.year();
    var month = value.month();
    var yearSelect = this.yearSelectElement(year);
    var monthSelect = type === 'month' ? null : this.monthSelectElement(month);
    var switchCls = "".concat(prefixCls, "-header-switcher");
    var typeSwitcher = showTypeSwitch ? (0, _vue.createVNode)("span", {
      "class": switchCls
    }, [type === 'date' ? (0, _vue.createVNode)("span", {
      "class": "".concat(switchCls, "-focus")
    }, [locale.month]) : (0, _vue.createVNode)("span", {
      "onClick": this.changeTypeToDate,
      "class": "".concat(switchCls, "-normal")
    }, [locale.month]), type === 'month' ? (0, _vue.createVNode)("span", {
      "class": "".concat(switchCls, "-focus")
    }, [locale.year]) : (0, _vue.createVNode)("span", {
      "onClick": this.changeTypeToMonth,
      "class": "".concat(switchCls, "-normal")
    }, [locale.year])]) : null;
    return (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [typeSwitcher, monthSelect, yearSelect, headerComponents]);
  }
};
var _default2 = CalendarHeader;
exports.default = _default2;