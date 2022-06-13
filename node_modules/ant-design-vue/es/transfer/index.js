import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import { hasProp, getOptionProps, getComponent } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import BaseMixin from '../_util/BaseMixin';
import classNames from '../_util/classNames';
import List from './list';
import Operation from './operation';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';
import { defaultConfigProvider } from '../config-provider';
import { withInstall } from '../_util/type';
export var TransferItem = {
  key: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.looseBool
};
export var TransferProps = {
  prefixCls: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.shape(TransferItem).loose),
  disabled: PropTypes.looseBool,
  targetKeys: PropTypes.arrayOf(PropTypes.string),
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  render: PropTypes.func,
  listStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  operationStyle: PropTypes.object,
  titles: PropTypes.arrayOf(PropTypes.string),
  operations: PropTypes.arrayOf(PropTypes.string),
  showSearch: PropTypes.looseBool,
  filterOption: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  notFoundContent: PropTypes.any,
  locale: PropTypes.object,
  rowKey: PropTypes.func,
  lazy: PropTypes.oneOfType([PropTypes.object, PropTypes.looseBool]),
  showSelectAll: PropTypes.looseBool,
  children: PropTypes.any,
  onChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onSearch: PropTypes.func,
  onScroll: PropTypes.func
};
var Transfer = defineComponent({
  name: 'ATransfer',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(TransferProps, {
    dataSource: [],
    locale: {},
    showSearch: false,
    listStyle: function listStyle() {}
  }),
  setup: function setup() {
    return {
      separatedDataSource: null,
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  data: function data() {
    // vue 中 通过slot，不方便传递，保留notFoundContent及searchPlaceholder
    // warning(
    //   !(getComponent(this, 'notFoundContent') || hasProp(this, 'searchPlaceholder')),
    //   'Transfer[notFoundContent] and Transfer[searchPlaceholder] will be removed, ' +
    //   'please use Transfer[locale] instead.',
    // )
    var _this$selectedKeys = this.selectedKeys,
        selectedKeys = _this$selectedKeys === void 0 ? [] : _this$selectedKeys,
        _this$targetKeys = this.targetKeys,
        targetKeys = _this$targetKeys === void 0 ? [] : _this$targetKeys;
    return {
      leftFilter: '',
      rightFilter: '',
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
  },
  watch: {
    targetKeys: function targetKeys() {
      this.updateState();

      if (this.selectedKeys) {
        var targetKeys = this.targetKeys || [];
        this.setState({
          sourceSelectedKeys: this.selectedKeys.filter(function (key) {
            return !targetKeys.includes(key);
          }),
          targetSelectedKeys: this.selectedKeys.filter(function (key) {
            return targetKeys.includes(key);
          })
        });
      }
    },
    dataSource: function dataSource() {
      this.updateState();
    },
    selectedKeys: function selectedKeys() {
      if (this.selectedKeys) {
        var targetKeys = this.targetKeys || [];
        this.setState({
          sourceSelectedKeys: this.selectedKeys.filter(function (key) {
            return !targetKeys.includes(key);
          }),
          targetSelectedKeys: this.selectedKeys.filter(function (key) {
            return targetKeys.includes(key);
          })
        });
      }
    }
  },
  mounted: function mounted() {// this.currentProps = { ...this.$props }
  },
  methods: {
    getSelectedKeysName: function getSelectedKeysName(direction) {
      return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
    },
    getTitles: function getTitles(transferLocale) {
      if (this.titles) {
        return this.titles;
      }

      return transferLocale.titles || ['', ''];
    },
    getLocale: function getLocale(transferLocale, renderEmpty) {
      // Keep old locale props still working.
      var oldLocale = {
        notFoundContent: renderEmpty('Transfer')
      };
      var notFoundContent = getComponent(this, 'notFoundContent');

      if (notFoundContent) {
        oldLocale.notFoundContent = notFoundContent;
      }

      if (hasProp(this, 'searchPlaceholder')) {
        oldLocale.searchPlaceholder = this.$props.searchPlaceholder;
      }

      return _extends(_extends(_extends({}, transferLocale), oldLocale), this.$props.locale);
    },
    updateState: function updateState() {
      var sourceSelectedKeys = this.sourceSelectedKeys,
          targetSelectedKeys = this.targetSelectedKeys;
      this.separatedDataSource = null;

      if (!this.selectedKeys) {
        // clear key nolonger existed
        // clear checkedKeys according to targetKeys
        var dataSource = this.dataSource,
            _this$targetKeys2 = this.targetKeys,
            targetKeys = _this$targetKeys2 === void 0 ? [] : _this$targetKeys2;
        var newSourceSelectedKeys = [];
        var newTargetSelectedKeys = [];
        dataSource.forEach(function (_ref) {
          var key = _ref.key;

          if (sourceSelectedKeys.includes(key) && !targetKeys.includes(key)) {
            newSourceSelectedKeys.push(key);
          }

          if (targetSelectedKeys.includes(key) && targetKeys.includes(key)) {
            newTargetSelectedKeys.push(key);
          }
        });
        this.setState({
          sourceSelectedKeys: newSourceSelectedKeys,
          targetSelectedKeys: newTargetSelectedKeys
        });
      }
    },
    moveTo: function moveTo(direction) {
      var _this$$props = this.$props,
          _this$$props$targetKe = _this$$props.targetKeys,
          targetKeys = _this$$props$targetKe === void 0 ? [] : _this$$props$targetKe,
          _this$$props$dataSour = _this$$props.dataSource,
          dataSource = _this$$props$dataSour === void 0 ? [] : _this$$props$dataSour;
      var sourceSelectedKeys = this.sourceSelectedKeys,
          targetSelectedKeys = this.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      }); // move items to target box

      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      }); // empty checked keys

      var oppositeDirection = direction === 'right' ? 'left' : 'right';
      this.setState(_defineProperty({}, this.getSelectedKeysName(oppositeDirection), []));
      this.handleSelectChange(oppositeDirection, []);
      this.$emit('change', newTargetKeys, direction, newMoveKeys);
    },
    moveToLeft: function moveToLeft() {
      this.moveTo('left');
    },
    moveToRight: function moveToRight() {
      this.moveTo('right');
    },
    onItemSelectAll: function onItemSelectAll(direction, selectedKeys, checkAll) {
      var originalSelectedKeys = this.$data[this.getSelectedKeysName(direction)] || [];
      var mergedCheckedKeys = [];

      if (checkAll) {
        // Merge current keys with origin key
        mergedCheckedKeys = Array.from(new Set([].concat(_toConsumableArray(originalSelectedKeys), _toConsumableArray(selectedKeys))));
      } else {
        // Remove current keys from origin keys
        mergedCheckedKeys = originalSelectedKeys.filter(function (key) {
          return selectedKeys.indexOf(key) === -1;
        });
      }

      this.handleSelectChange(direction, mergedCheckedKeys);

      if (!this.$props.selectedKeys) {
        this.setState(_defineProperty({}, this.getSelectedKeysName(direction), mergedCheckedKeys));
      }
    },
    handleSelectAll: function handleSelectAll(direction, filteredDataSource, checkAll) {
      this.onItemSelectAll(direction, filteredDataSource.map(function (_ref2) {
        var key = _ref2.key;
        return key;
      }), !checkAll);
    },
    // [Legacy] Old prop `body` pass origin check as arg. It's confusing.
    // TODO: Remove this in next version.
    handleLeftSelectAll: function handleLeftSelectAll(filteredDataSource, checkAll) {
      return this.handleSelectAll('left', filteredDataSource, !checkAll);
    },
    handleRightSelectAll: function handleRightSelectAll(filteredDataSource, checkAll) {
      return this.handleSelectAll('right', filteredDataSource, !checkAll);
    },
    onLeftItemSelectAll: function onLeftItemSelectAll(selectedKeys, checkAll) {
      return this.onItemSelectAll('left', selectedKeys, checkAll);
    },
    onRightItemSelectAll: function onRightItemSelectAll(selectedKeys, checkAll) {
      return this.onItemSelectAll('right', selectedKeys, checkAll);
    },
    handleFilter: function handleFilter(direction, e) {
      var value = e.target.value; // if (getListeners(this).searchChange) {
      //   warning(
      //     false,
      //     'Transfer',
      //     '`searchChange` in Transfer is deprecated. Please use `search` instead.',
      //   );
      //   this.$emit('searchChange', direction, e);
      // }

      this.$emit('search', direction, value);
    },
    handleLeftFilter: function handleLeftFilter(e) {
      this.handleFilter('left', e);
    },
    handleRightFilter: function handleRightFilter(e) {
      this.handleFilter('right', e);
    },
    handleClear: function handleClear(direction) {
      this.$emit('search', direction, '');
    },
    handleLeftClear: function handleLeftClear() {
      this.handleClear('left');
    },
    handleRightClear: function handleRightClear() {
      this.handleClear('right');
    },
    onItemSelect: function onItemSelect(direction, selectedKey, checked) {
      var sourceSelectedKeys = this.sourceSelectedKeys,
          targetSelectedKeys = this.targetSelectedKeys;
      var holder = direction === 'left' ? _toConsumableArray(sourceSelectedKeys) : _toConsumableArray(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      this.handleSelectChange(direction, holder);

      if (!this.selectedKeys) {
        this.setState(_defineProperty({}, this.getSelectedKeysName(direction), holder));
      }
    },
    // handleSelect(direction, selectedItem, checked) {
    //   warning(false, 'Transfer', '`handleSelect` will be removed, please use `onSelect` instead.');
    //   this.onItemSelect(direction, selectedItem.key, checked);
    // },
    // handleLeftSelect(selectedItem, checked) {
    //   return this.handleSelect('left', selectedItem, checked);
    // },
    // handleRightSelect(selectedItem, checked) {
    //   return this.handleSelect('right', selectedItem, checked);
    // },
    onLeftItemSelect: function onLeftItemSelect(selectedKey, checked) {
      return this.onItemSelect('left', selectedKey, checked);
    },
    onRightItemSelect: function onRightItemSelect(selectedKey, checked) {
      return this.onItemSelect('right', selectedKey, checked);
    },
    handleScroll: function handleScroll(direction, e) {
      this.$emit('scroll', direction, e);
    },
    handleLeftScroll: function handleLeftScroll(e) {
      this.handleScroll('left', e);
    },
    handleRightScroll: function handleRightScroll(e) {
      this.handleScroll('right', e);
    },
    handleSelectChange: function handleSelectChange(direction, holder) {
      var sourceSelectedKeys = this.sourceSelectedKeys,
          targetSelectedKeys = this.targetSelectedKeys;

      if (direction === 'left') {
        this.$emit('selectChange', holder, targetSelectedKeys);
      } else {
        this.$emit('selectChange', sourceSelectedKeys, holder);
      }
    },
    handleListStyle: function handleListStyle(listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }

      return listStyle;
    },
    separateDataSource: function separateDataSource() {
      var _this$$props2 = this.$props,
          dataSource = _this$$props2.dataSource,
          rowKey = _this$$props2.rowKey,
          _this$$props2$targetK = _this$$props2.targetKeys,
          targetKeys = _this$$props2$targetK === void 0 ? [] : _this$$props2$targetK;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        } // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource


        var indexOfKey = targetKeys.indexOf(record.key);

        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    },
    renderTransfer: function renderTransfer(transferLocale) {
      var _classNames;

      var props = getOptionProps(this);
      var customizePrefixCls = props.prefixCls,
          disabled = props.disabled,
          _props$operations = props.operations,
          operations = _props$operations === void 0 ? [] : _props$operations,
          showSearch = props.showSearch,
          listStyle = props.listStyle,
          operationStyle = props.operationStyle,
          filterOption = props.filterOption,
          lazy = props.lazy,
          showSelectAll = props.showSelectAll;
      var _this$$attrs = this.$attrs,
          className = _this$$attrs.class,
          style = _this$$attrs.style;
      var children = getComponent(this, 'children', {}, false);
      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('transfer', customizePrefixCls);
      var renderEmpty = this.configProvider.renderEmpty;
      var locale = this.getLocale(transferLocale, renderEmpty);
      var sourceSelectedKeys = this.sourceSelectedKeys,
          targetSelectedKeys = this.targetSelectedKeys,
          $slots = this.$slots;
      var body = $slots.body,
          footer = $slots.footer;
      var renderItem = props.render || this.$slots.render;

      var _this$separateDataSou = this.separateDataSource(),
          leftDataSource = _this$separateDataSou.leftDataSource,
          rightDataSource = _this$separateDataSou.rightDataSource;

      var leftActive = targetSelectedKeys.length > 0;
      var rightActive = sourceSelectedKeys.length > 0;
      var cls = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-customize-list"), !!children), _classNames));
      var titles = this.getTitles(locale);
      return _createVNode("div", {
        "class": cls,
        "style": style
      }, [_createVNode(List, {
        "key": "leftList",
        "prefixCls": "".concat(prefixCls, "-list"),
        "titleText": titles[0],
        "dataSource": leftDataSource,
        "filterOption": filterOption,
        "style": this.handleListStyle(listStyle, 'left'),
        "checkedKeys": sourceSelectedKeys,
        "handleFilter": this.handleLeftFilter,
        "handleClear": this.handleLeftClear,
        "handleSelectAll": this.handleLeftSelectAll,
        "onItemSelect": this.onLeftItemSelect,
        "onItemSelectAll": this.onLeftItemSelectAll,
        "renderItem": renderItem,
        "showSearch": showSearch,
        "body": body,
        "renderList": children,
        "footer": footer,
        "lazy": lazy,
        "onScroll": this.handleLeftScroll,
        "disabled": disabled,
        "direction": "left",
        "showSelectAll": showSelectAll,
        "itemUnit": locale.itemUnit,
        "itemsUnit": locale.itemsUnit,
        "notFoundContent": locale.notFoundContent,
        "searchPlaceholder": locale.searchPlaceholder
      }, null), _createVNode(Operation, {
        "key": "operation",
        "class": "".concat(prefixCls, "-operation"),
        "rightActive": rightActive,
        "rightArrowText": operations[0],
        "moveToRight": this.moveToRight,
        "leftActive": leftActive,
        "leftArrowText": operations[1],
        "moveToLeft": this.moveToLeft,
        "style": operationStyle,
        "disabled": disabled
      }, null), _createVNode(List, {
        "key": "rightList",
        "prefixCls": "".concat(prefixCls, "-list"),
        "titleText": titles[1],
        "dataSource": rightDataSource,
        "filterOption": filterOption,
        "style": this.handleListStyle(listStyle, 'right'),
        "checkedKeys": targetSelectedKeys,
        "handleFilter": this.handleRightFilter,
        "handleClear": this.handleRightClear,
        "handleSelectAll": this.handleRightSelectAll,
        "onItemSelect": this.onRightItemSelect,
        "onItemSelectAll": this.onRightItemSelectAll,
        "renderItem": renderItem,
        "showSearch": showSearch,
        "body": body,
        "renderList": children,
        "footer": footer,
        "lazy": lazy,
        "onScroll": this.handleRightScroll,
        "disabled": disabled,
        "direction": "right",
        "showSelectAll": showSelectAll,
        "itemUnit": locale.itemUnit,
        "itemsUnit": locale.itemsUnit,
        "notFoundContent": locale.notFoundContent,
        "searchPlaceholder": locale.searchPlaceholder
      }, null)]);
    }
  },
  render: function render() {
    return _createVNode(LocaleReceiver, {
      "componentName": "Transfer",
      "defaultLocale": defaultLocale.Transfer,
      "children": this.renderTransfer
    }, null);
  }
});
export default withInstall(Transfer);