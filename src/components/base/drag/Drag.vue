<template>
  <div class="drag-box">
    <JobIntension
      v-if="props.componentName == 'JobIntension'"
      @remove="onRemove"
    ></JobIntension>
    <Eduction
      v-if="props.componentName == 'Education'"
      @remove="onRemove"
    ></Eduction>
    <WorkExperience
      v-if="props.componentName == 'WorkExperience'"
      @remove="onRemove"
    ></WorkExperience>
    <OpenSourcePro
      v-if="props.componentName == 'OpenSourcePro'"
      @remove="onRemove"
    ></OpenSourcePro>
  </div>
</template>

<script lang="ts" setup>
import JobIntension from "../../layout/JobIntension.vue";
import Eduction from "../../layout/Eduction.vue";
import WorkExperience from "../../layout/WorkExperience.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";
import { defineEmit, defineProps } from "vue";
import { message } from "ant-design-vue";

const props = defineProps({
  componentName: { type: String, default: "JobIntension" },
});

const emit = defineEmit({
  removeComps: (val: String) => Boolean,
});

const onRemove = (compsName: String) => {
  //  message.info(compsName);
  emit("removeComps", compsName);
};
</script>

<style lang="less" scoped>
.drag-box {
  width: 100%;
}
</style>
