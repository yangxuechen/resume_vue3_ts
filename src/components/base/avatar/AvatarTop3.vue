<template>
  <div class="avatar-top3-box">
    <!-- <svg
      height="350"
      width="1480"
      viewBox="0 0 1480 350"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M 0,560 C 0,560 0,280 0,280 C 99.61904761904762,280.6071428571429 199.23809523809524,281.2142857142857 322,256 C 444.76190476190476,230.78571428571428 590.6666666666667,179.74999999999997 740,194 C 889.3333333333333,208.25000000000003 1042.095238095238,287.78571428571433 1166,313 C 1289.904761904762,338.21428571428567 1384.952380952381,309.10714285714283 1480,280 C 1480,280 1480,560 1480,560 Z"
        stroke="none"
        strokewidth="0"
        :fill="bgColor"
      ></path>
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        :fill="bgColor"
        fill-opacity="1"
        d="M0,256L40,229.3C80,203,160,149,240,154.7C320,160,400,224,480,229.3C560,235,640,181,720,165.3C800,149,880,171,960,197.3C1040,224,1120,256,1200,261.3C1280,267,1360,245,1400,234.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>

    <div class="a-t-box-1">{{ name }}</div>
    <div class="a-t-box-2">
      <img
        :src="avatarUrl"
        style="width: 100px; border-radius: 50%"
        @click="uploadImg"
      />
    </div>
    <!-- <div class="btn-box">
      <input
        type="file"
        style="width: 120px; height: 10px"
        accept="image/*"
        id="btn_upload"
        @change="preView($event)"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import img_url from "../../../assets/avatar-xx.png";
import { UserInfo } from "../../../views/UserInfo";
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

    position: absolute;
    top: 30px;
    color: white;
    font-size: 50px;
    z-index: 99;
  }

  .a-t-box-2 {
    width: 20%;
    // // height: 200px;
    // background-color: cornsilk;

    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    font-size: 50px;
    z-index: 99;
  }
}
</style>
