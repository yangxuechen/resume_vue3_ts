<template>
  <div class="title">
    <div style="display: flex; align-items: center; gap: 10px">
      <SignalFilled :style="{ fontSize: '24px', color: 'white' }" />
      <input type="text" v-model="title" class="input_title" />
    </div>
    <!-- <div style="padding-right: 25px" class="btn-box">
        <a-button type="link" @click="deleteWork" class="btn">删除</a-button>
        <a-button type="link" @click="addWork" class="btn">添加</a-button>
      </div> -->
    <div class="btn-box">
      <MinusSquareOutlined @click="btnClick('delete')" />
      <PlusSquareOutlined @click="btnClick('add')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, ref } from "vue";
import {
  PushpinOutlined,
  SignalFilled,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
const title = ref<string>("工作经历");

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
