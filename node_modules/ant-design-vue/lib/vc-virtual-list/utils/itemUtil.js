"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignScrollTop = alignScrollTop;
exports.getNodeHeight = getNodeHeight;
exports.getItemAbsoluteTop = getItemAbsoluteTop;
exports.getItemRelativeTop = getItemRelativeTop;
exports.getCompareItemRelativeTop = getCompareItemRelativeTop;
exports.getScrollPercentage = getScrollPercentage;
exports.getElementScrollPercentage = getElementScrollPercentage;
exports.getRangeIndex = getRangeIndex;
exports.requireVirtual = requireVirtual;
exports.GHOST_ITEM_KEY = void 0;

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Our algorithm have additional one ghost item
 * whose index as `data.length` to simplify the calculation
 */


var GHOST_ITEM_KEY = '__vc_ghost_item__';
/**
 * Safari has the elasticity effect which provides negative `scrollTop` value.
 * We should ignore it since will make scroll animation shake.
 */

exports.GHOST_ITEM_KEY = GHOST_ITEM_KEY;

function alignScrollTop(scrollTop, scrollRange) {
  if (scrollTop < 0) {
    return 0;
  }

  if (scrollTop >= scrollRange) {
    return scrollRange;
  }

  return scrollTop;
}
/**
 * Get node `offsetHeight`. We prefer node is a dom element directly.
 * But if not provided, downgrade to `findDOMNode` to get the real dom element.
 */


function getNodeHeight(node) {
  return node ? node.offsetHeight : 0;
}
/**
 * Calculate the located item absolute top with whole scroll height
 */


function getItemAbsoluteTop(_a) {
  var scrollTop = _a.scrollTop,
      rest = __rest(_a, ["scrollTop"]);

  return scrollTop + getItemRelativeTop(rest);
}
/**
 * Calculate the located item related top with current window height
 */


function getItemRelativeTop(_ref) {
  var itemIndex = _ref.itemIndex,
      itemOffsetPtg = _ref.itemOffsetPtg,
      itemElementHeights = _ref.itemElementHeights,
      scrollPtg = _ref.scrollPtg,
      clientHeight = _ref.clientHeight,
      getItemKey = _ref.getItemKey;
  var locatedItemHeight = itemElementHeights[getItemKey(itemIndex)] || 0;
  var locatedItemTop = scrollPtg * clientHeight;
  var locatedItemOffset = itemOffsetPtg * locatedItemHeight;
  return Math.floor(locatedItemTop - locatedItemOffset);
}

function getCompareItemRelativeTop(_ref2) {
  var locatedItemRelativeTop = _ref2.locatedItemRelativeTop,
      locatedItemIndex = _ref2.locatedItemIndex,
      compareItemIndex = _ref2.compareItemIndex,
      startIndex = _ref2.startIndex,
      endIndex = _ref2.endIndex,
      getItemKey = _ref2.getItemKey,
      itemElementHeights = _ref2.itemElementHeights;
  var originCompareItemTop = locatedItemRelativeTop;
  var compareItemKey = getItemKey(compareItemIndex);

  if (compareItemIndex <= locatedItemIndex) {
    for (var index = locatedItemIndex; index >= startIndex; index -= 1) {
      var key = getItemKey(index);

      if (key === compareItemKey) {
        break;
      }

      var prevItemKey = getItemKey(index - 1);
      originCompareItemTop -= itemElementHeights[prevItemKey] || 0;
    }
  } else {
    for (var _index = locatedItemIndex; _index <= endIndex; _index += 1) {
      var _key = getItemKey(_index);

      if (_key === compareItemKey) {
        break;
      }

      originCompareItemTop += itemElementHeights[_key] || 0;
    }
  }

  return originCompareItemTop;
}

function getScrollPercentage(_ref3) {
  var scrollTop = _ref3.scrollTop,
      scrollHeight = _ref3.scrollHeight,
      clientHeight = _ref3.clientHeight;

  if (scrollHeight <= clientHeight) {
    return 0;
  }

  var scrollRange = scrollHeight - clientHeight;
  var alignedScrollTop = alignScrollTop(scrollTop, scrollRange);
  var scrollTopPtg = alignedScrollTop / scrollRange;
  return scrollTopPtg;
}

function getElementScrollPercentage(element) {
  if (!element) {
    return 0;
  }

  return getScrollPercentage(element);
}
/**
 * Get location item and its align percentage with the scroll percentage.
 * We should measure current scroll position to decide which item is the location item.
 * And then fill the top count and bottom count with the base of location item.
 *
 * `total` should be the real count instead of `total - 1` in calculation.
 */


function getLocationItem(scrollPtg, total) {
  var itemIndex = Math.floor(scrollPtg * total);
  var itemTopPtg = itemIndex / total;
  var itemBottomPtg = (itemIndex + 1) / total;
  var itemOffsetPtg = (scrollPtg - itemTopPtg) / (itemBottomPtg - itemTopPtg);
  return {
    index: itemIndex,
    offsetPtg: itemOffsetPtg
  };
}
/**
 * Get display items start, end, located item index. This is pure math calculation
 */


function getRangeIndex(scrollPtg, itemCount, visibleCount) {
  var _getLocationItem = getLocationItem(scrollPtg, itemCount),
      index = _getLocationItem.index,
      offsetPtg = _getLocationItem.offsetPtg;

  var beforeCount = Math.ceil(scrollPtg * visibleCount);
  var afterCount = Math.ceil((1 - scrollPtg) * visibleCount);
  return {
    itemIndex: index,
    itemOffsetPtg: offsetPtg,
    startIndex: Math.max(0, index - beforeCount),
    endIndex: Math.min(itemCount - 1, index + afterCount)
  };
}

function requireVirtual(height, itemHeight, count, virtual) {
  return virtual !== false && typeof height === 'number' && count * itemHeight > height;
}