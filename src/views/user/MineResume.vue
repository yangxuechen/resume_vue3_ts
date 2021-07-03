<template>
  <div class="contrainer-resume">
    <div>我的简历</div>
    <div class="box">
      <a-table :dataSource="dataset" :scroll="{ y: 240 }">
        <a-column dataIndex="name" title="name"></a-column>
        <a-column dataIndex="age" title="age"></a-column>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import AutoInput from "../../components/base/AutoInput.vue";

const dataset = reactive([
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
]);
</script>

<style lang="less" scoped>
.contrainer-resume {
  width: 100%;
  height: 100%;
  text-align: center;
}

.box {
  border: 1px black solid;
  overflow-y: auto;
  width: 500px;
  height: 400px;
  background-color: blanchedalmond;
}
</style>
