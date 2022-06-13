import { createVNode as _createVNode } from "vue";
import PropTypes from '../../_util/vue-types';
import Trigger from '../../vc-trigger';
import DropdownMenu from './DropdownMenu';
import { OptionProps } from './Option';
import { PlaceMent } from './placement';
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
export default {
  name: 'KeywordTrigger',
  props: {
    loading: PropTypes.looseBool,
    options: PropTypes.arrayOf(OptionProps),
    prefixCls: PropTypes.string,
    placement: PropTypes.oneOf(PlaceMent),
    visible: PropTypes.looseBool,
    transitionName: PropTypes.string,
    getPopupContainer: PropTypes.func
  },
  methods: {
    getDropdownPrefix: function getDropdownPrefix() {
      return "".concat(this.$props.prefixCls, "-dropdown");
    },
    getDropdownElement: function getDropdownElement() {
      var options = this.$props.options;
      return _createVNode(DropdownMenu, {
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
    return _createVNode(Trigger, {
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