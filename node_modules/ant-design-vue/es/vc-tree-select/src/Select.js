import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

/**
 * ARIA: https://www.w3.org/TR/wai-aria/#combobox
 * Sample 1: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/combobox/aria1.1pattern/listbox-combo.html
 * Sample 2: https://www.w3.org/blog/wai-components-gallery/widget/combobox-with-aria-autocompleteinline/
 *
 * Tab logic:
 * Popup is close
 * 1. Focus input (mark component as focused)
 * 2. Press enter to show the popup
 * 3. If popup has input, focus it
 *
 * Popup is open
 * 1. press tab to close the popup
 * 2. Focus back to the selection input box
 * 3. Let the native tab going on
 *
 * TreeSelect use 2 design type.
 * In single mode, we should focus on the `span`
 * In multiple mode, we should focus on the `input`
 */
import { defineComponent, provide } from 'vue';
import shallowEqual from '../../_util/shallowequal';
import scrollIntoView from 'dom-scroll-into-view';
import warning from 'warning';
import PropTypes, { withUndefined } from '../../_util/vue-types';
import KeyCode from '../../_util/KeyCode';
import SelectTrigger from './SelectTrigger';
import SingleSelector from './Selector/SingleSelector';
import MultipleSelector from './Selector/MultipleSelector';
import { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from './strategies';
import BaseMixin from '../../_util/BaseMixin';
import { createRef, generateAriaId, formatInternalValue, formatSelectorValue, parseSimpleTreeData, convertDataToTree, convertTreeToEntities, conductCheck, getHalfCheckedKeys, flatToHierarchy, isPosRelated, isLabelInValue as _isLabelInValue, getFilterTree, cleanEntity, findPopupContainer } from './util';
import SelectNode from './SelectNode';
import { initDefaultProps, getOptionProps, getPropsData, findDOMNode } from '../../_util/props-util';
import BasePopup from './Popup/MultiplePopup';

function getWatch() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var watch = {};
  keys.forEach(function (k) {
    watch[k] = function () {
      this.needSyncKeys[k] = true;
    };
  });
  return watch;
}

var Select = defineComponent({
  name: 'Select',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps({
    prefixCls: PropTypes.string,
    prefixAria: PropTypes.string,
    multiple: PropTypes.looseBool,
    showArrow: PropTypes.looseBool,
    open: PropTypes.looseBool,
    value: PropTypes.any,
    autofocus: PropTypes.looseBool,
    defaultOpen: PropTypes.looseBool,
    defaultValue: PropTypes.any,
    showSearch: PropTypes.looseBool,
    placeholder: PropTypes.any,
    inputValue: PropTypes.string,
    searchValue: PropTypes.string,
    autoClearSearchValue: PropTypes.looseBool,
    searchPlaceholder: PropTypes.any,
    disabled: PropTypes.looseBool,
    children: PropTypes.any,
    labelInValue: PropTypes.looseBool,
    maxTagCount: PropTypes.number,
    maxTagPlaceholder: PropTypes.any,
    maxTagTextLength: PropTypes.number,
    showCheckedStrategy: PropTypes.oneOf([SHOW_ALL, SHOW_PARENT, SHOW_CHILD]),
    dropdownClassName: PropTypes.string,
    dropdownStyle: PropTypes.object,
    dropdownVisibleChange: PropTypes.func,
    dropdownMatchSelectWidth: PropTypes.looseBool,
    treeData: PropTypes.array,
    treeDataSimpleMode: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
    treeNodeFilterProp: PropTypes.string,
    treeNodeLabelProp: PropTypes.string,
    treeCheckable: PropTypes.any,
    // treeCheckable: PropTypes.any,
    treeCheckStrictly: PropTypes.looseBool,
    treeIcon: PropTypes.looseBool,
    treeLine: PropTypes.looseBool,
    treeDefaultExpandAll: PropTypes.looseBool,
    treeDefaultExpandedKeys: PropTypes.array,
    treeExpandedKeys: PropTypes.array,
    loadData: PropTypes.func,
    filterTreeNode: withUndefined(PropTypes.oneOfType([PropTypes.func, PropTypes.looseBool])),
    notFoundContent: PropTypes.any,
    getPopupContainer: PropTypes.func,
    // onSearch: PropTypes.func,
    // onSelect: PropTypes.func,
    // onDeselect: PropTypes.func,
    // onChange: PropTypes.func,
    // onDropdownVisibleChange: PropTypes.func,
    // onTreeExpand: PropTypes.func,
    allowClear: PropTypes.looseBool,
    transitionName: PropTypes.string,
    animation: PropTypes.string,
    choiceTransitionName: PropTypes.string,
    inputIcon: PropTypes.any,
    clearIcon: PropTypes.any,
    removeIcon: PropTypes.any,
    switcherIcon: PropTypes.any,
    __propsSymbol__: PropTypes.any
  }, {
    prefixCls: 'rc-tree-select',
    prefixAria: 'rc-tree-select',
    showArrow: true,
    showSearch: true,
    autoClearSearchValue: true,
    showCheckedStrategy: SHOW_CHILD,
    // dropdownMatchSelectWidth change the origin design, set to false now
    // ref: https://github.com/react-component/select/blob/4cad95e098a341a09de239ad6981067188842020/src/Select.jsx#L344
    // ref: https://github.com/react-component/select/pull/71
    treeNodeFilterProp: 'value',
    treeNodeLabelProp: 'title',
    treeIcon: false,
    notFoundContent: 'Not Found',
    dropdownStyle: {},
    dropdownVisibleChange: function dropdownVisibleChange() {
      return true;
    }
  }),
  data: function data() {
    warning(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    var _this$$props = this.$props,
        prefixAria = _this$$props.prefixAria,
        defaultOpen = _this$$props.defaultOpen,
        open = _this$$props.open;
    this.needSyncKeys = {};
    this.selectorRef = createRef();
    this.selectTriggerRef = createRef(); // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves

    this.ariaId = generateAriaId("".concat(prefixAria, "-list"));
    var state = {
      _open: open || defaultOpen,
      _valueList: [],
      _searchHalfCheckedKeys: [],
      _missValueList: [],
      _selectorValueList: [],
      _valueEntities: {},
      _posEntities: new Map(),
      _keyEntities: new Map(),
      _searchValue: '',
      _prevProps: {},
      _init: true,
      _focused: undefined,
      _treeNodes: undefined,
      _filteredTreeNodes: undefined
    };
    var newState = this.getDerivedState(this.$props, state);
    return _extends(_extends({}, state), newState);
  },
  watch: _extends(_extends({}, getWatch(['treeData', 'defaultValue', 'value'])), {
    __propsSymbol__: function __propsSymbol__() {
      var state = this.getDerivedState(this.$props, this.$data);
      this.setState(state);
      this.needSyncKeys = {};
    },
    _valueList: function _valueList() {
      var _this = this;

      this.$nextTick(function () {
        _this.forcePopupAlign();
      });
    },
    _open: function _open(open) {
      var _this2 = this;

      this.$nextTick(function () {
        if (!open && !_this2.isSearchValueControlled()) {
          _this2.setState({
            _searchValue: ''
          });
        }

        if (open && !_this2.$data._searchValue) {
          _this2.setState({
            _filteredTreeNodes: null
          });
        }

        var prefixCls = _this2.$props.prefixCls;
        var _this2$$data = _this2.$data,
            selectorValueList = _this2$$data._selectorValueList,
            valueEntities = _this2$$data._valueEntities;

        var isMultiple = _this2.isMultiple(); // Scroll to value position, only need sync on single mode


        if (!isMultiple && selectorValueList.length && open && _this2.popup) {
          var value = selectorValueList[0].value;

          var _this2$popup$getTree = _this2.popup.getTree(),
              domTreeNodes = _this2$popup$getTree.domTreeNodes;

          var _ref = valueEntities[value] || {},
              key = _ref.key;

          var treeNode = domTreeNodes[key];

          if (treeNode) {
            var domNode = findDOMNode(treeNode);
            requestAnimationFrame(function () {
              var popupNode = findDOMNode(_this2.popup);
              var triggerContainer = findPopupContainer(popupNode, "".concat(prefixCls, "-dropdown"));

              if (domNode && triggerContainer) {
                scrollIntoView(domNode, triggerContainer, {
                  onlyScrollIfNeeded: true,
                  offsetTop: 0
                });
              }
            });
          }
        }
      });
    }
  }),
  created: function created() {
    provide('vcTreeSelect', {
      onSelectorFocus: this.onSelectorFocus,
      onSelectorBlur: this.onSelectorBlur,
      onSelectorKeyDown: this.onComponentKeyDown,
      onSelectorClear: this.onSelectorClear,
      onMultipleSelectorRemove: this.onMultipleSelectorRemove,
      onTreeNodeSelect: this.onTreeNodeSelect,
      onTreeNodeCheck: this.onTreeNodeCheck,
      onPopupKeyDown: this.onComponentKeyDown,
      onSearchInputChange: this.onSearchInputChange,
      onSearchInputKeyDown: this.onSearchInputKeyDown
    });
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      var _this3$$props = _this3.$props,
          autofocus = _this3$$props.autofocus,
          disabled = _this3$$props.disabled;

      if (autofocus && !disabled) {
        _this3.focus();
      }
    });
  },
  methods: {
    getDerivedState: function getDerivedState(nextProps, prevState) {
      var _prevState$_prevProps = prevState._prevProps,
          prevProps = _prevState$_prevProps === void 0 ? {} : _prevState$_prevProps;
      var treeCheckable = nextProps.treeCheckable,
          treeCheckStrictly = nextProps.treeCheckStrictly,
          filterTreeNode = nextProps.filterTreeNode,
          treeNodeFilterProp = nextProps.treeNodeFilterProp,
          treeDataSimpleMode = nextProps.treeDataSimpleMode;
      var newState = {
        _prevProps: _extends({}, nextProps),
        _init: false
      };
      var self = this; // Process the state when props updated

      function processState(propName, updater) {
        if (prevProps[propName] !== nextProps[propName] || self.needSyncKeys[propName]) {
          updater(nextProps[propName], prevProps[propName]);
          return true;
        }

        return false;
      }

      var valueRefresh = false; // Open

      processState('open', function (propValue) {
        newState._open = propValue;
      }); // Tree Nodes

      var treeNodes;
      var treeDataChanged = false;
      var treeDataModeChanged = false;
      processState('treeData', function (propValue) {
        treeNodes = convertDataToTree(propValue);
        treeDataChanged = true;
      });
      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;
        var prev = !prevValue || prevValue === true ? {} : prevValue; // Shallow equal to avoid dynamic prop object

        if (!shallowEqual(propValue, prev)) {
          treeDataModeChanged = true;
        }
      }); // Parse by `treeDataSimpleMode`

      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = _extends({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});

        treeNodes = convertDataToTree(parseSimpleTreeData(nextProps.treeData, simpleMapper));
      } // If `treeData` not provide, use children TreeNodes


      if (!nextProps.treeData) {
        // processState('children', (propValue) => {
        //   treeNodes = Array.isArray(propValue) ? propValue : [propValue]
        // })
        treeNodes = this.children || [];
      } // Convert `treeData` to entities


      if (treeNodes) {
        var entitiesMap = convertTreeToEntities(treeNodes);
        newState._treeNodes = treeNodes;
        newState._posEntities = entitiesMap.posEntities;
        newState._valueEntities = entitiesMap.valueEntities;
        newState._keyEntities = entitiesMap.keyEntities;
        valueRefresh = true;
      } // Value List


      if (prevState._init) {
        processState('defaultValue', function (propValue) {
          newState._valueList = formatInternalValue(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState._valueList = formatInternalValue(propValue, nextProps);
        valueRefresh = true;
      }); // Selector Value List

      if (valueRefresh) {
        // Find out that value not exist in the tree
        var missValueList = [];
        var filteredValueList = [];
        var keyList = []; // Get latest value list

        var latestValueList = newState._valueList;

        if (!latestValueList) {
          // Also need add prev missValueList to avoid new treeNodes contains the value
          latestValueList = [].concat(_toConsumableArray(prevState._valueList), _toConsumableArray(prevState._missValueList));
        } // Get key by value


        var valueLabels = {};
        latestValueList.forEach(function (wrapperValue) {
          var value = wrapperValue.value,
              label = wrapperValue.label;
          var entity = (newState._valueEntities || prevState._valueEntities)[value];
          valueLabels[value] = label;

          if (entity) {
            keyList.push(entity.key);
            filteredValueList.push(wrapperValue);
            return;
          } // If not match, it may caused by ajax load. We need keep this


          missValueList.push(wrapperValue);
        }); // We need calculate the value when tree is checked tree

        if (treeCheckable && !treeCheckStrictly) {
          // Calculate the keys need to be checked
          var _conductCheck = conductCheck(keyList, true, newState._keyEntities || prevState._keyEntities),
              checkedKeys = _conductCheck.checkedKeys; // Format value list again for internal usage


          newState._valueList = checkedKeys.map(function (key) {
            var val = (newState._keyEntities || prevState._keyEntities).get(key).value;

            var wrappedValue = {
              value: val
            };

            if (valueLabels[val] !== undefined) {
              wrappedValue.label = valueLabels[val];
            }

            return wrappedValue;
          });
        } else {
          newState._valueList = filteredValueList;
        } // Fill the missValueList, we still need display in the selector


        newState._missValueList = missValueList; // Calculate the value list for `Selector` usage

        newState._selectorValueList = formatSelectorValue(newState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
      } // [Legacy] To align with `Select` component,
      // We use `searchValue` instead of `inputValue` but still keep the api
      // `inputValue` support `null` to work as `autoClearSearchValue`


      processState('inputValue', function (propValue) {
        if (propValue !== null) {
          newState._searchValue = propValue;
        }
      }); // Search value

      processState('searchValue', function (propValue) {
        newState._searchValue = propValue;
      }); // Do the search logic

      if (newState._searchValue !== undefined || prevState._searchValue && treeNodes) {
        var searchValue = newState._searchValue !== undefined ? newState._searchValue : prevState._searchValue;
        var upperSearchValue = String(searchValue).toUpperCase();
        var filterTreeNodeFn = filterTreeNode;

        if (filterTreeNode === false) {
          // Don't filter if is false
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (typeof filterTreeNodeFn !== 'function') {
          // When is not function (true or undefined), use inner filter
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String(getPropsData(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        newState._filteredTreeNodes = getFilterTree(newState._treeNodes || prevState._treeNodes, searchValue, filterTreeNodeFn, newState._valueEntities || prevState._valueEntities, SelectNode);
      } // We should re-calculate the halfCheckedKeys when in search mode


      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState._searchValue || prevState._searchValue)) {
        newState._searchHalfCheckedKeys = getHalfCheckedKeys(newState._valueList, newState._valueEntities || prevState._valueEntities);
      } // Checked Strategy


      processState('showCheckedStrategy', function () {
        newState._selectorValueList = newState._selectorValueList || formatSelectorValue(newState._valueList || prevState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
      });
      return newState;
    },
    // ==================== Selector ====================
    onSelectorFocus: function onSelectorFocus() {
      this.setState({
        _focused: true
      });
    },
    onSelectorBlur: function onSelectorBlur() {
      this.setState({
        _focused: false
      }); // TODO: Close when Popup is also not focused
      // this.setState({ open: false });
    },
    // Handle key board event in both Selector and Popup
    onComponentKeyDown: function onComponentKeyDown(event) {
      var open = this.$data._open;
      var keyCode = event.keyCode;

      if (!open) {
        if ([KeyCode.ENTER, KeyCode.DOWN].indexOf(keyCode) !== -1) {
          this.setOpenState(true);
        }
      } else if (KeyCode.ESC === keyCode) {
        this.setOpenState(false);
      } else if ([KeyCode.UP, KeyCode.DOWN, KeyCode.LEFT, KeyCode.RIGHT].indexOf(keyCode) !== -1) {
        // TODO: Handle `open` state
        event.stopPropagation();
      }
    },
    onDeselect: function onDeselect(wrappedValue, node, nodeEventInfo) {
      this.__emit('deselect', wrappedValue, node, nodeEventInfo);
    },
    onSelectorClear: function onSelectorClear(event) {
      var disabled = this.$props.disabled;
      if (disabled) return;
      this.triggerChange([], []);

      if (!this.isSearchValueControlled()) {
        this.setUncontrolledState({
          _searchValue: '',
          _filteredTreeNodes: null
        });
      }

      event.stopPropagation();
    },
    onMultipleSelectorRemove: function onMultipleSelectorRemove(event, removeValue) {
      event.stopPropagation();
      var _this$$data = this.$data,
          valueList = _this$$data._valueList,
          missValueList = _this$$data._missValueList,
          valueEntities = _this$$data._valueEntities;
      var _this$$props2 = this.$props,
          treeCheckable = _this$$props2.treeCheckable,
          treeCheckStrictly = _this$$props2.treeCheckStrictly,
          treeNodeLabelProp = _this$$props2.treeNodeLabelProp,
          disabled = _this$$props2.disabled;
      if (disabled) return; // Find trigger entity

      var triggerEntity = valueEntities[removeValue]; // Clean up value

      var newValueList = valueList;

      if (triggerEntity) {
        // If value is in tree
        if (treeCheckable && !treeCheckStrictly) {
          newValueList = valueList.filter(function (_ref2) {
            var value = _ref2.value;
            var entity = valueEntities[value];
            return !isPosRelated(entity.pos, triggerEntity.pos);
          });
        } else {
          newValueList = valueList.filter(function (_ref3) {
            var value = _ref3.value;
            return value !== removeValue;
          });
        }
      }

      var triggerNode = triggerEntity ? triggerEntity.node : null;
      var extraInfo = {
        triggerValue: removeValue,
        triggerNode: triggerNode
      };
      var deselectInfo = {
        node: triggerNode
      }; // [Legacy] Little hack on this to make same action as `onCheck` event.

      if (treeCheckable) {
        var filteredEntityList = newValueList.map(function (_ref4) {
          var value = _ref4.value;
          return valueEntities[value];
        });
        deselectInfo.event = 'check';
        deselectInfo.checked = false;
        deselectInfo.checkedNodes = filteredEntityList.map(function (_ref5) {
          var node = _ref5.node;
          return node;
        });
        deselectInfo.checkedNodesPositions = filteredEntityList.map(function (_ref6) {
          var node = _ref6.node,
              pos = _ref6.pos;
          return {
            node: node,
            pos: pos
          };
        });

        if (treeCheckStrictly) {
          extraInfo.allCheckedNodes = deselectInfo.checkedNodes;
        } else {
          // TODO: It's too expansive to get `halfCheckedKeys` in onDeselect. Not pass this.
          extraInfo.allCheckedNodes = flatToHierarchy(filteredEntityList).map(function (_ref7) {
            var node = _ref7.node;
            return node;
          });
        }
      } else {
        deselectInfo.event = 'select';
        deselectInfo.selected = false;
        deselectInfo.selectedNodes = newValueList.map(function (_ref8) {
          var value = _ref8.value;
          return (valueEntities[value] || {}).node;
        });
      } // Some value user pass prop is not in the tree, we also need clean it


      var newMissValueList = missValueList.filter(function (_ref9) {
        var value = _ref9.value;
        return value !== removeValue;
      });
      var wrappedValue;

      if (this.isLabelInValue()) {
        wrappedValue = {
          label: triggerNode ? getPropsData(triggerNode)[treeNodeLabelProp] : null,
          value: removeValue
        };
      } else {
        wrappedValue = removeValue;
      }

      this.onDeselect(wrappedValue, triggerNode, deselectInfo);
      this.triggerChange(newMissValueList, newValueList, extraInfo);
    },
    // ===================== Popup ======================
    onValueTrigger: function onValueTrigger(isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
      var node = nodeEventInfo.node;
      var value = node.$props.value;
      var _this$$data2 = this.$data,
          missValueList = _this$$data2._missValueList,
          valueEntities = _this$$data2._valueEntities,
          keyEntities = _this$$data2._keyEntities,
          searchValue = _this$$data2._searchValue;
      var _this$$props3 = this.$props,
          disabled = _this$$props3.disabled,
          inputValue = _this$$props3.inputValue,
          treeNodeLabelProp = _this$$props3.treeNodeLabelProp,
          treeCheckable = _this$$props3.treeCheckable,
          treeCheckStrictly = _this$$props3.treeCheckStrictly,
          autoClearSearchValue = _this$$props3.autoClearSearchValue;
      var label = node.$props[treeNodeLabelProp];
      if (disabled) return; // Wrap the return value for user

      var wrappedValue;

      if (this.isLabelInValue()) {
        wrappedValue = {
          value: value,
          label: label
        };
      } else {
        wrappedValue = value;
      } // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.


      if (isAdd) {
        this.__emit('select', wrappedValue, node, nodeEventInfo);
      } else {
        this.__emit('deselect', wrappedValue, node, nodeEventInfo);
      } // Get wrapped value list.
      // This is a bit hack cause we use key to match the value.


      var newValueList = nodeList.map(function (node) {
        var props = getPropsData(node);
        return {
          value: props.value,
          label: props[treeNodeLabelProp]
        };
      }); // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
      // We need calculate the missing nodes.

      if (treeCheckable && !treeCheckStrictly) {
        var keyList = newValueList.map(function (_ref10) {
          var val = _ref10.value;
          return valueEntities[val].key;
        });

        if (isAdd) {
          keyList = conductCheck(keyList, true, keyEntities).checkedKeys;
        } else {
          keyList = conductCheck([valueEntities[value].key], false, keyEntities, {
            checkedKeys: keyList
          }).checkedKeys;
        }

        newValueList = keyList.map(function (key) {
          var props = getPropsData(keyEntities.get(key).node);
          return {
            value: props.value,
            label: props[treeNodeLabelProp]
          };
        });
      } // Clean up `searchValue` when this prop is set


      if (autoClearSearchValue || inputValue === null) {
        // Clean state `searchValue` if uncontrolled
        if (!this.isSearchValueControlled()) {
          this.setUncontrolledState({
            _searchValue: '',
            _filteredTreeNodes: null
          });
        } // Trigger onSearch if `searchValue` to be empty.
        // We should also trigger onSearch with empty string here
        // since if user use `treeExpandedKeys`, it need user have the ability to reset it.


        if (searchValue && searchValue.length) {
          this.__emit('search', '');
        }
      } // [Legacy] Provide extra info


      var extraInfo = _extends(_extends({}, nodeExtraInfo), {
        triggerValue: value,
        triggerNode: node
      });

      this.triggerChange(missValueList, newValueList, extraInfo);
    },
    onTreeNodeSelect: function onTreeNodeSelect(_, nodeEventInfo) {
      var _this$$data3 = this.$data,
          valueList = _this$$data3._valueList,
          valueEntities = _this$$data3._valueEntities;
      var _this$$props4 = this.$props,
          treeCheckable = _this$$props4.treeCheckable,
          multiple = _this$$props4.multiple;
      if (treeCheckable) return;

      if (!multiple) {
        this.setOpenState(false);
      }

      var isAdd = nodeEventInfo.selected;
      var selectedValue = nodeEventInfo.node.$props.value;
      var newValueList;

      if (!multiple) {
        newValueList = [{
          value: selectedValue
        }];
      } else {
        newValueList = valueList.filter(function (_ref11) {
          var value = _ref11.value;
          return value !== selectedValue;
        });

        if (isAdd) {
          newValueList.push({
            value: selectedValue
          });
        }
      }

      var selectedNodes = newValueList.map(function (_ref12) {
        var value = _ref12.value;
        return valueEntities[value];
      }).filter(function (entity) {
        return entity;
      }).map(function (_ref13) {
        var node = _ref13.node;
        return node;
      });
      this.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, {
        selected: isAdd
      });
    },
    onTreeNodeCheck: function onTreeNodeCheck(_, nodeEventInfo) {
      var _this$$data4 = this.$data,
          searchValue = _this$$data4._searchValue,
          keyEntities = _this$$data4._keyEntities,
          valueEntities = _this$$data4._valueEntities,
          valueList = _this$$data4._valueList;
      var treeCheckStrictly = this.$props.treeCheckStrictly;
      var checkedNodes = nodeEventInfo.checkedNodes,
          checkedNodesPositions = nodeEventInfo.checkedNodesPositions;
      var isAdd = nodeEventInfo.checked;
      var extraInfo = {
        checked: isAdd
      };
      var checkedNodeList = checkedNodes; // [Legacy] Check event provide `allCheckedNodes`.
      // When `treeCheckStrictly` or internal `searchValue` is set, TreeNode will be unrelated:
      // - Related: Show the top checked nodes and has children prop.
      // - Unrelated: Show all the checked nodes.

      if (searchValue) {
        var oriKeyList = valueList.map(function (_ref14) {
          var value = _ref14.value;
          return valueEntities[value];
        }).filter(function (entity) {
          return entity;
        }).map(function (_ref15) {
          var key = _ref15.key;
          return key;
        });
        var keyList;

        if (isAdd) {
          keyList = Array.from(new Set([].concat(_toConsumableArray(oriKeyList), _toConsumableArray(checkedNodeList.map(function (node) {
            var _getPropsData = getPropsData(node),
                value = _getPropsData.value;

            return valueEntities[value].key;
          })))));
        } else {
          keyList = conductCheck([getPropsData(nodeEventInfo.node).eventKey], false, keyEntities, {
            checkedKeys: oriKeyList
          }).checkedKeys;
        }

        checkedNodeList = keyList.map(function (key) {
          return keyEntities.get(key).node;
        }); // Let's follow as not `treeCheckStrictly` format

        extraInfo.allCheckedNodes = keyList.map(function (key) {
          return cleanEntity(keyEntities.get(key));
        });
      } else if (treeCheckStrictly) {
        extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
      } else {
        extraInfo.allCheckedNodes = flatToHierarchy(checkedNodesPositions);
      }

      this.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
    },
    // ==================== Trigger =====================
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      var _this$$props5 = this.$props,
          multiple = _this$$props5.multiple,
          treeCheckable = _this$$props5.treeCheckable;
      var _searchValue = this.$data._searchValue; // When set open success and single mode,
      // we will reset the input content.

      if (open && !multiple && !treeCheckable && _searchValue) {
        this.setUncontrolledState({
          _searchValue: '',
          _filteredTreeNodes: null
        });
      }

      this.setOpenState(open, true);
    },
    onSearchInputChange: function onSearchInputChange(event) {
      var value = event.target.value;
      var _this$$data5 = this.$data,
          treeNodes = _this$$data5._treeNodes,
          valueEntities = _this$$data5._valueEntities;
      var _this$$props6 = this.$props,
          filterTreeNode = _this$$props6.filterTreeNode,
          treeNodeFilterProp = _this$$props6.treeNodeFilterProp;

      this.__emit('search', value);

      var isSet = false;

      if (!this.isSearchValueControlled()) {
        isSet = this.setUncontrolledState({
          _searchValue: value
        });
        this.setOpenState(true);
      }

      if (isSet) {
        // Do the search logic
        var upperSearchValue = String(value).toUpperCase();
        var filterTreeNodeFn = filterTreeNode;

        if (filterTreeNode === false) {
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (!filterTreeNodeFn) {
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String(getPropsData(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        this.setState({
          _filteredTreeNodes: getFilterTree(treeNodes, value, filterTreeNodeFn, valueEntities, SelectNode)
        });
      }
    },
    onSearchInputKeyDown: function onSearchInputKeyDown(event) {
      var _this$$data6 = this.$data,
          searchValue = _this$$data6._searchValue,
          valueList = _this$$data6._valueList,
          valueEntities = _this$$data6._valueEntities;
      var keyCode = event.keyCode;

      if (KeyCode.BACKSPACE === keyCode && this.isMultiple() && !searchValue && valueList.length) {
        var lastValue = valueList[valueList.length - 1].value;
        var treeCheckStrictly = this.$props.treeCheckStrictly;

        if (!treeCheckStrictly) {
          (function () {
            var cur = valueEntities[lastValue];

            while (cur) {
              if (valueList.some(function (j) {
                return j.value === cur.value;
              })) {
                lastValue = cur.value;
                cur = cur.parent;
              } else {
                cur = null;
              }
            }
          })();
        }

        this.onMultipleSelectorRemove(event, lastValue);
      }
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      var _this4 = this;

      requestAnimationFrame(function () {
        _this4.forcePopupAlign();
      });
    },
    setPopupRef: function setPopupRef(popup) {
      this.popup = popup;
    },

    /**
     * Only update the value which is not in props
     */
    setUncontrolledState: function setUncontrolledState(state) {
      var needSync = false;
      var newState = {};
      var props = getOptionProps(this);
      Object.keys(state).forEach(function (name) {
        if (name.slice(1) in props) return;
        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        this.setState(newState);
      }

      return needSync;
    },
    // [Legacy] Origin provide `documentClickClose` which triggered by `Trigger`
    // Currently `TreeSelect` align the hide popup logic as `Select` which blur to hide.
    // `documentClickClose` is not accurate anymore. Let's just keep the key word.
    setOpenState: function setOpenState(open) {
      var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var dropdownVisibleChange = this.$props.dropdownVisibleChange;

      if (dropdownVisibleChange && dropdownVisibleChange(open, {
        documentClickClose: !open && byTrigger
      }) === false) {
        return;
      }

      this.setUncontrolledState({
        _open: open
      });
    },
    // Tree checkable is also a multiple case
    isMultiple: function isMultiple() {
      var _this$$props7 = this.$props,
          multiple = _this$$props7.multiple,
          treeCheckable = _this$$props7.treeCheckable;
      return !!(multiple || treeCheckable);
    },
    isLabelInValue: function isLabelInValue() {
      return _isLabelInValue(this.$props);
    },
    // [Legacy] To align with `Select` component,
    // We use `searchValue` instead of `inputValue`
    // but currently still need support that.
    // Add this method the check if is controlled
    isSearchValueControlled: function isSearchValueControlled() {
      var props = getOptionProps(this);
      var inputValue = props.inputValue;
      if ('searchValue' in props) return true;
      return 'inputValue' in props && inputValue !== null;
    },
    forcePopupAlign: function forcePopupAlign() {
      var $trigger = this.selectTriggerRef.current;

      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    },
    delayForcePopupAlign: function delayForcePopupAlign() {
      var _this5 = this;

      // Wait 2 frame to avoid dom update & dom algin in the same time
      // https://github.com/ant-design/ant-design/issues/12031
      requestAnimationFrame(function () {
        requestAnimationFrame(_this5.forcePopupAlign);
      });
    },

    /**
     * 1. Update state valueList.
     * 2. Fire `onChange` event to user.
     */
    triggerChange: function triggerChange(missValueList, valueList) {
      var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$$data7 = this.$data,
          valueEntities = _this$$data7._valueEntities,
          searchValue = _this$$data7._searchValue,
          prevSelectorValueList = _this$$data7._selectorValueList;
      var props = getOptionProps(this);
      var disabled = props.disabled,
          treeCheckable = props.treeCheckable,
          treeCheckStrictly = props.treeCheckStrictly;
      if (disabled) return; // Trigger

      var extra = _extends({
        // [Legacy] Always return as array contains label & value
        preValue: prevSelectorValueList.map(function (_ref16) {
          var label = _ref16.label,
              value = _ref16.value;
          return {
            label: label,
            value: value
          };
        })
      }, extraInfo); // Format value by `treeCheckStrictly`


      var selectorValueList = formatSelectorValue(valueList, props, valueEntities);

      if (!('value' in props)) {
        var newState = {
          _missValueList: missValueList,
          _valueList: valueList,
          _selectorValueList: selectorValueList
        };

        if (searchValue && treeCheckable && !treeCheckStrictly) {
          newState._searchHalfCheckedKeys = getHalfCheckedKeys(valueList, valueEntities);
        }

        this.setState(newState);
      } // Only do the logic when `onChange` function provided


      if (this.$attrs.onChange) {
        var connectValueList; // Get value by mode

        if (this.isMultiple()) {
          connectValueList = [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList));
        } else {
          connectValueList = selectorValueList.slice(0, 1);
        }

        var labelList = null;
        var returnValue;

        if (this.isLabelInValue()) {
          returnValue = connectValueList.map(function (_ref17) {
            var label = _ref17.label,
                value = _ref17.value;
            return {
              label: label,
              value: value
            };
          });
        } else {
          labelList = [];
          returnValue = connectValueList.map(function (_ref18) {
            var label = _ref18.label,
                value = _ref18.value;
            labelList.push(label);
            return value;
          });
        }

        if (!this.isMultiple()) {
          returnValue = returnValue[0];
        }

        this.__emit('change', returnValue, labelList, extra);
      }
    },
    focus: function focus() {
      this.selectorRef.current.focus();
    },
    blur: function blur() {
      this.selectorRef.current.blur();
    }
  },
  // ===================== Render =====================
  render: function render() {
    var _this$$data8 = this.$data,
        valueList = _this$$data8._valueList,
        missValueList = _this$$data8._missValueList,
        selectorValueList = _this$$data8._selectorValueList,
        searchHalfCheckedKeys = _this$$data8._searchHalfCheckedKeys,
        valueEntities = _this$$data8._valueEntities,
        keyEntities = _this$$data8._keyEntities,
        searchValue = _this$$data8._searchValue,
        open = _this$$data8._open,
        focused = _this$$data8._focused,
        treeNodes = _this$$data8._treeNodes,
        filteredTreeNodes = _this$$data8._filteredTreeNodes;
    var props = getOptionProps(this);
    var prefixCls = props.prefixCls,
        treeExpandedKeys = props.treeExpandedKeys;
    var isMultiple = this.isMultiple();

    var passProps = _extends(_extends(_extends({}, props), this.$attrs), {
      isMultiple: isMultiple,
      valueList: valueList,
      searchHalfCheckedKeys: searchHalfCheckedKeys,
      selectorValueList: [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList)),
      valueEntities: valueEntities,
      keyEntities: keyEntities,
      searchValue: searchValue,
      upperSearchValue: (searchValue || '').toUpperCase(),
      // Perf save
      open: open,
      focused: focused,
      dropdownPrefixCls: "".concat(prefixCls, "-dropdown"),
      ariaId: this.ariaId,
      onChoiceAnimationLeave: this.onChoiceAnimationLeave,
      vSlots: this.$slots
    });

    var popupProps = _extends(_extends({}, passProps), {
      treeNodes: treeNodes,
      filteredTreeNodes: filteredTreeNodes,
      // Tree expanded control
      treeExpandedKeys: treeExpandedKeys,
      onTreeExpanded: this.delayForcePopupAlign,
      ref: this.setPopupRef
    });

    var $popup = _createVNode(BasePopup, _objectSpread(_objectSpread({}, popupProps), {}, {
      "__propsSymbol__": []
    }), null);

    var Selector = isMultiple ? MultipleSelector : SingleSelector;

    var $selector = _createVNode(Selector, _objectSpread(_objectSpread({}, passProps), {}, {
      "isMultiple": isMultiple,
      "ref": this.selectorRef
    }), null);

    var selectTriggerProps = _extends(_extends({}, passProps), {
      popupElement: $popup,
      dropdownVisibleChange: this.onDropdownVisibleChange,
      ref: this.selectTriggerRef
    });

    return _createVNode(SelectTrigger, selectTriggerProps, {
      default: function _default() {
        return [$selector];
      }
    });
  }
});
Select.TreeNode = SelectNode;
Select.SHOW_ALL = SHOW_ALL;
Select.SHOW_PARENT = SHOW_PARENT;
Select.SHOW_CHILD = SHOW_CHILD; // Let warning show correct component name

Select.name = 'TreeSelect';
export default Select;