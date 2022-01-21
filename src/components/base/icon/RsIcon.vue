<template>
  <div class="rs-icon">
    <icon-font
      :type="iconName"
      @click="openTool"
      class="icon"
      :style="{ color: changeColor }"
    />
    <div class="rs-icon-title" :title="iconType" v-if="showText">
      {{ iconType }}
    </div>
    <icon-tool
      :visible="visible"
      @close="onClose"
      @changeIcon="changeIcon"
      @changeIconColor="changeIconColor"
    ></icon-tool>
  </div>
</template>

<script lang="ts" setup>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, defineProps, ref } from "vue";
import IconTool from "./IconTool.vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3104671_6dwvuvl0o8c.js",
});

const props = defineProps({
  iconType: { type: String, required: true },
  showText: { type: Boolean, default: false },
  color: { type: String, default: "black" },
});

const changeName = ref<string>(props.iconType);
const changeColor = ref<string>(props.color);
const iconName = computed(() => {
  if (changeName.value != props.iconType) return changeName.value;
  return props.iconType;
});
const iconColor = computed(() => {
  if (changeColor.value != props.color) return changeColor.value;
  return props.color;
});
const visible = ref<boolean>(false);

const openTool = () => {
  visible.value = true;
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
.rs-icon {
  // width: 100%;

  .icon:hover {
    transform: scale(1.2);
  }

  .rs-icon-title {
    width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px !important;
  }
}
</style>
