<template>
  <div class="temp2-box">
    <div class="temp2-box-head">
      <AvatarTop></AvatarTop>
    </div>
    <div class="temp2-box-body">
      <div class="left-box">
        <BaseInfoRight></BaseInfoRight>
        <Skill02 title="技能特长"></Skill02>
      </div>
      <div class="right-box">
        <panel :edit="edit" @changEditState="onClick">
          <EductionA :edit="edit"></EductionA>
          <WorkExperise></WorkExperise>
        </panel>
      </div>
    </div>
  </div>
  <Theme @changeTheme="onChange" :colors="colors"></Theme>
</template>

<script lang="ts" setup>
import Avatar from "../../components/layout/Avatar.vue";
import AvatarTop from "../../components/base/avatar/AvatarTop.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import BaseInfoRight from "../../components/base/baseinfo/BaseInfoRight.vue";
import Skill02 from "../../components/base/skill/Skill02.vue";
import EductionA from "../../components/base/edu/EductionA.vue";
import Panel from "../../components/base/panel/Panel.vue";
import { defineEmit, onMounted, reactive, ref, watch } from "vue";
import WorkExperise from "../../components/base/work/WorkExperise.vue";
import Theme from "../../components/base/Theme.vue";
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
      background-color: #f7f7f4;
    }

    .right-box {
      width: calc(100% - 250px);
    }
  }
}
</style>
