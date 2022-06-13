import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import { defineComponent } from 'vue';
/* eslint-disable no-console */

import Select, { Option } from '..';
import '../assets/index.less';
import './single.less';
var Test = defineComponent({
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

    return _createVNode("div", {
      "style": {
        margin: '20px'
      }
    }, [_createVNode("div", {
      "style": {
        height: '150px',
        background: 'rgba(0, 255, 0, 0.1)'
      },
      "onMousedown": function onMousedown(e) {
        e.preventDefault();
      }
    }, [_createTextVNode("Prevent Default")]), _createVNode("h2", null, [_createTextVNode("Single Select")]), _createVNode("div", {
      "style": {
        width: '300px'
      }
    }, [_createVNode(Select, {
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
        return [_createVNode(Option, {
          "value": null
        }, {
          default: function _default() {
            return [_createTextVNode("\u4E0D\u9009\u62E9")];
          }
        }), _createTextVNode(","), _createVNode(Option, {
          "value": "01",
          "text": "jack",
          "title": "jack"
        }, {
          default: function _default() {
            return [_createVNode("b", {
              "style": {
                color: 'red'
              }
            }, [_createTextVNode("jack")])];
          }
        }), _createTextVNode(","), _createVNode(Option, {
          "value": "11",
          "text": "lucy"
        }, {
          default: function _default() {
            return [_createVNode("span", null, [_createTextVNode("lucy")])];
          }
        }), _createTextVNode(","), _createVNode(Option, {
          "value": "21",
          "disabled": true,
          "text": "disabled"
        }, {
          default: function _default() {
            return [_createTextVNode("disabled")];
          }
        }), _createTextVNode(","), _createVNode(Option, {
          "value": "31",
          "text": "yiminghe",
          "class": "test-option",
          "style": {
            background: 'yellow'
          }
        }, {
          default: function _default() {
            return [_createTextVNode("yiminghe")];
          }
        }), _createTextVNode(","), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
          return _createVNode(Option, {
            "key": i,
            "value": String(i),
            "text": String(i)
          }, {
            default: function _default() {
              return [i, _createTextVNode("-text")];
            }
          });
        })];
      }
    })]), _createVNode("h2", null, [_createTextVNode("native select")]), _createVNode("select", {
      "value": value,
      "style": {
        width: '500px'
      },
      "onChange": this.onChange
    }, [_createVNode("option", {
      "value": "01"
    }, [_createTextVNode("jack")]), _createVNode("option", {
      "value": "11"
    }, [_createTextVNode("lucy")]), _createVNode("option", {
      "value": "21",
      "disabled": true
    }, [_createTextVNode("disabled")]), _createVNode("option", {
      "value": "31"
    }, [_createTextVNode("yiminghe")]), [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
      return _createVNode("option", {
        "value": i,
        "key": i
      }, [i]);
    })]), _createVNode("h2", null, [_createTextVNode("RTL Select")]), _createVNode("div", {
      "style": {
        width: '300px'
      }
    }, [_createVNode(Select, {
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
        return [_createVNode(Option, {
          "value": "1"
        }, {
          default: function _default() {
            return [_createTextVNode("1")];
          }
        }), _createVNode(Option, {
          "value": "2"
        }, {
          default: function _default() {
            return [_createTextVNode("2")];
          }
        })];
      }
    })]), _createVNode("p", null, [_createVNode("button", {
      "type": "button",
      "onClick": this.onDestroy
    }, [_createTextVNode("destroy")])])]);
  }
});
export default Test;
/* eslint-enable */