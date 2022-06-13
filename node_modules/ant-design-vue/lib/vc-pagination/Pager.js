"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _default2 = {
  name: 'Pager',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    rootPrefixCls: _vueTypes.default.string,
    page: _vueTypes.default.number,
    active: _vueTypes.default.looseBool,
    last: _vueTypes.default.looseBool,
    locale: _vueTypes.default.object,
    showTitle: _vueTypes.default.looseBool,
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
    var cls = (0, _classNames2.default)(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-active"), props.active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _classNames), _cls);
    return (0, _vue.createVNode)("li", {
      "onClick": this.handleClick,
      "onKeypress": this.handleKeyPress,
      "title": this.showTitle ? this.page : null,
      "tabindex": "0",
      "class": cls,
      "style": style
    }, [this.itemRender({
      page: this.page,
      type: 'page',
      originalElement: (0, _vue.createVNode)("a", null, [this.page])
    })]);
  }
};
exports.default = _default2;