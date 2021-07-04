<template>
  <div class="info-box" @mouseenter="onFocus" @mouseleave="hiddenToop">
    <div class="title">
      <div style="display: flex; align-items: center; gap: 10px">
        <GithubFilled :style="{ fontSize: '24px', color: 'white' }" />

        <input type="text" class="input_title" v-model="title" />
      </div>
      <!-- <div style="padding-right: 25px" class="btn-box">
        <a-button type="link" @click="deleteDesc" class="btn">删除</a-button>
        <a-button type="link" @click="addDesc" class="btn">添加</a-button>
      </div> -->
      <div class="btn-box">
        <MinusSquareOutlined @click="deleteDesc" />
        <PlusSquareOutlined @click="addDesc" />
      </div>
    </div>

    <div style="width: 100%; padding: 25px 0 0 15px">
      <AutoTextArea
        :data="value1"
        :edit="edit"
        shape="point"
        v-if="state[0]"
      ></AutoTextArea>
      <AutoTextArea
        :data="value2"
        :edit="edit"
        shape="point"
        v-if="state[1]"
      ></AutoTextArea>
      <AutoTextArea
        :data="value3"
        :edit="edit"
        shape="point"
        v-if="state[2]"
      ></AutoTextArea>
    </div>
  </div>
</template>

<script lang="ts">
interface Edu {
  date: string;
  school: string;
  major: string;
  eduction: string;
}
</script>
<script lang="ts" setup>
import {
  GithubFilled,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
import AutoTextArea from "../base/AutoTextArea.vue";
const title = ref<string>("开源项目");
const edit = ref<boolean>(false);
const state = reactive([true, true, true]);
const num = ref<number>(3);

const value1 = ref<string>("开源项目1");
const value2 = ref<string>("开源项目2");
const value3 = ref<string>("开源项目3");
const deleteDesc = () => {
  for (let i = 2; i > 0; i--) {
    if (state[i] == true) {
      state[i] = false;
      message.success("删除成功");
      break;
    }
  }
  num.value = num.value - 1;
  if (num.value < 1) {
    message.warn("至少需要1条数据");
    num.value = 1;
  }
};

const addDesc = () => {
  for (let i = 0; i < 3; i++) {
    if (state[i] == false) {
      state[i] = true;
      message.success("添加成功");
      break;
    }
  }
  num.value = num.value + 1;
  if (num.value > 3) {
    message.warn("最多允许添加3条数据");
    num.value = 3;
  }
};

const onFocus = () => {
  // message.success("获得焦点");

  edit.value = true;
};

const hiddenToop = () => {
  edit.value = false;
};
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 0 15px;
  margin: 15px auto;
  color: white;
  .title {
    background-color: var(--rs-bgcolor-1);
    width: 100%;
    height: 40px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0 0 0 5px;
      color: white;
    }
  }

  .btn {
    color: var(--rs-bgcolor-1);
  }

  .btn:hover {
    color: azure;
    transform: scale(1.1);
  }
}

.btn-box {
  padding-right: 25px;
  color: var(--rs-bgcolor-1);
  display: flex;
  font-size: 30px;
  gap: 10px;
}

.btn-box:hover {
  color: white;
  cursor: pointer;
}
</style>
