import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import moment from 'moment';
import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import { getOptionProps, hasProp } from '../../_util/props-util';
import DateTable from './date/DateTable';
import MonthTable from './month/MonthTable';
import CalendarMixin, { getNowByCurrentStateValue } from './mixin/CalendarMixin';
import CommonMixin from './mixin/CommonMixin';
import CalendarHeader from './full-calendar/CalendarHeader';
import enUs from './locale/en_US';
import { defineComponent } from 'vue';
var FullCalendar = defineComponent({
  name: 'FullCalendar',
  mixins: [BaseMixin, CommonMixin, CalendarMixin],
  inheritAttrs: false,
  props: {
    locale: PropTypes.object.def(enUs),
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
    visible: PropTypes.looseBool.def(true),
    prefixCls: PropTypes.string.def('rc-calendar'),
    defaultType: PropTypes.string.def('date'),
    type: PropTypes.string,
    fullscreen: PropTypes.looseBool.def(false),
    monthCellRender: PropTypes.func,
    dateCellRender: PropTypes.func,
    showTypeSwitch: PropTypes.looseBool.def(true),
    Select: PropTypes.object.isRequired,
    headerComponents: PropTypes.array,
    headerComponent: PropTypes.object,
    headerRender: PropTypes.func,
    showHeader: PropTypes.looseBool.def(true),
    disabledDate: PropTypes.func,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    selectedValue: PropTypes.object,
    defaultSelectedValue: PropTypes.object,
    renderFooter: PropTypes.func.def(function () {
      return null;
    }),
    renderSidebar: PropTypes.func.def(function () {
      return null;
    })
  },
  data: function data() {
    var type;

    if (hasProp(this, 'type')) {
      type = this.type;
    } else {
      type = this.defaultType;
    }

    var props = this.$props;
    return {
      sType: type,
      sValue: props.value || props.defaultValue || moment(),
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
      var sValue = val || this.defaultValue || getNowByCurrentStateValue(this.sValue);
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
      if (!hasProp(this, 'type')) {
        this.setState({
          sType: type
        });
      }

      this.__emit('typeChange', type);
    }
  },
  render: function render() {
    var props = getOptionProps(this);
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
        var TheHeader = headerComponent || CalendarHeader;

        var headerProps = _extends(_extends(_extends({}, props), this.$attrs), {
          prefixCls: "".concat(prefixCls, "-full"),
          type: type,
          value: value,
          onTypeChange: this.setType,
          onValueChange: this.setValue,
          key: 'calendar-header'
        });

        header = _createVNode(TheHeader, headerProps, null);
      }
    }

    var table = type === 'date' ? _createVNode(DateTable, {
      "dateRender": props.dateCellRender,
      "contentRender": props.dateCellContentRender,
      "locale": locale,
      "prefixCls": prefixCls,
      "onSelect": this.onSelect,
      "value": value,
      "disabledDate": disabledDate
    }, null) : _createVNode(MonthTable, {
      "cellRender": props.monthCellRender,
      "contentRender": props.monthCellContentRender,
      "locale": locale,
      "onSelect": this.onMonthSelect,
      "prefixCls": "".concat(prefixCls, "-month-panel"),
      "value": value,
      "disabledDate": disabledDate
    }, null);
    var children = [header, _createVNode("div", {
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
export default FullCalendar;