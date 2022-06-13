import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import PropTypes, { withUndefined } from '../_util/vue-types';
import { isValidElement, splitAttrs, findDOMNode, filterEmpty } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import BaseMixin from '../_util/BaseMixin';
import Checkbox from '../checkbox';
import Search from './search';
import defaultRenderList from './renderListBody';
import triggerEvent from '../_util/triggerEvent';
import { defineComponent, nextTick } from 'vue';

var defaultRender = function defaultRender() {
  return null;
};

var TransferItem = {
  key: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.looseBool
};

function isRenderResultPlainObject(result) {
  return result && !isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

export var TransferListProps = {
  prefixCls: PropTypes.string,
  titleText: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.shape(TransferItem).loose),
  filter: PropTypes.string,
  filterOption: PropTypes.func,
  checkedKeys: PropTypes.arrayOf(PropTypes.string),
  handleFilter: PropTypes.func,
  handleSelect: PropTypes.func,
  handleSelectAll: PropTypes.func,
  handleClear: PropTypes.func,
  renderItem: PropTypes.func,
  showSearch: PropTypes.looseBool,
  searchPlaceholder: PropTypes.string,
  notFoundContent: PropTypes.any,
  itemUnit: PropTypes.string,
  itemsUnit: PropTypes.string,
  body: PropTypes.any,
  renderList: PropTypes.any,
  footer: PropTypes.any,
  lazy: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
  disabled: PropTypes.looseBool,
  direction: PropTypes.string,
  showSelectAll: PropTypes.looseBool,
  onItemSelect: PropTypes.func,
  onItemSelectAll: PropTypes.func,
  onScroll: PropTypes.func
};

function renderListNode(renderList, props) {
  var bodyContent = renderList ? renderList(props) : null;
  var customize = !!bodyContent && filterEmpty(bodyContent).length > 0;

  if (!customize) {
    bodyContent = defaultRenderList(props);
  }

  return {
    customize: customize,
    bodyContent: bodyContent
  };
}

export default defineComponent({
  name: 'TransferList',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps(TransferListProps, {
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

    nextTick(function () {
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
      var search = showSearch ? _createVNode("div", {
        "class": "".concat(prefixCls, "-body-search-wrapper")
      }, [_createVNode(Search, {
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

        var _splitAttrs = splitAttrs(this.$attrs),
            onEvents = _splitAttrs.onEvents;

        var _renderListNode = renderListNode(renderList, _extends(_extends(_extends({}, this.$props), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        }), onEvents)),
            bodyContent = _renderListNode.bodyContent,
            customize = _renderListNode.customize; // We should wrap customize list body in a classNamed div to use flex layout.


        if (customize) {
          bodyNode = _createVNode("div", {
            "class": "".concat(prefixCls, "-body-customize-wrapper")
          }, [bodyContent]);
        } else {
          bodyNode = filteredItems.length ? bodyContent : _createVNode("div", {
            "class": "".concat(prefixCls, "-body-not-found")
          }, [notFoundContent]);
        }

        listBody = _createVNode("div", {
          "class": classNames(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
        }, [search, bodyNode]);
      }

      return listBody;
    },
    getCheckBox: function getCheckBox(filteredItems, showSelectAll, disabled) {
      var _this3 = this;

      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';

      var checkAllCheckbox = showSelectAll !== false && _createVNode(Checkbox, {
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
        var transferNode = findDOMNode(_this4);
        var listNode = transferNode.querySelectorAll('.ant-transfer-list-content')[0];

        if (listNode) {
          triggerEvent(listNode, 'scroll');
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

    var footerDom = footer && footer(_extends({}, this.$props));
    var bodyDom = body && body(_extends({}, this.$props));
    var listCls = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-with-footer"), !!footerDom)); // ====================== Get filtered, checked item list ======================

    var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
        filteredItems = _this$getFilteredItem.filteredItems,
        filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


    var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
    var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled);
    var listFooter = footerDom ? _createVNode("div", {
      "class": "".concat(prefixCls, "-footer")
    }, [footerDom]) : null;
    var checkAllCheckbox = this.getCheckBox(filteredItems, showSelectAll, disabled);
    return _createVNode("div", {
      "class": listCls,
      "style": this.$attrs.style
    }, [_createVNode("div", {
      "class": "".concat(prefixCls, "-header")
    }, [checkAllCheckbox, _createVNode("span", {
      "class": "".concat(prefixCls, "-header-selected")
    }, [_createVNode("span", null, [(checkedKeys.length > 0 ? "".concat(checkedKeys.length, "/") : '') + filteredItems.length, ' ', unit]), _createVNode("span", {
      "class": "".concat(prefixCls, "-header-title")
    }, [titleText])])]), listBody, listFooter]);
  }
});