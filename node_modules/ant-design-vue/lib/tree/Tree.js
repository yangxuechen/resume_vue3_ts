"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeProps = TreeProps;
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileOutlined"));

var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownFilled"));

var _MinusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/MinusSquareOutlined"));

var _PlusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusSquareOutlined"));

var _vcTree = _interopRequireDefault(require("../vc-tree"));

var _openAnimation = _interopRequireDefault(require("../_util/openAnimation"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _vnode = require("../_util/vnode");

var _configProvider = require("../config-provider");

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

var TreeNode = _vcTree.default.TreeNode;

function TreeProps() {
  return {
    showLine: _vueTypes.default.looseBool,

    /** 是否支持多选 */
    multiple: _vueTypes.default.looseBool,

    /** 是否自动展开父节点 */
    autoExpandParent: _vueTypes.default.looseBool,

    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: _vueTypes.default.looseBool,

    /** 是否支持选中 */
    checkable: _vueTypes.default.looseBool,

    /** 是否禁用树 */
    disabled: _vueTypes.default.looseBool,

    /** 默认展开所有树节点 */
    defaultExpandAll: _vueTypes.default.looseBool,

    /** 默认展开对应树节点 */
    defaultExpandParent: _vueTypes.default.looseBool,

    /** 默认展开指定的树节点 */
    defaultExpandedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** （受控）展开指定的树节点 */
    expandedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** （受控）选中复选框的树节点 */
    checkedKeys: _vueTypes.default.oneOfType([_vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])), _vueTypes.default.shape({
      checked: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
      halfChecked: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]))
    }).loose]),

    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** （受控）设置选中的树节点 */
    selectedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),

    /** 默认选中的树节点 */
    defaultSelectedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
    selectable: _vueTypes.default.looseBool,

    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: _vueTypes.default.func,

    /** 异步加载数据 */
    loadData: _vueTypes.default.func,
    loadedKeys: _vueTypes.default.arrayOf(_vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number])),
    // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void,

    /** 响应右键点击 */
    // onRightClick: (options: AntTreeNodeMouseEvent) => void,

    /** 设置节点可拖拽（IE>8）*/
    draggable: _vueTypes.default.looseBool,
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
    showIcon: _vueTypes.default.looseBool,
    icon: _vueTypes.default.func,
    switcherIcon: _vueTypes.default.any,
    prefixCls: _vueTypes.default.string,
    filterTreeNode: _vueTypes.default.func,
    openAnimation: _vueTypes.default.any,
    treeData: {
      type: Array
    },

    /**
     * @default{title,key,children}
     * 替换treeNode中 title,key,children字段为treeData中对应的字段
     */
    replaceFields: _vueTypes.default.object,
    blockNode: _vueTypes.default.looseBool,

    /** 展开/收起节点时触发 */
    onExpand: _vueTypes.default.func,

    /** 点击复选框触发 */
    onCheck: _vueTypes.default.func,

    /** 点击树节点触发 */
    onSelect: _vueTypes.default.func,

    /** 单击树节点触发 */
    onClick: _vueTypes.default.func,

    /** 双击树节点触发 */
    onDoubleclick: _vueTypes.default.func,
    onDblclick: _vueTypes.default.func,
    'onUpdate:selectedKeys': _vueTypes.default.func,
    'onUpdate:checkedKeys': _vueTypes.default.func,
    'onUpdate:expandedKeys': _vueTypes.default.func
  };
}

var _default = (0, _vue.defineComponent)({
  name: 'ATree',
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(TreeProps(), {
    checkable: false,
    showIcon: false,
    openAnimation: (0, _extends2.default)((0, _extends2.default)({}, _openAnimation.default), {
      appear: null
    }),
    blockNode: false
  }),
  setup: function setup() {
    return {
      tree: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
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
        return (0, _vue.createVNode)(_LoadingOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-loading-icon")
        }, null);
      }

      if (isLeaf) {
        return showLine ? (0, _vue.createVNode)(_FileOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null) : null;
      }

      var switcherCls = "".concat(prefixCls, "-switcher-icon");

      if (switcherIcon) {
        return (0, _vnode.cloneElement)(switcherIcon, {
          class: switcherCls
        });
      }

      return showLine ? expanded ? (0, _vue.createVNode)(_MinusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : (0, _vue.createVNode)(_PlusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : (0, _vue.createVNode)(_CaretDownFilled.default, {
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
      var replaceFields = (0, _extends2.default)((0, _extends2.default)({}, defaultFields), this.$props.replaceFields);
      return treeData.map(function (item) {
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];

        var _item$slots = item.slots,
            slots = _item$slots === void 0 ? {} : _item$slots,
            cls = item.class,
            style = item.style,
            restProps = __rest(item, ["slots", "class", "style"]);

        var treeNodeProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
          icon: $slots[slots.icon] || restProps.icon,
          switcherIcon: $slots[slots.switcherIcon] || restProps.switcherIcon,
          title: $slots[slots.title] || $slots.title || restProps[replaceFields.title],
          dataRef: item,
          key: key,
          class: cls,
          style: style
        });

        if (children) {
          return (0, _extends2.default)((0, _extends2.default)({}, treeNodeProps), {
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

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        showIcon = props.showIcon,
        treeNodes = props.treeNodes,
        blockNode = props.blockNode;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);

    var _switcherIcon = (0, _propsUtil.getComponent)(this, 'switcherIcon');

    var checkable = props.checkable;
    var treeData = props.treeData || treeNodes;

    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }

    var _a = this.$attrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]);

    var vcTreeProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
      prefixCls: prefixCls,
      checkable: checkable ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-checkbox-inner")
      }, null) : checkable,
      children: (0, _propsUtil.getSlot)(this),
      switcherIcon: function switcherIcon(nodeProps) {
        return _this2.renderSwitcherIcon(prefixCls, _switcherIcon, nodeProps);
      },
      ref: this.setTreeRef
    }), restAttrs), {
      class: (0, _classNames2.default)(className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _classNames)),
      onCheck: this.handleCheck,
      onExpand: this.handleExpand,
      onSelect: this.handleSelect
    });

    if (treeData) {
      vcTreeProps.treeData = treeData;
    }

    return (0, _vue.createVNode)(_vcTree.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, vcTreeProps), {}, {
      "__propsSymbol__": []
    }), null);
  }
});

exports.default = _default;