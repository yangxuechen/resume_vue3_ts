import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { inject } from 'vue';
import warning from 'warning';
import PropTypes from '../../../_util/vue-types';
import Tree from '../../../vc-tree';
import BaseMixin from '../../../_util/BaseMixin';
import { createRef } from '../util'; // export const popupContextTypes = {
//   onPopupKeyDown: PropTypes.func.isRequired,
//   onTreeNodeSelect: PropTypes.func.isRequired,
//   onTreeNodeCheck: PropTypes.func.isRequired,
// }

function getDerivedState(nextProps, prevState) {
  var _ref = prevState || {},
      _ref$_prevProps = _ref._prevProps,
      prevProps = _ref$_prevProps === void 0 ? {} : _ref$_prevProps,
      loadedKeys = _ref._loadedKeys,
      expandedKeyList = _ref._expandedKeyList,
      cachedExpandedKeyList = _ref._cachedExpandedKeyList;

  var valueList = nextProps.valueList,
      valueEntities = nextProps.valueEntities,
      keyEntities = nextProps.keyEntities,
      treeExpandedKeys = nextProps.treeExpandedKeys,
      filteredTreeNodes = nextProps.filteredTreeNodes,
      upperSearchValue = nextProps.upperSearchValue;
  var newState = {
    _prevProps: _extends({}, nextProps)
  }; // Check value update

  if (valueList !== prevProps.valueList) {
    newState._keyList = valueList.map(function (_ref2) {
      var value = _ref2.value;
      return valueEntities[value];
    }).filter(function (entity) {
      return entity;
    }).map(function (_ref3) {
      var key = _ref3.key;
      return key;
    });
  } // Show all when tree is in filter mode


  if (!treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
    newState._expandedKeyList = _toConsumableArray(keyEntities.keys());
  } // Cache `expandedKeyList` when filter set


  if (upperSearchValue && !prevProps.upperSearchValue) {
    newState._cachedExpandedKeyList = expandedKeyList;
  } else if (!upperSearchValue && prevProps.upperSearchValue && !treeExpandedKeys) {
    newState._expandedKeyList = cachedExpandedKeyList || [];
    newState._cachedExpandedKeyList = [];
  } // Use expandedKeys if provided


  if (prevProps.treeExpandedKeys !== treeExpandedKeys) {
    newState._expandedKeyList = treeExpandedKeys;
  } // Clean loadedKeys if key not exist in keyEntities anymore


  if (nextProps.loadData) {
    newState._loadedKeys = loadedKeys.filter(function (key) {
      return keyEntities.has(key);
    });
  }

  return newState;
}

var BasePopup = {
  mixins: [BaseMixin],
  inheritAttrs: false,
  name: 'BasePopup',
  props: {
    prefixCls: PropTypes.string,
    upperSearchValue: PropTypes.string,
    valueList: PropTypes.array,
    searchHalfCheckedKeys: PropTypes.array,
    valueEntities: PropTypes.object,
    keyEntities: Map,
    treeIcon: PropTypes.looseBool,
    treeLine: PropTypes.looseBool,
    treeNodeFilterProp: PropTypes.string,
    treeCheckable: PropTypes.any,
    treeCheckStrictly: PropTypes.looseBool,
    treeDefaultExpandAll: PropTypes.looseBool,
    treeDefaultExpandedKeys: PropTypes.array,
    treeExpandedKeys: PropTypes.array,
    loadData: PropTypes.func,
    multiple: PropTypes.looseBool,
    // onTreeExpand: PropTypes.func,
    searchValue: PropTypes.string,
    treeNodes: PropTypes.any,
    filteredTreeNodes: PropTypes.any,
    notFoundContent: PropTypes.any,
    ariaId: PropTypes.string,
    switcherIcon: PropTypes.any,
    // HOC
    renderSearch: PropTypes.func,
    // onTreeExpanded: PropTypes.func,
    __propsSymbol__: PropTypes.any
  },
  setup: function setup() {
    return {
      vcTreeSelect: inject('vcTreeSelect', {})
    };
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var state = getDerivedState(this.$props, this.$data);
      this.setState(state);
    }
  },
  data: function data() {
    this.treeRef = createRef();
    warning(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    var _this$$props = this.$props,
        treeDefaultExpandAll = _this$$props.treeDefaultExpandAll,
        treeDefaultExpandedKeys = _this$$props.treeDefaultExpandedKeys,
        keyEntities = _this$$props.keyEntities; // TODO: make `expandedKeyList` control

    var expandedKeyList = treeDefaultExpandedKeys;

    if (treeDefaultExpandAll) {
      expandedKeyList = _toConsumableArray(keyEntities.keys());
    }

    var state = {
      _keyList: [],
      _expandedKeyList: expandedKeyList,
      // Cache `expandedKeyList` when tree is in filter. This is used in `getDerivedState`
      _cachedExpandedKeyList: [],
      _loadedKeys: [],
      _prevProps: {}
    };
    return _extends(_extends({}, state), getDerivedState(this.$props, state));
  },
  methods: {
    onTreeExpand: function onTreeExpand(expandedKeyList) {
      var _this = this;

      var treeExpandedKeys = this.$props.treeExpandedKeys; // Set uncontrolled state

      if (!treeExpandedKeys) {
        this.setState({
          _expandedKeyList: expandedKeyList
        }, function () {
          _this.__emit('treeExpanded');
        });
      }

      this.__emit('treeExpand', expandedKeyList);
    },
    onLoad: function onLoad(loadedKeys) {
      this.setState({
        _loadedKeys: loadedKeys
      });
    },
    getTree: function getTree() {
      return this.treeRef.current;
    },

    /**
     * Not pass `loadData` when searching. To avoid loop ajax call makes browser crash.
     */
    getLoadData: function getLoadData() {
      var _this$$props2 = this.$props,
          loadData = _this$$props2.loadData,
          upperSearchValue = _this$$props2.upperSearchValue;
      if (upperSearchValue) return null;
      return loadData;
    },

    /**
     * This method pass to Tree component which is used for add filtered class
     * in TreeNode > li
     */
    filterTreeNode: function filterTreeNode(treeNode) {
      var _this$$props3 = this.$props,
          upperSearchValue = _this$$props3.upperSearchValue,
          treeNodeFilterProp = _this$$props3.treeNodeFilterProp;
      var filterVal = treeNode[treeNodeFilterProp];

      if (typeof filterVal === 'string') {
        return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
      }

      return false;
    },
    renderNotFound: function renderNotFound() {
      var _this$$props4 = this.$props,
          prefixCls = _this$$props4.prefixCls,
          notFoundContent = _this$$props4.notFoundContent;
      return _createVNode("span", {
        "class": "".concat(prefixCls, "-not-found")
      }, [notFoundContent]);
    }
  },
  render: function render() {
    var _this$$data = this.$data,
        keyList = _this$$data._keyList,
        expandedKeyList = _this$$data._expandedKeyList,
        loadedKeys = _this$$data._loadedKeys;
    var _this$$props5 = this.$props,
        prefixCls = _this$$props5.prefixCls,
        treeNodes = _this$$props5.treeNodes,
        filteredTreeNodes = _this$$props5.filteredTreeNodes,
        treeIcon = _this$$props5.treeIcon,
        treeLine = _this$$props5.treeLine,
        treeCheckable = _this$$props5.treeCheckable,
        treeCheckStrictly = _this$$props5.treeCheckStrictly,
        multiple = _this$$props5.multiple,
        ariaId = _this$$props5.ariaId,
        renderSearch = _this$$props5.renderSearch,
        switcherIcon = _this$$props5.switcherIcon,
        searchHalfCheckedKeys = _this$$props5.searchHalfCheckedKeys;
    var _this$vcTreeSelect = this.vcTreeSelect,
        onPopupKeyDown = _this$vcTreeSelect.onPopupKeyDown,
        onTreeNodeSelect = _this$vcTreeSelect.onTreeNodeSelect,
        onTreeNodeCheck = _this$vcTreeSelect.onTreeNodeCheck;
    var loadData = this.getLoadData();
    var treeProps = {};

    if (treeCheckable) {
      treeProps.checkedKeys = keyList;
    } else {
      treeProps.selectedKeys = keyList;
    }

    var $notFound;
    var $treeNodes;

    if (filteredTreeNodes) {
      if (filteredTreeNodes.length) {
        treeProps.checkStrictly = true;
        $treeNodes = filteredTreeNodes; // Fill halfCheckedKeys

        if (treeCheckable && !treeCheckStrictly) {
          treeProps.checkedKeys = {
            checked: keyList,
            halfChecked: searchHalfCheckedKeys
          };
        }
      } else {
        $notFound = this.renderNotFound();
      }
    } else if (!treeNodes || !treeNodes.length) {
      $notFound = this.renderNotFound();
    } else {
      $treeNodes = treeNodes;
    }

    var $tree;

    if ($notFound) {
      $tree = $notFound;
    } else {
      var treeAllProps = _extends(_extends({
        prefixCls: "".concat(prefixCls, "-tree"),
        showIcon: treeIcon,
        showLine: treeLine,
        selectable: !treeCheckable,
        checkable: treeCheckable,
        checkStrictly: treeCheckStrictly,
        multiple: multiple,
        loadData: loadData,
        loadedKeys: loadedKeys,
        expandedKeys: expandedKeyList,
        filterTreeNode: this.filterTreeNode,
        switcherIcon: switcherIcon
      }, treeProps), {
        children: $treeNodes,
        onSelect: onTreeNodeSelect,
        onCheck: onTreeNodeCheck,
        onExpand: this.onTreeExpand,
        onLoad: this.onLoad
      });

      $tree = _createVNode(Tree, _objectSpread(_objectSpread({}, treeAllProps), {}, {
        "ref": this.treeRef,
        "__propsSymbol__": []
      }), null);
    }

    return _createVNode("div", {
      "role": "listbox",
      "id": ariaId,
      "onKeydown": onPopupKeyDown,
      "tabindex": -1
    }, [renderSearch ? renderSearch() : null, $tree]);
  }
};
export default BasePopup;