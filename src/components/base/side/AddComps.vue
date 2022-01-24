<template>
  <a-drawer
    title="自定义模块"
    placement="left"
    :closable="true"
    :mask="false"
    width="500px"
    v-model:visible="visibleDrawer"
    :after-visible-change="afterVisibleChange"
    @close="onCancel"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>

    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="onCancel">取消</a-button>
      <a-button type="primary" @click="onCancel">确认</a-button>
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
});
const emit = defineEmit({
  changeDrawer: (val: boolean) => Boolean,
});
const visibleDrawer = computed(() => props.visible);

const afterVisibleChange = (bool: boolean) => {
  //console.log("visible", bool);
  emit("changeDrawer", bool);
};

const onCancel = () => {
  emit("changeDrawer", false);
};
</script>

<style lang="less" scoped>
.add-comps-box {
  width: 300px;
  height: 100%;
  background-color: antiquewhite;
}
</style>
