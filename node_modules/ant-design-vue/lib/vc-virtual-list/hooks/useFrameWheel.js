"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFrameWheel;

var _raf = _interopRequireDefault(require("../../_util/raf"));

var _isFirefox = _interopRequireDefault(require("../utils/isFirefox"));

var _useOriginScroll = _interopRequireDefault(require("./useOriginScroll"));

function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = 0;
  var nextFrame = null; // Firefox patch

  var wheelValue = null;
  var isMouseScroll = false; // Scroll status sync

  var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);

  function onWheel(event) {
    if (!inVirtual.value) return;

    _raf.default.cancel(nextFrame);

    var deltaY = event.deltaY;
    offsetRef += deltaY;
    wheelValue = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

    if (originScroll(deltaY)) return; // Proxy of scroll events

    if (!_isFirefox.default) {
      event.preventDefault();
    }

    nextFrame = (0, _raf.default)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  } // A patch for firefox


  function onFireFoxScroll(event) {
    if (!inVirtual.value) return;
    isMouseScroll = event.detail === wheelValue;
  }

  return [onWheel, onFireFoxScroll];
}