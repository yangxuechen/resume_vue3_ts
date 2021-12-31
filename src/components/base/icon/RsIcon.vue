<template>
  <div class="rs-icon">
    <icon-font :type="iconType" @click="openTool" class="icon" />
    <div class="rs-icon-title" :title="iconType" v-if="showText">
      {{ iconType }}
    </div>
    <icon-tool :visible="visible" @close="onClose"></icon-tool>
  </div>
</template>

<script lang="ts" setup>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineProps, ref } from "vue";
import IconTool from "./IconTool.vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3104671_aj46ospf9wm.js",
});

const props = defineProps({
  iconType: { type: String, required: true },
  showText: { type: Boolean, default: false },
});

const visible = ref<boolean>(false);

const openTool = () => {
  visible.value = true;
};

const onClose = (bool: boolean) => {
  visible.value = bool;
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
