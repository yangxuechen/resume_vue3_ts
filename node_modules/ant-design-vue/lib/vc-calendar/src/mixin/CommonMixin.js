"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  methods: {
    getFormat: function getFormat() {
      var format = this.format;
      var locale = this.locale,
          timePicker = this.timePicker;

      if (!format) {
        if (timePicker) {
          format = locale.dateTimeFormat;
        } else {
          format = locale.dateFormat;
        }
      }

      return format;
    },
    focus: function focus() {
      if (this.focusElement) {
        this.focusElement.focus();
      } else if (this.rootInstance) {
        this.rootInstance.focus();
      }
    },
    saveFocusElement: function saveFocusElement(focusElement) {
      this.focusElement = focusElement;
    },
    saveRoot: function saveRoot(root) {
      this.rootInstance = root;
    }
  }
};
exports.default = _default;