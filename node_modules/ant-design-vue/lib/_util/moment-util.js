"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidate = checkValidate;
exports.momentToString = exports.stringToMoment = exports.TimeOrTimesType = exports.TimesType = exports.TimeType = void 0;

var _interopDefault = _interopRequireDefault(require("./interopDefault"));

var _moment = _interopRequireDefault(require("moment"));

var _warning = _interopRequireDefault(require("./warning"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var TimeType = {
  validator: function validator(value) {
    return typeof value === 'string' || (0, _isNil.default)(value) || _moment.default.isMoment(value);
  }
};
exports.TimeType = TimeType;
var TimesType = {
  validator: function validator(value) {
    if (Array.isArray(value)) {
      return value.length === 0 || value.findIndex(function (val) {
        return typeof val !== 'string';
      }) === -1 || value.findIndex(function (val) {
        return !(0, _isNil.default)(val) && !_moment.default.isMoment(val);
      }) === -1;
    }

    return false;
  }
};
exports.TimesType = TimesType;
var TimeOrTimesType = {
  validator: function validator(value) {
    if (Array.isArray(value)) {
      return value.length === 0 || value.findIndex(function (val) {
        return typeof val !== 'string';
      }) === -1 || value.findIndex(function (val) {
        return !(0, _isNil.default)(val) && !_moment.default.isMoment(val);
      }) === -1;
    } else {
      return typeof value === 'string' || (0, _isNil.default)(value) || _moment.default.isMoment(value);
    }
  }
};
exports.TimeOrTimesType = TimeOrTimesType;

function checkValidate(componentName, value, propName, valueFormat) {
  var values = Array.isArray(value) ? value : [value];
  values.forEach(function (val) {
    if (!val) return;
    valueFormat && (0, _warning.default)((0, _interopDefault.default)(_moment.default)(val, valueFormat).isValid(), componentName, "When set `valueFormat`, `".concat(propName, "` should provides invalidate string time. "));
    !valueFormat && (0, _warning.default)((0, _interopDefault.default)(_moment.default).isMoment(val) && val.isValid(), componentName, "`".concat(propName, "` provides invalidate moment time. If you want to set empty value, use `null` instead."));
  });
}

var stringToMoment = function stringToMoment(value, valueFormat) {
  if (Array.isArray(value)) {
    return value.map(function (val) {
      return typeof val === 'string' && val ? (0, _interopDefault.default)(_moment.default)(val, valueFormat) : val || null;
    });
  } else {
    return typeof value === 'string' && value ? (0, _interopDefault.default)(_moment.default)(value, valueFormat) : value || null;
  }
};

exports.stringToMoment = stringToMoment;

var momentToString = function momentToString(value, valueFormat) {
  if (Array.isArray(value)) {
    return value.map(function (val) {
      return (0, _interopDefault.default)(_moment.default).isMoment(val) ? val.format(valueFormat) : val;
    });
  } else {
    return (0, _interopDefault.default)(_moment.default).isMoment(value) ? value.format(valueFormat) : value;
  }
};

exports.momentToString = momentToString;