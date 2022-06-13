"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressProps = exports.ProgressSize = exports.ProgressType = exports.ProgressStatuses = void 0;

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var ProgressStatuses = (0, _type.tuple)('normal', 'exception', 'active', 'success');
exports.ProgressStatuses = ProgressStatuses;

var ProgressType = _vueTypes.default.oneOf((0, _type.tuple)('line', 'circle', 'dashboard'));

exports.ProgressType = ProgressType;

var ProgressSize = _vueTypes.default.oneOf((0, _type.tuple)('default', 'small'));

exports.ProgressSize = ProgressSize;
var ProgressProps = {
  prefixCls: _vueTypes.default.string,
  type: ProgressType,
  percent: _vueTypes.default.number,
  successPercent: _vueTypes.default.number,
  format: _vueTypes.default.func,
  status: _vueTypes.default.oneOf(ProgressStatuses),
  showInfo: _vueTypes.default.looseBool,
  strokeWidth: _vueTypes.default.number,
  strokeLinecap: _vueTypes.default.oneOf(['butt', 'round', 'square']),
  strokeColor: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object]),
  trailColor: _vueTypes.default.string,
  width: _vueTypes.default.number,
  gapDegree: _vueTypes.default.number,
  gapPosition: _vueTypes.default.oneOf((0, _type.tuple)('top', 'bottom', 'left', 'right')),
  size: ProgressSize
};
exports.ProgressProps = ProgressProps;