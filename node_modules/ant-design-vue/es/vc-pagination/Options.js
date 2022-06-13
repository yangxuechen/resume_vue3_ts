import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import KEYCODE from './KeyCode';
import BaseMixin from '../_util/BaseMixin';
import { withDirectives } from 'vue';
import antInput from '../_util/antInputDirective';
export default {
  mixins: [BaseMixin],
  props: {
    disabled: PropTypes.looseBool,
    changeSize: PropTypes.func,
    quickGo: PropTypes.func,
    selectComponentClass: PropTypes.any,
    current: PropTypes.number,
    pageSizeOptions: PropTypes.array.def(['10', '20', '30', '40']),
    pageSize: PropTypes.number,
    buildOptionText: PropTypes.func,
    locale: PropTypes.object,
    rootPrefixCls: PropTypes.string,
    selectPrefixCls: PropTypes.string,
    goButton: PropTypes.any
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

      if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
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
        return _createVNode(Select.Option, {
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
      changeSelect = _createVNode(Select, {
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
        gotoButton = typeof goButton === 'boolean' ? _createVNode("button", {
          "type": "button",
          "onClick": this.go,
          "onKeyup": this.go,
          "disabled": disabled
        }, [locale.jump_to_confirm]) : _createVNode("span", {
          "onClick": this.go,
          "onKeyup": this.go
        }, [goButton]);
      }

      goInput = _createVNode("div", {
        "class": "".concat(prefixCls, "-quick-jumper")
      }, [locale.jump_to, withDirectives(_createVNode("input", {
        "disabled": disabled,
        "type": "text",
        "value": goInputText,
        "onInput": this.handleChange,
        "onChange": this.handleChange,
        "onKeyup": this.go,
        "onBlur": this.handleBlur
      }, null), [[antInput]]), locale.page, gotoButton]);
    }

    return _createVNode("li", {
      "class": "".concat(prefixCls)
    }, [changeSelect, goInput]);
  }
};