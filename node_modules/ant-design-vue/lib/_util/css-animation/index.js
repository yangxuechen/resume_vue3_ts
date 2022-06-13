"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isCssAnimationSupported = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _Event = _interopRequireDefault(require("./Event"));

var _componentClasses = _interopRequireDefault(require("../component-classes"));

var _requestAnimationTimeout = require("../requestAnimationTimeout");

// https://github.com/yiminghe/css-animation 1.5.0
var isCssAnimationSupported = _Event.default.endEvents.length !== 0;
exports.isCssAnimationSupported = isCssAnimationSupported;
var capitalPrefixes = ['Webkit', 'Moz', 'O', // ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';

  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);

    if (ret) {
      break;
    }
  }

  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay); // sometimes, browser bug

    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;

      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (0, _typeof2.default)(transitionName) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : "".concat(transitionName, "-active");
  var end = endCallback;
  var start;
  var active;
  var nodeClasses = (0, _componentClasses.default)(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);
    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event.default.removeEndEventListener(node, node.rcEndListener);

    node.rcEndListener = null; // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.

    if (end) {
      end();
    }
  };

  _Event.default.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }

  nodeClasses.add(className);
  node.rcAnimTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(className);
    nodeClasses.add(activeClassName);

    if (active) {
      (0, _requestAnimationTimeout.requestAnimationTimeout)(active, 0);
    }

    fixBrowserByTimeout(node); // 30ms for firefox
  }, 30);
  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event.default.removeEndEventListener(node, node.rcEndListener);

    node.rcEndListener = null; // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.

    if (callback) {
      callback();
    }
  };

  _Event.default.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }

    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;

  if (value === undefined) {
    v = property;
    property = '';
  }

  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style["".concat(prefix, "Transition").concat(property)] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
var _default = cssAnimation;
exports.default = _default;