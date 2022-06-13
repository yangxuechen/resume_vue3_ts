import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";

/* eslint-disable no-console */
import Select, { Option } from '..';
import '../assets/index.less';
var Controlled = {
  data: function data() {
    return {
      destroy: false,
      value: 9,
      open: true
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
      this.destroy = true;
    },
    onBlur: function onBlur(v) {
      console.log('onBlur', v);
    },
    onFocus: function onFocus() {
      console.log('onFocus');
    },
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      this.open = open;
    },
    getPopupContainer: function getPopupContainer(node) {
      return node.parentNode;
    }
  },
  render: function render() {
    var open = this.open,
        destroy = this.destroy,
        value = this.value;

    if (destroy) {
      return null;
    }

    return _createVNode("div", {
      "style": {
        margin: '20px'
      }
    }, [_createVNode("h2", null, [_createTextVNode("controlled Select")]), _createVNode("div", {
      "style": {
        width: '300px'
      }
    }, [_createVNode(Select, {
      "id": "my-select",
      "value": value,
      "placeholder": "placeholder",
      "listHeight": 200,
      "style": {
        width: '500px'
      },
      "onBlur": this.onBlur,
      "onFocus": this.onFocus,
      "open": open,
      "optionLabelProp": "children",
      "optionFilterProp": "text",
      "onChange": this.onChange,
      "onDropdownVisibleChange": this.onDropdownVisibleChange
    }, {
      default: function _default() {
        return [_createVNode(Option, {
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
        }), _createVNode(Option, {
          "value": "11",
          "text": "lucy"
        }, {
          default: function _default() {
            return [_createTextVNode("lucy")];
          }
        }), _createVNode(Option, {
          "value": "21",
          "disabled": true,
          "text": "disabled"
        }, {
          default: function _default() {
            return [_createTextVNode("disabled")];
          }
        }), _createVNode(Option, {
          "value": "31",
          "text": "yiminghe"
        }, {
          default: function _default() {
            return [_createTextVNode("yiminghe")];
          }
        }), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
          return _createVNode(Option, {
            "key": i,
            "value": i,
            "text": String(i)
          }, {
            default: function _default() {
              return [i, _createTextVNode("-text")];
            }
          });
        })];
      }
    })])]);
  }
};
export default Controlled;
/* eslint-enable */