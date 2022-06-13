"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../_util/BaseMixin"));

var _propsUtil = require("../_util/props-util");

var _Pager = _interopRequireDefault(require("./Pager"));

var _Options = _interopRequireDefault(require("./Options"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _KeyCode = _interopRequireDefault(require("./KeyCode"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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

var _default = (0, _vue.defineComponent)({
  name: 'Pagination',
  mixins: [_BaseMixin.default],
  inheritAttrs: false,
  props: {
    disabled: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string.def('rc-pagination'),
    selectPrefixCls: _vueTypes.default.string.def('rc-select'),
    current: _vueTypes.default.number,
    defaultCurrent: _vueTypes.default.number.def(1),
    total: _vueTypes.default.number.def(0),
    pageSize: _vueTypes.default.number,
    defaultPageSize: _vueTypes.default.number.def(10),
    hideOnSinglePage: _vueTypes.default.looseBool.def(false),
    showSizeChanger: _vueTypes.default.looseBool.def(false),
    showLessItems: _vueTypes.default.looseBool.def(false),
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: _vueTypes.default.any,
    showPrevNextJumpers: _vueTypes.default.looseBool.def(true),
    showQuickJumper: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, _vueTypes.default.object]).def(false),
    showTitle: _vueTypes.default.looseBool.def(true),
    pageSizeOptions: _vueTypes.default.arrayOf(_vueTypes.default.string),
    buildOptionText: _vueTypes.default.func,
    showTotal: _vueTypes.default.func,
    simple: _vueTypes.default.looseBool,
    locale: _vueTypes.default.object.def(_zh_CN.default),
    itemRender: _vueTypes.default.func,
    prevIcon: _vueTypes.default.any,
    nextIcon: _vueTypes.default.any,
    jumpPrevIcon: _vueTypes.default.any,
    jumpNextIcon: _vueTypes.default.any
  },
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
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

      if (!(0, _propsUtil.hasProp)(this, 'current')) {
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

      if ((0, _propsUtil.hasProp)(this, 'current')) {
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
      var iconNode = (0, _propsUtil.getComponent)(this, icon, this.$props) || (0, _vue.createVNode)("a", {
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
      if (event.keyCode === _KeyCode.default.ARROW_UP || event.keyCode === _KeyCode.default.ARROW_DOWN) {
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

      if (e.keyCode === _KeyCode.default.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === _KeyCode.default.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === _KeyCode.default.ARROW_DOWN) {
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
        if (!(0, _propsUtil.hasProp)(this, 'pageSize')) {
          this.setState({
            statePageSize: size
          });
        }

        if (!(0, _propsUtil.hasProp)(this, 'current')) {
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

        if (!(0, _propsUtil.hasProp)(this, 'current')) {
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
      if (event.keyCode === _KeyCode.default.ENTER || event.type === 'click') {
        this.handleChange(this.stateCurrentInputValue);
      }
    }
  },
  render: function render() {
    var _classNames;

    var _this$$props2 = this.$props,
        prefixCls = _this$$props2.prefixCls,
        disabled = _this$$props2.disabled;

    var _a = (0, _propsUtil.splitAttrs)(this.$attrs).extraAttrs,
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
          gotoButton = (0, _vue.createVNode)("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = (0, _vue.createVNode)("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }

        var _gotoButton = function () {
          return gotoButton;
        }();

        gotoButton = (0, _vue.createVNode)("li", {
          "title": this.showTitle ? "".concat(locale.jump_to).concat(this.stateCurrent, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }

      var hasPrev = this.hasPrev();
      var hasNext = this.hasNext();
      return (0, _vue.createVNode)("ul", (0, _objectSpread2.default)({
        "class": (0, _classNames2.default)("".concat(prefixCls, " ").concat(prefixCls, "-simple"), className)
      }, restAttrs), [(0, _vue.createVNode)("li", {
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
      })]), (0, _vue.createVNode)("li", {
        "title": this.showTitle ? "".concat(stateCurrent, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [(0, _vue.withDirectives)((0, _vue.createVNode)("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[_antInputDirective.default]]), (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [(0, _vue.createTextVNode)("\uFF0F")]), allPages]), (0, _vue.createVNode)("li", {
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
        pagerList.push((0, _vue.createVNode)(_Pager.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pagerProps), {}, {
          "key": "noPager",
          "page": allPages,
          "class": "".concat(prefixCls, "-disabled")
        }), null));
      }

      for (var i = 1; i <= allPages; i++) {
        var active = stateCurrent === i;
        pagerList.push((0, _vue.createVNode)(_Pager.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pagerProps), {}, {
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

        jumpPrev = (0, _vue.createVNode)("li", {
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

        jumpNext = (0, _vue.createVNode)("li", {
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

      lastPager = (0, _vue.createVNode)(_Pager.default, {
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
      firstPager = (0, _vue.createVNode)(_Pager.default, {
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

        pagerList.push((0, _vue.createVNode)(_Pager.default, {
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
        pagerList[0] = (0, _vue.createVNode)(_Pager.default, {
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
        pagerList[pagerList.length - 1] = (0, _vue.createVNode)(_Pager.default, {
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
      totalText = (0, _vue.createVNode)("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [this.showTotal(this.total, [this.total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > this.total ? this.total : stateCurrent * statePageSize])]);
    }

    var prevDisabled = !this.hasPrev() || !allPages;
    var nextDisabled = !this.hasNext() || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return (0, _vue.createVNode)("ul", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      "unselectable": "unselectable",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames), className)
    }), [totalText, (0, _vue.createVNode)("li", {
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
    })]), pagerList, (0, _vue.createVNode)("li", {
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
    })]), (0, _vue.createVNode)(_Options.default, {
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

exports.default = _default;