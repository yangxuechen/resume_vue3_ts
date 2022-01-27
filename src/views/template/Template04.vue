<template>
  <div class="temp04-box">
    <!-- <AvatarTop2 :background="bgColor"></AvatarTop2> -->

    <VueDraggableNext
      v-model="list"
      :group="{ name: 'people', pull: 'clone', put: true }"
    >
      <transition-group>
        <div v-for="element in list" :key="element">
          <Drag
            :component-name="element.componentName"
            titleType="title-03"
            titleWidth="35%"
            titleSize="small"
            @removeComps="onRemove"
          ></Drag>
        </div>
      </transition-group>
    </VueDraggableNext>

    <!-- <Eduction
      titleType="title-03"
      titleSize="small"
      titleWidth="40%"
    ></Eduction> -->
    <RemoveDrag @removeComponent="onRemove"></RemoveDrag>

    <Theme @changeTheme="onChange" :colors="colors"></Theme>
  </div>
</template>

<script lang="ts" setup>
import AvatarTop2 from "../../components/base/avatar/AvatarTop2.vue";

import { computed, defineEmit, reactive, ref } from "vue";

import Theme from "../../components/base/Theme.vue";
import { useStore } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";
import Drag from "../../components/base/drag/Drag.vue";
import { message } from "ant-design-vue";
import RemoveDrag from "../../components/base/drag/RemoveDrag.vue";

interface ColorItem {
  color: string;
  background: string;
}

const emit = defineEmit({
  colorChange: (value: string) => Boolean,
});
const colors = reactive<ColorItem[]>([
  { color: "#062743", background: "background-color:#062743" },
  { color: "salmon", background: "background-color:salmon" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);

const list = ref<any[]>([
{ componentName: "AvatarTop2" },
  { componentName: "JobIntension" },
  { componentName: "Education" },
  { componentName: "WorkExperience" },
  { componentName: "OpenSourcePro" },
]);
const store = useStore();

const onChange = (color: String) => {
  console.log("color change", color);
  emit("colorChange", "ii");
  store.commit("app/setThemeColor", color);
};
const onRemove = (compsName: String) => {
  const templist = list.value;
  list.value = templist.filter((comp) => compsName != comp.componentName);

  message.success(`删除${compsName}模块成功!`);
};
const bgColor = computed(() => store.state.app.themeColor);

store.commit("app/setThemeColor", colors[0].color);
</script>

<style lang="less" scoped>
.temp04-box {
  width: 100%;
  min-height: 1086px;
  // background-image: url('../../assets/bg/bg-notebook.png');
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
}
</style>
