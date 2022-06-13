"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _moment = _interopRequireDefault(require("moment"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _CalendarHeader = _interopRequireDefault(require("./calendar/CalendarHeader"));

var _CalendarFooter = _interopRequireDefault(require("./calendar/CalendarFooter"));

var _CalendarMixin = _interopRequireDefault(require("./mixin/CalendarMixin"));

var _CommonMixin = _interopRequireDefault(require("./mixin/CommonMixin"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var MonthCalendar = (0, _vue.defineComponent)({
  name: 'MonthCalendar',
  mixins: [_BaseMixin.default, _CommonMixin.default, _CalendarMixin.default],
  inheritAttrs: false,
  props: {
    locale: _vueTypes.default.object.def(_en_US.default),
    format: _vueTypes.default.string,
    visible: _vueTypes.default.looseBool.def(true),
    prefixCls: _vueTypes.default.string.def('rc-calendar'),
    monthCellRender: _vueTypes.default.func,
    value: _vueTypes.default.object,
    defaultValue: _vueTypes.default.object,
    selectedValue: _vueTypes.default.object,
    defaultSelectedValue: _vueTypes.default.object,
    disabledDate: _vueTypes.default.func,
    monthCellContentRender: _vueTypes.default.func,
    renderFooter: _vueTypes.default.func.def(function () {
      return null;
    }),
    renderSidebar: _vueTypes.default.func.def(function () {
      return null;
    })
  },
  data: function data() {
    var props = this.$props;
    return {
      mode: 'month',
      sValue: props.value || props.defaultValue || (0, _moment.default)(),
      sSelectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  methods: {
    onKeyDown: function onKeyDown(event) {
      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var stateValue = this.sValue;
      var disabledDate = this.disabledDate;
      var value = stateValue;

      switch (keyCode) {
        case _KeyCode.default.DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;

        case _KeyCode.default.UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;

        case _KeyCode.default.LEFT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }

          break;

        case _KeyCode.default.RIGHT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }

          break;

        case _KeyCode.default.ENTER:
          if (!disabledDate || !disabledDate(stateValue)) {
            this.onSelect(stateValue);
          }

          event.preventDefault();
          return 1;

        default:
          return undefined;
      }

      if (value !== stateValue) {
        this.setValue(value);
        event.preventDefault();
        return 1;
      }
    },
    handlePanelChange: function handlePanelChange(_, mode) {
      if (mode !== 'date') {
        this.setState({
          mode: mode
        });
      }
    }
  },
  render: function render() {
    var mode = this.mode,
        value = this.sValue,
        props = this.$props,
        $slots = this.$slots;
    var prefixCls = props.prefixCls,
        locale = props.locale,
        disabledDate = props.disabledDate;
    var monthCellRender = this.monthCellRender || $slots.monthCellRender;
    var monthCellContentRender = this.monthCellContentRender || $slots.monthCellContentRender;
    var renderFooter = this.renderFooter || $slots.renderFooter;
    var children = (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-month-calendar-content")
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-month-header-wrap")
    }, [(0, _vue.createVNode)(_CalendarHeader.default, {
      "prefixCls": prefixCls,
      "mode": mode,
      "value": value,
      "locale": locale,
      "disabledMonth": disabledDate,
      "monthCellRender": monthCellRender,
      "monthCellContentRender": monthCellContentRender,
      "onMonthSelect": this.onSelect,
      "onValueChange": this.setValue,
      "onPanelChange": this.handlePanelChange
    }, null)]), (0, _vue.createVNode)(_CalendarFooter.default, {
      "prefixCls": prefixCls,
      "renderFooter": renderFooter
    }, null)]);
    return this.renderRoot({
      class: "".concat(props.prefixCls, "-month-calendar"),
      children: children
    });
  }
});
var _default = MonthCalendar;
exports.default = _default;