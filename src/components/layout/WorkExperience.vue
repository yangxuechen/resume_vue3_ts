<template>
  <div class="info-box">
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

    <div v-for="(workExperience, index) in workExperienceList">
      <WorkEdit
        :workExperience="workExperience"
        @workExperienceChange="onWorkExperienceChange"
        :dataIndex="index"
      ></WorkEdit>
    </div>
  </div>
  <!-- <MainLeft :leftBox="state.leftbox" @changeState="onChange">
    <WorkEdit></WorkEdit>
  </MainLeft> -->
</template>
<script lang="ts" setup>
import {
  PushpinOutlined,
  SignalFilled,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineEmit, defineProps, reactive, ref } from "vue";
import { useStore } from "vuex";
import { UserInfo, WorkExperience } from "../../views/UserInfo";
import MainLeft from "./MainLeft.vue";
import WorkEdit from "./work/WorkEdit.vue";
import user from "../../utils/initUserInfo";
import TitleB from "../base/title/TitleB.vue";

const props = defineProps({
  titleType: { type: String, default: "title-01" },
  titleSize: { type: String, default: "normal" },
  titleWidth: { type: String, default: "100%" },
});
const emit = defineEmit({
  remove: (value: String) => Boolean,
});

const store = useStore();
const workExperienceList = reactive<WorkExperience[]>(
  store.state.user.userInfo.workExperienceList
);
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

const onBtnClick = (val: string) => {
  if (val == "add") {
    addWork();
    message.success("添加成功!");
  } else if (val == "delete") {
    deleteWork();
    message.success("删除成功!");
  } else if (val == "remove") {
    emit("remove", "WorkExperience");
  }
};
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;

  margin: 15px auto;
  color: white;
  .title {
    background-color: var(--rs-bgcolor-1);
    width: 100%;
    height: 40px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0 0 0 5px;
      color: white;
    }
  }
}

.btn-box {
  padding-right: 25px;
  color: var(--rs-bgcolor-1);
  display: flex;
  font-size: 30px;
  gap: 10px;
}

.btn-box:hover {
  color: white;
  cursor: pointer;
}

.btn {
  color: var(--rs-bgcolor-1);
}

.btn:hover {
  color: azure;
  transform: scale(1.1);
}
</style>
