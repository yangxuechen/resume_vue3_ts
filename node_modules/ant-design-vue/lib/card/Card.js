"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _type = require("../_util/type");

var _tabs = _interopRequireDefault(require("../tabs"));

var _row = _interopRequireDefault(require("../row"));

var _col = _interopRequireDefault(require("../col"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _configProvider = require("../config-provider");

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var TabPane = _tabs.default.TabPane;
var cardProps = {
  prefixCls: _vueTypes.default.string,
  title: _vueTypes.default.VNodeChild,
  extra: _vueTypes.default.VNodeChild,
  bordered: _vueTypes.default.looseBool.def(true),
  bodyStyle: _vueTypes.default.style,
  headStyle: _vueTypes.default.style,
  loading: _vueTypes.default.looseBool.def(false),
  hoverable: _vueTypes.default.looseBool.def(false),
  type: _vueTypes.default.string,
  size: _vueTypes.default.oneOf((0, _type.tuple)('default', 'small')),
  actions: _vueTypes.default.VNodeChild,
  tabList: {
    type: Array
  },
  tabBarExtraContent: _vueTypes.default.VNodeChild,
  activeTabKey: _vueTypes.default.string,
  defaultActiveTabKey: _vueTypes.default.string,
  cover: _vueTypes.default.VNodeChild,
  onTabChange: {
    type: Function
  }
};
var Card = (0, _vue.defineComponent)({
  name: 'ACard',
  mixins: [_BaseMixin.default],
  props: cardProps,
  setup: function setup() {
    return {
      configProvider: (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
    };
  },
  data: function data() {
    return {
      widerPadding: false
    };
  },
  methods: {
    getAction: function getAction(actions) {
      var actionList = actions.map(function (action, index) {
        return (0, _vue.isVNode)(action) && !(0, _propsUtil.isEmptyElement)(action) || !(0, _vue.isVNode)(action) ? (0, _vue.createVNode)("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index)
        }, [(0, _vue.createVNode)("span", null, [action])]) : null;
      });
      return actionList;
    },
    triggerTabChange: function triggerTabChange(key) {
      this.$emit('tabChange', key);
    },
    isContainGrid: function isContainGrid() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var containGrid;
      obj.forEach(function (element) {
        if (element && (0, _isPlainObject.default)(element.type) && element.type.__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    }
  },
  render: function render() {
    var _classString, _tabsProps;

    var _this$$props = this.$props,
        customizePrefixCls = _this$$props.prefixCls,
        _this$$props$headStyl = _this$$props.headStyle,
        headStyle = _this$$props$headStyl === void 0 ? {} : _this$$props$headStyl,
        _this$$props$bodyStyl = _this$$props.bodyStyle,
        bodyStyle = _this$$props$bodyStyl === void 0 ? {} : _this$$props$bodyStyl,
        loading = _this$$props.loading,
        _this$$props$bordered = _this$$props.bordered,
        bordered = _this$$props$bordered === void 0 ? true : _this$$props$bordered,
        _this$$props$size = _this$$props.size,
        size = _this$$props$size === void 0 ? 'default' : _this$$props$size,
        type = _this$$props.type,
        tabList = _this$$props.tabList,
        hoverable = _this$$props.hoverable,
        activeTabKey = _this$$props.activeTabKey,
        defaultActiveTabKey = _this$$props.defaultActiveTabKey;
    var $slots = this.$slots;
    var children = (0, _propsUtil.getSlot)(this);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var tabBarExtraContent = (0, _propsUtil.getComponent)(this, 'tabBarExtraContent');
    var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, "".concat(prefixCls), true), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-hoverable"), !!hoverable), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-contain-grid"), this.isContainGrid(children)), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-").concat(size), size !== 'default'), (0, _defineProperty2.default)(_classString, "".concat(prefixCls, "-type-").concat(type), !!type), _classString);
    var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
      padding: 24
    } : undefined;
    var loadingBlock = (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-loading-content"),
      "style": loadingBlockStyle
    }, [(0, _vue.createVNode)(_row.default, {
      "gutter": 8
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_col.default, {
          "span": 22
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), (0, _vue.createVNode)(_row.default, {
      "gutter": 8
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_col.default, {
          "span": 8
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), (0, _vue.createVNode)(_col.default, {
          "span": 15
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), (0, _vue.createVNode)(_row.default, {
      "gutter": 8
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_col.default, {
          "span": 6
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), (0, _vue.createVNode)(_col.default, {
          "span": 18
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), (0, _vue.createVNode)(_row.default, {
      "gutter": 8
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_col.default, {
          "span": 13
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), (0, _vue.createVNode)(_col.default, {
          "span": 9
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), (0, _vue.createVNode)(_row.default, {
      "gutter": 8
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_col.default, {
          "span": 4
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), (0, _vue.createVNode)(_col.default, {
          "span": 3
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), (0, _vue.createVNode)(_col.default, {
          "span": 16
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    })]);
    var hasActiveTabKey = activeTabKey !== undefined;
    var tabsProps = (_tabsProps = {
      size: 'large'
    }, (0, _defineProperty2.default)(_tabsProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0, _defineProperty2.default)(_tabsProps, "tabBarExtraContent", tabBarExtraContent), (0, _defineProperty2.default)(_tabsProps, "onChange", this.triggerTabChange), (0, _defineProperty2.default)(_tabsProps, "class", "".concat(prefixCls, "-head-tabs")), _tabsProps);
    var head;
    var tabs = tabList && tabList.length ? (0, _vue.createVNode)(_tabs.default, tabsProps, {
      default: function _default() {
        return [tabList.map(function (item) {
          var temp = item.tab,
              slots = item.slots;
          var name = slots === null || slots === void 0 ? void 0 : slots.tab;
          var tab = temp !== undefined ? temp : $slots[name] ? $slots[name](item) : null;
          return (0, _vue.createVNode)(TabPane, {
            "tab": tab,
            "key": item.key,
            "disabled": item.disabled
          }, null);
        })];
      }
    }) : null;
    var titleDom = (0, _propsUtil.getComponent)(this, 'title');
    var extraDom = (0, _propsUtil.getComponent)(this, 'extra');

    if (titleDom || extraDom || tabs) {
      head = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-head"),
        "style": headStyle
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-head-wrapper")
      }, [titleDom && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-head-title")
      }, [titleDom]), extraDom && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-extra")
      }, [extraDom])]), tabs]);
    }

    var cover = (0, _propsUtil.getComponent)(this, 'cover');
    var coverDom = cover ? (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-cover")
    }, [cover]) : null;
    var body = (0, _vue.createVNode)("div", {
      "class": "".concat(prefixCls, "-body"),
      "style": bodyStyle
    }, [loading ? loadingBlock : children]);
    var actions = (0, _propsUtil.getComponent)(this, 'actions');
    var actionDom = actions && actions.length ? (0, _vue.createVNode)("ul", {
      "class": "".concat(prefixCls, "-actions")
    }, [this.getAction(actions)]) : null;
    return (0, _vue.createVNode)("div", {
      "class": classString,
      "ref": "cardContainerRef"
    }, [head, coverDom, children ? body : null, actionDom]);
  }
});
var _default2 = Card;
exports.default = _default2;