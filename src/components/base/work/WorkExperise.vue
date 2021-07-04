<template>
  <div class="work-box">
    <TitleA title="工作经历"></TitleA>
    <WorkEdit></WorkEdit>
  </div>
</template>

<script lang="ts" setup>
import TitleA from "../../../components/base/title/TitleA.vue";
import WorkEdit from "../../layout/work/WorkEdit.vue";
</script>

<style lang="less" scoped>
.work-box {
  width: 100%;
  padding: 15px;
}
</style>
