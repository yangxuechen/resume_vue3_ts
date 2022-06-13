"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MentionsOption = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _vcMentions = _interopRequireDefault(require("../vc-mentions"));

var _mentionsProps = require("../vc-mentions/src/mentionsProps");

var _spin = _interopRequireDefault(require("../spin"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

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

var Option = _vcMentions.default.Option;

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

var mentionsProps = (0, _extends2.default)((0, _extends2.default)({}, _mentionsProps.mentionsProps), {
  loading: _vueTypes.default.looseBool,
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
var Mentions = (0, _vue.defineComponent)({
  name: 'AMentions',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  Option: (0, _extends2.default)((0, _extends2.default)({}, Option), {
    name: 'AMentionsOption'
  }),
  getMentions: getMentions,
  props: mentionsProps,
  emits: ['update:value', 'change', 'focus', 'blur', 'select'],
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      focused: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
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
      var notFoundContent = (0, _propsUtil.getComponent)(this, 'notFoundContent');

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      return renderEmpty('Select');
    },
    getOptions: function getOptions() {
      var loading = this.$props.loading;
      var children = (0, _propsUtil.getSlot)(this);

      if (loading) {
        return (0, _vue.createVNode)(Option, {
          "value": "ANTD_SEARCHING",
          "disabled": true
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)(_spin.default, {
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

    var _a = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _a.prefixCls,
        disabled = _a.disabled,
        getPopupContainer = _a.getPopupContainer,
        restProps = __rest(_a, ["prefixCls", "disabled", "getPopupContainer"]);

    var _b = this.$attrs,
        className = _b.class,
        otherAttrs = __rest(_b, ["class"]);

    var prefixCls = getPrefixCls('mentions', customizePrefixCls);
    var otherProps = (0, _omit.default)(restProps, ['loading', 'onUpdate:value']);
    var mergedClassName = (0, _classNames2.default)(className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-focused"), focused), _classNames));
    var mentionsProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
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
    return (0, _vue.createVNode)(_vcMentions.default, mentionsProps, null);
  }
});
/* istanbul ignore next */

Mentions.install = function (app) {
  app.component(Mentions.name, Mentions);
  app.component(Mentions.Option.name, Mentions.Option);
  return app;
};

var MentionsOption = Mentions.Option;
exports.MentionsOption = MentionsOption;
var _default2 = Mentions;
exports.default = _default2;