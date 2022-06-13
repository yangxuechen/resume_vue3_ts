"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _Statistic = _interopRequireWildcard(require("./Statistic"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return new Date(value).getTime();
}

var _default = (0, _vue.defineComponent)({
  name: 'AStatisticCountdown',
  props: (0, _initDefaultProps.default)(_Statistic.statisticProps, {
    format: 'HH:mm:ss'
  }),
  emits: ['finish', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var countdownId = (0, _vue.ref)();
    var statistic = (0, _vue.ref)();

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
      return (0, _utils.formatCountdown)(value, (0, _extends2.default)((0, _extends2.default)({}, config), {
        format: format
      }));
    };

    var valueRenderHtml = function valueRenderHtml(node) {
      return node;
    };

    (0, _vue.onMounted)(function () {
      syncTimer();
    });
    (0, _vue.onUpdated)(function () {
      syncTimer();
    });
    (0, _vue.onBeforeUnmount)(function () {
      stopTimer();
    });
    return function () {
      return (0, _vue.createVNode)(_Statistic.default, (0, _objectSpread2.default)({
        "ref": statistic
      }, (0, _extends2.default)((0, _extends2.default)({}, props), {
        valueRender: valueRenderHtml,
        formatter: formatCountdown
      })), null);
    };
  }
});

exports.default = _default;