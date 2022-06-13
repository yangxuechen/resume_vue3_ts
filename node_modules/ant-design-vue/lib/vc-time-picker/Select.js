"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _propsUtil = require("../_util/props-util");

function noop() {}

var scrollTo = function scrollTo(element, to, duration) {
  // jump to target if duration zero
  if (duration <= 0) {
    requestAnimationFrame(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  requestAnimationFrame(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = {
  name: 'Select',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    prefixCls: _vueTypes.default.string,
    options: _vueTypes.default.array,
    selectedIndex: _vueTypes.default.number,
    type: _vueTypes.default.string // onSelect: PropTypes.func,
    // onMouseEnter: PropTypes.func,

  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // jump to selected option
      _this.scrollToSelected(0);
    });
  },
  watch: {
    selectedIndex: function selectedIndex() {
      var _this2 = this;

      this.$nextTick(function () {
        // smooth scroll to selected option
        _this2.scrollToSelected(120);
      });
    }
  },
  methods: {
    onSelect: function onSelect(value) {
      var type = this.type;

      this.__emit('select', type, value);
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    getOptions: function getOptions() {
      var _this3 = this;

      var options = this.options,
          selectedIndex = this.selectedIndex,
          prefixCls = this.prefixCls;
      return options.map(function (item, index) {
        var _classnames;

        var cls = (0, _classNames.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-select-option-selected"), selectedIndex === index), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classnames));
        var onClick = item.disabled ? noop : function () {
          _this3.onSelect(item.value);
        };

        var onKeyDown = function onKeyDown(e) {
          if (e.keyCode === 13) onClick();else if (e.keyCode === 27) _this3.onEsc();
        };

        return (0, _vue.createVNode)("li", {
          "role": "button",
          "onClick": onClick,
          "class": cls,
          "key": index,
          "disabled": item.disabled,
          "tabindex": "0",
          "onKeydown": onKeyDown
        }, [item.value]);
      });
    },
    handleMouseEnter: function handleMouseEnter(e) {
      this.setState({
        active: true
      });

      this.__emit('mouseenter', e);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.setState({
        active: false
      });
    },
    scrollToSelected: function scrollToSelected(duration) {
      // move to selected item
      var select = (0, _propsUtil.findDOMNode)(this);
      var list = this.$refs.list;

      if (!list) {
        return;
      }

      var index = this.selectedIndex;

      if (index < 0) {
        index = 0;
      }

      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(select, to, duration);
    }
  },
  render: function render() {
    var _cls;

    var prefixCls = this.prefixCls,
        options = this.options,
        active = this.active;

    if (options.length === 0) {
      return null;
    }

    var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-select"), 1), (0, _defineProperty2.default)(_cls, "".concat(prefixCls, "-select-active"), active), _cls);
    return (0, _vue.createVNode)("div", {
      "class": cls,
      "onMouseenter": this.handleMouseEnter,
      "onMouseleave": this.handleMouseLeave
    }, [(0, _vue.createVNode)("ul", {
      "ref": "list"
    }, [this.getOptions()])]);
  }
};
var _default = Select;
exports.default = _default;