<template>
  <div class="temp04-box">
    <AvatarTop2 :background="colors[0].color"></AvatarTop2>

    <Eduction
      titleType="title-03"
      titleSize="small"
      titleWidth="40%"
    ></Eduction>
    <WorkExperience
      titleType="title-03"
      titleSize="small"
      titleWidth="40%"
    ></WorkExperience>

    <OpenSourcePro
      titleType="title-03"
      titleSize="small"
      titleWidth="40%"
    ></OpenSourcePro>
  </div>
</template>

<script lang="ts" setup>
import AvatarTop2 from "../../components/base/avatar/AvatarTop2.vue";
import TitleC from "../../components/base/title/TitleC.vue";
import TitleB from "../../components/base/title/TitleB.vue";
import { reactive } from "vue";
import Eduction from "../../components/layout/Eduction.vue";
import WorkExperience from "../../components/layout/WorkExperience.vue";
import OpenSourcePro from "../../components/layout/OpenSourcePro.vue";

interface ColorItem {
  color: string;
  background: string;
}
const colors = reactive<ColorItem[]>([
  { color: "#062743", background: "background-color:#062743" },
  { color: "salmon", background: "background-color:salmon" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);
</script>

<style lang="less" scoped>
.temp04-box {
  width: 100%;
  min-height: 1086px;
}
</style>
