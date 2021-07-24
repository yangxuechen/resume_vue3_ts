<template>
  <div class="avatat-box" @mouseenter="canEdit" @mouseleave="notEdit">
    <a-avatar size="default" class="avatar" @click="uploadImg">
      <template #icon
        ><img :src="user.avatarUrl" style="width: 80px; height: 80px"
      /></template>
    </a-avatar>
    <h3><input class="input_dash name" v-model="user.name" /></h3>

    <div>
      <a-textarea
        v-model:value="user.desc"
        v-if="edit"
        placeholder=""
        auto-size
        class="input_dash"
      />

      <div style="padding: 5px; border: 1px var(--rs-bgcolor-1) solid" v-else>
        {{ user.desc }}
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
import img_url from "../../assets/avatar-xx.png";
import { avatarUrl } from "../../utils/data";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}

avatarUrl.value = img_url;
const user = reactive<AvatarData>({
  name: "张三",
  desc: "用爱心来做事，用感恩的心做人",
  avatarUrl: img_url,
});
const edit = ref<boolean>(false);

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
  avatarUrl.value = src;
};

const canEdit = () => {
  edit.value = true;
};

const notEdit = () => {
  edit.value = false;
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
