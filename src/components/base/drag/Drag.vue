<template>
  <div class="drag-box">
    <JobIntension
      v-if="props.componentName == 'JobIntension'"
      :titleType="tType"
      :titleWidth="tWidth"
      :titleSize="tSize"
      @remove="onRemove"
    ></JobIntension>
    <Eduction
      v-if="props.componentName == 'Education'"
      :titleType="tType"
      :titleWidth="tWidth"
      :titleSize="tSize"
      @remove="onRemove"
    ></Eduction>
    <WorkExperience
      v-if="props.componentName == 'WorkExperience'"
      :titleType="tType"
      :titleWidth="tWidth"
      :titleSize="tSize"
      @remove="onRemove"
    ></WorkExperience>
    <OpenSourcePro
      v-if="props.componentName == 'OpenSourcePro'"
      :titleType="tType"
      :titleWidth="tWidth"
      :titleSize="tSize"
      @remove="onRemove"
    ></OpenSourcePro>
  </div>
</template>

<script lang="ts" setup>
import JobIntension from "../../layout/JobIntension.vue";
import Eduction from "../../layout/Eduction.vue";
import WorkExperience from "../../layout/WorkExperience.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";
import { computed, defineEmit, defineProps } from "vue";
import { message } from "ant-design-vue";
import AvatarTop2 from "../avatar/AvatarTop2.vue";

const props = defineProps({
  componentName: { type: String, default: "JobIntension" },
  titleType: { type: String, default: "title-01" },
  titleWidth: { type: String, default: "100%" },
  titleSize: { type: String, default: "normal" },
});

const emit = defineEmit({
  removeComps: (val: String) => Boolean,
});

const tType = computed(() => props.titleType);
const tWidth = computed(() => props.titleWidth);
const tSize = computed(() => props.titleSize);

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
