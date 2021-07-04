<template>
  <div class="panel-box" @mouseenter="canEdit" @mouseleave="noEdit">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  defineEmit,
  defineProps,
} from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  name: "panel",
  props: {
    edit: { type: Boolean, default: false },
    bgColor: { type: String, default: "white" },
  },
  setup(props, context) {
    const edit = ref<Boolean>(props.edit);
    const bgColor = ref<string>(props.bgColor);
    const canEdit = () => {
      context.emit("changEditState", true);
    };

    const noEdit = () => {
      //   edit.value = false;
      // emit("update:edit", false);
      context.emit("changEditState", false);
    };

    return { edit, canEdit, noEdit };
  },
});
</script>

<style lang="less" scoped>
.panel-box {
  width: 100%;

  background-color: v-bind(bgColor);
}
</style>
