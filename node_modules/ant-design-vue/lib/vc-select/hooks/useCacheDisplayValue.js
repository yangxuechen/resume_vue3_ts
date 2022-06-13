"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCacheDisplayValue;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vue = require("vue");

function useCacheDisplayValue(values) {
  var prevValues = (0, _toConsumableArray2.default)(values.value);
  var mergedValues = (0, _vue.computed)(function () {
    // Create value - label map
    var valueLabels = new Map();
    prevValues.forEach(function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (value !== label) {
        valueLabels.set(value, label);
      }
    });
    var resultValues = values.value.map(function (item) {
      var cacheLabel = valueLabels.get(item.value);

      if (item.isCacheable && cacheLabel) {
        return (0, _extends2.default)((0, _extends2.default)({}, item), {
          label: cacheLabel
        });
      }

      return item;
    });
    prevValues = resultValues;
    return resultValues;
  });
  return mergedValues;
}