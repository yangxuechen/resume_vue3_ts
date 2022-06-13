import { isArray, isString, isObject } from './util';

function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!value) continue;

    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (var _i = 0; _i < value.length; _i++) {
        var inner = classNames(value[_i]);

        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject(value)) {
      for (var name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }

  return classes.join(' ');
}

export default classNames;