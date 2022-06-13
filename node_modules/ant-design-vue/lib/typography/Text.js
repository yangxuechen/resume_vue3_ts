"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _Base = _interopRequireWildcard(require("./Base"));

var _omit = _interopRequireDefault(require("omit.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Text = function Text(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;
  var ellipsis = props.ellipsis;
  (0, _warning.default)((0, _typeof2.default)(ellipsis) !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'Typography.Text', '`ellipsis` do not support `expandable` or `rows` props.');
  var textProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
    ellipsis: ellipsis && (0, _typeof2.default)(ellipsis) === 'object' ? (0, _omit.default)(ellipsis, ['expandable', 'rows']) : ellipsis,
    component: 'span'
  }), attrs);
  return (0, _vue.createVNode)(_Base.default, textProps, slots);
};

Text.displayName = 'ATypographyText';
Text.inheritAttrs = false;
Text.props = (0, _omit.default)((0, _Base.baseProps)(), ['component']);
var _default = Text;
exports.default = _default;