"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _ = _interopRequireWildcard(require(".."));

require("../assets/index.less");

require("./single.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-console */
var Test = (0, _vue.defineComponent)({
  data: function data() {
    return {
      destroy: false,
      value: '9'
    };
  },
  methods: {
    onChange: function onChange(e) {
      var value;

      if (e && e.target) {
        value = e.target.value;
      } else {
        value = e;
      }

      console.log('onChange', value);
      this.value = value;
    },
    onDestroy: function onDestroy() {
      this.destroy = 1;
    },
    onBlur: function onBlur(v) {
      console.log('onBlur', v);
    },
    onFocus: function onFocus() {
      console.log('onFocus');
    },
    onSearch: function onSearch(val) {
      console.log('Search:', val);
    }
  },
  render: function render() {
    var value = this.value,
        destroy = this.destroy;

    if (destroy) {
      return null;
    }

    return (0, _vue.createVNode)("div", {
      "style": {
        margin: '20px'
      }
    }, [(0, _vue.createVNode)("div", {
      "style": {
        height: '150px',
        background: 'rgba(0, 255, 0, 0.1)'
      },
      "onMousedown": function onMousedown(e) {
        e.preventDefault();
      }
    }, [(0, _vue.createTextVNode)("Prevent Default")]), (0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("Single Select")]), (0, _vue.createVNode)("div", {
      "style": {
        width: '300px'
      }
    }, [(0, _vue.createVNode)(_.default, {
      "autofocus": true,
      "id": "my-select",
      "value": value,
      "placeholder": "placeholder",
      "showSearch": true,
      "style": {
        width: '500px'
      },
      "onBlur": this.onBlur,
      "onFocus": this.onFocus,
      "onSearch": this.onSearch,
      "allowClear": true,
      "optionFilterProp": "text",
      "onChange": this.onChange,
      "onPopupScroll": function onPopupScroll() {
        console.log('Scroll!');
      }
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_.Option, {
          "value": null
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("\u4E0D\u9009\u62E9")];
          }
        }), (0, _vue.createTextVNode)(","), (0, _vue.createVNode)(_.Option, {
          "value": "01",
          "text": "jack",
          "title": "jack"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("b", {
              "style": {
                color: 'red'
              }
            }, [(0, _vue.createTextVNode)("jack")])];
          }
        }), (0, _vue.createTextVNode)(","), (0, _vue.createVNode)(_.Option, {
          "value": "11",
          "text": "lucy"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("span", null, [(0, _vue.createTextVNode)("lucy")])];
          }
        }), (0, _vue.createTextVNode)(","), (0, _vue.createVNode)(_.Option, {
          "value": "21",
          "disabled": true,
          "text": "disabled"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("disabled")];
          }
        }), (0, _vue.createTextVNode)(","), (0, _vue.createVNode)(_.Option, {
          "value": "31",
          "text": "yiminghe",
          "class": "test-option",
          "style": {
            background: 'yellow'
          }
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("yiminghe")];
          }
        }), (0, _vue.createTextVNode)(","), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
          return (0, _vue.createVNode)(_.Option, {
            "key": i,
            "value": String(i),
            "text": String(i)
          }, {
            default: function _default() {
              return [i, (0, _vue.createTextVNode)("-text")];
            }
          });
        })];
      }
    })]), (0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("native select")]), (0, _vue.createVNode)("select", {
      "value": value,
      "style": {
        width: '500px'
      },
      "onChange": this.onChange
    }, [(0, _vue.createVNode)("option", {
      "value": "01"
    }, [(0, _vue.createTextVNode)("jack")]), (0, _vue.createVNode)("option", {
      "value": "11"
    }, [(0, _vue.createTextVNode)("lucy")]), (0, _vue.createVNode)("option", {
      "value": "21",
      "disabled": true
    }, [(0, _vue.createTextVNode)("disabled")]), (0, _vue.createVNode)("option", {
      "value": "31"
    }, [(0, _vue.createTextVNode)("yiminghe")]), [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
      return (0, _vue.createVNode)("option", {
        "value": i,
        "key": i
      }, [i]);
    })]), (0, _vue.createVNode)("h2", null, [(0, _vue.createTextVNode)("RTL Select")]), (0, _vue.createVNode)("div", {
      "style": {
        width: '300px'
      }
    }, [(0, _vue.createVNode)(_.default, {
      "id": "my-select-rtl",
      "placeholder": "rtl",
      "direction": "rtl",
      "dropdownMatchSelectWidth": 300,
      "dropdownStyle": {
        minWidth: '300px'
      },
      "style": {
        width: '500px'
      }
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)(_.Option, {
          "value": "1"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("1")];
          }
        }), (0, _vue.createVNode)(_.Option, {
          "value": "2"
        }, {
          default: function _default() {
            return [(0, _vue.createTextVNode)("2")];
          }
        })];
      }
    })]), (0, _vue.createVNode)("p", null, [(0, _vue.createVNode)("button", {
      "type": "button",
      "onClick": this.onDestroy
    }, [(0, _vue.createTextVNode)("destroy")])])]);
  }
});
var _default2 = Test;
/* eslint-enable */

exports.default = _default2;