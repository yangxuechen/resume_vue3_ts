import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import CheckOutlined from '@ant-design/icons-vue/CheckOutlined';
import PropTypes, { withUndefined } from '../_util/vue-types';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import VcSteps from '../vc-steps';
import { defaultConfigProvider } from '../config-provider';
import { tuple } from '../_util/type';
var stepsProps = {
  prefixCls: PropTypes.string,
  iconPrefix: PropTypes.string,
  current: PropTypes.number,
  initial: PropTypes.number,
  labelPlacement: PropTypes.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  status: PropTypes.oneOf(tuple('wait', 'process', 'finish', 'error')),
  size: PropTypes.oneOf(tuple('default', 'small')),
  direction: PropTypes.oneOf(tuple('horizontal', 'vertical')),
  progressDot: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.func])),
  type: PropTypes.oneOf(tuple('default', 'navigation')),
  onChange: PropTypes.func,
  'onUpdate:current': PropTypes.func
};
var Steps = defineComponent({
  name: 'ASteps',
  inheritAttrs: false,
  props: initDefaultProps(stepsProps, {
    current: 0
  }),
  emits: ['update:current', 'change'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  Step: _extends(_extends({}, VcSteps.Step), {
    name: 'AStep'
  }),
  methods: {
    handleChange: function handleChange(current) {
      this.$emit('update:current', current);
      this.$emit('change', current);
    }
  },
  render: function render() {
    var _this = this;

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var customizePrefixCls = props.prefixCls,
        customizeIconPrefixCls = props.iconPrefix;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('steps', customizePrefixCls);
    var iconPrefix = getPrefixCls('', customizeIconPrefixCls);
    var progressDot = getComponent(this, 'progressDot', this, false);
    var icons = {
      finish: _createVNode(CheckOutlined, {
        "class": "".concat(prefixCls, "-finish-icon")
      }, null),
      error: _createVNode(CloseOutlined, {
        "class": "".concat(prefixCls, "-error-icon")
      }, null)
    };

    var stepsProps = _extends(_extends({
      icons: icons,
      iconPrefix: iconPrefix,
      prefixCls: prefixCls,
      progressDot: progressDot
    }, props), {
      canClick: !!(this.onChange || this['onUpdate:current']),
      onChange: this.handleChange
    });

    return _createVNode(VcSteps, stepsProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});
/* istanbul ignore next */

Steps.install = function (app) {
  app.component(Steps.name, Steps);
  app.component(Steps.Step.name, Steps.Step);
  return app;
};

export var Step = Steps.Step;
export default Steps;