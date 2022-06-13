import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import BaseMixin from '../_util/BaseMixin';
export default {
  name: 'Pager',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    rootPrefixCls: PropTypes.string,
    page: PropTypes.number,
    active: PropTypes.looseBool,
    last: PropTypes.looseBool,
    locale: PropTypes.object,
    showTitle: PropTypes.looseBool,
    itemRender: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.__emit('click', this.page);
    },
    handleKeyPress: function handleKeyPress(event) {
      this.__emit('keypress', event, this.handleClick, this.page);
    }
  },
  render: function render() {
    var _classNames;

    var _this$$attrs = this.$attrs,
        _cls = _this$$attrs.class,
        style = _this$$attrs.style;
    var props = this.$props;
    var prefixCls = "".concat(props.rootPrefixCls, "-item");
    var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-active"), props.active), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _classNames), _cls);
    return _createVNode("li", {
      "onClick": this.handleClick,
      "onKeypress": this.handleKeyPress,
      "title": this.showTitle ? this.page : null,
      "tabindex": "0",
      "class": cls,
      "style": style
    }, [this.itemRender({
      page: this.page,
      type: 'page',
      originalElement: _createVNode("a", null, [this.page])
    })]);
  }
};