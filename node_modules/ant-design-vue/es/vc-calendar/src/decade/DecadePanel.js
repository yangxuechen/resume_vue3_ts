import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import PropTypes from '../../../_util/vue-types';
import BaseMixin from '../../../_util/BaseMixin';
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

export default {
  name: 'DecadePanel',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    locale: PropTypes.object,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    rootPrefixCls: PropTypes.string,
    renderFooter: PropTypes.func
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
        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, "".concat(prefixCls, "-last-century-cell"), isLast), _defineProperty(_classNameMap, "".concat(prefixCls, "-next-century-cell"), isNext), _classNameMap);
        var content = "".concat(dStartDecade, "-").concat(dEndDecade);
        var clickHandler = noop;

        if (isLast) {
          clickHandler = _this.previousCentury;
        } else if (isNext) {
          clickHandler = _this.nextCentury;
        } else {
          clickHandler = chooseDecade.bind(_this, dStartDecade);
        }

        return _createVNode("td", {
          "key": dStartDecade,
          "onClick": clickHandler,
          "role": "gridcell",
          "class": classNameMap
        }, [_createVNode("a", {
          "class": "".concat(prefixCls, "-decade")
        }, [content])]);
      });
      return _createVNode("tr", {
        "key": decadeIndex,
        "role": "row"
      }, [tds]);
    });
    return _createVNode("div", {
      "class": prefixCls
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [_createVNode("a", {
      "class": "".concat(prefixCls, "-prev-century-btn"),
      "role": "button",
      "onClick": this.previousCentury,
      "title": locale.previousCentury
    }, null), _createVNode("div", {
      "class": "".concat(prefixCls, "-century")
    }, [startYear, _createTextVNode("-"), endYear]), _createVNode("a", {
      "class": "".concat(prefixCls, "-next-century-btn"),
      "role": "button",
      "onClick": this.nextCentury,
      "title": locale.nextCentury
    }, null)]), _createVNode("div", {
      "class": "".concat(prefixCls, "-body")
    }, [_createVNode("table", {
      "class": "".concat(prefixCls, "-table"),
      "cellspacing": "0",
      "role": "grid"
    }, [_createVNode("tbody", {
      "class": "".concat(prefixCls, "-tbody")
    }, [decadesEls])])]), footer && _createVNode("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footer])]);
  }
};