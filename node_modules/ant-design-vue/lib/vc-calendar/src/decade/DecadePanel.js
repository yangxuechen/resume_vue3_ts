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
  var next = this.sValue.clone();
  next.add(direction, 'years');
  this.setState({
    sValue: next
  });
}

function chooseDecade(year, event) {
  var next = this.sValue.clone();
  next.year(year);
  next.month(this.sValue.month());

  this.__emit('select', next);

  event.preventDefault();
}

var _default = {
  name: 'DecadePanel',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    locale: _vueTypes.default.object,
    value: _vueTypes.default.object,
    defaultValue: _vueTypes.default.object,
    rootPrefixCls: _vueTypes.default.string,
    renderFooter: _vueTypes.default.func
  },
  data: function data() {
    this.nextCentury = goYear.bind(this, 100);
    this.previousCentury = goYear.bind(this, -100);
    return {
      sValue: this.value || this.defaultValue
    };
  },
  watch: {
    value: function value(val) {
      this.sValue = val;
    }
  },
  render: function render() {
    var _this = this;

    var value = this.sValue;
    var _this$$props = this.$props,
        locale = _this$$props.locale,
        renderFooter = _this$$props.renderFooter;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 100, 10) * 100;
    var preYear = startYear - 10;
    var endYear = startYear + 99;
    var decades = [];
    var index = 0;
    var prefixCls = "".concat(this.rootPrefixCls, "-decade-panel");

    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      decades[rowIndex] = [];

      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var startDecade = preYear + index * 10;
        var endDecade = preYear + index * 10 + 9;
        decades[rowIndex][colIndex] = {
          startDecade: startDecade,
          endDecade: endDecade
        };
        index++;
      }
    }

    var footer = renderFooter && renderFooter('decade');
    var decadesEls = decades.map(function (row, decadeIndex) {
      var tds = row.map(function (decadeData) {
        var _classNameMap;

        var dStartDecade = decadeData.startDecade;
        var dEndDecade = decadeData.endDecade;
        var isLast = dStartDecade < startYear;
        var isNext = dEndDecade > endYear;
        var classNameMap = (_classNameMap = {}, (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-cell"), 1), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-selected-cell"), dStartDecade <= currentYear && currentYear <= dEndDecade), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-last-century-cell"), isLast), (0, _defineProperty2.default)(_classNameMap, "".concat(prefixCls, "-next-century-cell"), isNext), _classNameMap);
        var content = "".concat(dStartDecade, "-").concat(dEndDecade);
        var clickHandler = noop;

        if (isLast) {
          clickHandler = _this.previousCentury;
        } else if (isNext) {
          clickHandler = _this.nextCentury;
        } else {
          clickHandler = chooseDecade.bind(_this, dStartDecade);
        }

        return (0, _vue.createVNode)("td", {
          "key": dStartDecade,
          "onClick": clickHandler,
          "role": "gridcell",
          "class": classNameMap
        }, [(0, _vue.createVNode)("a", {
          "class": "".concat(prefixCls, "-decade")
        }, [content])]);
      });
      return (0, _vue.createVNode)("tr", {
        "key": decadeIndex,
        "role": "row"
      }, [tds]);
    });
    return (0, _vue.createVNode)("div", {
      "class": prefixCls
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [(0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-prev-century-btn"),
      "role": "button",
      "onClick": this.previousCentury,
      "title": locale.previousCentury
    }, null), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-century")
    }, [startYear, (0, _vue.createTextVNode)("-"), endYear]), (0, _vue.createVNode)("a", {
      "class": "".concat(prefixCls, "-next-century-btn"),
      "role": "button",
      "onClick": this.nextCentury,
      "title": locale.nextCentury
    }, null)]), (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body")
    }, [(0, _vue.createVNode)("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [(0, _vue.createVNode)("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [decadesEls])])]), footer && (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])]);
  }
};
exports.default = _default;