<template>
  <div class="temp01-box">
    <div class="left-box">
      <Avatar :data="data"></Avatar>
      <PersonInfo></PersonInfo>
      <Skill1></Skill1>
    </div>
    <div class="right-box">
      <JobIntension></JobIntension>
      <Eduction></Eduction>
      <WorkExperience></WorkExperience>
      <OpenSourcePro></OpenSourcePro>
      <!-- <AutoInput></AutoInput>
      <AutoTextArea></AutoTextArea> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 左右排版 3 7 布局 */
import Avatar from "../../components/layout/Avatar.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import Skill1 from "../../components/layout/Skill1.vue";
import JobIntension from "../../components/layout/JobIntension.vue";
import Eduction from "../../components/layout/Eduction.vue";
import WorkExperience from "../../components/layout/WorkExperience.vue";
import OpenSourcePro from "../../components/layout/OpenSourcePro.vue";
import AutoInput from "../../components/base/AutoInput.vue";
import AutoTextArea from "../../components/base/AutoTextArea.vue";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}

const data: AvatarData = {
  name: "郑一剑",
  desc: "一剑在手，天下我有",
  avatarUrl: "src/",
};

const data2: AvatarData = {
  name: "郑一剑2",
  desc: "一剑在手，天下我有222",
  avatarUrl: "src/2",
};
</script>

<style lang="less" scoped>
.temp01-box {
  width: 100%;
  //  margin-left: 15%;
  min-height: 900px;
  //  background-color: cadetblue;
  display: flex;

  .left-box {
    width: 30%;
    background-color: #25252a;
  }

  .right-box {
    width: 70%;
    background-color: white;
  }
}
</style>
