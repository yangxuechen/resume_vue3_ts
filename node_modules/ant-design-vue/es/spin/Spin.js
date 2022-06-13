import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { inject, cloneVNode, isVNode, defineComponent, nextTick } from 'vue';
import debounce from 'lodash-es/debounce';
import { tuple } from '../_util/type';
import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';
export var SpinSize = PropTypes.oneOf(tuple('small', 'default', 'large'));
export var getSpinProps = function getSpinProps() {
  return {
    prefixCls: PropTypes.string,
    spinning: PropTypes.looseBool,
    size: SpinSize,
    wrapperClassName: PropTypes.string,
    tip: PropTypes.string,
    delay: PropTypes.number,
    indicator: PropTypes.any
  };
}; // Render indicator

var defaultIndicator = null;

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

export function setDefaultIndicator(Content) {
  var Indicator = Content.indicator;
  defaultIndicator = typeof Indicator === 'function' ? Indicator : function () {
    return _createVNode(Indicator, null, null);
  };
}
export default defineComponent({
  name: 'ASpin',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(getSpinProps(), {
    size: 'default',
    spinning: true,
    wrapperClassName: ''
  }),
  setup: function setup() {
    return {
      originalUpdateSpinning: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    var spinning = this.spinning,
        delay = this.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    return {
      sSpinning: spinning && !shouldBeDelayed
    };
  },
  created: function created() {
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(this.$props);
  },
  mounted: function mounted() {
    this.updateSpinning();
  },
  updated: function updated() {
    var _this = this;

    nextTick(function () {
      _this.debouncifyUpdateSpinning();

      _this.updateSpinning();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.cancelExistingSpin();
  },
  methods: {
    debouncifyUpdateSpinning: function debouncifyUpdateSpinning(props) {
      var _ref = props || this.$props,
          delay = _ref.delay;

      if (delay) {
        this.cancelExistingSpin();
        this.updateSpinning = debounce(this.originalUpdateSpinning, delay);
      }
    },
    updateSpinning: function updateSpinning() {
      var spinning = this.spinning,
          sSpinning = this.sSpinning;

      if (sSpinning !== spinning) {
        this.setState({
          sSpinning: spinning
        });
      }
    },
    cancelExistingSpin: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    },
    renderIndicator: function renderIndicator(prefixCls) {
      var dotClassName = "".concat(prefixCls, "-dot");
      var indicator = getComponent(this, 'indicator'); // should not be render default indicator when indicator value is null

      if (indicator === null) {
        return null;
      }

      if (Array.isArray(indicator)) {
        indicator = indicator.length === 1 ? indicator[0] : indicator;
      }

      if (isVNode(indicator)) {
        return cloneVNode(indicator, {
          class: dotClassName
        });
      }

      if (defaultIndicator && isVNode(defaultIndicator())) {
        return cloneVNode(defaultIndicator(), {
          class: dotClassName
        });
      }

      return _createVNode("span", {
        "class": "".concat(dotClassName, " ").concat(prefixCls, "-dot-spin")
      }, [_createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), _createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), _createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), _createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null)]);
    }
  },
  render: function render() {
    var _spinClassName;

    var _this$$props = this.$props,
        size = _this$$props.size,
        customizePrefixCls = _this$$props.prefixCls,
        tip = _this$$props.tip,
        wrapperClassName = _this$$props.wrapperClassName;

    var _a = this.$attrs,
        cls = _a.class,
        style = _a.style,
        divProps = __rest(_a, ["class", "style"]);

    var _this$configProvider = this.configProvider,
        getPrefixCls = _this$configProvider.getPrefixCls,
        direction = _this$configProvider.direction;
    var prefixCls = getPrefixCls('spin', customizePrefixCls);
    var sSpinning = this.sSpinning;
    var spinClassName = (_spinClassName = {}, _defineProperty(_spinClassName, prefixCls, true), _defineProperty(_spinClassName, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_spinClassName, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_spinClassName, "".concat(prefixCls, "-spinning"), sSpinning), _defineProperty(_spinClassName, "".concat(prefixCls, "-show-text"), !!tip), _defineProperty(_spinClassName, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_spinClassName, cls, !!cls), _spinClassName);

    var spinElement = _createVNode("div", _objectSpread(_objectSpread({}, divProps), {}, {
      "style": style,
      "class": spinClassName
    }), [this.renderIndicator(prefixCls), tip ? _createVNode("div", {
      "class": "".concat(prefixCls, "-text")
    }, [tip]) : null]);

    var children = getSlot(this);

    if (children && children.length) {
      var _containerClassName;

      var containerClassName = (_containerClassName = {}, _defineProperty(_containerClassName, "".concat(prefixCls, "-container"), true), _defineProperty(_containerClassName, "".concat(prefixCls, "-blur"), sSpinning), _containerClassName);
      return _createVNode("div", {
        "class": ["".concat(prefixCls, "-nested-loading"), wrapperClassName]
      }, [sSpinning && _createVNode("div", {
        "key": "loading"
      }, [spinElement]), _createVNode("div", {
        "class": containerClassName,
        "key": "container"
      }, [children])]);
    }

    return spinElement;
  }
});