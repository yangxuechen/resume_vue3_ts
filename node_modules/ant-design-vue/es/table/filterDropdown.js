import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { reactive, defineComponent, nextTick, computed, watch } from 'vue';
import FilterFilled from '@ant-design/icons-vue/FilterFilled';
import Menu, { SubMenu, MenuItem } from '../menu';
import classNames from '../_util/classNames';
import shallowequal from '../_util/shallowequal';
import Dropdown from '../dropdown';
import Checkbox from '../checkbox';
import Radio from '../radio';
import FilterDropdownMenuWrapper from './FilterDropdownMenuWrapper';
import { FilterMenuProps } from './interface';
import { isValidElement } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import { cloneElement } from '../_util/vnode';
import BaseMixin2 from '../_util/BaseMixin2';
import { generateValueMaps } from './util';

function stopPropagation(e) {
  e.stopPropagation();
}

export default defineComponent({
  name: 'FilterMenu',
  mixins: [BaseMixin2],
  inheritAttrs: false,
  props: initDefaultProps(FilterMenuProps, {
    column: {}
  }),
  setup: function setup(props) {
    var sSelectedKeys = computed(function () {
      return props.selectedKeys;
    });
    var sVisible = computed(function () {
      return 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
    });
    var sValueKeys = computed(function () {
      return generateValueMaps(props.column.filters);
    });
    var state = reactive({
      neverShown: false,
      sSelectedKeys: sSelectedKeys.value,
      sKeyPathOfSelectedItem: {},
      sVisible: sVisible.value,
      sValueKeys: sValueKeys.value
    });
    watch(sSelectedKeys, function () {
      state.sSelectedKeys = sSelectedKeys.value;
    });
    watch(sVisible, function () {
      state.sVisible = sVisible.value;
    });
    watch(sValueKeys, function () {
      state.sValueKeys = sValueKeys.value;
    }); // watchEffect(
    //   () => {
    //     const { column } = nextProps;
    //     if (!shallowequal(preProps.selectedKeys, nextProps.selectedKeys)) {
    //       state.sSelectedKeys = nextProps.selectedKeys;
    //     }
    //     if (!shallowequal((preProps.column || {}).filters, (nextProps.column || {}).filters)) {
    //       state.sValueKeys = generateValueMaps(nextProps.column.filters);
    //     }
    //     if ('filterDropdownVisible' in column) {
    //       state.sVisible = column.filterDropdownVisible;
    //     }
    //     preProps = { ...nextProps };
    //   },
    //   { flush: 'sync' },
    // );

    return state;
  },
  methods: {
    getDropdownVisible: function getDropdownVisible() {
      return !!this.sVisible;
    },
    setSelectedKeys: function setSelectedKeys(_ref) {
      var selectedKeys = _ref.selectedKeys;
      this.setState({
        sSelectedKeys: selectedKeys
      });
    },
    setVisible: function setVisible(visible) {
      var column = this.column;

      if (!('filterDropdownVisible' in column)) {
        this.setState({
          sVisible: visible
        });
      }

      if (column.onFilterDropdownVisibleChange) {
        column.onFilterDropdownVisibleChange(visible);
      }
    },
    handleClearFilters: function handleClearFilters() {
      this.setState({
        sSelectedKeys: []
      }, this.handleConfirm);
    },
    handleConfirm: function handleConfirm() {
      this.setVisible(false); // Call `setSelectedKeys` & `confirm` in the same time will make filter data not up to date
      // https://github.com/ant-design/ant-design/issues/12284

      this.$forceUpdate();
      nextTick(this.confirmFilter2);
    },
    onVisibleChange: function onVisibleChange(visible) {
      this.setVisible(visible);
      var column = this.$props.column; // https://github.com/ant-design/ant-design/issues/17833

      if (!visible && !(column.filterDropdown instanceof Function)) {
        this.confirmFilter2();
      }
    },
    handleMenuItemClick: function handleMenuItemClick(info) {
      var selectedKeys = this.sSelectedKeys;

      if (!info.keyPath || info.keyPath.length <= 1) {
        return;
      }

      var keyPathOfSelectedItem = this.sKeyPathOfSelectedItem;

      if (selectedKeys && selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }

      this.setState({
        sKeyPathOfSelectedItem: keyPathOfSelectedItem
      });
    },
    hasSubMenu: function hasSubMenu() {
      var _this$column$filters = this.column.filters,
          filters = _this$column$filters === void 0 ? [] : _this$column$filters;
      return filters.some(function (item) {
        return !!(item.children && item.children.length > 0);
      });
    },
    confirmFilter2: function confirmFilter2() {
      var _this$$props = this.$props,
          column = _this$$props.column,
          propSelectedKeys = _this$$props.selectedKeys,
          confirmFilter = _this$$props.confirmFilter;
      var selectedKeys = this.sSelectedKeys,
          valueKeys = this.sValueKeys;
      var filterDropdown = column.filterDropdown;

      if (!shallowequal(selectedKeys, propSelectedKeys)) {
        confirmFilter(column, filterDropdown ? selectedKeys : selectedKeys.map(function (key) {
          return valueKeys[key];
        }).filter(function (key) {
          return key !== undefined;
        }));
      }
    },
    renderMenus: function renderMenus(items) {
      var _this = this;

      var _this$$props2 = this.$props,
          dropdownPrefixCls = _this$$props2.dropdownPrefixCls,
          prefixCls = _this$$props2.prefixCls;
      return items.map(function (item) {
        if (item.children && item.children.length > 0) {
          var sKeyPathOfSelectedItem = _this.sKeyPathOfSelectedItem;
          var containSelected = Object.keys(sKeyPathOfSelectedItem).some(function (key) {
            return sKeyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = classNames("".concat(prefixCls, "-dropdown-submenu"), _defineProperty({}, "".concat(dropdownPrefixCls, "-submenu-contain-selected"), containSelected));
          return _createVNode(SubMenu, {
            "title": item.text,
            "popupClassName": subMenuCls,
            "key": item.value
          }, {
            default: function _default() {
              return [_this.renderMenus(item.children)];
            }
          });
        }

        return _this.renderMenuItem(item);
      });
    },
    renderFilterIcon: function renderFilterIcon() {
      var _classNames2;

      var _a, _b;

      var column = this.column,
          locale = this.locale,
          prefixCls = this.prefixCls,
          selectedKeys = this.selectedKeys;
      var filtered = selectedKeys && selectedKeys.length > 0;
      var filterIcon = column.filterIcon;

      if (typeof filterIcon === 'function') {
        filterIcon = filterIcon({
          filtered: filtered,
          column: column
        });
      }

      var dropdownIconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-selected"), 'filtered' in column ? column.filtered : filtered), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), this.getDropdownVisible()), _classNames2));

      if (!filterIcon) {
        return _createVNode(FilterFilled, {
          "title": locale.filterTitle,
          "class": dropdownIconClass,
          "onClick": stopPropagation
        }, null);
      }

      if (filterIcon.length === 1 && isValidElement(filterIcon[0])) {
        return cloneElement(filterIcon[0], {
          title: ((_a = filterIcon.props) === null || _a === void 0 ? void 0 : _a.title) || locale.filterTitle,
          onClick: stopPropagation,
          class: classNames("".concat(prefixCls, "-icon"), dropdownIconClass, (_b = filterIcon.props) === null || _b === void 0 ? void 0 : _b.class)
        });
      }

      return _createVNode("span", {
        "class": classNames("".concat(prefixCls, "-icon"), dropdownIconClass),
        "onClick": stopPropagation
      }, [filterIcon]);
    },
    renderMenuItem: function renderMenuItem(item) {
      var column = this.column;
      var selectedKeys = this.sSelectedKeys;
      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
      var input = multiple ? _createVNode(Checkbox, {
        "checked": selectedKeys && selectedKeys.indexOf(item.value) >= 0
      }, null) : _createVNode(Radio, {
        "checked": selectedKeys && selectedKeys.indexOf(item.value) >= 0
      }, null);
      return _createVNode(MenuItem, {
        "key": item.value
      }, {
        default: function _default() {
          return [input, _createVNode("span", null, [item.text])];
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var originSelectedKeys = this.sSelectedKeys;
    var column = this.column,
        locale = this.locale,
        prefixCls = this.prefixCls,
        dropdownPrefixCls = this.dropdownPrefixCls,
        getPopupContainer = this.getPopupContainer; // default multiple selection in filter dropdown

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    var dropdownMenuClass = classNames(_defineProperty({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !this.hasSubMenu()));
    var filterDropdown = column.filterDropdown;

    if (filterDropdown instanceof Function) {
      filterDropdown = filterDropdown({
        prefixCls: "".concat(dropdownPrefixCls, "-custom"),
        setSelectedKeys: function setSelectedKeys(selectedKeys) {
          return _this2.setSelectedKeys({
            selectedKeys: selectedKeys
          });
        },
        selectedKeys: originSelectedKeys,
        confirm: this.handleConfirm,
        clearFilters: this.handleClearFilters,
        filters: column.filters,
        visible: this.getDropdownVisible(),
        column: column
      });
    }

    var menus = filterDropdown ? _createVNode(FilterDropdownMenuWrapper, {
      "class": "".concat(prefixCls, "-dropdown")
    }, {
      default: function _default() {
        return [filterDropdown];
      }
    }) : _createVNode(FilterDropdownMenuWrapper, {
      "class": "".concat(prefixCls, "-dropdown")
    }, {
      default: function _default() {
        return [_createVNode(Menu, {
          "multiple": multiple,
          "onClick": _this2.handleMenuItemClick,
          "prefixCls": "".concat(dropdownPrefixCls, "-menu"),
          "class": dropdownMenuClass,
          "onSelect": _this2.setSelectedKeys,
          "onDeselect": _this2.setSelectedKeys,
          "selectedKeys": originSelectedKeys,
          "getPopupContainer": getPopupContainer
        }, {
          default: function _default() {
            return [_this2.renderMenus(column.filters)];
          }
        }), _createVNode("div", {
          "class": "".concat(prefixCls, "-dropdown-btns")
        }, [_createVNode("a", {
          "class": "".concat(prefixCls, "-dropdown-link confirm"),
          "onClick": _this2.handleConfirm
        }, [locale.filterConfirm]), _createVNode("a", {
          "class": "".concat(prefixCls, "-dropdown-link clear"),
          "onClick": _this2.handleClearFilters
        }, [locale.filterReset])])];
      }
    });
    return _createVNode(Dropdown, {
      "trigger": ['click'],
      "placement": "bottomRight",
      "visible": this.getDropdownVisible(),
      "onVisibleChange": this.onVisibleChange,
      "getPopupContainer": getPopupContainer,
      "forceRender": true,
      "overlay": menus
    }, {
      default: function _default() {
        return [_this2.renderFilterIcon()];
      }
    });
  }
});