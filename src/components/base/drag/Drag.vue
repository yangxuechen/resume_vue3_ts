<template>
  <div class="drag-box">
    <JobIntension v-if="props.componentName == 'JobIntension'"></JobIntension>
    <Eduction v-if="props.componentName == 'Eduction'"></Eduction>
    <WorkExperience
      v-if="props.componentName == 'WorkExperience'"
    ></WorkExperience>
    <OpenSourcePro
      v-if="props.componentName == 'OpenSourcePro'"
    ></OpenSourcePro>
  </div>
</template>

<script lang="ts" setup>
import JobIntension from "../../layout/JobIntension.vue";
import Eduction from "../../layout/Eduction.vue";
import WorkExperience from "../../layout/WorkExperience.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";
import { defineProps } from "vue";

const props = defineProps({
  componentName: { type: String, default: "JobIntension" },
});
</script>

<style lang="less" scoped>
.drag-box {
  width: 100%;
}
</style>
