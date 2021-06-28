<template>
  <div class="avatat-box">
    <a-avatar size="default" class="avatar" @click="uploadImg">
      <template #icon
        ><img :src="user.avatarUrl" style="width: 80px; height: 80px"
      /></template>
    </a-avatar>
    <h3><input class="input_dash name" v-model="user.name" /></h3>

    <div>
      <a-textarea
        v-model:value="user.desc"
        placeholder=""
        auto-size
        class="input_dash"
      />
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
import img_url from "../../assets/avatar-1.png";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}
const user = reactive<AvatarData>({
  name: "yi剑",
  desc: "sss",
  avatarUrl: img_url,
});
const value1 = ref<string>(" this is for you");
const name = ref<string>("郑一剑2");

const uploadImg = () => {
  const input_img = document.getElementById("btn_upload");
  input_img?.click();
};

const preView = (e: any) => {
  console.log(e.target.files[0]);
  const src = window.URL.createObjectURL(e.target.files[0]);
  console.log(src);

  user.avatarUrl = src;
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
