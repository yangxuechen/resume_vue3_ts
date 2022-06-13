"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFF = exports.isPhantomJS = exports.isChrome = exports.isEdge = exports.isIE9 = exports.isIE = exports.UA = exports.inBrowser = void 0;

/* eslint-disable no-undef */
// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
exports.UA = UA;
var isIE = UA && /msie|trident/.test(UA);
exports.isIE = isIE;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
exports.isIE9 = isIE9;
var isEdge = UA && UA.indexOf('edge/') > 0;
exports.isEdge = isEdge;
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
exports.isChrome = isChrome;
var isPhantomJS = UA && /phantomjs/.test(UA);
exports.isPhantomJS = isPhantomJS;
var isFF = UA && UA.match(/firefox\/(\d+)/);
exports.isFF = isFF;