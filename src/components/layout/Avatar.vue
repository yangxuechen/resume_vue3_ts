<template>
  <div class="avatat-box">
    <a-avatar size="default" class="avatar">
      <template #icon><img src="../../assets/avatar-1.png" /></template>
    </a-avatar>
    <h3><input class="input_dash name" :value="name" /></h3>

    <a-textarea
      v-model:value="value1"
      placeholder=""
      auto-size
      class="input_dash"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, reactive, ref } from "vue";
interface AvatarData {
  name: string;
  desc: string;
  avatarUrl: string;
}

const value1 = ref<string>(" this is for you");
const name = ref<string>("郑一剑");
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
</style>
