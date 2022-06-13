"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useProvideRow = exports.useInjectRow = exports.RowContextKey = void 0;

var _vue = require("vue");

var RowContextKey = Symbol('rowContextKey');
exports.RowContextKey = RowContextKey;

var useProvideRow = function useProvideRow(state) {
  (0, _vue.provide)(RowContextKey, state);
};

exports.useProvideRow = useProvideRow;

var useInjectRow = function useInjectRow() {
  return (0, _vue.inject)(RowContextKey, {
    gutter: (0, _vue.computed)(function () {
      return undefined;
    }),
    wrap: (0, _vue.computed)(function () {
      return undefined;
    }),
    supportFlexGap: (0, _vue.computed)(function () {
      return undefined;
    })
  });
};

exports.useInjectRow = useInjectRow;
var _default = useProvideRow;
exports.default = _default;