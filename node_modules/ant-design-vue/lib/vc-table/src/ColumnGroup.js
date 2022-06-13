"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _default = (0, _vue.defineComponent)({
  name: 'ColumnGroup',
  props: {
    title: _vueTypes.default.any
  },
  isTableColumnGroup: true,
  render: function render() {
    return null;
  }
});

exports.default = _default;