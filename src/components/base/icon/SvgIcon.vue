<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
});

const iconName = computed((): string => `#icon-${props.name}`);
const svgClass = computed((): string => {
  if (props.color) {
    return `svg-icon icon-${props.name}`;
  } else {
    return "svg-icon";
  }
});

const iconColor = computed(() => props.color);
</script>

<style lang="less" scoped>
.svg-icon {
  width: 25px;
  height: 25px;
  fill: v-bind(iconColor);
  vertical-align: middle;
}
</style>
