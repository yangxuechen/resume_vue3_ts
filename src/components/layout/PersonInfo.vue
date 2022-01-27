<template>
  <div class="info-box">
    <TitleB
      title="个人信息"
      iconName="user"
      backgroundColor="#fff"
      :backgroundColorChange="false"
      borderColor="black"
      font-size="14px"
      size="small"
      :show-tool="false"
      color="black"
    ></TitleB>
    <div class="info" style="margin-top: 15px">
      <rs-svg-icon
        class="icon-item"
        name="sexm"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="sex" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="nianling"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="age" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="earth"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="nameFamily" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="education"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="education" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="work-filling"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="workExperience" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="phone"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="phoneNumber" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="email"
        color="#fff"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_dash name" v-model="email" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  ManOutlined,
  PaperClipOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  HourglassOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { UserInfo } from "../../views/UserInfo";
import TitleB from "../base/title/TitleB.vue";

const store = useStore();
const sex = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.sex || "";
  },

  set(sex: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.sex = sex;
    store.commit("user/setUserInfo", tempUser);
  },
});

const age = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.age || "";
  },

  set(age: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.age = age;
    store.commit("user/setUserInfo", tempUser);
  },
});

const nameFamily = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.nameFamily || "";
  },

  set(nameFamily: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.nameFamily = nameFamily;
    store.commit("user/setUserInfo", tempUser);
  },
});

const education = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.education || "";
  },

  set(education: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.education = education;
    store.commit("user/setUserInfo", tempUser);
  },
});

const workExperience = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.workExperience || "";
  },

  set(workExperience: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.workExperience = workExperience;
    store.commit("user/setUserInfo", tempUser);
  },
});

const phoneNumber = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.phoneNumber || "";
  },
  set(phoneNumber: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.phoneNumber = phoneNumber;
    store.commit("user/setUserInfo", tempUser);
  },
});

const email = computed({
  get() {
    return store.state.user.userInfo.userInfoBase.email || "";
  },
  set(email: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoBase.email = email;
    store.commit("user/setUserInfo", tempUser);
  },
});

const title = ref<string>("基本信息");
const bgColor = computed(() => store.state.app.themeColor);
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 15px;
  color: white;
  background-color: v-bind(bgColor);

  .info {
    width: 100%;
    height: 23px;
    //   padding-left: 10px;

    display: flex;
    align-items: center;
    padding-top: 7px;
    margin-top: 0;
    .info-desc {
      padding-left: 10px;
    }
  }
}

.icon-item {
  margin-top: 5px;
}
</style>
