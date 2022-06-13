"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _createRef = _interopRequireDefault(require("../../_util/createRef"));

var _ = _interopRequireWildcard(require(".."));

require("../assets/index.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-console */
var Combobox = {
  data: function data() {
    this.textareaRef = (0, _createRef.default)();
    this.timeoutId;
    return {
      disabled: false,
      value: '',
      options: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    (0, _vue.nextTick)(function () {
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
    return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("combobox")]), (0, _vue.createVNode)("p", null, [(0, _vue.createVNode)("button", {
      "type": "button",
      "onClick": this.toggleDisabled
    }, [(0, _vue.createTextVNode)("toggle disabled")]), (0, _vue.createVNode)("button", {
      "type": "button",
      "onClick": function onClick() {
        _this3.value = '';
      }
    }, [(0, _vue.createTextVNode)("reset")])]), (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_.default, {
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
        return [(0, _vue.createVNode)(_.Option, {
          "value": "jack"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("b", {
              "style": {
                color: 'red'
              }
            }, [(0, _vue.createTextVNode)("jack")])];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "lucy"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("lucy")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "disabled",
          "disabled": true
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("disabled")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "yiminghe"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("yiminghe")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "竹林星光"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("\u7AF9\u6797\u661F\u5149")];
          }
        })];
      }
    }), (0, _vue.createVNode)("h3", null, [(0, _vue.createTextVNode)("Customize Input Element")]), (0, _vue.createVNode)(_.default, {
      "mode": "combobox",
      "style": {
        width: '200px'
      },
      "getInputElement": function getInputElement() {
        return (0, _vue.createVNode)("textarea", {
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
    }, null), (0, _vue.createVNode)("h3", null, [(0, _vue.createTextVNode)("Async Input Element")]), (0, _vue.createVNode)(_.default, {
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
var _default2 = Combobox;
/* eslint-enable */

exports.default = _default2;