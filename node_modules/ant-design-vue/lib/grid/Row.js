"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _useFlexGapSupport = _interopRequireDefault(require("../_util/hooks/useFlexGapSupport"));

var _context = _interopRequireDefault(require("./context"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var rowProps = {
  type: _vueTypes.default.oneOf(['flex']),
  align: _vueTypes.default.oneOf(RowAligns),
  justify: _vueTypes.default.oneOf(RowJustify),
  prefixCls: _vueTypes.default.string,
  gutter: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.number, _vueTypes.default.array]).def(0),
  wrap: _vueTypes.default.looseBool
};
var ARow = (0, _vue.defineComponent)({
  name: 'ARow',
  props: rowProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('row', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var token;
    var screens = (0, _vue.ref)({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    var supportFlexGap = (0, _useFlexGapSupport.default)();
    (0, _vue.onMounted)(function () {
      token = _responsiveObserve.default.subscribe(function (screen) {
        var currentGutter = props.gutter || 0;

        if (!Array.isArray(currentGutter) && (0, _typeof2.default)(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0, _typeof2.default)(currentGutter[0]) === 'object' || (0, _typeof2.default)(currentGutter[1]) === 'object')) {
          screens.value = screen;
        }
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      _responsiveObserve.default.unsubscribe(token);
    });
    var gutter = (0, _vue.computed)(function () {
      var results = [0, 0];
      var _props$gutter = props.gutter,
          gutter = _props$gutter === void 0 ? 0 : _props$gutter;
      var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
      normalizedGutter.forEach(function (g, index) {
        if ((0, _typeof2.default)(g) === 'object') {
          for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
            var breakpoint = _responsiveObserve.responsiveArray[i];

            if (screens.value[breakpoint] && g[breakpoint] !== undefined) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g || 0;
        }
      });
      return results;
    });
    (0, _context.default)({
      gutter: gutter,
      supportFlexGap: supportFlexGap,
      wrap: (0, _vue.computed)(function () {
        return props.wrap;
      })
    });
    var classes = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames2.default)(prefixCls.value, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-no-wrap"), props.wrap === false), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(props.justify), props.justify), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(props.align), props.align), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
    });
    var rowStyle = (0, _vue.computed)(function () {
      var gt = gutter.value; // Add gutter related style

      var style = {};
      var horizontalGutter = gt[0] > 0 ? "".concat(gt[0] / -2, "px") : undefined;
      var verticalGutter = gt[1] > 0 ? "".concat(gt[1] / -2, "px") : undefined;

      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }

      if (supportFlexGap.value) {
        // Set gap direct if flex gap support
        style.rowGap = "".concat(gt[1], "px");
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }

      return style;
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("div", {
        "class": classes.value,
        "style": rowStyle.value
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var _default = ARow;
exports.default = _default;