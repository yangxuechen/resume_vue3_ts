<template>
  <div class="contrainer-resume">
    <div>我的简历</div>
    <div class="box">
      <!-- <a-table :dataSource="dataset" :scroll="{ y: 240 }">
        <a-column dataIndex="name" title="name"></a-column>
        <a-column dataIndex="age" title="age"></a-column>
      </a-table> -->

      <div>
        <a-button type="primary" @click="showModal">Open Modal</a-button>
        <a-modal
          v-model:visible="visible"
          title="Basic Modal"
          @ok="handleOk"
          class="model-1"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import AutoInput from "../../components/base/AutoInput.vue";

const dataset = reactive([
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
  { name: "yxc", age: 19 },
]);

const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
</script>

<style lang="less" scoped>
.contrainer-resume {
  width: 100%;
  height: 100%;
  text-align: center;
  // background-image: linear-gradient(rgb(184, 120, 120), #fff);
  background-color: rgb(14, 10, 5);
  background-image: url(../../assets/bg-bg1.png);
  background-size: 100% 100%;
}

.box {
  border: 1px black solid;
  overflow-y: auto;
  width: 500px;
  height: 400px;
  // background-color: blanchedalmond;
  margin: auto;
  backdrop-filter: saturate(150%) blur(8px);
  // filter: blur(1px) brightness(10%);
}

.model-1 {
  // backdrop-filter: blur(5px);
  // -webkit-backdrop-filter: blur(5px);
}
</style>
