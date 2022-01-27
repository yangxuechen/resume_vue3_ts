<template>
  <div class="baseinfo-box">
    <TitleA title="基本信息" bgColor="#fff" :show-tool="false"></TitleA>

    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="sexm"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc"><input class="input_1 name" v-model="sex" /></div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="nianling"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc"><input class="input_1 name" v-model="age" /></div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="earth"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_1 name" v-model="nameFamily" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="education"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_1 name" v-model="education" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="work-filling"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_1 name" v-model="workExperience" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="phone"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_1 name" v-model="phoneNumber" />
      </div>
    </div>
    <div class="info">
      <rs-svg-icon
        class="icon-item"
        name="email"
        color="black"
        width="15px"
      ></rs-svg-icon>
      <div class="info-desc">
        <input class="input_1 name" v-model="email" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
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
import { useStore } from "vuex";
import { UserInfo } from "../../../views/UserInfo";
import TitleA from "../title/TitleA.vue";
const title = ref<string>("基本信息");

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
</script>
<style lang="less" scoped>
.baseinfo-box {
  width: 100%;
  padding: 15px;
}

.title {
  display: flex;
  justify-content: left;
}
.input_1 {
  // background-color: #f7f7f4;
  width: auto;
  height: 20px;
  //  border-color: white;
  //   padding: 5px;
  border-width: 0ch;
  text-align: left;
  //  border-color: #25252a;
  //  border-color: #f7f7f4;
  // border-width: 1px;
  // border-style: dotted;
  //  background-color: #25252a;
  //  color: black;
}

.input_1:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}

.info-title {
  height: 40px;
  font-size: 16px;
  font-weight: bolder;
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

.icon-item {
  margin-top: 5px;
}
</style>
