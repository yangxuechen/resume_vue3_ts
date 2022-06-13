import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";

var _this = this;

import isPlainObject from 'lodash-es/isPlainObject';
import classNames from '../classNames';
import { isVNode, Fragment, Comment, Text, h } from 'vue';
import { camelize, hyphenate, isOn, resolvePropValue } from '../util';
import isValid from '../isValid'; // function getType(fn) {
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

    if (isOn(key)) {
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
        var k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

var hasProp = function hasProp(instance, prop) {
  return prop in getOptionProps(instance);
}; // 重构后直接使用 hasProp 替换


var slotHasProp = function slotHasProp(slot, prop) {
  return hasProp(slot, prop);
};

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
  return _extends(_extends({}, slots), getScopedSlots(ele));
};

var flattenChildren = function flattenChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filterEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var temp = Array.isArray(children) ? children : [children];
  var res = [];
  temp.forEach(function (child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(flattenChildren(child, filterEmpty)));
    } else if (child && child.type === Fragment) {
      res.push.apply(res, _toConsumableArray(flattenChildren(child.children, filterEmpty)));
    } else if (child && isVNode(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};

var getSlot = function getSlot(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isVNode(self)) {
    if (self.type === Fragment) {
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

var getAllChildren = function getAllChildren(ele) {
  var componentOptions = ele.componentOptions || {};

  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }

  return ele.children || componentOptions.children || [];
};

var getSlotOptions = function getSlotOptions() {
  throw Error('使用 .type 直接取值');
};

var findDOMNode = function findDOMNode(instance) {
  var _a;

  var node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);

  while (node && !node.tagName) {
    node = node.nextSibling;
  }

  return node;
};

var getOptionProps = function getOptionProps(instance) {
  var res = {};

  if (instance.$ && instance.$.vnode) {
    var props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(function (k) {
      var v = instance.$props[k];
      var hyphenateKey = hyphenate(k);

      if (v !== undefined || hyphenateKey in props) {
        res[k] = v; // 直接取 $props[k]
      }
    });
  } else if (isVNode(instance) && _typeof(instance.type) === 'object') {
    var originProps = instance.props || {};
    var _props = {};
    Object.keys(originProps).forEach(function (key) {
      _props[camelize(key)] = originProps[key];
    });
    var options = instance.type.props || {};
    Object.keys(options).forEach(function (k) {
      var v = resolvePropValue(options, _props, k, _props[k]);

      if (v !== undefined || k in _props) {
        res[k] = v;
      }
    });
  }

  return res;
};

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
  } else if (isVNode(instance)) {
    var _temp = instance.props && instance.props[prop];

    if (_temp !== undefined && instance.props !== null) {
      return typeof _temp === 'function' && execute ? _temp(options) : _temp;
    } else if (instance.type === Fragment) {
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

var getComponentFromProp = function getComponentFromProp(instance, prop) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (instance.$createElement) {
    // const h = instance.$createElement;
    var temp = instance[prop];

    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }

    return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;
  } else {
    // const h = instance.context.$createElement;
    var _temp2 = getPropsData(instance)[prop];

    if (_temp2 !== undefined) {
      return typeof _temp2 === 'function' && execute ? _temp2(h, options) : _temp2;
    }

    var slotScope = getScopedSlots(instance)[prop];

    if (slotScope !== undefined) {
      return typeof slotScope === 'function' && execute ? slotScope(h, options) : slotScope;
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

var getAllProps = function getAllProps(ele) {
  var props = getOptionProps(ele);

  if (ele.$) {
    props = _extends(_extends({}, props), _this.$attrs);
  } else {
    props = _extends(_extends({}, ele.props), props);
  }

  return props;
};

var getPropsData = function getPropsData(ins) {
  var vnode = ins.$ ? ins.$ : ins;
  var res = {};
  var originProps = vnode.props || {};
  var props = {};
  Object.keys(originProps).forEach(function (key) {
    props[camelize(key)] = originProps[key];
  });
  var options = isPlainObject(vnode.type) ? vnode.type.props : {};
  options && Object.keys(options).forEach(function (k) {
    var v = resolvePropValue(options, props, k, props[k]);

    if (k in props) {
      // 仅包含 props，不包含默认值
      res[k] = v;
    }
  });
  return _extends(_extends({}, props), res); // 合并事件、未声明属性等
};

var getValueByProp = function getValueByProp(ele, prop) {
  return getPropsData(ele)[prop];
};

var getAttrs = function getAttrs(ele) {
  var data = ele.data;

  if (ele.$vnode) {
    data = ele.$vnode.data;
  }

  return data ? data.attrs || {} : {};
};

var getKey = function getKey(ele) {
  var key = ele.key;
  return key;
};

export function getEvents() {
  var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var on = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var props = {};

  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }

  return splitAttrs(props)[on ? 'onEvents' : 'events'];
}
export function getEvent(child, event) {
  return child.props && child.props[event];
} // 获取 xxx.native 或者 原生标签 事件

export function getDataEvents(child) {
  var events = {};

  if (child.data && child.data.on) {
    events = child.data.on;
  }

  return _extends({}, events);
} // use getListeners instead this.$listeners
// https://github.com/vueComponent/ant-design-vue/issues/1705

export function getListeners(context) {
  return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}
export function getClass(ele) {
  var props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  var tempCls = props.class || {};
  var cls = {};

  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    classNames(tempCls).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = _extends(_extends({}, cls), tempCls);
  }

  return cls;
}
export function getStyle(ele, camel) {
  var props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  var style = props.style || {};

  if (typeof style === 'string') {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    // 驼峰化
    var res = {};
    Object.keys(style).forEach(function (k) {
      return res[camelize(k)] = style[k];
    });
    return res;
  }

  return style;
}
export function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}
export function isFragment(c) {
  return c.length === 1 && c[0].type === Fragment;
}
export function isEmptyContent(c) {
  return c === undefined || c === null || c === '' || Array.isArray(c) && c.length === 0;
}
export function isEmptyElement(c) {
  return c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === '');
}
export function isEmptySlot(c) {
  return !c || c().every(isEmptyElement);
}
export function isStringElement(c) {
  return c && c.type === Text;
}
export function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var res = [];
  children.forEach(function (child) {
    if (Array.isArray(child)) {
      res.push.apply(res, _toConsumableArray(child));
    } else if (child.type === Fragment) {
      res.push.apply(res, _toConsumableArray(child.children));
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

export function mergeProps() {
  var args = [].slice.call(arguments, 0);
  var props = {};
  args.forEach(function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _i = 0, _Object$entries = Object.entries(p); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      props[k] = props[k] || {};

      if (isPlainObject(v)) {
        _extends(props[k], v);
      } else {
        props[k] = v;
      }
    }
  });
  return props;
}

function isValidElement(element) {
  return element && element.__v_isVNode && _typeof(element.type) !== 'symbol'; // remove text node
}

function getPropsSlot(slots, props) {
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

  var _a, _b;

  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}

export { splitAttrs, hasProp, getOptionProps, getComponent, getComponentFromProp, getSlotOptions, slotHasProp, getPropsData, getKey, getAttrs, getValueByProp, parseStyleText, initDefaultProps, isValidElement, camelize, getSlots, getSlot, getAllProps, getAllChildren, findDOMNode, flattenChildren, getPropsSlot };
export default hasProp;