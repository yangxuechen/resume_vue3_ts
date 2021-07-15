<template>
  <div class="toop-tip-box">
    <!-- <a-button goust>切换主题</a-button> -->

    <div class="color-box">
      <div class="item-color-1 item" @click="changTheme('#062743')"></div>
      <div class="item-color-2 item" @click="changTheme('#efb788')"></div>
      <div class="item-color-3 item" @click="changTheme('#7194a9')"></div>
      <div class="item-color-4 item" @click="changTheme('#795548')"></div>
      <div class="item-color-5 item" @click="changTheme('#907cb3')"></div>
      <div class="item" @click="changTheme('#907cb3')">
        <DownOutlined></DownOutlined>
      </div>
    </div>
    <!-- <div @click="changTheme('#907cb3')" class="drapdown-icon">
      <DownOutlined></DownOutlined>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { defineEmit } from "@vue/runtime-core";
import { DownOutlined } from "@ant-design/icons-vue";
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

.toop-tip-box {
  display: flex;
  width: 230px;
  height: 40px;
  position: fixed;
  border: 1px #e2e1e1 solid;
  right: 50px;
  top: 100px;
  align-items: center;
  .color-box {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .drapdown-icon {
    width: 30px;
  }
}
</style>
