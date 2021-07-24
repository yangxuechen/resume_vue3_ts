<template>
  <div class="temp01-box">
    <div class="left-box">
      <Avatar></Avatar>
      <PersonInfo></PersonInfo>
      <Skill1></Skill1>
    </div>
    <div class="right-box">
      <JobIntension></JobIntension>
      <Eduction></Eduction>
      <WorkExperiseTimeLine></WorkExperiseTimeLine>
      <OpenSourcePro></OpenSourcePro>
    </div>
  </div>

  <Theme @changeTheme="onChange" :colors="colors"></Theme>
</template>

<script lang="ts" setup>
/** 左右排版 3 7 布局 */
import Avatar from "../../components/layout/Avatar.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import Skill1 from "../../components/layout/Skill1.vue";
import JobIntension from "../../components/layout/JobIntension.vue";
import Eduction from "../../components/layout/Eduction.vue";
import WorkExperience from "../../components/layout/WorkExperience.vue";
import WorkExperiseTimeLine from "../../components/base/work/WorkExperiseTimeLine.vue";
import OpenSourcePro from "../../components/layout/OpenSourcePro.vue";
import AutoInput from "../../components/base/AutoInput.vue";
import AutoTextArea from "../../components/base/AutoTextArea.vue";
import { reactive } from "@vue/reactivity";
import Theme from "../../components/base/Theme.vue";
import { defineEmit, onMounted } from "vue";
interface ColorItem {
  color: string;
  background: string;
}
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}
const colors = reactive<ColorItem[]>([
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#284676", background: "background-color:#284676" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);
const emit = defineEmit({
  colorChange: (value: string) => Boolean,
});

const onChange = () => {
  // console.log("color change");
  emit("colorChange", "ii");
};

onMounted(() => {
  document.body.style.setProperty("--rs-bgcolor-1", colors[0].color);
});
</script>

<style lang="less" scoped>
.temp01-box {
  width: 100%;
  //  margin-left: 15%;
  min-height: 1086px;
  //  background-color: cadetblue;
  display: flex;

  .left-box {
    width: 30%;
    // background-color: #25252a;
    background-color: var(--rs-bgcolor-1);
  }

  .right-box {
    width: 70%;
    background-color: white;
  }
}
</style>
