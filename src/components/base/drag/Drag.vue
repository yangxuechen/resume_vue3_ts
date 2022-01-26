<template>
  <div :class="dragClass">
    <AvatarTop v-if="props.componentName == 'AvatarTop'"></AvatarTop>
    <AvatarTop2 v-if="props.componentName == 'AvatarTop2'"></AvatarTop2>
    <Avatar v-if="props.componentName == 'Avatar'"></Avatar>
    <PersonInfo v-if="props.componentName == 'PersonInfo'"></PersonInfo>
    <Skill1 v-if="props.componentName == 'Skill1'"></Skill1>
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
import AvatarTop from "../avatar/AvatarTop.vue";
import Skill1 from "../../layout/Skill1.vue";
import PersonInfo from "../../layout/PersonInfo.vue";
import Avatar from "../../layout/Avatar.vue";

const props = defineProps({
  componentName: { type: String, default: "JobIntension" },
  titleType: { type: String, default: "title-01" },
  titleWidth: { type: String, default: "100%" },
  titleSize: { type: String, default: "normal" },
  dragType: { type: String, default: "content" },
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

const dragClass = computed(() => {
  if (props.dragType == "content") {
    return "drag-box";
  } else {
    return "drag-box-display";
  }
});
</script>

<style lang="less" scoped>
.drag-box {
  width: 100%;
}

.drag-box-display {
  width: calc(100% - 30px);
  margin: 15px;
  border: 1px black solid;
}
</style>
