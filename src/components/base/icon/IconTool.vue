<template>
  <a-drawer
    title="更改图标"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="closeDrawer"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref } from "vue";

const props = defineProps({
  visible: { type: Boolean, required: true },
});
const visible = computed(() => props.visible);

const emit = defineEmit({
  close: (val: Boolean) => Boolean,
});

const afterVisibleChange = (bool: boolean) => {
  console.log("visible", bool);
  // emit("close", bool);
};

const showDrawer = () => {
  // visible.value = true;
  emit("close", true);
};

const closeDrawer = () => {
  emit("close", false);
};
</script>

<style lang="less" scoped></style>
