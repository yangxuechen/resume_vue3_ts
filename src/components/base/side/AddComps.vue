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
    <a-tabs
      :tab-position="mode"
      :style="{ height: '70px' }"
      @prevClick="callback"
      @nextClick="callback"
      @change="onTabChange"
      v-model:activeKey="activeKey"
    >
      <a-tab-pane
        v-for="comp in compsList"
        :key="comp.name"
        :tab="comp.desc"
      ></a-tab-pane>
    </a-tabs>
    <CompsDisplay>
      <OpenSourcePro></OpenSourcePro>
    </CompsDisplay>
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
import { message } from "ant-design-vue";
import { computed, defineEmit, defineProps, ref } from "vue";
import { TemplateComps } from "./TemplateComps";
import CompsDisplay from "./CompsDisplay.vue";
import OpenSourcePro from "../../layout/OpenSourcePro.vue";

const mode = ref("top");
const activeKey = ref("All");

const compsList = ref<TemplateComps[]>([
  { name: "All", desc: "全部", type: "1" },
  { name: "JobIntension", desc: "求职意向", type: "1" },
  { name: "Education", desc: "教育背景", type: "1" },
  { name: "WorkExperience", desc: "工作经历", type: "1" },
  { name: "OpenSourcePro", desc: "开源项目", type: "1" },
]);
const props = defineProps({
  visible: { type: Boolean, default: false },
});
const emit = defineEmit({
  changeDrawer: (val: boolean) => Boolean,
});
const visibleDrawer = computed(() => props.visible);

const afterVisibleChange = (bool: boolean) => {
  emit("changeDrawer", bool);
};

const onCancel = () => {
  emit("changeDrawer", false);
};

const callback = (val: string) => {
  console.log(val);
};

const onTabChange = (activeKey: String) => {
  message.info(activeKey);
};
</script>

<style lang="less" scoped>
.add-comps-box {
  width: 300px;
  height: 100%;
  background-color: antiquewhite;
}
</style>
