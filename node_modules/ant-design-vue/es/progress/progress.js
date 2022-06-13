import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import classNames from '../_util/classNames';
import { getOptionProps } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import CheckOutlined from '@ant-design/icons-vue/CheckOutlined';
import CheckCircleFilled from '@ant-design/icons-vue/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import Line from './line';
import Circle from './circle';
import { validProgress } from './utils';
import { ProgressProps, ProgressStatuses } from './props';
export default defineComponent({
  name: 'AProgress',
  props: initDefaultProps(ProgressProps, {
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
      configProvider: inject('configProvider', defaultConfigProvider)
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

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
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
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? _createVNode(CloseCircleFilled, null, null) : _createVNode(CloseOutlined, null, null);
      } else if (progressStatus === 'success') {
        text = isLineType ? _createVNode(CheckCircleFilled, null, null) : _createVNode(CheckOutlined, null, null);
      }

      return _createVNode("span", {
        "class": "".concat(prefixCls, "-text"),
        "title": typeof text === 'string' ? text : undefined
      }, [text]);
    }
  },
  render: function render() {
    var _classNames;

    var props = getOptionProps(this);
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
      var lineProps = _extends(_extends({}, props), {
        prefixCls: prefixCls
      });

      progress = _createVNode(Line, lineProps, {
        default: function _default() {
          return [progressInfo];
        }
      });
    } else if (type === 'circle' || type === 'dashboard') {
      var circleProps = _extends(_extends({}, props), {
        prefixCls: prefixCls,
        progressStatus: progressStatus
      });

      progress = _createVNode(Circle, circleProps, {
        default: function _default() {
          return [progressInfo];
        }
      });
    }

    var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || type), true), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), _defineProperty(_classNames, "".concat(prefixCls, "-show-info"), showInfo), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames));
    var progressProps = {
      class: classString
    };
    return _createVNode("div", progressProps, [progress]);
  }
});