"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _es_ES = _interopRequireDefault(require("../vc-pagination/locale/es_ES"));

var _es_ES2 = _interopRequireDefault(require("../date-picker/locale/es_ES"));

var _es_ES3 = _interopRequireDefault(require("../time-picker/locale/es_ES"));

var _es_ES4 = _interopRequireDefault(require("../calendar/locale/es_ES"));

var _default = {
  locale: 'es',
  Pagination: _es_ES.default,
  DatePicker: _es_ES2.default,
  TimePicker: _es_ES3.default,
  Calendar: _es_ES4.default,
  global: {
    placeholder: 'Seleccione'
  },
  Table: {
    filterTitle: 'Filtrar menú',
    filterConfirm: 'Aceptar',
    filterReset: 'Reiniciar',
    selectAll: 'Seleccionar todo',
    selectInvert: 'Invertir selección',
    sortTitle: 'Ordenar'
  },
  Modal: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
    justOkText: 'Aceptar'
  },
  Popconfirm: {
    okText: 'Aceptar',
    cancelText: 'Cancelar'
  },
  Transfer: {
    searchPlaceholder: 'Buscar aquí',
    itemUnit: 'elemento',
    itemsUnit: 'elementos'
  },
  Upload: {
    uploading: 'Subiendo...',
    removeFile: 'Eliminar archivo',
    uploadError: 'Error al subir el archivo',
    previewFile: 'Vista previa',
    downloadFile: 'Descargar archivo'
  },
  Empty: {
    description: 'No hay datos'
  },
  Icon: {
    icon: 'ícono'
  },
  Text: {
    edit: 'editar',
    copy: 'copiar',
    copied: 'copiado',
    expand: 'expandir'
  },
  PageHeader: {
    back: 'volver'
  }
};
exports.default = _default;