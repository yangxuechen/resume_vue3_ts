"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useHeights;

var _vue = require("vue");

function useHeights(getKey, onItemAdd, onItemRemove) {
  var instance = new Map();
  var heights = (0, _vue.reactive)({});
  var heightUpdateId = 0;

  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateId) return; // let changed = false;

      instance.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;

          if (heights[key] !== offsetHeight) {
            //changed = true;
            heights[key] = element.offsetHeight;
          }
        }
      });
    });
  }

  function setInstance(item, ins) {
    var key = getKey(item);
    var origin = instance.get(key);

    if (ins) {
      instance.set(key, ins);
      collectHeight();
    } else {
      instance.delete(key);
    } // Instance changed


    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }

  return [setInstance, collectHeight, heights];
}