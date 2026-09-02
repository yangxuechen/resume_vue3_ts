<template>
  <div class="avatar-top3-box">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        :fill="bgColor"
        fill-opacity="1"
        d="M0,128L80,106.7C160,85,320,43,480,74.7C640,107,800,213,960,256C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg> -->

    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        :fill="bgColor"
        fill-opacity="1"
        d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,234.7C1120,256,1280,288,1360,304L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg> -->

    <svg
      width="760px"
      height="160px"
      viewBox="0 0 760 160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
      <title>矩形</title>
      <desc>Created with Sketch.</desc>
      <g
        id="页面-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="画板" :fill="bgColor" stroke="#979797">
          <path
            d="M759.5,0.5 L0.5,0.5 L0.500002307,62.5017347 C105.777486,63.016773 232.29878,72.7805062 380.063812,91.7942422 C562.90267,115.32112 689.380882,137.8333 759.500008,159.324674 L759.5,0.5 Z"
            id="矩形"
          ></path>
        </g>
      </g>
    </svg>
    <div class="a-t-box-2">
      <img
        :src="avatarUrl"
        style="
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid black;
        "
        @click="uploadImg"
      />
    </div>
    <div class="a-t-box-1">
      <RsInput
        :showIcon="false"
        :showTitle="false"
        :value="name"
        width="120px"
        height="40px"
        :background-color="bgColor"
        class="name"
        style="font-size: 15px; font-weight: bold; color: #fff"
        @updateVal="updateName"
      ></RsInput>
    </div>

    <div class="a-t-box-3">
      <RsInput
        showIcon
        showTitle
        iconName="nianling"
        title="年龄"
        :value="age"
        width="80px"
        icon-size="13px"
        :background-color="bgColor"
        style="font-size: 13px; color: #fff"
        icon-color="#fff"
        size="small"
        @updateVal="updateAge"
      ></RsInput>

      <RsInput
        showIcon
        showTitle
        iconName="phone"
        title="电话"
        :value="phoneNumber"
        width="150px"
        icon-size="13px"
        :background-color="bgColor"
        style="font-size: 13px; color: #fff"
        icon-color="#fff"
        size="small"
        @updateVal="updatePhoneNumber"
      ></RsInput>
    </div>

    <div class="a-t-box-4">
      <RsInput
        showIcon
        showTitle
        title="经验"
        iconName="work-filling"
        :value="workExperience"
        width="80px"
        icon-size="13px"
        :background-color="bgColor"
        style="font-size: 13px; color: #fff"
        icon-color="#fff"
        size="small"
        @updateVal="updateWorkExperience"
      ></RsInput>

      <RsInput
        showIcon
        showTitle
        iconName="email"
        title="邮箱"
        :value="email"
        width="150px"
        icon-size="13px"
        :background-color="bgColor"
        style="font-size: 13px; color: #fff"
        icon-color="#fff"
        size="small"
        @updateVal="updateEmail"
      ></RsInput>
    </div>

    <div class="btn-box">
      <input
        type="file"
        style="width: 120px; height: 10px"
        accept="image/*"
        id="btn_upload"
        @change="preView($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import img_url from "../../../assets/avatar-xx.png";
import { UserInfo } from "../../../views/UserInfo";
import RsInput from "../input/RsInput.vue";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}
const store = useStore();
const avatarUrl = ref<string>(img_url);
const uploadImg = () => {
  const input_img = document.getElementById("btn_upload");
  input_img?.click();
};
const user = reactive<AvatarData>({
  name: "张三",
  desc: "做事成功的要诀就如同钥匙开锁的道理一样，如果你不能准确对号，那麽一定无法打开成功之门",
  avatarUrl: img_url,
});

const updateName = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoHead.name = val;
  store.commit("user/setUserInfo", tempUser);
};

const preView = (e: any) => {
  console.log(e.target.files[0]);
  const src = window.URL.createObjectURL(e.target.files[0]);

  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = (e) => {
    console.log(e.target!.result);
    user.avatarUrl = e.target!.result as string;
  };
  console.log(src);

  user.avatarUrl = src;
  avatarUrl.value = src;
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoHead.avatar = src;
  store.commit("user/setUserInfo", tempUser);
};

// 绑定store中的数据 姓名
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
// 主题颜色
const bgColor = computed(() => store.state.app.themeColor);
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
.avatar-top3-box {
  widows: 100%;
  height: 200px;
  display: flex;
  position: relative;
  // justify-content: space-between;
  // padding: 25px;
  // background-color: antiquewhite;

  .a-t-box-1 {
    width: 20%;
    padding-left: 25px;
    padding-top: 10px;
    position: absolute;
    top: 20px;
    left: 135px;

    // color: white;
    z-index: 99;
  }

  .a-t-box-2 {
    width: 20%;
    // // height: 200px;
    // background-color: cornsilk;

    position: absolute;
    top: 30px;
    left: 30px;
    color: white;
    font-size: 50px;
    z-index: 99;
  }

  .a-t-box-3 {
    width: 20%;
    // // height: 200px;
    // background-color: cornsilk;

    position: absolute;
    display: flex;
    top: 24px;
    right: 230px;
    color: white;
    font-size: 50px;
    z-index: 99;
  }
  .a-t-box-4 {
    width: 20%;
    // // height: 200px;
    // background-color: cornsilk;

    position: absolute;
    display: flex;
    top: 54px;
    right: 230px;
    color: white;
    font-size: 50px;
    z-index: 99;
  }
}

.btn-box {
  visibility: hidden;
  width: 0;
  height: 10px;
}
</style>
