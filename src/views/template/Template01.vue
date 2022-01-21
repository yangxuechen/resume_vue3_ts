<template>
  <div class="temp01-box">
    <div class="left-box">
      <Avatar></Avatar>
      <PersonInfo></PersonInfo>
      <Skill1></Skill1>
    </div>
    <div class="right-box">
      <VueDraggableNext v-model="list">
        <transition-group>
          <div v-for="element in list" :key="element">
            <Drag :component-name="element.componentName"></Drag>
          </div>
          <!-- <JobIntension></JobIntension>
          <Eduction></Eduction>
          <WorkExperience></WorkExperience>
          <OpenSourcePro></OpenSourcePro> -->
        </transition-group>
      </VueDraggableNext>

      <!-- <AutoInput></AutoInput>
      <AutoTextArea></AutoTextArea> -->
    </div>

    <Theme @changeTheme="onChange" :colors="colors"></Theme>
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
import { reactive } from "@vue/reactivity";
import Theme from "../../components/base/Theme.vue";
import { defineEmit, inject, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";
import { ref } from "vue";
import Drag from "../../components/base/drag/Drag.vue";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}
interface ColorItem {
  color: string;
  background: string;
}
const colors = reactive<ColorItem[]>([
  { color: "#062743", background: "background-color:#062743" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);

const list = ref<any[]>([
  { componentName: "JobIntension" },
  { componentName: "Eduction" },
  { componentName: "WorkExperience" },
  { componentName: "OpenSourcePro" },
]);
const emit = defineEmit({
  colorChange: (value: string) => Boolean,
});

const onChange = (color: String) => {
  console.log("color change", color);
  emit("colorChange", "ii");
  store.commit("app/setThemeColor", color);
};
const store = useStore();
onMounted(() => {
  document.body.style.setProperty("--rs-bgcolor-1", colors[0].color);
});

store.commit("app/setThemeColor", colors[0].color);
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
    padding-left: 15px;
    background-color: white;
  }
}
</style>
