<template>
  <div class="work-box">
    <TitleA title="工作经历" @btnClick="onBtnClick"></TitleA>
    <div v-for="(workExperience, index) in workExperienceList">
      <WorkEdit2
        :workExperience="workExperience"
        @workExperienceChange="onWorkExperienceChange"
        :dataIndex="index"
      ></WorkEdit2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { message } from "ant-design-vue";
import { ref } from "vue";
import { useStore } from "vuex";
import TitleA from "../../../components/base/title/TitleA.vue";
import { UserInfo, WorkExperience } from "../../../views/UserInfo";
import WorkEdit2 from "../../layout/work/WorkEdit2.vue";
import user from "../../../utils/initUserInfo";
const state = reactive<boolean[]>([true, false, false]);

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
.work-box {
  width: 100%;
  padding: 15px;
}
</style>
