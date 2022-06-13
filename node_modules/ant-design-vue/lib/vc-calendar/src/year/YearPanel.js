"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../../_util/BaseMixin"));

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

var _default = {
  name: 'YearPanel',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    rootPrefixCls: _vueTypes.default.string,
    value: _vueTypes.default.object,
    defaultValue: _vueTypes.default.object,
    locale: _vueTypes.default.object,
    renderFooter: _vueTypes.default.func
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

        var classNameMap = (_classNameMap = {}, (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-cell"), 1), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-selected-cell"), yearData.year === currentYear), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-last-decade-cell"), yearData.year < startYear), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-next-decade-cell"), yearData.year > endYear), _classNameMap);
        var clickHandler = noop;

        if (yearData.year < startYear) {
          clickHandler = _this.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this, yearData.year);
        }

        return (0, _vue.createVNode)("td", {
          "role": "gridcell",
          "title": yearData.title,
          "key": yearData.content,
          "onClick": clickHandler,
          "class": classNameMap
        }, [(0, _vue.createVNode)("a", {
          "class": "".concat(prefixCls, "-year")
        }, [yearData.content])]);
      });
      return (0, _vue.createVNode)("tr", {
        "key": index,
        "role": "row"
      }, [tds]);
    });
    var footer = renderFooter && renderFooter('year');
    return (0, _vue.createVNode)("div", {
      "class": prefixCls
    }, [(0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [(0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-prev-decade-btn"),
      "role": "button",
      "onClick": this.previousDecade,
      "title": locale.previousDecade
    }, null), (0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-decade-select"),
      "role": "button",
      "onClick": onDecadePanelShow,
      "title": locale.decadeSelect
    }, [(0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-decade-select-content")
    }, [startYear, (0, _vue.createTextVNode)("-"), endYear]), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-decade-select-arrow")
    }, [(0, _vue.createTextVNode)("x")])]), (0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-next-decade-btn"),
      "role": "button",
      "onClick": this.nextDecade,
      "title": locale.nextDecade
    }, null)]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body")
    }, [(0, _vue.createVNode)("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [(0, _vue.createVNode)("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [yeasEls])])]), footer && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])])]);
  }
};
exports.default = _default;