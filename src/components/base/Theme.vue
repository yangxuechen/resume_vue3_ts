<template>
  <div>
    <!-- <a-button goust>切换主题</a-button> -->
    <div class="color-box">
      <div class="item-color-1 item" @click="changTheme('#25252a')"></div>
      <div class="item-color-2 item" @click="changTheme('#efb788')"></div>
      <div class="item-color-3 item" @click="changTheme('#7194a9')"></div>
      <div class="item-color-4 item" @click="changTheme('#795548')"></div>
      <div class="item-color-5 item" @click="changTheme('#907cb3')"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit } from "@vue/runtime-core";

const emit = defineEmit({
  changeTheme: (val: string) => Boolean,
});
const changTheme = (color: string) => {
  document.body.style.setProperty("--rs-bgcolor-1", color);
  emit("changeTheme", color);
};
</script>

<style lang="less" scoped>
button {
  width: 100px;
}

.color-box {
  position: fixed;
  width: 200px;
  height: 40px;
  //   background-color: beige;
  z-index: 99;
  right: 15px;
  top: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px #e2e1e1 solid;
  justify-content: space-around;
}

.item-color-1 {
  background-color: #25252a;
}
.item-color-2 {
  background-color: #efb788;
}
.item-color-3 {
  background-color: #7194a9;
}
.item-color-4 {
  background-color: #795548;
}
.item-color-5 {
  background-color: #a487d8;
}
.item-color-6 {
  background-color: #4caf50;
}

.item {
  width: 16px;
  height: 16px;
}

.item:hover {
  width: 17px;
  height: 17px;
  // border: 1px white solid;
  cursor: pointer;
}
</style>
