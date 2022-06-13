import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import Checkbox from '../checkbox';
import Dropdown from '../dropdown';
import Menu from '../menu';
import classNames from '../_util/classNames';
import { SelectionCheckboxAllProps } from './interface';
import BaseMixin from '../_util/BaseMixin';
import { computed, defineComponent } from 'vue';

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

  var someCheckedNotByDefaultChecked = checkSelection(_extends(_extends({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: false
  })) && !checkSelection(_extends(_extends({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  }));
  var someCheckedByDefaultChecked = checkSelection(_extends(_extends({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: true
  })) && !checkSelection(_extends(_extends({}, props), {
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
    return checkSelection(_extends(_extends({}, props), {
      data: data,
      type: 'every',
      byDefaultChecked: false
    }));
  }

  return checkSelection(_extends(_extends({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  })) || checkSelection(_extends(_extends({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: true
  }));
}

export default defineComponent({
  name: 'SelectionCheckboxAll',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: SelectionCheckboxAllProps,
  setup: function setup(props) {
    return {
      defaultSelections: [],
      checked: computed(function () {
        return getCheckState(props);
      }),
      indeterminate: computed(function () {
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
        return _createVNode(Menu.Item, {
          "key": selection.key || index
        }, {
          default: function _default() {
            return [_createVNode("div", {
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

      var menu = _createVNode(Menu, {
        "class": "".concat(selectionPrefixCls, "-menu"),
        "selectedKeys": []
      }, {
        default: function _default() {
          return [_this2.renderMenus(newSelections)];
        }
      });

      customSelections = newSelections.length > 0 ? _createVNode(Dropdown, {
        "getPopupContainer": getPopupContainer,
        "overlay": menu
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "class": "".concat(selectionPrefixCls, "-down")
          }, [_createVNode(DownOutlined, null, null)])];
        }
      }) : null;
    }

    return _createVNode("div", {
      "class": selectionPrefixCls
    }, [_createVNode(Checkbox, {
      "class": classNames(_defineProperty({}, "".concat(selectionPrefixCls, "-select-all-custom"), customSelections)),
      "checked": checked,
      "indeterminate": indeterminate,
      "disabled": disabled,
      "onChange": this.handleSelectAllChange
    }, null), customSelections]);
  }
});