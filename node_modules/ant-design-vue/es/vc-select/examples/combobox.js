import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import createRef from '../../_util/createRef';
/* eslint-disable no-console */

import Select, { Option } from '..';
import '../assets/index.less';
import { nextTick } from 'vue';
var Combobox = {
  data: function data() {
    this.textareaRef = createRef();
    this.timeoutId;
    return {
      disabled: false,
      value: '',
      options: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    nextTick(function () {
      console.log('Ref:', _this.textareaRef.current);
    });
  },
  methods: {
    onChange: function onChange(value, option) {
      console.log('onChange', value, option);
      this.value = value;
    },
    onKeyDown: function onKeyDown(e) {
      var value = this.value;

      if (e.keyCode === 13) {
        console.log('onEnter', value);
      }
    },
    onSelect: function onSelect(v, option) {
      console.log('onSelect', v, option);
    },
    onSearch: function onSearch(text) {
      console.log('onSearch:', text);
    },
    onAsyncChange: function onAsyncChange(value) {
      var _this2 = this;

      window.clearTimeout(this.timeoutId);
      console.log(value);
      this.options = []; //const value = String(Math.random());

      this.timeoutId = window.setTimeout(function () {
        _this2.options = [{
          value: value
        }, {
          value: "".concat(value, "-").concat(value)
        }];
      }, 1000);
    },
    toggleDisabled: function toggleDisabled() {
      var disabled = this.disabled;
      this.disabled = !disabled;
    }
  },
  render: function render() {
    var _this3 = this;

    var value = this.value,
        disabled = this.disabled;
    return _createVNode("div", null, [_createVNode("h2", null, [_createTextVNode("combobox")]), _createVNode("p", null, [_createVNode("button", {
      "type": "button",
      "onClick": this.toggleDisabled
    }, [_createTextVNode("toggle disabled")]), _createVNode("button", {
      "type": "button",
      "onClick": function onClick() {
        _this3.value = '';
      }
    }, [_createTextVNode("reset")])]), _createVNode("div", null, [_createVNode(Select, {
      "disabled": disabled,
      "style": {
        width: '500px'
      },
      "onChange": this.onChange,
      "onSelect": this.onSelect,
      "onSearch": this.onSearch,
      "onInputKeyDown": this.onKeyDown,
      "notFoundContent": "",
      "allowClear": true,
      "placeholder": "please select",
      "value": value,
      "mode": "combobox",
      "backfill": true,
      "onFocus": function onFocus() {
        return console.log('focus');
      },
      "onBlur": function onBlur() {
        return console.log('blur');
      }
    }, {
      default: function _default() {
        return [_createVNode(Option, {
          "value": "jack"
        }, {
          default: function _default() {
            return [_createVNode("b", {
              "style": {
                color: 'red'
              }
            }, [_createTextVNode("jack")])];
          }
        }), _createVNode(Option, {
          "value": "lucy"
        }, {
          default: function _default() {
            return [_createTextVNode("lucy")];
          }
        }), _createVNode(Option, {
          "value": "disabled",
          "disabled": true
        }, {
          default: function _default() {
            return [_createTextVNode("disabled")];
          }
        }), _createVNode(Option, {
          "value": "yiminghe"
        }, {
          default: function _default() {
            return [_createTextVNode("yiminghe")];
          }
        }), _createVNode(Option, {
          "value": "竹林星光"
        }, {
          default: function _default() {
            return [_createTextVNode("\u7AF9\u6797\u661F\u5149")];
          }
        })];
      }
    }), _createVNode("h3", null, [_createTextVNode("Customize Input Element")]), _createVNode(Select, {
      "mode": "combobox",
      "style": {
        width: '200px'
      },
      "getInputElement": function getInputElement() {
        return _createVNode("textarea", {
          "style": {
            background: 'red'
          },
          "rows": 3,
          "ref": _this3.textareaRef
        }, null);
      },
      "options": [{
        value: 'light'
      }, {
        value: 'bamboo'
      }],
      "allowClear": true,
      "placeholder": "2333"
    }, null), _createVNode("h3", null, [_createTextVNode("Async Input Element")]), _createVNode(Select, {
      "mode": "combobox",
      "notFoundContent": null,
      "style": {
        width: '200px'
      },
      "options": this.options,
      "onChange": this.onAsyncChange
    }, null)])]);
  }
};
export default Combobox;
/* eslint-enable */