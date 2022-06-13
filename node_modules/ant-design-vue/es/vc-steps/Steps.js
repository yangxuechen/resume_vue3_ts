import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import debounce from 'lodash-es/debounce';
import isFlexSupported from '../_util/isFlexSupported';
import { getSlot, getPropsData } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Steps',
  mixins: [BaseMixin],
  props: {
    type: PropTypes.string.def('default'),
    prefixCls: PropTypes.string.def('rc-steps'),
    iconPrefix: PropTypes.string.def('rc'),
    direction: PropTypes.string.def('horizontal'),
    labelPlacement: PropTypes.string.def('horizontal'),
    status: PropTypes.string.def('process'),
    size: PropTypes.string.def(''),
    progressDot: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.func])),
    initial: PropTypes.number.def(0),
    current: PropTypes.number.def(0),
    icons: PropTypes.shape({
      finish: PropTypes.any,
      error: PropTypes.any
    }).loose,
    canClick: PropTypes.looseBool
  },
  data: function data() {
    this.calcStepOffsetWidth = debounce(this.calcStepOffsetWidth, 150);
    return {
      flexSupported: true,
      lastStepOffsetWidth: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.calcStepOffsetWidth();

      if (!isFlexSupported()) {
        _this.setState({
          flexSupported: false
        });
      }
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.calcStepOffsetWidth();
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }

    if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  },
  methods: {
    onStepClick: function onStepClick(next) {
      var current = this.$props.current;

      if (current !== next) {
        this.__emit('change', next);
      }
    },
    calcStepOffsetWidth: function calcStepOffsetWidth() {
      var _this3 = this;

      if (isFlexSupported()) {
        return;
      }

      var lastStepOffsetWidth = this.$data.lastStepOffsetWidth; // Just for IE9

      var domNode = this.$refs.vcStepsRef;

      if (domNode.children.length > 0) {
        if (this.calcTimeout) {
          clearTimeout(this.calcTimeout);
        }

        this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var offsetWidth = (domNode.lastChild.offsetWidth || 0) + 1; // Reduce shake bug

          if (lastStepOffsetWidth === offsetWidth || Math.abs(lastStepOffsetWidth - offsetWidth) <= 3) {
            return;
          }

          _this3.setState({
            lastStepOffsetWidth: offsetWidth
          });
        });
      }
    }
  },
  render: function render() {
    var _classString,
        _this4 = this;

    var prefixCls = this.prefixCls,
        direction = this.direction,
        type = this.type,
        labelPlacement = this.labelPlacement,
        iconPrefix = this.iconPrefix,
        status = this.status,
        size = this.size,
        current = this.current,
        progressDot = this.progressDot,
        initial = this.initial,
        icons = this.icons,
        canClick = this.canClick;
    var isNav = type === 'navigation';
    var lastStepOffsetWidth = this.lastStepOffsetWidth,
        flexSupported = this.flexSupported;
    var filteredChildren = getSlot(this);
    var lastIndex = filteredChildren.length - 1;
    var adjustedlabelPlacement = progressDot ? 'vertical' : labelPlacement;
    var classString = (_classString = {}, _defineProperty(_classString, prefixCls, true), _defineProperty(_classString, "".concat(prefixCls, "-").concat(direction), true), _defineProperty(_classString, "".concat(prefixCls, "-").concat(size), size), _defineProperty(_classString, "".concat(prefixCls, "-label-").concat(adjustedlabelPlacement), direction === 'horizontal'), _defineProperty(_classString, "".concat(prefixCls, "-dot"), !!progressDot), _defineProperty(_classString, "".concat(prefixCls, "-navigation"), isNav), _defineProperty(_classString, "".concat(prefixCls, "-flex-not-supported"), !flexSupported), _classString);
    var stepsProps = {
      class: classString,
      ref: 'vcStepsRef'
    };
    return _createVNode("div", stepsProps, [filteredChildren.map(function (child, index) {
      var childProps = getPropsData(child);
      var stepNumber = initial + index;

      var stepProps = _extends({
        stepNumber: "".concat(stepNumber + 1),
        stepIndex: stepNumber,
        prefixCls: prefixCls,
        iconPrefix: iconPrefix,
        progressDot: progressDot,
        icons: icons
      }, childProps);

      if (canClick) {
        stepProps.onStepClick = _this4.onStepClick;
      }

      if (!flexSupported && direction !== 'vertical') {
        if (isNav) {
          stepProps.itemWidth = "".concat(100 / (lastIndex + 1), "%");
          stepProps.adjustMarginRight = 0;
        } else if (index !== lastIndex) {
          stepProps.itemWidth = "".concat(100 / lastIndex, "%");
          stepProps.adjustMarginRight = "".concat(-Math.round(lastStepOffsetWidth / lastIndex + 1), "px");
        }
      } // fix tail color


      if (status === 'error' && index === current - 1) {
        stepProps.class = "".concat(prefixCls, "-next-error");
      }

      if (!childProps.status) {
        if (stepNumber === current) {
          stepProps.status = status;
        } else if (stepNumber < current) {
          stepProps.status = 'finish';
        } else {
          stepProps.status = 'wait';
        }
      }

      stepProps.active = stepNumber === current;
      return cloneElement(child, stepProps);
    })]);
  }
});