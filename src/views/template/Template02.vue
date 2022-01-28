<template>
  <div class="temp2-box">
    <div class="temp2-box-head">
      <VueDraggableNext
        v-model="list3"
        :group="{ name: 'people', pull: 'clone', put: true }"
        :sort="true"
      >
        <transition-group>
          <div v-for="element in list3" :key="element">
            <Drag
              :component-name="element.componentName"
              @removeComps="onRemove"
            ></Drag>
          </div>
        </transition-group>
      </VueDraggableNext>
    </div>
    <div class="temp2-box-body">
      <div class="left-box">
        <VueDraggableNext
          v-model="list1"
          :group="{ name: 'people', pull: 'clone', put: true }"
          :sort="true"
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
          v-model="list2"
          :group="{ name: 'people', pull: 'clone', put: true }"
          :sort="true"
        >
          <transition-group>
            <div v-for="element in list2" :key="element">
              <Drag
                :component-name="element.componentName"
                @removeComps="onRemove"
              ></Drag>
            </div>
          </transition-group>
        </VueDraggableNext>
        <!-- <EductionA :edit="edit"></EductionA>
          <WorkExperise></WorkExperise> -->
      </div>
    </div>
  </div>
  <RemoveDrag @removeComponent="onRemove"></RemoveDrag>

  <Theme @changeTheme="onChange" :colors="colors"></Theme>
</template>

<script lang="ts" setup>
import Avatar from "../../components/base/avatar/Avatar.vue";
import AvatarTop from "../../components/base/avatar/AvatarTop.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import BaseInfoRight from "../../components/base/baseinfo/BaseInfoRight.vue";
import { VueDraggableNext } from "vue-draggable-next";
import Skill02 from "../../components/base/skill/Skill02.vue";
import EductionA from "../../components/base/edu/EducationA.vue";
import Panel from "../../components/base/panel/Panel.vue";
import { defineEmit, onMounted, reactive, ref, watch } from "vue";
import WorkExperise from "../../components/base/work/WorkExperience2.vue";
import Theme from "../../components/base/Theme.vue";
import { message } from "ant-design-vue";
import Drag from "../../components/base/drag/Drag.vue";
import RemoveDrag from "../../components/base/drag/RemoveDrag.vue";
import { useStore } from "vuex";
interface ColorItem {
  color: string;
  background: string;
}
const edit = ref<boolean>(false);

const onClick = (val: boolean) => {
  edit.value = val;
};

const colors = reactive<ColorItem[]>([
  { color: "#284676", background: "background-color:#284676" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);

const list1 = ref<any[]>([
  { componentName: "BaseInfoRight" },
  { componentName: "Skill02" },
]);

const list2 = ref<any[]>([
  { componentName: "EducationA" },
  { componentName: "WorkExperience2" },
]);

const list3 = ref<any[]>([{ componentName: "AvatarTop" }]);

const emit = defineEmit({
  colorChange: (value: string) => Boolean,
});

const store = useStore();
const onChange = (color: string) => {
  // console.log("color change");
  emit("colorChange", "ii");
  store.commit("app/setThemeColor", color);
};

const onRemove = (compsName: String) => {
  const templist1 = list1.value;
  list1.value = templist1.filter((comp) => compsName != comp.componentName);

  const templist2 = list2.value;
  list2.value = templist2.filter((comp) => compsName != comp.componentName);

  const templist3 = list3.value;
  list3.value = templist3.filter((comp) => compsName != comp.componentName);

  message.success(`删除${compsName}模块成功!`);
};

onMounted(() => {
  document.body.style.setProperty("--rs-bgcolor-1", colors[0].color);
});
</script>

<style lang="less" scoped>
.temp2-box {
  width: 100%;
  min-height: 1086px;
  display: flex;
  flex-direction: column;

  .temp2-box-head {
    height: 200px;
    // background-color: var(--rs-bgcolor-1);
    // color: white;
  }

  .temp2-box-body {
    min-height: calc(1086px - 200px);
    display: flex;
    flex-direction: row-reverse;

    .left-box {
      width: 250px;
      min-height: calc(100% - 200px);
      // background-color: #f7f7f4;
    }

    .right-box {
      width: calc(100% - 250px);
    }
  }
}
</style>
