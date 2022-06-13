import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { getComponent, findDOMNode } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import arrayTreeFilter from 'array-tree-filter';
import BaseMixin from '../_util/BaseMixin';
import isEqual from 'lodash-es/isEqual';
export default {
  name: 'CascaderMenus',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    value: PropTypes.array.def([]),
    activeValue: PropTypes.array.def([]),
    options: PropTypes.array,
    prefixCls: PropTypes.string.def('rc-cascader-menus'),
    expandTrigger: PropTypes.string.def('click'),
    // onSelect: PropTypes.func,
    visible: PropTypes.looseBool.def(false),
    dropdownMenuColumnStyle: PropTypes.object,
    defaultFieldNames: PropTypes.object,
    fieldNames: PropTypes.object,
    expandIcon: PropTypes.any,
    loadingIcon: PropTypes.any
  },
  data: function data() {
    this.menuItems = {};
    return {};
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.$nextTick(function () {
          _this.scrollActiveItemToView();
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.scrollActiveItemToView();
    });
  },
  methods: {
    getFieldName: function getFieldName(name) {
      var _this$$props = this.$props,
          fieldNames = _this$$props.fieldNames,
          defaultFieldNames = _this$$props.defaultFieldNames; // 防止只设置单个属性的名字

      return fieldNames[name] || defaultFieldNames[name];
    },
    getOption: function getOption(option, menuIndex) {
      var _this3 = this;

      var prefixCls = this.prefixCls,
          expandTrigger = this.expandTrigger;
      var loadingIcon = getComponent(this, 'loadingIcon');
      var expandIcon = getComponent(this, 'expandIcon');

      var onSelect = function onSelect(e) {
        _this3.__emit('select', option, menuIndex, e);
      };

      var onItemDoubleClick = function onItemDoubleClick(e) {
        _this3.__emit('itemDoubleClick', option, menuIndex, e);
      };

      var key = option[this.getFieldName('value')];
      var expandProps = {
        onClick: onSelect,
        onDblclick: onItemDoubleClick
      };
      var menuItemCls = "".concat(prefixCls, "-menu-item");
      var expandIconNode = null;
      var hasChildren = option[this.getFieldName('children')] && option[this.getFieldName('children')].length > 0;

      if (hasChildren || option.isLeaf === false) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-expand");

        if (!option.loading) {
          expandIconNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-menu-item-expand-icon")
          }, [expandIcon]);
        }
      }

      if (expandTrigger === 'hover' && (hasChildren || option.isLeaf === false)) {
        expandProps = {
          onMouseenter: this.delayOnSelect.bind(this, onSelect),
          onMouseleave: this.delayOnSelect.bind(this),
          onClick: onSelect
        };
      }

      if (this.isActiveOption(option, menuIndex)) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-active");
        expandProps.ref = this.saveMenuItem(menuIndex);
      }

      if (option.disabled) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-disabled");
      }

      var loadingIconNode = null;

      if (option.loading) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-loading");
        loadingIconNode = loadingIcon || null;
      }

      var title = '';

      if (option.title) {
        title = option.title;
      } else if (typeof option[this.getFieldName('label')] === 'string') {
        title = option[this.getFieldName('label')];
      }

      return _createVNode("li", _objectSpread(_objectSpread({
        "key": Array.isArray(key) ? key.join('__ant__') : key,
        "class": menuItemCls,
        "title": title
      }, expandProps), {}, {
        "role": "menuitem",
        "onMousedown": function onMousedown(e) {
          return e.preventDefault();
        }
      }), [option[this.getFieldName('label')], expandIconNode, loadingIconNode]);
    },
    getActiveOptions: function getActiveOptions(values) {
      var _this4 = this;

      var activeValue = values || this.activeValue;
      var options = this.options;
      return arrayTreeFilter(options, function (o, level) {
        return isEqual(o[_this4.getFieldName('value')], activeValue[level]);
      }, {
        childrenKeyName: this.getFieldName('children')
      });
    },
    getShowOptions: function getShowOptions() {
      var _this5 = this;

      var options = this.options;
      var result = this.getActiveOptions().map(function (activeOption) {
        return activeOption[_this5.getFieldName('children')];
      }).filter(function (activeOption) {
        return !!activeOption;
      });
      result.unshift(options);
      return result;
    },
    delayOnSelect: function delayOnSelect(onSelect) {
      var _this6 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }

      if (typeof onSelect === 'function') {
        this.delayTimer = setTimeout(function () {
          onSelect(args);
          _this6.delayTimer = null;
        }, 150);
      }
    },
    scrollActiveItemToView: function scrollActiveItemToView() {
      // scroll into view
      var optionsLength = this.getShowOptions().length;

      for (var i = 0; i < optionsLength; i++) {
        var itemComponent = this.menuItems[i];

        if (itemComponent) {
          var target = findDOMNode(itemComponent);
          target.parentNode.scrollTop = target.offsetTop;
        }
      }
    },
    isActiveOption: function isActiveOption(option, menuIndex) {
      var _this$activeValue = this.activeValue,
          activeValue = _this$activeValue === void 0 ? [] : _this$activeValue;
      return isEqual(activeValue[menuIndex], option[this.getFieldName('value')]);
    },
    saveMenuItem: function saveMenuItem(index) {
      var _this7 = this;

      return function (node) {
        _this7.menuItems[index] = node;
      };
    }
  },
  render: function render() {
    var _this8 = this;

    var prefixCls = this.prefixCls,
        dropdownMenuColumnStyle = this.dropdownMenuColumnStyle;
    return _createVNode("div", null, [this.getShowOptions().map(function (options, menuIndex) {
      return _createVNode("ul", {
        "class": "".concat(prefixCls, "-menu"),
        "key": menuIndex,
        "style": dropdownMenuColumnStyle
      }, [options.map(function (option) {
        return _this8.getOption(option, menuIndex);
      })]);
    })]);
  }
};