"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Column", {
  enumerable: true,
  get: function get() {
    return _Column.default;
  }
});
Object.defineProperty(exports, "ColumnGroup", {
  enumerable: true,
  get: function get() {
    return _ColumnGroup.default;
  }
});
Object.defineProperty(exports, "INTERNAL_COL_DEFINE", {
  enumerable: true,
  get: function get() {
    return _utils.INTERNAL_COL_DEFINE;
  }
});
exports.default = void 0;

var _Table = _interopRequireDefault(require("./src/Table"));

var _Column = _interopRequireDefault(require("./src/Column"));

var _ColumnGroup = _interopRequireDefault(require("./src/ColumnGroup"));

var _utils = require("./src/utils");

// base rc-table 6.10.9
// const Table = {
//   name: 'Table',
//   inheritAttrs: false,
//   Column,
//   ColumnGroup,
//   props: T.props,
//   methods: {
//     getTableNode() {
//       return this.table.tableNode;
//     },
//     getBodyTable() {
//       return this.table.ref_bodyTable;
//     },
//     saveTable(node) {
//       this.table = node;
//     },
//   },
//   render() {
//     const props = getOptionProps(this);
//     const columns = props.columns;
//     const tProps = {
//       ...props,
//       ...this.$attrs,
//       columns,
//       ref: this.saveTable,
//     };
//     return <T {...tProps} />;
//   },
// };
var _default = _Table.default;
exports.default = _default;