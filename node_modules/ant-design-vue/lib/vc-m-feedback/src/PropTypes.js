"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITouchProps = void 0;

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var ITouchProps = {
  disabled: _vueTypes.default.looseBool,
  activeClassName: _vueTypes.default.string,
  activeStyle: _vueTypes.default.any // onTouchStart: PropTypes.func,
  // onTouchEnd: PropTypes.func,
  // onTouchCancel: PropTypes.func,
  // onMouseDown: PropTypes.func,
  // onMouseUp: PropTypes.func,
  // onMouseLeave: PropTypes.func,

};
exports.ITouchProps = ITouchProps;