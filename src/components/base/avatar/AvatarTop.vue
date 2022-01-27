<template>
  <div class="avatar-top-box" @mouseenter="canEdit" @mouseleave="notEdit">
    <div class="avarat-img-box">
      <img
        :src="user.avatarUrl"
        style="width: 100px; height: 120px"
        @click="uploadImg"
      />
      <div class="btn-box">
        <input
          type="file"
          style="width: 0px; height: 10px"
          accept="image/*"
          id="btn_upload"
          @change="preView($event)"
        />
      </div>
    </div>
    <div class="avatar-name-box">
      <div class="name-box">
        <!-- <input class="input_dash name" v-model="name" /> -->

        <RsInput
          :showIcon="false"
          :showTitle="false"
          :value="name"
          width="120px"
          height="40px"
          :background-color="bgColor"
          class="name"
          style="font-size: 18px; font-weight: bold; color: #fff"
          @updateVal="updateName"
        ></RsInput>
      </div>

      <div>
        <a-textarea
          v-model:value="motto"
          placeholder=""
          auto-size
          class="input_dash text-area"
          v-if="edit"
        />

        <div style="" class="motto-box" v-else>
          {{ motto }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import img_url from "../../../assets/avatar-xx.png";
import { UserInfo } from "../../../views/UserInfo";
import RsInput from "../input/RsInput.vue";

const store = useStore();

interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}
const edit = ref<boolean>(false);
const user = reactive<AvatarData>({
  name: "张三",
  desc: "做事成功的要诀就如同钥匙开锁的道理一样，如果你不能准确对号，那麽一定无法打开成功之门",
  avatarUrl: img_url,
});

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

const bgColor = computed(() => store.state.app.themeColor);

const updateName = (val: string) => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.userInfoHead.name = val;
  store.commit("user/setUserInfo", tempUser);
};
const canEdit = () => {
  edit.value = true;
};

const notEdit = () => {
  edit.value = false;
};

const preView = (e: any) => {
  const src = window.URL.createObjectURL(e.target.files[0]);

  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = (e) => {
    console.log(e.target!.result);
    user.avatarUrl = e.target!.result as string;
  };

  user.avatarUrl = src;
};

const uploadImg = () => {
  const input_img = document.getElementById("btn_upload");
  input_img?.click();
};
</script>
<style lang="less" scoped>
.avatar-top-box {
  width: 100%;
  height: 200px;
  background-color: v-bind(bgColor);
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 20px 50px 20px 10px;
  .avarat-img-box {
    width: 100px;
    height: 120px;
  }

  .avatar-name-box {
    width: 300px;
    height: 140px;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
}

.name-box {
  padding: 0 0 15px 0;
  text-align: left;
}
.name {
  width: 120px;
  height: 30px;
  font-size: 23px;
  font-weight: bold;
}

.text-area {
  color: white;
  background-color: v-bind(bgColor);
  text-align: left;
  padding: 4px;
  border-color: transparent;
}

.btn-box {
  visibility: hidden;
  height: 10px;
  width: 0px;
}

.motto-box {
  padding: 4px;
  border: 1px v-bind(bgColor) solid;
  text-align: left;
}
</style>
