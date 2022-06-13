"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _propsUtil = require("../../_util/props-util");

var _Track = _interopRequireDefault(require("./common/Track"));

var _createSlider = _interopRequireDefault(require("./common/createSlider"));

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Slider = (0, _vue.defineComponent)({
  name: 'Slider',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    defaultValue: _vueTypes.default.number,
    value: _vueTypes.default.number,
    disabled: _vueTypes.default.looseBool,
    autofocus: _vueTypes.default.looseBool,
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    reverse: _vueTypes.default.looseBool,
    min: _vueTypes.default.number,
    max: _vueTypes.default.number
  },
  data: function data() {
    var defaultValue = this.defaultValue !== undefined ? this.defaultValue : this.min;
    var value = this.value !== undefined ? this.value : defaultValue;
    return {
      sValue: this.trimAlignValue(value),
      dragging: false
    };
  },
  watch: {
    value: {
      handler: function handler(val) {
        this.setChangeValue(val);
      },
      deep: true
    },
    min: function min() {
      var sValue = this.sValue;
      this.setChangeValue(sValue);
    },
    max: function max() {
      var sValue = this.sValue;
      this.setChangeValue(sValue);
    }
  },
  methods: {
    setChangeValue: function setChangeValue(value) {
      var newValue = value !== undefined ? value : this.sValue;
      var nextValue = this.trimAlignValue(newValue, this.$props);
      if (nextValue === this.sValue) return;
      this.setState({
        sValue: nextValue
      });

      if (utils.isValueOutOfRange(newValue, this.$props)) {
        this.__emit('change', nextValue);
      }
    },
    onChange: function onChange(state) {
      var isNotControlled = !(0, _propsUtil.hasProp)(this, 'value');
      var nextState = state.sValue > this.max ? (0, _extends2.default)((0, _extends2.default)({}, state), {
        sValue: this.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.sValue;

      this.__emit('change', changedValue);
    },
    onStart: function onStart(position) {
      this.setState({
        dragging: true
      });
      var sValue = this.sValue;

      this.__emit('beforeChange', sValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === sValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        sValue: value
      });
    },
    onEnd: function onEnd(force) {
      var dragging = this.dragging;
      this.removeDocumentEvents();

      if (dragging || force) {
        this.__emit('afterChange', this.sValue);
      }

      this.setState({
        dragging: false
      });
    },
    onMove: function onMove(e, position) {
      utils.pauseEvent(e);
      var sValue = this.sValue;
      var value = this.calcValueByPos(position);
      if (value === sValue) return;
      this.onChange({
        sValue: value
      });
    },
    onKeyboard: function onKeyboard(e) {
      var _this$$props = this.$props,
          reverse = _this$$props.reverse,
          vertical = _this$$props.vertical;
      var valueMutator = utils.getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        utils.pauseEvent(e);
        var sValue = this.sValue;
        var mutatedValue = valueMutator(sValue, this.$props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === sValue) return;
        this.onChange({
          sValue: value
        });

        this.__emit('afterChange', value);

        this.onEnd();
      }
    },
    getLowerBound: function getLowerBound() {
      return this.min;
    },
    getUpperBound: function getUpperBound() {
      return this.sValue;
    },
    trimAlignValue: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = (0, _extends2.default)((0, _extends2.default)({}, this.$props), nextProps);
      var val = utils.ensureValueInRange(v, mergedProps);
      return utils.ensureValuePrecision(val, mergedProps);
    },
    getTrack: function getTrack(_ref) {
      var prefixCls = _ref.prefixCls,
          reverse = _ref.reverse,
          vertical = _ref.vertical,
          included = _ref.included,
          offset = _ref.offset,
          minimumTrackStyle = _ref.minimumTrackStyle,
          _trackStyle = _ref._trackStyle;
      return (0, _vue.createVNode)(_Track.default, {
        "class": "".concat(prefixCls, "-track"),
        "vertical": vertical,
        "included": included,
        "offset": 0,
        "reverse": reverse,
        "length": offset,
        "style": (0, _extends2.default)((0, _extends2.default)({}, minimumTrackStyle), _trackStyle)
      }, null);
    },
    renderSlider: function renderSlider() {
      var _this = this;

      var prefixCls = this.prefixCls,
          vertical = this.vertical,
          included = this.included,
          disabled = this.disabled,
          minimumTrackStyle = this.minimumTrackStyle,
          trackStyle = this.trackStyle,
          handleStyle = this.handleStyle,
          tabindex = this.tabindex,
          min = this.min,
          max = this.max,
          reverse = this.reverse,
          handle = this.handle,
          defaultHandle = this.defaultHandle;
      var handleGenerator = handle || defaultHandle;
      var sValue = this.sValue,
          dragging = this.dragging;
      var offset = this.calcOffset(sValue);
      var handles = handleGenerator({
        class: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: sValue,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabindex: tabindex,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this.saveHandle(0, h);
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      var _trackStyle = trackStyle[0] || trackStyle;

      return {
        tracks: this.getTrack({
          prefixCls: prefixCls,
          reverse: reverse,
          vertical: vertical,
          included: included,
          offset: offset,
          minimumTrackStyle: minimumTrackStyle,
          _trackStyle: _trackStyle
        }),
        handles: handles
      };
    }
  }
});

var _default = (0, _createSlider.default)(Slider);

exports.default = _default;