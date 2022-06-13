"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

/**
 * Get sticky column offset width
 */
function useStickyOffsets(colWidths, columns) {
  var stickyOffsets = (0, _vue.ref)({
    left: [],
    right: []
  });
  var columnCount = (0, _vue.ref)();
  (0, _vue.watch)(columns, function () {
    columnCount.value = columns.value.length;
  }, {
    immediate: true
  });
  (0, _vue.watch)([colWidths, columnCount], function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;

    for (var start = 0; start < columnCount.value; start += 1) {
      // Left offset
      leftOffsets[start] = left;
      left += colWidths.value[start] || 0; // Right offset

      var end = columnCount.value - start - 1;
      rightOffsets[end] = right;
      right += colWidths.value[end] || 0;
    }

    stickyOffsets.value = {
      left: leftOffsets,
      right: rightOffsets
    };
  });
  return stickyOffsets;
}

var _default = useStickyOffsets;
exports.default = _default;