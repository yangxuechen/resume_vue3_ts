import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import PropTypes from '../_util/vue-types';
import BaseMixin from '../_util/BaseMixin';
import { hasProp, getOptionProps, getComponent, splitAttrs } from '../_util/props-util';
import Pager from './Pager';
import Options from './Options';
import LOCALE from './locale/zh_CN';
import KEYCODE from './KeyCode';
import classNames from '../_util/classNames';
import { defineComponent, withDirectives } from 'vue';
import antInput from '../_util/antInputDirective';

function noop() {} // 是否是正整数


function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(_ref) {
  var originalElement = _ref.originalElement;
  return originalElement;
}

function calculatePage(p, state, props) {
  var pageSize = p;

  if (typeof pageSize === 'undefined') {
    pageSize = state.statePageSize;
  }

  return Math.floor((props.total - 1) / pageSize) + 1;
}

export default defineComponent({
  name: 'Pagination',
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: PropTypes.looseBool,
    prefixCls: PropTypes.string.def('rc-pagination'),
    selectPrefixCls: PropTypes.string.def('rc-select'),
    current: PropTypes.number,
    defaultCurrent: PropTypes.number.def(1),
    total: PropTypes.number.def(0),
    pageSize: PropTypes.number,
    defaultPageSize: PropTypes.number.def(10),
    hideOnSinglePage: PropTypes.looseBool.def(false),
    showSizeChanger: PropTypes.looseBool.def(false),
    showLessItems: PropTypes.looseBool.def(false),
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: PropTypes.any,
    showPrevNextJumpers: PropTypes.looseBool.def(true),
    showQuickJumper: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]).def(false),
    showTitle: PropTypes.looseBool.def(true),
    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
    buildOptionText: PropTypes.func,
    showTotal: PropTypes.func,
    simple: PropTypes.looseBool,
    locale: PropTypes.object.def(LOCALE),
    itemRender: PropTypes.func,
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    jumpPrevIcon: PropTypes.any,
    jumpNextIcon: PropTypes.any
  },
  data: function data() {
    var props = getOptionProps(this);
    var hasOnChange = this.onChange !== noop;
    var hasCurrent = ('current' in props);

    if (hasCurrent && !hasOnChange) {
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'); // eslint-disable-line
    }

    var current = this.defaultCurrent;

    if ('current' in props) {
      current = this.current;
    }

    var pageSize = this.defaultPageSize;

    if ('pageSize' in props) {
      pageSize = this.pageSize;
    }

    current = Math.min(current, calculatePage(pageSize, undefined, props));
    return {
      stateCurrent: current,
      stateCurrentInputValue: current,
      statePageSize: pageSize
    };
  },
  watch: {
    current: function current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize: function pageSize(val) {
      var newState = {};
      var current = this.stateCurrent;
      var newCurrent = calculatePage(val, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;

      if (!hasProp(this, 'current')) {
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      }

      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent: function stateCurrent(val, oldValue) {
      var _this = this;

      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      this.$nextTick(function () {
        if (_this.$refs.paginationNode) {
          var lastCurrentNode = _this.$refs.paginationNode.querySelector(".".concat(_this.prefixCls, "-item-").concat(oldValue));

          if (lastCurrentNode && document.activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total: function total() {
      var newState = {};
      var newCurrent = calculatePage(this.pageSize, this.$data, this.$props);

      if (hasProp(this, 'current')) {
        var current = Math.min(this.current, newCurrent);
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      } else {
        var _current = this.stateCurrent;

        if (_current === 0 && newCurrent > 0) {
          _current = 1;
        } else {
          _current = Math.min(this.stateCurrent, newCurrent);
        }

        newState.stateCurrent = _current;
      }

      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage: function getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage: function getJumpNextPage() {
      return Math.min(calculatePage(undefined, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon: function getItemIcon(icon) {
      var prefixCls = this.$props.prefixCls;

      var iconNode = getComponent(this, icon, this.$props) || _createVNode("a", {
        "class": "".concat(prefixCls, "-item-link")
      }, null);

      return iconNode;
    },
    getValidValue: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(undefined, this.$data, this.$props);
      var stateCurrentInputValue = this.$data.stateCurrentInputValue;
      var value;

      if (inputValue === '') {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }

      return value;
    },
    isValid: function isValid(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper: function shouldDisplayQuickJumper() {
      var _this$$props = this.$props,
          showQuickJumper = _this$$props.showQuickJumper,
          pageSize = _this$$props.pageSize,
          total = _this$$props.total;

      if (total <= pageSize) {
        return false;
      }

      return showQuickJumper;
    },
    // calculatePage (p) {
    //   let pageSize = p
    //   if (typeof pageSize === 'undefined') {
    //     pageSize = this.statePageSize
    //   }
    //   return Math.floor((this.total - 1) / pageSize) + 1
    // },
    handleKeyDown: function handleKeyDown(event) {
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.isComposing || e.target.composing) return;
      var value = this.getValidValue(e);
      var stateCurrentInputValue = this.stateCurrentInputValue;

      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }

      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize: function changePageSize(size) {
      var current = this.stateCurrent;
      var preCurrent = current;
      var newCurrent = calculatePage(size, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current; // fix the issue:
      // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.

      if (newCurrent === 0) {
        current = this.stateCurrent;
      }

      if (typeof size === 'number') {
        if (!hasProp(this, 'pageSize')) {
          this.setState({
            statePageSize: size
          });
        }

        if (!hasProp(this, 'current')) {
          this.setState({
            stateCurrent: current,
            stateCurrentInputValue: current
          });
        }
      }

      this.__emit('update:pageSize', size);

      if (current !== preCurrent) {
        this.__emit('update:current', current);
      }

      this.__emit('showSizeChange', current, size);
    },
    handleChange: function handleChange(p) {
      var disabled = this.$props.disabled;
      var page = p;

      if (this.isValid(page) && !disabled) {
        var currentPage = calculatePage(undefined, this.$data, this.$props);

        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }

        if (!hasProp(this, 'current')) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        } // this.__emit('input', page)


        this.__emit('update:current', page);

        this.__emit('change', page, this.statePageSize);

        return page;
      }

      return this.stateCurrent;
    },
    prev: function prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next: function next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev: function jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext: function jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev: function hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext: function hasNext() {
      return this.stateCurrent < calculatePage(undefined, this.$data, this.$props);
    },
    runIfEnter: function runIfEnter(event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }

        callback.apply(void 0, restParams);
      }
    },
    runIfEnterPrev: function runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext: function runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev: function runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext: function runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO: function handleGoTO(event) {
      if (event.keyCode === KEYCODE.ENTER || event.type === 'click') {
        this.handleChange(this.stateCurrentInputValue);
      }
    }
  },
  render: function render() {
    var _classNames;

    var _this$$props2 = this.$props,
        prefixCls = _this$$props2.prefixCls,
        disabled = _this$$props2.disabled;

    var _a = splitAttrs(this.$attrs).extraAttrs,
        className = _a.class,
        restAttrs = __rest(_a, ["class"]); // When hideOnSinglePage is true and there is only 1 page, hide the pager


    if (this.hideOnSinglePage === true && this.total <= this.statePageSize) {
      return null;
    }

    var itemRender = this.itemRender || defaultItemRender;
    var props = this.$props;
    var locale = this.locale;
    var allPages = calculatePage(undefined, this.$data, this.$props);
    var pagerList = [];
    var jumpPrev = null;
    var jumpNext = null;
    var firstPager = null;
    var lastPager = null;
    var gotoButton = null;
    var goButton = this.showQuickJumper && this.showQuickJumper.goButton;
    var pageBufferSize = this.showLessItems ? 1 : 2;
    var stateCurrent = this.stateCurrent,
        statePageSize = this.statePageSize;
    var prevPage = stateCurrent - 1 > 0 ? stateCurrent - 1 : 0;
    var nextPage = stateCurrent + 1 < allPages ? stateCurrent + 1 : allPages;

    if (this.simple) {
      if (goButton) {
        if (typeof goButton === 'boolean') {
          gotoButton = _createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = _createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }

        var _gotoButton = function () {
          return gotoButton;
        }();

        gotoButton = _createVNode("li", {
          "title": this.showTitle ? "".concat(locale.jump_to).concat(this.stateCurrent, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }

      var hasPrev = this.hasPrev();
      var hasNext = this.hasNext();
      return _createVNode("ul", _objectSpread({
        "class": classNames("".concat(prefixCls, " ").concat(prefixCls, "-simple"), className)
      }, restAttrs), [_createVNode("li", {
        "title": this.showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": "".concat(hasPrev ? '' : "".concat(prefixCls, "-disabled"), " ").concat(prefixCls, "-prev"),
        "aria-disabled": !this.hasPrev()
      }, [itemRender({
        page: prevPage,
        type: 'prev',
        originalElement: this.getItemIcon('prevIcon')
      })]), _createVNode("li", {
        "title": this.showTitle ? "".concat(stateCurrent, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [withDirectives(_createVNode("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[antInput]]), _createVNode("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [_createTextVNode("\uFF0F")]), allPages]), _createVNode("li", {
        "title": this.showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": this.hasNext ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": "".concat(hasNext ? '' : "".concat(prefixCls, "-disabled"), " ").concat(prefixCls, "-next"),
        "aria-disabled": !this.hasNext()
      }, [itemRender({
        page: nextPage,
        type: 'next',
        originalElement: this.getItemIcon('nextIcon')
      })]), gotoButton]);
    }

    if (allPages <= 5 + pageBufferSize * 2) {
      var pagerProps = {
        locale: locale,
        rootPrefixCls: prefixCls,
        showTitle: props.showTitle,
        itemRender: itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };

      if (!allPages) {
        pagerList.push(_createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": "noPager",
          "page": allPages,
          "class": "".concat(prefixCls, "-disabled")
        }), null));
      }

      for (var i = 1; i <= allPages; i++) {
        var active = stateCurrent === i;
        pagerList.push(_createVNode(Pager, _objectSpread(_objectSpread({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      var prevItemTitle = this.showLessItems ? locale.prev_3 : locale.prev_5;
      var nextItemTitle = this.showLessItems ? locale.next_3 : locale.next_5;

      if (this.showPrevNextJumpers) {
        var jumpPrevClassString = "".concat(prefixCls, "-jump-prev");

        if (props.jumpPrevIcon) {
          jumpPrevClassString += " ".concat(prefixCls, "-jump-prev-custom-icon");
        }

        jumpPrev = _createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": jumpPrevClassString
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: 'jump-prev',
          originalElement: this.getItemIcon('jumpPrevIcon')
        })]);
        var jumpNextClassString = "".concat(prefixCls, "-jump-next");

        if (props.jumpNextIcon) {
          jumpNextClassString += " ".concat(prefixCls, "-jump-next-custom-icon");
        }

        jumpNext = _createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": jumpNextClassString
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: 'jump-next',
          originalElement: this.getItemIcon('jumpNextIcon')
        })]);
      }

      lastPager = _createVNode(Pager, {
        "locale": locale,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": this.showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = _createVNode(Pager, {
        "locale": locale,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": this.showTitle,
        "itemRender": itemRender
      }, null);
      var left = Math.max(1, stateCurrent - pageBufferSize);
      var right = Math.min(stateCurrent + pageBufferSize, allPages);

      if (stateCurrent - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }

      if (allPages - stateCurrent <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }

      for (var _i = left; _i <= right; _i++) {
        var _active = stateCurrent === _i;

        pagerList.push(_createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": _i,
          "page": _i,
          "active": _active,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null));
      }

      if (stateCurrent - 1 >= pageBufferSize * 2 && stateCurrent !== 1 + 2) {
        pagerList[0] = _createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": "".concat(prefixCls, "-item-after-jump-prev"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev);
      }

      if (allPages - stateCurrent >= pageBufferSize * 2 && stateCurrent !== allPages - 2) {
        pagerList[pagerList.length - 1] = _createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": "".concat(prefixCls, "-item-before-jump-next"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext);
      }

      if (left !== 1) {
        pagerList.unshift(firstPager);
      }

      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }

    var totalText = null;

    if (this.showTotal) {
      totalText = _createVNode("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [this.showTotal(this.total, [this.total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > this.total ? this.total : stateCurrent * statePageSize])]);
    }

    var prevDisabled = !this.hasPrev() || !allPages;
    var nextDisabled = !this.hasNext() || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return _createVNode("ul", _objectSpread(_objectSpread({
      "unselectable": "unselectable",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls), true), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames), className)
    }), [totalText, _createVNode("li", {
      "title": this.showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": "".concat(!prevDisabled ? '' : "".concat(prefixCls, "-disabled"), " ").concat(prefixCls, "-prev"),
      "aria-disabled": prevDisabled
    }, [itemRender({
      page: prevPage,
      type: 'prev',
      originalElement: this.getItemIcon('prevIcon')
    })]), pagerList, _createVNode("li", {
      "title": this.showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": "".concat(!nextDisabled ? '' : "".concat(prefixCls, "-disabled"), " ").concat(prefixCls, "-next"),
      "aria-disabled": nextDisabled
    }, [itemRender({
      page: nextPage,
      type: 'next',
      originalElement: this.getItemIcon('nextIcon')
    })]), _createVNode(Options, {
      "disabled": disabled,
      "locale": locale,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": this.selectComponentClass,
      "selectPrefixCls": this.selectPrefixCls,
      "changeSize": this.showSizeChanger ? this.changePageSize : null,
      "current": stateCurrent,
      "pageSize": statePageSize,
      "pageSizeOptions": this.pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});