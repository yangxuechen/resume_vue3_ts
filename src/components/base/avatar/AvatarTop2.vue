<template>
  <div class="avatar-top-2-box">
    <div class="left-box">
      <div class="left-content-box">
        <div>
          <input class="input_dash name" v-model="name" />
          <span class="label"
            >求职意向:
            <input class="input_dash name job-postion" v-model="jobPostion"
          /></span>
        </div>
        <div class="base-info-box" style="margin-top: 25px">
          <RsInput
            showIcon
            showTitle
            iconName="icon-nianling"
            title="年龄"
            :value="age"
            width="100px"
            icon-size="16px"
            :background-color="background"
            style="font-size: 16px; color: #fff"
            icon-color="#fff"
            @updateVal="updateAge"
          ></RsInput>

          <RsInput
            showIcon
            showTitle
            iconName="icon-dianhua"
            title="电话"
            :value="phoneNumber"
            width="150px"
            icon-size="16px"
            :background-color="background"
            style="font-size: 16px; color: #fff"
            icon-color="#fff"
            @updateVal="updatePhoneNumber"
          ></RsInput>
        </div>

        <div class="base-info-box">
          <RsInput
            showIcon
            showTitle
            title="工作经验"
            iconName="icon-gongzuojingyan"
            :value="workExperience"
            width="100px"
            icon-size="16px"
            :background-color="background"
            style="font-size: 16px; color: #fff"
            icon-color="#fff"
            @updateVal="updateWorkExperience"
          ></RsInput>

          <RsInput
            showIcon
            showTitle
            iconName="icon-youxiang"
            title="邮箱"
            :value="email"
            width="200px"
            icon-size="16px"
            :background-color="background"
            style="font-size: 16px; color: #fff"
            icon-color="#fff"
            @updateVal="updateEmail"
          ></RsInput>
        </div>
      </div>
    </div>

    <img :src="avatarUrl" class="right-box" @click="uploadImg" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, reactive, ref } from "vue";
import { useStore } from "vuex";
import img_url from "../../../assets/avatar-xx.png";
import { UserInfo } from "../../../views/UserInfo";
import { CarryOutOutlined, PhoneOutlined } from "@ant-design/icons-vue";
import RsIcon from "../icon/RsIcon.vue";
import RsInput from "../input/RsInput.vue";
import { message } from "ant-design-vue";
const props = defineProps({
  background: { type: String, default: "salmon" },
});

const avatarUrl = ref<string>(img_url);
const store = useStore();
const bgColor = computed(() => props.background);

const uploadImg = () => {
  const input_img = document.getElementById("btn_upload");
  input_img?.click();
};

// 绑定store中的数据
const name = computed({
  get() {
    return store.state.user.userInfo.userInfoHead.name;
  },
  set(name: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoHead.name = name;
    store.commit("user/setUserInfo", tempUser);
  },
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

const age = computed(() => store.state.user.userInfo.userInfoBase.age);
const phoneNumber = computed(
  () => store.state.user.userInfo.userInfoBase.phoneNumber
);

const workExperience = computed(
  () => store.state.user.userInfo.userInfoBase.workExperience
);

const email = computed(() => store.state.user.userInfo.userInfoBase.email);

const updateAge = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoBase.age = val;
  store.commit("user/setUserInfo", tempUser);
};

const updatePhoneNumber = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoBase.phoneNumber = val;
  store.commit("user/setUserInfo", tempUser);
};

const updateWorkExperience = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoBase.workExperience = val;
  store.commit("user/setUserInfo", tempUser);
};

const updateEmail = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoBase.email = val;
  store.commit("user/setUserInfo", tempUser);
};
</script>

<style lang="less" scoped>
.avatar-top-2-box {
  width: 100%;
  //   background-color: v-bind(bgColor);
  display: flex;

  .left-box {
    flex: 1 1 auto;
    // background-color: aqua;
    padding: 25px 0;

    .left-content-box {
      width: calc(100% + 100px);
      height: 160px;
      background-color: v-bind(bgColor);
      padding: 25px;
      text-align: left;

      .name {
        width: 120px;
        height: 30px;
        font-size: 23px;
        font-weight: bold;
        background-color: v-bind(bgColor);
        border-width: 1px;
        border-color: v-bind(bgColor);
        border-style: dotted;
      }

      .name:focus {
        border-width: 1px;
        border-color: #fff;
        border-style: dotted;
      }

      .label {
        margin-left: 15px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }

      .job-postion {
        font-size: 16px !important;
        font-weight: bold !important;
      }

      .base-info-box {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .right-box {
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 50%;
    border: 1px v-bind(bgColor) solid;
  }
}
</style>
