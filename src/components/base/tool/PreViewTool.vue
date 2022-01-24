<template>
  <div class="preview-tool-box">
    <a-tooltip>
      <template #title>缩小</template>
      <ZoomOutOutlined class="tool-icon-item"   @click="zoomIn" />
    </a-tooltip>
    <a-tooltip>
      <template #title>放大</template>
      <ZoomInOutlined class="tool-icon-item" @click="onEnlarge" />
    </a-tooltip>

    <a-tooltip>
      <template #title>下载</template>
      <CloudDownloadOutlined class="tool-icon-item" @click="downloadPdf" />
    </a-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit } from "vue";

import {
  ZoomInOutlined,
  ZoomOutOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons-vue";

const emit = defineEmit({
  enlarge: (value: string) => Boolean,
});
const onEnlarge = () => {
  emit("enlarge", "zoomOut");
};

const zoomIn = () => {
  emit("enlarge", "zoomIn");
};

const downloadPdf = () => {
  emit("enlarge", "downloadPdf");
};
</script>

<style lang="less" scoped>
.preview-tool-box {
  width: 100px;
  height: 30px;
  padding: 0 15px;
  //   border: 1px black solid;
  display: flex;
  align-items: center;
}

.tool-icon-item {
  margin-right: 15px;
  font-size: 20px;
}
</style>
