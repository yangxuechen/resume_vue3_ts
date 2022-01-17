<template>
  <div>
    <div id="main-box">
      <!-- <div v-html="svgSrc"></div> -->

      <RsSvgIcon></RsSvgIcon>
      <RsSvgIcon name="loop" color="red" width="100px"></RsSvgIcon>
    </div>
    <a-button type="primary" @click="downloadPdf"> 下载 </a-button>
  </div>
</template>

<script lang="ts" setup>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Icon } from "../../../components/base/icon/Icon";
import {
  ReadFilled,
  PushpinOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import SvgImgIcon from "../../../components/base/icon/SvgImgIcon.vue";
import { onMounted, ref } from "vue";
import SvgIcon from "../../../components/base/icon/SvgIcon.vue";
import { getSvgPath } from "../../../utils/svgUtil";
import RsSvgIcon from "../../../components/base/icon/RsSvgIcon.vue";

const svgSrc = ref("");
const loadFile = function (name: string) {
  // name为文件所在位置
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open("GET", name, false);
  xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
};
const test = () => {
  const svgPre = "";
  let svg = loadFile("/src/assets/svg/loop.svg");
  //   const svglist = svg?.split("width") || [];
  //   svg = svglist[0] + `fill="green"` + svglist[1];

  const path = getSvgPath(svg || "");

  const label = `<svg
        class="icon"
        fill="yellow"
        width="80px"
        height="80px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >${path}</svg>`;

  svgSrc.value = label || "";
  console.log(label, "svg");
};
test();
const downloadPdf = () => {
  // window.scrollTo({ top: 0 });
  const htmlElement = document.getElementById("main-box");

  console.log(htmlElement);

  const main = document.getElementById("main-box");
  const width: number = htmlElement?.offsetWidth || 0;
  const height: number = htmlElement?.offsetHeight || 0;

  // console.log(width + " " + height);

  html2canvas(htmlElement!, {
    height: htmlElement?.offsetHeight,
    width: htmlElement?.offsetWidth,
    useCORS: true,
    allowTaint: true,
  }).then((canvas) => {
    document.body.appendChild(canvas);
    return;
    const doc = new jsPDF();

    doc.addImage(canvas, "image/jpeg", 0, 0, 210, 297); //单位是毫米
    //  minPage.value = canvas.toDataURL as unknown as string;
    //  console.log(minPage);

    doc.save("resume.pdf");
    //  createMinPageImage();
  });
};

onMounted(() => {
  console.log("onMounted..");
  const svg = document.getElementById("icon-star");
  setTimeout(() => {
    svg?.setAttribute("fill", "red");
  }, 1000);

  console.log(svg);
});
</script>

<style lang="less" scoped>
svg.icon {
  width: 10px;
  height: 10px;
  fill: aqua;
}
</style>
