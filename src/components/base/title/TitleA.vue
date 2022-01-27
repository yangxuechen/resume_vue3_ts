<template>
  <div class="title">
    <input type="text" v-model="title" class="input_1 info-title" />
    <div class="tool" v-if="showTool">
      <PlusSquareOutlined @click="btnClick('add')" />
      <MinusSquareOutlined @click="btnClick('delete')" />
    </div>
  </div>
  <a-divider style="height: 2px; background-color: black; margin: 8px 0" />
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps } from "@vue/runtime-core";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  title: { type: String, default: "基本信息" },
  bgColor: { type: String, default: "white" },
  /**是否展示工具栏 */
  showTool: { type: Boolean, default: true },
});

const title = computed(() => {
  return props.title;
});

const bgColor = computed(() => {
  return props.bgColor;
});
const emit = defineEmit({
  btnClick: (value: string) => Boolean,
});
const btnClick = (btnname: string) => {
  emit("btnClick", btnname);
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}

.input_1 {
  // background-color: #69695a;
  background-color: v-bind(bgColor);
  width: 120px;
  height: 20px;
  border-width: 0ch;
  text-align: left;

  // border-color: #dededd;
  border-color: v-bind(bgColor);
  border-width: 1px;
  border-style: dotted;
  color: black;
}

.input_1:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}

.info-title {
  height: 40px;
  font-size: 16px;
  font-weight: bolder;
}

.tool {
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  color: v-bind(bgColor);
  font-size: 30px;
}

.tool:hover {
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  color: var(--rs-bgcolor-1);
  font-size: 30px;
}
</style>
