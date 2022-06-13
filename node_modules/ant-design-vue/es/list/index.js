import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { provide, defineComponent, ref, watch, computed, toRef } from 'vue';
import PropTypes, { withUndefined } from '../_util/vue-types';
import Spin from '../spin';
import Pagination, { paginationConfig } from '../pagination';
import { Row } from '../grid';
import Item from './Item';
import { flattenChildren } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { tuple } from '../_util/type';
import ItemMeta from './ItemMeta';
import useConfigInject from '../_util/hooks/useConfigInject';
import useBreakpoint from '../_util/hooks/useBreakpoint';
import { responsiveArray } from '../_util/responsiveObserve';
export { ListItemProps } from './Item';
export var ListGridType = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(Number)]),
  column: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number
};
export var ListSize = tuple('small', 'default', 'large');
export var listProps = {
  bordered: PropTypes.looseBool,
  dataSource: PropTypes.array,
  extra: PropTypes.any,
  grid: PropTypes.shape(ListGridType).loose,
  itemLayout: PropTypes.oneOf(tuple('horizontal', 'vertical')),
  loading: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object])),
  loadMore: PropTypes.any,
  pagination: withUndefined(PropTypes.oneOfType([PropTypes.shape(paginationConfig()).loose, PropTypes.looseBool])),
  prefixCls: PropTypes.string,
  rowKey: PropTypes.any,
  renderItem: PropTypes.any,
  size: PropTypes.oneOf(ListSize),
  split: PropTypes.looseBool,
  header: PropTypes.any,
  footer: PropTypes.any,
  locale: {
    type: Object
  }
};
import { ListContextKey } from './contextKey';
var List = defineComponent({
  name: 'AList',
  Item: Item,
  props: initDefaultProps(listProps, {
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

    provide(ListContextKey, {
      grid: toRef(props, 'grid'),
      itemLayout: toRef(props, 'itemLayout')
    });
    var defaultPaginationProps = {
      current: 1,
      total: 0
    };

    var _useConfigInject = useConfigInject('list', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        renderEmpty = _useConfigInject.renderEmpty;

    var paginationObj = computed(function () {
      return props.pagination && _typeof(props.pagination) === 'object' ? props.pagination : {};
    });
    var paginationCurrent = ref((_a = paginationObj.value.defaultCurrent) !== null && _a !== void 0 ? _a : 1);
    var paginationSize = ref((_b = paginationObj.value.defaultPageSize) !== null && _b !== void 0 ? _b : 10);
    watch(paginationObj, function () {
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

      return _createVNode("div", {
        "class": "".concat(prefixCls.value, "-empty-text")
      }, [((_a = props.locale) === null || _a === void 0 ? void 0 : _a.emptyText) || renderEmptyHandler('List')]);
    };

    var loadingProp = computed(function () {
      if (typeof props.loading === 'boolean') {
        return {
          spinning: props.loading
        };
      } else {
        return props.loading;
      }
    });
    var isLoading = computed(function () {
      return loadingProp.value && loadingProp.value.spinning;
    });
    var sizeCls = computed(function () {
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
    var classObj = computed(function () {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-vertical"), props.itemLayout === 'vertical'), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls.value), sizeCls.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-split"), props.split), _defineProperty(_ref2, "".concat(prefixCls.value, "-bordered"), props.bordered), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), isLoading.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-grid"), !!props.grid), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    var paginationProps = computed(function () {
      var pp = _extends(_extends(_extends({}, defaultPaginationProps), {
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
    var splitDataSource = computed(function () {
      var dd = _toConsumableArray(props.dataSource);

      if (props.pagination) {
        if (props.dataSource.length > (paginationProps.value.current - 1) * paginationProps.value.pageSize) {
          dd = _toConsumableArray(props.dataSource).splice((paginationProps.value.current - 1) * paginationProps.value.pageSize, paginationProps.value.pageSize);
        }
      }

      return dd;
    });
    var screens = useBreakpoint();
    var currentBreakpoint = computed(function () {
      for (var i = 0; i < responsiveArray.length; i += 1) {
        var breakpoint = responsiveArray[i];

        if (screens.value[breakpoint]) {
          return breakpoint;
        }
      }

      return undefined;
    });
    var colStyle = computed(function () {
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
      var children = flattenChildren((_g = slots.default) === null || _g === void 0 ? void 0 : _g.call(slots));
      var keys = [];
      var isSomethingAfterLastItem = !!(loadMore || props.pagination || footer);

      var classString = _extends(_extends({}, classObj.value), _defineProperty({}, "".concat(prefixCls.value, "-something-after-last-item"), isSomethingAfterLastItem));

      var paginationContent = props.pagination ? _createVNode("div", {
        "class": "".concat(prefixCls.value, "-pagination")
      }, [_createVNode(Pagination, _objectSpread(_objectSpread({}, paginationProps.value), {}, {
        "onChange": onPaginationChange,
        "onShowSizeChange": onPaginationShowSizeChange
      }), null)]) : null;

      var childrenContent = isLoading.value && _createVNode("div", {
        "style": {
          minHeight: '53px'
        }
      }, null);

      if (splitDataSource.value.length > 0) {
        var items = splitDataSource.value.map(function (item, index) {
          return renderInnerItem(keys, item, index);
        });
        var childrenList = items.map(function (child, index) {
          return _createVNode("div", {
            "key": keys[index],
            "style": colStyle.value
          }, [child]);
        });
        childrenContent = props.grid ? _createVNode(Row, {
          "gutter": props.grid.gutter
        }, {
          default: function _default() {
            return [childrenList];
          }
        }) : _createVNode("ul", {
          "class": "".concat(prefixCls.value, "-items")
        }, [items]);
      } else if (!children.length && !isLoading.value) {
        childrenContent = renderEmptyFunc(renderEmpty.value);
      }

      var paginationPosition = paginationProps.value.position || 'bottom';
      return _createVNode("div", {
        "class": classString
      }, [(paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-header")
      }, [header]), _createVNode(Spin, loadingProp.value, {
        default: function _default() {
          return [childrenContent, children];
        }
      }), footer && _createVNode("div", {
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

export { ItemMeta as ListItemMeta, Item as ListItem };
export default List;