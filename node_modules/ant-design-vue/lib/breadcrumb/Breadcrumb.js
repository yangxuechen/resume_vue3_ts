"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _warning = _interopRequireDefault(require("../_util/warning"));

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var _menu = _interopRequireDefault(require("../menu"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var breadcrumbProps = {
  prefixCls: _vueTypes.default.string,
  routes: {
    type: Array
  },
  params: _vueTypes.default.any,
  separator: _vueTypes.default.any,
  itemRender: {
    type: Function
  }
};

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(opt) {
  var route = opt.route,
      params = opt.params,
      routes = opt.routes,
      paths = opt.paths;
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? (0, _vue.createVNode)("span", null, [name]) : (0, _vue.createVNode)("a", {
    "href": "#/".concat(paths.join('/'))
  }, [name]);
}

var _default2 = (0, _vue.defineComponent)({
  name: 'ABreadcrumb',
  props: breadcrumbProps,
  slots: ['separator', 'itemRender'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('breadcrumb', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var getPath = function getPath(path, params) {
      path = (path || '').replace(/^\//, '');
      Object.keys(params).forEach(function (key) {
        path = path.replace(":".concat(key), params[key]);
      });
      return path;
    };

    var addChildPath = function addChildPath(paths) {
      var childPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var params = arguments.length > 2 ? arguments[2] : undefined;
      var originalPaths = (0, _toConsumableArray2.default)(paths);
      var path = getPath(childPath, params);

      if (path) {
        originalPaths.push(path);
      }

      return originalPaths;
    };

    var genForRoutes = function genForRoutes(_ref2) {
      var _ref2$routes = _ref2.routes,
          routes = _ref2$routes === void 0 ? [] : _ref2$routes,
          _ref2$params = _ref2.params,
          params = _ref2$params === void 0 ? {} : _ref2$params,
          separator = _ref2.separator,
          _ref2$itemRender = _ref2.itemRender,
          itemRender = _ref2$itemRender === void 0 ? defaultItemRender : _ref2$itemRender;
      var paths = [];
      return routes.map(function (route) {
        var path = getPath(route.path, params);

        if (path) {
          paths.push(path);
        }

        var tempPaths = [].concat(paths); // generated overlay by route.children

        var overlay = null;

        if (route.children && route.children.length) {
          overlay = (0, _vue.createVNode)(_menu.default, null, {
            default: function _default() {
              return [route.children.map(function (child) {
                return (0, _vue.createVNode)(_menu.default.Item, {
                  "key": child.path || child.breadcrumbName
                }, {
                  default: function _default() {
                    return [itemRender({
                      route: child,
                      params: params,
                      routes: routes,
                      paths: addChildPath(tempPaths, child.path, params)
                    })];
                  }
                });
              })];
            }
          });
        }

        return (0, _vue.createVNode)(_BreadcrumbItem.default, {
          "overlay": overlay,
          "separator": separator,
          "key": path || route.breadcrumbName
        }, {
          default: function _default() {
            return [itemRender({
              route: route,
              params: params,
              routes: routes,
              paths: tempPaths
            })];
          }
        });
      });
    };

    return function () {
      var _breadcrumbClassName;

      var _a;

      var crumbs;
      var routes = props.routes,
          _props$params = props.params,
          params = _props$params === void 0 ? {} : _props$params;
      var children = (0, _propsUtil.flattenChildren)((0, _propsUtil.getPropsSlot)(slots, props));
      var separator = (_a = (0, _propsUtil.getPropsSlot)(slots, props, 'separator')) !== null && _a !== void 0 ? _a : '/';
      var itemRender = props.itemRender || slots.itemRender || defaultItemRender;

      if (routes && routes.length > 0) {
        // generated by route
        crumbs = genForRoutes({
          routes: routes,
          params: params,
          separator: separator,
          itemRender: itemRender
        });
      } else if (children.length) {
        crumbs = children.map(function (element, index) {
          (0, _warning.default)((0, _typeof2.default)(element.type) === 'object' && (element.type.__ANT_BREADCRUMB_ITEM || element.type.__ANT_BREADCRUMB_SEPARATOR), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
          return (0, _vue.cloneVNode)(element, {
            separator: separator,
            key: index
          });
        });
      }

      var breadcrumbClassName = (_breadcrumbClassName = {}, (0, _defineProperty2.default)(_breadcrumbClassName, prefixCls.value, true), (0, _defineProperty2.default)(_breadcrumbClassName, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _breadcrumbClassName);
      return (0, _vue.createVNode)("div", {
        "class": breadcrumbClassName
      }, [crumbs]);
    };
  }
});

exports.default = _default2;