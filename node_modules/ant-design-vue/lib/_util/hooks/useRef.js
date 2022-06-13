"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRef = void 0;

var _vue = require("vue");

var useRef = function useRef() {
  var refs = (0, _vue.ref)({});

  var setRef = function setRef(el, key) {
    refs.value[key] = el;
  };

  (0, _vue.onBeforeUpdate)(function () {
    refs.value = {};
  });
  return [setRef, refs];
};

exports.useRef = useRef;