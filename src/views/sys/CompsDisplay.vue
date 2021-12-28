<template>
  <div class="comps-display-main-box">
    <a-menu
      class="left-menu-box"
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-menu-item key="1">个人信息(头像)</a-menu-item>
      <a-menu-item key="2">Option 2</a-menu-item>
      <a-menu-item key="3">Option 3</a-menu-item>
      <a-menu-item key="4">Option 4</a-menu-item>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>

      <!-- <a-sub-menu key="sub1" @titleClick="titleClick">
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>Navigation Three</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu> -->
    </a-menu>

    <div class="right-content-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  SettingOutlined,
  AppstoreOutlined,
  MailOutlined,
  QqOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const handleClick = (e: Event) => {
  console.log("click", e);
};
const titleClick = (e: Event) => {
  console.log("titleClick", e);
};
</script>

<style lang="less" scoped>
.comps-display-main-box {
  width: 100%;
  background-color: #fff;
  display: flex;

  .left-menu-box {
    width: 256px;
  }

  .right-content-box {
    flex: 1 1 auto;
  }
}
</style>
