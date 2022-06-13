import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from 'vue';
import classNames from '../_util/classNames';
import { tuple } from '../_util/type';
import PropTypes from '../_util/vue-types';
import ResponsiveObserve, { responsiveArray } from '../_util/responsiveObserve';
import useConfigInject from '../_util/hooks/useConfigInject';
import useFlexGapSupport from '../_util/hooks/useFlexGapSupport';
import useProvideRow from './context';
var RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
var RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');
var rowProps = {
  type: PropTypes.oneOf(['flex']),
  align: PropTypes.oneOf(RowAligns),
  justify: PropTypes.oneOf(RowJustify),
  prefixCls: PropTypes.string,
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]).def(0),
  wrap: PropTypes.looseBool
};
var ARow = defineComponent({
  name: 'ARow',
  props: rowProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('row', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var token;
    var screens = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    var supportFlexGap = useFlexGapSupport();
    onMounted(function () {
      token = ResponsiveObserve.subscribe(function (screen) {
        var currentGutter = props.gutter || 0;

        if (!Array.isArray(currentGutter) && _typeof(currentGutter) === 'object' || Array.isArray(currentGutter) && (_typeof(currentGutter[0]) === 'object' || _typeof(currentGutter[1]) === 'object')) {
          screens.value = screen;
        }
      });
    });
    onBeforeUnmount(function () {
      ResponsiveObserve.unsubscribe(token);
    });
    var gutter = computed(function () {
      var results = [0, 0];
      var _props$gutter = props.gutter,
          gutter = _props$gutter === void 0 ? 0 : _props$gutter;
      var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
      normalizedGutter.forEach(function (g, index) {
        if (_typeof(g) === 'object') {
          for (var i = 0; i < responsiveArray.length; i++) {
            var breakpoint = responsiveArray[i];

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
    useProvideRow({
      gutter: gutter,
      supportFlexGap: supportFlexGap,
      wrap: computed(function () {
        return props.wrap;
      })
    });
    var classes = computed(function () {
      var _classNames;

      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-no-wrap"), props.wrap === false), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props.justify), props.justify), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props.align), props.align), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
    });
    var rowStyle = computed(function () {
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

      return _createVNode("div", {
        "class": classes.value,
        "style": rowStyle.value
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
export default ARow;