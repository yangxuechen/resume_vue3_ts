<template>
  <div class="edu-a-box">
    <TitleA title="教育背景"></TitleA>
    <AutoTextArea :data="eduDesc" :edit="edit"></AutoTextArea>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import TitleA from "../../../components/base/title/TitleA.vue";
import AutoTextArea from "../AutoTextArea.vue";
const eduDesc = ref<string>(
  "XXXX大学 - 软件工程 （2016.9~2020.6）\n 学历按照本科、硕士等划分，一般不用展示学位类型 要是教育背景没有优势，将与岗位有关的项目经历、实习经历上移，尽可能突出自身与岗位相关的优势 "
);
const props = defineProps({
  edit: { type: Boolean, default: false },
});

const edit = computed(() => props.edit);
</script>

<style lang="less" scoped>
.edu-a-box {
  width: 100%;
  padding: 15px;
}
</style>
