import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { ref, defineComponent, onMounted, onBeforeUnmount, provide, toRef, computed } from 'vue';
import warning from '../_util/warning';
import ResponsiveObserve, { responsiveArray } from '../_util/responsiveObserve';
import Row from './Row';
import PropTypes from '../_util/vue-types';
import { tuple } from '../_util/type';
import { cloneElement } from '../_util/vnode';
import { flattenChildren } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
export var DescriptionsItemProps = {
  prefixCls: PropTypes.string,
  label: PropTypes.any,
  span: PropTypes.number
};
var descriptionsItemProp = {
  prefixCls: PropTypes.string,
  label: PropTypes.VNodeChild,
  labelStyle: PropTypes.style,
  contentStyle: PropTypes.style,
  span: PropTypes.number.def(1)
};
export var DescriptionsItem = defineComponent({
  name: 'ADescriptionsItem',
  props: descriptionsItemProp,
  slots: ['label'],
  setup: function setup(_, _ref) {
    var slots = _ref.slots;
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};

function getColumn(column, screens) {
  if (typeof column === 'number') {
    return column;
  }

  if (_typeof(column) === 'object') {
    for (var i = 0; i < responsiveArray.length; i++) {
      var breakpoint = responsiveArray[i];

      if (screens[breakpoint] && column[breakpoint] !== undefined) {
        return column[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
      }
    }
  }

  return 3;
}

function getFilledItem(node, span, rowRestCol) {
  var clone = node;

  if (span === undefined || span > rowRestCol) {
    clone = cloneElement(node, {
      span: rowRestCol
    });
    warning(span === undefined, 'Descriptions', 'Sum of column `span` in a line not match `column` of Descriptions.');
  }

  return clone;
}

function getRows(children, column) {
  var childNodes = flattenChildren(children);
  var rows = [];
  var tmpRow = [];
  var rowRestCol = column;
  childNodes.forEach(function (node, index) {
    var _a;

    var span = (_a = node.props) === null || _a === void 0 ? void 0 : _a.span;
    var mergedSpan = span || 1; // Additional handle last one

    if (index === childNodes.length - 1) {
      tmpRow.push(getFilledItem(node, span, rowRestCol));
      rows.push(tmpRow);
      return;
    }

    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(node);
    } else {
      tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
      rows.push(tmpRow);
      rowRestCol = column;
      tmpRow = [];
    }
  });
  return rows;
}

var descriptionsProps = {
  prefixCls: PropTypes.string,
  bordered: PropTypes.looseBool,
  size: PropTypes.oneOf(tuple('default', 'middle', 'small')).def('default'),
  title: PropTypes.VNodeChild,
  extra: PropTypes.VNodeChild,
  column: {
    type: [Number, Object],
    default: function _default() {
      return DEFAULT_COLUMN_MAP;
    }
  },
  layout: PropTypes.oneOf(tuple('horizontal', 'vertical')),
  colon: PropTypes.looseBool,
  labelStyle: PropTypes.style,
  contentStyle: PropTypes.style
};
export var descriptionsContext = Symbol('descriptionsContext');
var Descriptions = defineComponent({
  name: 'ADescriptions',
  props: descriptionsProps,
  slots: ['title', 'extra'],
  Item: DescriptionsItem,
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;

    var _useConfigInject = useConfigInject('descriptions', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var token;
    var screens = ref({});
    onMounted(function () {
      token = ResponsiveObserve.subscribe(function (screen) {
        if (_typeof(props.column) !== 'object') {
          return;
        }

        screens.value = screen;
      });
    });
    onBeforeUnmount(function () {
      ResponsiveObserve.unsubscribe(token);
    });
    provide(descriptionsContext, {
      labelStyle: toRef(props, 'labelStyle'),
      contentStyle: toRef(props, 'contentStyle')
    });
    var mergeColumn = computed(function () {
      return getColumn(props.column, screens.value);
    });
    return function () {
      var _ref3;

      var _a, _b, _c;

      var size = props.size,
          _props$bordered = props.bordered,
          bordered = _props$bordered === void 0 ? false : _props$bordered,
          _props$layout = props.layout,
          layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
          _props$colon = props.colon,
          colon = _props$colon === void 0 ? true : _props$colon,
          _props$title = props.title,
          title = _props$title === void 0 ? (_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$title,
          _props$extra = props.extra,
          extra = _props$extra === void 0 ? (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$extra;
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var rows = getRows(children, mergeColumn.value);
      return _createVNode("div", {
        "class": [prefixCls.value, (_ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-").concat(size), size !== 'default'), _defineProperty(_ref3, "".concat(prefixCls.value, "-bordered"), !!bordered), _defineProperty(_ref3, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref3)]
      }, [(title || extra) && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-header")
      }, [title && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-title")
      }, [title]), extra && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-extra")
      }, [extra])]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-view")
      }, [_createVNode("table", null, [_createVNode("tbody", null, [rows.map(function (row, index) {
        return _createVNode(Row, {
          "key": index,
          "index": index,
          "colon": colon,
          "prefixCls": prefixCls.value,
          "vertical": layout === 'vertical',
          "bordered": bordered,
          "row": row
        }, null);
      })])])])]);
    };
  }
});

Descriptions.install = function (app) {
  app.component(Descriptions.name, Descriptions);
  app.component(Descriptions.Item.name, Descriptions.Item);
  return app;
};

export default Descriptions;