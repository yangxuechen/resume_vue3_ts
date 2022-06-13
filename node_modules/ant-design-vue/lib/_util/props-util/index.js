"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = getEvents;
exports.getEvent = getEvent;
exports.getDataEvents = getDataEvents;
exports.getListeners = getListeners;
exports.getClass = getClass;
exports.getStyle = getStyle;
exports.getComponentName = getComponentName;
exports.isFragment = isFragment;
exports.isEmptyContent = isEmptyContent;
exports.isEmptyElement = isEmptyElement;
exports.isEmptySlot = isEmptySlot;
exports.isStringElement = isStringElement;
exports.filterEmpty = filterEmpty;
exports.mergeProps = mergeProps;
exports.isValidElement = isValidElement;
exports.getPropsSlot = getPropsSlot;
Object.defineProperty(exports, "camelize", {
  enumerable: true,
  get: function get() {
    return _util.camelize;
  }
});
exports.default = exports.flattenChildren = exports.findDOMNode = exports.getAllChildren = exports.getAllProps = exports.getSlot = exports.getSlots = exports.initDefaultProps = exports.parseStyleText = exports.getValueByProp = exports.getAttrs = exports.getKey = exports.getPropsData = exports.slotHasProp = exports.getSlotOptions = exports.getComponentFromProp = exports.getComponent = exports.getOptionProps = exports.hasProp = exports.splitAttrs = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _classNames = _interopRequireDefault(require("../classNames"));

var _vue = require("vue");

var _util = require("../util");

var _isValid = _interopRequireDefault(require("../isValid"));

var _this = void 0;

// function getType(fn) {
//   const match = fn && fn.toString().match(/^\s*function (\w+)/);
//   return match ? match[1] : '';
// }
var splitAttrs = function splitAttrs(attrs) {
  var allAttrs = Object.keys(attrs);
  var eventAttrs = {};
  var onEvents = {};
  var extraAttrs = {};

  for (var i = 0, l = allAttrs.length; i < l; i++) {
    var key = allAttrs[i];

    if ((0, _util.isOn)(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }

  return {
    onEvents: onEvents,
    events: eventAttrs,
    extraAttrs: extraAttrs
  };
};

exports.splitAttrs = splitAttrs;

var parseStyleText = function parseStyleText() {
  var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var camel = arguments.length > 1 ? arguments[1] : undefined;
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);

      if (tmp.length > 1) {
        var k = camel ? (0, _util.camelize)(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

exports.parseStyleText = parseStyleText;

var hasProp = function hasProp(instance, prop) {
  return prop in getOptionProps(instance);
}; // 重构后直接使用 hasProp 替换


exports.hasProp = hasProp;

var slotHasProp = function slotHasProp(slot, prop) {
  return hasProp(slot, prop);
};

exports.slotHasProp = slotHasProp;

var getScopedSlots = function getScopedSlots(ele) {
  return ele.data && ele.data.scopedSlots || {};
};

var getSlots = function getSlots(ele) {
  var componentOptions = ele.componentOptions || {};

  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }

  var children = ele.children || componentOptions.children || [];
  var slots = {};
  children.forEach(function (child) {
    if (!isEmptyElement(child)) {
      var name = child.data && child.data.slot || 'default';
      slots[name] = slots[name] || [];
      slots[name].push(child);
    }
  });
  return (0, _extends2.default)((0, _extends2.default)({}, slots), getScopedSlots(ele));
};

exports.getSlots = getSlots;

var flattenChildren = function flattenChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filterEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var temp = Array.isArray(children) ? children : [children];
  var res = [];
  temp.forEach(function (child) {
    if (Array.isArray(child)) {
      res.push.apply(res, (0, _toConsumableArray2.default)(flattenChildren(child, filterEmpty)));
    } else if (child && child.type === _vue.Fragment) {
      res.push.apply(res, (0, _toConsumableArray2.default)(flattenChildren(child.children, filterEmpty)));
    } else if (child && (0, _vue.isVNode)(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if ((0, _isValid.default)(child)) {
      res.push(child);
    }
  });
  return res;
};

exports.flattenChildren = flattenChildren;

var getSlot = function getSlot(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _vue.isVNode)(self)) {
    if (self.type === _vue.Fragment) {
      return name === 'default' ? flattenChildren(self.children) : [];
    } else if (self.children && self.children[name]) {
      return flattenChildren(self.children[name](options));
    } else {
      return [];
    }
  } else {
    var res = self.$slots[name] && self.$slots[name](options);
    return flattenChildren(res);
  }
};

exports.getSlot = getSlot;

var getAllChildren = function getAllChildren(ele) {
  var componentOptions = ele.componentOptions || {};

  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }

  return ele.children || componentOptions.children || [];
};

exports.getAllChildren = getAllChildren;

var getSlotOptions = function getSlotOptions() {
  throw Error('使用 .type 直接取值');
};

exports.getSlotOptions = getSlotOptions;

var findDOMNode = function findDOMNode(instance) {
  var _a;

  var node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);

  while (node && !node.tagName) {
    node = node.nextSibling;
  }

  return node;
};

exports.findDOMNode = findDOMNode;

var getOptionProps = function getOptionProps(instance) {
  var res = {};

  if (instance.$ && instance.$.vnode) {
    var props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(function (k) {
      var v = instance.$props[k];
      var hyphenateKey = (0, _util.hyphenate)(k);

      if (v !== undefined || hyphenateKey in props) {
        res[k] = v; // 直接取 $props[k]
      }
    });
  } else if ((0, _vue.isVNode)(instance) && (0, _typeof2.default)(instance.type) === 'object') {
    var originProps = instance.props || {};
    var _props = {};
    Object.keys(originProps).forEach(function (key) {
      _props[(0, _util.camelize)(key)] = originProps[key];
    });
    var options = instance.type.props || {};
    Object.keys(options).forEach(function (k) {
      var v = (0, _util.resolvePropValue)(options, _props, k, _props[k]);

      if (v !== undefined || k in _props) {
        res[k] = v;
      }
    });
  }

  return res;
};

exports.getOptionProps = getOptionProps;

var getComponent = function getComponent(instance) {
  var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var com = undefined;

  if (instance.$) {
    var temp = instance[prop];

    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if ((0, _vue.isVNode)(instance)) {
    var _temp = instance.props && instance.props[prop];

    if (_temp !== undefined && instance.props !== null) {
      return typeof _temp === 'function' && execute ? _temp(options) : _temp;
    } else if (instance.type === _vue.Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }

  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? undefined : com;
  }

  return com;
};

exports.getComponent = getComponent;

var getComponentFromProp = function getComponentFromProp(instance, prop) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (instance.$createElement) {
    // const h = instance.$createElement;
    var temp = instance[prop];

    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(_vue.h, options) : temp;
    }

    return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;
  } else {
    // const h = instance.context.$createElement;
    var _temp2 = getPropsData(instance)[prop];

    if (_temp2 !== undefined) {
      return typeof _temp2 === 'function' && execute ? _temp2(_vue.h, options) : _temp2;
    }

    var slotScope = getScopedSlots(instance)[prop];

    if (slotScope !== undefined) {
      return typeof slotScope === 'function' && execute ? slotScope(_vue.h, options) : slotScope;
    }

    var slotsProp = [];
    var componentOptions = instance.componentOptions || {};
    (componentOptions.children || []).forEach(function (child) {
      if (child.data && child.data.slot === prop) {
        if (child.data.attrs) {
          delete child.data.attrs.slot;
        }

        if (child.tag === 'template') {
          slotsProp.push(child.children);
        } else {
          slotsProp.push(child);
        }
      }
    });
    return slotsProp.length ? slotsProp : undefined;
  }
};

exports.getComponentFromProp = getComponentFromProp;

var getAllProps = function getAllProps(ele) {
  var props = getOptionProps(ele);

  if (ele.$) {
    props = (0, _extends2.default)((0, _extends2.default)({}, props), _this.$attrs);
  } else {
    props = (0, _extends2.default)((0, _extends2.default)({}, ele.props), props);
  }

  return props;
};

exports.getAllProps = getAllProps;

var getPropsData = function getPropsData(ins) {
  var vnode = ins.$ ? ins.$ : ins;
  var res = {};
  var originProps = vnode.props || {};
  var props = {};
  Object.keys(originProps).forEach(function (key) {
    props[(0, _util.camelize)(key)] = originProps[key];
  });
  var options = (0, _isPlainObject.default)(vnode.type) ? vnode.type.props : {};
  options && Object.keys(options).forEach(function (k) {
    var v = (0, _util.resolvePropValue)(options, props, k, props[k]);

    if (k in props) {
      // 仅包含 props，不包含默认值
      res[k] = v;
    }
  });
  return (0, _extends2.default)((0, _extends2.default)({}, props), res); // 合并事件、未声明属性等
};

exports.getPropsData = getPropsData;

var getValueByProp = function getValueByProp(ele, prop) {
  return getPropsData(ele)[prop];
};

exports.getValueByProp = getValueByProp;

var getAttrs = function getAttrs(ele) {
  var data = ele.data;

  if (ele.$vnode) {
    data = ele.$vnode.data;
  }

  return data ? data.attrs || {} : {};
};

exports.getAttrs = getAttrs;

var getKey = function getKey(ele) {
  var key = ele.key;
  return key;
};

exports.getKey = getKey;

function getEvents() {
  var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var on = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var props = {};

  if (ele.$) {
    props = (0, _extends2.default)((0, _extends2.default)({}, props), ele.$attrs);
  } else {
    props = (0, _extends2.default)((0, _extends2.default)({}, props), ele.props);
  }

  return splitAttrs(props)[on ? 'onEvents' : 'events'];
}

function getEvent(child, event) {
  return child.props && child.props[event];
} // 获取 xxx.native 或者 原生标签 事件


function getDataEvents(child) {
  var events = {};

  if (child.data && child.data.on) {
    events = child.data.on;
  }

  return (0, _extends2.default)({}, events);
} // use getListeners instead this.$listeners
// https://github.com/vueComponent/ant-design-vue/issues/1705


function getListeners(context) {
  return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}

function getClass(ele) {
  var props = ((0, _vue.isVNode)(ele) ? ele.props : ele.$attrs) || {};
  var tempCls = props.class || {};
  var cls = {};

  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    (0, _classNames.default)(tempCls).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends2.default)((0, _extends2.default)({}, cls), tempCls);
  }

  return cls;
}

function getStyle(ele, camel) {
  var props = ((0, _vue.isVNode)(ele) ? ele.props : ele.$attrs) || {};
  var style = props.style || {};

  if (typeof style === 'string') {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    // 驼峰化
    var res = {};
    Object.keys(style).forEach(function (k) {
      return res[(0, _util.camelize)(k)] = style[k];
    });
    return res;
  }

  return style;
}

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function isFragment(c) {
  return c.length === 1 && c[0].type === _vue.Fragment;
}

function isEmptyContent(c) {
  return c === undefined || c === null || c === '' || Array.isArray(c) && c.length === 0;
}

function isEmptyElement(c) {
  return c && (c.type === _vue.Comment || c.type === _vue.Fragment && c.children.length === 0 || c.type === _vue.Text && c.children.trim() === '');
}

function isEmptySlot(c) {
  return !c || c().every(isEmptyElement);
}

function isStringElement(c) {
  return c && c.type === _vue.Text;
}

function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var res = [];
  children.forEach(function (child) {
    if (Array.isArray(child)) {
      res.push.apply(res, (0, _toConsumableArray2.default)(child));
    } else if (child.type === _vue.Fragment) {
      res.push.apply(res, (0, _toConsumableArray2.default)(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter(function (c) {
    return !isEmptyElement(c);
  });
}

var initDefaultProps = function initDefaultProps(propTypes, defaultProps) {
  Object.keys(defaultProps).forEach(function (k) {
    if (propTypes[k]) {
      propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]));
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes;
};

exports.initDefaultProps = initDefaultProps;

function mergeProps() {
  var args = [].slice.call(arguments, 0);
  var props = {};
  args.forEach(function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _i = 0, _Object$entries = Object.entries(p); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      props[k] = props[k] || {};

      if ((0, _isPlainObject.default)(v)) {
        (0, _extends2.default)(props[k], v);
      } else {
        props[k] = v;
      }
    }
  });
  return props;
}

function isValidElement(element) {
  return element && element.__v_isVNode && (0, _typeof2.default)(element.type) !== 'symbol'; // remove text node
}

function getPropsSlot(slots, props) {
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

  var _a, _b;

  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}

var _default = hasProp;
exports.default = _default;