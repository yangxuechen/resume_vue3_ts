<template>
  <div class="avatar-top5-box">
    <div class="a-t5-right-box"></div>
    <div class="a-t5-right-content">
      <div>
        <RsInput
          :showIcon="false"
          :showTitle="false"
          value="Resume"
          width="120px"
          height="50px"
          :background-color="bgColor"
          :borderColor="bgColor"
          class="name"
          style="font-size: 30px; font-weight: bold; color: #fff"
          @updateVal="updateName"
        ></RsInput>
      </div>
      <div>
        <RsInput
          :showIcon="false"
          :showTitle="false"
          value="个人简历"
          width="120px"
          height="50px"
          :background-color="bgColor"
          :borderColor="bgColor"
          class="name"
          style="font-size: 20px; font-weight: bold; color: #fff"
          @updateVal="updateName"
        ></RsInput>
      </div>
    </div>
    <div class="a-t5-left-box">
      <RsInput
        :showIcon="false"
        :showTitle="false"
        :value="name"
        width="120px"
        height="80px"
        background-color="#fff"
        borderColor="black"
        class="name"
        style="font-size: 18px; font-weight: bold; color: black"
        @updateVal="updateName"
      ></RsInput>
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
const updateName = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoHead.name = val;
  store.commit("user/setUserInfo", tempUser);
};
</script>

<style lang="less" scoped>
.avatar-top5-box {
  widows: 100%;
  height: 200px;
  display: flex;
  position: relative;
  // justify-content: space-between;
  // padding: 25px;
  // background-color: antiquewhite;

  .a-t5-left-box {
    padding: 25px;
  }
  .a-t5-right-box {
    width: 250px;
    height: 250px;
    position: absolute;
    right: -50px;
    top: -87px;
    background-color: #0f3068;
    transform: rotate(55deg);
  }

  .a-t5-right-content {
    width: 200px;
    height: 200px;
    padding: 35px 25px 25px 55px;
    position: absolute;
    right: 0px;
    top: 0px;
    color: black;
    font-size: 20px;
    font-weight: bolder;
  }
}
</style>
