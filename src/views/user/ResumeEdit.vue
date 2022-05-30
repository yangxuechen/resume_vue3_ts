<template>
  <div class="rs-edit-box" id="main" :key="key">
    <LeftSideTool
      @exportPdf="showConfirm"
      @openAddModal="onOpenAddModal"
      @previewPdf="openPreViewModal"
    ></LeftSideTool>
    <AddComps
      :visible="addModalVisible"
      @changeDrawer="onAddCompsChange"
    ></AddComps>
    <div class="box">
      <div class="rs-edit" id="resume" ref="resume">
        <Template01
          @colorChange="onChange"
          v-if="templateName == 'resume-01'"
        ></Template01>
        <Template02
          @colorChange="onChange"
          v-if="templateName == 'resume-02'"
        ></Template02>
        <Template03
          @colorChange="onChange"
          v-if="templateName == 'resume-03'"
        ></Template03>
        <Template04
          @colorChange="onChange"
          v-if="templateName == 'resume-04'"
        ></Template04>
        <Template05
          @colorChange="onChange"
          v-if="templateName == 'resume-05'"
        ></Template05>
        <!-- <router-view @colorChange="onChange"></router-view> -->
      </div>
    </div>
    <!-- <div class="min-page">
      <a-spin v-if="loading" />
      <img :src="minPage" style="width: 170px; height: 238px" v-else />
    </div> -->

    <a-modal
      v-model:visible="previewVisible"
      title="预览"
      @ok="previewHandleOk"
      width="100%"
      height="100vh"
      wrapClassName="full-modal"
    >
      <div class="modal-img-box">
        <div style="position: absolute; right: 100px">
          <PreViewTool @enlarge="onEnlarge"></PreViewTool>
        </div>
        <img
          :src="minPage"
          style="border: 1px #c8bdbd solid"
          :style="{ width: previewImgWidth, height: previewImgHeight }"
        />
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, createVNode, onMounted, ref } from "vue";
import route from "../../router";
import Template01 from "../template/Template01.vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { message, Modal } from "ant-design-vue";

import { ExclamationCircleOutlined } from "@ant-design/icons-vue";

import { useStore } from "vuex";
import LeftSideTool from "../../components/base/side/LeftSideTool.vue";
import Template02 from "../template/Template02.vue";
import Template03 from "../template/Template03.vue";
import Template04 from "../template/Template04.vue";
import Template05 from "../template/Template05.vue";
import AddComps from "../../components/base/side/AddComps.vue";
import PreViewTool from "../../components/base/tool/PreViewTool.vue";

const store = useStore();
const msg2 = ref<string>("1");
const loading = ref<boolean>(true);
const resume = ref<HTMLElement>();
const key = ref<number>(0);
const previewVisible = ref<boolean>(false);
const previewImgWidth = ref<string>("340px");
const previewImgHeight = ref<string>("476px");
const msg = computed(() => {
  console.log(route.currentRoute.value.query, "currentRoute");

  return route.currentRoute.value.query.name;
});
const minPage = ref<string>("");
const addModalVisible = ref<boolean>(false);
/**
 * 弹出框 确认是否下载pdf
 */
const showConfirm = () => {
  Modal.confirm({
    title: "确认导出pdf文件?",
    icon: createVNode(ExclamationCircleOutlined),
    content: "",
    onOk() {
      return new Promise((resolve, reject) => {
        downloadPdf();
        resolve("success");
      }).catch(() => console.log("下载出错!"));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel() {},
  });

  // Modal.confirm({
  //   title: () => "确认导出pdf文件?",
  //   icon: () => createVNode(ExclamationCircleOutlined),
  //   content: () => "",
  //   onOk() {
  //     return new Promise((resolve, reject) => {
  //       downloadPdf();
  //       resolve("success");
  //     }).catch(() => console.log("下载出错!"));
  //   },
  //   // eslint-disable-next-line @typescript-eslint/no-empty-function
  //   onCancel() {},
  // });
};

/**
 * 打开自定义模块弹框
 */
const onOpenAddModal = () => {
  addModalVisible.value = true;
};

/**
 * 关闭自定义弹框
 */
const onAddCompsChange = (bool: boolean) => {
  addModalVisible.value = bool;
};
/**
 * 下载pdf
 */
const downloadPdf = () => {
  return new Promise((resolve, reject) => {
    window.scrollTo({ top: 0 });
    const htmlElement = document.getElementById("resume");
    const main = document.getElementById("main");
    const width: number = htmlElement?.offsetWidth || 0;
    const height: number = htmlElement?.offsetHeight || 0;
    html2canvas(htmlElement!, {
      height: htmlElement?.offsetHeight,
      width: htmlElement?.offsetWidth,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      const doc = new jsPDF();
      doc.addImage(canvas, "image/jpeg", 0, 0, 210, 297); //单位是毫米
      minPage.value = canvas.toDataURL as unknown as string;
      doc.save("resume.pdf");
      resolve("success");
      createMinPageImage();
    });
  });
};

/** 打开预览窗口 */
const openPreViewModal = () => {
  window.scrollTo({ top: 0 });
  previewVisible.value = true;
  createMinPageImage();
};

/** 预览窗口确认 */
const previewHandleOk = () => {
  previewVisible.value = false;
};

/** 放大预览图片 */
const onEnlarge = (value: string) => {
  if (value == "downloadPdf") {
    showConfirm();
    return;
  }
  const widthArr = previewImgWidth.value.split("px");
  const heightArr = previewImgHeight.value.split("px");
  let width = 0;
  let height = 0;
  if (value == "zoomOut") {
    width = Number(widthArr[0]) * 1.2;
    height = Number(heightArr[0]) * 1.2;
    console.log(width, "width");
  } else if (value == "zoomIn") {
    width = Number(widthArr[0]) / 1.2;
    height = Number(heightArr[0]) / 1.2;
  }
  if (width > 800) {
    message.info("已放到最大!");
    return;
  }
  if (width < 200) {
    message.info("已放到最小!");
    return;
  }

  previewImgWidth.value = `${width}px`;
  previewImgHeight.value = `${height}px`;
};

function createMinPageImage() {
  return new Promise((resolve, reject) => {
    const element = document.createElement("p");
    element.innerHTML = "hello world";

    const htmlElement = document.getElementById("resume") || element;
    const width: number = htmlElement?.offsetWidth || 0;
    const height: number = htmlElement?.offsetHeight || 0;

    // document.body.appendChild(htmlElement);
    //console.log(width + " " + height);

    // html2canvas(htmlElement!, {
    //   height: 1480,
    //   width: 720,
    // }).then((canvas) => {
    //   // console.log(canvas.toDataURL());
    //   minPage.value = canvas.toDataURL() + "";
    //   resolve("success");
    // });

    html2canvas(htmlElement!, {
      height: htmlElement?.offsetHeight,
      width: htmlElement?.offsetWidth,
    }).then((canvas) => {
      // console.log(canvas.toDataURL());
      minPage.value = canvas.toDataURL() + "";
      resolve("success");
    });
  });
}

onMounted(() => {
  console.log("onMounted");

  console.log(store.state.user.userInfo, "store resume 111");
  directPath();
  window.scrollTo({ top: 0 });
  //  createMinPageImage();
  //loading.value = false;
  // setTimeout(() => {
  //   createMinPageImage();

  //   console.log("刷新");
  // }, 300);

  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

// console.log(route.currentRoute.value.query,'route');

const onChange = () => {
  window.scrollTo({ top: 0 });
  createMinPageImage();
};

const templateName = computed(() => route.currentRoute.value.query.name);

function directPath() {
  return;
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
    case "resume-04":
      route.push({ path: "/resumeEdit/template04" });
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

.modal-img-box {
  width: 100%;
  height: calc(100vh - 200px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
