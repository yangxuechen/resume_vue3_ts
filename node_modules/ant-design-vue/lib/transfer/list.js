"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransferListProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _search = _interopRequireDefault(require("./search"));

var _renderListBody = _interopRequireDefault(require("./renderListBody"));

var _triggerEvent = _interopRequireDefault(require("../_util/triggerEvent"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultRender = function defaultRender() {
  return null;
};

var TransferItem = {
  key: _vueTypes.default.string,
  title: _vueTypes.default.string,
  description: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool
};

function isRenderResultPlainObject(result) {
  return result && !(0, _propsUtil.isValidElement)(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferListProps = {
  prefixCls: _vueTypes.default.string,
  titleText: _vueTypes.default.string,
  dataSource: _vueTypes.default.arrayOf(_vueTypes.default.shape(TransferItem).loose),
  filter: _vueTypes.default.string,
  filterOption: _vueTypes.default.func,
  checkedKeys: _vueTypes.default.arrayOf(_vueTypes.default.string),
  handleFilter: _vueTypes.default.func,
  handleSelect: _vueTypes.default.func,
  handleSelectAll: _vueTypes.default.func,
  handleClear: _vueTypes.default.func,
  renderItem: _vueTypes.default.func,
  showSearch: _vueTypes.default.looseBool,
  searchPlaceholder: _vueTypes.default.string,
  notFoundContent: _vueTypes.default.any,
  itemUnit: _vueTypes.default.string,
  itemsUnit: _vueTypes.default.string,
  body: _vueTypes.default.any,
  renderList: _vueTypes.default.any,
  footer: _vueTypes.default.any,
  lazy: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
  disabled: _vueTypes.default.looseBool,
  direction: _vueTypes.default.string,
  showSelectAll: _vueTypes.default.looseBool,
  onItemSelect: _vueTypes.default.func,
  onItemSelectAll: _vueTypes.default.func,
  onScroll: _vueTypes.default.func
};
exports.TransferListProps = TransferListProps;

function renderListNode(renderList, props) {
  var bodyContent = renderList ? renderList(props) : null;
  var customize = !!bodyContent && (0, _propsUtil.filterEmpty)(bodyContent).length > 0;

  if (!customize) {
    bodyContent = (0, _renderListBody.default)(props);
  }

  return {
    customize: customize,
    bodyContent: bodyContent
  };
}

var _default = (0, _vue.defineComponent)({
  name: 'TransferList',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _initDefaultProps.default)(TransferListProps, {
    dataSource: [],
    titleText: '',
    showSearch: false,
    lazy: {}
  }),
  setup: function setup() {
    return {
      timer: null,
      triggerScrollTimer: null,
      scrollEvent: null
    };
  },
  data: function data() {
    return {
      filterValue: ''
    };
  },
  beforeUnmount: function beforeUnmount() {
    clearTimeout(this.triggerScrollTimer); // if (this.scrollEvent) {
    //   this.scrollEvent.remove();
    // }
  },
  updated: function updated() {
    var _this = this;

    (0, _vue.nextTick)(function () {
      if (_this.scrollEvent) {
        _this.scrollEvent.remove();
      }
    });
  },
  methods: {
    handleScroll: function handleScroll(e) {
      this.$emit('scroll', e);
    },
    getCheckStatus: function getCheckStatus(filteredItems) {
      var checkedKeys = this.$props.checkedKeys;

      if (checkedKeys.length === 0) {
        return 'none';
      }

      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }

      return 'part';
    },
    getFilteredItems: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;

      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItemHtml(item);

        var renderedText = renderedItem.renderedText; // Filter skip

        if (filterValue && filterValue.trim() && !_this2.matchFilter(renderedText, item)) {
          return null;
        }

        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    },
    getListBody: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-body-search-wrapper")
      }, [(0, _vue.createVNode)(_search.default, {
        "prefixCls": "".concat(prefixCls, "-search"),
        "onChange": this._handleFilter,
        "handleClear": this._handleClear,
        "placeholder": searchPlaceholder,
        "value": filterValue,
        "disabled": disabled
      }, null)]) : null;
      var listBody = bodyDom;

      if (!listBody) {
        var bodyNode;

        var _splitAttrs = (0, _propsUtil.splitAttrs)(this.$attrs),
            onEvents = _splitAttrs.onEvents;

        var _renderListNode = renderListNode(renderList, (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, this.$props), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        }), onEvents)),
            bodyContent = _renderListNode.bodyContent,
            customize = _renderListNode.customize; // We should wrap customize list body in a classNamed div to use flex layout.


        if (customize) {
          bodyNode = (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-body-customize-wrapper")
          }, [bodyContent]);
        } else {
          bodyNode = filteredItems.length ? bodyContent : (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-body-not-found")
          }, [notFoundContent]);
        }

        listBody = (0, _vue.createVNode)("div", {
          "class": (0, _classNames2.default)(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
        }, [search, bodyNode]);
      }

      return listBody;
    },
    getCheckBox: function getCheckBox(filteredItems, showSelectAll, disabled) {
      var _this3 = this;

      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = showSelectAll !== false && (0, _vue.createVNode)(_checkbox.default, {
        "disabled": disabled,
        "checked": checkedAll,
        "indeterminate": checkStatus === 'part',
        "onChange": function onChange() {
          // Only select enabled items
          _this3.$emit('itemSelectAll', filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref) {
            var key = _ref.key;
            return key;
          }), !checkedAll);
        }
      }, null);
      return checkAllCheckbox;
    },
    _handleSelect: function _handleSelect(selectedItem) {
      var checkedKeys = this.$props.checkedKeys;
      var result = checkedKeys.some(function (key) {
        return key === selectedItem.key;
      });
      this.handleSelect(selectedItem, !result);
    },
    _handleFilter: function _handleFilter(e) {
      var _this4 = this;

      var handleFilter = this.$props.handleFilter;
      var filterValue = e.target.value;
      this.setState({
        filterValue: filterValue
      });
      handleFilter(e);

      if (!filterValue) {
        return;
      } // Manually trigger scroll event for lazy search bug
      // https://github.com/ant-design/ant-design/issues/5631


      this.triggerScrollTimer = setTimeout(function () {
        var transferNode = (0, _propsUtil.findDOMNode)(_this4);
        var listNode = transferNode.querySelectorAll('.ant-transfer-list-content')[0];

        if (listNode) {
          (0, _triggerEvent.default)(listNode, 'scroll');
        }
      }, 0);
    },
    _handleClear: function _handleClear(e) {
      this.setState({
        filterValue: ''
      });
      this.handleClear(e);
    },
    matchFilter: function matchFilter(text, item) {
      var filterValue = this.$data.filterValue;
      var filterOption = this.$props.filterOption;

      if (filterOption) {
        return filterOption(filterValue, item);
      }

      return text.indexOf(filterValue) >= 0;
    },
    renderItemHtml: function renderItemHtml(item) {
      var _this$$props$renderIt = this.$props.renderItem,
          renderItem = _this$$props$renderIt === void 0 ? defaultRender : _this$$props$renderIt;
      var renderResult = renderItem(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    },
    filterNull: function filterNull(arr) {
      return arr.filter(function (item) {
        return item !== null;
      });
    }
  },
  render: function render() {
    var filterValue = this.$data.filterValue;
    var _this$$props = this.$props,
        prefixCls = _this$$props.prefixCls,
        dataSource = _this$$props.dataSource,
        titleText = _this$$props.titleText,
        checkedKeys = _this$$props.checkedKeys,
        disabled = _this$$props.disabled,
        body = _this$$props.body,
        footer = _this$$props.footer,
        showSearch = _this$$props.showSearch,
        searchPlaceholder = _this$$props.searchPlaceholder,
        notFoundContent = _this$$props.notFoundContent,
        itemUnit = _this$$props.itemUnit,
        itemsUnit = _this$$props.itemsUnit,
        renderList = _this$$props.renderList,
        showSelectAll = _this$$props.showSelectAll; // Custom Layout

    var footerDom = footer && footer((0, _extends2.default)({}, this.$props));
    var bodyDom = body && body((0, _extends2.default)({}, this.$props));
    var listCls = (0, _classNames2.default)(prefixCls, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-with-footer"), !!footerDom)); // ====================== Get filtered, checked item list ======================

    var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
        filteredItems = _this$getFilteredItem.filteredItems,
        filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


    var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
    var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled);
    var listFooter = footerDom ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footerDom]) : null;
    var checkAllCheckbox = this.getCheckBox(filteredItems, showSelectAll, disabled);
    return (0, _vue.createVNode)("div", {
      "class": listCls,
      "style": this.$attrs.style
    }, [(0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-header")
    }, [checkAllCheckbox, (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-header-selected")
    }, [(0, _vue.createVNode)("span", null, [(checkedKeys.length > 0 ? "".concat(checkedKeys.length, "/") : '') + filteredItems.length, ' ', unit]), (0, _vue.createVNode)("span", {
      "class": "".concat(prefixCls, "-header-title")
    }, [titleText])])]), listBody, listFooter]);
  }
});

exports.default = _default;