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
          <input
            class="input_dash"
            v-model="workExper.time"
            @change="workExperienceDataChange"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            v-model="workExper.firstJobCompany"
            @change="workExperienceDataChange"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            v-model="workExper.firstJobPostion"
            @change="workExperienceDataChange"
            style="width: 80px"
          />
        </div>
      </div>
      <div>
        <AutoTextArea
          :data="workExper.firstJobDesc1"
          :edit="edit"
          shape="point"
          v-if="descStatus[0]"
          @focus="onFocus"
          @textChange="onJobDesc1Change"
        ></AutoTextArea>
        <AutoTextArea
          :data="workExper.firstJobDesc2"
          :edit="edit"
          shape="point"
          v-if="descStatus[1]"
          @focus="onFocus"
          @textChange="onJobDesc2Change"
        ></AutoTextArea>
        <AutoTextArea
          :data="workExper.firstJobDesc3"
          :edit="edit"
          shape="point"
          v-if="descStatus[2]"
          @focus="onFocus"
          @textChange="onJobDesc3Change"
        ></AutoTextArea>
        <AutoTextArea
          :data="workExper.firstJobDesc4"
          :edit="edit"
          shape="point"
          v-if="descStatus[3]"
          @focus="onFocus"
          @textChange="onJobDesc4Change"
        ></AutoTextArea>
        <AutoTextArea
          :data="workExper.firstJobDesc5"
          :edit="edit"
          shape="point"
          v-if="descStatus[4]"
          @focus="onFocus"
          @textChange="onJobDesc5Change"
        ></AutoTextArea>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { computed, defineEmit, defineProps, ref } from "vue";
import AutoTextArea from "../../base/AutoTextArea.vue";
import {
  PlusOutlined,
  MinusOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { WorkExperience } from "../../../views/UserInfo";
const state = reactive({
  date: "2019-3 ~ 2021-3",
  company: "XX科技有限公司",
  position: "前端工程师",
  descNum: 3,
  showTool: "visibility:hidden",
  showBorder: "  border: 1px #a7a3a3 dashed;",
});

const props = defineProps({
  workExperience: {
    type: WorkExperience,
    required: true,
  },
  dataIndex: {
    type: Number,
    required: true,
  },
});
const emit = defineEmit({
  workExperienceChange: (workExper: WorkExperience, index: Number) => Boolean,
});
const workExper = computed(() => props.workExperience);
const edit = ref<boolean>(false);
const descStatus = reactive<boolean[]>([true, true, true, false, false]);

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

/**
 * 工作经历组件数据改变
 *   -告知父组件 更新数据
 */
const workExperienceDataChange = () => {
  emit("workExperienceChange", workExper.value, props.dataIndex);
};

/**
 * 自适应文本输入框组件值发生改变 更新数据
 */
const onJobDesc1Change = (value: string) => {
  workExper.value.firstJobDesc1 = value;
  workExperienceDataChange();
};

const onJobDesc2Change = (value: string) => {
  workExper.value.firstJobDesc2 = value;
  workExperienceDataChange();
};

const onJobDesc3Change = (value: string) => {
  workExper.value.firstJobDesc3 = value;
  workExperienceDataChange();
};

const onJobDesc4Change = (value: string) => {
  workExper.value.firstJobDesc4 = value;
  workExperienceDataChange();
};

const onJobDesc5Change = (value: string) => {
  workExper.value.firstJobDesc5 = value;
  workExperienceDataChange();
};
</script>

<style lang="less" scoped>
.workEdit-box {
  width: 100%;
  padding: 0 15px;
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
