"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;

var _jsonp = _interopRequireDefault(require("jsonp"));

var _querystring = _interopRequireDefault(require("querystring"));

var timeout;
var currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  currentValue = value;

  function fake() {
    var str = _querystring.default.encode({
      code: 'utf-8',
      q: value
    });

    (0, _jsonp.default)("http://suggest.taobao.com/sug?".concat(str), function (err, d) {
      if (currentValue === value) {
        var result = d.result;
        var data = [];
        result.forEach(function (r) {
          data.push({
            value: r[0],
            text: r[0]
          });
        });
        callback(data);
      }
    });
  }

  timeout = setTimeout(fake, 300);
}