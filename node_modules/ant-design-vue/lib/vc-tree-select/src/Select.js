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

var _shallowequal = _interopRequireDefault(require("../../_util/shallowequal"));

var _domScrollIntoView = _interopRequireDefault(require("dom-scroll-into-view"));

var _warning = _interopRequireDefault(require("warning"));

var _vueTypes = _interopRequireWildcard(require("../../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));

var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));

var _SingleSelector = _interopRequireDefault(require("./Selector/SingleSelector"));

var _MultipleSelector = _interopRequireDefault(require("./Selector/MultipleSelector"));

var _strategies = require("./strategies");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _util = require("./util");

var _SelectNode = _interopRequireDefault(require("./SelectNode"));

var _propsUtil = require("../../_util/props-util");

var _MultiplePopup = _interopRequireDefault(require("./Popup/MultiplePopup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Select = (0, _vue.defineComponent)({
  name: 'Select',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes.default.string,
    prefixAria: _vueTypes.default.string,
    multiple: _vueTypes.default.looseBool,
    showArrow: _vueTypes.default.looseBool,
    open: _vueTypes.default.looseBool,
    value: _vueTypes.default.any,
    autofocus: _vueTypes.default.looseBool,
    defaultOpen: _vueTypes.default.looseBool,
    defaultValue: _vueTypes.default.any,
    showSearch: _vueTypes.default.looseBool,
    placeholder: _vueTypes.default.any,
    inputValue: _vueTypes.default.string,
    searchValue: _vueTypes.default.string,
    autoClearSearchValue: _vueTypes.default.looseBool,
    searchPlaceholder: _vueTypes.default.any,
    disabled: _vueTypes.default.looseBool,
    children: _vueTypes.default.any,
    labelInValue: _vueTypes.default.looseBool,
    maxTagCount: _vueTypes.default.number,
    maxTagPlaceholder: _vueTypes.default.any,
    maxTagTextLength: _vueTypes.default.number,
    showCheckedStrategy: _vueTypes.default.oneOf([_strategies.SHOW_ALL, _strategies.SHOW_PARENT, _strategies.SHOW_CHILD]),
    dropdownClassName: _vueTypes.default.string,
    dropdownStyle: _vueTypes.default.object,
    dropdownVisibleChange: _vueTypes.default.func,
    dropdownMatchSelectWidth: _vueTypes.default.looseBool,
    treeData: _vueTypes.default.array,
    treeDataSimpleMode: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
    treeNodeFilterProp: _vueTypes.default.string,
    treeNodeLabelProp: _vueTypes.default.string,
    treeCheckable: _vueTypes.default.any,
    // treeCheckable: PropTypes.any,
    treeCheckStrictly: _vueTypes.default.looseBool,
    treeIcon: _vueTypes.default.looseBool,
    treeLine: _vueTypes.default.looseBool,
    treeDefaultExpandAll: _vueTypes.default.looseBool,
    treeDefaultExpandedKeys: _vueTypes.default.array,
    treeExpandedKeys: _vueTypes.default.array,
    loadData: _vueTypes.default.func,
    filterTreeNode: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.func, _vueTypes.default.looseBool])),
    notFoundContent: _vueTypes.default.any,
    getPopupContainer: _vueTypes.default.func,
    // onSearch: PropTypes.func,
    // onSelect: PropTypes.func,
    // onDeselect: PropTypes.func,
    // onChange: PropTypes.func,
    // onDropdownVisibleChange: PropTypes.func,
    // onTreeExpand: PropTypes.func,
    allowClear: _vueTypes.default.looseBool,
    transitionName: _vueTypes.default.string,
    animation: _vueTypes.default.string,
    choiceTransitionName: _vueTypes.default.string,
    inputIcon: _vueTypes.default.any,
    clearIcon: _vueTypes.default.any,
    removeIcon: _vueTypes.default.any,
    switcherIcon: _vueTypes.default.any,
    __propsSymbol__: _vueTypes.default.any
  }, {
    prefixCls: 'rc-tree-select',
    prefixAria: 'rc-tree-select',
    showArrow: true,
    showSearch: true,
    autoClearSearchValue: true,
    showCheckedStrategy: _strategies.SHOW_CHILD,
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
    (0, _warning.default)(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    var _this$$props = this.$props,
        prefixAria = _this$$props.prefixAria,
        defaultOpen = _this$$props.defaultOpen,
        open = _this$$props.open;
    this.needSyncKeys = {};
    this.selectorRef = (0, _util.createRef)();
    this.selectTriggerRef = (0, _util.createRef)(); // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves

    this.ariaId = (0, _util.generateAriaId)("".concat(prefixAria, "-list"));
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
    return (0, _extends2.default)((0, _extends2.default)({}, state), newState);
  },
  watch: (0, _extends2.default)((0, _extends2.default)({}, getWatch(['treeData', 'defaultValue', 'value'])), {
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
            var domNode = (0, _propsUtil.findDOMNode)(treeNode);
            requestAnimationFrame(function () {
              var popupNode = (0, _propsUtil.findDOMNode)(_this2.popup);
              var triggerContainer = (0, _util.findPopupContainer)(popupNode, "".concat(prefixCls, "-dropdown"));

              if (domNode && triggerContainer) {
                (0, _domScrollIntoView.default)(domNode, triggerContainer, {
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
    (0, _vue.provide)('vcTreeSelect', {
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
        _prevProps: (0, _extends2.default)({}, nextProps),
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
        treeNodes = (0, _util.convertDataToTree)(propValue);
        treeDataChanged = true;
      });
      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;
        var prev = !prevValue || prevValue === true ? {} : prevValue; // Shallow equal to avoid dynamic prop object

        if (!(0, _shallowequal.default)(propValue, prev)) {
          treeDataModeChanged = true;
        }
      }); // Parse by `treeDataSimpleMode`

      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = (0, _extends2.default)({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});
        treeNodes = (0, _util.convertDataToTree)((0, _util.parseSimpleTreeData)(nextProps.treeData, simpleMapper));
      } // If `treeData` not provide, use children TreeNodes


      if (!nextProps.treeData) {
        // processState('children', (propValue) => {
        //   treeNodes = Array.isArray(propValue) ? propValue : [propValue]
        // })
        treeNodes = this.children || [];
      } // Convert `treeData` to entities


      if (treeNodes) {
        var entitiesMap = (0, _util.convertTreeToEntities)(treeNodes);
        newState._treeNodes = treeNodes;
        newState._posEntities = entitiesMap.posEntities;
        newState._valueEntities = entitiesMap.valueEntities;
        newState._keyEntities = entitiesMap.keyEntities;
        valueRefresh = true;
      } // Value List


      if (prevState._init) {
        processState('defaultValue', function (propValue) {
          newState._valueList = (0, _util.formatInternalValue)(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState._valueList = (0, _util.formatInternalValue)(propValue, nextProps);
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
          latestValueList = [].concat((0, _toConsumableArray2.default)(prevState._valueList), (0, _toConsumableArray2.default)(prevState._missValueList));
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
          var _conductCheck = (0, _util.conductCheck)(keyList, true, newState._keyEntities || prevState._keyEntities),
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

        newState._selectorValueList = (0, _util.formatSelectorValue)(newState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
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
            var nodeValue = String((0, _propsUtil.getPropsData)(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        newState._filteredTreeNodes = (0, _util.getFilterTree)(newState._treeNodes || prevState._treeNodes, searchValue, filterTreeNodeFn, newState._valueEntities || prevState._valueEntities, _SelectNode.default);
      } // We should re-calculate the halfCheckedKeys when in search mode


      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState._searchValue || prevState._searchValue)) {
        newState._searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(newState._valueList, newState._valueEntities || prevState._valueEntities);
      } // Checked Strategy


      processState('showCheckedStrategy', function () {
        newState._selectorValueList = newState._selectorValueList || (0, _util.formatSelectorValue)(newState._valueList || prevState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
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
        if ([_KeyCode.default.ENTER, _KeyCode.default.DOWN].indexOf(keyCode) !== -1) {
          this.setOpenState(true);
        }
      } else if (_KeyCode.default.ESC === keyCode) {
        this.setOpenState(false);
      } else if ([_KeyCode.default.UP, _KeyCode.default.DOWN, _KeyCode.default.LEFT, _KeyCode.default.RIGHT].indexOf(keyCode) !== -1) {
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
            return !(0, _util.isPosRelated)(entity.pos, triggerEntity.pos);
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
          extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(filteredEntityList).map(function (_ref7) {
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
          label: triggerNode ? (0, _propsUtil.getPropsData)(triggerNode)[treeNodeLabelProp] : null,
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
        var props = (0, _propsUtil.getPropsData)(node);
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
          keyList = (0, _util.conductCheck)(keyList, true, keyEntities).checkedKeys;
        } else {
          keyList = (0, _util.conductCheck)([valueEntities[value].key], false, keyEntities, {
            checkedKeys: keyList
          }).checkedKeys;
        }

        newValueList = keyList.map(function (key) {
          var props = (0, _propsUtil.getPropsData)(keyEntities.get(key).node);
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


      var extraInfo = (0, _extends2.default)((0, _extends2.default)({}, nodeExtraInfo), {
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
          keyList = Array.from(new Set([].concat((0, _toConsumableArray2.default)(oriKeyList), (0, _toConsumableArray2.default)(checkedNodeList.map(function (node) {
            var _getPropsData = (0, _propsUtil.getPropsData)(node),
                value = _getPropsData.value;

            return valueEntities[value].key;
          })))));
        } else {
          keyList = (0, _util.conductCheck)([(0, _propsUtil.getPropsData)(nodeEventInfo.node).eventKey], false, keyEntities, {
            checkedKeys: oriKeyList
          }).checkedKeys;
        }

        checkedNodeList = keyList.map(function (key) {
          return keyEntities.get(key).node;
        }); // Let's follow as not `treeCheckStrictly` format

        extraInfo.allCheckedNodes = keyList.map(function (key) {
          return (0, _util.cleanEntity)(keyEntities.get(key));
        });
      } else if (treeCheckStrictly) {
        extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
      } else {
        extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(checkedNodesPositions);
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
            var nodeValue = String((0, _propsUtil.getPropsData)(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        this.setState({
          _filteredTreeNodes: (0, _util.getFilterTree)(treeNodes, value, filterTreeNodeFn, valueEntities, _SelectNode.default)
        });
      }
    },
    onSearchInputKeyDown: function onSearchInputKeyDown(event) {
      var _this$$data6 = this.$data,
          searchValue = _this$$data6._searchValue,
          valueList = _this$$data6._valueList,
          valueEntities = _this$$data6._valueEntities;
      var keyCode = event.keyCode;

      if (_KeyCode.default.BACKSPACE === keyCode && this.isMultiple() && !searchValue && valueList.length) {
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
      var props = (0, _propsUtil.getOptionProps)(this);
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
      return (0, _util.isLabelInValue)(this.$props);
    },
    // [Legacy] To align with `Select` component,
    // We use `searchValue` instead of `inputValue`
    // but currently still need support that.
    // Add this method the check if is controlled
    isSearchValueControlled: function isSearchValueControlled() {
      var props = (0, _propsUtil.getOptionProps)(this);
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
      var props = (0, _propsUtil.getOptionProps)(this);
      var disabled = props.disabled,
          treeCheckable = props.treeCheckable,
          treeCheckStrictly = props.treeCheckStrictly;
      if (disabled) return; // Trigger

      var extra = (0, _extends2.default)({
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

      var selectorValueList = (0, _util.formatSelectorValue)(valueList, props, valueEntities);

      if (!('value' in props)) {
        var newState = {
          _missValueList: missValueList,
          _valueList: valueList,
          _selectorValueList: selectorValueList
        };

        if (searchValue && treeCheckable && !treeCheckStrictly) {
          newState._searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(valueList, valueEntities);
        }

        this.setState(newState);
      } // Only do the logic when `onChange` function provided


      if (this.$attrs.onChange) {
        var connectValueList; // Get value by mode

        if (this.isMultiple()) {
          connectValueList = [].concat((0, _toConsumableArray2.default)(missValueList), (0, _toConsumableArray2.default)(selectorValueList));
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
    var props = (0, _propsUtil.getOptionProps)(this);
    var prefixCls = props.prefixCls,
        treeExpandedKeys = props.treeExpandedKeys;
    var isMultiple = this.isMultiple();
    var passProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), this.$attrs), {
      isMultiple: isMultiple,
      valueList: valueList,
      searchHalfCheckedKeys: searchHalfCheckedKeys,
      selectorValueList: [].concat((0, _toConsumableArray2.default)(missValueList), (0, _toConsumableArray2.default)(selectorValueList)),
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
    var popupProps = (0, _extends2.default)((0, _extends2.default)({}, passProps), {
      treeNodes: treeNodes,
      filteredTreeNodes: filteredTreeNodes,
      // Tree expanded control
      treeExpandedKeys: treeExpandedKeys,
      onTreeExpanded: this.delayForcePopupAlign,
      ref: this.setPopupRef
    });
    var $popup = (0, _vue.createVNode)(_MultiplePopup.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, popupProps), {}, {
      "__propsSymbol__": []
    }), null);
    var Selector = isMultiple ? _MultipleSelector.default : _SingleSelector.default;
    var $selector = (0, _vue.createVNode)(Selector, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, passProps), {}, {
      "isMultiple": isMultiple,
      "ref": this.selectorRef
    }), null);
    var selectTriggerProps = (0, _extends2.default)((0, _extends2.default)({}, passProps), {
      popupElement: $popup,
      dropdownVisibleChange: this.onDropdownVisibleChange,
      ref: this.selectTriggerRef
    });
    return (0, _vue.createVNode)(_SelectTrigger.default, selectTriggerProps, {
      default: function _default() {
        return [$selector];
      }
    });
  }
});
Select.TreeNode = _SelectNode.default;
Select.SHOW_ALL = _strategies.SHOW_ALL;
Select.SHOW_PARENT = _strategies.SHOW_PARENT;
Select.SHOW_CHILD = _strategies.SHOW_CHILD; // Let warning show correct component name

Select.name = 'TreeSelect';
var _default2 = Select;
exports.default = _default2;