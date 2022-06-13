"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderProps = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _select = _interopRequireDefault(require("../select"));

var _radio = require("../radio");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

function getMonthsLocale(value) {
  var current = value.clone();
  var localeData = value.localeData();
  var months = [];

  for (var i = 0; i < 12; i++) {
    current.month(i);
    months.push(localeData.monthsShort(current));
  }

  return months;
}

var HeaderProps = {
  prefixCls: _vueTypes.default.string,
  locale: _vueTypes.default.any,
  fullscreen: _vueTypes.default.looseBool,
  yearSelectOffset: _vueTypes.default.number,
  yearSelectTotal: _vueTypes.default.number,
  type: _vueTypes.default.string,
  value: {
    type: Object
  },
  validRange: {
    type: Array
  },
  headerRender: _vueTypes.default.func,
  onValueChange: _vueTypes.default.func,
  onTypeChange: _vueTypes.default.func
};
exports.HeaderProps = HeaderProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, HeaderProps), {
    yearSelectOffset: _vueTypes.default.number.def(10),
    yearSelectTotal: _vueTypes.default.number.def(20)
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      calendarHeaderNode: undefined
    };
  },
  // private calendarHeaderNode: HTMLDivElement;
  methods: {
    getYearSelectElement: function getYearSelectElement(prefixCls, year) {
      var _this = this;

      var yearSelectOffset = this.yearSelectOffset,
          yearSelectTotal = this.yearSelectTotal,
          _this$locale = this.locale,
          locale = _this$locale === void 0 ? {} : _this$locale,
          fullscreen = this.fullscreen,
          validRange = this.validRange;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;

      if (validRange) {
        start = validRange[0].get('year');
        end = validRange[1].get('year') + 1;
      }

      var suffix = locale && locale.year === '年' ? '年' : '';
      var options = [];

      for (var index = start; index < end; index++) {
        options.push({
          label: "".concat(index).concat(suffix),
          value: index
        });
      }

      return (0, _vue.createVNode)(_select.default, {
        "size": fullscreen ? undefined : 'small',
        "class": "".concat(prefixCls, "-year-select"),
        "onChange": this.onYearChange,
        "value": year,
        "options": options,
        "getPopupContainer": function getPopupContainer() {
          return _this.calendarHeaderNode;
        }
      }, null);
    },
    getMonthSelectElement: function getMonthSelectElement(prefixCls, month, months) {
      var _this2 = this;

      var fullscreen = this.fullscreen,
          validRange = this.validRange,
          value = this.value;
      var start = 0;
      var end = 11;

      if (validRange) {
        var _validRange = (0, _slicedToArray2.default)(validRange, 2),
            rangeStart = _validRange[0],
            rangeEnd = _validRange[1];

        var currentYear = value.get('year');

        if (rangeEnd.get('year') === currentYear) {
          end = rangeEnd.get('month') + 1;
        }

        if (rangeStart.get('year') === currentYear) {
          start = rangeStart.get('month');
        }
      }

      var options = [];

      for (var index = start; index <= end; index += 1) {
        options.push({
          label: months[index],
          value: index
        });
      }

      return (0, _vue.createVNode)(_select.default, {
        "size": fullscreen ? undefined : 'small',
        "class": "".concat(prefixCls, "-month-select"),
        "value": month,
        "options": options,
        "onChange": this.onMonthChange,
        "getPopupContainer": function getPopupContainer() {
          return _this2.calendarHeaderNode;
        }
      }, null);
    },
    onYearChange: function onYearChange(year) {
      var value = this.value,
          validRange = this.validRange;
      var newValue = value.clone();
      newValue.year(parseInt(year, 10)); // switch the month so that it remains within range when year changes

      if (validRange) {
        var _validRange2 = (0, _slicedToArray2.default)(validRange, 2),
            start = _validRange2[0],
            end = _validRange2[1];

        var newYear = newValue.get('year');
        var newMonth = newValue.get('month');

        if (newYear === end.get('year') && newMonth > end.get('month')) {
          newValue.month(end.get('month'));
        }

        if (newYear === start.get('year') && newMonth < start.get('month')) {
          newValue.month(start.get('month'));
        }
      }

      this.$emit('valueChange', newValue);
    },
    onMonthChange: function onMonthChange(month) {
      var newValue = this.value.clone();
      newValue.month(parseInt(month, 10));
      this.$emit('valueChange', newValue);
    },
    onInternalTypeChange: function onInternalTypeChange(e) {
      this.triggerTypeChange(e.target.value);
    },
    triggerTypeChange: function triggerTypeChange(val) {
      this.$emit('typeChange', val);
    },
    getMonthYearSelections: function getMonthYearSelections(getPrefixCls) {
      var _this$$props = this.$props,
          customizePrefixCls = _this$$props.prefixCls,
          type = _this$$props.type,
          value = _this$$props.value;
      var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls);
      var yearReactNode = this.getYearSelectElement(prefixCls, value.year());
      var monthReactNode = type === 'month' ? this.getMonthSelectElement(prefixCls, value.month(), getMonthsLocale(value)) : null;
      return {
        yearReactNode: yearReactNode,
        monthReactNode: monthReactNode
      };
    },
    getTypeSwitch: function getTypeSwitch() {
      var _this$$props2 = this.$props,
          _this$$props2$locale = _this$$props2.locale,
          locale = _this$$props2$locale === void 0 ? {} : _this$$props2$locale,
          type = _this$$props2.type,
          fullscreen = _this$$props2.fullscreen;
      var size = fullscreen ? 'default' : 'small';
      return (0, _vue.createVNode)(_radio.Group, {
        "onChange": this.onInternalTypeChange,
        "value": type,
        "size": size
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_radio.Button, {
            "value": "month"
          }, {
            default: function _default() {
              return [locale.month];
            }
          }), (0, _vue.createVNode)(_radio.Button, {
            "value": "year"
          }, {
            default: function _default() {
              return [locale.year];
            }
          })];
        }
      });
    },
    triggerValueChange: function triggerValueChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['valueChange'].concat(args));
    },
    saveCalendarHeaderNode: function saveCalendarHeaderNode(node) {
      this.calendarHeaderNode = node;
    },
    headerRenderCustom: function headerRenderCustom(headerRender) {
      var _this$$props3 = this.$props,
          type = _this$$props3.type,
          value = _this$$props3.value;
      return headerRender({
        value: value,
        type: type || 'month',
        onChange: this.triggerValueChange,
        onTypeChange: this.triggerTypeChange
      });
    }
  },
  render: function render() {
    var customizePrefixCls = this.prefixCls,
        headerRender = this.headerRender;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls);
    var typeSwitch = this.getTypeSwitch();

    var _this$getMonthYearSel = this.getMonthYearSelections(getPrefixCls),
        yearReactNode = _this$getMonthYearSel.yearReactNode,
        monthReactNode = _this$getMonthYearSel.monthReactNode;

    return headerRender ? this.headerRenderCustom(headerRender) : (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header"),
      "ref": this.saveCalendarHeaderNode
    }, [yearReactNode, monthReactNode, typeSwitch]);
  }
});

exports.default = _default2;