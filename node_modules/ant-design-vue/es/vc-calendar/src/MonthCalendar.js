import { createVNode as _createVNode } from "vue";
import moment from 'moment';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import KeyCode from '../../_util/KeyCode';
import CalendarHeader from './calendar/CalendarHeader';
import CalendarFooter from './calendar/CalendarFooter';
import CalendarMixin from './mixin/CalendarMixin';
import CommonMixin from './mixin/CommonMixin';
import enUs from './locale/en_US';
import { defineComponent } from 'vue';
var MonthCalendar = defineComponent({
  name: 'MonthCalendar',
  mixins: [BaseMixin, CommonMixin, CalendarMixin],
  inheritAttrs: false,
  props: {
    locale: PropTypes.object.def(enUs),
    format: PropTypes.string,
    visible: PropTypes.looseBool.def(true),
    prefixCls: PropTypes.string.def('rc-calendar'),
    monthCellRender: PropTypes.func,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    selectedValue: PropTypes.object,
    defaultSelectedValue: PropTypes.object,
    disabledDate: PropTypes.func,
    monthCellContentRender: PropTypes.func,
    renderFooter: PropTypes.func.def(function () {
      return null;
    }),
    renderSidebar: PropTypes.func.def(function () {
      return null;
    })
  },
  data: function data() {
    var props = this.$props;
    return {
      mode: 'month',
      sValue: props.value || props.defaultValue || moment(),
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
        case KeyCode.DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;

        case KeyCode.UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;

        case KeyCode.LEFT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }

          break;

        case KeyCode.RIGHT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }

          break;

        case KeyCode.ENTER:
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

    var children = _createVNode("div", {
      "class": "".concat(prefixCls, "-month-calendar-content")
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-month-header-wrap")
    }, [_createVNode(CalendarHeader, {
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
    }, null)]), _createVNode(CalendarFooter, {
      "prefixCls": prefixCls,
      "renderFooter": renderFooter
    }, null)]);

    return this.renderRoot({
      class: "".concat(props.prefixCls, "-month-calendar"),
      children: children
    });
  }
});
export default MonthCalendar;