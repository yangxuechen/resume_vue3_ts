import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import { getOptionProps } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import SearchOutlined from '@ant-design/icons-vue/SearchOutlined';
import Input from '../input';
import { defineComponent } from 'vue';
export var TransferSearchProps = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  handleClear: PropTypes.func,
  disabled: PropTypes.looseBool,
  onChange: PropTypes.func
};
export default defineComponent({
  name: 'Search',
  inheritAttrs: false,
  props: initDefaultProps(TransferSearchProps, {
    placeholder: ''
  }),
  methods: {
    handleChange: function handleChange(e) {
      this.$emit('change', e);
    },
    handleClear2: function handleClear2(e) {
      e.preventDefault();
      var _this$$props = this.$props,
          handleClear = _this$$props.handleClear,
          disabled = _this$$props.disabled;

      if (!disabled && handleClear) {
        handleClear(e);
      }
    }
  },
  render: function render() {
    var _getOptionProps = getOptionProps(this),
        placeholder = _getOptionProps.placeholder,
        value = _getOptionProps.value,
        prefixCls = _getOptionProps.prefixCls,
        disabled = _getOptionProps.disabled;

    var icon = value && value.length > 0 ? _createVNode("a", {
      "href": "#",
      "class": "".concat(prefixCls, "-action"),
      "onClick": this.handleClear2
    }, [_createVNode(CloseCircleFilled, null, null)]) : _createVNode("span", {
      "class": "".concat(prefixCls, "-action")
    }, [_createVNode(SearchOutlined, null, null)]);
    return _createVNode(_Fragment, null, [_createVNode(Input, {
      "placeholder": placeholder,
      "class": prefixCls,
      "value": value,
      "onChange": this.handleChange,
      "disabled": disabled
    }, null), icon]);
  }
});