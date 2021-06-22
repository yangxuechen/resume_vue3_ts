<template>
  <div class="left-contrainer" v-if="state">
    <div class="header">
      <div class="myFont">工作经历编辑</div>
      <a-button @click="close">关闭</a-button>
    </div>
    <div class="box">
      <WorkEdit></WorkEdit>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref } from "vue";
import WorkEdit from "./work/WorkEdit.vue";

const props = defineProps({
  leftBox: { type: Boolean, default: false },
});

const state = computed(() => {
  return props.leftBox;
});
const emit = defineEmit({
  "update:leftBox": (leftBox: Boolean) => Boolean,
  changeState: (value: Boolean) => Boolean,
});
const close = () => {
  emit("update:leftBox", false);
  emit("changeState", false);
};
</script>
<style lang="less" scoped>
.left-contrainer {
  width: 478px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 50px;
  border-right: 2px #b1a9a952 solid;
  animation: comeIn;
  animation-duration: 0.5s;
  background-color: white;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
}
.box {
}
.myFont {
  font-weight: bolder;
}
@keyframes comeIn {
  0% {
    width: 0%;
    height: 100vh;
  }

  100% {
    width: 478px;
    height: 100vh;
  }
}
</style>
