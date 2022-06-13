"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));

var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));

var _line = _interopRequireDefault(require("./line"));

var _circle = _interopRequireDefault(require("./circle"));

var _utils = require("./utils");

var _props = require("./props");

var _default2 = (0, _vue.defineComponent)({
  name: 'AProgress',
  props: (0, _initDefaultProps.default)(_props.ProgressProps, {
    type: 'line',
    percent: 0,
    showInfo: true,
    // null for different theme definition
    trailColor: null,
    size: 'default',
    gapDegree: 0,
    strokeLinecap: 'round'
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  methods: {
    getPercentNumber: function getPercentNumber() {
      var _this$$props = this.$props,
          successPercent = _this$$props.successPercent,
          _this$$props$percent = _this$$props.percent,
          percent = _this$$props$percent === void 0 ? 0 : _this$$props$percent;
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    },
    getProgressStatus: function getProgressStatus() {
      var status = this.$props.status;

      if (_props.ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }

      return status || 'normal';
    },
    renderProcessInfo: function renderProcessInfo(prefixCls, progressStatus) {
      var _this$$props2 = this.$props,
          showInfo = _this$$props2.showInfo,
          format = _this$$props2.format,
          type = _this$$props2.type,
          percent = _this$$props2.percent,
          successPercent = _this$$props2.successPercent;
      if (!showInfo) return null;
      var text;

      var textFormatter = format || this.$slots.format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      var isLineType = type === 'line';

      if (format || this.$slots.format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? (0, _vue.createVNode)(_CloseCircleFilled.default, null, null) : (0, _vue.createVNode)(_CloseOutlined.default, null, null);
      } else if (progressStatus === 'success') {
        text = isLineType ? (0, _vue.createVNode)(_CheckCircleFilled.default, null, null) : (0, _vue.createVNode)(_CheckOutlined.default, null, null);
      }

      return (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-text"),
        "title": typeof text === 'string' ? text : undefined
      }, [text]);
    }
  },
  render: function render() {
    var _classNames;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        size = props.size,
        type = props.type,
        showInfo = props.showInfo;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('progress', customizePrefixCls);
    var progressStatus = this.getProgressStatus();
    var progressInfo = this.renderProcessInfo(prefixCls, progressStatus);
    var progress; // Render progress shape

    if (type === 'line') {
      var lineProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
        prefixCls: prefixCls
      });
      progress = (0, _vue.createVNode)(_line.default, lineProps, {
        default: function _default() {
          return [progressInfo];
        }
      });
    } else if (type === 'circle' || type === 'dashboard') {
      var circleProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
        prefixCls: prefixCls,
        progressStatus: progressStatus
      });
      progress = (0, _vue.createVNode)(_circle.default, circleProps, {
        default: function _default() {
          return [progressInfo];
        }
      });
    }

    var classString = (0, _classNames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || type), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames));
    var progressProps = {
      class: classString
    };
    return (0, _vue.createVNode)("div", progressProps, [progress]);
  }
});

exports.default = _default2;