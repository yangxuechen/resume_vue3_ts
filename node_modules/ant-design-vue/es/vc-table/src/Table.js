import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";

/* eslint-disable camelcase */
import { provide, markRaw, defineComponent, nextTick, reactive, computed, ref, onUpdated, onMounted, toRef } from 'vue';
import shallowequal from '../../_util/shallowequal';
import merge from 'lodash-es/merge';
import classes from '../../_util/component-classes';
import classNames from '../../_util/classNames';
import PropTypes from '../../_util/vue-types';
import { debounce, getColumnsKey, getDataAndAriaProps, validateValue } from './utils';
import warning from '../../_util/warning';
import addEventListener from '../../vc-util/Dom/addEventListener';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';
import ExpandableTable from './ExpandableTable';
import { initDefaultProps, getOptionProps } from '../../_util/props-util';
import BaseMixin from '../../_util/BaseMixin';
import { useLayoutState } from '../../_util/hooks/useLayoutState';
import useColumnManager from './useColumnManager';
import useStickyOffsets from './useStickyOffsets';
import { getCellFixedInfo } from './fixUtil';
import ResizeObserver from '../../vc-resize-observer';
export default defineComponent({
  name: 'Table',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: initDefaultProps({
    data: PropTypes.array,
    useFixedHeader: PropTypes.looseBool,
    columns: PropTypes.array,
    prefixCls: PropTypes.string,
    bodyStyle: PropTypes.object,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    customRow: PropTypes.func,
    customHeaderRow: PropTypes.func,
    // onRowClick: PropTypes.func,
    // onRowDoubleClick: PropTypes.func,
    // onRowContextMenu: PropTypes.func,
    // onRowMouseEnter: PropTypes.func,
    // onRowMouseLeave: PropTypes.func,
    showHeader: PropTypes.looseBool,
    title: PropTypes.func,
    id: PropTypes.string,
    footer: PropTypes.func,
    emptyText: PropTypes.any,
    scroll: PropTypes.object,
    rowRef: PropTypes.func,
    // getBodyWrapper: PropTypes.func,
    components: PropTypes.shape({
      table: PropTypes.any,
      header: PropTypes.shape({
        wrapper: PropTypes.any,
        row: PropTypes.any,
        cell: PropTypes.any
      }).loose,
      body: PropTypes.shape({
        wrapper: PropTypes.any,
        row: PropTypes.any,
        cell: PropTypes.any
      }).loose
    }).loose,
    expandIconAsCell: PropTypes.looseBool,
    expandedRowKeys: PropTypes.array,
    expandedRowClassName: PropTypes.func,
    defaultExpandAllRows: PropTypes.looseBool,
    defaultExpandedRowKeys: PropTypes.array,
    expandIconColumnIndex: PropTypes.number,
    expandedRowRender: PropTypes.func,
    childrenColumnName: PropTypes.string,
    indentSize: PropTypes.number,
    expandRowByClick: PropTypes.looseBool,
    expandIcon: PropTypes.func,
    tableLayout: PropTypes.string,
    transformCellText: PropTypes.func
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
    var columnManager = useColumnManager(toRef(props, 'columns'));
    var colsKeys = computed(function () {
      return getColumnsKey(columnManager.leafColumns.value);
    });

    var _useLayoutState = useLayoutState(new Map()),
        _useLayoutState2 = _slicedToArray(_useLayoutState, 2),
        colsWidths = _useLayoutState2[0],
        updateColsWidths = _useLayoutState2[1];

    var pureColWidths = computed(function () {
      return colsKeys.value.map(function (columnKey) {
        return colsWidths.value.get(columnKey);
      });
    });
    var stickyOffsets = useStickyOffsets(pureColWidths, columnManager.leafColumns);

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

    var fixedInfoList = computed(function () {
      return columnManager.leafColumns.value.map(function (_, colIndex) {
        return getCellFixedInfo(colIndex, colIndex, columnManager.leafColumns.value, stickyOffsets.value);
      });
    });
    var store = reactive({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: {},
      expandedRowsHeight: {},
      expandedRowKeys: [],
      columnManager: columnManager,
      fixedInfoList: fixedInfoList,
      stickyOffsets: stickyOffsets
    });
    provide('table-store', store);
    var bodyRef = ref();
    var pingedLeft = ref(false);
    var pingedRight = ref(false);
    var horizonScroll = computed(function () {
      return props.scroll && validateValue(props.scroll.x);
    });

    var onScroll = function onScroll(currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth,
          scrollLeft = currentTarget.scrollLeft;
      pingedLeft.value = scrollLeft > 0;
      pingedRight.value = scrollLeft < scrollWidth - clientWidth;
    };

    onUpdated(function () {
      nextTick(function () {
        horizonScroll.value && onScroll(bodyRef.value.$el);
      });
    });
    onMounted(function () {
      nextTick(function () {
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
    this.preData = _toConsumableArray(this.data);
    return {
      sComponents: markRaw(merge({
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
      this._components = merge({
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
        nextTick(function () {
          _this.resetScrollX();
        });
      }
    }
  },
  created: function created() {
    provide('table', this);
    this.setScrollPosition('left');
    this.debouncedWindowResize = debounce(this.handleWindowResize, 150);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.columnManager.isAnyColumnsFixed.value) {
        _this2.handleWindowResize();

        _this2.resizeEvent = addEventListener(window, 'resize', _this2.debouncedWindowResize);
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
          _this3.resizeEvent = addEventListener(window, 'resize', _this3.debouncedWindowResize);
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
      warning(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    },
    setScrollPosition: function setScrollPosition(position) {
      this.scrollPosition = position;

      if (this.tableNode) {
        var prefixCls = this.prefixCls;

        if (position === 'both') {
          classes(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-left")).add("".concat(prefixCls, "-scroll-position-right"));
        } else {
          classes(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-").concat(position));
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

      if (shallowequal(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && shallowequal(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
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
      return scrollable ? _createVNode(ResizeObserver, {
        "onResize": this.onFullTableResize
      }, {
        default: function _default() {
          return [_createVNode("div", {
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

      var headTable = _createVNode(HeadTable, {
        "key": "head",
        "columns": columns,
        "tableClassName": tableClassName,
        "handleBodyScrollLeft": this.handleBodyScrollLeft,
        "expander": this.expander
      }, null);

      var bodyTable = _createVNode(BodyTable, {
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
      return title ? _createVNode("div", {
        "class": "".concat(prefixCls, "-title"),
        "key": "title"
      }, [title(data)]) : null;
    },
    renderFooter: function renderFooter() {
      var footer = this.footer,
          prefixCls = this.prefixCls,
          data = this.data;
      return footer ? _createVNode("div", {
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
      return _createVNode("div", {
        "class": emptyClassName,
        "key": "emptyText"
      }, [typeof emptyText === 'function' ? emptyText() : emptyText]);
    }
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var columnManager = this.columnManager,
        getRowKey = this.getRowKey;
    var prefixCls = props.prefixCls;
    var tableClassName = classNames(props.prefixCls, props.class, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), props.useFixedHeader || props.scroll && props.scroll.y), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-position-left ").concat(prefixCls, "-scroll-position-right"), this.scrollPosition === 'both'), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-position-").concat(this.scrollPosition), this.scrollPosition !== 'both'), _defineProperty(_classNames, "".concat(prefixCls, "-layout-fixed"), this.isTableLayoutFixed()), _defineProperty(_classNames, "".concat(prefixCls, "-ping-left"), this.pingedLeft), _defineProperty(_classNames, "".concat(prefixCls, "-ping-right"), this.pingedRight), _classNames));
    var dataAndAriaProps = getDataAndAriaProps(props);

    var expandableTableProps = _extends(_extends({}, props), {
      columnManager: columnManager,
      getRowKey: getRowKey
    });

    return _createVNode(ExpandableTable, expandableTableProps, {
      default: function _default(expander) {
        _this5.expander = expander;
        return _createVNode("div", _objectSpread({
          "ref": _this5.saveTableNodeRef,
          "class": tableClassName,
          "style": props.style,
          "id": props.id
        }, dataAndAriaProps), [_this5.renderTitle(), _createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [_this5.renderMainTable()])]);
      }
    });
  }
});