<template>
  <a-drawer
    title="更改图标"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    width="400px"
    :after-visible-change="afterVisibleChange"
    @close="closeDrawer"
  >
    <div style="display: flex; align-items: center">
      <span style="font-size: 16px; font-weight: bolder; padding-right: 10px"
        >修改颜色:</span
      >
      <IconTheme @changeTheme="onChange" :colors="colors"></IconTheme>
    </div>

    <div class="icon-list-box">
      <icon-font
        :type="icon"
        @click="onOk(icon)"
        v-for="icon in iconlist"
        class="icon-item"
      />
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, defineEmit, defineProps, reactive, ref } from "vue";
import IconTheme from "./IconTheme.vue";

interface ColorItem {
  color: string;
  background: string;
}
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3104671_6dwvuvl0o8c.js",
});
const iconlist = reactive<string[]>([
  "icon-github-fill",
  "icon-work-filling",
  "icon-education1",
  "icon-star-fill",
  "icon-education",
  "icon-heart-fill",
  "icon-Youtube-fill",
  "icon-152error40401",
  "icon-fire",
  "icon-like",
  "icon-trophy",
  "icon-file-ppt",
  "icon-solution",
  "icon-team",
  "icon-user",
  "icon-edit-square",
  "icon-eye",
  "icon-setting",
  "icon-message",
  "icon-transaction",
  "icon-jingyan",
  "icon-dianhua",
  "icon-nianling",
  "icon-24gl-telephone2",
  "icon-youxiang2",
  "icon-youxiang1",
  "icon-gongzuojingyan2",
  "icon-gongzuojingyan1",
  "icon-gongzuojingyan",
  "icon-youxiang",
  "icon-huchudianhua",
]);

const colors = reactive<ColorItem[]>([
  { color: "#062743", background: "background-color:#062743" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);

const props = defineProps({
  visible: { type: Boolean, required: true },
});
const visible = computed(() => props.visible);

const emit = defineEmit({
  close: (val: Boolean) => Boolean,
  changeIcon: (value: String) => Boolean,
  changeIconColor: (value: String) => Boolean,
});

const afterVisibleChange = (bool: boolean) => {
 
  // emit("close", bool);
};

const onOk = (icon: string) => {
  emit("changeIcon", icon);
};

const showDrawer = () => {
  // visible.value = true;
  emit("close", true);
};

const closeDrawer = () => {
  emit("close", false);
};

const onChange = (color: string) => {
  emit("changeIconColor", color);
};
</script>

<style lang="less" scoped>
.icon-list-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .icon-item {
    padding: 15px;
    font-size: 25px;
  }
}
</style>
