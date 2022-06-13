import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
import { hasProp } from '../../../_util/props-util';
import MonthTable from './MonthTable';

function goYear(direction) {
  this.changeYear(direction);
}

function noop() {}

var MonthPanel = {
  name: 'MonthPanel',
  inheritAttrs: false,
  mixins: [BaseMixin],
  props: {
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    cellRender: PropTypes.any,
    contentRender: PropTypes.any,
    locale: PropTypes.any,
    rootPrefixCls: PropTypes.string,
    // onChange: PropTypes.func,
    disabledDate: PropTypes.func,
    // onSelect: PropTypes.func,
    renderFooter: PropTypes.func,
    changeYear: PropTypes.func.def(noop)
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue; // bind methods

    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {
      sValue: value || defaultValue
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
      this.setValue(value);

      this.__emit('select', value);
    },
    setValue: function setValue(value) {
      if (hasProp(this, 'value')) {
        this.setState({
          sValue: value
        });
      }
    }
  },
  render: function render() {
    var sValue = this.sValue,
        cellRender = this.cellRender,
        contentRender = this.contentRender,
        locale = this.locale,
        rootPrefixCls = this.rootPrefixCls,
        disabledDate = this.disabledDate,
        renderFooter = this.renderFooter;
    var year = sValue.year();
    var prefixCls = "".concat(rootPrefixCls, "-month-panel");
    var footer = renderFooter && renderFooter('month');
    return _createVNode("div", {
      "class": prefixCls
    }, [_createVNode("div", null, [_createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [_createVNode("a", {
      "class": "".concat(prefixCls, "-prev-year-btn"),
      "role": "button",
      "onClick": this.previousYear,
      "title": locale.previousYear
    }, null), _createVNode("a", {
      "class": "".concat(prefixCls, "-year-select"),
      "role": "button",
      "onClick": this.$attrs.onYearPanelShow || noop,
      "title": locale.yearSelect
    }, [_createVNode("span", {
      "class": "".concat(prefixCls, "-year-select-content")
    }, [year]), _createVNode("span", {
      "class": "".concat(prefixCls, "-year-select-arrow")
    }, [_createTextVNode("x")])]), _createVNode("a", {
      "class": "".concat(prefixCls, "-next-year-btn"),
      "role": "button",
      "onClick": this.nextYear,
      "title": locale.nextYear
    }, null)]), _createVNode("div", {
      "class": "".concat(prefixCls, "-body")
    }, [_createVNode(MonthTable, {
      "disabledDate": disabledDate,
      "onSelect": this.setAndSelectValue,
      "locale": locale,
      "value": sValue,
      "cellRender": cellRender,
      "contentRender": contentRender,
      "prefixCls": prefixCls
    }, null)]), footer && _createVNode("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])])]);
  }
};
export default MonthPanel;