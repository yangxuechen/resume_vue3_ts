import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import Statistic, { statisticProps } from './Statistic';
import { formatCountdown as formatCD } from './utils';
var REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return new Date(value).getTime();
}

export default defineComponent({
  name: 'AStatisticCountdown',
  props: initDefaultProps(statisticProps, {
    format: 'HH:mm:ss'
  }),
  emits: ['finish', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var countdownId = ref();
    var statistic = ref();

    var syncTimer = function syncTimer() {
      var value = props.value;
      var timestamp = getTime(value);

      if (timestamp >= Date.now()) {
        startTimer();
      } else {
        stopTimer();
      }
    };

    var startTimer = function startTimer() {
      if (countdownId.value) return;
      var timestamp = getTime(props.value);
      countdownId.value = window.setInterval(function () {
        statistic.value.$forceUpdate();

        if (timestamp > Date.now()) {
          emit('change', timestamp - Date.now());
        }

        syncTimer();
      }, REFRESH_INTERVAL);
    };

    var stopTimer = function stopTimer() {
      var value = props.value;

      if (countdownId.value) {
        clearInterval(countdownId.value);
        countdownId.value = undefined;
        var timestamp = getTime(value);

        if (timestamp < Date.now()) {
          emit('finish');
        }
      }
    };

    var formatCountdown = function formatCountdown(_ref2) {
      var value = _ref2.value,
          config = _ref2.config;
      var format = props.format;
      return formatCD(value, _extends(_extends({}, config), {
        format: format
      }));
    };

    var valueRenderHtml = function valueRenderHtml(node) {
      return node;
    };

    onMounted(function () {
      syncTimer();
    });
    onUpdated(function () {
      syncTimer();
    });
    onBeforeUnmount(function () {
      stopTimer();
    });
    return function () {
      return _createVNode(Statistic, _objectSpread({
        "ref": statistic
      }, _extends(_extends({}, props), {
        valueRender: valueRenderHtml,
        formatter: formatCountdown
      })), null);
    };
  }
});