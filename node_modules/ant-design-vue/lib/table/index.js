"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableColumnGroup = exports.TableColumn = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Table = _interopRequireWildcard(require("./Table"));

var _propsUtil = require("../_util/props-util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Table = (0, _vue.defineComponent)({
  name: 'ATable',
  Column: _Table.default.Column,
  ColumnGroup: _Table.default.ColumnGroup,
  inheritAttrs: false,
  props: _Table.defaultTableProps,
  methods: {
    normalize: function normalize() {
      var _this = this;

      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var flattenElements = (0, _propsUtil.flattenChildren)(elements);
      var columns = [];
      flattenElements.forEach(function (element) {
        var _a, _b, _c, _d;

        if (!element) {
          return;
        }

        var key = (0, _propsUtil.getKey)(element);
        var style = ((_a = element.props) === null || _a === void 0 ? void 0 : _a.style) || {};
        var cls = ((_b = element.props) === null || _b === void 0 ? void 0 : _b.class) || '';
        var props = (0, _propsUtil.getPropsData)(element);

        var _e = element.children || {},
            children = _e.default,
            restSlots = __rest(_e, ["default"]);

        var column = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, restSlots), props), {
          style: style,
          class: cls
        });

        if (key) {
          column.key = key;
        }

        if ((_c = element.type) === null || _c === void 0 ? void 0 : _c.__ANT_TABLE_COLUMN_GROUP) {
          column.children = _this.normalize(typeof children === 'function' ? children() : children);
        } else {
          var customRender = (_d = element.children) === null || _d === void 0 ? void 0 : _d.default;
          column.customRender = column.customRender || customRender;
        }

        columns.push(column);
      });
      return columns;
    },
    updateColumns: function updateColumns() {
      var _this2 = this;

      var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = [];
      var $slots = this.$slots;
      cols.forEach(function (col) {
        var _col$slots = col.slots,
            slots = _col$slots === void 0 ? {} : _col$slots,
            restProps = __rest(col, ["slots"]);

        var column = (0, _extends2.default)({}, restProps);
        Object.keys(slots).forEach(function (key) {
          var name = slots[key];

          if (column[key] === undefined && $slots[name]) {
            column[key] = $slots[name];
          }
        }); // if (slotScopeName && $scopedSlots[slotScopeName]) {
        //   column.customRender = column.customRender || $scopedSlots[slotScopeName]
        // }

        if (col.children) {
          column.children = _this2.updateColumns(column.children);
        }

        columns.push(column);
      });
      return columns;
    }
  },
  render: function render() {
    var normalize = this.normalize,
        $slots = this.$slots;
    var props = (0, _extends2.default)((0, _extends2.default)({}, (0, _propsUtil.getOptionProps)(this)), this.$attrs);
    var columns = props.columns ? this.updateColumns(props.columns) : normalize((0, _propsUtil.getSlot)(this));
    var title = props.title,
        footer = props.footer;
    var slotTitle = $slots.title,
        slotFooter = $slots.footer,
        _$slots$expandedRowRe = $slots.expandedRowRender,
        expandedRowRender = _$slots$expandedRowRe === void 0 ? props.expandedRowRender : _$slots$expandedRowRe,
        expandIcon = $slots.expandIcon;
    title = title || slotTitle;
    footer = footer || slotFooter;
    var tProps = (0, _extends2.default)((0, _extends2.default)({}, props), {
      columns: columns,
      title: title,
      footer: footer,
      expandedRowRender: expandedRowRender,
      expandIcon: this.$props.expandIcon || expandIcon
    });
    return (0, _vue.createVNode)(_Table.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tProps), {}, {
      "ref": "table"
    }), null);
  }
});
/* istanbul ignore next */

Table.install = function (app) {
  app.component(Table.name, Table);
  app.component(Table.Column.name, Table.Column);
  app.component(Table.ColumnGroup.name, Table.ColumnGroup);
  return app;
};

var TableColumn = Table.Column;
exports.TableColumn = TableColumn;
var TableColumnGroup = Table.ColumnGroup;
exports.TableColumnGroup = TableColumnGroup;
var _default = Table;
exports.default = _default;