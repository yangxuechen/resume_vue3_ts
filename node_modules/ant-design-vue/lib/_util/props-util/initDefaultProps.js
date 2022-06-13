"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var initDefaultProps = function initDefaultProps(types, defaultProps) {
  var propTypes = (0, _extends2.default)({}, types);
  Object.keys(defaultProps).forEach(function (k) {
    var prop = propTypes[k];

    if (prop) {
      prop.default = defaultProps[k];
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes;
};

var _default = initDefaultProps;
exports.default = _default;