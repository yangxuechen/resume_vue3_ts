<template>
  <div>
    <div style="padding: 0 15px">
      <TitleB @btnClick="onBtnClick"></TitleB>
    </div>

    <WorkEditTimeline v-if="state[0]"></WorkEditTimeline>
    <WorkEditTimeline v-if="state[1]"></WorkEditTimeline>
    <WorkEditTimeline v-if="state[2]"></WorkEditTimeline>
  </div>
</template>

<script lang="ts" setup>
import {
  PlusOutlined,
  MinusOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import TitleA from "../../../components/base/title/TitleA.vue";
import WorkEdit from "../../layout/work/WorkEdit.vue";
import TitleB from "../title/TitleB.vue";
import AutoTextArea from "../AutoTextArea.vue";
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import WorkEditTimeline from "../../layout/work/WorkEditTimeline.vue";

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
.tool-box {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  visibility: visible;
}
.tool {
  width: 200px;
  height: 40px;
  border: 2px var(--rs-bgcolor-1) dashed;
  border-radius: 3px;
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  color: var(--rs-bgcolor-1);
  font-size: 30px;
}

.line-time {
  padding: 0;
}

.workEdit-item {
  display: flex;
  justify-content: space-around;
  padding: 0 0 15px 0;
}

.item {
  padding: 10px 5px;
}

.input_dash {
  height: 20px;
  border-color: white;
  //   padding: 5px;
  border-width: 0ch;
  text-align: left;
  border-color: white;
  border-width: 1px;
  border-style: dotted;
  background-color: white;
  color: black;
}
.input_dash:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}
</style>
