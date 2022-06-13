import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
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

import { defineComponent, inject } from 'vue';
import classNames from '../_util/classNames';
import isMobile from '../_util/isMobile';
import Input from './Input';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import SearchOutlined from '@ant-design/icons-vue/SearchOutlined';
import inputProps from './inputProps';
import Button from '../button';
import { cloneElement } from '../_util/vnode';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getComponent } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
import isPlainObject from 'lodash-es/isPlainObject';
export default defineComponent({
  name: 'AInputSearch',
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps), {
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: PropTypes.VNodeChild,
    onSearch: PropTypes.func
  }),
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
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

      if (!isMobile.tablet) {
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
      var enterButton = getComponent(this, 'enterButton'); // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串

      enterButton = enterButton || enterButton === '';

      if (enterButton) {
        return _createVNode(Button, {
          "class": "".concat(prefixCls, "-button"),
          "type": "primary",
          "size": size,
          "key": "enterButton"
        }, {
          default: function _default() {
            return [_createVNode(LoadingOutlined, null, null)];
          }
        });
      }

      return _createVNode(LoadingOutlined, {
        "class": "".concat(prefixCls, "-icon"),
        "key": "loadingIcon"
      }, null);
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var loading = this.loading;
      var suffix = getComponent(this, 'suffix');
      var enterButton = getComponent(this, 'enterButton'); // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串

      enterButton = enterButton || enterButton === '';

      if (loading && !enterButton) {
        return [suffix, this.renderLoading(prefixCls)];
      }

      if (enterButton) return suffix;

      var icon = _createVNode(SearchOutlined, {
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
      var enterButton = getComponent(this, 'enterButton');
      enterButton = enterButton || enterButton === '';
      var addonAfter = getComponent(this, 'addonAfter');

      if (loading && enterButton) {
        return [this.renderLoading(prefixCls), addonAfter];
      }

      if (!enterButton) return addonAfter;
      var enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      var button;

      var isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;

      if (enterButtonAsElement.tagName === 'button' || isAntdButton) {
        button = cloneElement(enterButtonAsElement, _extends(_extends({
          key: 'enterButton',
          class: isAntdButton ? btnClassName : ''
        }, isAntdButton ? {
          size: size
        } : {}), {
          onClick: this.handleSearch
        }));
      } else {
        button = _createVNode(Button, {
          "class": btnClassName,
          "type": "primary",
          "size": size,
          "disabled": disabled,
          "key": "enterButton",
          "onClick": this.handleSearch
        }, {
          default: function _default() {
            return [enterButton === true || enterButton === '' ? _createVNode(SearchOutlined, null, null) : enterButton];
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
    var _a = _extends(_extends({}, getOptionProps(this)), this.$attrs),
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
    var enterButton = getComponent(this, 'enterButton');
    var addonBefore = getComponent(this, 'addonBefore');
    enterButton = enterButton || enterButton === '';
    var inputClassName;

    if (enterButton) {
      var _classNames;

      inputClassName = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
    } else {
      inputClassName = classNames(prefixCls, className);
    }

    var inputProps = _extends(_extends({}, restProps), {
      prefixCls: inputPrefixCls,
      size: size,
      suffix: this.renderSuffix(prefixCls),
      prefix: getComponent(this, 'prefix'),
      addonAfter: this.renderAddonAfter(prefixCls),
      addonBefore: addonBefore,
      class: inputClassName,
      onPressEnter: this.handleSearch,
      onChange: this.handleChange
    });

    return _createVNode(Input, _objectSpread(_objectSpread({}, inputProps), {}, {
      "ref": this.saveInput
    }), null);
  }
});