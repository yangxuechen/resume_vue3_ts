<template>
  <div>
    <div>
      <TitleB
        title="工作经历"
        iconName="work-filling"
        :backgroundColorChange="true"
        borderColor="#fff"
        font-size="14px"
        :show-tool="true"
        :titleType="props.titleType"
        :size="titleSize"
        color="#fff"
        :style="{ width: titleWidth }"
        @btnClick="onBtnClick"
      ></TitleB>
    </div>
    <div v-for="(workExperience, index) in workExperienceList">
      <WorkEditTimeline
        :workExperience="workExperience"
        @workExperienceChange="onWorkExperienceChange"
        :dataIndex="index"
      ></WorkEditTimeline>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { message } from "ant-design-vue";
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import TitleB from "../../../components/base/title/TitleB.vue";
import { UserInfo, WorkExperience } from "../../../views/UserInfo";
import WorkEditTimeline from "../../layout/work/WorkEditTimeline.vue";
import user from "../../../utils/initUserInfo";
const state = reactive<boolean[]>([true, false, false]);
const props = defineProps({
  titleType: { type: String, default: "title-01" },
  titleSize: { type: String, default: "normal" },
  titleWidth: { type: String, default: "100%" },
});
const store = useStore();
const workExperienceList = reactive<WorkExperience[]>(
  store.state.user.userInfo.workExperienceList
);
const workNum = ref<number>(1);
const onBtnClick = (btnname: string) => {
  console.log("点击:" + btnname);
  if (btnname == "add") {
    addWork();
  } else if (btnname == "delete") {
    deleteWork();
  }
};
const addWork = () => {
  if (workExperienceList.length > 3) {
    message.warning("最多允许添加三条数据!");
    return;
  }

  const tempWork = user.workExperienceList[0];
  workExperienceList.push(tempWork);
  updateStore();
};

const deleteWork = () => {
  if (workExperienceList.length == 1) {
    message.warning("至少需要一条数据!");
    return;
  }
  workExperienceList.pop();
  updateStore();
};

/**
 * 更新store中的用户数据
 */
const onWorkExperienceChange = (workExper: WorkExperience, index: Number) => {
  const i: number = index.valueOf();
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.workExperienceList[i] = workExper;
  store.commit("user/setUserInfo", tempUser);
};

const updateStore = () => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.workExperienceList = workExperienceList;
  store.commit("user/setUserInfo", tempUser);
};
</script>

<style lang="less" scoped>
.tool-box {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  visibility: visible;
}
.tool {
  width: 200px;
  height: 40px;
  border: 2px var(--rs-bgcolor-1) dashed;
  border-radius: 3px;
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  color: var(--rs-bgcolor-1);
  font-size: 30px;
}

.line-time {
  padding: 0;
}

.workEdit-item {
  display: flex;
  justify-content: space-around;
  padding: 0 0 15px 0;
}

.item {
  padding: 10px 5px;
}

.input_dash {
  height: 20px;
  border-color: white;
  //   padding: 5px;
  border-width: 0ch;
  text-align: left;
  border-color: white;
  border-width: 1px;
  border-style: dotted;
  background-color: white;
  color: black;
}
.input_dash:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}
</style>
