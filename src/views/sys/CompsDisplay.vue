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
      <a-menu-item key="2">基础信息</a-menu-item>
      <a-menu-item key="3">基础技能</a-menu-item>
      <a-menu-item key="4">教育背景</a-menu-item>
      <a-menu-item key="5">工作经历</a-menu-item>
      <a-menu-item key="6">获奖经历</a-menu-item>
      <a-menu-item key="7">标题 </a-menu-item>
      <a-menu-item key="8">图标库 8</a-menu-item>
      <a-menu-item key="9">输入框</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
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

import route from "../../router";
import { message } from "ant-design-vue";
const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const handleClick = (e: any) => {
  const { key } = e;
  console.log("click", e);
  if (key == "1") {
    route.push({ path: "/compsDisplay/personAvatar" });
  } else if (key == "2") {
    route.push({ path: "/compsDisplay/personBaseInfo" });
  } else if (key == "3") {
    route.push({ path: "/compsDisplay/personSkill" });
  } else if (key == "4") {
    route.push({ path: "/compsDisplay/personEdu" });
  } else if (key == "5") {
    route.push({ path: "/compsDisplay/personWork" });
  } else if (key == "6") {
    route.push({ path: "/compsDisplay/titlePage" });
  } else if (key == "7") {
    route.push({ path: "/compsDisplay/titlePage" });
  } else if (key == "8") {
    route.push({ path: "/compsDisplay/iconList" });
  } else if (key == "9") {
    route.push({ path: "/compsDisplay/inputPage" });
  }
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
