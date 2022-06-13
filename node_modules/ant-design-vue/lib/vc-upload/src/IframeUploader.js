"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));

var _BaseMixin = _interopRequireDefault(require("../../_util/BaseMixin"));

var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));

var _uid = _interopRequireDefault(require("./uid"));

var _warning = _interopRequireDefault(require("../../_util/warning"));

var _propsUtil = require("../../_util/props-util");

var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
}; // diferent from AjaxUpload, can only upload on at one time, serial seriously

var IframeUploader = {
  name: 'IframeUploader',
  mixins: [_BaseMixin.default],
  props: {
    componentTag: _vueTypes.default.string,
    // style: PropTypes.object,
    disabled: _vueTypes.default.looseBool,
    prefixCls: _vueTypes.default.string,
    // className: PropTypes.string,
    accept: _vueTypes.default.string,
    // onStart: PropTypes.func,
    multiple: _vueTypes.default.looseBool,
    // children: PropTypes.any,
    data: _vueTypes.default.oneOfType([_vueTypes.default.object, _vueTypes.default.func]),
    action: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.func]),
    name: _vueTypes.default.string
  },
  data: function data() {
    this.file = {};
    return {
      uploading: false
    };
  },
  methods: {
    onLoad: function onLoad() {
      if (!this.uploading) {
        return;
      }

      var file = this.file;
      var response;

      try {
        var doc = this.getIframeDocument();
        var script = doc.getElementsByTagName('script')[0];

        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }

        response = doc.body.innerHTML;

        this.__emit('success', response, file);
      } catch (err) {
        (0, _warning.default)(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
        response = 'cross-domain';

        this.__emit('error', err, null, file);
      }

      this.endUpload();
    },
    onChange: function onChange() {
      var _this = this;

      var target = this.getFormInputNode(); // ie8/9 don't support FileList Object
      // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files

      var file = this.file = {
        uid: (0, _uid.default)(),
        name: target.value && target.value.substring(target.value.lastIndexOf('\\') + 1, target.value.length)
      };
      this.startUpload();
      var props = this.$props;

      if (!props.beforeUpload) {
        return this.post(file);
      }

      var before = props.beforeUpload(file);

      if (before && before.then) {
        before.then(function () {
          _this.post(file);
        }, function () {
          _this.endUpload();
        });
      } else if (before !== false) {
        this.post(file);
      } else {
        this.endUpload();
      }
    },
    getIframeNode: function getIframeNode() {
      return this.$refs.iframeRef;
    },
    getIframeDocument: function getIframeDocument() {
      return this.getIframeNode().contentDocument;
    },
    getFormNode: function getFormNode() {
      return this.getIframeDocument().getElementById('form');
    },
    getFormInputNode: function getFormInputNode() {
      return this.getIframeDocument().getElementById('input');
    },
    getFormDataNode: function getFormDataNode() {
      return this.getIframeDocument().getElementById('data');
    },
    getFileForMultiple: function getFileForMultiple(file) {
      return this.multiple ? [file] : file;
    },
    getIframeHTML: function getIframeHTML(domain) {
      var domainScript = '';
      var domainInput = '';

      if (domain) {
        var script = 'script';
        domainScript = "<".concat(script, ">document.domain=\"").concat(domain, "\";</").concat(script, ">");
        domainInput = "<input name=\"_documentDomain\" value=\"".concat(domain, "\" />");
      }

      return "\n      <!DOCTYPE html>\n      <html>\n      <head>\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n      <style>\n      body,html {padding:0;margin:0;border:0;overflow:hidden;}\n      </style>\n      ".concat(domainScript, "\n      </head>\n      <body>\n      <form method=\"post\"\n      encType=\"multipart/form-data\"\n      action=\"\" id=\"form\"\n      style=\"display:block;height:9999px;position:relative;overflow:hidden;\">\n      <input id=\"input\" type=\"file\"\n       name=\"").concat(this.name, "\"\n       style=\"position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;\"/>\n      ").concat(domainInput, "\n      <span id=\"data\"></span>\n      </form>\n      </body>\n      </html>\n      ");
    },
    initIframeSrc: function initIframeSrc() {
      if (this.domain) {
        this.getIframeNode().src = "javascript:void((function(){\n          var d = document;\n          d.open();\n          d.domain='".concat(this.domain, "';\n          d.write('');\n          d.close();\n        })())");
      }
    },
    initIframe: function initIframe() {
      var iframeNode = this.getIframeNode();
      var win = iframeNode.contentWindow;
      var doc;
      this.domain = this.domain || '';
      this.initIframeSrc();

      try {
        doc = win.document;
      } catch (e) {
        this.domain = document.domain;
        this.initIframeSrc();
        win = iframeNode.contentWindow;
        doc = win.document;
      }

      doc.open('text/html', 'replace');
      doc.write(this.getIframeHTML(this.domain));
      doc.close();
      this.getFormInputNode().onchange = this.onChange;
    },
    endUpload: function endUpload() {
      if (this.uploading) {
        this.file = {}; // hack avoid batch

        this.uploading = false;
        this.setState({
          uploading: false
        });
        this.initIframe();
      }
    },
    startUpload: function startUpload() {
      if (!this.uploading) {
        this.uploading = true;
        this.setState({
          uploading: true
        });
      }
    },
    updateIframeWH: function updateIframeWH() {
      var rootNode = (0, _propsUtil.findDOMNode)(this);
      var iframeNode = this.getIframeNode();
      iframeNode.style.height = "".concat(rootNode.offsetHeight, "px");
      iframeNode.style.width = "".concat(rootNode.offsetWidth, "px");
    },
    abort: function abort(file) {
      if (file) {
        var uid = file;

        if (file && file.uid) {
          uid = file.uid;
        }

        if (uid === this.file.uid) {
          this.endUpload();
        }
      } else {
        this.endUpload();
      }
    },
    post: function post(file) {
      var _this2 = this;

      var formNode = this.getFormNode();
      var dataSpan = this.getFormDataNode();
      var data = this.$props.data;

      if (typeof data === 'function') {
        data = data(file);
      }

      var inputs = document.createDocumentFragment();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var input = document.createElement('input');
          input.setAttribute('name', key);
          input.value = data[key];
          inputs.appendChild(input);
        }
      }

      dataSpan.appendChild(inputs);
      new Promise(function (resolve) {
        var action = _this2.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }

        resolve(action);
      }).then(function (action) {
        formNode.setAttribute('action', action);
        formNode.submit();
        dataSpan.innerHTML = '';

        _this2.__emit('start', file);
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.updateIframeWH();

      _this3.initIframe();
    });
  },
  updated: function updated() {
    var _this4 = this;

    this.$nextTick(function () {
      _this4.updateIframeWH();
    });
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var _this$$props = this.$props,
        Tag = _this$$props.componentTag,
        disabled = _this$$props.disabled,
        prefixCls = _this$$props.prefixCls;
    var _this$$attrs = this.$attrs,
        className = _this$$attrs.class,
        style = _this$$attrs.style;
    var iframeStyle = (0, _extends2.default)((0, _extends2.default)({}, IFRAME_STYLE), {
      display: this.uploading || disabled ? 'none' : ''
    });
    var cls = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, prefixCls, true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
    return (0, _vue.createVNode)(Tag, {
      "class": cls,
      "style": (0, _extends2.default)({
        position: 'relative',
        zIndex: 0
      }, style)
    }, {
      default: function _default() {
        return [(0, _vue.createVNode)("iframe", {
          "ref": "iframeRef",
          "onLoad": _this5.onLoad,
          "style": iframeStyle
        }, null), (0, _propsUtil.getSlot)(_this5)];
      }
    });
  }
};
var _default2 = IframeUploader;
exports.default = _default2;