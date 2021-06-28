<template>
  <!-- 自适应宽度的输入框 -->
  <input :style="state.updateInputWidth" v-model="val" @input="velueChange" />
  <textarea v-model="val"></textarea>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { compile, computed, reactive, ref } from "vue";
const val = ref<string>("请输入");
const state = reactive({
  updateInputWidth: { width: "60px", height: "40px" },
});
function velueChange() {
  //   message.info("输入框值发生改变");

  let len = val.value.length * 15 + 15;
  if (len > 500) {
    len = 500;
  }
  state.updateInputWidth.width = len + "px";
}
</script>

<style lang="less" scoped>
.input {
  min-width: 60px;
}
</style>
