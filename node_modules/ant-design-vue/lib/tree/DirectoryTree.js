"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _omit = _interopRequireDefault(require("omit.js"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _FolderOpenOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FolderOpenOutlined"));

var _FolderOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FolderOutlined"));

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileOutlined"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _util = require("../vc-tree/src/util");

var _Tree = _interopRequireWildcard(require("./Tree"));

var _util2 = require("./util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function getIcon(props) {
  var isLeaf = props.isLeaf,
      expanded = props.expanded;

  if (isLeaf) {
    return (0, _vue.createVNode)(_FileOutlined.default, null, null);
  }

  return expanded ? (0, _vue.createVNode)(_FolderOpenOutlined.default, null, null) : (0, _vue.createVNode)(_FolderOutlined.default, null, null);
}

var _default2 = (0, _vue.defineComponent)({
  name: 'ADirectoryTree',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _Tree.TreeProps)()), {
    expandAction: _vueTypes.default.oneOf([false, 'click', 'doubleclick', 'dblclick'])
  }), {
    showIcon: true,
    expandAction: 'click'
  }),
  setup: function setup() {
    return {
      children: null,
      onDebounceExpand: null,
      tree: null,
      lastSelectedKey: '',
      cachedSelectedKeys: [],
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var defaultExpandAll = props.defaultExpandAll,
        defaultExpandParent = props.defaultExpandParent,
        expandedKeys = props.expandedKeys,
        defaultExpandedKeys = props.defaultExpandedKeys;
    var children = (0, _propsUtil.getSlot)(this);

    var _convertTreeToEntitie = (0, _util.convertTreeToEntities)(children),
        keyEntities = _convertTreeToEntitie.keyEntities;

    var state = {}; // Selected keys

    state._selectedKeys = props.selectedKeys || props.defaultSelectedKeys || []; // Expanded keys

    if (defaultExpandAll) {
      if (props.treeData) {
        state._expandedKeys = (0, _util2.getFullKeyListByTreeData)(props.treeData, props.replaceFields);
      } else {
        state._expandedKeys = (0, _util2.getFullKeyList)(children);
      }
    } else if (defaultExpandParent) {
      state._expandedKeys = (0, _util.conductExpandParent)(expandedKeys || defaultExpandedKeys, keyEntities);
    } else {
      state._expandedKeys = expandedKeys || defaultExpandedKeys;
    }

    return (0, _extends2.default)({
      _selectedKeys: [],
      _expandedKeys: []
    }, state);
  },
  watch: {
    expandedKeys: function expandedKeys(val) {
      this.setState({
        _expandedKeys: val
      });
    },
    selectedKeys: function selectedKeys(val) {
      this.setState({
        _selectedKeys: val
      });
    }
  },
  created: function created() {
    this.onDebounceExpand = (0, _debounce.default)(this.expandFolderNode, 200, {
      leading: true
    });
  },
  methods: {
    handleExpand: function handleExpand(expandedKeys, info) {
      this.setUncontrolledState({
        _expandedKeys: expandedKeys
      });
      this.$emit('update:expandedKeys', expandedKeys);
      this.$emit('expand', expandedKeys, info);
      return undefined;
    },
    handleClick: function handleClick(event, node) {
      var expandAction = this.$props.expandAction; // Expand the tree

      if (expandAction === 'click') {
        this.onDebounceExpand(event, node);
      }

      this.$emit('click', event, node);
    },
    handleDoubleClick: function handleDoubleClick(event, node) {
      var expandAction = this.$props.expandAction; // Expand the tree

      if (expandAction === 'dblclick' || expandAction === 'doubleclick') {
        this.onDebounceExpand(event, node);
      }

      this.$emit('doubleclick', event, node);
      this.$emit('dblclick', event, node);
    },
    hanldeSelect: function hanldeSelect(keys, event) {
      var multiple = this.$props.multiple;
      var children = this.children || [];
      var _this$$data$_expanded = this.$data._expandedKeys,
          expandedKeys = _this$$data$_expanded === void 0 ? [] : _this$$data$_expanded;
      var node = event.node,
          nativeEvent = event.nativeEvent;
      var _node$eventKey = node.eventKey,
          eventKey = _node$eventKey === void 0 ? '' : _node$eventKey;
      var newState = {}; // We need wrap this event since some value is not same

      var newEvent = (0, _extends2.default)((0, _extends2.default)({}, event), {
        selected: true
      }); // Windows / Mac single pick

      var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
      var shiftPick = nativeEvent.shiftKey; // Generate new selected keys

      var newSelectedKeys;

      if (multiple && ctrlPick) {
        // Control click
        newSelectedKeys = keys;
        this.lastSelectedKey = eventKey;
        this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = (0, _util2.convertDirectoryKeysToNodes)(children, newSelectedKeys);
      } else if (multiple && shiftPick) {
        // Shift click
        newSelectedKeys = Array.from(new Set([].concat((0, _toConsumableArray2.default)(this.cachedSelectedKeys || []), (0, _toConsumableArray2.default)((0, _util2.calcRangeKeys)(children, expandedKeys, eventKey, this.lastSelectedKey)))));
        newEvent.selectedNodes = (0, _util2.convertDirectoryKeysToNodes)(children, newSelectedKeys);
      } else {
        // Single click
        newSelectedKeys = [eventKey];
        this.lastSelectedKey = eventKey;
        this.cachedSelectedKeys = newSelectedKeys;
        newEvent.selectedNodes = [event.node];
      }

      newState._selectedKeys = newSelectedKeys;
      this.$emit('update:selectedKeys', newSelectedKeys);
      this.$emit('select', newSelectedKeys, newEvent);
      this.setUncontrolledState(newState);
    },
    setTreeRef: function setTreeRef(node) {
      this.tree = node;
    },
    expandFolderNode: function expandFolderNode(event, node) {
      var isLeaf = node.isLeaf;

      if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
        return;
      }

      if (this.tree.tree) {
        // Get internal vc-tree
        var internalTree = this.tree.tree; // Call internal rc-tree expand function
        // https://github.com/ant-design/ant-design/issues/12567

        internalTree.onNodeExpand(event, node);
      }
    },
    setUncontrolledState: function setUncontrolledState(state) {
      var newState = (0, _omit.default)(state, Object.keys((0, _propsUtil.getOptionProps)(this)).map(function (p) {
        return "_".concat(p);
      }));

      if (Object.keys(newState).length) {
        this.setState(newState);
      }
    },
    handleCheck: function handleCheck(checkedObj, eventObj) {
      this.$emit('update:checkedKeys', checkedObj);
      this.$emit('check', checkedObj, eventObj);
    }
  },
  render: function render() {
    var _this = this;

    this.children = (0, _propsUtil.getSlot)(this);

    var _a = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _a.prefixCls,
        props = __rest(_a, ["prefixCls"]);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tree', customizePrefixCls);
    var _this$$data = this.$data,
        expandedKeys = _this$$data._expandedKeys,
        selectedKeys = _this$$data._selectedKeys;

    var _b = this.$attrs,
        className = _b.class,
        restAttrs = __rest(_b, ["class"]);

    var connectClassName = (0, _classNames.default)("".concat(prefixCls, "-directory"), className);
    var treeProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({
      icon: getIcon
    }, restAttrs), (0, _omit.default)(props, ['onUpdate:selectedKeys', 'onUpdate:checkedKeys', 'onUpdate:expandedKeys'])), {
      prefixCls: prefixCls,
      expandedKeys: expandedKeys,
      selectedKeys: selectedKeys,
      switcherIcon: (0, _propsUtil.getComponent)(this, 'switcherIcon'),
      ref: this.setTreeRef,
      class: connectClassName,
      onSelect: this.hanldeSelect,
      onClick: this.handleClick,
      onDblclick: this.handleDoubleClick,
      onExpand: this.handleExpand,
      onCheck: this.handleCheck
    });
    return (0, _vue.createVNode)(_Tree.default, treeProps, (0, _objectSpread2.default)({
      default: function _default() {
        return [_this.children];
      }
    }, (0, _omit.default)(this.$slots, ['default'])));
  }
});

exports.default = _default2;