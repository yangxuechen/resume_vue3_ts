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
        <div style="color: #fff; font-size: 15px; padding: 30px 0 10px 0">
          <CarryOutOutlined
            style="color: #fff; font-size: 15px; margin: 0 15px"
          />
          <label style="width: 100px"
            >年龄:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
          >
          <span style="margin-right: 30px">18岁</span>

          <PhoneOutlined style="color: #fff; font-size: 15px; margin: 0 15px" />
          <span style="width: 100px"
            >电话:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span style="margin-right: 30px">18岁</span>
        </div>
        <div style="color: #fff; font-size: 15px">
          <CarryOutOutlined
            style="color: #fff; font-size: 15px; margin: 0 15px"
          />
          <span style="width: 100px">工作经验:</span>
          <span style="margin-right: 30px">18岁</span>

          <PhoneOutlined style="color: #fff; font-size: 15px; margin: 0 15px" />
          <span>邮箱:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style="margin-right: 30px">18岁</span>
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
const props = defineProps({
  background: { type: String, default: "salmon" },
});

const avatarUrl = ref<string>(img_url);
const store = useStore();
const bgColor = props.background;

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
    }
  }

  .right-box {
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 50%;
    border: 1px salmon solid;
  }
}
</style>
