import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { inject, isVNode, defineComponent } from 'vue';
import { tuple } from '../_util/type';
import Tabs from '../tabs';
import Row from '../row';
import Col from '../col';
import PropTypes from '../_util/vue-types';
import { getComponent, getSlot, isEmptyElement } from '../_util/props-util';
import BaseMixin from '../_util/BaseMixin';
import { defaultConfigProvider } from '../config-provider';
import isPlainObject from 'lodash-es/isPlainObject';
var TabPane = Tabs.TabPane;
var cardProps = {
  prefixCls: PropTypes.string,
  title: PropTypes.VNodeChild,
  extra: PropTypes.VNodeChild,
  bordered: PropTypes.looseBool.def(true),
  bodyStyle: PropTypes.style,
  headStyle: PropTypes.style,
  loading: PropTypes.looseBool.def(false),
  hoverable: PropTypes.looseBool.def(false),
  type: PropTypes.string,
  size: PropTypes.oneOf(tuple('default', 'small')),
  actions: PropTypes.VNodeChild,
  tabList: {
    type: Array
  },
  tabBarExtraContent: PropTypes.VNodeChild,
  activeTabKey: PropTypes.string,
  defaultActiveTabKey: PropTypes.string,
  cover: PropTypes.VNodeChild,
  onTabChange: {
    type: Function
  }
};
var Card = defineComponent({
  name: 'ACard',
  mixins: [BaseMixin],
  props: cardProps,
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
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
        return isVNode(action) && !isEmptyElement(action) || !isVNode(action) ? _createVNode("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index)
        }, [_createVNode("span", null, [action])]) : null;
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
        if (element && isPlainObject(element.type) && element.type.__ANT_CARD_GRID) {
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
    var children = getSlot(this);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var tabBarExtraContent = getComponent(this, 'tabBarExtraContent');
    var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls), true), _defineProperty(_classString, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classString, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classString, "".concat(prefixCls, "-hoverable"), !!hoverable), _defineProperty(_classString, "".concat(prefixCls, "-contain-grid"), this.isContainGrid(children)), _defineProperty(_classString, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classString, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_classString, "".concat(prefixCls, "-type-").concat(type), !!type), _classString);
    var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
      padding: 24
    } : undefined;

    var loadingBlock = _createVNode("div", {
      "class": "".concat(prefixCls, "-loading-content"),
      "style": loadingBlockStyle
    }, [_createVNode(Row, {
      "gutter": 8
    }, {
      default: function _default() {
        return [_createVNode(Col, {
          "span": 22
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), _createVNode(Row, {
      "gutter": 8
    }, {
      default: function _default() {
        return [_createVNode(Col, {
          "span": 8
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), _createVNode(Col, {
          "span": 15
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), _createVNode(Row, {
      "gutter": 8
    }, {
      default: function _default() {
        return [_createVNode(Col, {
          "span": 6
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), _createVNode(Col, {
          "span": 18
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), _createVNode(Row, {
      "gutter": 8
    }, {
      default: function _default() {
        return [_createVNode(Col, {
          "span": 13
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), _createVNode(Col, {
          "span": 9
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    }), _createVNode(Row, {
      "gutter": 8
    }, {
      default: function _default() {
        return [_createVNode(Col, {
          "span": 4
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), _createVNode(Col, {
          "span": 3
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        }), _createVNode(Col, {
          "span": 16
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "class": "".concat(prefixCls, "-loading-block")
            }, null)];
          }
        })];
      }
    })]);

    var hasActiveTabKey = activeTabKey !== undefined;
    var tabsProps = (_tabsProps = {
      size: 'large'
    }, _defineProperty(_tabsProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_tabsProps, "tabBarExtraContent", tabBarExtraContent), _defineProperty(_tabsProps, "onChange", this.triggerTabChange), _defineProperty(_tabsProps, "class", "".concat(prefixCls, "-head-tabs")), _tabsProps);
    var head;
    var tabs = tabList && tabList.length ? _createVNode(Tabs, tabsProps, {
      default: function _default() {
        return [tabList.map(function (item) {
          var temp = item.tab,
              slots = item.slots;
          var name = slots === null || slots === void 0 ? void 0 : slots.tab;
          var tab = temp !== undefined ? temp : $slots[name] ? $slots[name](item) : null;
          return _createVNode(TabPane, {
            "tab": tab,
            "key": item.key,
            "disabled": item.disabled
          }, null);
        })];
      }
    }) : null;
    var titleDom = getComponent(this, 'title');
    var extraDom = getComponent(this, 'extra');

    if (titleDom || extraDom || tabs) {
      head = _createVNode("div", {
        "class": "".concat(prefixCls, "-head"),
        "style": headStyle
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-head-wrapper")
      }, [titleDom && _createVNode("div", {
        "class": "".concat(prefixCls, "-head-title")
      }, [titleDom]), extraDom && _createVNode("div", {
        "class": "".concat(prefixCls, "-extra")
      }, [extraDom])]), tabs]);
    }

    var cover = getComponent(this, 'cover');
    var coverDom = cover ? _createVNode("div", {
      "class": "".concat(prefixCls, "-cover")
    }, [cover]) : null;

    var body = _createVNode("div", {
      "class": "".concat(prefixCls, "-body"),
      "style": bodyStyle
    }, [loading ? loadingBlock : children]);

    var actions = getComponent(this, 'actions');
    var actionDom = actions && actions.length ? _createVNode("ul", {
      "class": "".concat(prefixCls, "-actions")
    }, [this.getAction(actions)]) : null;
    return _createVNode("div", {
      "class": classString,
      "ref": "cardContainerRef"
    }, [head, coverDom, children ? body : null, actionDom]);
  }
});
export default Card;