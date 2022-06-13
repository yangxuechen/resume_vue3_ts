"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

var _propsUtil = require("../../../_util/props-util");

var _MonthTable = _interopRequireDefault(require("./MonthTable"));

function goYear(direction) {
  this.changeYear(direction);
}

function noop() {}

var MonthPanel = {
  name: 'MonthPanel',
  inheritAttrs: false,
  mixins: [_BaseMixin.default],
  props: {
    value: _vueTypes.default.any,
    defaultValue: _vueTypes.default.any,
    cellRender: _vueTypes.default.any,
    contentRender: _vueTypes.default.any,
    locale: _vueTypes.default.any,
    rootPrefixCls: _vueTypes.default.string,
    // onChange: PropTypes.func,
    disabledDate: _vueTypes.default.func,
    // onSelect: PropTypes.func,
    renderFooter: _vueTypes.default.func,
    changeYear: _vueTypes.default.func.def(noop)
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
      if ((0, _propsUtil.hasProp)(this, 'value')) {
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
    return (0, _vue.createVNode)("div", {
      "class": prefixCls
    }, [(0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [(0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-prev-year-btn"),
      "role": "button",
      "onClick": this.previousYear,
      "title": locale.previousYear
    }, null), (0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-year-select"),
      "role": "button",
      "onClick": this.$attrs.onYearPanelShow || noop,
      "title": locale.yearSelect
    }, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-year-select-content")
    }, [year]), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-year-select-arrow")
    }, [(0, _vue.createTextVNode)("x")])]), (0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-next-year-btn"),
      "role": "button",
      "onClick": this.nextYear,
      "title": locale.nextYear
    }, null)]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body")
    }, [(0, _vue.createVNode)(_MonthTable.default, {
      "disabledDate": disabledDate,
      "onSelect": this.setAndSelectValue,
      "locale": locale,
      "value": sValue,
      "cellRender": cellRender,
      "contentRender": contentRender,
      "prefixCls": prefixCls
    }, null)]), footer && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])])]);
  }
};
var _default = MonthPanel;
exports.default = _default;