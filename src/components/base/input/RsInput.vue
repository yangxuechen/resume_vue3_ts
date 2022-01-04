<template>
  <div class="rs-input-box">
    <rs-icon
      :iconType="iconName"
      color="black"
      class="rs-icon-box"
      v-if="showIcon"
    ></rs-icon>

    <input class="input label-box" v-if="showTitle" v-model="title" />

    <input class="input" v-model="inputValue" />
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { computed, defineEmit, defineProps, ref } from "vue";
import RsIcon from "../icon/RsIcon.vue";

const props = defineProps({
  value: { type: String, default: "" },
  backgroundColor: { type: String, default: "#fff" },
  borderColor: { type: String, default: "#fff" },
  iconName: { type: String, default: "icon-nianling" },
  width: { type: String, default: "120px" },
  height: { type: String, default: "30px" },
  showIcon: { type: Boolean, default: false },
  showTitle: { type: Boolean, default: false },
  title: { type: String, default: "标题" },
});

const emit = defineEmit({
  updateVal: (value: String) => Boolean,
});

const bgColor = ref<string>(props.backgroundColor);
const borderColor = ref<string>(props.borderColor);
const inputWidth = ref<string>(props.width);
const inputHeight = ref<string>(props.height);

const inputValue = computed({
  get() {
    return props.value;
  },
  set(val: string) {
    emit("updateVal", val);
  },
});
</script>

<style lang="less" scoped>
.rs-input-box {
  display: flex;
  align-items: center;

  .rs-icon-box {
    // width: 50px;
    margin-right: 10px;
  }

  .label-box {
    width: 80px !important;
  }

  .input {
    width: v-bind(inputWidth);
    height: v-bind(inputHeight);
    background-color: v-bind(bgColor);
    border-width: 1px;
    border-color: v-bind(bgColor);
    border-style: dotted;
  }

  .input:focus {
    background: none;
    outline: none;
    border: 0px;
    border-width: 1px;
    border-color: v-bind(borderColor);
    border-style: dotted;
  }
}
</style>
