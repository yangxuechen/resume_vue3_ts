"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _padEnd = _interopRequireDefault(require("lodash/padEnd"));

var StatisticNumber = function StatisticNumber(props) {
  var value = props.value,
      formatter = props.formatter,
      precision = props.precision,
      decimalSeparator = props.decimalSeparator,
      _props$groupSeparator = props.groupSeparator,
      groupSeparator = _props$groupSeparator === void 0 ? '' : _props$groupSeparator,
      prefixCls = props.prefixCls;
  var valueNode;

  if (typeof formatter === 'function') {
    // Customize formatter
    valueNode = formatter({
      value: value
    });
  } else {
    // Internal formatter
    var val = String(value);
    var cells = val.match(/^(-?)(\d*)(\.(\d+))?$/); // Process if illegal number

    if (!cells) {
      valueNode = val;
    } else {
      var negative = cells[1];
      var int = cells[2] || '0';
      var decimal = cells[4] || '';
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

      if (typeof precision === 'number') {
        decimal = (0, _padEnd.default)(decimal, precision, '0').slice(0, precision);
      }

      if (decimal) {
        decimal = "".concat(decimalSeparator).concat(decimal);
      }

      valueNode = [(0, _vue.createVNode)("span", {
        "key": "int",
        "class": "".concat(prefixCls, "-content-value-int")
      }, [negative, int]), decimal && (0, _vue.createVNode)("span", {
        "key": "decimal",
        "class": "".concat(prefixCls, "-content-value-decimal")
      }, [decimal])];
    }
  }

  return (0, _vue.createVNode)("span", {
    "class": "".concat(prefixCls, "-content-value")
  }, [valueNode]);
};

StatisticNumber.displayName = 'StatisticNumber';
var _default = StatisticNumber;
exports.default = _default;