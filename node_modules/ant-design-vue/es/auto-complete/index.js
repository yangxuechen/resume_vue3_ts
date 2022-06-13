import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, provide } from 'vue';
import Select, { SelectProps } from '../select';
import Input from '../input';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';
import { getComponent, getOptionProps, isValidElement, getSlot } from '../_util/props-util';
import Omit from 'omit.js';
import warning from '../_util/warning';
import Option from './Option';
import OptGroup from './OptGroup';

function isSelectOptionOrSelectOptGroup(child) {
  var _a, _b;

  return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.isSelectOption) || ((_b = child === null || child === void 0 ? void 0 : child.type) === null || _b === void 0 ? void 0 : _b.isSelectOptGroup);
}

var autoCompleteProps = _extends(_extends({}, SelectProps()), {
  dataSource: PropTypes.array,
  dropdownMenuStyle: PropTypes.style,
  optionLabelProp: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.looseBool
});

export var AutoCompleteOption = Option;
export var AutoCompleteOptGroup = OptGroup;
var AutoComplete = defineComponent({
  name: 'AAutoComplete',
  inheritAttrs: false,
  props: _extends(_extends({}, autoCompleteProps), {
    prefixCls: PropTypes.string,
    showSearch: PropTypes.looseBool,
    transitionName: PropTypes.string.def('slide-up'),
    choiceTransitionName: PropTypes.string.def('zoom'),
    autofocus: PropTypes.looseBool,
    backfill: PropTypes.looseBool,
    optionLabelProp: PropTypes.string.def('children'),
    filterOption: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.func]).def(false),
    defaultActiveFirstOption: PropTypes.looseBool.def(true)
  }),
  emits: ['change', 'select', 'focus', 'blur'],
  Option: Option,
  OptGroup: OptGroup,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    warning(!(props.dataSource !== undefined || 'dataSource' in slots), 'AutoComplete', '`dataSource` is deprecated, please use `options` instead.');
    return {
      configProvider: inject('configProvider', defaultConfigProvider),
      popupRef: null,
      select: null
    };
  },
  created: function created() {
    provide('savePopupRef', this.savePopupRef);
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    saveSelect: function saveSelect(node) {
      this.select = node;
    },
    getInputElement: function getInputElement() {
      var children = getSlot(this);
      var element = children.length ? children[0] : _createVNode(Input, {
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
    var cls = (_cls = {}, _defineProperty(_cls, className, !!className), _defineProperty(_cls, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_cls, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_cls, "".concat(prefixCls, "-show-search"), true), _defineProperty(_cls, "".concat(prefixCls, "-auto-complete"), true), _cls);
    var childArray = getSlot(this, 'dataSource');

    if ('options' in this.$slots) {
      childArray = getSlot(this, 'options');
    }

    if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
      optionChildren = childArray;
    } else {
      optionChildren = dataSource ? dataSource.map(function (item) {
        if (isValidElement(item)) {
          return item;
        }

        switch (_typeof(item)) {
          case 'string':
            return _createVNode(Option, {
              "key": item,
              "value": item
            }, {
              default: function _default() {
                return [item];
              }
            });

          case 'object':
            return _createVNode(Option, {
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

    var selectProps = _extends(_extends(_extends({}, Omit(getOptionProps(this), ['dataSource', 'optionLabelProp'])), this.$attrs), {
      mode: Select.SECRET_COMBOBOX_MODE_DO_NOT_USE,
      // optionLabelProp,
      getInputElement: this.getInputElement,
      notFoundContent: getComponent(this, 'notFoundContent'),
      // placeholder: '',
      class: cls,
      ref: this.saveSelect
    });

    return _createVNode(Select, selectProps, {
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

export default AutoComplete;