"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ListItem", {
  enumerable: true,
  get: function get() {
    return _Item.default;
  }
});
Object.defineProperty(exports, "ListItemProps", {
  enumerable: true,
  get: function get() {
    return _Item.ListItemProps;
  }
});
Object.defineProperty(exports, "ListItemMeta", {
  enumerable: true,
  get: function get() {
    return _ItemMeta.default;
  }
});
exports.default = exports.listProps = exports.ListSize = exports.ListGridType = void 0;

var _vue = require("vue");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _vueTypes = _interopRequireWildcard(require("../_util/vue-types"));

var _spin = _interopRequireDefault(require("../spin"));

var _pagination = _interopRequireWildcard(require("../pagination"));

var _grid = require("../grid");

var _Item = _interopRequireWildcard(require("./Item"));

var _propsUtil = require("../_util/props-util");

var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));

var _type = require("../_util/type");

var _ItemMeta = _interopRequireDefault(require("./ItemMeta"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _useBreakpoint = _interopRequireDefault(require("../_util/hooks/useBreakpoint"));

var _responsiveObserve = require("../_util/responsiveObserve");

var _contextKey = require("./contextKey");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListGridType = {
  gutter: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.arrayOf(Number)]),
  column: _vueTypes.default.number,
  xs: _vueTypes.default.number,
  sm: _vueTypes.default.number,
  md: _vueTypes.default.number,
  lg: _vueTypes.default.number,
  xl: _vueTypes.default.number,
  xxl: _vueTypes.default.number
};
exports.ListGridType = ListGridType;
var ListSize = (0, _type.tuple)('small', 'default', 'large');
exports.ListSize = ListSize;
var listProps = {
  bordered: _vueTypes.default.looseBool,
  dataSource: _vueTypes.default.array,
  extra: _vueTypes.default.any,
  grid: _vueTypes.default.shape(ListGridType).loose,
  itemLayout: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')),
  loading: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object])),
  loadMore: _vueTypes.default.any,
  pagination: (0, _vueTypes.withUndefined)(_vueTypes.default.oneOfType([_vueTypes.default.shape((0, _pagination.paginationConfig)()).loose, _vueTypes.default.looseBool])),
  prefixCls: _vueTypes.default.string,
  rowKey: _vueTypes.default.any,
  renderItem: _vueTypes.default.any,
  size: _vueTypes.default.oneOf(ListSize),
  split: _vueTypes.default.looseBool,
  header: _vueTypes.default.any,
  footer: _vueTypes.default.any,
  locale: {
    type: Object
  }
};
exports.listProps = listProps;
var List = (0, _vue.defineComponent)({
  name: 'AList',
  Item: _Item.default,
  props: (0, _initDefaultProps.default)(listProps, {
    dataSource: [],
    bordered: false,
    split: true,
    loading: false,
    pagination: false
  }),
  slots: ['extra', 'loadMore', 'renderItem', 'header', 'footer'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _a, _b;

    (0, _vue.provide)(_contextKey.ListContextKey, {
      grid: (0, _vue.toRef)(props, 'grid'),
      itemLayout: (0, _vue.toRef)(props, 'itemLayout')
    });
    var defaultPaginationProps = {
      current: 1,
      total: 0
    };

    var _useConfigInject = (0, _useConfigInject2.default)('list', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        renderEmpty = _useConfigInject.renderEmpty;

    var paginationObj = (0, _vue.computed)(function () {
      return props.pagination && (0, _typeof2.default)(props.pagination) === 'object' ? props.pagination : {};
    });
    var paginationCurrent = (0, _vue.ref)((_a = paginationObj.value.defaultCurrent) !== null && _a !== void 0 ? _a : 1);
    var paginationSize = (0, _vue.ref)((_b = paginationObj.value.defaultPageSize) !== null && _b !== void 0 ? _b : 10);
    (0, _vue.watch)(paginationObj, function () {
      if ('current' in paginationObj.value) {
        paginationCurrent.value = paginationObj.value.current;
      }

      if ('pageSize' in paginationObj.value) {
        paginationSize.value = paginationObj.value.pageSize;
      }
    });

    var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
      return function (page, pageSize) {
        paginationCurrent.value = page;
        paginationSize.value = pageSize;

        if (paginationObj.value[eventName]) {
          paginationObj.value[eventName](page, pageSize);
        }
      };
    };

    var onPaginationChange = triggerPaginationEvent('onChange');
    var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');

    var renderEmptyFunc = function renderEmptyFunc(renderEmptyHandler) {
      var _a;

      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-empty-text")
      }, [((_a = props.locale) === null || _a === void 0 ? void 0 : _a.emptyText) || renderEmptyHandler('List')]);
    };

    var loadingProp = (0, _vue.computed)(function () {
      if (typeof props.loading === 'boolean') {
        return {
          spinning: props.loading
        };
      } else {
        return props.loading;
      }
    });
    var isLoading = (0, _vue.computed)(function () {
      return loadingProp.value && loadingProp.value.spinning;
    });
    var sizeCls = (0, _vue.computed)(function () {
      var size = '';

      switch (props.size) {
        case 'large':
          size = 'lg';
          break;

        case 'small':
          size = 'sm';
          break;

        default:
          break;
      }

      return size;
    });
    var classObj = (0, _vue.computed)(function () {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-vertical"), props.itemLayout === 'vertical'), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls.value), sizeCls.value), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-split"), props.split), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-bordered"), props.bordered), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-loading"), isLoading.value), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-grid"), !!props.grid), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    var paginationProps = (0, _vue.computed)(function () {
      var pp = (0, _extends3.default)((0, _extends3.default)((0, _extends3.default)({}, defaultPaginationProps), {
        total: props.dataSource.length,
        current: paginationCurrent.value,
        pageSize: paginationSize.value
      }), props.pagination || {});
      var largestPage = Math.ceil(pp.total / pp.pageSize);

      if (pp.current > largestPage) {
        pp.current = largestPage;
      }

      return pp;
    });
    var splitDataSource = (0, _vue.computed)(function () {
      var dd = (0, _toConsumableArray2.default)(props.dataSource);

      if (props.pagination) {
        if (props.dataSource.length > (paginationProps.value.current - 1) * paginationProps.value.pageSize) {
          dd = (0, _toConsumableArray2.default)(props.dataSource).splice((paginationProps.value.current - 1) * paginationProps.value.pageSize, paginationProps.value.pageSize);
        }
      }

      return dd;
    });
    var screens = (0, _useBreakpoint.default)();
    var currentBreakpoint = (0, _vue.computed)(function () {
      for (var i = 0; i < _responsiveObserve.responsiveArray.length; i += 1) {
        var breakpoint = _responsiveObserve.responsiveArray[i];

        if (screens.value[breakpoint]) {
          return breakpoint;
        }
      }

      return undefined;
    });
    var colStyle = (0, _vue.computed)(function () {
      if (!props.grid) {
        return undefined;
      }

      var columnCount = currentBreakpoint.value && props.grid[currentBreakpoint.value] ? props.grid[currentBreakpoint.value] : props.grid.column;

      if (columnCount) {
        return {
          width: "".concat(100 / columnCount, "%"),
          maxWidth: "".concat(100 / columnCount, "%")
        };
      }

      return undefined;
    });

    var renderInnerItem = function renderInnerItem(keys, item, index) {
      var _a;

      var renderItem = (_a = props.renderItem) !== null && _a !== void 0 ? _a : slots.renderItem;
      if (!renderItem) return null;
      var key;

      if (typeof props.rowKey === 'function') {
        key = props.rowKey(item);
      } else if (typeof props.rowKey === 'string') {
        key = item[props.rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        key = "list-item-".concat(index);
      }

      keys[index] = key;
      return renderItem({
        item: item,
        index: index
      });
    };

    return function () {
      var _a, _b, _c, _d, _e, _f, _g;

      var loadMore = (_a = props.loadMore) !== null && _a !== void 0 ? _a : (_b = slots.loadMore) === null || _b === void 0 ? void 0 : _b.call(slots);
      var footer = (_c = props.footer) !== null && _c !== void 0 ? _c : (_d = slots.footer) === null || _d === void 0 ? void 0 : _d.call(slots);
      var header = (_e = props.header) !== null && _e !== void 0 ? _e : (_f = slots.header) === null || _f === void 0 ? void 0 : _f.call(slots);
      var children = (0, _propsUtil.flattenChildren)((_g = slots.default) === null || _g === void 0 ? void 0 : _g.call(slots));
      var keys = [];
      var isSomethingAfterLastItem = !!(loadMore || props.pagination || footer);
      var classString = (0, _extends3.default)((0, _extends3.default)({}, classObj.value), (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-something-after-last-item"), isSomethingAfterLastItem));
      var paginationContent = props.pagination ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-pagination")
      }, [(0, _vue.createVNode)(_pagination.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginationProps.value), {}, {
        "onChange": onPaginationChange,
        "onShowSizeChange": onPaginationShowSizeChange
      }), null)]) : null;
      var childrenContent = isLoading.value && (0, _vue.createVNode)("div", {
        "style": {
          minHeight: '53px'
        }
      }, null);

      if (splitDataSource.value.length > 0) {
        var items = splitDataSource.value.map(function (item, index) {
          return renderInnerItem(keys, item, index);
        });
        var childrenList = items.map(function (child, index) {
          return (0, _vue.createVNode)("div", {
            "key": keys[index],
            "style": colStyle.value
          }, [child]);
        });
        childrenContent = props.grid ? (0, _vue.createVNode)(_grid.Row, {
          "gutter": props.grid.gutter
        }, {
          default: function _default() {
            return [childrenList];
          }
        }) : (0, _vue.createVNode)("ul", {
          "class": "".concat(prefixCls.value, "-items")
        }, [items]);
      } else if (!children.length && !isLoading.value) {
        childrenContent = renderEmptyFunc(renderEmpty.value);
      }

      var paginationPosition = paginationProps.value.position || 'bottom';
      return (0, _vue.createVNode)("div", {
        "class": classString
      }, [(paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-header")
      }, [header]), (0, _vue.createVNode)(_spin.default, loadingProp.value, {
        default: function _default() {
          return [childrenContent, children];
        }
      }), footer && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent]);
    };
  }
});
/* istanbul ignore next */

List.install = function (app) {
  app.component(List.name, List);
  app.component(List.Item.name, List.Item);
  app.component(List.Item.Meta.name, List.Item.Meta);
  return app;
};

var _default2 = List;
exports.default = _default2;