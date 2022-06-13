"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

function UnitNumber(_ref) {
  var prefixCls = _ref.prefixCls,
      value = _ref.value,
      current = _ref.current,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset;
  var style;

  if (offset) {
    style = {
      position: 'absolute',
      top: "".concat(offset, "00%"),
      left: 0
    };
  }

  return (0, _vue.createVNode)("p", {
    "style": style,
    "class": (0, _classNames.default)("".concat(prefixCls, "-only-unit"), {
      current: current
    })
  }, [value]);
}

function getOffset(start, end, unit) {
  var index = start;
  var offset = 0;

  while ((index + 10) % 10 !== end) {
    index += unit;
    offset += unit;
  }

  return offset;
}

var _default = (0, _vue.defineComponent)({
  name: 'SingleNumber',
  props: {
    prefixCls: String,
    value: String,
    count: Number
  },
  setup: function setup(props) {
    var originValue = (0, _vue.computed)(function () {
      return Number(props.value);
    });
    var originCount = (0, _vue.computed)(function () {
      return Math.abs(props.count);
    });
    var state = (0, _vue.reactive)({
      prevValue: originValue.value,
      prevCount: originCount.value
    }); // ============================= Events =============================

    var onTransitionEnd = function onTransitionEnd() {
      state.prevValue = originValue.value;
      state.prevCount = originCount.value;
    };

    var timeout = (0, _vue.ref)(); // Fallback if transition event not support

    (0, _vue.watch)(originValue, function () {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(function () {
        onTransitionEnd();
      }, 1000);
    }, {
      flush: 'post'
    });
    (0, _vue.onUnmounted)(function () {
      clearTimeout(timeout.value);
    });
    return function () {
      var unitNodes;
      var offsetStyle = {};
      var value = originValue.value;

      if (state.prevValue === value || Number.isNaN(value) || Number.isNaN(state.prevValue)) {
        // Nothing to change
        unitNodes = [UnitNumber((0, _extends2.default)((0, _extends2.default)({}, props), {
          current: true
        }))];
        offsetStyle = {
          transition: 'none'
        };
      } else {
        unitNodes = []; // Fill basic number units

        var end = value + 10;
        var unitNumberList = [];

        for (var index = value; index <= end; index += 1) {
          unitNumberList.push(index);
        } // Fill with number unit nodes


        var prevIndex = unitNumberList.findIndex(function (n) {
          return n % 10 === state.prevValue;
        });
        unitNodes = unitNumberList.map(function (n, index) {
          var singleUnit = n % 10;
          return UnitNumber((0, _extends2.default)((0, _extends2.default)({}, props), {
            value: singleUnit,
            offset: index - prevIndex,
            current: index === prevIndex
          }));
        }); // Calculate container offset value

        var unit = state.prevCount < originCount.value ? 1 : -1;
        offsetStyle = {
          transform: "translateY(".concat(-getOffset(state.prevValue, value, unit), "00%)")
        };
      }

      return (0, _vue.createVNode)("span", {
        "class": "".concat(props.prefixCls, "-only"),
        "style": offsetStyle,
        "onTransitionend": function onTransitionend() {
          return onTransitionEnd();
        }
      }, [unitNodes]);
    };
  }
});

exports.default = _default;