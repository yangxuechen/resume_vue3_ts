"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ga_IE = _interopRequireDefault(require("../vc-pagination/locale/ga_IE"));

var _ga_IE2 = _interopRequireDefault(require("../date-picker/locale/ga_IE"));

var _ga_IE3 = _interopRequireDefault(require("../time-picker/locale/ga_IE"));

var _ga_IE4 = _interopRequireDefault(require("../calendar/locale/ga_IE"));

var _default = {
  locale: 'ga_IE',
  Pagination: _ga_IE.default,
  DatePicker: _ga_IE2.default,
  TimePicker: _ga_IE3.default,
  Calendar: _ga_IE4.default,
  Table: {
    filterTitle: 'Scagaire roghchlár',
    filterConfirm: 'Ceart go leor',
    filterReset: 'Athshocraigh',
    selectAll: 'Roghnaigh an leathanach reatha',
    selectInvert: 'Inbhéartaigh an leathanach reatha'
  },
  Modal: {
    okText: 'Ceart go leor',
    cancelText: 'Cealaigh',
    justOkText: 'Ceart go leor'
  },
  Popconfirm: {
    okText: 'Ceart go leor',
    cancelText: 'Cealaigh'
  },
  Transfer: {
    searchPlaceholder: 'Cuardaigh anseo',
    itemUnit: 'mír',
    itemsUnit: 'míreanna'
  },
  Upload: {
    uploading: 'Uaslódáil ...',
    removeFile: 'Bain comhad',
    uploadError: 'Earráid uaslódáil',
    previewFile: 'Comhad réamhamhairc',
    downloadFile: 'Íoslódáil an comhad'
  },
  Empty: {
    description: 'Gan aon sonraí'
  }
};
exports.default = _default;