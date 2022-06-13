"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _dropdown = _interopRequireDefault(require("../dropdown"));

var _menu = _interopRequireDefault(require("../menu"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _interface = require("./interface");

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

function checkSelection(_ref) {
  var store = _ref.store,
      getCheckboxPropsByItem = _ref.getCheckboxPropsByItem,
      getRecordKey = _ref.getRecordKey,
      data = _ref.data,
      type = _ref.type,
      byDefaultChecked = _ref.byDefaultChecked;
  return byDefaultChecked ? data[type](function (item, i) {
    return getCheckboxPropsByItem(item, i).defaultChecked;
  }) : data[type](function (item, i) {
    return store.selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
  });
}

function getIndeterminateState(props) {
  var store = props.store,
      data = props.data;

  if (!data.length) {
    return false;
  }

  var someCheckedNotByDefaultChecked = checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: false
  })) && !checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  }));
  var someCheckedByDefaultChecked = checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: true
  })) && !checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: true
  }));

  if (store.selectionDirty) {
    return someCheckedNotByDefaultChecked;
  }

  return someCheckedNotByDefaultChecked || someCheckedByDefaultChecked;
}

function getCheckState(props) {
  var store = props.store,
      data = props.data;

  if (!data.length) {
    return false;
  }

  if (store.selectionDirty) {
    return checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
      data: data,
      type: 'every',
      byDefaultChecked: false
    }));
  }

  return checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  })) || checkSelection((0, _extends2.default)((0, _extends2.default)({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: true
  }));
}

var _default2 = (0, _vue.defineComponent)({
  name: 'SelectionCheckboxAll',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: _interface.SelectionCheckboxAllProps,
  setup: function setup(props) {
    return {
      defaultSelections: [],
      checked: (0, _vue.computed)(function () {
        return getCheckState(props);
      }),
      indeterminate: (0, _vue.computed)(function () {
        return getIndeterminateState(props);
      })
    };
  },
  created: function created() {
    var props = this.$props;
    this.defaultSelections = props.hideDefaultSelections ? [] : [{
      key: 'all',
      text: props.locale.selectAll
    }, {
      key: 'invert',
      text: props.locale.selectInvert
    }];
  },
  methods: {
    handleSelectAllChange: function handleSelectAllChange(e) {
      var checked = e.target.checked;
      this.$emit('select', checked ? 'all' : 'removeAll', 0, null);
    },
    renderMenus: function renderMenus(selections) {
      var _this = this;

      return selections.map(function (selection, index) {
        return (0, _vue.createVNode)(_menu.default.Item, {
          "key": selection.key || index
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "onClick": function onClick() {
                _this.$emit('select', selection.key, index, selection.onSelect);
              }
            }, [selection.text])];
          }
        });
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var disabled = this.disabled,
        prefixCls = this.prefixCls,
        selections = this.selections,
        getPopupContainer = this.getPopupContainer,
        checked = this.checked,
        indeterminate = this.indeterminate;
    var selectionPrefixCls = "".concat(prefixCls, "-selection");
    var customSelections = null;

    if (selections) {
      var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
      var menu = (0, _vue.createVNode)(_menu.default, {
        "class": "".concat(selectionPrefixCls, "-menu"),
        "selectedKeys": []
      }, {
        default: function _default() {
          return [_this2.renderMenus(newSelections)];
        }
      });
      customSelections = newSelections.length > 0 ? (0, _vue.createVNode)(_dropdown.default, {
        "getPopupContainer": getPopupContainer,
        "overlay": menu
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": "".concat(selectionPrefixCls, "-down")
          }, [(0, _vue.createVNode)(_DownOutlined.default, null, null)])];
        }
      }) : null;
    }

    return (0, _vue.createVNode)("div", {
      "class": selectionPrefixCls
    }, [(0, _vue.createVNode)(_checkbox.default, {
      "class": (0, _classNames2.default)((0, _defineProperty2.default)({}, "".concat(selectionPrefixCls, "-select-all-custom"), customSelections)),
      "checked": checked,
      "indeterminate": indeterminate,
      "disabled": disabled,
      "onChange": this.handleSelectAllChange
    }, null), customSelections]);
  }
});

exports.default = _default2;