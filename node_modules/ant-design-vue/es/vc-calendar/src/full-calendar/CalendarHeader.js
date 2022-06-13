import { createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { getMonthName } from '../util';
var CalendarHeader = {
  name: 'CalendarHeader',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    value: PropTypes.object,
    locale: PropTypes.object,
    yearSelectOffset: PropTypes.number.def(10),
    yearSelectTotal: PropTypes.number.def(20),
    // onValueChange: PropTypes.func,
    // onTypeChange: PropTypes.func,
    Select: PropTypes.object,
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    showTypeSwitch: PropTypes.looseBool,
    headerComponents: PropTypes.array
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
        options.push(_createVNode(Select.Option, {
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

      return _createVNode(Select, {
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
        options.push(_createVNode(Select.Option, {
          "key": "".concat(index)
        }, {
          default: function _default() {
            return [function () {
              return getMonthName(t);
            }()];
          }
        }));
      }

      return _createVNode(Select, {
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
    var typeSwitcher = showTypeSwitch ? _createVNode("span", {
      "class": switchCls
    }, [type === 'date' ? _createVNode("span", {
      "class": "".concat(switchCls, "-focus")
    }, [locale.month]) : _createVNode("span", {
      "onClick": this.changeTypeToDate,
      "class": "".concat(switchCls, "-normal")
    }, [locale.month]), type === 'month' ? _createVNode("span", {
      "class": "".concat(switchCls, "-focus")
    }, [locale.year]) : _createVNode("span", {
      "onClick": this.changeTypeToMonth,
      "class": "".concat(switchCls, "-normal")
    }, [locale.year])]) : null;
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [typeSwitcher, monthSelect, yearSelect, headerComponents]);
  }
};
export default CalendarHeader;