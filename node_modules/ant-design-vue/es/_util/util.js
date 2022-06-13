import _typeof from "@babel/runtime/helpers/esm/typeof";
export var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
export var isArray = Array.isArray;
export var isString = function isString(val) {
  return typeof val === 'string';
};
export var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};
export var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};
var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
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

export function getDataAndAriaProps(props) {
  return Object.keys(props).reduce(function (memo, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      memo[key] = props[key];
    }

    return memo;
  }, {});
}
export { isOn, cacheStringFunction, camelize, hyphenate, capitalize, resolvePropValue };