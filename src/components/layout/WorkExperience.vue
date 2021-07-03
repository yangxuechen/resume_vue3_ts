<template>
  <div class="info-box">
    <div class="title">
      <div style="display: flex; align-items: center; gap: 10px">
        <SignalFilled :style="{ fontSize: '24px', color: 'white' }" />
        <input type="text" v-model="title" class="input_title" />
      </div>
      <!-- <div style="padding-right: 25px" class="btn-box">
        <a-button type="link" @click="deleteWork" class="btn">删除</a-button>
        <a-button type="link" @click="addWork" class="btn">添加</a-button>
      </div> -->
      <div class="btn-box">
        <MinusSquareOutlined @click="deleteWork" />
        <PlusSquareOutlined @click="addWork" />
      </div>
    </div>

    <WorkEdit v-if="workStatus[0]"></WorkEdit>
    <WorkEdit v-if="workStatus[1]"></WorkEdit>
    <WorkEdit v-if="workStatus[2]"></WorkEdit>
  </div>
  <!-- <MainLeft :leftBox="state.leftbox" @changeState="onChange">
    <WorkEdit></WorkEdit>
  </MainLeft> -->
</template>

<script lang="ts"></script>
<script lang="ts" setup>
import {
  PushpinOutlined,
  SignalFilled,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineEmit, reactive, ref } from "vue";
import MainLeft from "./MainLeft.vue";
import WorkEdit from "./work/WorkEdit.vue";
const title = ref<string>("工作经历");
const workStatus = reactive<boolean[]>([true, false, false]);
const workNum = ref<number>(1);
const addWork = () => {
  for (let i = 0; i < 3; i++) {
    if (workStatus[i] == false) {
      workStatus[i] = true;
      message.success("添加成功");
      break;
    }
  }
  workNum.value = workNum.value + 1;
  if (workNum.value > 3) {
    workNum.value = 3;
    message.warning("最多允许添加3条记录");
  }
};

const deleteWork = () => {
  for (let i = 2; i > 0; i--) {
    if (workStatus[i] == true) {
      workStatus[i] = false;
      message.success("删除成功");
      break;
    }
  }
  workNum.value = workNum.value - 1;
  if (workNum.value < 1) {
    workNum.value = 1;
    message.warning("至少需要1条记录");
  }
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

.btn {
  color: var(--rs-bgcolor-1);
}

.btn:hover {
  color: azure;
  transform: scale(1.1);
}
</style>
