import { ref, watch } from 'vue';
/**
 * Get sticky column offset width
 */

function useStickyOffsets(colWidths, columns) {
  var stickyOffsets = ref({
    left: [],
    right: []
  });
  var columnCount = ref();
  watch(columns, function () {
    columnCount.value = columns.value.length;
  }, {
    immediate: true
  });
  watch([colWidths, columnCount], function () {
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

export default useStickyOffsets;