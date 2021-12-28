<template>
  <div class="rs-card-box">
    <a-card :title="title">
      <slot name="content"></slot>
    </a-card>

    <a-card class="tool-box">
      <slot name="footer"></slot>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, default: "标题" },
});
</script>

<style lang="less" scoped>
.rs-card-box {
  width: 100%;

  .tool-box {
    width: 100%;

    border-top: none;
  }
}
</style>
