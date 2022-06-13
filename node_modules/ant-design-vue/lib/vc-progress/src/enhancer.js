"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

function enhancer(Component) {
  return (0, _extends2.default)((0, _extends2.default)({}, Component), {
    updated: function updated() {
      var _this = this;

      var now = Date.now();
      var updated = false;
      Object.keys(this.paths).forEach(function (key) {
        var path = _this.paths[key];

        if (!path) {
          return;
        }

        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

        if (_this.prevTimeStamp && now - _this.prevTimeStamp < 100) {
          pathStyle.transitionDuration = '0s, 0s';
        }
      });

      if (updated) {
        this.prevTimeStamp = Date.now();
      }
    }
  });
}

var _default = enhancer;
exports.default = _default;