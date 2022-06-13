"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _TransBtn = _interopRequireDefault(require("./TransBtn"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _pickAttrs = _interopRequireDefault(require("../_util/pickAttrs"));

var _propsUtil = require("../_util/props-util");

var _createRef = _interopRequireDefault(require("../_util/createRef"));

var _List = _interopRequireDefault(require("../vc-virtual-list/List"));

var _useMemo = _interopRequireDefault(require("../_util/hooks/useMemo"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var OptionListProps = {
  prefixCls: _vueTypes.default.string,
  id: _vueTypes.default.string,
  options: _vueTypes.default.array,
  flattenOptions: _vueTypes.default.array,
  height: _vueTypes.default.number,
  itemHeight: _vueTypes.default.number,
  values: _vueTypes.default.any,
  multiple: _vueTypes.default.looseBool,
  open: _vueTypes.default.looseBool,
  defaultActiveFirstOption: _vueTypes.default.looseBool,
  notFoundContent: _vueTypes.default.any,
  menuItemSelectedIcon: _vueTypes.default.any,
  childrenAsData: _vueTypes.default.looseBool,
  searchValue: _vueTypes.default.string,
  virtual: _vueTypes.default.looseBool,
  onSelect: _vueTypes.default.func,
  onToggleOpen: {
    type: Function
  },

  /** Tell Select that some value is now active to make accessibility work */
  onActiveValue: _vueTypes.default.func,
  onScroll: _vueTypes.default.func,

  /** Tell Select that mouse enter the popup to force re-render */
  onMouseenter: _vueTypes.default.func
};
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = (0, _vue.defineComponent)({
  name: 'OptionList',
  inheritAttrs: false,
  slots: ['option'],
  setup: function setup(props) {
    var itemPrefixCls = (0, _vue.computed)(function () {
      return "".concat(props.prefixCls, "-item");
    });
    var memoFlattenOptions = (0, _useMemo.default)(function () {
      return props.flattenOptions;
    }, [function () {
      return props.open;
    }, function () {
      return props.flattenOptions;
    }], function (next) {
      return next[0];
    }); // =========================== List ===========================

    var listRef = (0, _createRef.default)();

    var onListMouseDown = function onListMouseDown(event) {
      event.preventDefault();
    };

    var scrollIntoView = function scrollIntoView(index) {
      if (listRef.current) {
        listRef.current.scrollTo({
          index: index
        });
      }
    }; // ========================== Active ==========================


    var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var len = memoFlattenOptions.value.length;

      for (var i = 0; i < len; i += 1) {
        var current = (index + i * offset + len) % len;
        var _memoFlattenOptions$v = memoFlattenOptions.value[current],
            group = _memoFlattenOptions$v.group,
            data = _memoFlattenOptions$v.data;

        if (!group && !data.disabled) {
          return current;
        }
      }

      return -1;
    };

    var state = (0, _vue.reactive)({
      activeIndex: getEnabledActiveIndex(0)
    });

    var setActive = function setActive(index) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      state.activeIndex = index;
      var info = {
        source: fromKeyboard ? 'keyboard' : 'mouse'
      }; // Trigger active event

      var flattenItem = memoFlattenOptions.value[index];

      if (!flattenItem) {
        props.onActiveValue(null, -1, info);
        return;
      }

      props.onActiveValue(flattenItem.data.value, index, info);
    }; // Auto active first item when list length or searchValue changed


    (0, _vue.watch)([function () {
      return memoFlattenOptions.value.length;
    }, function () {
      return props.searchValue;
    }], function () {
      setActive(props.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    }); // Auto scroll to item position in single mode

    (0, _vue.watch)(function () {
      return props.open;
    }, function () {
      if (!props.multiple && props.open && props.values.size === 1) {
        var value = Array.from(props.values)[0];
        var index = memoFlattenOptions.value.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        setActive(index);
        (0, _vue.nextTick)(function () {
          scrollIntoView(index);
        });
      } // Force trigger scrollbar visible when open


      if (props.open) {
        (0, _vue.nextTick)(function () {
          var _a;

          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(undefined);
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    }); // ========================== Values ==========================

    var onSelectValue = function onSelectValue(value) {
      if (value !== undefined) {
        props.onSelect(value, {
          selected: !props.values.has(value)
        });
      } // Single mode should always close by select


      if (!props.multiple) {
        props.onToggleOpen(false);
      }
    };

    function renderItem(index) {
      var item = memoFlattenOptions.value[index];
      if (!item) return null;
      var itemData = item.data || {};
      var value = itemData.value,
          label = itemData.label,
          children = itemData.children;
      var attrs = (0, _pickAttrs.default)(itemData, true);
      var mergedLabel = props.childrenAsData ? children : label;
      return item ? (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "aria-label": typeof mergedLabel === 'string' ? mergedLabel : undefined
      }, attrs), {}, {
        "key": index,
        "role": "option",
        "id": "".concat(props.id, "_list_").concat(index),
        "aria-selected": props.values.has(value)
      }), [value]) : null;
    }

    return {
      memoFlattenOptions: memoFlattenOptions,
      renderItem: renderItem,
      listRef: listRef,
      state: state,
      onListMouseDown: onListMouseDown,
      itemPrefixCls: itemPrefixCls,
      setActive: setActive,
      onSelectValue: onSelectValue,
      onKeydown: function onKeydown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case _KeyCode.default.UP:
          case _KeyCode.default.DOWN:
            {
              var offset = 0;

              if (which === _KeyCode.default.UP) {
                offset = -1;
              } else if (which === _KeyCode.default.DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case _KeyCode.default.ENTER:
            {
              // value
              var item = memoFlattenOptions.value[state.activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (props.open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case _KeyCode.default.ESC:
            {
              props.onToggleOpen(false);

              if (props.open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyup: function onKeyup() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  },
  render: function render() {
    var renderItem = this.renderItem,
        listRef = this.listRef,
        onListMouseDown = this.onListMouseDown,
        itemPrefixCls = this.itemPrefixCls,
        setActive = this.setActive,
        onSelectValue = this.onSelectValue,
        memoFlattenOptions = this.memoFlattenOptions,
        $slots = this.$slots;
    var _this$$props = this.$props,
        id = _this$$props.id,
        childrenAsData = _this$$props.childrenAsData,
        values = _this$$props.values,
        height = _this$$props.height,
        itemHeight = _this$$props.itemHeight,
        menuItemSelectedIcon = _this$$props.menuItemSelectedIcon,
        notFoundContent = _this$$props.notFoundContent,
        virtual = _this$$props.virtual,
        onScroll = _this$$props.onScroll,
        onMouseenter = _this$$props.onMouseenter;
    var renderOption = $slots.option;
    var activeIndex = this.state.activeIndex; // ========================== Render ==========================

    if (memoFlattenOptions.length === 0) {
      return (0, _vue.createVNode)("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "class": "".concat(itemPrefixCls, "-empty"),
        "onMousedown": onListMouseDown
      }, [notFoundContent]);
    }

    return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
      "role": "listbox",
      "id": "".concat(id, "_list"),
      "style": {
        height: 0,
        width: 0,
        overflow: 'hidden'
      }
    }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), (0, _vue.createVNode)(_List.default, {
      "itemKey": "key",
      "ref": listRef,
      "data": memoFlattenOptions,
      "height": height,
      "itemHeight": itemHeight,
      "fullHeight": false,
      "onMousedown": onListMouseDown,
      "onScroll": onScroll,
      "virtual": virtual,
      "onMouseenter": onMouseenter,
      "children": function children(_ref2, itemIndex) {
        var _classNames;

        var group = _ref2.group,
            groupOption = _ref2.groupOption,
            data = _ref2.data;
        var label = data.label,
            key = data.key; // Group

        if (group) {
          return (0, _vue.createVNode)("div", {
            "class": (0, _classNames2.default)(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
          }, [renderOption ? renderOption(data) : label !== undefined ? label : key]);
        }

        var disabled = data.disabled,
            value = data.value,
            title = data.title,
            children = data.children,
            style = data.style,
            cls = data.class,
            className = data.className,
            otherProps = __rest(data, ["disabled", "value", "title", "children", "style", "class", "className"]); // Option


        var selected = values.has(value);
        var optionPrefixCls = "".concat(itemPrefixCls, "-option");
        var optionClassName = (0, _classNames2.default)(itemPrefixCls, optionPrefixCls, cls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
        var mergedLabel = childrenAsData ? children : label;
        var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
        var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

        var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

        if (title !== undefined) {
          optionTitle = title;
        }

        return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, otherProps), {}, {
          "aria-selected": selected,
          "class": optionClassName,
          "title": optionTitle,
          "onMousemove": function onMousemove(e) {
            if (otherProps.onMousemove) {
              otherProps.onMousemove(e);
            }

            if (activeIndex === itemIndex || disabled) {
              return;
            }

            setActive(itemIndex);
          },
          "onClick": function onClick(e) {
            if (!disabled) {
              onSelectValue(value);
            }

            if (otherProps.onClick) {
              otherProps.onClick(e);
            }
          },
          "style": style
        }), [(0, _vue.createVNode)("div", {
          "class": "".concat(optionPrefixCls, "-content")
        }, [renderOption ? renderOption(data) : content]), (0, _propsUtil.isValidElement)(menuItemSelectedIcon) || selected, iconVisible && (0, _vue.createVNode)(_TransBtn.default, {
          "class": "".concat(itemPrefixCls, "-option-state"),
          "customizeIcon": menuItemSelectedIcon,
          "customizeIconProps": {
            isSelected: selected
          }
        }, {
          default: function _default() {
            return [selected ? '✓' : null];
          }
        })]);
      }
    }, null)]);
  }
});
OptionList.props = OptionListProps;
var _default2 = OptionList;
exports.default = _default2;