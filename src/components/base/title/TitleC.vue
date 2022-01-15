<template>
  <div class="title-c-box">
    <RsInput
      :show-icon="true"
      :backgroundColor="backgroundColor"
      icon-color="#fff"
      :icon-name="iconName"
      :value="title"
      fontWeight="bold"
      style="color: white"
    ></RsInput>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import RsIcon from "../icon/RsIcon.vue";
import RsInput from "../input/RsInput.vue";

const props = defineProps({
  backgroundColor: { type: String, default: "#062743" },
  iconName: { type: String, default: "icon-youxiang" },
});

const bgColor = ref<string>(props.backgroundColor);
const title = ref<string>("标题C");
</script>

<style lang="less" scoped>
.title-c-box {
  width: 200px;
  height: 35px;
  background-color: v-bind(bgColor);
  border-radius: 12px;
  padding-left: 10px;
  display: flex;
  align-items: center;

}
</style>
