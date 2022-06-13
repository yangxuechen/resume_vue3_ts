"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _pickrEs = _interopRequireDefault(require("@simonwep/pickr/dist/pickr.es5.min"));

var _icon = _interopRequireDefault(require("../icon"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _en_US = _interopRequireDefault(require("./locale/en_US"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _propsUtil = require("../_util/props-util");

/* eslint-disable */
var colors = '#194d33';
var _default2 = {
  name: 'AColorPicker',
  mixins: [_BaseMixin.default],
  inject: {
    configProvider: {
      default: function _default() {
        return _configProvider.defaultConfigProvider;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change.value' //为了支持v-model直接返回颜色字符串 所以用了自定义的事件,与pickr自带change事件进行区分

  },
  props: {
    prefixCls: _vueTypes.default.string,
    defaultValue: _vueTypes.default.string,
    config: _vueTypes.default.object,
    value: _vueTypes.default.string,
    locale: _vueTypes.default.object,
    colorRounded: _vueTypes.default.number,
    size: _vueTypes.default.oneOf(['default', 'small', 'large']).def('default'),
    getPopupContainer: _vueTypes.default.func,
    disabled: _vueTypes.default.looseBool.def(false),
    format: _vueTypes.default.string,
    alpha: _vueTypes.default.looseBool.def(false),
    hue: _vueTypes.default.looseBool.def(true) //是否开启色彩预选

  },
  data: function data() {
    return {
      colors: colors,
      myOpen: false,
      pickr: null,
      i18n: _en_US.default
    };
  },
  watch: {
    'configProvider.locale.ColorPicker': {
      handler: function handler(val) {
        if (this.locale) return;
        this.i18n = val;
        this.reInitialize();
      }
    },
    locale: function locale(val) {
      this.i18n = val.ColorPicker || val.lang;
      this.reInitialize();
    },
    value: function value(val) {
      this.setColor(val);
    },
    disabled: function disabled(val) {
      this.pickr[val ? 'disable' : 'enable']();
    },
    config: {
      handler: function handler() {
        this.reInitialize();
      },
      deep: true
    },
    format: function format(val) {
      var type = val.toLocaleUpperCase();
      var res = this.pickr.setColorRepresentation(type);

      if (res) {
        this.pickr.applyColor();
      } else {
        throw new TypeError('format was invalid');
      }
    }
  },
  mounted: function mounted() {
    if (this.locale) {
      this.i18n = this.locale.ColorPicker || this.locale.lang;
    }

    this.createPickr();
    this.eventsBinding();
  },
  unmounted: function unmounted() {
    this.pickr.destroyAndRemove();
  },
  methods: {
    reInitialize: function reInitialize() {
      this.pickr.destroyAndRemove();
      var dom = document.createElement('div');
      dom.id = 'color-picker' + this._uid;
      var box = (0, _propsUtil.findDOMNode)(this).querySelector('#color-picker-box' + this._uid);
      box.appendChild(dom);
      this.createPickr();
      this.eventsBinding();
    },
    setColor: (0, _debounce.default)(function (val) {
      this.pickr.setColor(val);
    }, 1000),
    eventsBinding: function eventsBinding() {
      var _this = this;

      var pickrEvents = ['init', 'hide', 'show', 'save', 'clear', 'change', 'changestop', 'cancel', 'swatchselect'];
      Object.keys(this.$listeners).forEach(function (event) {
        pickrEvents.includes(event) && _this.pickr.on(event, _this.$listeners[event]);
      });
    },
    createPickr: function createPickr() {
      var _this2 = this;

      var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
          getPopupContainer = _getOptionProps.getPopupContainer;

      var getContextPopupContainer = this.configProvider.getPopupContainer;
      var container = getPopupContainer || getContextPopupContainer;
      this.pickr = _pickrEs.default.create((0, _extends2.default)({
        el: '#color-picker' + this._uid,
        container: container && container((0, _propsUtil.findDOMNode)(this)) || document.body,
        theme: 'monolith',
        default: this.value || this.defaultValue || null,
        components: {
          // Main components
          preview: true,
          opacity: this.alpha,
          hue: this.hue,
          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
          }
        }
      }, this.config, {
        i18n: this.i18n
      })).on('save', function (color, instance) {
        if (color) {
          var _representation = instance._representation || 'HEXA';

          color = color['to' + _representation]().toString(_this2.colorRounded || 0);
        }

        _this2.$emit('change.value', color || '');
      }).on('hide', function () {
        _this2.setState({
          myOpen: false
        });
      });
    },
    handleOpenChange: function handleOpenChange() {
      var open = !this.myOpen;
      this.setState({
        myOpen: open
      });
      this.pickr[open ? 'show' : 'hide']();
      this.$emit('openChange', open);
    },
    getDefaultLocale: function getDefaultLocale() {
      var result = (0, _extends2.default)((0, _extends2.default)({}, _en_US.default), this.$props.locale);
      result.lang = (0, _extends2.default)((0, _extends2.default)({}, result.lang), (this.$props.locale || {}).lang);
      return result;
    },
    renderColorPicker: function renderColorPicker() {
      var _classString;

      var customizePrefixCls = this.$props.prefixCls;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('color-picker', customizePrefixCls);

      var _getOptionProps2 = (0, _propsUtil.getOptionProps)(this),
          disabled = _getOptionProps2.disabled;

      var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, prefixCls, true), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-open"), this.myOpen), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-lg"), this.size === 'large'), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-sm"), this.size === 'small'), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-disabled"), this.disabled), _classString);
      return (0, _vue.createVNode)("div", {
        "class": classString,
        "tabindex": disabled ? -1 : 0,
        "onClick": this.handleOpenChange
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-selection")
      }, [(0, _vue.createVNode)("div", {
        "id": 'color-picker-box' + this._uid
      }, [(0, _vue.createVNode)("div", {
        "id": 'color-picker' + this._uid
      }, null)]), (0, _vue.createVNode)(_icon.default, {
        "type": "down",
        "class": "".concat(prefixCls, "-icon")
      }, null)])]);
    }
  },
  render: function render() {
    return (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "ColorPicker",
      "defaultLocale": this.getDefaultLocale,
      "scopedSlots": {
        default: this.renderColorPicker
      }
    }, null);
  }
};
exports.default = _default2;