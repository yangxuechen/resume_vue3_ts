import { createVNode as _createVNode } from "vue";
import padEnd from 'lodash-es/padEnd';

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
        decimal = padEnd(decimal, precision, '0').slice(0, precision);
      }

      if (decimal) {
        decimal = "".concat(decimalSeparator).concat(decimal);
      }

      valueNode = [_createVNode("span", {
        "key": "int",
        "class": "".concat(prefixCls, "-content-value-int")
      }, [negative, int]), decimal && _createVNode("span", {
        "key": "decimal",
        "class": "".concat(prefixCls, "-content-value-decimal")
      }, [decimal])];
    }
  }

  return _createVNode("span", {
    "class": "".concat(prefixCls, "-content-value")
  }, [valueNode]);
};

StatisticNumber.displayName = 'StatisticNumber';
export default StatisticNumber;