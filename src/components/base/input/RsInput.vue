<template>
  <div class="rs-input-box">
    <rs-svg-icon
      :name="iconName"
      :color="iconColor"
      :width="iconWidth"
      class="rs-icon-box"
      v-if="props.showIcon"
    ></rs-svg-icon>
    <input class="rs-input label-box" v-if="props.showTitle" v-model="title" />

    <input class="rs-input" v-model="inputValue" />
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { computed, defineEmit, defineProps, reactive, ref } from "vue";
import RsIcon from "../icon/RsIcon.vue";
import SvgIcon from "../icon/SvgIcon.vue";

const props = defineProps({
  /**input输入框的值 */
  value: { type: String, default: "" },
  /**input输入框的背景颜色 */
  backgroundColor: { type: String, default: "#fff" },
  /**input输入框的边框颜色 */
  borderColor: { type: String, default: "#fff" },
  /**输入框前面的图标名字 */
  iconName: { type: String, default: "star" },
  /**输入框前面的图标大小 */
  iconSize: { type: String, default: "30px" },
  /**输入框前面的图标颜色 */
  iconColor: { type: String, default: "black" },
  /**输入框的宽度 */
  width: { type: String, default: "120px" },
  /**输入框的高度 */
  height: { type: String, default: "30px" },
  /**是否展示图标 */
  showIcon: { type: Boolean, default: false },
  /**是否展示标签 */
  showTitle: { type: Boolean, default: false },
  /**标签的值 */
  title: { type: String, default: "标题" },
  /**字体是否加粗 */
  fontWeight: { type: String, default: "normal" },
  /**输入框的大小 */
  size: { type: String, default: "normal" },
});

const emit = defineEmit({
  updateVal: (value: String) => Boolean,
});

const bgColor = computed(() => props.backgroundColor);
const borderColor = computed(() => props.borderColor);
const inputWidth = ref<string>(props.width);
const inputHeight = computed(() => props.height);
const iconFontSize = ref<string>(props.iconSize);
const inputFontWeight = ref<string>(props.fontWeight);

const inputValue = computed({
  get() {
    return props.value;
  },
  set(val: string) {
    console.log(val, "set");

    emit("updateVal", val);
  },
});

const iconWidth = computed(() => {
  if (props.size == "small") {
    return "23px";
  } else if (props.size == "normal") {
    return "30px";
  } else {
    return "40px";
  }
});
</script>

<style lang="less" scoped>
.rs-input-box {
  display: flex;
  align-items: center;

  .rs-icon-box {
    // width: 50px;
    margin-right: 3px;
    margin-left: 5px;
    // margin-bottom: 4px;
    margin-top: 5px;
  }

  .label-box {
    width: 40px !important;
  }

  .rs-input {
    font-weight: v-bind(inputFontWeight);
    width: v-bind(inputWidth);
    height: v-bind(inputHeight);
    background-color: v-bind(bgColor);
    border-width: 1px;
    border-color: v-bind(bgColor);
    border-style: dotted;
  }

  .rs-input:focus {
    background: none;
    outline: none;
    border: 0px;
    border-width: 1px;
    border-color: v-bind(borderColor);
    border-style: dotted;
  }
}
</style>
