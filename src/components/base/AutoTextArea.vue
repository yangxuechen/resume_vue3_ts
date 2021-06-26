<template>
  <div class="open-source-box">
    <div class="open-source-item">
      <div class="point"></div>
      <div style="padding: 5px 15px; flex-grow: 1">
        <a-textarea
          v-model:value="data"
          placeholder="请输入内容"
          class="myinput"
          auto-size
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps } from "@vue/runtime-core";
import { ref } from "vue";

const props = defineProps({
  data: { type: String, default: "" },
});
const data = ref<string>("");
data.value = props.data;
const emit = defineEmit({
  change: (value: string) => Boolean,
});

const value1 = computed(() => {
  return props.data;
});

const onChange = () => {};
</script>

<style lang="less" scoped>
.open-source-box {
  padding: 0 15px;
  width: 100%;
}

.point {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  padding: 5px;
}
.open-source-item {
  display: flex;
  color: black;
  align-items: center;
}
.myinput {
  border: none;
  padding: 5px;
}
</style>
