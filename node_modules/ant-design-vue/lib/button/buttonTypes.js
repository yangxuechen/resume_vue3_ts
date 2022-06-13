"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertLegacyProps = convertLegacyProps;
exports.default = void 0;

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0, _type.tuple)('circle', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var buttonProps = function buttonProps() {
  return {
    prefixCls: _vueTypes.default.string,
    type: _vueTypes.default.oneOf(ButtonTypes),
    htmlType: _vueTypes.default.oneOf(ButtonHTMLTypes).def('button'),
    shape: _vueTypes.default.oneOf(ButtonShapes),
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default() {
        return false;
      }
    },
    disabled: _vueTypes.default.looseBool,
    ghost: _vueTypes.default.looseBool,
    block: _vueTypes.default.looseBool,
    danger: _vueTypes.default.looseBool,
    icon: _vueTypes.default.VNodeChild,
    href: _vueTypes.default.string,
    target: _vueTypes.default.string,
    title: _vueTypes.default.string,
    onClick: {
      type: Function
    }
  };
};

var _default2 = buttonProps;
exports.default = _default2;