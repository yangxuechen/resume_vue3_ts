<template>
  <div class="drag-item-box">
    <div class="drag-item">
      <AvatarTop v-if="props.componentName == 'AvatarTop'"></AvatarTop>
      <AvatarTop2 v-if="props.componentName == 'AvatarTop2'"></AvatarTop2>
      <Avatar v-if="props.componentName == 'Avatar'"></Avatar>
      <PersonInfo v-if="props.componentName == 'PersonInfo'"></PersonInfo>
      <BaseInfoRight
        v-if="props.componentName == 'BaseInfoRight'"
      ></BaseInfoRight>
      <Skill1 v-if="props.componentName == 'Skill1'"></Skill1>
      <Skill02 v-if="props.componentName == 'Skill02'"></Skill02>
      <JobIntension
        v-if="props.componentName == 'JobIntension'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></JobIntension>
      <JobIntension2
        v-if="props.componentName == 'JobIntension2'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></JobIntension2>
      <Eduction
        v-if="props.componentName == 'Education'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></Eduction>
      <EductionA
        :edit="edit"
        v-if="props.componentName == 'EducationA'"
      ></EductionA>
      <WorkExperience
        v-if="props.componentName == 'WorkExperience'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></WorkExperience>
      <WorkExperiseTimeLine
        v-if="props.componentName == 'WorkExperienceTimeLine'"
      >
      </WorkExperiseTimeLine>
      <WorkExperience2
        v-if="props.componentName == 'WorkExperience2'"
      ></WorkExperience2>
      <OpenSourcePro
        v-if="props.componentName == 'OpenSourcePro'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></OpenSourcePro>
    </div>
  </div>
</template>

<script lang="ts" setup>
import JobIntension from "../jobIntension/JobIntension.vue";
import Eduction from "../edu/Education.vue";
import WorkExperience from "../work/WorkExperience.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";
import { computed, defineEmit, defineProps, ref } from "vue";
import { message } from "ant-design-vue";
import AvatarTop2 from "../avatar/AvatarTop2.vue";
import AvatarTop from "../avatar/AvatarTop.vue";
import Skill1 from "../../layout/Skill1.vue";
import PersonInfo from "../../layout/PersonInfo.vue";
import Avatar from "../avatar/Avatar.vue";
import BaseInfoRight from "../baseinfo/BaseInfoRight.vue";
import Skill02 from "../skill/Skill02.vue";
import JobIntension2 from "../jobIntension/JobIntension2.vue";
import EductionA from "../edu/EducationA.vue";
import WorkExperiseTimeLine from "../work/WorkExperienceTimeLine.vue";
import WorkExperience2 from "../work/WorkExperience2.vue";

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
const edit = ref<boolean>(false);
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
.drag-item-box {
  width: 450px;
  padding: 15px;
  margin: 15px 0;
  border: 1px #e9e2e2 solid;
  box-shadow: 0px 0px 2px #888888;
}

.drag-item {
  width: 611px;
  transform: scale(0.7);
  margin-left: -99px;
}
</style>
