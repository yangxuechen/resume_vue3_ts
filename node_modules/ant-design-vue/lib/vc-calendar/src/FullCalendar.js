"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _moment = _interopRequireDefault(require("moment"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _DateTable = _interopRequireDefault(require("./date/DateTable"));

var _MonthTable = _interopRequireDefault(require("./month/MonthTable"));

var _CalendarMixin = _interopRequireWildcard(require("./mixin/CalendarMixin"));

var _CommonMixin = _interopRequireDefault(require("./mixin/CommonMixin"));

var _CalendarHeader = _interopRequireDefault(require("./full-calendar/CalendarHeader"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FullCalendar = (0, _vue.defineComponent)({
  name: 'FullCalendar',
  mixins: [_BaseMixin.default, _CommonMixin.default, _CalendarMixin.default],
  inheritAttrs: false,
  props: {
    locale: _vueTypes.default.object.def(_en_US.default),
    format: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.array, _vueTypes.default.func]),
    visible: _vueTypes.default.looseBool.def(true),
    prefixCls: _vueTypes.default.string.def('rc-calendar'),
    defaultType: _vueTypes.default.string.def('date'),
    type: _vueTypes.default.string,
    fullscreen: _vueTypes.default.looseBool.def(false),
    monthCellRender: _vueTypes.default.func,
    dateCellRender: _vueTypes.default.func,
    showTypeSwitch: _vueTypes.default.looseBool.def(true),
    Select: _vueTypes.default.object.isRequired,
    headerComponents: _vueTypes.default.array,
    headerComponent: _vueTypes.default.object,
    headerRender: _vueTypes.default.func,
    showHeader: _vueTypes.default.looseBool.def(true),
    disabledDate: _vueTypes.default.func,
    value: _vueTypes.default.object,
    defaultValue: _vueTypes.default.object,
    selectedValue: _vueTypes.default.object,
    defaultSelectedValue: _vueTypes.default.object,
    renderFooter: _vueTypes.default.func.def(function () {
      return null;
    }),
    renderSidebar: _vueTypes.default.func.def(function () {
      return null;
    })
  },
  data: function data() {
    var type;

    if ((0, _propsUtil.hasProp)(this, 'type')) {
      type = this.type;
    } else {
      type = this.defaultType;
    }

    var props = this.$props;
    return {
      sType: type,
      sValue: props.value || props.defaultValue || (0, _moment.default)(),
      sSelectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  watch: {
    type: function type(val) {
      this.setState({
        sType: val
      });
    },
    value: function value(val) {
      var sValue = val || this.defaultValue || (0, _CalendarMixin.getNowByCurrentStateValue)(this.sValue);
      this.setState({
        sValue: sValue
      });
    },
    selectedValue: function selectedValue(val) {
      this.setState({
        sSelectedValue: val
      });
    }
  },
  methods: {
    onMonthSelect: function onMonthSelect(value) {
      this.onSelect(value, {
        target: 'month'
      });
    },
    setType: function setType(type) {
      if (!(0, _propsUtil.hasProp)(this, 'type')) {
        this.setState({
          sType: type
        });
      }

      this.__emit('typeChange', type);
    }
  },
  render: function render() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var locale = props.locale,
        prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        showHeader = props.showHeader,
        headerComponent = props.headerComponent,
        headerRender = props.headerRender,
        disabledDate = props.disabledDate;
    var value = this.sValue,
        type = this.sType;
    var header = null;

    if (showHeader) {
      if (headerRender) {
        header = headerRender(value, type, locale);
      } else {
        var TheHeader = headerComponent || _CalendarHeader.default;
        var headerProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs), {
          prefixCls: "".concat(prefixCls, "-full"),
          type: type,
          value: value,
          onTypeChange: this.setType,
          onValueChange: this.setValue,
          key: 'calendar-header'
        });
        header = (0, _vue.createVNode)(TheHeader, headerProps, null);
      }
    }

    var table = type === 'date' ? (0, _vue.createVNode)(_DateTable.default, {
      "dateRender": props.dateCellRender,
      "contentRender": props.dateCellContentRender,
      "locale": locale,
      "prefixCls": prefixCls,
      "onSelect": this.onSelect,
      "value": value,
      "disabledDate": disabledDate
    }, null) : (0, _vue.createVNode)(_MonthTable.default, {
      "cellRender": props.monthCellRender,
      "contentRender": props.monthCellContentRender,
      "locale": locale,
      "onSelect": this.onMonthSelect,
      "prefixCls": "".concat(prefixCls, "-month-panel"),
      "value": value,
      "disabledDate": disabledDate
    }, null);
    var children = [header, (0, _vue.createVNode)("div", {
      "key": "calendar-body",
      "class": "".concat(prefixCls, "-calendar-body")
    }, [table])];
    var className = ["".concat(prefixCls, "-full")];

    if (fullscreen) {
      className.push("".concat(prefixCls, "-fullscreen"));
    }

    return this.renderRoot({
      children: children,
      class: className.join(' ')
    });
  }
});
var _default = FullCalendar;
exports.default = _default;