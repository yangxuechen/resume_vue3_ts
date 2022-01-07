<template>
  <div class="title">
    <RsInput
      :show-icon="true"
      :backgroundColor="backgroundColor"
      :border-color="borderColor"
      icon-color="color"
      :icon-name="iconName"
      :value="title"
      fontWeight="bold"
      :style="{ color: color, fontSize: fontSize }"
    ></RsInput>

    <div class="btn-box" v-if="showTool">
      <MinusSquareOutlined @click="btnClick('delete')" />
      <PlusSquareOutlined @click="btnClick('add')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps, ref } from "vue";
import {
  PushpinOutlined,
  SignalFilled,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import RsInput from "../input/RsInput.vue";

const props = defineProps({
  backgroundColor: { type: String, default: "#062743" },
  borderColor: { type: String, default: "#fff" },
  iconColor: { type: String, default: "black" },
  iconName: { type: String, default: "icon-youxiang" },
  title: { type: String, default: "标题" },
  showTool: { type: Boolean, default: true },
  color: { type: String, default: "white" },
  fontSize: { type: String, default: "16px" },
});
const emit = defineEmit({
  btnClick: (value: string) => Boolean,
});
const btnClick = (btnname: string) => {
  emit("btnClick", btnname);
};
</script>

<style lang="less" scoped>
.title {
  background-color: var(--rs-bgcolor-1);
  width: 100%;
  height: 40px;
  //   line-height: 30px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin: 0 0 0 5px;
    color: white;
  }
}

.btn-box {
  padding-right: 25px;
  color: var(--rs-bgcolor-1);
  display: flex;
  font-size: 30px;
  gap: 10px;
}

.btn-box:hover {
  color: white;
  cursor: pointer;
}
</style>
