"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _2 = _interopRequireDefault(require(".."));

require("../assets/index.less");

require("./common.less");

function createData(count) {
  var data = new Array(count).fill(undefined).map(function (_, index) {
    return {
      value: index,
      label: "Label ".concat(index)
    };
  });
  return data;
}

function renderItem(item) {
  return (0, _vue.createVNode)("div", {
    "style": {
      margin: '0 16px 0 8px',
      padding: '4px 8px',
      background: 'rgba(255, 0, 0, 0.2)'
    }
  }, [item.label]);
}

function renderRest(items) {
  return (0, _vue.createVNode)("div", {
    "style": {
      margin: '0 16px 0 8px',
      padding: '4px 8px',
      background: 'rgba(255, 0, 0, 0.2)'
    }
  }, [(0, _vue.createTextVNode)("+"), items.length, (0, _vue.createTextVNode)("...")]);
}

var _default = (0, _vue.defineComponent)({
  setup: function setup() {
    var responsive = (0, _vue.ref)(true);
    var data = (0, _vue.ref)(createData(1));
    return function () {
      return (0, _vue.createVNode)("div", {
        "style": {
          padding: '32px'
        }
      }, [(0, _vue.createVNode)("button", {
        "type": "button",
        "onClick": function onClick() {
          responsive.value = !responsive.value;
        }
      }, [responsive.value ? 'Responsive' : 'MaxCount: 6']), (0, _vue.createVNode)("select", {
        "style": {
          width: '200px',
          height: '32px'
        },
        "value": data.value.length,
        "onChange": function onChange(e) {
          data.value = createData(Number(e.target.value));
        }
      }, [(0, _vue.createVNode)("option", {
        "value": 0
      }, [(0, _vue.createTextVNode)("0")]), (0, _vue.createVNode)("option", {
        "value": 1
      }, [(0, _vue.createTextVNode)("1")]), (0, _vue.createVNode)("option", {
        "value": 2
      }, [(0, _vue.createTextVNode)("2")]), (0, _vue.createVNode)("option", {
        "value": 3
      }, [(0, _vue.createTextVNode)("3")]), (0, _vue.createVNode)("option", {
        "value": 5
      }, [(0, _vue.createTextVNode)("5")]), (0, _vue.createVNode)("option", {
        "value": 10
      }, [(0, _vue.createTextVNode)("10")]), (0, _vue.createVNode)("option", {
        "value": 20
      }, [(0, _vue.createTextVNode)("20")]), (0, _vue.createVNode)("option", {
        "value": 200
      }, [(0, _vue.createTextVNode)("200")])]), (0, _vue.createVNode)("div", {
        "style": {
          border: '5px solid green',
          padding: '8px',
          maxWidth: '300px',
          marginTop: '32px'
        }
      }, [(0, _vue.createVNode)(_2.default, {
        "data": data.value,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "maxCount": responsive.value ? 'responsive' : 6
      }, null)])]);
    };
  }
});

exports.default = _default;