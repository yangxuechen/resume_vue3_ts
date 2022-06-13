import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { inject, toRaw } from 'vue';
import PropTypes from '../../_util/vue-types';
import get from 'lodash-es/get';
import classNames from '../../_util/classNames';
import { isValidElement } from '../../_util/props-util';

function isInvalidRenderCellText(text) {
  return text && !isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
}

export default {
  name: 'TableCell',
  inheritAttrs: false,
  props: {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    index: PropTypes.number,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    column: PropTypes.object,
    expandIcon: PropTypes.any,
    component: PropTypes.any,
    colIndex: PropTypes.number
  },
  setup: function setup() {
    return {
      table: inject('table', {}),
      store: inject('table-store', {})
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
      text = get(record, dataIndex);
    } else if (!dataIndex || dataIndex.length === 0) {
      text = record;
    } else {
      text = get(record, dataIndex);
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
      tdProps = _extends(_extends({}, tdProps), column.customCell(record, index));
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

    var indentText = expandIcon ? _createVNode("span", {
      "style": {
        paddingLeft: "".concat(indentSize * indent, "px")
      },
      "class": "".concat(prefixCls, "-indent indent-level-").concat(indent)
    }, null) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }

    if (column.align) {
      tdProps.style = _extends({
        textAlign: column.align
      }, tdProps.style);
    }

    var cellClassName = classNames(className, column.class, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classNames, "".concat(prefixCls, "-cell-break-word"), !!column.width), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-left"), isFixLeft), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-left-first"), firstFixLeft), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-left-last"), lastFixLeft), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-right"), isFixRight), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-right-first"), firstFixRight), _defineProperty(_classNames, "".concat(rootPrefixCls, "-cell-fix-right-last"), lastFixRight), _classNames));

    if (column.ellipsis) {
      if (typeof text === 'string') {
        tdProps.title = text;
      } else if (text) {// const { props: textProps } = text;
        // if (textProps && textProps.children && typeof textProps.children === 'string') {
        //   tdProps.attrs.title = textProps.children;
        // }
      }
    }

    return _createVNode(BodyCell, _objectSpread(_objectSpread({
      "class": cellClassName
    }, tdProps), {}, {
      style: _extends(_extends({}, tdProps.style || {}), fixedStyle)
    }), {
      default: function _default() {
        return [indentText, expandIcon, toRaw(text)];
      }
    });
  }
};