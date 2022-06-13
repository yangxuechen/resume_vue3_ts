import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
var ROW = 4;
var COL = 3;

function noop() {}

function goYear(direction) {
  var value = this.sValue.clone();
  value.add(direction, 'year');
  this.setState({
    sValue: value
  });
}

function chooseYear(year) {
  var value = this.sValue.clone();
  value.year(year);
  value.month(this.sValue.month());
  this.sValue = value;

  this.__emit('select', value);
}

export default {
  name: 'YearPanel',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    rootPrefixCls: PropTypes.string,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    locale: PropTypes.object,
    renderFooter: PropTypes.func
  },
  data: function data() {
    this.nextDecade = goYear.bind(this, 10);
    this.previousDecade = goYear.bind(this, -10);
    return {
      sValue: this.value || this.defaultValue
    };
  },
  watch: {
    value: function value(val) {
      this.sValue = val;
    }
  },
  methods: {
    years: function years() {
      var value = this.sValue;
      var currentYear = value.year();
      var startYear = parseInt(currentYear / 10, 10) * 10;
      var previousYear = startYear - 1;
      var years = [];
      var index = 0;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        years[rowIndex] = [];

        for (var colIndex = 0; colIndex < COL; colIndex++) {
          var year = previousYear + index;
          var content = String(year);
          years[rowIndex][colIndex] = {
            content: content,
            year: year,
            title: content
          };
          index++;
        }
      }

      return years;
    }
  },
  render: function render() {
    var _this = this;

    var value = this.sValue,
        locale = this.locale,
        renderFooter = this.renderFooter;
    var onDecadePanelShow = this.$attrs.onDecadePanelShow || noop;
    var years = this.years();
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var endYear = startYear + 9;
    var prefixCls = "".concat(this.rootPrefixCls, "-year-panel");
    var yeasEls = years.map(function (row, index) {
      var tds = row.map(function (yearData) {
        var _classNameMap;

        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), yearData.year === currentYear), _defineProperty(_classNameMap, "".concat(prefixCls, "-last-decade-cell"), yearData.year < startYear), _defineProperty(_classNameMap, "".concat(prefixCls, "-next-decade-cell"), yearData.year > endYear), _classNameMap);
        var clickHandler = noop;

        if (yearData.year < startYear) {
          clickHandler = _this.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this, yearData.year);
        }

        return _createVNode("td", {
          "role": "gridcell",
          "title": yearData.title,
          "key": yearData.content,
          "onClick": clickHandler,
          "class": classNameMap
        }, [_createVNode("a", {
          "class": "".concat(prefixCls, "-year")
        }, [yearData.content])]);
      });
      return _createVNode("tr", {
        "key": index,
        "role": "row"
      }, [tds]);
    });
    var footer = renderFooter && renderFooter('year');
    return _createVNode("div", {
      "class": prefixCls
    }, [_createVNode("div", null, [_createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [_createVNode("a", {
      "class": "".concat(prefixCls, "-prev-decade-btn"),
      "role": "button",
      "onClick": this.previousDecade,
      "title": locale.previousDecade
    }, null), _createVNode("a", {
      "class": "".concat(prefixCls, "-decade-select"),
      "role": "button",
      "onClick": onDecadePanelShow,
      "title": locale.decadeSelect
    }, [_createVNode("span", {
      "class": "".concat(prefixCls, "-decade-select-content")
    }, [startYear, _createTextVNode("-"), endYear]), _createVNode("span", {
      "class": "".concat(prefixCls, "-decade-select-arrow")
    }, [_createTextVNode("x")])]), _createVNode("a", {
      "class": "".concat(prefixCls, "-next-decade-btn"),
      "role": "button",
      "onClick": this.nextDecade,
      "title": locale.nextDecade
    }, null)]), _createVNode("div", {
      "class": "".concat(prefixCls, "-body")
    }, [_createVNode("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [_createVNode("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [yeasEls])])]), footer && _createVNode("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])])]);
  }
};