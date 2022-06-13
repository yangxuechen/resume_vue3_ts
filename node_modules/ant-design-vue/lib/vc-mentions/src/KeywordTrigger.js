"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _vcTrigger = _interopRequireDefault(require("../../vc-trigger"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _Option = require("./Option");

var _placement = require("./placement");

var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
var _default2 = {
  name: 'KeywordTrigger',
  props: {
    loading: _vueTypes.default.looseBool,
    options: _vueTypes.default.arrayOf(_Option.OptionProps),
    prefixCls: _vueTypes.default.string,
    placement: _vueTypes.default.oneOf(_placement.PlaceMent),
    visible: _vueTypes.default.looseBool,
    transitionName: _vueTypes.default.string,
    getPopupContainer: _vueTypes.default.func
  },
  methods: {
    getDropdownPrefix: function getDropdownPrefix() {
      return "".concat(this.$props.prefixCls, "-dropdown");
    },
    getDropdownElement: function getDropdownElement() {
      var options = this.$props.options;
      return (0, _vue.createVNode)(_DropdownMenu.default, {
        "prefixCls": this.getDropdownPrefix(),
        "options": options
      }, null);
    }
  },
  render: function render() {
    var _a;

    var _this$$props = this.$props,
        visible = _this$$props.visible,
        placement = _this$$props.placement,
        transitionName = _this$$props.transitionName,
        getPopupContainer = _this$$props.getPopupContainer;
    var $slots = this.$slots;
    var children = (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    var popupElement = this.getDropdownElement();
    return (0, _vue.createVNode)(_vcTrigger.default, {
      "prefixCls": this.getDropdownPrefix(),
      "popupVisible": visible,
      "popup": popupElement,
      "popupPlacement": placement === 'top' ? 'topRight' : 'bottomRight',
      "popupTransitionName": transitionName,
      "builtinPlacements": BUILT_IN_PLACEMENTS,
      "getPopupContainer": getPopupContainer
    }, {
      default: function _default() {
        return [children];
      }
    });
  }
};
exports.default = _default2;