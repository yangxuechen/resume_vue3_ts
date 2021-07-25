<template>
  <div class="contrainer-resume">
    <div v-for="(record, index) in resumedata" style="padding-top: 50px">
      <h3>
        {{ record.title }}
      </h3>
      <div class="box">
        <div
          class="resume-box"
          v-for="data in record.datalist"
          @click="toResumeEdit(data.name)"
        >
          <MinResume :data="data"></MinResume>
        </div>

        <div class="icon-more" @click="closePanel(index)">
          <a-tooltip>
            <template #title>最小化</template>
            <MinusOutlined style="font-size: 12px; color: black" />
          </a-tooltip>
        </div>
        <div
          class="icon-more-2"
          @click="openMaxPanel(index)"
          v-if="record.isMax"
        >
          <a-tooltip>
            <template #title>展开更多</template>
            <ExpandAltOutlined style="font-size: 12px; color: black" />
          </a-tooltip>
        </div>
        <div class="icon-more-2" @click="openMinPanel(index)" v-else>
          <a-tooltip>
            <template #title>收起</template>
            <ShrinkOutlined style="font-size: 12px; color: black" />
          </a-tooltip>
        </div>
      </div>
    </div>
  </div>
  <Footer1></Footer1>
</template>

<script lang="ts" setup>
import MinResume from "../../components/layout/MinResume.vue";
import route from "../../router";
import resumeImgUrl from "../../assets/resume-temp/temp-03.png";
import resumeImgUrl2 from "../../assets/resume-temp/temp-02.png";
import resumeImgUrl0 from "../../assets/resume-temp/temp-01.png";
import Footer1 from "../../components/layout/Footer.vue";
import {
  RightOutlined,
  ExpandAltOutlined,
  MinusOutlined,
  ShrinkOutlined,
} from "@ant-design/icons-vue";
import { reactive, ref } from "@vue/reactivity";
import { message } from "ant-design-vue";
import {
  clickMaxCoder,
  clickMaxDesigner,
  clickMinCoder,
  clickMinDesigner,
  closeCoder,
  closeDesigner,
  getCoderResumes,
  getMinCoderResumes,
  getResumeData,
} from "./ResumeDataset";
import { computed } from "@vue/runtime-core";
interface MinResumeData {
  imgUrl: string;
  desc: string;
  name: string;
}
interface ResumeData {
  title: string;
  datalist: MinResumeData[];
  isMax: boolean;
}

const state = reactive({
  coderOpen: "min",
  designerOpen: "min",
});
//let resumedata = ref<ResumeData[]>(getResumeData());

const resumedata = computed(() => {
  let temp: ResumeData[] = [];
  if (state.coderOpen == "max") temp = clickMaxCoder();
  else if (state.coderOpen == "min") temp = clickMinCoder();
  else temp = closeCoder();

  if (state.designerOpen == "max") temp = clickMaxDesigner();
  else if (state.designerOpen == "min") temp = clickMinDesigner();
  else temp = closeDesigner();
  return temp;
});
const toResumeEdit = (resumeTitle: string) => {
  route.push({ path: "/resumeEdit/", query: { name: resumeTitle } });
};

const openMaxPanel = (i: number) => {
  const screenWidth = window.screen.width;
  switch (i) {
    case 0:
      // resumedata.value = clickMaxCoder();
      state.coderOpen = "max";
      break;
    case 1:
      state.designerOpen = "max";
      break;
    default:
      break;
  }
};

const openMinPanel = (i: number) => {
  switch (i) {
    case 0:
      // resumedata.value = clickMinCoder();
      state.coderOpen = "min";
      break;
    case 1:
      state.designerOpen = "min";
      break;
    default:
      break;
  }
};

const closePanel = (i: number) => {
  switch (i) {
    case 0:
      // resumedata.value = clickMinCoder();
      state.coderOpen = "close";
      break;
    case 1:
      state.designerOpen = "close";
      break;
    default:
      break;
  }
};
</script>

<style lang="less" scoped>
.contrainer-resume {
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 0 80px 50px 80px;

  h3 {
    padding-top: 25px;
    text-align: left;
  }

  .box {
    width: 100%;
    height: auto;
    // background-color: chocolate;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-top: 30px;
    border-radius: 45px;
    // background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #bebebe;
    position: relative;
    .resume-box {
      // margin: 15px 15px;
      width: 260px;
      height: 380px;
      padding-top: 25px;
      // background-color: cornflowerblue;
    }
  }

  .icon-more {
    position: absolute;
    top: 15px;
    left: 50px;
    width: 20px;
    height: 20px;
    background-color: #ea9441;
    border: 1px #c9d8ea solid;
    box-shadow: 0px 0px 4px #629cad, 0px 0px 4px #bad3e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon-more-2 {
    position: absolute;
    top: 15px;
    left: 80px;
    width: 20px;
    height: 20px;
    background-color: #2bcc2d;
    border: 1px #c9d8ea solid;
    box-shadow: 0px 0px 4px #629cad, 0px 0px 4px #bad3e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
