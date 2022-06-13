"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadListProps = exports.UploadState = exports.UploadProps = exports.UploadLocale = exports.ShowUploadListInterface = exports.UploadChangeParam = exports.UploadFileStatus = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var UploadFileStatus = _vueTypes.default.oneOf((0, _type.tuple)('error', 'success', 'done', 'uploading', 'removed')); // export const UploadFile = PropsTypes.shape({
//   uid: PropsTypes.oneOfType([
//     PropsTypes.string,
//     PropsTypes.number,
//   ]),
//   size: PropsTypes.number,
//   name: PropsTypes.string,
//   filename: PropsTypes.string,
//   lastModified: PropsTypes.number,
//   lastModifiedDate: PropsTypes.any,
//   url: PropsTypes.string,
//   status: UploadFileStatus,
//   percent: PropsTypes.number,
//   thumbUrl: PropsTypes.string,
//   originFileObj: PropsTypes.any,
//   response: PropsTypes.any,
//   error: PropsTypes.any,
//   linkProps: PropsTypes.any,
//   type: PropsTypes.string,
// }).loose


exports.UploadFileStatus = UploadFileStatus;

function UploadFile(_ref) {
  var uid = _ref.uid,
      name = _ref.name;
  if (!uid && uid !== 0) return false;
  if (!['string', 'number'].includes((0, _typeof2.default)(uid))) return false;
  if (name === '' || typeof name !== 'string') return false;
  return true;
}

var UploadChangeParam = {
  file: _vueTypes.default.custom(UploadFile),
  fileList: _vueTypes.default.arrayOf(_vueTypes.default.custom(UploadFile)),
  event: _vueTypes.default.object
};
exports.UploadChangeParam = UploadChangeParam;

var ShowUploadListInterface = _vueTypes.default.shape({
  showRemoveIcon: _vueTypes.default.looseBool,
  showPreviewIcon: _vueTypes.default.looseBool
}).loose;

exports.ShowUploadListInterface = ShowUploadListInterface;

var UploadLocale = _vueTypes.default.shape({
  uploading: _vueTypes.default.string,
  removeFile: _vueTypes.default.string,
  downloadFile: _vueTypes.default.string,
  uploadError: _vueTypes.default.string,
  previewFile: _vueTypes.default.string
}).loose;

exports.UploadLocale = UploadLocale;
var UploadProps = {
  type: _vueTypes.default.oneOf((0, _type.tuple)('drag', 'select')),
  name: _vueTypes.default.string,
  defaultFileList: _vueTypes.default.arrayOf(_vueTypes.default.custom(UploadFile)),
  fileList: _vueTypes.default.arrayOf(_vueTypes.default.custom(UploadFile)),
  action: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
  directory: _vueTypes.default.looseBool,
  data: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.func]),
  method: _vueTypes.default.oneOf((0, _type.tuple)('POST', 'PUT', 'PATCH', 'post', 'put', 'patch')),
  headers: _vueTypes.default.object,
  showUploadList: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, ShowUploadListInterface]),
  multiple: _vueTypes.default.looseBool,
  accept: _vueTypes.default.string,
  beforeUpload: _vueTypes.default.func,
  listType: _vueTypes.default.oneOf((0, _type.tuple)('text', 'picture', 'picture-card')),
  // className: PropsTypes.string,
  remove: _vueTypes.default.func,
  supportServerRender: _vueTypes.default.looseBool,
  // style: PropsTypes.object,
  disabled: _vueTypes.default.looseBool,
  prefixCls: _vueTypes.default.string,
  customRequest: _vueTypes.default.func,
  withCredentials: _vueTypes.default.looseBool,
  openFileDialogOnClick: _vueTypes.default.looseBool,
  locale: UploadLocale,
  height: _vueTypes.default.number,
  id: _vueTypes.default.string,
  previewFile: _vueTypes.default.func,
  transformFile: _vueTypes.default.func,
  onChange: _vueTypes.default.func,
  onPreview: _vueTypes.default.func,
  onRemove: _vueTypes.default.func,
  onDownload: _vueTypes.default.func,
  'onUpdate:fileList': _vueTypes.default.func
};
exports.UploadProps = UploadProps;
var UploadState = {
  fileList: _vueTypes.default.arrayOf(_vueTypes.default.custom(UploadFile)),
  dragState: _vueTypes.default.string
};
exports.UploadState = UploadState;
var UploadListProps = {
  listType: _vueTypes.default.oneOf((0, _type.tuple)('text', 'picture', 'picture-card')),
  // items: PropsTypes.arrayOf(UploadFile),
  items: _vueTypes.default.arrayOf(_vueTypes.default.custom(UploadFile)),
  // items: PropsTypes.any,
  progressAttr: _vueTypes.default.object,
  prefixCls: _vueTypes.default.string,
  showRemoveIcon: _vueTypes.default.looseBool,
  showDownloadIcon: _vueTypes.default.looseBool,
  showPreviewIcon: _vueTypes.default.looseBool,
  locale: UploadLocale,
  previewFile: _vueTypes.default.func,
  onPreview: _vueTypes.default.func,
  onRemove: _vueTypes.default.func,
  onDownload: _vueTypes.default.func
};
exports.UploadListProps = UploadListProps;