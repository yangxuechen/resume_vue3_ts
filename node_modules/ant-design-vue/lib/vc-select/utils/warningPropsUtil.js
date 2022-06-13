"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _warning = _interopRequireWildcard(require("../../vc-util/warning"));

var _legacyUtil = require("./legacyUtil");

var _commonUtil = require("./commonUtil");

var _propsUtil = require("../../_util/props-util");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autofocus = props.autofocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = mode === 'multiple' || mode === 'tags';
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || (0, _legacyUtil.convertChildrenToData)(children); // `tags` should not set option as disabled

  (0, _warning.default)(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` should not use `optionLabelProp`

  (0, _warning.default)(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  (0, _warning.default)(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  (0, _warning.default)(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  (0, _warning.noteOnce)(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    (0, _warning.default)(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  (0, _warning.noteOnce)(!defaultOpen || autofocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autofocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = (0, _commonUtil.toArray)(value);
    (0, _warning.default)(!labelInValue || values.every(function (val) {
      return (0, _typeof2.default)(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: any }` when you set `labelInValue` to `true`');
    (0, _warning.default)(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    children.some(function (node) {
      var _a;

      if (!(0, _propsUtil.isValidElement)(node) || !node.type) {
        return false;
      }

      var type = node.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var childs = ((_a = node.children) === null || _a === void 0 ? void 0 : _a.default()) || [];
        var allChildrenValid = childs.every(function (subNode) {
          if (!(0, _propsUtil.isValidElement)(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      (0, _warning.default)(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    (0, _warning.default)(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

var _default = warningProps;
exports.default = _default;