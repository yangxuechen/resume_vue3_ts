import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectRow } from './context';

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
export var colSize = PropTypes.shape({
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber
}).loose;
var objectOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number, colSize]);
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
  prefixCls: PropTypes.string,
  flex: stringOrNumber
};
export default defineComponent({
  name: 'ACol',
  props: colProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useInjectRow = useInjectRow(),
        gutter = _useInjectRow.gutter,
        supportFlexGap = _useInjectRow.supportFlexGap,
        wrap = _useInjectRow.wrap;

    var _useConfigInject = useConfigInject('col', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var classes = computed(function () {
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
        } else if (_typeof(propSize) === 'object') {
          sizeProps = propSize || {};
        }

        sizeClassObj = _extends(_extends({}, sizeClassObj), (_extends2 = {}, _defineProperty(_extends2, "".concat(pre, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), _defineProperty(_extends2, "".concat(pre, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), _defineProperty(_extends2, "".concat(pre, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), _defineProperty(_extends2, "".concat(pre, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), _defineProperty(_extends2, "".concat(pre, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _defineProperty(_extends2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _extends2));
      });
      return classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(span), span !== undefined), _defineProperty(_classNames, "".concat(pre, "-order-").concat(order), order), _defineProperty(_classNames, "".concat(pre, "-offset-").concat(offset), offset), _defineProperty(_classNames, "".concat(pre, "-push-").concat(push), push), _defineProperty(_classNames, "".concat(pre, "-pull-").concat(pull), pull), _classNames), sizeClassObj);
    });
    var mergedStyle = computed(function () {
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

      return _createVNode("div", {
        "class": classes.value,
        "style": mergedStyle.value
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});