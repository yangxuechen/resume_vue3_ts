<template>
  <div class="rs-edit-box">
    <div class="box">
      <div class="rs-edit" id="resume">
        <Template01 :ref="resume"></Template01>
      </div>
    </div>

    <div class="toolMenu">
      <div class="item">
        <Theme></Theme>
      </div>
      <div class="item">
        <a-button type="primary" ghost>保存</a-button>
      </div>
      <div class="item">
        <a-button type="danger" ghost @click="downloadPdf">导出pdf</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import route from "../../router";
import Template01 from "../template/Template01.vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Theme from "../../components/base/Theme.vue";
const msg2 = ref<string>("1");
const resume = ref<any>();
const msg = computed(() => {
  console.log(route.currentRoute.value.query, "currentRoute");

  return route.currentRoute.value.query.name;
});

const downloadPdf = () => {
  const htmlElement = document.getElementById("resume");
  const width: number = htmlElement?.offsetWidth || 0;
  const height: number = htmlElement?.offsetHeight || 0;

  console.log(width + " " + height);

  html2canvas(htmlElement!, {
    height: htmlElement?.offsetHeight,
    width: htmlElement?.offsetWidth,
  }).then((canvas) => {
    const doc = new jsPDF();
    doc.addImage(canvas, "image/jpeg", 0, 0, 210, 297); //单位是毫米

    doc.save("doc.pdf");
  });
};
// console.log(route.currentRoute.value.query,'route');
</script>

<style lang="less" scoped>
.rs-edit-box {
  display: flex;
  justify-content: center;

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
    right: 50px;
    top: 80px;

    .item {
      padding: 15px;
    }

    button {
      width: 100px;
    }
  }
}
</style>
