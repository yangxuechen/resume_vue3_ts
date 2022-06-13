"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ku_KU = _interopRequireDefault(require("../vc-pagination/locale/ku_KU"));

var _ku_KU2 = _interopRequireDefault(require("../date-picker/locale/ku_KU"));

var _ku_KU3 = _interopRequireDefault(require("../time-picker/locale/ku_KU"));

var _ku_KU4 = _interopRequireDefault(require("../calendar/locale/ku_KU"));

var _default = {
  locale: 'ku-ku',
  Pagination: _ku_KU.default,
  DatePicker: _ku_KU2.default,
  TimePicker: _ku_KU3.default,
  Calendar: _ku_KU4.default,
  Table: {
    filterTitle: 'مێنوی پاڵاوتن',
    filterConfirm: 'پشتڕاستکردنەوە',
    filterReset: 'پاک کردن',
    selectAll: 'هەڵبژاردنی هەموو',
    selectInvert: 'هەڵبژزاردنی پێچەوانە'
  },
  Modal: {
    okText: 'باشە',
    cancelText: 'پاشگەزبونەوە',
    justOkText: 'باشە'
  },
  Popconfirm: {
    okText: 'باشە',
    cancelText: 'پاشگەزبونەوە'
  },
  Transfer: {
    searchPlaceholder: 'گەڕان',
    itemUnit: 'یەکە',
    itemsUnit: 'یەکە'
  },
  Upload: {
    uploading: 'بارکردن...',
    removeFile: 'پاککردنی فایل',
    uploadError: 'هەڵەی بارکردن',
    previewFile: 'پیشاندانی فایل',
    downloadFile: 'وەرگرتنی فایل'
  },
  Empty: {
    description: 'هیچ زانیاریەک نیە'
  }
};
exports.default = _default;