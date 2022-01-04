<template>
  <div class="rs-icon">
    <icon-font :type="iconType" @click="onClick" class="icon" />
    <div class="rs-icon-title" :title="iconType" v-if="showText">
      {{ iconType }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineProps, reactive, ref } from "vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3104671_aj46ospf9wm.js",
});

const props = defineProps({
  iconType: { type: String, required: true },
  showText: { type: Boolean, default: false },
});

const onClick = () => {
  message.info(props.iconType);
};
</script>

<style lang="less" scoped>
.rs-icon {
  // width: 100%;

  .icon:hover {
    transform: scale(1.2);
  }

  .rs-icon-title {
    width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px !important;
  }
}
</style>
