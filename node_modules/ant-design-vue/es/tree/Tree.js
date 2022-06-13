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
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import FileOutlined from '@ant-design/icons-vue/FileOutlined';
import CaretDownFilled from '@ant-design/icons-vue/CaretDownFilled';
import MinusSquareOutlined from '@ant-design/icons-vue/MinusSquareOutlined';
import PlusSquareOutlined from '@ant-design/icons-vue/PlusSquareOutlined';
import VcTree from '../vc-tree';
import animation from '../_util/openAnimation';
import PropTypes from '../_util/vue-types';
import { getOptionProps, getComponent, getSlot } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { cloneElement } from '../_util/vnode';
import { defaultConfigProvider } from '../config-provider';
var TreeNode = VcTree.TreeNode;

function TreeProps() {
  return {
    showLine: PropTypes.looseBool,

    /** 是否支持多选 */
    multiple: PropTypes.looseBool,

    /** 是否自动展开父节点 */
    autoExpandParent: PropTypes.looseBool,

    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: PropTypes.looseBool,

    /** 是否支持选中 */
    checkable: PropTypes.looseBool,

    /** 是否禁用树 */
    disabled: PropTypes.looseBool,

    /** 默认展开所有树节点 */
    defaultExpandAll: PropTypes.looseBool,

    /** 默认展开对应树节点 */
    defaultExpandParent: PropTypes.looseBool,

    /** 默认展开指定的树节点 */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** （受控）展开指定的树节点 */
    expandedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** （受控）选中复选框的树节点 */
    checkedKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.shape({
      checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      halfChecked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    }).loose]),

    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** （受控）设置选中的树节点 */
    selectedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** 默认选中的树节点 */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    selectable: PropTypes.looseBool,

    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: PropTypes.func,

    /** 异步加载数据 */
    loadData: PropTypes.func,
    loadedKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void,

    /** 响应右键点击 */
    // onRightClick: (options: AntTreeNodeMouseEvent) => void,

    /** 设置节点可拖拽（IE>8）*/
    draggable: PropTypes.looseBool,
    // /** 开始拖拽时调用 */
    // onDragStart: (options: AntTreeNodeMouseEvent) => void,
    // /** dragenter 触发时调用 */
    // onDragEnter: (options: AntTreeNodeMouseEvent) => void,
    // /** dragover 触发时调用 */
    // onDragOver: (options: AntTreeNodeMouseEvent) => void,
    // /** dragleave 触发时调用 */
    // onDragLeave: (options: AntTreeNodeMouseEvent) => void,
    // /** drop 触发时调用 */
    // onDrop: (options: AntTreeNodeMouseEvent) => void,
    showIcon: PropTypes.looseBool,
    icon: PropTypes.func,
    switcherIcon: PropTypes.any,
    prefixCls: PropTypes.string,
    filterTreeNode: PropTypes.func,
    openAnimation: PropTypes.any,
    treeData: {
      type: Array
    },

    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: PropTypes.object,
    blockNode: PropTypes.looseBool,

    /** 展开/收起节点时触发 */
    onExpand: PropTypes.func,

    /** 点击复选框触发 */
    onCheck: PropTypes.func,

    /** 点击树节点触发 */
    onSelect: PropTypes.func,

    /** 单击树节点触发 */
    onClick: PropTypes.func,

    /** 双击树节点触发 */
    onDoubleclick: PropTypes.func,
    onDblclick: PropTypes.func,
    'onUpdate:selectedKeys': PropTypes.func,
    'onUpdate:checkedKeys': PropTypes.func,
    'onUpdate:expandedKeys': PropTypes.func
  };
}

export { TreeProps };
export default defineComponent({
  name: 'ATree',
  inheritAttrs: false,
  props: initDefaultProps(TreeProps(), {
    checkable: false,
    showIcon: false,
    openAnimation: _extends(_extends({}, animation), {
      appear: null
    }),
    blockNode: false
  }),
  setup: function setup() {
    return {
      tree: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  TreeNode: TreeNode,
  methods: {
    renderSwitcherIcon: function renderSwitcherIcon(prefixCls, switcherIcon, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading,
          expanded = _ref.expanded;
      var showLine = this.$props.showLine;

      if (loading) {
        return _createVNode(LoadingOutlined, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return showLine ? _createVNode(FileOutlined, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null) : null;
      }

      var switcherCls = "".concat(prefixCls, "-switcher-icon");

      if (switcherIcon) {
        return cloneElement(switcherIcon, {
          class: switcherCls
        });
      }

      return showLine ? expanded ? _createVNode(MinusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : _createVNode(PlusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : _createVNode(CaretDownFilled, {
        "class": switcherCls
      }, null);
    },
    updateTreeData: function updateTreeData(treeData) {
      var _this = this;

      var $slots = this.$slots;
      var defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key'
      };

      var replaceFields = _extends(_extends({}, defaultFields), this.$props.replaceFields);

      return treeData.map(function (item) {
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];

        var _item$slots = item.slots,
            slots = _item$slots === void 0 ? {} : _item$slots,
            cls = item.class,
            style = item.style,
            restProps = __rest(item, ["slots", "class", "style"]);

        var treeNodeProps = _extends(_extends({}, restProps), {
          icon: $slots[slots.icon] || restProps.icon,
          switcherIcon: $slots[slots.switcherIcon] || restProps.switcherIcon,
          title: $slots[slots.title] || $slots.title || restProps[replaceFields.title],
          dataRef: item,
          key: key,
          class: cls,
          style: style
        });

        if (children) {
          return _extends(_extends({}, treeNodeProps), {
            children: _this.updateTreeData(children)
          });
        }

        return treeNodeProps;
      });
    },
    setTreeRef: function setTreeRef(node) {
      this.tree = node;
    },
    handleCheck: function handleCheck(checkedObj, eventObj) {
      this.$emit('update:checkedKeys', checkedObj);
      this.$emit('check', checkedObj, eventObj);
    },
    handleExpand: function handleExpand(expandedKeys, eventObj) {
      this.$emit('update:expandedKeys', expandedKeys);
      this.$emit('expand', expandedKeys, eventObj);
    },
    handleSelect: function handleSelect(selectedKeys, eventObj) {
      this.$emit('update:selectedKeys', selectedKeys);
      this.$emit('select', selectedKeys, eventObj);
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames;

    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
        showIcon = props.showIcon,
        treeNodes = props.treeNodes,
        blockNode = props.blockNode;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);

    var _switcherIcon = getComponent(this, 'switcherIcon');

    var checkable = props.checkable;
    var treeData = props.treeData || treeNodes;

    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var vcTreeProps = _extends(_extends(_extends(_extends({}, props), {
      prefixCls: prefixCls,
      checkable: checkable ? _createVNode("span", {
        "class": "".concat(prefixCls, "-checkbox-inner")
      }, null) : checkable,
      children: getSlot(this),
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, _switcherIcon, nodeProps);
      },
      ref: this.setTreeRef
    }), restAttrs), {
      class: classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _classNames)),
      onCheck: this.handleCheck,
      onExpand: this.handleExpand,
      onSelect: this.handleSelect
    });

    if (treeData) {
      vcTreeProps.treeData = treeData;
    }

    return _createVNode(VcTree, _objectSpread(_objectSpread({}, vcTreeProps), {}, {
      "__propsSymbol__": []
    }), null);
  }
});