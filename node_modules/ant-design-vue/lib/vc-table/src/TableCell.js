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

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _propsUtil = require("../../_util/props-util");

function isInvalidRenderCellText(text) {
  return text && !(0, _propsUtil.isValidElement)(text) && Object.prototype.toString.call(text) === '[object Object]';
}

var _default2 = {
  name: 'TableCell',
  inheritAttrs: false,
  props: {
    record: _vueTypes.default.object,
    prefixCls: _vueTypes.default.string,
    index: _vueTypes.default.number,
    indent: _vueTypes.default.number,
    indentSize: _vueTypes.default.number,
    column: _vueTypes.default.object,
    expandIcon: _vueTypes.default.any,
    component: _vueTypes.default.any,
    colIndex: _vueTypes.default.number
  },
  setup: function setup() {
    return {
      table: (0, _vue.inject)('table', {}),
      store: (0, _vue.inject)('table-store', {})
    };
  },
  methods: {
    handleClick: function handleClick(e) {
      var record = this.record,
          onCellClick = this.column.onCellClick;

      if (onCellClick) {
        onCellClick(record, e);
      }
    }
  },
  render: function render() {
    var _classNames;

    var record = this.record,
        indentSize = this.indentSize,
        prefixCls = this.prefixCls,
        indent = this.indent,
        index = this.index,
        expandIcon = this.expandIcon,
        column = this.column,
        BodyCell = this.component;
    var fixedInfoList = this.store.fixedInfoList || [];
    var fixedInfo = fixedInfoList[this.colIndex] || {};
    var fixLeft = fixedInfo.fixLeft,
        fixRight = fixedInfo.fixRight,
        firstFixLeft = fixedInfo.firstFixLeft,
        lastFixLeft = fixedInfo.lastFixLeft,
        firstFixRight = fixedInfo.firstFixRight,
        lastFixRight = fixedInfo.lastFixRight; // ====================== Fixed =======================

    var fixedStyle = {};
    var isFixLeft = typeof fixLeft === 'number';
    var isFixRight = typeof fixRight === 'number';

    if (isFixLeft) {
      fixedStyle.position = 'sticky';
      fixedStyle.left = "".concat(fixLeft, "px");
    }

    if (isFixRight) {
      fixedStyle.position = 'sticky';
      fixedStyle.right = "".concat(fixRight, "px");
    }

    var dataIndex = column.dataIndex,
        customRender = column.customRender,
        _column$className = column.className,
        className = _column$className === void 0 ? '' : _column$className;
    var _this$table = this.table,
        transformCellText = _this$table.transformCellText,
        rootPrefixCls = _this$table.prefixCls; // We should return undefined if no dataIndex is specified, but in order to
    // be compatible with object-path's behavior, we return the record object instead.

    var text;

    if (typeof dataIndex === 'number') {
      text = (0, _get.default)(record, dataIndex);
    } else if (!dataIndex || dataIndex.length === 0) {
      text = record;
    } else {
      text = (0, _get.default)(record, dataIndex);
    }

    var tdProps = {
      onClick: this.handleClick
    };
    var colSpan;
    var rowSpan;

    if (customRender) {
      text = customRender({
        text: text,
        record: record,
        index: index,
        column: column
      });

      if (isInvalidRenderCellText(text)) {
        tdProps = text.props || text.attrs || tdProps;
        var _tdProps = tdProps;
        colSpan = _tdProps.colSpan;
        rowSpan = _tdProps.rowSpan;
        text = text.children;
      }
    }

    if (column.customCell) {
      tdProps = (0, _extends2.default)((0, _extends2.default)({}, tdProps), column.customCell(record, index));
    } // Fix https://github.com/ant-design/ant-design/issues/1202


    if (isInvalidRenderCellText(text)) {
      text = null;
    }

    if (transformCellText) {
      text = transformCellText({
        text: text,
        column: column,
        record: record,
        index: index
      });
    }

    var indentText = expandIcon ? (0, _vue.createVNode)("span", {
      "style": {
        paddingLeft: "".concat(indentSize * indent, "px")
      },
      "class": "".concat(prefixCls, "-indent indent-level-").concat(indent)
    }, null) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }

    if (column.align) {
      tdProps.style = (0, _extends2.default)({
        textAlign: column.align
      }, tdProps.style);
    }

    var cellClassName = (0, _classNames2.default)(className, column.class, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-ellipsis"), !!column.ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-cell-break-word"), !!column.width), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-left"), isFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-left-first"), firstFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-left-last"), lastFixLeft), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-right"), isFixRight), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-right-first"), firstFixRight), (0, _defineProperty2.default)(_classNames, "".concat(rootPrefixCls, "-cell-fix-right-last"), lastFixRight), _classNames));

    if (column.ellipsis) {
      if (typeof text === 'string') {
        tdProps.title = text;
      } else if (text) {// const { props: textProps } = text;
        // if (textProps && textProps.children && typeof textProps.children === 'string') {
        //   tdProps.attrs.title = textProps.children;
        // }
      }
    }

    return (0, _vue.createVNode)(BodyCell, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      "class": cellClassName
    }, tdProps), {}, {
      style: (0, _extends2.default)((0, _extends2.default)({}, tdProps.style || {}), fixedStyle)
    }), {
      default: function _default() {
        return [indentText, expandIcon, (0, _vue.toRaw)(text)];
      }
    });
  }
};
exports.default = _default2;