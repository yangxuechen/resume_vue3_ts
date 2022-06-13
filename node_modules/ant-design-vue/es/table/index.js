import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { defineComponent } from 'vue';
import T, { defaultTableProps } from './Table';
import { getOptionProps, getKey, getPropsData, getSlot, flattenChildren } from '../_util/props-util';
var Table = defineComponent({
  name: 'ATable',
  Column: T.Column,
  ColumnGroup: T.ColumnGroup,
  inheritAttrs: false,
  props: defaultTableProps,
  methods: {
    normalize: function normalize() {
      var _this = this;

      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var flattenElements = flattenChildren(elements);
      var columns = [];
      flattenElements.forEach(function (element) {
        var _a, _b, _c, _d;

        if (!element) {
          return;
        }

        var key = getKey(element);
        var style = ((_a = element.props) === null || _a === void 0 ? void 0 : _a.style) || {};
        var cls = ((_b = element.props) === null || _b === void 0 ? void 0 : _b.class) || '';
        var props = getPropsData(element);

        var _e = element.children || {},
            children = _e.default,
            restSlots = __rest(_e, ["default"]);

        var column = _extends(_extends(_extends({}, restSlots), props), {
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

        var column = _extends({}, restProps);

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

    var props = _extends(_extends({}, getOptionProps(this)), this.$attrs);

    var columns = props.columns ? this.updateColumns(props.columns) : normalize(getSlot(this));
    var title = props.title,
        footer = props.footer;
    var slotTitle = $slots.title,
        slotFooter = $slots.footer,
        _$slots$expandedRowRe = $slots.expandedRowRender,
        expandedRowRender = _$slots$expandedRowRe === void 0 ? props.expandedRowRender : _$slots$expandedRowRe,
        expandIcon = $slots.expandIcon;
    title = title || slotTitle;
    footer = footer || slotFooter;

    var tProps = _extends(_extends({}, props), {
      columns: columns,
      title: title,
      footer: footer,
      expandedRowRender: expandedRowRender,
      expandIcon: this.$props.expandIcon || expandIcon
    });

    return _createVNode(T, _objectSpread(_objectSpread({}, tProps), {}, {
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

export var TableColumn = Table.Column;
export var TableColumnGroup = Table.ColumnGroup;
export default Table;