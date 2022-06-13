import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "vue";

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
import VcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from '../vc-tree-select';
import classNames from '../_util/classNames';
import { TreeSelectProps } from './interface';
import warning from '../_util/warning';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { defaultConfigProvider } from '../config-provider';
export { TreeData, TreeSelectProps } from './interface';
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import CaretDownOutlined from '@ant-design/icons-vue/CaretDownOutlined';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import omit from 'omit.js';
import { convertChildrenToData } from './utils';
var TreeSelect = defineComponent({
  TreeNode: TreeNode,
  SHOW_ALL: SHOW_ALL,
  SHOW_PARENT: SHOW_PARENT,
  SHOW_CHILD: SHOW_CHILD,
  name: 'ATreeSelect',
  inheritAttrs: false,
  props: initDefaultProps(TreeSelectProps(), {
    transitionName: 'slide-up',
    choiceTransitionName: ''
  }),
  setup: function setup() {
    return {
      vcTreeSelect: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  created: function created() {
    warning(this.multiple !== false || !this.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
  },
  methods: {
    saveTreeSelect: function saveTreeSelect(node) {
      this.vcTreeSelect = node;
    },
    focus: function focus() {
      this.vcTreeSelect.focus();
    },
    blur: function blur() {
      this.vcTreeSelect.blur();
    },
    renderSwitcherIcon: function renderSwitcherIcon(prefixCls, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading;

      if (loading) {
        return _createVNode(LoadingOutlined, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return null;
      }

      return _createVNode(CaretDownOutlined, {
        "class": "".concat(prefixCls, "-switcher-icon")
      }, null);
    },
    handleChange: function handleChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit('update:value', args[0]);
      this.$emit.apply(this, ['change'].concat(args));
    },
    handleTreeExpand: function handleTreeExpand() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit('update:treeExpandedKeys', args[0]);
      this.$emit.apply(this, ['treeExpand'].concat(args));
    },
    handleSearch: function handleSearch() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.$emit('update:searchValue', args[0]);
      this.$emit.apply(this, ['search'].concat(args));
    },
    updateTreeData: function updateTreeData(treeData) {
      var _this = this;

      var $slots = this.$slots;
      var defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key',
        label: 'label',
        value: 'value'
      };

      var replaceFields = _extends(_extends({}, defaultFields), this.$props.replaceFields);

      return treeData.map(function (item) {
        var _item$slots = item.slots,
            slots = _item$slots === void 0 ? {} : _item$slots;
        var label = item[replaceFields.label];
        var title = item[replaceFields.title];
        var value = item[replaceFields.value];
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];
        var newLabel = typeof label === 'function' ? label() : label;
        var newTitle = typeof title === 'function' ? title() : title;

        if (!newLabel && slots.label && $slots[slots.label]) {
          newLabel = _createVNode(_Fragment, null, [$slots[slots.label](item)]);
        }

        if (!newTitle && slots.title && $slots[slots.title]) {
          newTitle = _createVNode(_Fragment, null, [$slots[slots.title](item)]);
        }

        var treeNodeProps = _extends(_extends({}, item), {
          title: newTitle || newLabel,
          value: value,
          dataRef: item,
          key: key
        });

        if (children) {
          return _extends(_extends({}, treeNodeProps), {
            children: _this.updateTreeData(children)
          });
        }

        return treeNodeProps;
      });
    }
  },
  render: function render() {
    var _cls,
        _this2 = this;

    var props = getOptionProps(this);

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        getPopupContainer = props.getPopupContainer,
        restProps = __rest(props, ["prefixCls", "size", "dropdownStyle", "dropdownClassName", "getPopupContainer"]);

    var className = this.$attrs.class;
    var _this$configProvider = this.configProvider,
        renderEmpty = _this$configProvider.renderEmpty,
        getPrefixCls = _this$configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var notFoundContent = getComponent(this, 'notFoundContent');
    var removeIcon = getComponent(this, 'removeIcon');
    var clearIcon = getComponent(this, 'clearIcon');
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var rest = omit(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'suffixIcon']);
    var suffixIcon = getComponent(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var treeData = props.treeData;

    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }

    var cls = (_cls = {}, _defineProperty(_cls, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_cls, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_cls, className, className), _cls); // showSearch: single - false, multiple - true

    var showSearch = restProps.showSearch;

    if (!('showSearch' in restProps)) {
      showSearch = !!(restProps.multiple || restProps.treeCheckable);
    }

    var checkable = getComponent(this, 'treeCheckable');

    if (checkable) {
      checkable = _createVNode("span", {
        "class": "".concat(prefixCls, "-tree-checkbox-inner")
      }, null);
    }

    var inputIcon = suffixIcon || _createVNode(DownOutlined, {
      "class": "".concat(prefixCls, "-arrow-icon")
    }, null);

    var finalRemoveIcon = removeIcon || _createVNode(CloseOutlined, {
      "class": "".concat(prefixCls, "-remove-icon")
    }, null);

    var finalClearIcon = clearIcon || _createVNode(CloseCircleFilled, {
      "class": "".concat(prefixCls, "-clear-icon")
    }, null);

    var VcTreeSelectProps = _extends(_extends(_extends(_extends({}, this.$attrs), {
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, nodeProps);
      },
      inputIcon: inputIcon,
      removeIcon: finalRemoveIcon,
      clearIcon: finalClearIcon
    }), rest), {
      showSearch: showSearch,
      getPopupContainer: getPopupContainer || getContextPopupContainer,
      dropdownClassName: classNames(dropdownClassName, "".concat(prefixCls, "-tree-dropdown")),
      prefixCls: prefixCls,
      dropdownStyle: _extends({
        maxHeight: '100vh',
        overflow: 'auto'
      }, dropdownStyle),
      treeCheckable: checkable,
      notFoundContent: notFoundContent || renderEmpty('Select'),
      class: cls,
      onChange: this.handleChange,
      onSearch: this.handleSearch,
      onTreeExpand: this.handleTreeExpand,
      ref: this.saveTreeSelect,
      treeData: treeData ? treeData : convertChildrenToData(getSlot(this))
    });

    return _createVNode(VcTreeSelect, _objectSpread(_objectSpread({}, VcTreeSelectProps), {}, {
      "__propsSymbol__": []
    }), omit(this.$slots, ['default']));
  }
});
/* istanbul ignore next */

TreeSelect.install = function (app) {
  app.component(TreeSelect.name, TreeSelect);
  app.component(TreeSelect.TreeNode.displayName, TreeSelect.TreeNode);
  return app;
};

export var TreeSelectNode = TreeSelect.TreeNode;
export default TreeSelect;