<template>
  <div class="title">
    <input type="text" v-model="title" class="input_1 info-title" />
  </div>
  <a-divider style="height: 2px; background-color: black; margin: 8px 0" />
</template>

<script lang="ts" setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
  title: { type: String, default: "基本信息" },
  bgColor: { type: String, default: "white" },
});

const title = computed(() => {
  return props.title;
});

const bgColor = computed(() => {
  return props.bgColor;
});
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: left;
}

.input_1 {
  // background-color: #69695a;
  background-color: v-bind(bgColor);
  width: auto;
  height: 20px;
  border-width: 0ch;
  text-align: left;

  // border-color: #dededd;
  border-color: v-bind(bgColor);
  border-width: 1px;
  border-style: dotted;
  color: black;
}

.input_1:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}

.info-title {
  height: 40px;
  font-size: 16px;
  font-weight: bolder;
}
</style>
