import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../../_util/vue-types';
import classNames from '../../_util/classNames';
import warning from 'warning';
import { hasProp, initDefaultProps, getOptionProps, getSlot } from '../../_util/props-util';
import { cloneElement } from '../../_util/vnode';
import BaseMixin from '../../_util/BaseMixin';
import { convertTreeToEntities, convertDataToTree, getPosition, getDragNodesKeys, parseCheckedKeys, conductExpandParent, calcSelectedKeys, calcDropPosition, arrAdd, arrDel, posToArr, mapChildren, conductCheck, warnOnlyTreeNode, getDataAndAria } from './util';
import { defineComponent } from 'vue';
/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */

function getWatch() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var watch = {};
  keys.forEach(function (k) {
    watch[k] = {
      handler: function handler() {
        this.needSyncKeys[k] = true;
      },
      flush: 'sync'
    };
  });
  return watch;
}

var Tree = defineComponent({
  name: 'Tree',
  mixins: [BaseMixin],
  provide: function provide() {
    return {
      vcTree: this
    };
  },
  inheritAttrs: false,
  props: initDefaultProps({
    prefixCls: PropTypes.string,
    tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.any,
    treeData: PropTypes.array,
    showLine: PropTypes.looseBool,
    showIcon: PropTypes.looseBool,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    focusable: PropTypes.looseBool,
    selectable: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    multiple: PropTypes.looseBool,
    checkable: withUndefined(PropTypes.oneOfType([PropTypes.object, PropTypes.looseBool])),
    checkStrictly: PropTypes.looseBool,
    draggable: PropTypes.looseBool,
    defaultExpandParent: PropTypes.looseBool,
    autoExpandParent: PropTypes.looseBool,
    defaultExpandAll: PropTypes.looseBool,
    defaultExpandedKeys: PropTypes.array,
    expandedKeys: PropTypes.array,
    defaultCheckedKeys: PropTypes.array,
    checkedKeys: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    defaultSelectedKeys: PropTypes.array,
    selectedKeys: PropTypes.array,
    // onClick: PropTypes.func,
    // onDoubleClick: PropTypes.func,
    // onExpand: PropTypes.func,
    // onCheck: PropTypes.func,
    // onSelect: PropTypes.func,
    loadData: PropTypes.func,
    loadedKeys: PropTypes.array,
    // onMouseEnter: PropTypes.func,
    // onMouseLeave: PropTypes.func,
    // onRightClick: PropTypes.func,
    // onDragStart: PropTypes.func,
    // onDragEnter: PropTypes.func,
    // onDragOver: PropTypes.func,
    // onDragLeave: PropTypes.func,
    // onDragEnd: PropTypes.func,
    // onDrop: PropTypes.func,
    filterTreeNode: PropTypes.func,
    openTransitionName: PropTypes.string,
    openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    switcherIcon: PropTypes.any,
    __propsSymbol__: PropTypes.any
  }, {
    prefixCls: 'rc-tree',
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: []
  }),
  data: function data() {
    warning(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    warning(this.$props.children, 'please use children prop replace slots.default');
    this.needSyncKeys = {};
    this.domTreeNodes = {};
    var state = {
      _posEntities: new Map(),
      _keyEntities: new Map(),
      _expandedKeys: [],
      _selectedKeys: [],
      _checkedKeys: [],
      _halfCheckedKeys: [],
      _loadedKeys: [],
      _loadingKeys: [],
      _treeNode: [],
      _prevProps: null,
      _dragOverNodeKey: '',
      _dropPosition: null,
      _dragNodesKeys: []
    };
    return _extends(_extends({}, state), this.getDerivedState(getOptionProps(this), state));
  },
  watch: _extends(_extends({}, getWatch(['treeData', 'children', 'expandedKeys', 'autoExpandParent', 'selectedKeys', 'checkedKeys', 'loadedKeys'])), {
    __propsSymbol__: function __propsSymbol__() {
      this.setState(this.getDerivedState(getOptionProps(this), this.$data));
      this.needSyncKeys = {};
    }
  }),
  methods: {
    getDerivedState: function getDerivedState(props, prevState) {
      var _prevProps = prevState._prevProps;
      var newState = {
        _prevProps: _extends({}, props)
      };
      var self = this;

      function needSync(name) {
        return !_prevProps && name in props || _prevProps && self.needSyncKeys[name];
      } // ================== Tree Node ==================


      var treeNode = null; // Check if `treeData` or `children` changed and save into the state.

      if (needSync('treeData')) {
        treeNode = convertDataToTree(props.treeData);
      } else if (needSync('children')) {
        treeNode = props.children;
      } // Tree support filter function which will break the tree structure in the vdm.
      // We cache the treeNodes in state so that we can return the treeNode in event trigger.


      if (treeNode) {
        newState._treeNode = treeNode; // Calculate the entities data for quick match

        var entitiesMap = convertTreeToEntities(treeNode);
        newState._keyEntities = entitiesMap.keyEntities;
      }

      var keyEntities = newState._keyEntities || prevState._keyEntities; // ================ expandedKeys =================

      if (needSync('expandedKeys') || _prevProps && needSync('autoExpandParent')) {
        newState._expandedKeys = props.autoExpandParent || !_prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!_prevProps && props.defaultExpandAll) {
        newState._expandedKeys = _toConsumableArray(keyEntities.keys());
      } else if (!_prevProps && props.defaultExpandedKeys) {
        newState._expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      } // ================ selectedKeys =================


      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState._selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!_prevProps && props.defaultSelectedKeys) {
          newState._selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      } // ================= checkedKeys =================


      if (props.checkable) {
        var checkedKeyEntity;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!_prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeNode) {
          // If treeNode changed, we also need check it
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState._checkedKeys,
            halfCheckedKeys: prevState._halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;

          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState._checkedKeys = checkedKeys;
          newState._halfCheckedKeys = halfCheckedKeys;
        }
      } // ================= loadedKeys ==================


      if (needSync('loadedKeys')) {
        newState._loadedKeys = props.loadedKeys;
      }

      return newState;
    },
    onNodeDragStart: function onNodeDragStart(event, node) {
      var _expandedKeys = this.$data._expandedKeys;
      var eventKey = node.eventKey;
      var children = getSlot(node);
      this.dragNode = node;
      this.setState({
        _dragNodesKeys: getDragNodesKeys(typeof children === 'function' ? children() : children, node),
        _expandedKeys: arrDel(_expandedKeys, eventKey)
      });

      this.__emit('dragstart', {
        event: event,
        node: node
      });
    },

    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    onNodeDragEnter: function onNodeDragEnter(event, node) {
      var _this = this;

      var expandedKeys = this.$data._expandedKeys;
      var pos = node.pos,
          eventKey = node.eventKey;
      if (!this.dragNode || !node.selectHandle) return;
      var dropPosition = calcDropPosition(event, node); // Skip if drag node is self

      if (this.dragNode.eventKey === eventKey && dropPosition === 0) {
        this.setState({
          _dragOverNodeKey: '',
          _dropPosition: null
        });
        return;
      } // Ref: https://github.com/react-component/tree/issues/132
      // Add timeout to let onDragLevel fire before onDragEnter,
      // so that we can clean drag props for onDragLeave node.
      // Macro task for this:
      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script


      setTimeout(function () {
        // Update drag over node
        _this.setState({
          _dragOverNodeKey: eventKey,
          _dropPosition: dropPosition
        }); // Side effect for delay drag


        if (!_this.delayedDragEnterLogic) {
          _this.delayedDragEnterLogic = {};
        }

        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
          clearTimeout(_this.delayedDragEnterLogic[key]);
        });
        _this.delayedDragEnterLogic[pos] = setTimeout(function () {
          var newExpandedKeys = arrAdd(expandedKeys, eventKey);

          if (!hasProp(_this, 'expandedKeys')) {
            _this.setState({
              _expandedKeys: newExpandedKeys
            });
          }

          _this.__emit('dragenter', {
            event: event,
            node: node,
            expandedKeys: newExpandedKeys
          });
        }, 400);
      }, 0);
    },
    onNodeDragOver: function onNodeDragOver(event, node) {
      var eventKey = node.eventKey;
      var _this$$data = this.$data,
          _dragOverNodeKey = _this$$data._dragOverNodeKey,
          _dropPosition = _this$$data._dropPosition; // Update drag position

      if (this.dragNode && eventKey === _dragOverNodeKey && node.selectHandle) {
        var dropPosition = calcDropPosition(event, node);
        if (dropPosition === _dropPosition) return;
        this.setState({
          _dropPosition: dropPosition
        });
      }

      this.__emit('dragover', {
        event: event,
        node: node
      });
    },
    onNodeDragLeave: function onNodeDragLeave(event, node) {
      this.setState({
        _dragOverNodeKey: ''
      });

      this.__emit('dragleave', {
        event: event,
        node: node
      });
    },
    onNodeDragEnd: function onNodeDragEnd(event, node) {
      this.setState({
        _dragOverNodeKey: ''
      });

      this.__emit('dragend', {
        event: event,
        node: node
      });

      this.dragNode = null;
    },
    onNodeDrop: function onNodeDrop(event, node) {
      var _this$$data2 = this.$data,
          _this$$data2$_dragNod = _this$$data2._dragNodesKeys,
          _dragNodesKeys = _this$$data2$_dragNod === void 0 ? [] : _this$$data2$_dragNod,
          _dropPosition = _this$$data2._dropPosition;

      var eventKey = node.eventKey,
          pos = node.pos;
      this.setState({
        _dragOverNodeKey: ''
      });

      if (_dragNodesKeys.indexOf(eventKey) !== -1) {
        warning(false, "Can not drop to dragNode(include it's children node)");
        return;
      }

      var posArr = posToArr(pos);
      var dropResult = {
        event: event,
        node: node,
        dragNode: this.dragNode,
        dragNodesKeys: _dragNodesKeys.slice(),
        dropPosition: _dropPosition + Number(posArr[posArr.length - 1]),
        dropToGap: false
      };

      if (_dropPosition !== 0) {
        dropResult.dropToGap = true;
      }

      this.__emit('drop', dropResult);

      this.dragNode = null;
    },
    onNodeClick: function onNodeClick(e, treeNode) {
      this.__emit('click', e, treeNode);
    },
    onNodeDoubleClick: function onNodeDoubleClick(e, treeNode) {
      this.__emit('dblclick', e, treeNode);
    },
    onNodeSelect: function onNodeSelect(e, treeNode) {
      var selectedKeys = this.$data._selectedKeys;
      var keyEntities = this.$data._keyEntities;
      var multiple = this.$props.multiple;

      var _getOptionProps = getOptionProps(treeNode),
          selected = _getOptionProps.selected,
          eventKey = _getOptionProps.eventKey;

      var targetSelected = !selected; // Update selected keys

      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, eventKey);
      } else if (!multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys = arrAdd(selectedKeys, eventKey);
      } // [Legacy] Not found related usage in doc or upper libs


      var selectedNodes = selectedKeys.map(function (key) {
        var entity = keyEntities.get(key);
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });
      this.setUncontrolledState({
        _selectedKeys: selectedKeys
      });
      var eventObj = {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e
      };

      this.__emit('select', selectedKeys, eventObj);
    },
    onNodeCheck: function onNodeCheck(e, treeNode, checked) {
      var _this$$data3 = this.$data,
          keyEntities = _this$$data3._keyEntities,
          oriCheckedKeys = _this$$data3._checkedKeys,
          oriHalfCheckedKeys = _this$$data3._halfCheckedKeys;
      var checkStrictly = this.$props.checkStrictly;

      var _getOptionProps2 = getOptionProps(treeNode),
          eventKey = _getOptionProps2.eventKey; // Prepare trigger arguments


      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e
      };

      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, eventKey) : arrDel(oriCheckedKeys, eventKey);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, eventKey);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (key) {
          return keyEntities.get(key);
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });
        this.setUncontrolledState({
          _checkedKeys: checkedKeys
        });
      } else {
        var _conductCheck = conductCheck([eventKey], checked, keyEntities, {
          checkedKeys: oriCheckedKeys,
          halfCheckedKeys: oriHalfCheckedKeys
        }),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        checkedObj = _checkedKeys; // [Legacy] This is used for `rc-tree-select`

        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (key) {
          var entity = keyEntities.get(key);
          if (!entity) return;
          var node = entity.node,
              pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });

        this.setUncontrolledState({
          _checkedKeys: _checkedKeys,
          _halfCheckedKeys: _halfCheckedKeys
        });
      }

      this.__emit('check', checkedObj, eventObj);
    },
    onNodeLoad: function onNodeLoad(treeNode) {
      var _this2 = this;

      return new Promise(function (resolve) {
        // We need to get the latest state of loading/loaded keys
        _this2.setState(function (_ref) {
          var _ref$_loadedKeys = _ref._loadedKeys,
              loadedKeys = _ref$_loadedKeys === void 0 ? [] : _ref$_loadedKeys,
              _ref$_loadingKeys = _ref._loadingKeys,
              loadingKeys = _ref$_loadingKeys === void 0 ? [] : _ref$_loadingKeys;
          var loadData = _this2.$props.loadData;

          var _getOptionProps3 = getOptionProps(treeNode),
              eventKey = _getOptionProps3.eventKey;

          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
            return {};
          } // Process load data


          var promise = loadData(treeNode);
          promise.then(function () {
            var _this2$$data = _this2.$data,
                currentLoadedKeys = _this2$$data._loadedKeys,
                currentLoadingKeys = _this2$$data._loadingKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, eventKey);
            var newLoadingKeys = arrDel(currentLoadingKeys, eventKey); // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464

            _this2.__emit('load', newLoadedKeys, {
              event: 'load',
              node: treeNode
            });

            _this2.setUncontrolledState({
              _loadedKeys: newLoadedKeys
            });

            _this2.setState({
              _loadingKeys: newLoadingKeys
            });

            resolve();
          });
          return {
            _loadingKeys: arrAdd(loadingKeys, eventKey)
          };
        });
      });
    },
    onNodeExpand: function onNodeExpand(e, treeNode) {
      var _this3 = this;

      var expandedKeys = this.$data._expandedKeys;
      var loadData = this.$props.loadData;

      var _getOptionProps4 = getOptionProps(treeNode),
          eventKey = _getOptionProps4.eventKey,
          expanded = _getOptionProps4.expanded; // Update selected keys


      var index = expandedKeys.indexOf(eventKey);
      var targetExpanded = !expanded;
      warning(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, eventKey);
      } else {
        expandedKeys = arrDel(expandedKeys, eventKey);
      }

      this.setUncontrolledState({
        _expandedKeys: expandedKeys
      });

      this.__emit('expand', expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e
      }); // Async Load data


      if (targetExpanded && loadData) {
        var loadPromise = this.onNodeLoad(treeNode);
        return loadPromise ? loadPromise.then(function () {
          // [Legacy] Refresh logic
          _this3.setUncontrolledState({
            _expandedKeys: expandedKeys
          });
        }) : null;
      }

      return null;
    },
    onNodeMouseEnter: function onNodeMouseEnter(event, node) {
      this.__emit('mouseenter', {
        event: event,
        node: node
      });
    },
    onNodeMouseLeave: function onNodeMouseLeave(event, node) {
      this.__emit('mouseleave', {
        event: event,
        node: node
      });
    },
    onNodeContextMenu: function onNodeContextMenu(event, node) {
      event.preventDefault();

      this.__emit('rightClick', {
        event: event,
        node: node
      });
    },

    /**
     * Only update the value which is not in props
     */
    setUncontrolledState: function setUncontrolledState(state) {
      var needSync = false;
      var newState = {};
      var props = getOptionProps(this);
      Object.keys(state).forEach(function (name) {
        if (name.replace('_', '') in props) return;
        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        this.setState(newState);
      }
    },
    registerTreeNode: function registerTreeNode(key, node) {
      if (node) {
        this.domTreeNodes[key] = node;
      } else {
        delete this.domTreeNodes[key];
      }
    },
    isKeyChecked: function isKeyChecked(key) {
      var _this$$data$_checkedK = this.$data._checkedKeys,
          checkedKeys = _this$$data$_checkedK === void 0 ? [] : _this$$data$_checkedK;
      return checkedKeys.indexOf(key) !== -1;
    },

    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */
    renderTreeNode: function renderTreeNode(child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _this$$data4 = this.$data,
          keyEntities = _this$$data4._keyEntities,
          _this$$data4$_expande = _this$$data4._expandedKeys,
          expandedKeys = _this$$data4$_expande === void 0 ? [] : _this$$data4$_expande,
          _this$$data4$_selecte = _this$$data4._selectedKeys,
          selectedKeys = _this$$data4$_selecte === void 0 ? [] : _this$$data4$_selecte,
          _this$$data4$_halfChe = _this$$data4._halfCheckedKeys,
          halfCheckedKeys = _this$$data4$_halfChe === void 0 ? [] : _this$$data4$_halfChe,
          _this$$data4$_loadedK = _this$$data4._loadedKeys,
          loadedKeys = _this$$data4$_loadedK === void 0 ? [] : _this$$data4$_loadedK,
          _this$$data4$_loading = _this$$data4._loadingKeys,
          loadingKeys = _this$$data4$_loading === void 0 ? [] : _this$$data4$_loading,
          dragOverNodeKey = _this$$data4._dragOverNodeKey,
          dropPosition = _this$$data4._dropPosition;
      var pos = getPosition(level, index);
      var key = child.key;

      if (!key && (key === undefined || key === null)) {
        key = pos;
      }

      if (!keyEntities.get(key)) {
        warnOnlyTreeNode();
        return null;
      }

      return cloneElement(child, {
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: this.isKeyChecked(key),
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: pos,
        // [Legacy] Drag props
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1,
        key: key
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var treeNode = this.$data._treeNode;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        focusable = _this$$props.focusable,
        showLine = _this$$props.showLine,
        _this$$props$tabindex = _this$$props.tabindex,
        tabindex = _this$$props$tabindex === void 0 ? 0 : _this$$props$tabindex;
    var domProps = getDataAndAria(_extends(_extends({}, this.$props), this.$attrs));
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    return _createVNode("ul", _objectSpread(_objectSpread({}, domProps), {}, {
      "class": classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-show-line"), showLine)),
      "style": style,
      "role": "tree",
      "unselectable": "on",
      "tabindex": focusable ? tabindex : null
    }), [mapChildren(treeNode, function (node, index) {
      return _this4.renderTreeNode(node, index);
    })]);
  }
});
export { Tree };
export default Tree;