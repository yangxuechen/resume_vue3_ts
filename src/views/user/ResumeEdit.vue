<template>
  <div class="rs-edit-box" id="main" :key="key">
    <div class="box">
      <div class="rs-edit" id="resume" ref="resume">
        <!-- <Template01 @change=""></Template01> -->
        <router-view @colorChange="onChange"></router-view>
      </div>
    </div>
    <div class="min-page">
      <a-spin v-if="loading" />
      <img :src="minPage" style="width: 170px; height: 238px" v-else />
    </div>
    <div
      style="
        position: fixed;
        left: 265px;
        top: 140px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      "
    >
      <!-- <ReloadOutlined /> -->
      <a-tooltip>
        <template #title>实时预览</template>
        <EyeOutlined class="icon-btn" @click="onChange" />
      </a-tooltip>

      <a-tooltip>
        <template #title>帮助</template>
        <QuestionCircleOutlined class="icon-btn" />
      </a-tooltip>
    </div>
    <div class="toolMenu">
      <!-- <div class="item">
        <Theme @changeTheme="onChange"></Theme>
      </div> -->
      <div class="item">
        <a-button type="primary" @click="directPath" ghost>保存</a-button>
      </div>
      <div class="item">
        <a-button type="danger" ghost @click="downloadPdf">导出pdf</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onActivated, onMounted, provide, ref } from "vue";
import route from "../../router";
import Template01 from "../template/Template01.vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Theme from "../../components/base/Theme.vue";
import { message } from "ant-design-vue";
import {
  ReloadOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons-vue";
const msg2 = ref<string>("1");
const loading = ref<boolean>(true);
const resume = ref<HTMLElement>();
const key = ref<number>(0);
const msg = computed(() => {
  console.log(route.currentRoute.value.query, "currentRoute");

  return route.currentRoute.value.query.name;
});
const minPage = ref<string>("");
const downloadPdf = () => {
  window.scrollTo({ top: 0 });
  const htmlElement = document.getElementById("resume");
  const main = document.getElementById("main");
  const width: number = htmlElement?.offsetWidth || 0;
  const height: number = htmlElement?.offsetHeight || 0;

  // console.log(width + " " + height);

  html2canvas(htmlElement!, {
    height: htmlElement?.offsetHeight,
    width: htmlElement?.offsetWidth,
  }).then((canvas) => {
    const doc = new jsPDF();

    //document.body.appendChild(canvas);
    doc.addImage(canvas, "image/jpeg", 0, 0, 210, 297); //单位是毫米
    minPage.value = canvas.toDataURL as unknown as string;
    //  console.log(minPage);

    doc.save("resume.pdf");
    createMinPageImage();
  });
};

function createMinPageImage() {
  const htmlElement = document.getElementById("resume");
  const width: number = htmlElement?.offsetWidth || 0;
  const height: number = htmlElement?.offsetHeight || 0;

  //console.log(width + " " + height);

  html2canvas(htmlElement!, {
    height: htmlElement?.offsetHeight,
    width: htmlElement?.offsetWidth,
  }).then((canvas) => {
    // console.log(canvas.toDataURL());
    minPage.value = canvas.toDataURL() + "";
  });
}

onMounted(() => {
  console.log("onMounted");
  directPath();
  window.scrollTo({ top: 0 });
  createMinPageImage();
  //loading.value = false;
  setTimeout(() => {
    createMinPageImage();

    console.log("刷新");
  }, 300);

  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

// console.log(route.currentRoute.value.query,'route');

const onChange = () => {
  window.scrollTo({ top: 0 });
  createMinPageImage();
};

function directPath() {
  switch (route.currentRoute.value.query.name) {
    case "resume-01":
      route.push({ path: "/resumeEdit/template01" });
      break;
    case "resume-02":
      route.push({ path: "/resumeEdit/template02" });
      break;
    case "resume-03":
      route.push({ path: "/resumeEdit/template03" });
      break;
    default:
      break;
  }

  // route.push({ path: "/resumeEdit/template01" });
}
</script>

<style lang="less" scoped>
.rs-edit-box {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  background-color: #fff;
  .box {
    width: 760px;
    border: 5px #dff0fe solid;
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .rs-edit {
    width: 756px;
    height: auto;
    overflow: auto;
    // background-color: chocolate;

    padding: 15px;
  }

  .toolMenu {
    position: fixed;
    right: 80px;
    top: 140px;

    .item {
      padding: 15px;
    }

    button {
      width: 100px;
    }
  }
}

.min-page {
  position: fixed;
  left: 83px;
  top: 125px;
  width: 172px;
  height: 241px;
  border: 1px #e6e6e6 solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn {
  color: var(--rs-bgcolor-1);
  cursor: pointer;
}
</style>
