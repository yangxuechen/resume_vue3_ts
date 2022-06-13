import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import StatisticNumber from './Number';
import Skeleton from '../skeleton/Skeleton';
import useConfigInject from '../_util/hooks/useConfigInject';
export var statisticProps = {
  prefixCls: PropTypes.string,
  decimalSeparator: PropTypes.string,
  groupSeparator: PropTypes.string,
  format: PropTypes.string,
  value: {
    type: [String, Number, Object]
  },
  valueStyle: PropTypes.style,
  valueRender: PropTypes.any,
  formatter: PropTypes.any,
  precision: PropTypes.number,
  prefix: PropTypes.VNodeChild,
  suffix: PropTypes.VNodeChild,
  title: PropTypes.VNodeChild,
  onFinish: PropTypes.func,
  loading: PropTypes.looseBool
};
export default defineComponent({
  name: 'AStatistic',
  props: initDefaultProps(statisticProps, {
    decimalSeparator: '.',
    groupSeparator: ',',
    loading: false
  }),
  slots: ['title', 'prefix', 'suffix', 'formatter'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('statistic', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    return function () {
      var _a, _b, _c, _d, _e, _f, _g;

      var _props$value = props.value,
          value = _props$value === void 0 ? 0 : _props$value,
          valueStyle = props.valueStyle,
          valueRender = props.valueRender;
      var pre = prefixCls.value;
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var prefix = (_c = props.prefix) !== null && _c !== void 0 ? _c : (_d = slots.prefix) === null || _d === void 0 ? void 0 : _d.call(slots);
      var suffix = (_e = props.suffix) !== null && _e !== void 0 ? _e : (_f = slots.suffix) === null || _f === void 0 ? void 0 : _f.call(slots);
      var formatter = (_g = props.formatter) !== null && _g !== void 0 ? _g : slots.formatter; // data-for-update just for update component
      // https://github.com/vueComponent/ant-design-vue/pull/3170

      var valueNode = _createVNode(StatisticNumber, _objectSpread({
        "data-for-update": Date.now()
      }, _extends(_extends({}, props), {
        prefixCls: pre,
        value: value,
        formatter: formatter
      })), null);

      if (valueRender) {
        valueNode = valueRender(valueNode);
      }

      return _createVNode("div", {
        "class": [pre, _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [title && _createVNode("div", {
        "class": "".concat(pre, "-title")
      }, [title]), _createVNode(Skeleton, {
        "paragraph": false,
        "loading": props.loading
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "style": valueStyle,
            "class": "".concat(pre, "-content")
          }, [prefix && _createVNode("span", {
            "class": "".concat(pre, "-content-prefix")
          }, [prefix]), valueNode, suffix && _createVNode("span", {
            "class": "".concat(pre, "-content-suffix")
          }, [suffix])])];
        }
      })]);
    };
  }
});