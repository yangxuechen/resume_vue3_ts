import _typeof from "@babel/runtime/helpers/esm/typeof";
import { tuple } from '../_util/type';
import PropsTypes from '../_util/vue-types';
export var UploadFileStatus = PropsTypes.oneOf(tuple('error', 'success', 'done', 'uploading', 'removed')); // export const UploadFile = PropsTypes.shape({
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

function UploadFile(_ref) {
  var uid = _ref.uid,
      name = _ref.name;
  if (!uid && uid !== 0) return false;
  if (!['string', 'number'].includes(_typeof(uid))) return false;
  if (name === '' || typeof name !== 'string') return false;
  return true;
}

export var UploadChangeParam = {
  file: PropsTypes.custom(UploadFile),
  fileList: PropsTypes.arrayOf(PropsTypes.custom(UploadFile)),
  event: PropsTypes.object
};
export var ShowUploadListInterface = PropsTypes.shape({
  showRemoveIcon: PropsTypes.looseBool,
  showPreviewIcon: PropsTypes.looseBool
}).loose;
export var UploadLocale = PropsTypes.shape({
  uploading: PropsTypes.string,
  removeFile: PropsTypes.string,
  downloadFile: PropsTypes.string,
  uploadError: PropsTypes.string,
  previewFile: PropsTypes.string
}).loose;
export var UploadProps = {
  type: PropsTypes.oneOf(tuple('drag', 'select')),
  name: PropsTypes.string,
  defaultFileList: PropsTypes.arrayOf(PropsTypes.custom(UploadFile)),
  fileList: PropsTypes.arrayOf(PropsTypes.custom(UploadFile)),
  action: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.func]),
  directory: PropsTypes.looseBool,
  data: PropsTypes.oneOfType([PropsTypes.object, PropsTypes.func]),
  method: PropsTypes.oneOf(tuple('POST', 'PUT', 'PATCH', 'post', 'put', 'patch')),
  headers: PropsTypes.object,
  showUploadList: PropsTypes.oneOfType([PropsTypes.looseBool, ShowUploadListInterface]),
  multiple: PropsTypes.looseBool,
  accept: PropsTypes.string,
  beforeUpload: PropsTypes.func,
  listType: PropsTypes.oneOf(tuple('text', 'picture', 'picture-card')),
  // className: PropsTypes.string,
  remove: PropsTypes.func,
  supportServerRender: PropsTypes.looseBool,
  // style: PropsTypes.object,
  disabled: PropsTypes.looseBool,
  prefixCls: PropsTypes.string,
  customRequest: PropsTypes.func,
  withCredentials: PropsTypes.looseBool,
  openFileDialogOnClick: PropsTypes.looseBool,
  locale: UploadLocale,
  height: PropsTypes.number,
  id: PropsTypes.string,
  previewFile: PropsTypes.func,
  transformFile: PropsTypes.func,
  onChange: PropsTypes.func,
  onPreview: PropsTypes.func,
  onRemove: PropsTypes.func,
  onDownload: PropsTypes.func,
  'onUpdate:fileList': PropsTypes.func
};
export var UploadState = {
  fileList: PropsTypes.arrayOf(PropsTypes.custom(UploadFile)),
  dragState: PropsTypes.string
};
export var UploadListProps = {
  listType: PropsTypes.oneOf(tuple('text', 'picture', 'picture-card')),
  // items: PropsTypes.arrayOf(UploadFile),
  items: PropsTypes.arrayOf(PropsTypes.custom(UploadFile)),
  // items: PropsTypes.any,
  progressAttr: PropsTypes.object,
  prefixCls: PropsTypes.string,
  showRemoveIcon: PropsTypes.looseBool,
  showDownloadIcon: PropsTypes.looseBool,
  showPreviewIcon: PropsTypes.looseBool,
  locale: UploadLocale,
  previewFile: PropsTypes.func,
  onPreview: PropsTypes.func,
  onRemove: PropsTypes.func,
  onDownload: PropsTypes.func
};