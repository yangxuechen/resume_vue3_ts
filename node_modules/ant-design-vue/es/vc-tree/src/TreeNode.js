import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject, provide } from 'vue';
import PropTypes from '../../_util/vue-types';
import classNames from '../../_util/classNames';
import { getNodeChildren as _getNodeChildren, mapChildren, warnOnlyTreeNode, getDataAndAria } from './util';
import { initDefaultProps, getComponent, getSlot } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
import { getTransitionProps, Transition } from '../../_util/transition';

function noop() {}

var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var TreeNode = defineComponent({
  name: 'TreeNode',
  mixins: [BaseMixin],
  inheritAttrs: false,
  __ANT_TREE_NODE: true,
  props: initDefaultProps({
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    prefixCls: PropTypes.string,
    // className: PropTypes.string,
    root: PropTypes.object,
    // onSelect: PropTypes.func,
    // By parent
    expanded: PropTypes.looseBool,
    selected: PropTypes.looseBool,
    checked: PropTypes.looseBool,
    loaded: PropTypes.looseBool,
    loading: PropTypes.looseBool,
    halfChecked: PropTypes.looseBool,
    title: PropTypes.any,
    pos: PropTypes.string,
    dragOver: PropTypes.looseBool,
    dragOverGapTop: PropTypes.looseBool,
    dragOverGapBottom: PropTypes.looseBool,
    // By user
    isLeaf: PropTypes.looseBool,
    checkable: PropTypes.looseBool,
    selectable: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    disableCheckbox: PropTypes.looseBool,
    icon: PropTypes.any,
    dataRef: PropTypes.object,
    switcherIcon: PropTypes.any,
    label: PropTypes.any,
    value: PropTypes.any
  }, {}),
  setup: function setup() {
    return {
      vcTree: inject('vcTree', {}),
      vcTreeNode: inject('vcTreeNode', {})
    };
  },
  data: function data() {
    this.children = null;
    return {
      dragNodeHighlight: false
    };
  },
  created: function created() {
    provide('vcTreeNode', this);
  },
  // Isomorphic needn't load data in server side
  mounted: function mounted() {
    var eventKey = this.eventKey,
        registerTreeNode = this.vcTree.registerTreeNode;
    this.syncLoadData(this.$props);
    registerTreeNode && registerTreeNode(eventKey, this);
  },
  updated: function updated() {
    this.syncLoadData(this.$props);
  },
  beforeUnmount: function beforeUnmount() {
    var eventKey = this.eventKey,
        registerTreeNode = this.vcTree.registerTreeNode;
    registerTreeNode && registerTreeNode(eventKey, null);
  },
  methods: {
    onSelectorClick: function onSelectorClick(e) {
      // Click trigger before select/check operation
      var onNodeClick = this.vcTree.onNodeClick;
      onNodeClick(e, this);

      if (this.isSelectable()) {
        this.onSelect(e);
      } else {
        this.onCheck(e);
      }
    },
    onSelectorDoubleClick: function onSelectorDoubleClick(e) {
      var onNodeDoubleClick = this.vcTree.onNodeDoubleClick;
      onNodeDoubleClick(e, this);
    },
    onSelect: function onSelect(e) {
      if (this.isDisabled()) return;
      var onNodeSelect = this.vcTree.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, this);
    },
    onCheck: function onCheck(e) {
      if (this.isDisabled()) return;
      var disableCheckbox = this.disableCheckbox,
          checked = this.checked;
      var onNodeCheck = this.vcTree.onNodeCheck;
      if (!this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, this, targetChecked);
    },
    onMouseEnter: function onMouseEnter(e) {
      var onNodeMouseEnter = this.vcTree.onNodeMouseEnter;
      onNodeMouseEnter(e, this);
    },
    onMouseLeave: function onMouseLeave(e) {
      var onNodeMouseLeave = this.vcTree.onNodeMouseLeave;
      onNodeMouseLeave(e, this);
    },
    onContextMenu: function onContextMenu(e) {
      var onNodeContextMenu = this.vcTree.onNodeContextMenu;
      onNodeContextMenu(e, this);
    },
    onDragStart: function onDragStart(e) {
      var onNodeDragStart = this.vcTree.onNodeDragStart;
      e.stopPropagation();
      this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, this);

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    },
    onDragEnter: function onDragEnter(e) {
      var onNodeDragEnter = this.vcTree.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, this);
    },
    onDragOver: function onDragOver(e) {
      var onNodeDragOver = this.vcTree.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, this);
    },
    onDragLeave: function onDragLeave(e) {
      var onNodeDragLeave = this.vcTree.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, this);
    },
    onDragEnd: function onDragEnd(e) {
      var onNodeDragEnd = this.vcTree.onNodeDragEnd;
      e.stopPropagation();
      this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, this);
    },
    onDrop: function onDrop(e) {
      var onNodeDrop = this.vcTree.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, this);
    },
    // Disabled item still can be switch
    onExpand: function onExpand(e) {
      var onNodeExpand = this.vcTree.onNodeExpand;
      onNodeExpand(e, this);
    },
    // Drag usage
    setSelectHandle: function setSelectHandle(node) {
      this.selectHandle = node;
    },
    getNodeChildren: function getNodeChildren() {
      var originList = this.children;

      var targetList = _getNodeChildren(originList);

      if (originList.length !== targetList.length) {
        warnOnlyTreeNode();
      }

      return targetList;
    },
    getNodeState: function getNodeState() {
      var expanded = this.expanded;

      if (this.isLeaf2()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    },
    isLeaf2: function isLeaf2() {
      var isLeaf = this.isLeaf,
          loaded = this.loaded;
      var loadData = this.vcTree.loadData;
      var hasChildren = this.getNodeChildren().length !== 0;

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    },
    isDisabled: function isDisabled() {
      var disabled = this.disabled;
      var treeDisabled = this.vcTree.disabled; // Follow the logic of Selectable

      if (disabled === false) {
        return false;
      }

      return !!(treeDisabled || disabled);
    },
    isCheckable: function isCheckable() {
      var checkable = this.$props.checkable;
      var treeCheckable = this.vcTree.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    },
    // Load data to avoid default expanded tree without data
    syncLoadData: function syncLoadData(props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$vcTree = this.vcTree,
          loadData = _this$vcTree.loadData,
          onNodeLoad = _this$vcTree.onNodeLoad;
      if (loading) return; // read from state to avoid loadData at same time

      if (loadData && expanded && !this.isLeaf2()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        var hasChildren = this.getNodeChildren().length !== 0;

        if (!hasChildren && !loaded) {
          onNodeLoad(this);
        }
      }
    },
    isSelectable: function isSelectable() {
      var selectable = this.selectable;
      var treeSelectable = this.vcTree.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    },
    // Switcher
    renderSwitcher: function renderSwitcher() {
      var expanded = this.expanded;
      var prefixCls = this.vcTree.prefixCls;
      var switcherIcon = getComponent(this, 'switcherIcon', {}, false) || getComponent(this.vcTree, 'switcherIcon', {}, false);

      if (this.isLeaf2()) {
        return _createVNode("span", {
          "key": "switcher",
          "class": classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, [typeof switcherIcon === 'function' ? switcherIcon(_extends(_extends(_extends({}, this.$props), this.$props.dataRef), {
          isLeaf: true
        })) : switcherIcon]);
      }

      var switcherCls = classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return _createVNode("span", {
        "key": "switcher",
        "onClick": this.onExpand,
        "class": switcherCls
      }, [typeof switcherIcon === 'function' ? switcherIcon(_extends(_extends(_extends({}, this.$props), this.$props.dataRef), {
        isLeaf: false
      })) : switcherIcon]);
    },
    // Checkbox
    renderCheckbox: function renderCheckbox() {
      var checked = this.checked,
          halfChecked = this.halfChecked,
          disableCheckbox = this.disableCheckbox;
      var prefixCls = this.vcTree.prefixCls;
      var disabled = this.isDisabled();
      var checkable = this.isCheckable();
      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return _createVNode("span", {
        "key": "checkbox",
        "class": classNames("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        "onClick": this.onCheck
      }, [$custom]);
    },
    renderIcon: function renderIcon() {
      var loading = this.loading;
      var prefixCls = this.vcTree.prefixCls;
      return _createVNode("span", {
        "key": "icon",
        "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      }, null);
    },
    // Icon + Title
    renderSelector: function renderSelector() {
      var selected = this.selected,
          loading = this.loading,
          dragNodeHighlight = this.dragNodeHighlight;
      var icon = getComponent(this, 'icon', {}, false);
      var _this$vcTree2 = this.vcTree,
          prefixCls = _this$vcTree2.prefixCls,
          showIcon = _this$vcTree2.showIcon,
          treeIcon = _this$vcTree2.icon,
          draggable = _this$vcTree2.draggable,
          loadData = _this$vcTree2.loadData;
      var disabled = this.isDisabled();
      var title = getComponent(this, 'title', {}, false);
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? _createVNode("span", {
          "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, [typeof currentIcon === 'function' ? currentIcon(_extends(_extends({}, this.$props), this.$props.dataRef)) : currentIcon]) : this.renderIcon();
      } else if (loadData && loading) {
        $icon = this.renderIcon();
      }

      var currentTitle = title;
      var $title = currentTitle ? _createVNode("span", {
        "class": "".concat(prefixCls, "-title")
      }, [typeof currentTitle === 'function' ? currentTitle(_extends(_extends({}, this.$props), this.$props.dataRef)) : currentTitle]) : _createVNode("span", {
        "class": "".concat(prefixCls, "-title")
      }, [defaultTitle]);
      return _createVNode("span", {
        "key": "selector",
        "ref": this.setSelectHandle,
        "title": typeof title === 'string' ? title : '',
        "class": classNames("".concat(wrapClass), "".concat(wrapClass, "-").concat(this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
        "draggable": !disabled && draggable || undefined,
        "aria-grabbed": !disabled && draggable || undefined,
        "onMouseenter": this.onMouseEnter,
        "onMouseleave": this.onMouseLeave,
        "onContextmenu": this.onContextMenu,
        "onClick": this.onSelectorClick,
        "onDblclick": this.onSelectorDoubleClick,
        "onDragstart": draggable ? this.onDragStart : noop
      }, [$icon, $title]);
    },
    // Children list wrapped with `Animation`
    renderChildren: function renderChildren() {
      var expanded = this.expanded,
          pos = this.pos;
      var _this$vcTree3 = this.vcTree,
          prefixCls = _this$vcTree3.prefixCls,
          openTransitionName = _this$vcTree3.openTransitionName,
          openAnimation = _this$vcTree3.openAnimation,
          renderTreeNode = _this$vcTree3.renderTreeNode;
      var animProps = {};

      if (openTransitionName) {
        animProps = getTransitionProps(openTransitionName);
      } else if (_typeof(openAnimation) === 'object') {
        animProps = _extends(_extends(_extends({}, openAnimation), {
          css: false
        }), animProps);
      } // Children TreeNode


      var nodeList = this.getNodeChildren();

      if (nodeList.length === 0) {
        return null;
      }

      var $children;

      if (expanded) {
        $children = _createVNode("ul", {
          "class": classNames("".concat(prefixCls, "-child-tree"), expanded && "".concat(prefixCls, "-child-tree-open")),
          "data-expanded": expanded,
          "role": "group"
        }, [mapChildren(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })]);
      }

      return _createVNode(Transition, animProps, {
        default: function _default() {
          return [$children];
        }
      });
    }
  },
  render: function render() {
    var _ref;

    this.children = getSlot(this);
    var _this$$props = this.$props,
        dragOver = _this$$props.dragOver,
        dragOverGapTop = _this$$props.dragOverGapTop,
        dragOverGapBottom = _this$$props.dragOverGapBottom,
        isLeaf = _this$$props.isLeaf,
        expanded = _this$$props.expanded,
        selected = _this$$props.selected,
        checked = _this$$props.checked,
        halfChecked = _this$$props.halfChecked,
        loading = _this$$props.loading;
    var _this$vcTree4 = this.vcTree,
        prefixCls = _this$vcTree4.prefixCls,
        filterTreeNode = _this$vcTree4.filterTreeNode,
        draggable = _this$vcTree4.draggable;
    var disabled = this.isDisabled();
    var dataOrAriaAttributeProps = getDataAndAria(_extends(_extends({}, this.$props), this.$attrs));
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    return _createVNode("li", _objectSpread({
      "class": (_ref = {}, _defineProperty(_ref, className, className), _defineProperty(_ref, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty(_ref, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), _defineProperty(_ref, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), _defineProperty(_ref, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), _defineProperty(_ref, "".concat(prefixCls, "-treenode-selected"), selected), _defineProperty(_ref, "".concat(prefixCls, "-treenode-loading"), loading), _defineProperty(_ref, 'drag-over', !disabled && dragOver), _defineProperty(_ref, 'drag-over-gap-top', !disabled && dragOverGapTop), _defineProperty(_ref, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), _defineProperty(_ref, 'filter-node', filterTreeNode && filterTreeNode(this)), _ref),
      "style": style,
      "role": "treeitem",
      "onDragenter": draggable ? this.onDragEnter : noop,
      "onDragover": draggable ? this.onDragOver : noop,
      "onDragleave": draggable ? this.onDragLeave : noop,
      "onDrop": draggable ? this.onDrop : noop,
      "onDragend": draggable ? this.onDragEnd : noop
    }, dataOrAriaAttributeProps), [this.renderSwitcher(), this.renderCheckbox(), this.renderSelector(), this.renderChildren()]);
  }
});
TreeNode.isTreeNode = 1;
export default TreeNode;