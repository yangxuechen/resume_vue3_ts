"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataAndAriaProps = getDataAndAriaProps;
exports.resolvePropValue = resolvePropValue;
exports.capitalize = exports.hyphenate = exports.camelize = exports.cacheStringFunction = exports.isOn = exports.isObject = exports.isSymbol = exports.isString = exports.isArray = exports.isFunction = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

exports.isFunction = isFunction;
var isArray = Array.isArray;
exports.isArray = isArray;

var isString = function isString(val) {
  return typeof val === 'string';
};

exports.isString = isString;

var isSymbol = function isSymbol(val) {
  return (0, _typeof2.default)(val) === 'symbol';
};

exports.isSymbol = isSymbol;

var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};

exports.isObject = isObject;
var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

exports.isOn = isOn;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

exports.cacheStringFunction = cacheStringFunction;
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
exports.camelize = camelize;
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
exports.hyphenate = hyphenate;
var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
exports.capitalize = capitalize;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
}; // change from vue sourcecode


function resolvePropValue(options, props, key, value) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = hasOwn(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    } // boolean casting


    if (opt.type === Boolean) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (value === '') {
        value = true;
      }
    }
  }

  return value;
}

function getDataAndAriaProps(props) {
  return Object.keys(props).reduce(function (memo, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      memo[key] = props[key];
    }

    return memo;
  }, {});
}