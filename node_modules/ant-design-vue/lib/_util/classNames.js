"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("./util");

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!value) continue;

    if ((0, _util.isString)(value)) {
      classes.push(value);
    } else if ((0, _util.isArray)(value)) {
      for (var _i = 0; _i < value.length; _i++) {
        var inner = classNames(value[_i]);

        if (inner) {
          classes.push(inner);
        }
      }
    } else if ((0, _util.isObject)(value)) {
      for (var name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }

  return classes.join(' ');
}

var _default = classNames;
exports.default = _default;