"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _isMobile = _interopRequireDefault(require("../_util/isMobile"));

var _Input = _interopRequireDefault(require("./Input"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SearchOutlined"));

var _inputProps = _interopRequireDefault(require("./inputProps"));

var _button = _interopRequireDefault(require("../button"));

var _vnode = require("../_util/vnode");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _configProvider = require("../config-provider");

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _default2 = (0, _vue.defineComponent)({
  name: 'AInputSearch',
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, _inputProps.default), {
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: _vueTypes.default.VNodeChild,
    onSearch: _vueTypes.default.func
  }),
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      input: null
    };
  },
  methods: {
    saveInput: function saveInput(node) {
      this.input = node;
    },
    handleChange: function handleChange(e) {
      this.$emit('update:value', e.target.value);

      if (e && e.target && e.type === 'click') {
        this.$emit('search', e.target.value, e);
      }

      this.$emit('change', e);
    },
    handleSearch: function handleSearch(e) {
      if (this.loading || this.disabled) {
        return;
      }

      this.$emit('search', this.input.stateValue, e);

      if (!_isMobile.default.tablet) {
        this.input.focus();
      }
    },
    focus: function focus() {
      this.input.focus();
    },
    blur: function blur() {
      this.input.blur();
    },
    renderLoading: function renderLoading(prefixCls) {
      var size = this.$props.size;
      var enterButton = (0, _propsUtil.getComponent)(this, 'enterButton'); // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串

      enterButton = enterButton || enterButton === '';

      if (enterButton) {
        return (0, _vue.createVNode)(_button.default, {
          "class": "".concat(prefixCls, "-button"),
          "type": "primary",
          "size": size,
          "key": "enterButton"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)(_LoadingOutlined.default, null, null)];
          }
        });
      }

      return (0, _vue.createVNode)(_LoadingOutlined.default, {
        "class": "".concat(prefixCls, "-icon"),
        "key": "loadingIcon"
      }, null);
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var loading = this.loading;
      var suffix = (0, _propsUtil.getComponent)(this, 'suffix');
      var enterButton = (0, _propsUtil.getComponent)(this, 'enterButton'); // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串

      enterButton = enterButton || enterButton === '';

      if (loading && !enterButton) {
        return [suffix, this.renderLoading(prefixCls)];
      }

      if (enterButton) return suffix;
      var icon = (0, _vue.createVNode)(_SearchOutlined.default, {
        "class": "".concat(prefixCls, "-icon"),
        "key": "searchIcon",
        "onClick": this.handleSearch
      }, null);

      if (suffix) {
        // let cloneSuffix = suffix;
        // if (isValidElement(cloneSuffix) && !cloneSuffix.key) {
        //   cloneSuffix = cloneElement(cloneSuffix, {
        //     key: 'originSuffix',
        //   });
        // }
        return [suffix, icon];
      }

      return icon;
    },
    renderAddonAfter: function renderAddonAfter(prefixCls) {
      var size = this.size,
          disabled = this.disabled,
          loading = this.loading;
      var btnClassName = "".concat(prefixCls, "-button");
      var enterButton = (0, _propsUtil.getComponent)(this, 'enterButton');
      enterButton = enterButton || enterButton === '';
      var addonAfter = (0, _propsUtil.getComponent)(this, 'addonAfter');

      if (loading && enterButton) {
        return [this.renderLoading(prefixCls), addonAfter];
      }

      if (!enterButton) return addonAfter;
      var enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      var button;

      var isAntdButton = enterButtonAsElement.type && (0, _isPlainObject.default)(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;

      if (enterButtonAsElement.tagName === 'button' || isAntdButton) {
        button = (0, _vnode.cloneElement)(enterButtonAsElement, (0, _extends2.default)((0, _extends2.default)({
          key: 'enterButton',
          class: isAntdButton ? btnClassName : ''
        }, isAntdButton ? {
          size: size
        } : {}), {
          onClick: this.handleSearch
        }));
      } else {
        button = (0, _vue.createVNode)(_button.default, {
          "class": btnClassName,
          "type": "primary",
          "size": size,
          "disabled": disabled,
          "key": "enterButton",
          "onClick": this.handleSearch
        }, {
          default: function _default() {
            return [enterButton === true || enterButton === '' ? (0, _vue.createVNode)(_SearchOutlined.default, null, null) : enterButton];
          }
        });
      }

      if (addonAfter) {
        return [button, addonAfter];
      }

      return button;
    }
  },
  render: function render() {
    var _a = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs),
        customizePrefixCls = _a.prefixCls,
        customizeInputPrefixCls = _a.inputPrefixCls,
        size = _a.size,
        className = _a.class,
        restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "size", "class"]);

    delete restProps.onSearch;
    delete restProps.loading;
    delete restProps.enterButton;
    delete restProps.addonBefore;
    delete restProps['onUpdate:value'];
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-search', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var enterButton = (0, _propsUtil.getComponent)(this, 'enterButton');
    var addonBefore = (0, _propsUtil.getComponent)(this, 'addonBefore');
    enterButton = enterButton || enterButton === '';
    var inputClassName;

    if (enterButton) {
      var _classNames;

      inputClassName = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
    } else {
      inputClassName = (0, _classNames2.default)(prefixCls, className);
    }

    var inputProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: this.renderSuffix(prefixCls),
      prefix: (0, _propsUtil.getComponent)(this, 'prefix'),
      addonAfter: this.renderAddonAfter(prefixCls),
      addonBefore: addonBefore,
      class: inputClassName,
      onPressEnter: this.handleSearch,
      onChange: this.handleChange
    });
    return (0, _vue.createVNode)(_Input.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});

exports.default = _default2;