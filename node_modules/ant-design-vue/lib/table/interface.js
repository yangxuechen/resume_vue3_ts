"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterMenuProps = exports.SelectionBoxProps = exports.SelectionCheckboxAllProps = exports.tableProps = exports.tableRowSelection = exports.RowSelectionType = exports.TableLocale = exports.columnProps = exports.ColumnFilterItem = void 0;

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _pagination = require("../pagination");

var _spin = require("../spin");

var _type = require("../_util/type");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PaginationProps = (0, _pagination.paginationProps)();

var ColumnFilterItem = _vueTypes.default.shape({
  text: _vueTypes.default.string,
  value: _vueTypes.default.string,
  children: _vueTypes.default.array
}).loose;

exports.ColumnFilterItem = ColumnFilterItem;
var columnProps = {
  title: _vueTypes.default.VNodeChild,
  key: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  dataIndex: _vueTypes.default.string,
  customRender: _vueTypes.default.func,
  customCell: _vueTypes.default.func,
  customHeaderCell: _vueTypes.default.func,
  align: _vueTypes.default.oneOf((0, _type.tuple)('left', 'right', 'center')),
  ellipsis: _vueTypes.default.looseBool,
  filters: _vueTypes.default.arrayOf(ColumnFilterItem),
  onFilter: {
    type: Function
  },
  filterMultiple: _vueTypes.default.looseBool,
  filterDropdown: _vueTypes.default.any,
  filterDropdownVisible: _vueTypes.default.looseBool,
  onFilterDropdownVisibleChange: {
    type: Function
  },
  sorter: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.func]),
  defaultSortOrder: _vueTypes.default.oneOf((0, _type.tuple)('ascend', 'descend')),
  colSpan: _vueTypes.default.number,
  width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  className: _vueTypes.default.string,
  fixed: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.oneOf((0, _type.tuple)('left', 'right'))])),
  filterIcon: _vueTypes.default.any,
  filteredValue: _vueTypes.default.array,
  filtered: _vueTypes.default.looseBool,
  defaultFilteredValue: _vueTypes.default.array,
  sortOrder: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.oneOf((0, _type.tuple)('ascend', 'descend'))])),
  sortDirections: _vueTypes.default.array // children?: ColumnProps<T>[];
  // onCellClick?: (record: T, event: any) => void;
  // onCell?: (record: T) => any;
  // onHeaderCell?: (props: ColumnProps<T>) => any;

};
exports.columnProps = columnProps;

var TableLocale = _vueTypes.default.shape({
  filterTitle: _vueTypes.default.string,
  filterConfirm: _vueTypes.default.any,
  filterReset: _vueTypes.default.any,
  emptyText: _vueTypes.default.any,
  selectAll: _vueTypes.default.any,
  selectInvert: _vueTypes.default.any,
  sortTitle: _vueTypes.default.string,
  expand: _vueTypes.default.string,
  collapse: _vueTypes.default.string
}).loose;

exports.TableLocale = TableLocale;

var RowSelectionType = _vueTypes.default.oneOf((0, _type.tuple)('checkbox', 'radio')); // export type SelectionSelectFn<T> = (record: T, selected: boolean, selectedRows: Object[]) => any;


exports.RowSelectionType = RowSelectionType;
var tableRowSelection = {
  type: RowSelectionType,
  selectedRowKeys: _vueTypes.default.array,
  // onChange?: (selectedRowKeys: string[] | number[], selectedRows: Object[]) => any;
  getCheckboxProps: _vueTypes.default.func,
  // onSelect?: SelectionSelectFn<T>;
  // onSelectAll?: (selected: boolean, selectedRows: Object[], changeRows: Object[]) => any;
  // onSelectInvert?: (selectedRows: Object[]) => any;
  selections: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.array, _vueTypes.default.looseBool])),
  hideDefaultSelections: _vueTypes.default.looseBool,
  fixed: _vueTypes.default.looseBool,
  columnWidth: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  selectWay: _vueTypes.default.oneOf((0, _type.tuple)('onSelect', 'onSelectMultiple', 'onSelectAll', 'onSelectInvert')),
  columnTitle: _vueTypes.default.any
};
exports.tableRowSelection = tableRowSelection;
var paginationProps = (0, _pagination.paginationConfig)();
var tableProps = {
  prefixCls: _vueTypes.default.string,
  dropdownPrefixCls: _vueTypes.default.string,
  rowSelection: _vueTypes.default.oneOfType([_vueTypes.default.shape(tableRowSelection).loose, Object]),
  pagination: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.shape(paginationProps).loose, _vueTypes.default.looseBool])),
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'middle', 'small', 'large')),
  dataSource: _vueTypes.default.array,
  components: _vueTypes.default.object,
  columns: {
    type: Array
  },
  rowKey: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
  rowClassName: _vueTypes.default.func,
  expandedRowRender: _vueTypes.default.any,
  defaultExpandAllRows: _vueTypes.default.looseBool,
  defaultExpandedRowKeys: _vueTypes.default.array,
  expandedRowKeys: _vueTypes.default.array,
  expandIconAsCell: _vueTypes.default.looseBool,
  expandIconColumnIndex: _vueTypes.default.number,
  expandRowByClick: _vueTypes.default.looseBool,
  loading: _vueTypes.default.oneOfType([_vueTypes.default.shape((0, _spin.getSpinProps)()).loose, _vueTypes.default.looseBool]),
  locale: TableLocale,
  indentSize: _vueTypes.default.number,
  customRow: _vueTypes.default.func,
  customHeaderRow: _vueTypes.default.func,
  useFixedHeader: _vueTypes.default.looseBool,
  bordered: _vueTypes.default.looseBool,
  showHeader: _vueTypes.default.looseBool,
  footer: _vueTypes.default.func,
  title: _vueTypes.default.func,
  scroll: {
    type: Object
  },
  childrenColumnName: _vueTypes.default.oneOfType([_vueTypes.default.array, _vueTypes.default.string]),
  bodyStyle: _vueTypes.default.style,
  sortDirections: {
    type: Array
  },
  tableLayout: _vueTypes.default.string,
  getPopupContainer: _vueTypes.default.func,
  expandIcon: _vueTypes.default.func,
  transformCellText: _vueTypes.default.func,
  onExpandedRowsChange: _vueTypes.default.func,
  onExpand: _vueTypes.default.func,
  onChange: _vueTypes.default.func,
  onRowClick: _vueTypes.default.func // style?: React.CSSProperties;
  // children?: React.ReactNode;

};
exports.tableProps = tableProps;
var SelectionCheckboxAllProps = {
  propsSymbol: _vueTypes.default.any,
  store: _vueTypes.default.any,
  locale: _vueTypes.default.any,
  disabled: _vueTypes.default.looseBool,
  getCheckboxPropsByItem: _vueTypes.default.func,
  getRecordKey: _vueTypes.default.func,
  data: _vueTypes.default.array,
  prefixCls: _vueTypes.default.string,
  hideDefaultSelections: _vueTypes.default.looseBool,
  selections: _vueTypes.default.oneOfType([_vueTypes.default.array, _vueTypes.default.looseBool]),
  getPopupContainer: _vueTypes.default.func,
  onSelect: _vueTypes.default.func
}; // export interface SelectionCheckboxAllState {
//   checked: PropTypes.looseBool,
//   indeterminate: PropTypes.looseBool,
// }

exports.SelectionCheckboxAllProps = SelectionCheckboxAllProps;
var SelectionBoxProps = {
  store: _vueTypes.default.any,
  type: RowSelectionType,
  defaultSelection: _vueTypes.default.array,
  rowIndex: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
  name: _vueTypes.default.string,
  disabled: _vueTypes.default.looseBool,
  id: _vueTypes.default.string // onChange: React.ChangeEventHandler<HTMLInputElement>;

}; // export interface SelectionBoxState {
//   checked?: PropTypes.looseBool,
// }

exports.SelectionBoxProps = SelectionBoxProps;
var FilterMenuProps = {
  locale: TableLocale,
  selectedKeys: _vueTypes.default.array,
  column: _vueTypes.default.object,
  confirmFilter: _vueTypes.default.func,
  prefixCls: _vueTypes.default.string,
  dropdownPrefixCls: _vueTypes.default.string,
  getPopupContainer: _vueTypes.default.func,
  handleFilter: _vueTypes.default.func
}; // export interface FilterMenuState {
//   selectedKeys: string[];
//   keyPathOfSelectedItem: { [key: string]: string };
//   visible?: PropTypes.looseBool,
// }

exports.FilterMenuProps = FilterMenuProps;