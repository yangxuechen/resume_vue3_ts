"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propsUtil = require("../_util/props-util");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _arrayTreeFilter = _interopRequireDefault(require("array-tree-filter"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _default = {
  name: 'CascaderMenus',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    value: _vueTypes.default.array.def([]),
    activeValue: _vueTypes.default.array.def([]),
    options: _vueTypes.default.array,
    prefixCls: _vueTypes.default.string.def('rc-cascader-menus'),
    expandTrigger: _vueTypes.default.string.def('click'),
    // onSelect: PropTypes.func,
    visible: _vueTypes.default.looseBool.def(false),
    dropdownMenuColumnStyle: _vueTypes.default.object,
    defaultFieldNames: _vueTypes.default.object,
    fieldNames: _vueTypes.default.object,
    expandIcon: _vueTypes.default.any,
    loadingIcon: _vueTypes.default.any
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
      var loadingIcon = (0, _propsUtil.getComponent)(this, 'loadingIcon');
      var expandIcon = (0, _propsUtil.getComponent)(this, 'expandIcon');

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
          expandIconNode = (0, _vue.createVNode)("span", {
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

      return (0, _vue.createVNode)("li", (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
      return (0, _arrayTreeFilter.default)(options, function (o, level) {
        return (0, _isEqual.default)(o[_this4.getFieldName('value')], activeValue[level]);
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
          var target = (0, _propsUtil.findDOMNode)(itemComponent);
          target.parentNode.scrollTop = target.offsetTop;
        }
      }
    },
    isActiveOption: function isActiveOption(option, menuIndex) {
      var _this$activeValue = this.activeValue,
          activeValue = _this$activeValue === void 0 ? [] : _this$activeValue;
      return (0, _isEqual.default)(activeValue[menuIndex], option[this.getFieldName('value')]);
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
    return (0, _vue.createVNode)("div", null, [this.getShowOptions().map(function (options, menuIndex) {
      return (0, _vue.createVNode)("ul", {
        "class": "".concat(prefixCls, "-menu"),
        "key": menuIndex,
        "style": dropdownMenuColumnStyle
      }, [options.map(function (option) {
        return _this8.getOption(option, menuIndex);
      })]);
    })]);
  }
};
exports.default = _default;