"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCacheOptions;

var _vue = require("vue");

function useCacheOptions(options) {
  var optionMap = (0, _vue.computed)(function () {
    var map = new Map();
    options.value.forEach(function (item) {
      var value = item.data.value;
      map.set(value, item);
    });
    return map;
  });

  var getValueOption = function getValueOption(vals) {
    return vals.map(function (value) {
      return optionMap.value.get(value);
    }).filter(Boolean);
  };

  return getValueOption;
}