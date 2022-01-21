<!-- html文档上svg 为引用use 下载没有图标 -->
<template>
  <div>
    <svg
      :class="svgClass"
      aria-hidden="true"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      v-on="$attrs"
      @click="openTool"
    >
      <use :xlink:href="iconName" />
    </svg>
    <div class="rs-icon-title" :title="iconName" v-if="showText">
      {{ iconName }}
    </div>

    <svg-tool
      :visible="visible"
      @close="onClose"
      @changeIcon="changeIcon"
      @changeIconColor="changeIconColor"
    ></svg-tool>
  </div>
</template>

<script lang="ts" setup>
import {
  ReadFilled,
  PushpinOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import { computed, defineProps, ref } from "vue";
import SvgTool from "./SvgTool.vue";
const props = defineProps({
  color: {
    type: String,
    default: "black",
  },
  name: {
    type: String,
    default: "",
  },
  showText: {
    type: Boolean,
    default: false,
  },
  showTool: {
    type: Boolean,
    default: true,
  },
});

const changeName = ref<string>(props.name);
const changeColor = ref<string>(props.color);
const iconName = computed(() => {
  if (changeName.value != props.name) return `#icon-${changeName.value}`;
  return `#icon-${props.name}`;
});
const iconColor = computed(() => {
  if (changeColor.value != props.color) return changeColor.value;
  return props.color;
});

const svgClass = computed((): string => {
  if (props.color) {
    return `svg-icon icon-${props.name}`;
  } else {
    return "svg-icon";
  }
});

const visible = ref<boolean>(false);

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
.svg-icon {
  width: 25px;
  height: 25px;
  fill: v-bind(iconColor);
  vertical-align: middle;
}

.svg-icon:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>
