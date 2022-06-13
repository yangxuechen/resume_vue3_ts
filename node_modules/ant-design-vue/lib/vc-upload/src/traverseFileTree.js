"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList); // Check if all the file has been viewed

      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree(item, path) {
    path = path || '';

    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }

          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };

  var _iterator = (0, _createForOfIteratorHelper2.default)(files),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var file = _step.value;

      _traverseFileTree(file.webkitGetAsEntry());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var _default = traverseFileTree;
exports.default = _default;