"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var defaultProps = {
  // className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  // style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
exports.defaultProps = defaultProps;

var mixedType = _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]);

var propTypes = {
  // className: PropTypes.string,
  percent: _vueTypes.default.oneOfType([mixedType, _vueTypes.default.arrayOf(mixedType)]),
  prefixCls: _vueTypes.default.string,
  strokeColor: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.object])), _vueTypes.default.object]),
  strokeLinecap: _vueTypes.default.oneOf(['butt', 'round', 'square']),
  strokeWidth: mixedType,
  // style: PropTypes.object,
  trailColor: _vueTypes.default.string,
  trailWidth: mixedType
};
exports.propTypes = propTypes;