"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _classNames = _interopRequireDefault(require("../../_util/classNames"));

var _util = require("./util");

var _propsUtil = require("../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _transition = require("../../_util/transition");

function noop() {}

var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var TreeNode = (0, _vue.defineComponent)({
  name: 'TreeNode',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  __ANT_TREE_NODE: true,
  props: (0, _propsUtil.initDefaultProps)({
    eventKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    prefixCls: _vueTypes.default.string,
    // className: PropTypes.string,
    root: _vueTypes.default.object,
    // onSelect: PropTypes.func,
    // By parent
    expanded: _vueTypes.default.looseBool,
    selected: _vueTypes.default.looseBool,
    checked: _vueTypes.default.looseBool,
    loaded: _vueTypes.default.looseBool,
    loading: _vueTypes.default.looseBool,
    halfChecked: _vueTypes.default.looseBool,
    title: _vueTypes.default.any,
    pos: _vueTypes.default.string,
    dragOver: _vueTypes.default.looseBool,
    dragOverGapTop: _vueTypes.default.looseBool,
    dragOverGapBottom: _vueTypes.default.looseBool,
    // By user
    isLeaf: _vueTypes.default.looseBool,
    checkable: _vueTypes.default.looseBool,
    selectable: _vueTypes.default.looseBool,
    disabled: _vueTypes.default.looseBool,
    disableCheckbox: _vueTypes.default.looseBool,
    icon: _vueTypes.default.any,
    dataRef: _vueTypes.default.object,
    switcherIcon: _vueTypes.default.any,
    label: _vueTypes.default.any,
    value: _vueTypes.default.any
  }, {}),
  setup: function setup() {
    return {
      vcTree: (0, _vue.inject)('vcTree', {}),
      vcTreeNode: (0, _vue.inject)('vcTreeNode', {})
    };
  },
  data: function data() {
    this.children = null;
    return {
      dragNodeHighlight: false
    };
  },
  created: function created() {
    (0, _vue.provide)('vcTreeNode', this);
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
      var targetList = (0, _util.getNodeChildren)(originList);

      if (originList.length !== targetList.length) {
        (0, _util.warnOnlyTreeNode)();
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
      var switcherIcon = (0, _propsUtil.getComponent)(this, 'switcherIcon', {}, false) || (0, _propsUtil.getComponent)(this.vcTree, 'switcherIcon', {}, false);

      if (this.isLeaf2()) {
        return (0, _vue.createVNode)("span", {
          "key": "switcher",
          "class": (0, _classNames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, [typeof switcherIcon === 'function' ? switcherIcon((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$props.dataRef), {
          isLeaf: true
        })) : switcherIcon]);
      }

      var switcherCls = (0, _classNames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return (0, _vue.createVNode)("span", {
        "key": "switcher",
        "onClick": this.onExpand,
        "class": switcherCls
      }, [typeof switcherIcon === 'function' ? switcherIcon((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$props.dataRef), {
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
      return (0, _vue.createVNode)("span", {
        "key": "checkbox",
        "class": (0, _classNames.default)("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        "onClick": this.onCheck
      }, [$custom]);
    },
    renderIcon: function renderIcon() {
      var loading = this.loading;
      var prefixCls = this.vcTree.prefixCls;
      return (0, _vue.createVNode)("span", {
        "key": "icon",
        "class": (0, _classNames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      }, null);
    },
    // Icon + Title
    renderSelector: function renderSelector() {
      var selected = this.selected,
          loading = this.loading,
          dragNodeHighlight = this.dragNodeHighlight;
      var icon = (0, _propsUtil.getComponent)(this, 'icon', {}, false);
      var _this$vcTree2 = this.vcTree,
          prefixCls = _this$vcTree2.prefixCls,
          showIcon = _this$vcTree2.showIcon,
          treeIcon = _this$vcTree2.icon,
          draggable = _this$vcTree2.draggable,
          loadData = _this$vcTree2.loadData;
      var disabled = this.isDisabled();
      var title = (0, _propsUtil.getComponent)(this, 'title', {}, false);
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? (0, _vue.createVNode)("span", {
          "class": (0, _classNames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, [typeof currentIcon === 'function' ? currentIcon((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$props.dataRef)) : currentIcon]) : this.renderIcon();
      } else if (loadData && loading) {
        $icon = this.renderIcon();
      }

      var currentTitle = title;
      var $title = currentTitle ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-title")
      }, [typeof currentTitle === 'function' ? currentTitle((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$props.dataRef)) : currentTitle]) : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-title")
      }, [defaultTitle]);
      return (0, _vue.createVNode)("span", {
        "key": "selector",
        "ref": this.setSelectHandle,
        "title": typeof title === 'string' ? title : '',
        "class": (0, _classNames.default)("".concat(wrapClass), "".concat(wrapClass, "-").concat(this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
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
        animProps = (0, _transition.getTransitionProps)(openTransitionName);
      } else if ((0, _typeof2.default)(openAnimation) === 'object') {
        animProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, openAnimation), {
          css: false
        }), animProps);
      } // Children TreeNode


      var nodeList = this.getNodeChildren();

      if (nodeList.length === 0) {
        return null;
      }

      var $children;

      if (expanded) {
        $children = (0, _vue.createVNode)("ul", {
          "class": (0, _classNames.default)("".concat(prefixCls, "-child-tree"), expanded && "".concat(prefixCls, "-child-tree-open")),
          "data-expanded": expanded,
          "role": "group"
        }, [(0, _util.mapChildren)(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })]);
      }

      return (0, _vue.createVNode)(_transition.Transition, animProps, {
        default: function _default() {
          return [$children];
        }
      });
    }
  },
  render: function render() {
    var _ref;

    this.children = (0, _propsUtil.getSlot)(this);
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
    var dataOrAriaAttributeProps = (0, _util.getDataAndAria)((0, _extends2.default)((0, _extends2.default)({}, this.$props), this.$attrs));
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    return (0, _vue.createVNode)("li", (0, _objectSpread2.default)({
      "class": (_ref = {}, (0, _defineProperty2.default)(_ref, className, className), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-disabled"), disabled), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-selected"), selected), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-treenode-loading"), loading), (0, _defineProperty2.default)(_ref, 'drag-over', !disabled && dragOver), (0, _defineProperty2.default)(_ref, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty2.default)(_ref, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty2.default)(_ref, 'filter-node', filterTreeNode && filterTreeNode(this)), _ref),
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
var _default2 = TreeNode;
exports.default = _default2;