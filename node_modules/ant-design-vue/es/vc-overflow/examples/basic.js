import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
import { defineComponent, ref } from 'vue';
import Overflow from '..';
import '../assets/index.less';
import './common.less';

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
  return _createVNode("div", {
    "style": {
      margin: '0 16px 0 8px',
      padding: '4px 8px',
      background: 'rgba(255, 0, 0, 0.2)'
    }
  }, [item.label]);
}

function renderRest(items) {
  return _createVNode("div", {
    "style": {
      margin: '0 16px 0 8px',
      padding: '4px 8px',
      background: 'rgba(255, 0, 0, 0.2)'
    }
  }, [_createTextVNode("+"), items.length, _createTextVNode("...")]);
}

export default defineComponent({
  setup: function setup() {
    var responsive = ref(true);
    var data = ref(createData(1));
    return function () {
      return _createVNode("div", {
        "style": {
          padding: '32px'
        }
      }, [_createVNode("button", {
        "type": "button",
        "onClick": function onClick() {
          responsive.value = !responsive.value;
        }
      }, [responsive.value ? 'Responsive' : 'MaxCount: 6']), _createVNode("select", {
        "style": {
          width: '200px',
          height: '32px'
        },
        "value": data.value.length,
        "onChange": function onChange(e) {
          data.value = createData(Number(e.target.value));
        }
      }, [_createVNode("option", {
        "value": 0
      }, [_createTextVNode("0")]), _createVNode("option", {
        "value": 1
      }, [_createTextVNode("1")]), _createVNode("option", {
        "value": 2
      }, [_createTextVNode("2")]), _createVNode("option", {
        "value": 3
      }, [_createTextVNode("3")]), _createVNode("option", {
        "value": 5
      }, [_createTextVNode("5")]), _createVNode("option", {
        "value": 10
      }, [_createTextVNode("10")]), _createVNode("option", {
        "value": 20
      }, [_createTextVNode("20")]), _createVNode("option", {
        "value": 200
      }, [_createTextVNode("200")])]), _createVNode("div", {
        "style": {
          border: '5px solid green',
          padding: '8px',
          maxWidth: '300px',
          marginTop: '32px'
        }
      }, [_createVNode(Overflow, {
        "data": data.value,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "maxCount": responsive.value ? 'responsive' : 6
      }, null)])]);
    };
  }
});