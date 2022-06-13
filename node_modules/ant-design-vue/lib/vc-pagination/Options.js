"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _KeyCode = _interopRequireDefault(require("./KeyCode"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));

var _default2 = {
  mixins: [_BaseMixin.default],
  props: {
    disabled: _vueTypes.default.looseBool,
    changeSize: _vueTypes.default.func,
    quickGo: _vueTypes.default.func,
    selectComponentClass: _vueTypes.default.any,
    current: _vueTypes.default.number,
    pageSizeOptions: _vueTypes.default.array.def(['10', '20', '30', '40']),
    pageSize: _vueTypes.default.number,
    buildOptionText: _vueTypes.default.func,
    locale: _vueTypes.default.object,
    rootPrefixCls: _vueTypes.default.string,
    selectPrefixCls: _vueTypes.default.string,
    goButton: _vueTypes.default.any
  },
  data: function data() {
    return {
      goInputText: ''
    };
  },
  methods: {
    getValidValue: function getValidValue() {
      var goInputText = this.goInputText,
          current = this.current;
      return !goInputText || isNaN(goInputText) ? current : Number(goInputText);
    },
    defaultBuildOptionText: function defaultBuildOptionText(opt) {
      return "".concat(opt.value, " ").concat(this.locale.items_per_page);
    },
    handleChange: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing;
      if (e.isComposing || composing || this.goInputText === value) return;
      this.setState({
        goInputText: value
      });
    },
    handleBlur: function handleBlur(e) {
      var _this$$props = this.$props,
          goButton = _this$$props.goButton,
          quickGo = _this$$props.quickGo,
          rootPrefixCls = _this$$props.rootPrefixCls;

      if (goButton) {
        return;
      }

      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-prev")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-next")) >= 0)) {
        return;
      }

      quickGo(this.getValidValue());
    },
    go: function go(e) {
      var goInputText = this.goInputText;

      if (goInputText === '') {
        return;
      }

      if (e.keyCode === _KeyCode.default.ENTER || e.type === 'click') {
        // https://github.com/vueComponent/ant-design-vue/issues/1316
        this.quickGo(this.getValidValue());
        this.setState({
          goInputText: ''
        });
      }
    }
  },
  render: function render() {
    var _this = this;

    var rootPrefixCls = this.rootPrefixCls,
        locale = this.locale,
        changeSize = this.changeSize,
        quickGo = this.quickGo,
        goButton = this.goButton,
        Select = this.selectComponentClass,
        defaultBuildOptionText = this.defaultBuildOptionText,
        selectPrefixCls = this.selectPrefixCls,
        pageSize = this.pageSize,
        pageSizeOptions = this.pageSizeOptions,
        goInputText = this.goInputText,
        disabled = this.disabled;
    var prefixCls = "".concat(rootPrefixCls, "-options");
    var changeSelect = null;
    var goInput = null;
    var gotoButton = null;

    if (!changeSize && !quickGo) {
      return null;
    }

    if (changeSize && Select) {
      var buildOptionText = this.buildOptionText || defaultBuildOptionText;
      var options = pageSizeOptions.map(function (opt, i) {
        return (0, _vue.createVNode)(Select.Option, {
          "key": i,
          "value": opt
        }, {
          default: function _default() {
            return [buildOptionText({
              value: opt
            })];
          }
        });
      });
      changeSelect = (0, _vue.createVNode)(Select, {
        "disabled": disabled,
        "prefixCls": selectPrefixCls,
        "showSearch": false,
        "class": "".concat(prefixCls, "-size-changer"),
        "optionLabelProp": "children",
        "value": (pageSize || pageSizeOptions[0]).toString(),
        "onChange": function onChange(value) {
          return _this.changeSize(Number(value));
        },
        "getPopupContainer": function getPopupContainer(triggerNode) {
          return triggerNode.parentNode;
        }
      }, {
        default: function _default() {
          return [options];
        }
      });
    }

    if (quickGo) {
      if (goButton) {
        gotoButton = typeof goButton === 'boolean' ? (0, _vue.createVNode)("button", {
          "type": "button",
          "onClick": this.go,
          "onKeyup": this.go,
          "disabled": disabled
        }, [locale.jump_to_confirm]) : (0, _vue.createVNode)("span", {
          "onClick": this.go,
          "onKeyup": this.go
        }, [goButton]);
      }

      goInput = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-quick-jumper")
      }, [locale.jump_to, (0, _vue.withDirectives)((0, _vue.createVNode)("input", {
        "disabled": disabled,
        "type": "text",
        "value": goInputText,
        "onInput": this.handleChange,
        "onChange": this.handleChange,
        "onKeyup": this.go,
        "onBlur": this.handleBlur
      }, null), [[_antInputDirective.default]]), locale.page, gotoButton]);
    }

    return (0, _vue.createVNode)("li", {
      "class": "".concat(prefixCls)
    }, [changeSelect, goInput]);
  }
};
exports.default = _default2;