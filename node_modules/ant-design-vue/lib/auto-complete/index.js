"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AutoCompleteOptGroup = exports.AutoCompleteOption = void 0;

var _vue = require("vue");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _select = _interopRequireWildcard(require("../select"));

var _input = _interopRequireDefault(require("../input"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _configProvider = require("../config-provider");

var _propsUtil = require("../_util/props-util");

var _omit = _interopRequireDefault(require("omit.js"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _Option = _interopRequireDefault(require("./Option"));

var _OptGroup = _interopRequireDefault(require("./OptGroup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function isSelectOptionOrSelectOptGroup(child) {
  var _a, _b;

  return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.isSelectOption) || ((_b = child === null || child === void 0 ? void 0 : child.type) === null || _b === void 0 ? void 0 : _b.isSelectOptGroup);
}

var autoCompleteProps = (0, _extends2.default)((0, _extends2.default)({}, (0, _select.SelectProps)()), {
  dataSource: _vueTypes.default.array,
  dropdownMenuStyle: _vueTypes.default.style,
  optionLabelProp: _vueTypes.default.string,
  dropdownMatchSelectWidth: _vueTypes.default.looseBool
});
var AutoCompleteOption = _Option.default;
exports.AutoCompleteOption = AutoCompleteOption;
var AutoCompleteOptGroup = _OptGroup.default;
exports.AutoCompleteOptGroup = AutoCompleteOptGroup;
var AutoComplete = (0, _vue.defineComponent)({
  name: 'AAutoComplete',
  inheritAttrs: false,
  props: (0, _extends2.default)((0, _extends2.default)({}, autoCompleteProps), {
    prefixCls: _vueTypes.default.string,
    showSearch: _vueTypes.default.looseBool,
    transitionName: _vueTypes.default.string.def('slide-up'),
    choiceTransitionName: _vueTypes.default.string.def('zoom'),
    autofocus: _vueTypes.default.looseBool,
    backfill: _vueTypes.default.looseBool,
    optionLabelProp: _vueTypes.default.string.def('children'),
    filterOption: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func]).def(false),
    defaultActiveFirstOption: _vueTypes.default.looseBool.def(true)
  }),
  emits: ['change', 'select', 'focus', 'blur'],
  Option: _Option.default,
  OptGroup: _OptGroup.default,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _warning.default)(!(props.dataSource !== undefined || 'dataSource' in slots), 'AutoComplete', '`dataSource` is deprecated, please use `options` instead.');
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider),
      popupRef: null,
      select: null
    };
  },
  created: function created() {
    (0, _vue.provide)('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    saveSelect: function saveSelect(node) {
      this.select = node;
    },
    getInputElement: function getInputElement() {
      var children = (0, _propsUtil.getSlot)(this);
      var element = children.length ? children[0] : (0, _vue.createVNode)(_input.default, {
        "lazy": false
      }, null);
      return element;
    },
    focus: function focus() {
      if (this.select) {
        this.select.focus();
      }
    },
    blur: function blur() {
      if (this.select) {
        this.select.blur();
      }
    }
  },
  render: function render() {
    var _cls;

    var size = this.size,
        customizePrefixCls = this.prefixCls,
        dataSource = this.dataSource;
    var optionChildren;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var className = this.$attrs.class;
    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, className, !!className), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-show-search"), true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-auto-complete"), true), _cls);
    var childArray = (0, _propsUtil.getSlot)(this, 'dataSource');

    if ('options' in this.$slots) {
      childArray = (0, _propsUtil.getSlot)(this, 'options');
    }

    if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
      optionChildren = childArray;
    } else {
      optionChildren = dataSource ? dataSource.map(function (item) {
        if ((0, _propsUtil.isValidElement)(item)) {
          return item;
        }

        switch ((0, _typeof2.default)(item)) {
          case 'string':
            return (0, _vue.createVNode)(_Option.default, {
              "key": item,
              "value": item
            }, {
              default: function _default() {
                return [item];
              }
            });

          case 'object':
            return (0, _vue.createVNode)(_Option.default, {
              "key": item.value,
              "value": item.value
            }, {
              default: function _default() {
                return [item.text];
              }
            });

          default:
            throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
        }
      }) : [];
    }

    var selectProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _omit.default)((0, _propsUtil.getOptionProps)(this), ['dataSource', 'optionLabelProp'])), this.$attrs), {
      mode: _select.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,
      // optionLabelProp,
      getInputElement: this.getInputElement,
      notFoundContent: (0, _propsUtil.getComponent)(this, 'notFoundContent'),
      // placeholder: '',
      class: cls,
      ref: this.saveSelect
    });
    return (0, _vue.createVNode)(_select.default, selectProps, {
      default: function _default() {
        return [optionChildren];
      }
    });
  }
});
/* istanbul ignore next */

AutoComplete.install = function (app) {
  app.component(AutoComplete.name, AutoComplete);
  app.component(AutoComplete.Option.displayName, AutoComplete.Option);
  app.component(AutoComplete.OptGroup.displayName, AutoComplete.OptGroup);
  return app;
};

var _default2 = AutoComplete;
exports.default = _default2;