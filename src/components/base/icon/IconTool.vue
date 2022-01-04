<template>
  <a-drawer
    title="更改图标"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="closeDrawer"
  >
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

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3104671_qu0xf3bqpl.js",
});
const iconlist = reactive<string[]>([
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

const props = defineProps({
  visible: { type: Boolean, required: true },
});
const visible = computed(() => props.visible);

const emit = defineEmit({
  close: (val: Boolean) => Boolean,
  changeIcon: (value: String) => Boolean,
});

const afterVisibleChange = (bool: boolean) => {
  console.log("visible", bool);
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
