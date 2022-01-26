<template>
  <div :class="titleClass">
    <RsInput
      :show-icon="true"
      :backgroundColor="bgColor"
      :border-color="borderColor"
      :icon-color="color"
      :icon-name="iconName"
      :value="title"
      :width="width"
      :height="toolFontSize"
      fontWeight="bold"
      :style="{ color: color, fontSize: fontSize }"
      :size="props.size"
    ></RsInput>

    <div :class="toolBoxClass" v-if="showTool">
      <!-- <a-tooltip>
        <template #title>调整标题样式</template>
        <SettingOutlined v-if="props.showSet" @click="btnClick('setting')" />
      </a-tooltip> -->
      <a-tooltip>
        <template #title>删除一条记录</template>
        <MinusSquareOutlined @click="btnClick('delete')" />
      </a-tooltip>

      <a-tooltip>
        <template #title>添加一条记录</template>
        <PlusSquareOutlined @click="btnClick('add')" />
      </a-tooltip>

      <a-tooltip>
        <template #title>移除该模块</template>
        <DeleteOutlined v-if="props.showDelete" @click="btnClick('remove')" />
      </a-tooltip>
    </div>
  </div>
  <a-divider
    v-if="props.titleType == 'title-04'"
    style="height: 2px; background-color: black; margin: 8px 0"
  />
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, ref } from "vue";
import {
  DeleteOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import RsInput from "../input/RsInput.vue";
import { useStore } from "vuex";

const props = defineProps({
  /**标题背景颜色 */
  backgroundColor: { type: String, default: "#062743" },
  /**标题背景颜色 是否可以更改 默认可以更改 随主题色变化 */
  backgroundColorChange: { type: Boolean, default: true },
  /**标题输入框的边框颜色 */
  borderColor: { type: String, default: "#fff" },
  /**图标的颜色 */
  iconColor: { type: String, default: "black" },
  /**图标的名字 */
  iconName: { type: String, default: "icon-youxiang" },
  /**标题名 */
  title: { type: String, default: "标题" },
  /**是否展示工具栏 */
  showTool: { type: Boolean, default: true },
  /**字体颜色 */
  color: { type: String, default: "white" },
  /**字体大小 */
  fontSize: { type: String, default: "16px" },
  /**标题的大小 */
  size: { type: String, default: "normal" },
  /**标题的样式 */
  titleType: { type: String, default: "title-01" },
  /**是否展示删除按钮图标 */
  showDelete: { type: Boolean, default: true },
  /**是否展示设置图标 */
  showSet: { type: Boolean, default: true },
});

const store = useStore();

/**
 * input输入框的背景颜色 如果设置可变 背景颜色随主题颜色变化
 */
const bgColor = computed(() =>
  props.backgroundColorChange
    ? store.state.app.themeColor
    : props.backgroundColor
);

const titleStyle = ref<string>("");
/**
 * 标题的样式
 */
const titleClass = computed(() => {
  if (titleStyle.value == "") {
    return props.titleType;
  } else {
    return titleStyle.value;
  }
});

/**
 * 工具栏的样式 如果无背景的标题 工具栏样式默认不可见（白色） 反之（颜色与背景保持一致）
 */
const toolBoxClass = computed(() => {
  if (props.titleType == "title-04") {
    return "btn-box-no-bgcolor";
  } else {
    return "btn-box";
  }
});
/**
 * 工具栏的图标颜色 hover之后的颜色
 */
const toolBoxColor = computed(() =>
  props.backgroundColorChange ? "#fff" : "black"
);

/**
 * 输入框的宽度
 */
const width = computed(() => {
  if (props.size == "small") {
    return "80px";
  } else if (props.size == "normal") {
    return "120px";
  } else if (props.size == "large") {
    return "200px";
  }
});

/**
 * 标题的高度
 */
const titleHight = computed(() => {
  if (props.size == "small") {
    return "30px";
  } else if (props.size == "normal") {
    return "40px";
  } else if (props.size == "large") {
    return "50px";
  }
});

/**
 * 工具栏的字体大小 输入框高度也使用此高度
 */
const toolFontSize = computed(() => {
  if (props.size == "small") {
    return "23px";
  } else if (props.size == "normal") {
    return "30px";
  } else if (props.size == "large") {
    return "40px";
  }
});
const emit = defineEmit({
  btnClick: (value: string) => Boolean,
});
const btnClick = (btnname: string) => {
  if (btnname == "setting") {
    titleStyle.value = "title-04";
    return;
  } else {
    emit("btnClick", btnname);
  }
};
</script>

<style lang="less" scoped>
.title-01 {
  background-color: v-bind(bgColor);
  width: 100%;
  height: v-bind(titleHight);
  //   line-height: 30px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-box {
  padding-right: 25px;
  color: v-bind(bgColor);
  display: flex;
  font-size: v-bind(toolFontSize);
  gap: 10px;
}
.btn-box:hover {
  color: v-bind(toolBoxColor);
  cursor: pointer;
}

.btn-box-no-bgcolor {
  padding-right: 25px;
  color: #fff;
  display: flex;
  font-size: v-bind(toolFontSize);
  gap: 10px;
}

.btn-box-no-bgcolor:hover {
  color: black;
  cursor: pointer;
}

.title-02 {
  background-color: v-bind(bgColor);
  width: 100%;
  height: v-bind(titleHight);
  border-radius: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-03 {
  background-color: v-bind(bgColor);
  width: 100%;
  height: v-bind(titleHight);
  display: flex;
  align-items: center;
  justify-content: space-between;
  //box-shadow: 6px 6px 3px rgb(228, 178, 102);
}

.title-04 {
  width: 100%;
  height: v-bind(titleHight);
  display: flex;
  align-items: center;
  justify-content: space-between;
  //box-shadow: 6px 6px 3px rgb(228, 178, 102);
}
</style>
