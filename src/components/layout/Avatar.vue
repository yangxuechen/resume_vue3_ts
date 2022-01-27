<template>
  <div class="avatat-box" @mouseenter="canEdit" @mouseleave="notEdit">
    <a-avatar size="default" class="avatar" @click="uploadImg">
      <template #icon
        ><img
          :src="user.avatarUrl"
          style="width: 80px; height: 80px"
          @error="onError"
      /></template>
    </a-avatar>
    <h3><input class="input_dash name" v-model="name" /></h3>

    <div>
      <a-textarea
        v-model:value="motto"
        v-if="edit"
        placeholder=""
        auto-size
        class="input_dash"
      />

      <div style="padding: 5px; border: 1px var(--rs-bgcolor-1) solid" v-else>
        {{ motto }}
      </div>
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
import { computed, defineProps, reactive, ref } from "vue";
import { useStore } from "vuex";
import img_url from "../../assets/avatar-xx.png";

import { UserInfo, UserInfoHead } from "../../views/UserInfo";

interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}

const store = useStore();

console.log(
  store.state.user.userInfo.userInfoHead.name,
  "store.state.user.userInfo.name avatar"
);

const user = reactive<AvatarData>({
  name: "张三",
  desc: "用爱心来做事，用感恩的心做人",
  avatarUrl: img_url,
});
const edit = ref<boolean>(false);

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

const motto = computed({
  get() {
    return store.state.user.userInfo.userInfoHead.motto;
  },

  set(motto: string) {
    const tempUser: UserInfo = store.state.user.userInfo;
    tempUser.userInfoHead.motto = motto;
    store.commit("user/setUserInfo", tempUser);
  },
});

const avatarUrl = computed(() => store.state.user.userInfo.userInfoHead.avatar);

const bgColor = computed(() => store.state.app.themeColor);

const uploadImg = () => {
  const input_img = document.getElementById("btn_upload");
  input_img?.click();
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

  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoHead.avatar = src;
  store.commit("user/setUserInfo", tempUser);
};

const canEdit = () => {
  edit.value = true;
};

const notEdit = () => {
  edit.value = false;
};

const onError = () => {
  console.log("图片加载出错！");

  // const tempUser: UserInfo = store.state.user.userInfo;
  // tempUser.userInfoHead.avatar = 'kkkk';
  // store.commit("user/setUserInfo", tempUser);
};
</script>

<style lang="less" scoped>
.avatat-box {
  width: 100%;
  padding: 10%;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: v-bind(bgColor);

  .avatar {
    width: 80px;
    height: 80px;
  }

  h3 {
    color: white;
    margin-top: 15px;
  }

  .input_dash {
    border-color: white;
    padding: 5px;
    border-width: 0ch;
    text-align: center;
    //    border-color: #25252a;
    border-color: var(--rs-bgcolor-1);
    border-width: 1px;
    border-style: dotted;
    //    background-color: #25252a;
    background-color: var(--rs-bgcolor-1);
    color: white;
  }
  .input_dash:focus {
    background: none;
    outline: none;
    border: 0px;
    padding: 5px;
    border-color: tomato;
    border-width: 1px;
    border-style: dotted;
  }

  .name {
    width: 120px;
    height: 30px;
  }
}

.btn-box {
  visibility: hidden;
  height: 10px;
}
</style>
