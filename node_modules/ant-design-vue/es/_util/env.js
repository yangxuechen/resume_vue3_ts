/* eslint-disable no-undef */
// Browser environment sniffing
export var inBrowser = typeof window !== 'undefined';
export var UA = inBrowser && window.navigator.userAgent.toLowerCase();
export var isIE = UA && /msie|trident/.test(UA);
export var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export var isEdge = UA && UA.indexOf('edge/') > 0;
export var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
export var isPhantomJS = UA && /phantomjs/.test(UA);
export var isFF = UA && UA.match(/firefox\/(\d+)/);