<template>
  <div class="remove-drag-box">
    <VueDraggableNext
      v-model="list1"
      :group="{ name: 'people', pull: 'clone', put: true }"
      :sort="true"
      @change="log"
      :move="checkMove"
      style="width: 100%; height: 100%"
    >
      <transition-group>
        <div v-for="element in list1" :key="element">
          <Drag :component-name="element.componentName"></Drag>
        </div>
      </transition-group>
    </VueDraggableNext>
    <div class="icon-box">
      <rs-svg-icon name="deleteIcon" :showTool="false" color="#f85d5d">
      </rs-svg-icon>
      拖放到此删除
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import Drag from "./Drag.vue";

const list1 = ref<any[]>([]);
const emit = defineEmit({
  removeComponent: (name: string) => Boolean,
});
const checkMove = (event: any) => {
  console.log("checkMove", event.draggedContext);
  console.log("Future index: " + event.draggedContext.futureIndex);
};

const log = (evt: EventTarget) => {
  list1.value = [];
  const name = evt.added.element.componentName || "";
  emit("removeComponent", name);
};
</script>

<style lang="less" scoped>
.remove-drag-box {
  width: 150px;
  height: 150px;
  position: fixed;
  right: 0;
  bottom: 0;

  border-top-left-radius: 100%;
  border-left: 1px #e2e1e1 solid;
  border-top: 1px #e2e1e1 solid;
  box-shadow: -2px -2px 5px #888888;
  display: flex;
  flex-direction: column;

  .icon-box {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 60px 10px 40px 30px;
    display: flex;
    flex-direction: column;
  }
}
</style>
