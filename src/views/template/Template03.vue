<template>
  <div class="temp01-box">
    <div class="left-box">
      <VueDraggableNext
        v-model="list1"
        :group="{ name: 'people', pull: 'clone', put: true }"
        :sort="true"
        @change="log"
        :move="checkMove"
      >
        <transition-group>
          <div v-for="element in list1" :key="element">
            <Drag
              :component-name="element.componentName"
              @removeComps="onRemove"
            ></Drag>
          </div>
        </transition-group>
      </VueDraggableNext>
    </div>
    <div class="right-box">
      <VueDraggableNext
        v-model="list"
        :group="{ name: 'people', pull: 'clone', put: true }"
      >
        <transition-group>
          <div v-for="element in list" :key="element">
            <Drag
              :component-name="element.componentName"
              @removeComps="onRemove"
            ></Drag>
          </div>
        </transition-group>
      </VueDraggableNext>
    </div>
  </div>
  <RemoveDrag @removeComponent="onRemove"></RemoveDrag>

  <Theme @changeTheme="onChange" :colors="colors"></Theme>
</template>

<script lang="ts" setup>
/** 左右排版 3 7 布局 */
import Avatar from "../../components/layout/Avatar.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import Skill1 from "../../components/layout/Skill1.vue";

import { VueDraggableNext } from "vue-draggable-next";
import Drag from "../../components/base/drag/Drag.vue";
import { reactive } from "@vue/reactivity";
import Theme from "../../components/base/Theme.vue";
import { defineEmit, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import RemoveDrag from "../../components/base/drag/RemoveDrag.vue";
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
const list1 = ref<any[]>([
  { componentName: "Avatar" },
  { componentName: "PersonInfo" },
  { componentName: "Skill1" },
]);
const list = ref<any[]>([
  { componentName: "JobIntension" },
  { componentName: "Education" },
  { componentName: "WorkExperience" },
  { componentName: "OpenSourcePro" },
]);
const emit = defineEmit({
  colorChange: (value: string) => Boolean,
});

const onChange = (color: string) => {
  // console.log("color change");
  emit("colorChange", "ii");
  store.commit("app/setThemeColor", color);
};
const onRemove = (compsName: String) => {
  const templist = list.value;
  list.value = templist.filter((comp) => compsName != comp.componentName);

  const templist1 = list1.value;
  list1.value = templist1.filter((comp) => compsName != comp.componentName);

  message.success(`删除${compsName}模块成功!`);
};

const log = (evt: EventTarget) => {
  window.console.log(evt);
};

const checkMove = (event: any) => {
  console.log("checkMove", event.draggedContext);
  console.log("Future index: " + event.draggedContext.futureIndex);
};

onMounted(() => {
  document.body.style.setProperty("--rs-bgcolor-1", colors[0].color);
});
const store = useStore();

// 设置主题颜色
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
