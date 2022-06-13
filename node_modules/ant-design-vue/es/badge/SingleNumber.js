import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent, onUnmounted, reactive, ref, watch } from 'vue';
import classNames from '../_util/classNames';

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

  return _createVNode("p", {
    "style": style,
    "class": classNames("".concat(prefixCls, "-only-unit"), {
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

export default defineComponent({
  name: 'SingleNumber',
  props: {
    prefixCls: String,
    value: String,
    count: Number
  },
  setup: function setup(props) {
    var originValue = computed(function () {
      return Number(props.value);
    });
    var originCount = computed(function () {
      return Math.abs(props.count);
    });
    var state = reactive({
      prevValue: originValue.value,
      prevCount: originCount.value
    }); // ============================= Events =============================

    var onTransitionEnd = function onTransitionEnd() {
      state.prevValue = originValue.value;
      state.prevCount = originCount.value;
    };

    var timeout = ref(); // Fallback if transition event not support

    watch(originValue, function () {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(function () {
        onTransitionEnd();
      }, 1000);
    }, {
      flush: 'post'
    });
    onUnmounted(function () {
      clearTimeout(timeout.value);
    });
    return function () {
      var unitNodes;
      var offsetStyle = {};
      var value = originValue.value;

      if (state.prevValue === value || Number.isNaN(value) || Number.isNaN(state.prevValue)) {
        // Nothing to change
        unitNodes = [UnitNumber(_extends(_extends({}, props), {
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
          return UnitNumber(_extends(_extends({}, props), {
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

      return _createVNode("span", {
        "class": "".concat(props.prefixCls, "-only"),
        "style": offsetStyle,
        "onTransitionend": function onTransitionend() {
          return onTransitionEnd();
        }
      }, [unitNodes]);
    };
  }
});