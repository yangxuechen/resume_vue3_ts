<template>
  <div class="workEdit-box" @mouseenter="onFocus" @mouseleave="hiddenToop">
    <div class="tool-box" :style="state.showTool">
      <div class="tool">
        <!-- <div class="icon-box" @click="addDesc">
            <PlusOutlined :style="{ fontSize: '24px', color: '#eae4e4' }" />
          </div>
          <div class="icon-box" @click="deleteDesc">
            <MinusOutlined :style="{ fontSize: '24px', color: '#eae4e4' }" />
          </div> -->
        <PlusSquareOutlined @click="addDesc" />
        <MinusSquareOutlined @click="deleteDesc" />
      </div>
    </div>
    <div class="workEdit-min-box">
      <div class="workEdit-item">
        <div class="item">
          <input class="input_dash" :value="state.date" style="width: 120px" />
        </div>
        <div class="item">
          <input
            class="input_dash"
            :value="state.company"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            :value="state.position"
            style="width: 80px"
          />
        </div>
      </div>
      <div>
        <AutoTextArea
          :data="work1_desc1"
          :edit="edit"
          shape="square"
          v-if="descStatus[0]"
          @focus="onFocus"
        ></AutoTextArea>
        <AutoTextArea
          :data="work1_desc2"
          :edit="edit"
          shape="square"
          v-if="descStatus[1]"
        ></AutoTextArea>
        <AutoTextArea
          :data="work1_desc3"
          :edit="edit"
          shape="square"
          v-if="descStatus[2]"
        ></AutoTextArea>
        <AutoTextArea
          :data="work1_desc4"
          :edit="edit"
          shape="square"
          v-if="descStatus[3]"
        ></AutoTextArea>
        <AutoTextArea
          :data="work1_desc5"
          :edit="edit"
          shape="square"
          v-if="descStatus[4]"
        ></AutoTextArea>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import AutoTextArea from "../../base/AutoTextArea.vue";
import {
  PlusOutlined,
  MinusOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const state = reactive({
  date: "2019-3 ~ 2021-3",
  company: "XX科技有限公司",
  position: "前端工程师",
  descNum: 3,
  showTool: "visibility:hidden",
  showBorder: "  border: 1px #a7a3a3 dashed;",
});

const edit = ref<boolean>(false);
const descStatus = reactive<boolean[]>([true, true, true, false, false]);

const work1_desc1 = ref<string>(
  "负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架。"
);
const work1_desc2 = ref<string>(
  "Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;"
);
const work1_desc3 = ref<string>(
  "从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案;"
);
const work1_desc4 = ref<string>("");
const work1_desc5 = ref<string>("");

const addDesc = () => {
  for (let i = 0; i < 5; i++) {
    if (descStatus[i] == false) {
      descStatus[i] = true;
      message.success("添加成功");
      break;
    }
  }
  state.descNum = state.descNum + 1;
  if (state.descNum > 5) {
    message.warn("最多允许添加5条数据");
    state.descNum = 5;
  }
};

const deleteDesc = () => {
  for (let i = 4; i > 0; i--) {
    if (descStatus[i] == true) {
      descStatus[i] = false;
      message.success("删除成功");
      break;
    }
  }
  state.descNum = state.descNum - 1;
  if (state.descNum < 1) {
    message.warn("至少需要1条数据");
    state.descNum = 0;
  }
};

const onFocus = () => {
  // message.success("获得焦点");
  state.showTool = " visibility: visible;";
  edit.value = true;
};

const hiddenToop = () => {
  state.showTool = " visibility: hidden;";
  edit.value = false;
};
</script>

<style lang="less" scoped>
.workEdit-box {
  width: 100%;
  // padding: 0 15px;
}
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

.icon-box {
  display: flex;
  align-items: center;
  border: 1px #eae4e4 solid;
  border-radius: 3px;
  cursor: pointer;
}
.workEdit-min-box {
  width: 100%;
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
