<template>
  <div class="contrainer-resume">
    <a-result title="该功能正在开发中，敬请期待！">
      <template #icon>
        <smile-twoTone />
      </template>
      <template #extra>
        <a-button type="primary" ghost @click="toIndex">回到首页</a-button>
      </template>
    </a-result>
    <input type="color" class="color-input" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { SmileTwoTone } from "@ant-design/icons-vue";
import { ref } from "vue";
import AutoInput from "../../components/base/AutoInput.vue";
import { useRouter } from "vue-router";

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
const router = useRouter();
const toIndex = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.contrainer-resume {
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
}

.color-input {
  padding: 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 0px;
  margin: 0;
  border-radius: 5px;
  background-color: transparent;
}
</style>
