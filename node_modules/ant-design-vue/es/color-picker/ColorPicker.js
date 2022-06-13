import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

/* eslint-disable */
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';
import BaseMixin from '../_util/BaseMixin';
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import Icon from '../icon';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import enUS from './locale/en_US';
import debounce from 'lodash-es/debounce';
import { getOptionProps, findDOMNode } from '../_util/props-util';
var colors = '#194d33';
export default {
  name: 'AColorPicker',
  mixins: [BaseMixin],
  inject: {
    configProvider: {
      default: function _default() {
        return defaultConfigProvider;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change.value' //为了支持v-model直接返回颜色字符串 所以用了自定义的事件,与pickr自带change事件进行区分

  },
  props: {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.string,
    config: PropTypes.object,
    value: PropTypes.string,
    locale: PropTypes.object,
    colorRounded: PropTypes.number,
    size: PropTypes.oneOf(['default', 'small', 'large']).def('default'),
    getPopupContainer: PropTypes.func,
    disabled: PropTypes.looseBool.def(false),
    format: PropTypes.string,
    alpha: PropTypes.looseBool.def(false),
    hue: PropTypes.looseBool.def(true) //是否开启色彩预选

  },
  data: function data() {
    return {
      colors: colors,
      myOpen: false,
      pickr: null,
      i18n: enUS
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
      var box = findDOMNode(this).querySelector('#color-picker-box' + this._uid);
      box.appendChild(dom);
      this.createPickr();
      this.eventsBinding();
    },
    setColor: debounce(function (val) {
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

      var _getOptionProps = getOptionProps(this),
          getPopupContainer = _getOptionProps.getPopupContainer;

      var getContextPopupContainer = this.configProvider.getPopupContainer;
      var container = getPopupContainer || getContextPopupContainer;
      this.pickr = Pickr.create(_extends({
        el: '#color-picker' + this._uid,
        container: container && container(findDOMNode(this)) || document.body,
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
      var result = _extends(_extends({}, enUS), this.$props.locale);

      result.lang = _extends(_extends({}, result.lang), (this.$props.locale || {}).lang);
      return result;
    },
    renderColorPicker: function renderColorPicker() {
      var _classString;

      var customizePrefixCls = this.$props.prefixCls;
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('color-picker', customizePrefixCls);

      var _getOptionProps2 = getOptionProps(this),
          disabled = _getOptionProps2.disabled;

      var classString = (_classString = {}, _defineProperty(_classString, prefixCls, true), _defineProperty(_classString, "".concat(prefixCls, "-open"), this.myOpen), _defineProperty(_classString, "".concat(prefixCls, "-lg"), this.size === 'large'), _defineProperty(_classString, "".concat(prefixCls, "-sm"), this.size === 'small'), _defineProperty(_classString, "".concat(prefixCls, "-disabled"), this.disabled), _classString);
      return _createVNode("div", {
        "class": classString,
        "tabindex": disabled ? -1 : 0,
        "onClick": this.handleOpenChange
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-selection")
      }, [_createVNode("div", {
        "id": 'color-picker-box' + this._uid
      }, [_createVNode("div", {
        "id": 'color-picker' + this._uid
      }, null)]), _createVNode(Icon, {
        "type": "down",
        "class": "".concat(prefixCls, "-icon")
      }, null)])]);
    }
  },
  render: function render() {
    return _createVNode(LocaleReceiver, {
      "componentName": "ColorPicker",
      "defaultLocale": this.getDefaultLocale,
      "scopedSlots": {
        default: this.renderColorPicker
      }
    }, null);
  }
};