"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPresetColor = isPresetColor;

var _colors = require("../_util/colors");

function isPresetColor(color) {
  return _colors.PresetColorTypes.indexOf(color) !== -1;
}