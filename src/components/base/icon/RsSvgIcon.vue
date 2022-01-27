<template>
  <div>
    <div class="icon" @click="openTool">
      <div v-html="svgSrc"></div>
      <div class="rs-icon-title" :title="name" v-if="showText">
        {{ props.title }}
      </div>

      <RsSvgTool
        :visible="visible"
        @close="onClose"
        @changeIcon="changeIcon"
        @changeIconColor="changeIconColor"
      ></RsSvgTool>
      <!-- <svg-tool
        :visible="visible"
        @close="onClose"
        @changeIcon="changeIcon"
        @changeIconColor="changeIconColor"
      ></svg-tool> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import SvgTool from "./SvgTool.vue";
import { getSvgPath } from "../../../utils/svgUtil";
import svgList from "./svgList";
import RsSvgTool from "./RsSvgTool.vue";

console.log(svgList.iconlist, "iconlist");

const props = defineProps({
  name: { type: String, default: "star" },
  width: { type: String, default: "30px" },
  color: { type: String, default: "black" },
  showText: { type: Boolean, default: false },
  showTool: {
    type: Boolean,
    default: true,
  },
  hoverEffect: { type: Boolean, default: true },
  title: { type: String, default: "star" },
});
const visible = ref<boolean>(false);
const changeName = ref<string>(props.name);
const changeColor = ref<string>(props.color);

const iconName = computed(() => {
  if (changeName.value != props.name) return `${changeName.value}`;
  return `${props.name}`;
});
const iconColor = computed(() => {
  if (changeColor.value != props.color) return changeColor.value;
  return props.color;
});
const loadFile = function (name: string) {
  // name为文件所在位置
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open("GET", name, false);
  xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
};

const svgSrc = computed(() => {
  const svgPre = "";

  const iconlist = svgList.iconlist;
  let httpUrl = "";
  iconlist.map((icon) => {
    if (iconName.value == icon.name) {
      httpUrl = icon.src;
    }
  });

  let svg = loadFile(httpUrl);

  //  let svg = loadFile(`@/assets/svg/${iconName.value}.svg`);
  const path = getSvgPath(svg || "");

  const label = `<svg
        class="icon"
        fill="${iconColor.value}"
        width="${props.width}"
        height="${props.width}"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >${path}</svg>`;

  console.log(label, "svg");

  return label;
});

const openTool = () => {
  if (props.showTool) visible.value = true;
};

const onClose = (bool: boolean) => {
  visible.value = bool;
};

const changeIcon = (iconName: string) => {
  changeName.value = iconName;
};

const changeIconColor = (color: string) => {
  changeColor.value = color;
};
</script>

<style lang="less" scoped>
.icon:hover {
  cursor: pointer;
}

.icon-hover-effect {
  cursor: pointer;
}

.icon-hover-effect:hover {
  transform: scale(1.2);
}

.rs-icon-title {
  width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px !important;
}
</style>
