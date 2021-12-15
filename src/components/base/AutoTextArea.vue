<template>
  <div class="open-source-box">
    <div class="open-source-item" v-if="state.edit">
      <div class="point" v-if="shape === 'point'"></div>
      <div class="square" v-if="shape === 'square'"></div>
      <div style="padding: 5px 15px; flex-grow: 1">
        <a-textarea
          v-model:value="data"
          placeholder="请输入内容"
          @change="onChange"
          class="myinput"
          :autoSize="{ minRows: 1, maxRows: 5 }"
        />
      </div>
    </div>

    <div class="open-source-item" v-else>
      <div class="point" v-if="shape === 'point'"></div>
      <div class="square" v-if="shape === 'square'"></div>
      <div class="input-text">
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
  bgColor: { type: String, dedault: "white;" },
  shape: { type: String, default: "" },
  dataIndex: { type: Number, default: 0 },
});
const bgcolor = computed(() => {
  return props.bgColor;
});

const shape = computed(() => {
  return props.shape;
});
const data = ref<string>("");
data.value = props.data;
const emit = defineEmit({
  textChange: (value: string, index: Number) => Boolean,
});
const state = reactive({
  edit: false,
  shape: props.shape,
});

const onChange = () => {
  emit("textChange", data.value, props.dataIndex);
};
watch(
  () => props.edit,
  () => {
    state.edit = props.edit;
  }
);
</script>

<style lang="less" scoped>
.open-source-box {
  padding: 0;
  width: 100%;
}

.point {
  width: 10px;
  height: 10px;
  background-color: var(--rs-bgcolor-1);
  border-radius: 5px;
  padding: 5px;
}
.square {
  width: 10px;
  height: 10px;
  background-color: var(--rs-bgcolor-1);
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
  background-color: v-bind(bgcolor);
}

.text {
  position: absolute;
  display: none;
}

.input-text {
  padding: 10px 20px;
  flex-grow: 1;
  text-align: left;
  white-space: pre-wrap;
}
</style>
