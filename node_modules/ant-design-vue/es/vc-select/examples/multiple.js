import _extends from "@babel/runtime/helpers/esm/extends";
import { resolveDirective as _resolveDirective, createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";

/* eslint-disable no-console */
import Select, { Option } from '..';
import '../assets/index.less';
var children = [];

var _loop = function _loop(i) {
  children.push(_createVNode(Option, {
    "key": i.toString(36) + i,
    "disabled": i === 10,
    "title": "\u4E2D\u6587".concat(i)
  }, {
    default: function _default() {
      return "\u4E2D\u6587".concat(i);
    }
  }));
};

for (var i = 10; i < 36; i += 1) {
  _loop(i);
}

var Test = {
  data: function data() {
    return {
      state: {
        useAnim: true,
        showArrow: false,
        loading: false,
        value: ['a10']
      }
    };
  },
  methods: {
    setState: function setState(state) {
      _extends(this.state, state);
    },
    onChange: function onChange(value, options) {
      console.log('onChange', value, options);
      this.setState({
        value: value
      });
    },
    onSelect: function onSelect() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log(args);
    },
    onDeselect: function onDeselect() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.log(args);
    },
    useAnim: function useAnim(e) {
      this.setState({
        useAnim: e.target.checked
      });
    },
    showArrow: function showArrow(e) {
      this.setState({
        showArrow: e.target.checked
      });
    },
    loading: function loading(e) {
      this.setState({
        loading: e.target.checked
      });
    }
  },
  render: function render() {
    var _this$state = this.state,
        useAnim = _this$state.useAnim,
        showArrow = _this$state.showArrow,
        loading = _this$state.loading,
        value = _this$state.value;
    return _createVNode("div", {
      "style": "margin: 20px"
    }, [_createVNode("h2", null, [_createTextVNode("multiple select\uFF08scroll the menu\uFF09")]), _createVNode("p", null, [_createVNode("label", {
      "html-for": "useAnim"
    }, [_createTextVNode("anim"), _createVNode("input", {
      "id": "useAnim",
      "checked": useAnim,
      "type": "checkbox",
      "onChange": this.useAnim
    }, null)]), _createVNode("p", null, null), _createVNode("label", {
      "html-for": "showArrow"
    }, [_createTextVNode("showArrow"), _createVNode("input", {
      "id": "showArrow",
      "checked": showArrow,
      "type": "checkbox",
      "onChange": this.showArrow
    }, null)])]), _createVNode("p", null, [_createVNode("label", {
      "html-for": "loading"
    }, [_createTextVNode("loading"), _createVNode("input", {
      "id": "loading",
      "checked": loading,
      "type": "checkbox",
      "onChange": this.loading
    }, null)])]), _createVNode("div", {
      "style": {
        width: '300px'
      }
    }, [_createVNode(Select, {
      "value": value,
      "animation": useAnim ? 'slide-up' : null,
      "choiceTransitionName": "rc-select-selection__choice-zoom",
      "style": {
        width: '500px'
      },
      "mode": "multiple",
      "loading": loading,
      "showArrow": showArrow,
      "allowClear": true,
      "optionFilterProp": "children",
      "optionLabelProp": "children",
      "onSelect": this.onSelect,
      "onDeselect": this.onDeselect,
      "placeholder": "please select",
      "onChange": this.onChange,
      "onFocus": function onFocus() {
        return console.log('focus');
      },
      "onBlur": function onBlur(v) {
        return console.log('blur', v);
      },
      "tokenSeparators": [' ', ',']
    }, {
      default: function _default() {
        return [children];
      }
    })])]);
  }
};
export default Test;
/* eslint-enable */