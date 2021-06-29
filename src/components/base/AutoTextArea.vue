<template>
  <div class="open-source-box">
    <div class="open-source-item" v-if="state.edit">
      <div class="point"></div>
      <div style="padding: 5px 15px; flex-grow: 1">
        <a-textarea
          v-model:value="data"
          placeholder="请输入内容"
          class="myinput"
          :autoSize="{ minRows: 1, maxRows: 5 }"
        />
      </div>
    </div>

    <div class="open-source-item" v-else>
      <div class="point"></div>
      <div style="padding: 10px 20px; flex-grow: 1; text-align: left">
        <span>{{ data }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  defineEmit,
  defineProps,
  reactive,
  watch,
} from "@vue/runtime-core";
import { message } from "ant-design-vue";
import { ref } from "vue";

const props = defineProps({
  data: { type: String, default: "" },
  edit: { type: Boolean, default: true },
});
const data = ref<string>("");
data.value = props.data;
const emit = defineEmit({
  change: (value: string) => Boolean,
});
const state = reactive({
  edit: true,
});

watch(
  () => props.edit,
  () => {
    state.edit = props.edit;
  }
);
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
  position: relative;
}
.myinput {
  border: none;
  padding: 5px;
}

.text {
  position: absolute;
  display: none;
}
</style>
