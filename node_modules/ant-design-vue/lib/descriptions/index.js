"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.descriptionsContext = exports.DescriptionsItem = exports.DescriptionsItemProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));

var _Row = _interopRequireDefault(require("./Row"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _type = require("../_util/type");

var _vnode = require("../_util/vnode");

var _propsUtil = require("../_util/props-util");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DescriptionsItemProps = {
  prefixCls: _vueTypes.default.string,
  label: _vueTypes.default.any,
  span: _vueTypes.default.number
};
exports.DescriptionsItemProps = DescriptionsItemProps;
var descriptionsItemProp = {
  prefixCls: _vueTypes.default.string,
  label: _vueTypes.default.VNodeChild,
  labelStyle: _vueTypes.default.style,
  contentStyle: _vueTypes.default.style,
  span: _vueTypes.default.number.def(1)
};
var DescriptionsItem = (0, _vue.defineComponent)({
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
exports.DescriptionsItem = DescriptionsItem;
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

  if ((0, _typeof2.default)(column) === 'object') {
    for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
      var breakpoint = _responsiveObserve.responsiveArray[i];

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
    clone = (0, _vnode.cloneElement)(node, {
      span: rowRestCol
    });
    (0, _warning.default)(span === undefined, 'Descriptions', 'Sum of column `span` in a line not match `column` of Descriptions.');
  }

  return clone;
}

function getRows(children, column) {
  var childNodes = (0, _propsUtil.flattenChildren)(children);
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
  prefixCls: _vueTypes.default.string,
  bordered: _vueTypes.default.looseBool,
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'middle', 'small')).def('default'),
  title: _vueTypes.default.VNodeChild,
  extra: _vueTypes.default.VNodeChild,
  column: {
    type: [Number, Object],
    default: function _default() {
      return DEFAULT_COLUMN_MAP;
    }
  },
  layout: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')),
  colon: _vueTypes.default.looseBool,
  labelStyle: _vueTypes.default.style,
  contentStyle: _vueTypes.default.style
};
var descriptionsContext = Symbol('descriptionsContext');
exports.descriptionsContext = descriptionsContext;
var Descriptions = (0, _vue.defineComponent)({
  name: 'ADescriptions',
  props: descriptionsProps,
  slots: ['title', 'extra'],
  Item: DescriptionsItem,
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('descriptions', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var token;
    var screens = (0, _vue.ref)({});
    (0, _vue.onMounted)(function () {
      token = _responsiveObserve.default.subscribe(function (screen) {
        if ((0, _typeof2.default)(props.column) !== 'object') {
          return;
        }

        screens.value = screen;
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      _responsiveObserve.default.unsubscribe(token);
    });
    (0, _vue.provide)(descriptionsContext, {
      labelStyle: (0, _vue.toRef)(props, 'labelStyle'),
      contentStyle: (0, _vue.toRef)(props, 'contentStyle')
    });
    var mergeColumn = (0, _vue.computed)(function () {
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
      return (0, _vue.createVNode)("div", {
        "class": [prefixCls.value, (_ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-").concat(size), size !== 'default'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-bordered"), !!bordered), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref3)]
      }, [(title || extra) && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-header")
      }, [title && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-title")
      }, [title]), extra && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-extra")
      }, [extra])]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-view")
      }, [(0, _vue.createVNode)("table", null, [(0, _vue.createVNode)("tbody", null, [rows.map(function (row, index) {
        return (0, _vue.createVNode)(_Row.default, {
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

var _default2 = Descriptions;
exports.default = _default2;