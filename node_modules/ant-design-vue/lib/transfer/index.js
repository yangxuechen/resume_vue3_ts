"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransferProps = exports.TransferItem = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _list = _interopRequireDefault(require("./list"));

var _operation = _interopRequireDefault(require("./operation"));

var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

var _default2 = _interopRequireDefault(require("../locale-provider/default"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var TransferItem = {
  key: _vueTypes.default.string,
  title: _vueTypes.default.string,
  description: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool
};
exports.TransferItem = TransferItem;
var TransferProps = {
  prefixCls: _vueTypes.default.string,
  dataSource: _vueTypes.default.arrayOf(_vueTypes.default.shape(TransferItem).loose),
  disabled: _vueTypes.default.looseBool,
  targetKeys: _vueTypes.default.arrayOf(_vueTypes.default.string),
  selectedKeys: _vueTypes.default.arrayOf(_vueTypes.default.string),
  render: _vueTypes.default.func,
  listStyle: _vueTypes.default.oneOfType([_vueTypes.default.func, _vueTypes.default.object]),
  operationStyle: _vueTypes.default.object,
  titles: _vueTypes.default.arrayOf(_vueTypes.default.string),
  operations: _vueTypes.default.arrayOf(_vueTypes.default.string),
  showSearch: _vueTypes.default.looseBool,
  filterOption: _vueTypes.default.func,
  searchPlaceholder: _vueTypes.default.string,
  notFoundContent: _vueTypes.default.any,
  locale: _vueTypes.default.object,
  rowKey: _vueTypes.default.func,
  lazy: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.looseBool]),
  showSelectAll: _vueTypes.default.looseBool,
  children: _vueTypes.default.any,
  onChange: _vueTypes.default.func,
  onSelectChange: _vueTypes.default.func,
  onSearchChange: _vueTypes.default.func,
  onSearch: _vueTypes.default.func,
  onScroll: _vueTypes.default.func
};
exports.TransferProps = TransferProps;
var Transfer = (0, _vue.defineComponent)({
  name: 'ATransfer',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(TransferProps, {
    dataSource: [],
    locale: {},
    showSearch: false,
    listStyle: function listStyle() {}
  }),
  setup: function setup() {
    return {
      separatedDataSource: null,
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
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
      var notFoundContent = (0, _propsUtil.getComponent)(this, 'notFoundContent');

      if (notFoundContent) {
        oldLocale.notFoundContent = notFoundContent;
      }

      if ((0, _propsUtil.hasProp)(this, 'searchPlaceholder')) {
        oldLocale.searchPlaceholder = this.$props.searchPlaceholder;
      }

      return (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, transferLocale), oldLocale), this.$props.locale);
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
      this.setState((0, _defineProperty2.default)({}, this.getSelectedKeysName(oppositeDirection), []));
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
        mergedCheckedKeys = Array.from(new Set([].concat((0, _toConsumableArray2.default)(originalSelectedKeys), (0, _toConsumableArray2.default)(selectedKeys))));
      } else {
        // Remove current keys from origin keys
        mergedCheckedKeys = originalSelectedKeys.filter(function (key) {
          return selectedKeys.indexOf(key) === -1;
        });
      }

      this.handleSelectChange(direction, mergedCheckedKeys);

      if (!this.$props.selectedKeys) {
        this.setState((0, _defineProperty2.default)({}, this.getSelectedKeysName(direction), mergedCheckedKeys));
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
      var holder = direction === 'left' ? (0, _toConsumableArray2.default)(sourceSelectedKeys) : (0, _toConsumableArray2.default)(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      this.handleSelectChange(direction, holder);

      if (!this.selectedKeys) {
        this.setState((0, _defineProperty2.default)({}, this.getSelectedKeysName(direction), holder));
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

      var props = (0, _propsUtil.getOptionProps)(this);
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
      var children = (0, _propsUtil.getComponent)(this, 'children', {}, false);
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
      var cls = (0, _classNames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-customize-list"), !!children), _classNames));
      var titles = this.getTitles(locale);
      return (0, _vue.createVNode)("div", {
        "class": cls,
        "style": style
      }, [(0, _vue.createVNode)(_list.default, {
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
      }, null), (0, _vue.createVNode)(_operation.default, {
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
      }, null), (0, _vue.createVNode)(_list.default, {
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
    return (0, _vue.createVNode)(_LocaleReceiver.default, {
      "componentName": "Transfer",
      "defaultLocale": _default2.default.Transfer,
      "children": this.renderTransfer
    }, null);
  }
});

var _default = (0, _type.withInstall)(Transfer);

exports.default = _default;