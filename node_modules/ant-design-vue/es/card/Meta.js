import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import { getComponent } from '../_util/props-util';
import { defaultConfigProvider } from '../config-provider';
export default defineComponent({
  name: 'ACardMeta',
  props: {
    prefixCls: PropTypes.string,
    title: PropTypes.VNodeChild,
    description: PropTypes.VNodeChild,
    avatar: PropTypes.VNodeChild
  },
  setup: function setup() {
    return {
      configProvider: inject('configProvider', defaultConfigProvider)
    };
  },
  render: function render() {
    var customizePrefixCls = this.$props.prefixCls;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);

    var classString = _defineProperty({}, "".concat(prefixCls, "-meta"), true);

    var avatar = getComponent(this, 'avatar');
    var title = getComponent(this, 'title');
    var description = getComponent(this, 'description');
    var avatarDom = avatar ? _createVNode("div", {
      "class": "".concat(prefixCls, "-meta-avatar")
    }, [avatar]) : null;
    var titleDom = title ? _createVNode("div", {
      "class": "".concat(prefixCls, "-meta-title")
    }, [title]) : null;
    var descriptionDom = description ? _createVNode("div", {
      "class": "".concat(prefixCls, "-meta-description")
    }, [description]) : null;
    var MetaDetail = titleDom || descriptionDom ? _createVNode("div", {
      "class": "".concat(prefixCls, "-meta-detail")
    }, [titleDom, descriptionDom]) : null;
    return _createVNode("div", {
      "class": classString
    }, [avatarDom, MetaDetail]);
  }
});