import _extends from "@babel/runtime/helpers/esm/extends";
import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import Cell from './Cell';
import { getSlot, getClass, getStyle } from '../_util/props-util';
import { inject, ref } from 'vue';
import { descriptionsContext } from './index';

var Row = function Row(props) {
  var renderCells = function renderCells(items, _ref, _ref2) {
    var colon = _ref.colon,
        prefixCls = _ref.prefixCls,
        bordered = _ref.bordered;
    var component = _ref2.component,
        type = _ref2.type,
        showLabel = _ref2.showLabel,
        showContent = _ref2.showContent,
        rootLabelStyle = _ref2.labelStyle,
        rootContentStyle = _ref2.contentStyle;
    return items.map(function (item, index) {
      var _a, _b;

      var _ref3 = item.props || {},
          _ref3$prefixCls = _ref3.prefixCls,
          itemPrefixCls = _ref3$prefixCls === void 0 ? prefixCls : _ref3$prefixCls,
          _ref3$span = _ref3.span,
          span = _ref3$span === void 0 ? 1 : _ref3$span,
          labelStyle = _ref3.labelStyle,
          contentStyle = _ref3.contentStyle,
          _ref3$label = _ref3.label,
          label = _ref3$label === void 0 ? (_b = (_a = item.children) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.call(_a) : _ref3$label;

      var children = getSlot(item);
      var className = getClass(item);
      var style = getStyle(item);
      var key = item.key;

      if (typeof component === 'string') {
        return _createVNode(Cell, {
          "key": "".concat(type, "-").concat(String(key) || index),
          "class": className,
          "style": style,
          "labelStyle": _extends(_extends({}, rootLabelStyle.value), labelStyle),
          "contentStyle": _extends(_extends({}, rootContentStyle.value), contentStyle),
          "span": span,
          "colon": colon,
          "component": component,
          "itemPrefixCls": itemPrefixCls,
          "bordered": bordered,
          "label": showLabel ? label : null,
          "content": showContent ? children : null
        }, null);
      }

      return [_createVNode(Cell, {
        "key": "label-".concat(String(key) || index),
        "class": className,
        "style": _extends(_extends(_extends({}, rootLabelStyle.value), style), labelStyle),
        "span": 1,
        "colon": colon,
        "component": component[0],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "label": label
      }, null), _createVNode(Cell, {
        "key": "content-".concat(String(key) || index),
        "class": className,
        "style": _extends(_extends(_extends({}, rootContentStyle.value), style), contentStyle),
        "span": span * 2 - 1,
        "component": component[1],
        "itemPrefixCls": itemPrefixCls,
        "bordered": bordered,
        "content": children
      }, null)];
    });
  };

  var prefixCls = props.prefixCls,
      vertical = props.vertical,
      row = props.row,
      index = props.index,
      bordered = props.bordered;

  var _inject = inject(descriptionsContext, {
    labelStyle: ref({}),
    contentStyle: ref({})
  }),
      labelStyle = _inject.labelStyle,
      contentStyle = _inject.contentStyle;

  if (vertical) {
    return _createVNode(_Fragment, null, [_createVNode("tr", {
      "key": "label-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'th',
      type: 'label',
      showLabel: true,
      labelStyle: labelStyle,
      contentStyle: contentStyle
    })]), _createVNode("tr", {
      "key": "content-".concat(index),
      "class": "".concat(prefixCls, "-row")
    }, [renderCells(row, props, {
      component: 'td',
      type: 'content',
      showContent: true,
      labelStyle: labelStyle,
      contentStyle: contentStyle
    })])]);
  }

  return _createVNode("tr", {
    "key": index,
    "class": "".concat(prefixCls, "-row")
  }, [renderCells(row, props, {
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true,
    labelStyle: labelStyle,
    contentStyle: contentStyle
  })]);
};

export default Row;