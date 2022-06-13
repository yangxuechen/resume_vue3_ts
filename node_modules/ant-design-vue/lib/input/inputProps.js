"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _default = {
  prefixCls: _vueTypes.default.string,
  inputPrefixCls: _vueTypes.default.string,
  defaultValue: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  value: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  placeholder: {
    type: [String, Number]
  },
  type: _vueTypes.default.string.def('text'),
  name: _vueTypes.default.string,
  size: {
    type: String
  },
  disabled: _vueTypes.default.looseBool,
  readonly: _vueTypes.default.looseBool,
  addonBefore: _vueTypes.default.VNodeChild,
  addonAfter: _vueTypes.default.VNodeChild,
  prefix: _vueTypes.default.VNodeChild,
  suffix: _vueTypes.default.VNodeChild,
  autofocus: _vueTypes.default.looseBool,
  allowClear: _vueTypes.default.looseBool,
  lazy: _vueTypes.default.looseBool.def(true),
  maxlength: _vueTypes.default.number,
  loading: _vueTypes.default.looseBool,
  onPressEnter: _vueTypes.default.func,
  onKeydown: _vueTypes.default.func,
  onKeyup: _vueTypes.default.func,
  onFocus: _vueTypes.default.func,
  onBlur: _vueTypes.default.func,
  onChange: _vueTypes.default.func,
  onInput: _vueTypes.default.func,
  'onUpdate:value': _vueTypes.default.func
};
exports.default = _default;