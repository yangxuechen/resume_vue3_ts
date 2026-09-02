<template>
  <div class="info-box">
    <!-- <CompassFilled :style="{ fontSize: '24px', color: 'white' }" />
      <input type="text" class="input_title" v-model="title" /> -->

    <TitleB
      title="求职意向"
      iconName="job"
      :backgroundColor="bgColor"
      :backgroundColorChange="true"
      borderColor="#fff"
      font-size="14px"
      :show-tool="true"
      :titleType="props.titleType"
      :size="titleSize"
      :style="{ width: titleWidth }"
      color="white"
      @btnClick="onBtnClick"
    ></TitleB>

    <div class="intension-desc">
      <rs-input
        :value="jobPostion"
        borderColor="black"
        iconName="user"
        size="small"
        inputHeight="30px"
        @updateVal="updataJobPostion"
      ></rs-input>

      <rs-input
        :value="workCity"
        borderColor="black"
        iconName="city"
        size="small"
        inputHeight="30px"
        @updateVal="updataWorkCity"
      ></rs-input>

      <rs-input
        :value="entryTime"
        borderColor="black"
        iconName="clock"
        size="small"
        inputHeight="30px"
        @updateVal="updataEntryTime"
      ></rs-input>

      <!-- <div class="item">
        <ShopFilled :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" v-model="workCity" />
      </div> -->
      <!-- <div class="item">
        <TransactionOutlined :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" value="15k" />
      </div> -->
      <!-- <div class="item">
        <HourglassFilled :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" v-model="entryTime" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
interface Skill {
  key: string;
  value: string;
  process: number;
}
</script>
<script lang="ts" setup>
import {
  UserOutlined,
  HourglassFilled,
  ShopFilled,
  CompassFilled,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, defineEmit, defineProps, reactive, ref } from "vue";
import { useStore } from "vuex";
import { UserInfo } from "../../../views/UserInfo";
import TitleB from "../title/TitleB.vue";
const title = ref<string>("求职意向");
const props = defineProps({
  titleType: { type: String, default: "title-01" },
  titleSize: { type: String, default: "small" },
  titleWidth: { type: String, default: "100%" },
});
const store = useStore();
const emit = defineEmit({
  remove: (value: String) => Boolean,
});
const jobPostion = computed({
  get() {
    return store.state.user.userInfo.intention.jobPostion;
  },
  set(jobPostion: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.intention.jobPostion = jobPostion;
    store.commit("user/setUserInfo", tempUser);
  },
});

const workCity = computed({
  get() {
    return store.state.user.userInfo.intention.workCity;
  },
  set(workCity: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.intention.workCity = workCity;
    store.commit("user/setUserInfo", tempUser);
  },
});

const entryTime = computed({
  get() {
    return store.state.user.userInfo.intention.entryTime;
  },
  set(entryTime: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.intention.entryTime = entryTime;
    store.commit("user/setUserInfo", tempUser);
  },
});

const onBtnClick = (val: String) => {
  if (val == "remove") {
    emit("remove", "JobIntension");
  } else {
    message.info("该模块不支持添加和删除记录!");
  }
};

const updataJobPostion = (val: string) => {
  jobPostion.value = val;
};

const updataWorkCity = (val: string) => {
  workCity.value = val;
};
const updataEntryTime = (val: string) => {
  entryTime.value = val;
};

const bgColor = computed(() => {
  return store.state.app.themeColor;
});
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;

  margin: 15px auto;
  color: white;

  .title {
    //   background-color: #25262a;
    background-color: var(--rs-bgcolor-1);
    width: 100%;
    height: 40px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    h4 {
      margin: 0 0 0 5px;
      color: white;
    }
  }

  .info {
    width: 100%;
    height: 23px;
    //   padding-left: 10px;
    display: flex;
    align-items: center;
    padding-top: 7px;
    margin: 0;
    .info-desc {
      padding-left: 10px;
    }
  }

  .skill-box {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
}

.input_dash {
  max-width: 80px;
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

.progress-box {
  padding: 0;
  margin-top: -10px;
}

.intension-desc {
  color: black;
  display: flex;
  justify-content: space-around;
  padding: 20px 1px;
  .item {
    padding: 15px;
    display: flex;
    align-items: center;
  }
}
</style>
