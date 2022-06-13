"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _Base = _interopRequireWildcard(require("./Base"));

var _omit = _interopRequireDefault(require("omit.js"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Link = function Link(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var _a = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
      ellipsis = _a.ellipsis,
      rel = _a.rel,
      restProps = __rest(_a, ["ellipsis", "rel"]);

  (0, _warning.default)((0, _typeof2.default)(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  var mergedProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
    ellipsis: !!ellipsis,
    component: 'a'
  }); // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore

  delete mergedProps.navigate;
  return (0, _vue.createVNode)(_Base.default, mergedProps, slots);
};

Link.displayName = 'ATypographyLink';
Link.inheritAttrs = false;
Link.props = (0, _omit.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _Base.baseProps)()), {
  ellipsis: _vueTypes.default.looseBool
}), ['component']);
var _default = Link;
exports.default = _default;