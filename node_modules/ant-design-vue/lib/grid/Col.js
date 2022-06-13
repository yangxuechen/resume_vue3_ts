"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.colSize = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _context = require("./context");

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var stringOrNumber = _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]);

var colSize = _vueTypes.default.shape({
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber
}).loose;

exports.colSize = colSize;

var objectOrNumber = _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number, colSize]);

var colProps = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber,
  xxl: objectOrNumber,
  prefixCls: _vueTypes.default.string,
  flex: stringOrNumber
};

var _default = (0, _vue.defineComponent)({
  name: 'ACol',
  props: colProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useInjectRow = (0, _context.useInjectRow)(),
        gutter = _useInjectRow.gutter,
        supportFlexGap = _useInjectRow.supportFlexGap,
        wrap = _useInjectRow.wrap;

    var _useConfigInject = (0, _useConfigInject2.default)('col', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var classes = (0, _vue.computed)(function () {
      var _classNames;

      var span = props.span,
          order = props.order,
          offset = props.offset,
          push = props.push,
          pull = props.pull;
      var pre = prefixCls.value;
      var sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
        var _extends2;

        var sizeProps = {};
        var propSize = props[size];

        if (typeof propSize === 'number') {
          sizeProps.span = propSize;
        } else if ((0, _typeof2.default)(propSize) === 'object') {
          sizeProps = propSize || {};
        }

        sizeClassObj = (0, _extends3.default)((0, _extends3.default)({}, sizeClassObj), (_extends2 = {}, (0, _defineProperty2.default)(_extends2, "".concat(pre, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2.default)(_extends2, "".concat(pre, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2.default)(_extends2, "".concat(pre, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2.default)(_extends2, "".concat(pre, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2.default)(_extends2, "".concat(pre, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _defineProperty2.default)(_extends2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _extends2));
      });
      return (0, _classNames2.default)(pre, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-").concat(span), span !== undefined), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-order-").concat(order), order), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-offset-").concat(offset), offset), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-push-").concat(push), push), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-pull-").concat(pull), pull), _classNames), sizeClassObj);
    });
    var mergedStyle = (0, _vue.computed)(function () {
      var flex = props.flex;
      var gutterVal = gutter.value;
      var style = {}; // Horizontal gutter use padding

      if (gutterVal && gutterVal[0] > 0) {
        var horizontalGutter = "".concat(gutterVal[0] / 2, "px");
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      } // Vertical gutter use padding when gap not support


      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        var verticalGutter = "".concat(gutterVal[1] / 2, "px");
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }

      if (flex) {
        style.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

        if (flex === 'auto' && wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }

      return style;
    });
    return function () {
      var _a;

      return (0, _vue.createVNode)("div", {
        "class": classes.value,
        "style": mergedStyle.value
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});

exports.default = _default;