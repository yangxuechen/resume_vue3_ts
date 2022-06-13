import _extends from "@babel/runtime/helpers/esm/extends";
var attributes = "accept acceptcharset accesskey action allowfullscreen allowtransparency\nalt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge\ncharset checked classid classname colspan cols content contenteditable contextmenu\ncontrols coords crossorigin data datetime default defer dir disabled download draggable\nenctype form formaction formenctype formmethod formnovalidate formtarget frameborder\nheaders height hidden high href hreflang htmlfor httpequiv icon id inputmode integrity\nis keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media\nmediagroup method min minlength multiple muted name novalidate nonce open\noptimum pattern placeholder poster preload radiogroup readonly rel required\nreversed role rowspan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellcheck src srcdoc srclang srcset start step style\nsummary tabindex target title type usemap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown\n    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick\n    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown\n    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel\n    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough\n    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata\n    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


export default function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _extends({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || mergedConfig.data && match(key, dataPrefix) || mergedConfig.attr && (propList.includes(key) || propList.includes(key.toLowerCase()))) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}