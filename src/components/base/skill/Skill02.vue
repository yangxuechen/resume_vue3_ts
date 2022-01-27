<template>
  <div class="skill-02-box" @mouseenter="onFocus" @mouseleave="hiddenToop">
    <TitleA title="技能特长" bgColor="#fff" @btnClick="changSkill"></TitleA>

    <AutoTextArea
      :data="value1"
      :edit="edit"
      v-if="state[0]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value2"
      :edit="edit"
      v-if="state[1]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value3"
      :edit="edit"
      v-if="state[2]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value4"
      :edit="edit"
      v-if="state[3]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value5"
      :edit="edit"
      v-if="state[4]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value6"
      :edit="edit"
      v-if="state[5]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
    <AutoTextArea
      :data="value7"
      :edit="edit"
      v-if="state[6]"
      bgColor="#fff"
      shape="square"
    ></AutoTextArea>
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
import TitleA from "../../../components/base/title/TitleA.vue";
import AutoTextArea from "../AutoTextArea.vue";
const skillNum = ref<number>(4);
const state = reactive<boolean[]>([
  true,
  true,
  true,
  true,
  false,
  false,
  false,
]);
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

const value5 = ref<string>("技能");
const value6 = ref<string>("技能");
const value7 = ref<string>("技能");
const edit = ref<boolean>(false);
const onFocus = () => {
  // message.success("获得焦点");

  edit.value = true;
};

const hiddenToop = () => {
  edit.value = false;
};

const addSkill = () => {
  skillNum.value = skillNum.value + 1;
  if (skillNum.value > 7) {
    message.warning("最多允许添加7条数据");
    skillNum.value = 7;
    return;
  }
  for (let i = 0; i < 7; i++) {
    if (!state[i]) {
      state[i] = true;
      message.success("添加成功");
      break;
    }
  }
};

const deleteSkill = () => {
  skillNum.value = skillNum.value - 1;
  if (skillNum.value == 0) {
    message.warning("最少需要1条数据");
    skillNum.value = 1;
    return;
  }
  for (let i = 6; i >= 0; i--) {
    if (state[i]) {
      state[i] = false;
      message.success("删除成功");
      break;
    }
  }
};

const changSkill = (btnName: string) => {
  if (btnName == "add") {
    addSkill();
  } else if (btnName == "delete") {
    deleteSkill();
  }
};
</script>

<style lang="less" scoped>
.skill-02-box {
  width: 100%;
  padding: 15px;
}
</style>
