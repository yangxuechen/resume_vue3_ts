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

import { defineComponent, inject, nextTick } from 'vue';
import classNames from '../_util/classNames';
import omit from 'omit.js';
import PropTypes from '../_util/vue-types';
import VcMentions from '../vc-mentions';
import { mentionsProps as baseMentionsProps } from '../vc-mentions/src/mentionsProps';
import Spin from '../spin';
import BaseMixin from '../_util/BaseMixin';
import { defaultConfigProvider } from '../config-provider';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
var Option = VcMentions.Option;

function loadingFilterOption() {
  return true;
}

function getMentions() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var config = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = config || {},
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '@' : _ref$prefix,
      _ref$split = _ref.split,
      split = _ref$split === void 0 ? ' ' : _ref$split;

  var prefixList = Array.isArray(prefix) ? prefix : [prefix];
  return value.split(split).map(function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var hitPrefix = null;
    prefixList.some(function (prefixStr) {
      var startStr = str.slice(0, prefixStr.length);

      if (startStr === prefixStr) {
        hitPrefix = prefixStr;
        return true;
      }

      return false;
    });

    if (hitPrefix !== null) {
      return {
        prefix: hitPrefix,
        value: str.slice(hitPrefix.length)
      };
    }

    return null;
  }).filter(function (entity) {
    return !!entity && !!entity.value;
  });
}

var mentionsProps = _extends(_extends({}, baseMentionsProps), {
  loading: PropTypes.looseBool,
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onSelect: {
    type: Function
  },
  onChange: {
    type: Function
  }
});

var Mentions = defineComponent({
  name: 'AMentions',
  mixins: [BaseMixin],
  inheritAttrs: false,
  Option: _extends(_extends({}, Option), {
    name: 'AMentionsOption'
  }),
  getMentions: getMentions,
  props: mentionsProps,
  emits: ['update:value', 'change', 'focus', 'blur', 'select'],
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      focused: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    nextTick(function () {
      if (process.env.NODE_ENV === 'test') {
        if (_this.autofocus) {
          _this.focus();
        }
      }
    });
  },
  methods: {
    handleFocus: function handleFocus(e) {
      this.$emit('focus', e);
      this.setState({
        focused: true
      });
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
      this.setState({
        focused: false
      });
    },
    handleSelect: function handleSelect() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['select'].concat(args));
      this.setState({
        focused: true
      });
    },
    handleChange: function handleChange(val) {
      this.$emit('update:value', val);
      this.$emit('change', val);
    },
    getNotFoundContent: function getNotFoundContent(renderEmpty) {
      var notFoundContent = getComponent(this, 'notFoundContent');

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      return renderEmpty('Select');
    },
    getOptions: function getOptions() {
      var loading = this.$props.loading;
      var children = getSlot(this);

      if (loading) {
        return _createVNode(Option, {
          "value": "ANTD_SEARCHING",
          "disabled": true
        }, {
          default: function _default() {
            return [_createVNode(Spin, {
              "size": "small"
            }, null)];
          }
        });
      }

      return children;
    },
    getFilterOption: function getFilterOption() {
      var _this$$props = this.$props,
          filterOption = _this$$props.filterOption,
          loading = _this$$props.loading;

      if (loading) {
        return loadingFilterOption;
      }

      return filterOption;
    },
    focus: function focus() {
      this.$refs.vcMentions.focus();
    },
    blur: function blur() {
      this.$refs.vcMentions.blur();
    }
  },
  render: function render() {
    var _classNames;

    var focused = this.$data.focused;
    var _this$configProvider = this.configProvider,
        getPrefixCls = _this$configProvider.getPrefixCls,
        renderEmpty = _this$configProvider.renderEmpty;

    var _a = getOptionProps(this),
        customizePrefixCls = _a.prefixCls,
        disabled = _a.disabled,
        getPopupContainer = _a.getPopupContainer,
        restProps = __rest(_a, ["prefixCls", "disabled", "getPopupContainer"]);

    var _b = this.$attrs,
        className = _b.class,
        otherAttrs = __rest(_b, ["class"]);

    var prefixCls = getPrefixCls('mentions', customizePrefixCls);
    var otherProps = omit(restProps, ['loading', 'onUpdate:value']);
    var mergedClassName = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-focused"), focused), _classNames));

    var mentionsProps = _extends(_extends(_extends(_extends({
      prefixCls: prefixCls,
      notFoundContent: this.getNotFoundContent(renderEmpty)
    }, otherProps), {
      disabled: disabled,
      filterOption: this.getFilterOption(),
      getPopupContainer: getPopupContainer,
      children: this.getOptions(),
      class: mergedClassName,
      rows: 1
    }), otherAttrs), {
      onChange: this.handleChange,
      onSelect: this.handleSelect,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      ref: 'vcMentions'
    });

    return _createVNode(VcMentions, mentionsProps, null);
  }
});
/* istanbul ignore next */

Mentions.install = function (app) {
  app.component(Mentions.name, Mentions);
  app.component(Mentions.Option.name, Mentions.Option);
  return app;
};

export var MentionsOption = Mentions.Option;
export default Mentions;