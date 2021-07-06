<template>
  <div class="work-box">
    <TitleA title="工作经历" @btnClick="onBtnClick"></TitleA>
    <WorkEdit2 v-if="state[0]"></WorkEdit2>
    <WorkEdit2 v-if="state[1]"></WorkEdit2>
    <WorkEdit2 v-if="state[2]"></WorkEdit2>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { message } from "ant-design-vue";
import { ref } from "vue";
import TitleA from "../../../components/base/title/TitleA.vue";
import WorkEdit2 from "../../layout/work/WorkEdit2.vue";

const state = reactive<boolean[]>([true, false, false]);
const workNum = ref<number>(1);
const onBtnClick = (btnname: string) => {
  console.log("点击:" + btnname);
  if (btnname == "add") {
    addWork();
  } else if (btnname == "delete") {
    deleteWork();
  }
};
const addWork = () => {
  workNum.value = workNum.value + 1;
  if (workNum.value > 3) {
    message.warning("最多运行添加3条数据");
    workNum.value = 3;
    return;
  }
  for (let i = 0; i < 3; i++) {
    if (state[i] == false) {
      state[i] = true;
      message.success("添加成功");
      break;
    }
  }
};

const deleteWork = () => {
  workNum.value = workNum.value - 1;
  if (workNum.value == 0) {
    message.warning("至少需要1条数据");
    workNum.value = 1;
    return;
  }
  for (let i = 2; i >= 0; i--) {
    if (state[i] == true) {
      state[i] = false;
      message.success("删除成功");
      break;
    }
  }
};
</script>

<style lang="less" scoped>
.work-box {
  width: 100%;
  padding: 15px;
}
</style>
