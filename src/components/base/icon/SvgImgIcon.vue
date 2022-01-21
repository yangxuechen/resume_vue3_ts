 <!-- 不可修改颜色 -->
<template>
  <div class="svg-img-icon-box">
    <img :src="svgSrc" class="svg-img" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
});

const svgSrc = computed(() => {
  return `/src/assets/svg/${props.name}.svg`;
});
</script>

<style lang="less" scoped>
.svg-img-icon-box {
  width: 25px;
  height: 25px;

  .svg-img {
    position: relative;
    width: 25px;
    height: 25px;
    filter: drop-shadow(#fff 80px 0);
  }
}

svg {
  fill: currentColor; //currentColor为css变量，自动读取当前元素颜色
}
</style>
