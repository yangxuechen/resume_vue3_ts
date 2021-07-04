<template>
  <div class="skill-02-box" @mouseenter="onFocus" @mouseleave="hiddenToop">
    <TitleA title="技能特长" bgColor="#dededd"></TitleA>

    <AutoTextArea
      :data="value1"
      :edit="edit"
      bgColor="#dededd"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value2"
      :edit="edit"
      bgColor="#dededd"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value3"
      :edit="edit"
      bgColor="#dededd"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value4"
      :edit="edit"
      bgColor="#dededd"
      shape="square"
    ></AutoTextArea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TitleA from "../../../components/base/title/TitleA.vue";
import AutoTextArea from "../AutoTextArea.vue";
const value1 = ref<string>("熟悉AngularJs、vueJS、React等主流MVC、MVVM框架");
const value2 = ref<string>(
  "掌握localStorage、sessionStorage等前端存储方案，记录用户操作习惯或常用数据，从而降低HTTP请求，提升用户体验"
);
const value3 = ref<string>(
  "熟练使用SVN、git版本控制工具，进行代码管理，实现敏捷开发"
);
const value4 = ref<string>(
  "熟练使用HTML5和CSS3，实现应用一站式跨屏（PC端与移动端）开发"
);
const edit = ref<boolean>(false);
const onFocus = () => {
  // message.success("获得焦点");

  edit.value = true;
};

const hiddenToop = () => {
  edit.value = false;
};
</script>

<style lang="less" scoped>
.skill-02-box {
  width: 100%;
  padding: 15px;
}
</style>
