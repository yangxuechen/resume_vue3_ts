import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { defineComponent, computed, ref, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import { tuple, withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import useFlexGapSupport from '../_util/hooks/useFlexGapSupport';
import classNames from '../_util/classNames';
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
var spaceProps = {
  prefixCls: PropTypes.string,
  size: {
    type: [String, Number, Array]
  },
  direction: PropTypes.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  align: PropTypes.oneOf(tuple('start', 'end', 'center', 'baseline')),
  wrap: PropTypes.looseBool
};

function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

var Space = defineComponent({
  name: 'ASpace',
  props: spaceProps,
  slots: ['split'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('space', props),
        prefixCls = _useConfigInject.prefixCls,
        space = _useConfigInject.space,
        directionConfig = _useConfigInject.direction;

    var supportFlexGap = useFlexGapSupport();
    var size = computed(function () {
      var _a;

      return props.size || ((_a = space.value) === null || _a === void 0 ? void 0 : _a.size) || 'small';
    });
    var horizontalSize = ref();
    var verticalSize = ref();
    watch(size, function () {
      var _map = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map(function (item) {
        return getNumberSize(item);
      });

      var _map2 = _slicedToArray(_map, 2);

      horizontalSize.value = _map2[0];
      verticalSize.value = _map2[1];
    }, {
      immediate: true
    });
    var mergedAlign = computed(function () {
      return props.align === undefined && props.direction === 'horizontal' ? 'center' : props.align;
    });
    var cn = computed(function () {
      var _classNames;

      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.direction), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), directionConfig.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-align-").concat(mergedAlign.value), mergedAlign.value), _classNames));
    });
    var marginDirection = computed(function () {
      return directionConfig.value === 'rtl' ? 'marginLeft' : 'marginRight';
    });
    var style = computed(function () {
      var gapStyle = {};

      if (supportFlexGap.value) {
        gapStyle.columnGap = "".concat(horizontalSize.value, "px");
        gapStyle.rowGap = "".concat(verticalSize.value, "px");
      }

      return _extends(_extends({}, gapStyle), props.wrap && {
        flexWrap: 'wrap',
        marginBottom: "".concat(-verticalSize.value, "px")
      });
    });
    return function () {
      var _a, _b;

      var wrap = props.wrap,
          _props$direction = props.direction,
          direction = _props$direction === void 0 ? 'horizontal' : _props$direction;
      var items = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      var len = items.length;

      if (len === 0) {
        return null;
      }

      var split = (_b = slots.split) === null || _b === void 0 ? void 0 : _b.call(slots);
      var itemClassName = "".concat(prefixCls.value, "-item");
      var horizontalSizeVal = horizontalSize.value;
      var latestIndex = len - 1;
      return _createVNode("div", {
        "class": cn.value,
        "style": style.value
      }, [items.map(function (child, index) {
        var itemStyle = {};

        if (!supportFlexGap.value) {
          if (direction === 'vertical') {
            if (index < latestIndex) {
              itemStyle = {
                marginBottom: "".concat(horizontalSizeVal / (split ? 2 : 1), "px")
              };
            }
          } else {
            itemStyle = _extends(_extends({}, index < latestIndex && _defineProperty({}, marginDirection.value, "".concat(horizontalSizeVal / (split ? 2 : 1), "px"))), wrap && {
              paddingBottom: "".concat(verticalSize.value, "px")
            });
          }
        }

        return _createVNode(_Fragment, null, [_createVNode("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index < latestIndex && split && _createVNode("span", {
          "class": "".concat(itemClassName, "-split"),
          "style": itemStyle
        }, [split])]);
      })]);
    };
  }
});
export default withInstall(Space);