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
        <input class="input_dash name" v-model="user.name" />
      </div>

      <div>
        <a-textarea
          v-model:value="user.desc"
          placeholder=""
          auto-size
          class="input_dash text-area"
          v-if="edit"
        />

        <div
          style="
            padding: 4px;
            border: 1px var(--rs-bgcolor-1) solid;
            text-align: left;
          "
          v-else
        >
          {{ user.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import img_url from "../../../assets/avatar-xx.png";

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

const canEdit = () => {
  edit.value = true;
};

const notEdit = () => {
  edit.value = false;
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
  background-color: var(--rs-bgcolor-1);
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 20px 50px 20px 10px;
  .avarat-img-box {
    width: 100px;
    height: 120px;
    // background-color: yellow;
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
  background-color: var(--rs-bgcolor-1);
  text-align: left;
  padding: 4px;
  border-color: transparent;
}

.btn-box {
  visibility: hidden;
  height: 10px;
  width: 0px;
}
</style>
