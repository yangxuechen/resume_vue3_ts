<template>
  <div :class="dragClass">
    <panel :edit="edit" @changEditState="onClick">
      <AvatarTop v-if="props.componentName == 'AvatarTop'"></AvatarTop>
      <AvatarTop2 v-if="props.componentName == 'AvatarTop2'"></AvatarTop2>
      <AvatarTop3 v-if="props.componentName == 'AvatarTop3'"></AvatarTop3>
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
      <JobIntension3
        v-if="props.componentName == 'JobIntension3'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></JobIntension3>
      <Eduction
        v-if="props.componentName == 'Education'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></Eduction>
      <EductionB
        v-if="props.componentName == 'EducationB'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></EductionB>
      <WorkExperience
        v-if="props.componentName == 'WorkExperience'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></WorkExperience>
      <WorkExperiseTimeLine
        v-if="props.componentName == 'WorkExperienceTimeLine'"
        @remove="onRemove"
      ></WorkExperiseTimeLine>
      <WorkExperience2
        v-if="props.componentName == 'WorkExperience2'"
      ></WorkExperience2>
      <WorkExperience3
        v-if="props.componentName == 'WorkExperience3'"
      ></WorkExperience3>
      <OpenSourcePro
        v-if="props.componentName == 'OpenSourcePro'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></OpenSourcePro>
      <OpenSourcePro2
        v-if="props.componentName == 'OpenSourcePro2'"
        :titleType="tType"
        :titleWidth="tWidth"
        :titleSize="tSize"
        @remove="onRemove"
      ></OpenSourcePro2>

      <EducationA
        :edit="edit"
        v-if="props.componentName == 'EducationA'"
      ></EducationA>
      <WorkExperise v-if="props.componentName == 'WorkExperise'"></WorkExperise>
    </panel>
  </div>
</template>

<script lang="ts" setup>
import JobIntension from "../jobIntension/JobIntension.vue";
import Eduction from "../edu/Education.vue";
import WorkExperience from "../work/WorkExperience.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";
import OpenSourcePro2 from "../work/OpenSourcePro2.vue";
import { computed, defineEmit, defineProps, ref } from "vue";
import { message } from "ant-design-vue";
import AvatarTop2 from "../avatar/AvatarTop2.vue";
import AvatarTop from "../avatar/AvatarTop.vue";
import AvatarTop3 from "../avatar/AvatarTop3.vue";
import Skill1 from "../../layout/Skill1.vue";
import PersonInfo from "../../layout/PersonInfo.vue";
import Avatar from "../avatar/Avatar.vue";
import Skill02 from "../skill/Skill02.vue";
import BaseInfoRight from "../baseinfo/BaseInfoRight.vue";
import EductionA from "../edu/EducationA.vue";
import EductionB from "../edu/EducationB.vue";
import WorkExperise from "../work/WorkExperience2.vue";
import Panel from "../panel/Panel.vue";
import JobIntension2 from "../jobIntension/JobIntension2.vue";
import JobIntension3 from "../jobIntension/JobIntension3.vue";
import EducationA from "../edu/EducationA.vue";
import WorkExperiseTimeLine from "../work/WorkExperienceTimeLine.vue";
import WorkExperience2 from "../work/WorkExperience2.vue";
import WorkExperience3 from "../work/WorkExperience3.vue";

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

const onClick = (val: boolean) => {
  edit.value = val;
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
  width: 600px;
  margin: 15px;
  border: 1px black solid;
  transform: scale(0.5);
}
</style>
