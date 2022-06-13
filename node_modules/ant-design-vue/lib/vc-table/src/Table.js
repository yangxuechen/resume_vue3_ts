"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _shallowequal = _interopRequireDefault(require("../../_util/shallowequal"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _componentClasses = _interopRequireDefault(require("../../_util/component-classes"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _utils = require("./utils");

var _warning = _interopRequireDefault(require("../../_util/warning"));

var _addEventListener = _interopRequireDefault(require("../../vc-util/Dom/addEventListener"));

var _HeadTable = _interopRequireDefault(require("./HeadTable"));

var _BodyTable = _interopRequireDefault(require("./BodyTable"));

var _ExpandableTable = _interopRequireDefault(require("./ExpandableTable"));

var _propsUtil = require("../../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _useLayoutState3 = require("../../_util/hooks/useLayoutState");

var _useColumnManager = _interopRequireDefault(require("./useColumnManager"));

var _useStickyOffsets = _interopRequireDefault(require("./useStickyOffsets"));

var _fixUtil = require("./fixUtil");

var _vcResizeObserver = _interopRequireDefault(require("../../vc-resize-observer"));

/* eslint-disable camelcase */
var _default2 = (0, _vue.defineComponent)({
  name: 'Table',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)({
    data: _vueTypes.default.array,
    useFixedHeader: _vueTypes.default.looseBool,
    columns: _vueTypes.default.array,
    prefixCls: _vueTypes.default.string,
    bodyStyle: _vueTypes.default.object,
    rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
    rowClassName: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
    customRow: _vueTypes.default.func,
    customHeaderRow: _vueTypes.default.func,
    // onRowClick: PropTypes.func,
    // onRowDoubleClick: PropTypes.func,
    // onRowContextMenu: PropTypes.func,
    // onRowMouseEnter: PropTypes.func,
    // onRowMouseLeave: PropTypes.func,
    showHeader: _vueTypes.default.looseBool,
    title: _vueTypes.default.func,
    id: _vueTypes.default.string,
    footer: _vueTypes.default.func,
    emptyText: _vueTypes.default.any,
    scroll: _vueTypes.default.object,
    rowRef: _vueTypes.default.func,
    // getBodyWrapper: PropTypes.func,
    components: _vueTypes.default.shape({
      table: _vueTypes.default.any,
      header: _vueTypes.default.shape({
        wrapper: _vueTypes.default.any,
        row: _vueTypes.default.any,
        cell: _vueTypes.default.any
      }).loose,
      body: _vueTypes.default.shape({
        wrapper: _vueTypes.default.any,
        row: _vueTypes.default.any,
        cell: _vueTypes.default.any
      }).loose
    }).loose,
    expandIconAsCell: _vueTypes.default.looseBool,
    expandedRowKeys: _vueTypes.default.array,
    expandedRowClassName: _vueTypes.default.func,
    defaultExpandAllRows: _vueTypes.default.looseBool,
    defaultExpandedRowKeys: _vueTypes.default.array,
    expandIconColumnIndex: _vueTypes.default.number,
    expandedRowRender: _vueTypes.default.func,
    childrenColumnName: _vueTypes.default.string,
    indentSize: _vueTypes.default.number,
    expandRowByClick: _vueTypes.default.looseBool,
    expandIcon: _vueTypes.default.func,
    tableLayout: _vueTypes.default.string,
    transformCellText: _vueTypes.default.func
  }, {
    data: [],
    useFixedHeader: false,
    rowKey: 'key',
    rowClassName: function rowClassName() {
      return '';
    },
    prefixCls: 'rc-table',
    bodyStyle: {},
    showHeader: true,
    scroll: {},
    rowRef: function rowRef() {
      return null;
    },
    emptyText: function emptyText() {
      return 'No Data';
    },
    customHeaderRow: function customHeaderRow() {}
  }),
  setup: function setup(props) {
    var columnManager = (0, _useColumnManager.default)((0, _vue.toRef)(props, 'columns'));
    var colsKeys = (0, _vue.computed)(function () {
      return (0, _utils.getColumnsKey)(columnManager.leafColumns.value);
    });

    var _useLayoutState = (0, _useLayoutState3.useLayoutState)(new Map()),
        _useLayoutState2 = (0, _slicedToArray2.default)(_useLayoutState, 2),
        colsWidths = _useLayoutState2[0],
        updateColsWidths = _useLayoutState2[1];

    var pureColWidths = (0, _vue.computed)(function () {
      return colsKeys.value.map(function (columnKey) {
        return colsWidths.value.get(columnKey);
      });
    });
    var stickyOffsets = (0, _useStickyOffsets.default)(pureColWidths, columnManager.leafColumns);

    var onColumnResize = function onColumnResize(columnKey, width) {
      updateColsWidths(function (widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }

        return widths;
      });
    };

    var fixedInfoList = (0, _vue.computed)(function () {
      return columnManager.leafColumns.value.map(function (_, colIndex) {
        return (0, _fixUtil.getCellFixedInfo)(colIndex, colIndex, columnManager.leafColumns.value, stickyOffsets.value);
      });
    });
    var store = (0, _vue.reactive)({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {},
      expandedRowsHeight: {},
      expandedRowKeys: [],
      columnManager: columnManager,
      fixedInfoList: fixedInfoList,
      stickyOffsets: stickyOffsets
    });
    (0, _vue.provide)('table-store', store);
    var bodyRef = (0, _vue.ref)();
    var pingedLeft = (0, _vue.ref)(false);
    var pingedRight = (0, _vue.ref)(false);
    var horizonScroll = (0, _vue.computed)(function () {
      return props.scroll && (0, _utils.validateValue)(props.scroll.x);
    });

    var onScroll = function onScroll(currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth,
          scrollLeft = currentTarget.scrollLeft;
      pingedLeft.value = scrollLeft > 0;
      pingedRight.value = scrollLeft < scrollWidth - clientWidth;
    };

    (0, _vue.onUpdated)(function () {
      (0, _vue.nextTick)(function () {
        horizonScroll.value && onScroll(bodyRef.value.$el);
      });
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        horizonScroll.value && onScroll(bodyRef.value.$el);
      });
    });

    var onFullTableResize = function onFullTableResize() {
      horizonScroll.value && onScroll(bodyRef.value.$el);
    };

    return {
      bodyRef: bodyRef,
      store: store,
      onColumnResize: onColumnResize,
      columnManager: columnManager,
      onScroll: onScroll,
      pingedLeft: pingedLeft,
      pingedRight: pingedRight,
      onFullTableResize: onFullTableResize
    };
  },
  data: function data() {
    this.preData = (0, _toConsumableArray2.default)(this.data);
    return {
      sComponents: (0, _vue.markRaw)((0, _merge.default)({
        table: 'table',
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        },
        body: {
          wrapper: 'tbody',
          row: 'tr',
          cell: 'td'
        }
      }, this.components))
    };
  },
  computed: {
    dataLen: function dataLen() {
      return this.$props.data.length;
    }
  },
  watch: {
    components: function components() {
      this._components = (0, _merge.default)({
        table: 'table',
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        },
        body: {
          wrapper: 'tbody',
          row: 'tr',
          cell: 'td'
        }
      }, this.components);
    },
    dataLen: function dataLen(val, preVal) {
      var _this = this;

      if ((val === 0 || preVal === 0) && this.hasScrollX()) {
        (0, _vue.nextTick)(function () {
          _this.resetScrollX();
        });
      }
    }
  },
  created: function created() {
    (0, _vue.provide)('table', this);
    this.setScrollPosition('left');
    this.debouncedWindowResize = (0, _utils.debounce)(this.handleWindowResize, 150);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.columnManager.isAnyColumnsFixed.value) {
        _this2.handleWindowResize();

        _this2.resizeEvent = (0, _addEventListener.default)(window, 'resize', _this2.debouncedWindowResize);
      } // https://github.com/ant-design/ant-design/issues/11635


      if (_this2.ref_headTable) {
        _this2.ref_headTable.scrollLeft = 0;
      }

      if (_this2.ref_bodyTable) {
        _this2.ref_bodyTable.scrollLeft = 0;
      }
    });
  },
  updated: function updated() {
    var _this3 = this;

    this.$nextTick(function () {
      if (_this3.columnManager.isAnyColumnsFixed.value) {
        _this3.handleWindowResize();

        if (!_this3.resizeEvent) {
          _this3.resizeEvent = (0, _addEventListener.default)(window, 'resize', _this3.debouncedWindowResize);
        }
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }

    if (this.debouncedWindowResize) {
      this.debouncedWindowResize.cancel();
    }
  },
  methods: {
    getRowKey: function getRowKey(record, index) {
      var rowKey = this.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      (0, _warning.default)(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    },
    setScrollPosition: function setScrollPosition(position) {
      this.scrollPosition = position;

      if (this.tableNode) {
        var prefixCls = this.prefixCls;

        if (position === 'both') {
          (0, _componentClasses.default)(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-left")).add("".concat(prefixCls, "-scroll-position-right"));
        } else {
          (0, _componentClasses.default)(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-").concat(position));
        }
      }
    },
    setScrollPositionClassName: function setScrollPositionClassName() {
      var node = this.ref_bodyTable;
      var scrollToLeft = node.scrollLeft === 0;
      var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;

      if (scrollToLeft && scrollToRight) {
        this.setScrollPosition('both');
      } else if (scrollToLeft) {
        this.setScrollPosition('left');
      } else if (scrollToRight) {
        this.setScrollPosition('right');
      } else if (this.scrollPosition !== 'middle') {
        this.setScrollPosition('middle');
      }
    },
    isTableLayoutFixed: function isTableLayoutFixed() {
      var _this$$props = this.$props,
          tableLayout = _this$$props.tableLayout,
          _this$$props$columns = _this$$props.columns,
          columns = _this$$props$columns === void 0 ? [] : _this$$props$columns,
          useFixedHeader = _this$$props.useFixedHeader,
          _this$$props$scroll = _this$$props.scroll,
          scroll = _this$$props$scroll === void 0 ? {} : _this$$props$scroll;

      if (typeof tableLayout !== 'undefined') {
        return tableLayout === 'fixed';
      } // if one column is ellipsis, use fixed table layout to fix align issue


      if (columns.some(function (_ref) {
        var ellipsis = _ref.ellipsis;
        return !!ellipsis;
      })) {
        return true;
      } // if header fixed, use fixed table layout to fix align issue


      if (useFixedHeader || scroll.y) {
        return true;
      } // if scroll.x is number/px/% width value, we should fixed table layout
      // to avoid long word layout broken issue


      if (scroll.x && scroll.x !== true && scroll.x !== 'max-content') {
        return true;
      }

      return false;
    },
    handleWindowResize: function handleWindowResize() {
      this.syncFixedTableRowHeight();
      this.setScrollPositionClassName();
    },
    syncFixedTableRowHeight: function syncFixedTableRowHeight() {
      var tableRect = this.tableNode.getBoundingClientRect(); // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
      // see: https://github.com/ant-design/ant-design/issues/4836

      if (tableRect.height !== undefined && tableRect.height <= 0) {
        return;
      }

      var prefixCls = this.prefixCls;
      var headRows = this.ref_headTable ? this.ref_headTable.querySelectorAll('thead') : this.ref_bodyTable.querySelectorAll('thead');
      var bodyRows = this.ref_bodyTable.querySelectorAll(".".concat(prefixCls, "-row")) || [];
      var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
        return row.getBoundingClientRect().height ? row.getBoundingClientRect().height - 0.5 : 'auto';
      });
      var state = this.store;
      var fixedColumnsBodyRowsHeight = [].reduce.call(bodyRows, function (acc, row) {
        var rowKey = row.getAttribute('data-row-key');
        var height = row.getBoundingClientRect().height || state.fixedColumnsBodyRowsHeight[rowKey] || 'auto';
        acc[rowKey] = height;
        return acc;
      }, {});

      if ((0, _shallowequal.default)(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && (0, _shallowequal.default)(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
        return;
      }

      this.store.fixedColumnsHeadRowsHeight = fixedColumnsHeadRowsHeight;
      this.store.fixedColumnsBodyRowsHeight = fixedColumnsBodyRowsHeight;
    },
    resetScrollX: function resetScrollX() {
      if (this.ref_headTable) {
        this.ref_headTable.scrollLeft = 0;
      }

      if (this.ref_bodyTable) {
        this.ref_bodyTable.scrollLeft = 0;
      }
    },
    hasScrollX: function hasScrollX() {
      var _this$scroll = this.scroll,
          scroll = _this$scroll === void 0 ? {} : _this$scroll;
      return 'x' in scroll;
    },
    handleBodyScrollLeft: function handleBodyScrollLeft(e) {
      var target = e.target;
      var _this$scroll2 = this.scroll,
          scroll = _this$scroll2 === void 0 ? {} : _this$scroll2;
      var ref_headTable = this.ref_headTable,
          ref_bodyTable = this.ref_bodyTable;

      if (target.scrollLeft !== this.lastScrollLeft && scroll.x) {
        if (target === ref_bodyTable && ref_headTable) {
          ref_headTable.scrollLeft = target.scrollLeft;
        } else if (target === ref_headTable && ref_bodyTable) {
          ref_bodyTable.scrollLeft = target.scrollLeft;
        }

        this.setScrollPositionClassName();
      } // Remember last scrollLeft for scroll direction detecting.


      this.lastScrollLeft = target.scrollLeft;
    },
    handleBodyScrollTop: function handleBodyScrollTop(e) {
      var target = e.target; // Fix https://github.com/ant-design/ant-design/issues/9033

      if (e.currentTarget !== target) {
        return;
      }

      var _this$scroll3 = this.scroll,
          scroll = _this$scroll3 === void 0 ? {} : _this$scroll3;
      var ref_headTable = this.ref_headTable,
          ref_bodyTable = this.ref_bodyTable,
          ref_fixedColumnsBodyLeft = this.ref_fixedColumnsBodyLeft,
          ref_fixedColumnsBodyRight = this.ref_fixedColumnsBodyRight;

      if (target.scrollTop !== this.lastScrollTop && scroll.y && target !== ref_headTable) {
        var scrollTop = target.scrollTop;

        if (ref_fixedColumnsBodyLeft && target !== ref_fixedColumnsBodyLeft) {
          ref_fixedColumnsBodyLeft.scrollTop = scrollTop;
        }

        if (ref_fixedColumnsBodyRight && target !== ref_fixedColumnsBodyRight) {
          ref_fixedColumnsBodyRight.scrollTop = scrollTop;
        }

        if (ref_bodyTable && target !== ref_bodyTable) {
          ref_bodyTable.scrollTop = scrollTop;
        }
      } // Remember last scrollTop for scroll direction detecting.


      this.lastScrollTop = target.scrollTop;
    },
    handleBodyScroll: function handleBodyScroll(e) {
      this.onScroll(e.target);
      this.handleBodyScrollLeft(e);
      this.handleBodyScrollTop(e);
    },
    handleWheel: function handleWheel(event) {
      var _this$$props$scroll2 = this.$props.scroll,
          scroll = _this$$props$scroll2 === void 0 ? {} : _this$$props$scroll2;

      if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
        event.preventDefault();
        var wd = event.deltaY;
        var target = event.target;
        var bodyTable = this.ref_bodyTable,
            fixedColumnsBodyLeft = this.ref_fixedColumnsBodyLeft,
            fixedColumnsBodyRight = this.ref_fixedColumnsBodyRight;
        var scrollTop = 0;

        if (this.lastScrollTop) {
          scrollTop = this.lastScrollTop + wd;
        } else {
          scrollTop = wd;
        }

        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }

        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }

        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
    },
    // saveChildrenRef(name, node) {
    //   this[`ref_${name}`] = node;
    // },
    saveRef: function saveRef(name) {
      var _this4 = this;

      return function (node) {
        _this4["ref_".concat(name)] = node;
      };
    },
    saveTableNodeRef: function saveTableNodeRef(node) {
      this.tableNode = node;
    },
    renderMainTable: function renderMainTable() {
      var scroll = this.scroll,
          prefixCls = this.prefixCls;
      var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed.value;
      var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;
      var table = [this.renderTable({
        columns: this.columnManager.groupedColumns.value,
        isAnyColumnsFixed: isAnyColumnsFixed
      }), this.renderEmptyText(), this.renderFooter()];
      return scrollable ? (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": this.onFullTableResize
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls, "-scroll")
          }, [table])];
        }
      }) : table;
    },
    renderTable: function renderTable(options) {
      var columns = options.columns,
          isAnyColumnsFixed = options.isAnyColumnsFixed;
      var prefixCls = this.prefixCls,
          _this$scroll4 = this.scroll,
          scroll = _this$scroll4 === void 0 ? {} : _this$scroll4;
      var tableClassName = scroll.x ? "".concat(prefixCls, "-fixed") : '';
      var headTable = (0, _vue.createVNode)(_HeadTable.default, {
        "key": "head",
        "columns": columns,
        "tableClassName": tableClassName,
        "handleBodyScrollLeft": this.handleBodyScrollLeft,
        "expander": this.expander
      }, null);
      var bodyTable = (0, _vue.createVNode)(_BodyTable.default, {
        "key": "body",
        "columns": columns,
        "tableClassName": tableClassName,
        "getRowKey": this.getRowKey,
        "handleWheel": this.handleWheel,
        "handleBodyScroll": this.handleBodyScroll,
        "expander": this.expander,
        "isAnyColumnsFixed": isAnyColumnsFixed,
        "ref": "bodyRef"
      }, null);
      return [headTable, bodyTable];
    },
    renderTitle: function renderTitle() {
      var title = this.title,
          prefixCls = this.prefixCls,
          data = this.data;
      return title ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-title"),
        "key": "title"
      }, [title(data)]) : null;
    },
    renderFooter: function renderFooter() {
      var footer = this.footer,
          prefixCls = this.prefixCls,
          data = this.data;
      return footer ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-footer"),
        "key": "footer"
      }, [footer(data)]) : null;
    },
    renderEmptyText: function renderEmptyText() {
      var emptyText = this.emptyText,
          prefixCls = this.prefixCls,
          data = this.data;

      if (data.length) {
        return null;
      }

      var emptyClassName = "".concat(prefixCls, "-placeholder");
      return (0, _vue.createVNode)("div", {
        "class": emptyClassName,
        "key": "emptyText"
      }, [typeof emptyText === 'function' ? emptyText() : emptyText]);
    }
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
    var columnManager = this.columnManager,
        getRowKey = this.getRowKey;
    var prefixCls = props.prefixCls;
    var tableClassName = (0, _classNames2.default)(props.prefixCls, props.class, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-fixed-header"), props.useFixedHeader || props.scroll && props.scroll.y), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-scroll-position-left ").concat(prefixCls, "-scroll-position-right"), this.scrollPosition === 'both'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-scroll-position-").concat(this.scrollPosition), this.scrollPosition !== 'both'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-layout-fixed"), this.isTableLayoutFixed()), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-left"), this.pingedLeft), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-ping-right"), this.pingedRight), _classNames));
    var dataAndAriaProps = (0, _utils.getDataAndAriaProps)(props);
    var expandableTableProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
      columnManager: columnManager,
      getRowKey: getRowKey
    });
    return (0, _vue.createVNode)(_ExpandableTable.default, expandableTableProps, {
      default: function _default(expander) {
        _this5.expander = expander;
        return (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
          "ref": _this5.saveTableNodeRef,
          "class": tableClassName,
          "style": props.style,
          "id": props.id
        }, dataAndAriaProps), [_this5.renderTitle(), (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-content")
        }, [_this5.renderMainTable()])]);
      }
    });
  }
});

exports.default = _default2;